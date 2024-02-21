---
sidebar_position: 3
---

import PoolInstantVis from "@site/src/components/Visualizations/PoolInstantVis";
import PoolStreamVis from "@site/src/components/Visualizations/PoolStreamVis";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ThemedImage from '@theme/ThemedImage';


# Distributions

The introduction of Distributions marks a significant advancement in DeFi applications, offering a scalable method for one-to-many fund transfers.
Distributions allow for the transfer of value to multiple recipients with minimal on-chain data modification, making them infinitely scalable, highly efficient and gas-friendly.

:::note
There are other on-chain solutions that may seem to solve this problem without using a new token implementation (e.g [Disperse App](https://disperse.app/)).
While these solutions can be great for a low amount of recipients, they are not infinitely scalable and can become very expensive as the number of recipients increases. Furthermore, they do not allow for distributing money streaming
:::

## Overview

Distributions function by allowing for the creation of **pools** with a designated **pool admin** who manages **units** for **pool members**. Members of these pools can receive funds either instantly or through continuous streaming, making this method highly efficient and scalable. There are two types of Distributions:

- **Instant Distributions**: They allow one transaction distribution to any number of receivers with a fixed gas cost.
- **Streaming Distributions**: They allow for continuous distribution of funds to receivers through [Money Streaming](./money-streaming.mdx) to a Pool.

---
<Tabs defaultValue="instant" values={[
  { label: 'Instant Distribution', value: 'instant' },
  { label: 'Streaming Distribution', value: 'streaming' },
]}>
<TabItem value="instant">

**Instant Distributions** allow one transaction to distribute to any number of receivers with a fixed gas cost.

<div style={{ display: "flex", justifyContent: "center" }}>
  *Click on the Blue Circle to initiate an Instant Distribution*
  <br />
</div>
<PoolInstantVis />
<div style={{ display: "flex", justifyContent: "center" }}>
  <p>
    *By creating a Distribution Pool, you can distribute any token instantly*
  </p>
</div>

  </TabItem>
  <TabItem value="streaming">

**Instant Distributions** allow for continuous distribution of funds to receivers through [Money Streaming](./money-streaming.mdx) to a Pool.

<div style={{ display: "flex", justifyContent: "center" }}>
  *Watch how the continuous stream gets distributed automatically through the pool*
  <br />
</div>
<PoolStreamVis />
<div style={{ display: "flex", justifyContent: "center" }}>
  <p>
    *By creating a Distribution Pool, you can distribute any stream with no gas cost*
  </p>
</div>

  </TabItem>
  
</Tabs>

---

### Definitions

- **Pool**: A channel for proportional token distribution.
- **Distribution**: The action of allocating specified token amounts to receivers.
- **Units**: Represent the proportion of the distribution each subscriber receives.
- **Pool Admin**: The administrator of the distribution process.
- **Subscribers/Pool Member**: Receivers allocated units and eligible to receive tokens through the Index.

### Key Features

- **Pools as Contracts**: Unlike previous approaches, pools in streaming distributions are contracts and can be ERC20 tokens. This allows pool members to transfer units among themselves, which wasn't possible earlier.
- **Roles and Permissions**: A pool admin can grant and revoke units, while any account can act as a **distributor** to execute fund distributions.
- **Distribution Methods**: There are two primary ways to distribute funds:
  - **Instant Distribution**: Calculated as `distributionAmount * (poolMemberUnits / poolTotalUnits)`.
  - **Streaming Distribution**: Determined by `poolFlowRate * (poolMemberUnits / poolTotalUnits)`.
- **Gas Efficiency**: The cost of executing distributions remains constant, regardless of the number of pool members.

### High-Level Workflow

1. **Pool Creation**: Any account can create a pool and appoint a pool admin. This pool acts as a channel for distributing funds.
2. **Unit Management**: The pool admin assigns units to members, representing their share in future distributions.
3. **Member Connection**: Pool members can connect to or disconnect from the pool, affecting how they access distributed funds.
4. **Distribution Execution**: Distributors can initiate either instant or streaming distributions, which are then divided among pool members based on their unit share.

## Distribution Examples

### Streaming Distribution Illustration

This diagram shows a distributor streaming funds to various pool members, each holding different unit amounts. Note: A single transaction can cater to multiple members.

<div style={{ display: "flex", justifyContent: "center" }}>
![Streaming Distribution](/assets/streaming-distribution-light.png)
</div>


### Adjusting Unit Counts

Here, a distributor modifies unit counts for members. This change instantly alters the distribution rate for all members in one transaction. Batch updates can be done using Superfluid's batch call.

<div style={{ display: "flex", justifyContent: "center" }}>
![Unit Count Adjustment](/assets/unit-count-adjustment.png)
</div>

### Modifying the Flow Rate

This example demonstrates how a change in the distributor's streaming rate affects the total flow rate of the pool, thus instantly impacting each member's rate.

<div style={{ display: "flex", justifyContent: "center" }}>
![Flow Rate Change](/assets/modify-flow-rate.png)
</div>

## Advanced Pool Features

As pools are also ERC20 tokens, they enable:

- **Transfer of Units**: Pool members can freely transfer their units.
- **Delegated Transfers**: Using the `approve` and `transferFrom` functions, units can be transferred on behalf of a member.

These features add composability and flexibility, expanding the potential use cases for pools in web3.
