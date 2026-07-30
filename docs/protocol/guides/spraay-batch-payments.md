# Complete DAO Payments with Superfluid Streams + Spraay Batch Payouts

## Introduction

Superfluid handles **continuous payments** — salaries, subscriptions, and vesting that stream by the second.
But DAOs, crypto-native teams, and agent-driven treasuries also need **one-time bulk distributions**:
bonuses, grant disbursements, retroactive airdrops, vendor invoices, and multi-chain settlements.

[Spraay](https://spraay.app) is a multi-chain batch payment protocol with an x402/MPP-enabled gateway
that executes these lump-sum payouts across 13+ EVM and non-EVM chains. Together, Superfluid + Spraay
cover the full payment lifecycle — streaming where continuous flow makes sense, batching where discrete
settlement is required.

**What you will build (≈ 20 minutes):**

A TypeScript module that:

1. Reads active Superfluid streams for a given sender (the DAO treasury).
2. Computes a one-time bonus (e.g., 10 % of total streamed value) for each recipient.
3. Submits those bonuses as a single Spraay batch transaction on Base.

By the end, you will have a reusable script that any treasury multisig or agent can call to
complement Superfluid streams with periodic batch payouts.

## Prerequisites

| Requirement | Details |
|---|---|
| Node.js | v18+ |
| Package manager | npm or yarn |
| Wallet | A funded wallet on **Base** (for the batch payout) |
| Superfluid streams | At least one active outgoing stream on Base (testnet or mainnet) |
| Spraay API key | Free tier available at [gateway.spraay.app](https://gateway.spraay.app) |

Install dependencies:

```bash
npm install @sfpro/sdk viem wagmi @spraay/sdk dotenv
```

> **Note:** If you don't have active streams, you can use the Superfluid Dashboard to create
> a test stream on Base Sepolia before running this guide.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   DAO Treasury Wallet                    │
│                                                         │
│   ┌─────────────────┐       ┌─────────────────────┐    │
│   │   Superfluid     │       │      Spraay          │    │
│   │   (Streaming)    │       │   (Batch Payouts)    │    │
│   │                  │       │                      │    │
│   │  Salary: $5k/mo  │       │  Bonus: $500 each    │    │
│   │  per second ──►  │       │  one tx ──►          │    │
│   │                  │       │  50 recipients        │    │
│   └────────┬─────────┘       └──────────┬───────────┘    │
│            │                            │                │
│            ▼                            ▼                │
│   Continuous USDCx flow          Single batch tx         │
│   (CFA / GDA)                    (multi-recipient)       │
└─────────────────────────────────────────────────────────┘
```

**When to use Superfluid:** Recurring, continuous obligations — salaries, subscriptions, vesting.

**When to use Spraay:** Discrete, one-time distributions — bonuses, grants, airdrops, invoice settlements, retroactive rewards.

## Step 1 — Set Up Environment

Create a `.env` file:

```env
# Your wallet private key (sender / treasury)
PRIVATE_KEY=0x...

# Spraay Gateway
SPRAAY_GATEWAY=https://gateway.spraay.app
SPRAAY_API_KEY=your_api_key_here

# Chain config (Base mainnet)
CHAIN_ID=8453
RPC_URL=https://mainnet.base.org

# The Super Token you stream (USDCx on Base)
SUPER_TOKEN_ADDRESS=0xD04383398dD2426297da660F9CCA3d439AF31b1b

# Your treasury address (the stream sender)
TREASURY_ADDRESS=0x...
```

## Step 2 — Query Active Superfluid Streams

Use the Superfluid Subgraph to fetch all outgoing streams from your treasury:

```typescript
// src/fetchStreams.ts
import { createPublicClient, http } from "viem";
import { base } from "viem/chains";

const SUBGRAPH_URL =
  "https://subgraph-endpoints.superfluid.dev/base-mainnet/protocol-v1";

interface Stream {
  receiver: string;
  currentFlowRate: string; // wei per second
  streamedUntilUpdatedAt: string;
  updatedAtTimestamp: string;
}

export async function fetchActiveStreams(
  sender: string,
  superToken: string
): Promise<Stream[]> {
  const query = `{
    streams(
      where: {
        sender: "${sender.toLowerCase()}"
        token: "${superToken.toLowerCase()}"
        currentFlowRate_gt: "0"
      }
    ) {
      receiver { id }
      currentFlowRate
      streamedUntilUpdatedAt
      updatedAtTimestamp
    }
  }`;

  const res = await fetch(SUBGRAPH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const { data } = await res.json();

  return data.streams.map((s: any) => ({
    receiver: s.receiver.id,
    currentFlowRate: s.currentFlowRate,
    streamedUntilUpdatedAt: s.streamedUntilUpdatedAt,
    updatedAtTimestamp: s.updatedAtTimestamp,
  }));
}
```

## Step 3 — Calculate Bonus Amounts

Compute how much each recipient has received via their stream, then derive a bonus:

```typescript
// src/calculateBonuses.ts

interface Stream {
  receiver: string;
  currentFlowRate: string;
  streamedUntilUpdatedAt: string;
  updatedAtTimestamp: string;
}

interface BonusRecipient {
  address: string;
  totalStreamed: bigint;
  bonusAmount: bigint;
}

/**
 * For each active stream, calculate the total amount streamed to date
 * and apply a bonus percentage.
 *
 * @param streams - Active Superfluid streams
 * @param bonusPercentage - e.g., 10 for 10%
 * @returns Array of recipients with their bonus amounts
 */
export function calculateBonuses(
  streams: Stream[],
  bonusPercentage: number = 10
): BonusRecipient[] {
  const now = BigInt(Math.floor(Date.now() / 1000));

  return streams.map((stream) => {
    const flowRate = BigInt(stream.currentFlowRate);
    const updatedAt = BigInt(stream.updatedAtTimestamp);
    const streamedBefore = BigInt(stream.streamedUntilUpdatedAt);

    // Total streamed = previously streamed + (flowRate × elapsed seconds)
    const elapsed = now - updatedAt;
    const totalStreamed = streamedBefore + flowRate * elapsed;

    // Bonus = totalStreamed × bonusPercentage / 100
    const bonusAmount = (totalStreamed * BigInt(bonusPercentage)) / 100n;

    return {
      address: stream.receiver,
      totalStreamed,
      bonusAmount,
    };
  });
}
```

## Step 4 — Execute Batch Payout via Spraay

Send all bonuses in a single transaction through Spraay's batch payment endpoint:

```typescript
// src/executeBatchPayout.ts
import "dotenv/config";

interface BonusRecipient {
  address: string;
  totalStreamed: bigint;
  bonusAmount: bigint;
}

interface SpraayBatchRequest {
  recipients: { address: string; amount: string }[];
  token: string;
  chain: string;
}

/**
 * Submit a batch payout via the Spraay Gateway.
 * This sends USDC (not USDCx) — the treasury should hold
 * both Super Tokens (for streams) and regular tokens (for batches).
 */
export async function executeBatchPayout(
  recipients: BonusRecipient[]
): Promise<any> {
  const gateway = process.env.SPRAAY_GATEWAY!;
  const apiKey = process.env.SPRAAY_API_KEY!;

  // Filter out zero-amount recipients
  const nonZero = recipients.filter((r) => r.bonusAmount > 0n);

  if (nonZero.length === 0) {
    console.log("No bonuses to distribute.");
    return null;
  }

  const payload: SpraayBatchRequest = {
    recipients: nonZero.map((r) => ({
      address: r.address,
      // Convert from wei (18 decimals) to USDC (6 decimals)
      amount: (r.bonusAmount / 10n ** 12n).toString(),
    })),
    token: "USDC",
    chain: "base",
  };

  console.log(
    `\nSending batch payout to ${nonZero.length} recipients on Base...`
  );
  console.log(
    "Recipients:",
    payload.recipients.map(
      (r) =>
        `${r.address.slice(0, 6)}...${r.address.slice(-4)}: ${(
          Number(r.amount) / 1e6
        ).toFixed(2)} USDC`
    )
  );

  const res = await fetch(`${gateway}/batch/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (res.ok) {
    console.log("\n✅ Batch payout submitted!");
    console.log("Transaction hash:", result.txHash);
  } else {
    console.error("\n❌ Batch payout failed:", result);
  }

  return result;
}
```

## Step 5 — Put It All Together

```typescript
// src/index.ts
import "dotenv/config";
import { fetchActiveStreams } from "./fetchStreams";
import { calculateBonuses } from "./calculateBonuses";
import { executeBatchPayout } from "./executeBatchPayout";

async function main() {
  const treasury = process.env.TREASURY_ADDRESS!;
  const superToken = process.env.SUPER_TOKEN_ADDRESS!;

  console.log("=== Superfluid + Spraay: DAO Bonus Distribution ===\n");

  // 1. Fetch all active salary streams
  console.log(`Fetching active streams from ${treasury.slice(0, 10)}...`);
  const streams = await fetchActiveStreams(treasury, superToken);
  console.log(`Found ${streams.length} active stream(s).\n`);

  if (streams.length === 0) {
    console.log("No active streams found. Nothing to do.");
    return;
  }

  // 2. Calculate 10% bonus based on total streamed
  const bonuses = calculateBonuses(streams, 10);

  console.log("Bonus calculations:");
  for (const b of bonuses) {
    const totalUSDC = Number(b.totalStreamed / 10n ** 12n) / 1e6;
    const bonusUSDC = Number(b.bonusAmount / 10n ** 12n) / 1e6;
    console.log(
      `  ${b.address.slice(0, 10)}... → Streamed: $${totalUSDC.toFixed(
        2
      )} → Bonus: $${bonusUSDC.toFixed(2)}`
    );
  }

  // 3. Execute batch payout via Spraay
  await executeBatchPayout(bonuses);

  console.log("\n=== Complete ===");
  console.log(
    "Superfluid continues streaming salaries. Spraay handled the batch bonus."
  );
}

main().catch(console.error);
```

## Output

When you run the script:

```
=== Superfluid + Spraay: DAO Bonus Distribution ===

Fetching active streams from 0xAd62f03C...
Found 5 active stream(s).

Bonus calculations:
  0xRecipie... → Streamed: $4,200.00 → Bonus: $420.00
  0xAnotherR... → Streamed: $3,100.00 → Bonus: $310.00
  0xThirdRe... → Streamed: $2,800.00 → Bonus: $280.00
  0xFourthR... → Streamed: $1,500.00 → Bonus: $150.00
  0xFifthRe... → Streamed: $900.00 → Bonus: $90.00

Sending batch payout to 5 recipients on Base...

✅ Batch payout submitted!
Transaction hash: 0x...abc123

=== Complete ===
Superfluid continues streaming salaries. Spraay handled the batch bonus.
```

## Extending This Pattern

This guide demonstrates the simplest integration, but the pattern extends naturally:

| Use Case | Superfluid Handles | Spraay Handles |
|---|---|---|
| **DAO Payroll** | Monthly salary streams | Quarterly bonuses, expense reimbursements |
| **Grant Programs** | Milestone-based vesting streams | Initial disbursement, final settlement |
| **Agent Operations** | Subscription fees for APIs | Pay-per-task via x402 micropayments |
| **Protocol Revenue** | Revenue sharing streams to stakers | Retroactive airdrops to contributors |
| **Multi-chain Treasury** | Streams on a single chain | Cross-chain batch settlements (13+ chains) |

### x402 Agent Payments

Spraay also supports the [x402 payment protocol](https://www.x402.org/), enabling AI agents to
pay for API access with stablecoins using standard HTTP 402 responses. Combined with Superfluid
streams for ongoing agent subscriptions, this creates a complete financial stack for autonomous agents.

## Resources

- [Superfluid Documentation](https://docs.superfluid.finance)
- [Superfluid SDK](https://sdk.superfluid.pro)
- [Spraay Gateway API](https://docs.spraay.app)
- [Spraay GitHub](https://github.com/plagtech)
- [x402 Protocol](https://www.x402.org/)
- [Base Network](https://base.org)
