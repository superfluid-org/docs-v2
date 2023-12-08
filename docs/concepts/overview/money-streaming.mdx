---
sidebar_position: 2
---
import Admonition from '@theme/Admonition';

# Money Streaming

## Definition

Money Streaming is a process where tokens are continuously transferred from a sender to a receiver at a defined per-second rate. The result of this process is a "stream". A stream is perpetual and will continue until canceled by the sender/the receiver or the sender's Super Token balance is depleted.

## **Terminology**

- **Flow Rate**: The rate at which the sender's balance decreases and the receiver's increases per second.
- **Netflow Rate**: The rate of change of an account's Super Token balance per second.
- **Sender**: The account initiating the stream, specifying a receiver and flow rate.
- **Receiver**: The account on the receiving end of a stream.
- [**CRUD Timestamp**](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete): The timestamp when a stream is created, updated, or deleted.
- **Real-Time Balance**: The change in the account's Super Token balance since the last CRUD action.
- **Static Balance**: The Super Token balance at the last CRUD timestamp.
- **Current Balance**: The sum of Static Balance and Streaming Real-Time Balance.

<Admonition type="info">
<strong>NOTE</strong>: Flow rates are per second but can be represented in different time units for convenience. For example, "100 USDCx/mo." is approximately "0.0039 USDCx/sec."
</Admonition>

## Computation

The netflow for an account is calculated by netting its inbound and outbound streaming flow rates.

<div style={{ display: "flex", justifyContent: "center" }}>
  ![Netflow Calculation](/assets/image_(63).png)
</div>
<div style={{ display: "flex", justifyContent: "center" }}>
  <p>*Example of Net Flow calculation*</p>
</div>

When a stream is modified, the following are updated in the Superfluid contracts:

1. New Netflow rate
2. New CRUD timestamp
3. New Static Balance: set to the Current Balance at the CRUD timestamp
4. Real-Time Balance reset to zero

The Real-Time Balance then adjusts by-the-second at the netflow rate.

<div style={{ display: "flex", justifyContent: "center" }}>
  ![Streaming Real-Time Balance](/assets/image_(50)_(1).png)
</div>
<div style={{ display: "flex", justifyContent: "center" }}>
  <p>*Streaming Real-Time Balance*</p>
</div>

<Admonition type="info">
<strong>NOTE</strong>: Creating a stream is a one-time action. The balance is dynamically calculated and does not require continuous transactions.
</Admonition>

## **Formula**

- **Static Balance**: Initial balance at the latest CRUD timestamp
- **Real-Time Balance**: Netflow Rate * Seconds since the latest CRUD timestamp
- **Current Balance**: Static Balance + Real-Time Balance

## Example - Monitoring Account A's Current Balance

Let's examine how Account A's balance changes with stream interactions.

#### **1. Starting an Outbound Stream**

<div style={{ display: "flex", justifyContent: "center" }}>
  ![Outbound Stream](/assets/image_(50)_(1)_(1).png)
</div>
<div style={{ display: "flex", justifyContent: "center" }}>
  <p>*Outbound Stream*</p>
</div>

- Initial Balance: 1000 USDCx
- Flow Rate to Account B: 0.01 USDCx/sec
- Time Elapsed: 1000 seconds
- **Current Balance**: 990 USDCx

#### **2. Increasing the Flow Rate**



<div style={{ display: "flex", justifyContent: "center" }}>
  ![Flow Rate Increase](/assets/image_(60).png)
</div>
<div style={{ display: "flex", justifyContent: "center" }}>
  <p>*Flow Rate Increase*</p>
</div>

- Static Balance: 990 USDCx
- New Flow Rate: 0.02 USDCx/sec
- **Current Balance**: 990 USDCx

#### **3. Time Elapse Post Flow Rate Change**

<div style={{ display: "flex", justifyContent: "center" }}>
  ![Time Elapse](/assets/image_(59)_(1).png)
</div>
<div style={{ display: "flex", justifyContent: "center" }}>
  <p>*Time Elapse*</p>
</div>

- Time Elapsed: 2000 seconds
- **Current Balance**: 950 USDCx

#### **4. Receiving an Inbound Stream**

<div style={{ display: "flex", justifyContent: "center" }}>
    ![Inbound Stream](/assets/image_(57).png)
</div>
<div style={{ display: "flex", justifyContent: "center" }}>
    <p>*Inbound Stream*</p>
</div>

- Inbound Flow Rate from Account C: 0.04 USDCx/sec
- **Current Balance**: 950 USDCx

#### **5. Post Inbound Stream Time Elapse**

<div style={{ display: "flex", justifyContent: "center" }}>
    ![Post Inbound Stream](/assets/image_(39).png)
</div>
<div style={{ display: "flex", justifyContent: "center" }}>
    <p>*Post Inbound Stream*</p>
</div>

- Time Elapsed: 1000 seconds
- **Current Balance**: 970 USDCx

#### **6. Deleting the Outbound Stream**

<div style={{ display: "flex", justifyContent: "center" }}>
    ![Deleting Outbound Stream](/assets/image_(38).png)
</div>
<div style={{ display: "flex", justifyContent: "center" }}>
    <p>*Deleting Inbound Stream</p>
</div>

- Static Balance: 970 USDCx
- **Current Balance**: 970 USDCx

## Other Considerations

#### Discrete Actions and Active Streams

Transferring, wrapping, or unwrapping Super Tokens, being lump-sum actions, only affect the Static Balance and not the Real-Time Balance.

#### Interaction with Distributions 

Actions within Distributions have their own Real-Time Balance and are added separately to the overall account balance.

## Solvency and Sentinels

Accounts with negative net flow rates reaching zero balance are considered **critical**. Superfluid handles this with buffer deposits and Sentinels.

### Buffer

Buffer deposits are taken when opening a stream, serving as a reserve in case of a critical balance. If a stream is closed before hitting critical, the buffer is refunded. In cases where the account becomes critical, the buffer is used to continue outbound streams until Sentinels intervene.

### Sentinels

Sentinels are external actors who monitor Constant Flow Agreements (Money Streaming), close streams of critical accounts, and earn buffer deposits.

_For more details, see the [Liquidations](/docs/protocol/advanced-topics/solvency/liquidations-and-toga.mdx) and [Sentinels](/docs/protocol/advanced-topics/solvency/running-a-sentinnel.mdx) pages._
