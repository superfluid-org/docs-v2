---
sidebar_position: 1
---

import GdaSuperVis from '@site/src/components/Visualizations/GdaSuperExampleVis';
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';

# Advertisement Auction DApp

This guide explores the development of a decentralized application (DApp) for an advertisement auction system, leveraging the capabilities of Superfluid's [Distribution Pools](docs/protocol/distributions/guides/pools.mdx) (also called the *General Distributions Agreement - GDA*).

## Overview

In the ever-evolving landscape of digital advertising, there's a need for more dynamic and efficient systems. Traditional models often involve complex, non-transparent payment structures and lack real-time interaction capabilities. Our DApp aims to address these challenges by using Distributions from Superfluid Protocol for seamless transactions and fair distribution of advertising revenues.

This example addresses the following Superfluid Protocol features:

- [Money Streaming](/docs/protocol/money-streaming/overview)
- [Distribution Pools](/docs/protocol/distributions/guides/pools)
- [Super Apps](/docs/protocol/advanced-topics/super-apps/deploy-a-super-app)

:::tip Check out the full codebase
For the complete implementation of the DApp, including the smart contract and foundry test, refer to the [GitHub repository](https://github.com/superfluid-finance/ad-auction-example).
:::

### The Problem

The main challenges in current digital advertising models include:

1. **Lack of Transparency**: Difficulty in tracking funds and understanding distribution mechanisms.
2. **Inefficient Payment Systems**: Cumbersome processes for handling and distributing advertising revenue.
3. **Static Advertisement Bidding**: Traditional models don't allow real-time bidding, leading to less engagement and fairness.


### Our Solution

Our DApp introduces a novel approach to advertisement auctioning:

- **Continuous Funds Stream**: Utilizing Superfluid's money streaming concept, funds flow continuously into a distribution pool.
- **Dynamic Advertisement Auctioning**: Advertisers bid for ad space in real-time through streaming payments, creating an engaging and fair auction system.
- **Proportional Distribution**: Funds are distributed between the DApp owner and previous advertisers based on their advertising duration, ensuring fair compensation.

<div style={{ display: 'flex', justifyContent: 'center' }}>
<GdaSuperVis/>
</div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <p>*Visualization of our advertisement auction app mechanism*</p>
</div>

:::note
In the visualization above we see how the previous streamer joins the pool to become a new member and get money streamed to him
:::

### Smart Contract Structure

The `AdSpotContract` is at the heart of our DApp, built on Ethereum and integrated with Superfluid Protocol. It encompasses:

- **Pool Creation and Management**: Facilities for users to create and administer distribution pools.
- **Auction Mechanism**: Mechanisms for real-time bidding and advertisement space allocation.
- **Fund Distribution Logic**: Automated and transparent distribution of funds between DApp owners and advertisers.
- **Superfluid Integration**: Leveraging Superfluid's GDA for efficient streaming of funds.

In the following sections, we'll delve deeper into each aspect of the DApp, providing insights into the smart contract functionalities, implementation guide, and UI/UX considerations.

<Admonition type="note">
This guide is intended for blockchain developers and assumes familiarity with Ethereum smart contract development and minimal familiarity with the concept of [Distribution Pools](/docs/protocol/distributions/guides/pools.mdx).
</Admonition>

## Smart Contract Implementation

The [`AdSpotContract`](https://github.com/superfluid-finance/ad-auction-example/blob/master/src/AdSpotContract.sol) plays a crucial role in our DApp, integrating Superfluid's streaming capabilities for an innovative advertisement auction system. Let's dive into the key components and functionalities of this smart contract.

### Contract Overview

This guide demonstrates how to use the Superfluid Protocol's [Distribution Pools](/docs/protocol/distributions/guides/pools.mdx) (also known as the GDA in our codebase) to develop a decentralized application (DApp) for advertisement auctioning. We'll walk through the key components of the `AdSpotContract`.

## Contract Initialization

The `AdSpotContract` is initialized with necessary Superfluid interfaces and parameters. Here's a look at the constructor:

```solidity
constructor(ISuperToken _acceptedToken)
    CFASuperAppBase(ISuperfluid(_acceptedToken.getHost()))
{
    // Contract initialization code
}
```

This constructor sets up the Superfluid context and initializes the fund distribution pool.

## Real-Time Auctioning Logic

The contract employs callback functions to manage auction logic. Here's an example of a callback function handling new flow creation:

```solidity
function onFlowCreated(
    ISuperToken /*superToken*/,
    address sender,
    bytes calldata ctx
) internal override returns (bytes memory newCtx) {
    // Logic for handling new flow creation
}
```

These functions are crucial for updating the highest bidder and managing the distribution of shares.

## NFT Showcase Feature

The contract also includes a feature for the highest bidder to showcase an NFT:

```solidity
function setNftToShowcase(address _nftAddress, uint256 _tokenId) external {
    // NFT showcase logic
}
```

This feature adds interactivity to the advertisement space, allowing for dynamic content display.

## Getters for Contract State

Various getter functions provide important information about the contract's state:

```solidity
function getHighestBidder() public view returns (address) {
    // Logic to retrieve the highest bidder
}
```

These functions are essential for users to interact with and understand the contract's current state.

<Admonition type="info">

For a complete code base and tests of the `AdSpotContract`, refer to the [full contract code](https://github.com/superfluid-finance/ad-auction-example/).

</Admonition>

## Conclusion

This guide provided a high-level overview of the `AdSpotContract` used in a DApp for advertisement auctioning with Superfluid. The contract demonstrates a real-time auction mechanism, a dynamic NFT showcase feature, and efficient fund distribution using Superfluid's streaming capabilities.