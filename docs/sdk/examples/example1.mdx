---
sidebar_position: 1
---

# Rewards Distribution Using Macros

This guide will walk you through creating a web application that enables
streaming reward distributions using Superfluid's [Distribution Pools](/docs/protocol/distributions/overview) and Macro for [Batching Calls](/docs/sdk/advanced-topics/batch-calls).

:::tip
If you want to see the full example, you can check it out in the [Github Repository](https://github.com/superfluid-finance/rewards-macro-example).
:::

## Overview

The application we'll build allows users to:
- Connect their wallet and validate network
- Select a Superfluid pool
- Add multiple recipients with their respective units
- Set a flow rate for rewards
- Execute all operations in a single transaction

## Prerequisites

Before starting, ensure you have:
- Basic knowledge of React and TypeScript
- Node.js installed
- A Web3 wallet (like MetaMask)
- Some ETH on Optimism Sepolia network

## Setting Up the Project

1. Create a new Next.js project:
```bash
npx create-next-app@latest rewards-distribution --typescript --tailwind
cd rewards-distribution
```

2. Install dependencies:
```bash
npm install ethers@6 @superfluid-finance/sdk-core
```

3. Install UI components:
```bash
npx shadcn-ui@latest init
```

## Understanding the Core Concepts

### Superfluid Distribution Pools

[Distribution Pools](/docs/protocol/distributions/overview) allow for proportional distribution of streaming tokens. Think of it as a smart contract that:
- Manages a pool of tokens
- Distributes streams based on units assigned to recipients
- Handles all the complex token streaming logic

:::tip
To deploy a Distribution Pool, you can use the [GDAv1Forwarder](/docs/technical-reference/GDAv1Forwarder).
:::

### Superfluid Macros

[Macros](/docs/sdk/advanced-topics/batch-calls) allow us to batch multiple operations into a single transaction. In our case, we're using:
- `MacroForwarder`: Contract that executes our macro
- [`RewardsMacro`](https://github.com/superfluid-finance/rewards-macro-example/blob/main/contracts/RewardsMacro.sol): Our custom macro for setting up distributions

In our example, we deployed a [`RewardsMacro`](https://github.com/superfluid-finance/rewards-macro-example/blob/main/contracts/RewardsMacro.sol) contract on [OP Sepolia](https://optimism-sepolia.blockscout.com/address/0xA315e7EB0a278fac7B3a74DB895f5bf801EAb632?tab=contract) for the purposes of our example.

## Key Components

### 1. Network Management

First, we need to ensure users are on the correct network:

```typescript
const OP_SEPOLIA_CHAIN_ID = "0xaa37dc" // 11155420 in hex

const switchToOpSepolia = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: OP_SEPOLIA_CHAIN_ID }],
    });
    return true;
  } catch (switchError) {
    // Handle network switch error
  }
}
```

### 2. Pool Validation

We validate the pool address and check user's balance:

```typescript
const POOL_ABI = ["function superToken() external view returns (ISuperfluidToken)"]
const SUPER_TOKEN_ABI = ["function balanceOf(address account) external view returns (uint256)"]

const checkPoolAndBalance = async () => {
  const poolContract = new ethers.Contract(poolAddress, POOL_ABI, provider);
  const tokenAddress = await poolContract.superToken();
  const tokenContract = new ethers.Contract(tokenAddress, SUPER_TOKEN_ABI, provider);
  const balance = await tokenContract.balanceOf(userAddress);
  // Handle results
}
```

### 3. Reward Distribution Setup

The core functionality uses the RewardsMacro contract:

```typescript
const executeRewardsMacro = async () => {
  // Parse recipients and units
  const receivers = [...] // Array of addresses
  const units = [...] // Array of BigInts
  
  // Convert flow rate from tokens/day to wei/second
  const weiBigInt = ethers.parseEther(flowRatePerDay)
  const flowRateWeiPerSecond = weiBigInt / BigInt(86400)
  
  // Get macro parameters
  const params = await rewardsMacro.getParams(
    poolAddress,
    receivers,
    units,
    flowRateWeiPerSecond
  )
  
  // Execute through MacroForwarder
  await macroForwarder.runMacro(REWARDS_MACRO, params)
}
```

## User Interface

<div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src="/img/example-ui.png" alt="Example UI" width="600" />
</div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <p>*Screenshot of the UI*</p>
</div>

The UI is built with Tailwind CSS and shadcn/ui components. Key features include:
- Network status indicator
- Pool validation feedback
- Balance display
- Recipients input area
- Flow rate input with conversion

```typescript
<Card className="max-w-2xl mx-auto bg-gray-800">
  <CardHeader>
    <CardTitle>Reward Stream Distribution</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Network Check */}
    {/* Pool Input */}
    {/* Recipients Input */}
    {/* Flow Rate Input */}
    {/* Execute Button */}
  </CardContent>
</Card>
```

## Testing the Application

1. Deploy the contract and set up your pool
   - Deploy the `RewardsMacro` contract on your desired network (you can use the contract deployed on [OP Sepolia](https://optimism-sepolia.blockscout.com/address/0xA315e7EB0a278fac7B3a74DB895f5bf801EAb632?tab=contract))
   - Create your pool using the [GDAv1Forwarder](/docs/technical-reference/GDAv1Forwarder)
   - Ensure you use the correct Super Token for your pool (in our example, we used the [Super fake DAI](https://optimism-sepolia.blockscout.com/address/0x7f5c765057ef45c28ae624f7b77854c32c201422?tab=contract) Super Token)

2. Test the flow:
   - Connect wallet
   - Enter pool address
   - Add recipients
   - Set flow rate
   - Execute distribution

## Common Issues and Solutions

### Invalid Pool Address
```typescript
try {
  await poolContract.superToken()
} catch (e) {
  // Handle invalid pool
}
```

### Insufficient Balance
```typescript
if (Number(userBalance) === 0) {
  // Disable execution
  // Show warning
}
```

### Network Issues
```typescript
if (chainId !== OP_SEPOLIA_CHAIN_ID) {
  await switchToOpSepolia()
}
```

## Next Steps

Consider extending the application with:
- Multiple network support
- Distribution history
- Analytics dashboard