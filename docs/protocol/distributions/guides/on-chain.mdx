---
sidebar_position: 2
---

import Admonition from '@theme/Admonition';

# Create, Update and Connect your Pools

Building on top of the Superfluid's Distribution Pools protocol involves interacting with Super Tokens. Remember, Superfluid is a token-centric protocol, and all of the primitives are centered around [Super Tokens](/docs/protocol/super-tokens/overview).
Distribution Pools allow for scalable and efficient one-to-many token distributions at a fixed gas cost.

When interacting with Super Tokens on-chain, you can use the Superfluid's [SuperTokenV1Library](/docs/technical-reference/SuperTokenV1Library) to access the core functions.

:::warning About the General Distributions Agreement
At times, we use "Distribution Pools" or the "General Distributions Agreement" (GDA) interchangeably.
The GDA is the name of the implementation in our codebase. If you are interested in the technical details, you can find the full Superfluid Architecture [here](/docs/technical-reference/Architecture).
:::

## Importance of Distribution Pools

Distribution Pools are at the core of Superfluid's functionality, enabling a multitude of applications such as subscription services, salary payments, and rewards distribution. They are designed to be flexible, allowing for both instant and streaming distributions.

- **Instant Distributions**: Allow for a one-time distribution of a specified amount of tokens to all members of a pool instantly.
- **Streaming Distributions**: Enable a continuous flow of tokens to pool members over time.

:::note About Pools
The same pool can be used to distribute any Super Token, be it for Instant or Streaming Distributions.
:::


## Key Functions of SuperTokenV1Library.sol

[`SuperTokenV1Library.sol`](/docs/technical-reference/SuperTokenV1Library) provides several functions to interact with pools and distributions:


### createPool

```solidity
function createPool(ISuperToken token, address admin, struct PoolConfig poolConfig) internal returns (contract ISuperfluidPool pool)

// simplified variant using the following default settings:
// admin = msg.sender, poolConfig = { transferabilityForUnitsOwner: false, distributionFromAnyAddress: true }
function createPool(contract ISuperToken token) internal returns (contract ISuperfluidPool pool);
```

Creates a new Superfluid Distribution Pool.

### distribute

```solidity
function distribute(ISuperToken token, ISuperfluidPool pool, uint256 amount) internal returns (bool)
```

Distributes the specified amount of tokens among pool members.

### distributeFlow

```solidity
function distributeFlow(ISuperToken token, ISuperfluidPool pool, int96 requestedFlowRate) internal returns (bool)
```

Initiates a distribution flow from a sender to a pool with the specified total flow rate.

:::warning Important
Keep in mind that the total amount of units in the pool needs to be significantly lower than the total flow rate or the total tokens distributed of the pool.
To understand more why this is the case, please refer to the [Member Units](/docs/protocol/distributions/guides/pools.mdx#about-member-units) section.
:::

### connectPool

```solidity
function connectPool(ISuperToken token, contract ISuperfluidPool pool) internal returns (bool)
```

Connects a pool member to pool.

:::tip About Pool Connections
Learn more about claiming units and connecting to pools in the [How to design your pools section](/docs/protocol/distributions/guides/pools#about-pool-connections-and-claiming).
:::

### getFlowDistributionFlowRate

```solidity
function getFlowDistributionFlowRate(ISuperToken token, address from, ISuperfluidPool to) internal view returns (int96)
```

Gets the flow rate of a distribution from a sender to a pool.

### isMemberConnected

```solidity
function isMemberConnected(ISuperToken token, address pool, address member) internal view returns (bool)
```

Checks whether a member is connected to a pool and eligible to receive distributions.

## ISuperfluidPool

### updateMemberUnits

```solidity
function updateMemberUnits(address memberAddress, uint128 newUnits) internal returns (bool)
```

Updates the units of a pool member.

## Contract Example

Here's a simple contract example using some of the functions from `SuperTokenV1Library.sol` to interact with distributions:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@superfluid-finance/ethereum-contracts/contracts/superfluid/SuperTokenV1Library.sol";

contract MyDistributionsContract {
    using SuperTokenV1Library for ISuperToken;

    ISuperToken private _superToken;

    constructor(ISuperToken superToken) {
        _superToken = superToken;
    }

    function estimateDistribution(ISuperfluidPool pool, uint256 amount) public {
        _superToken.estimateDistributionActualAmount(address(this), pool, amount);
        // Additional logic for distribution
    }

    function startStreamingDistribution(ISuperfluidPool pool, int96 flowRate) public {
        _superToken.distributeFlow(pool, flowRate);
        // Additional logic for streaming distribution
    }
}
```

This contract demonstrates how to use the `SuperTokenV1Library` in order to interact with Distribution Pools.

:::tip
When using the `SuperTokenV1Library.sol`, you don't need to include the `SuperToken` as a parameter in your method call.
Simply call `SuperToken.[Method]` and the library will handle the rest.
:::

## Further Reading
For more detailed information on the implementation and usage of `SuperTokenV1Library.sol`, refer to the [SuperTokenV1Library Technical reference](/docs/technical-reference/SuperTokenV1Library).
