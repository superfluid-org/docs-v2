---
sidebar_position: 1
---
import Admonition from '@theme/Admonition';
import PoolsVisualization from '@site/src/components/Visualizations/PoolStreamVis';

# How to Design your Distribution Pools?

In this page we will explain Distribution Pools and show you the most relevant ways to interact with them through the Super Token interface.
To do this, we will go through some key concepts, and show you how to leverage Superfluid's [`SuperTokenV1Library.sol`](/docs/technical-reference/SuperTokenV1Library) for your Distribution Pools smart contracts.

:::note About `SuperTokenV1Library.sol`
The [`SuperTokenV1Library.sol`](/docs/technical-reference/SuperTokenV1Library) is a comprehensive library which makes it more convenient to use invoke Superfluid specific functionality on Super Tokens.
:::

:::warning About the General Distributions Agreement - GDA
At times, we use "Distribution Pools" or the "General Distributions Agreement (GDA)" interchangeably due to "GDA" being the name of the implementation in our [codebase](https://github.com/superfluid-finance/protocol-monorepo). 
:::

## What is a Pool?

A pool is a smart contract that facilitates the distribution of tokens to multiple members, managed by a pool admin. Members hold units within the pool that determine their proportion of the distribution.

<div style={{ display: 'flex', justifyContent: 'center' }}>
<PoolsVisualization/>
</div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <p>*A visualization of units in a pool*</p>
</div>

:::note

The Superfluid pool implements basic ERC20 functionality, allowing it to interact seamlessly with [ERC20](https://docs.openzeppelin.com/contracts/4.x/erc20) standards.
This allows you to interact with the pool units as if they were ERC20 tokens, including transferring them to other addresses, if it is allowed by the pool configuration.
Check the [next section](#important-functions) for more information on pool configurations.

:::

## About Member Units

### How is a member's share of the pool determined?

A pool member's units determine their share of the pool's distributions.
In the background, the calculation of each member's share is calculated following these two steps:

1. **Calculating the flow rate per unit:** We calculate the flow rate or amount of tokens to be distributed *per unit* like so:

<div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src="/assets/flowrate-formula.png" alt="Superfluid with people" width="400" />
</div>
<br/>
2. **Calculating the flow rate for each member:** We multiply the flow rate per unit by the number of units each member has to get the flow rate for each member, as follows:
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src="/assets/flowrate-member-units.png" alt="Superfluid with people" width="500" />
</div>
<br/>

One of the limitations of Solidity is its incapacity to handle floating point numbers. 
This makes it so that the flow rate per unit is calculated as an integer. If the result of the division is not an integer, the result is rounded down.

### Examples

The examples below show how the flow rate per unit is calculated in different scenarios where Distributions reach their limitations

1. **Example 1:** Let's take a pool that has 100 wei/second as total flow rate and 3 members, each member has 1 unit.
    - The flow rate per unit is 100 / 3 = 33.33
    - However, since Solidity can't handle floating point numbers, the flow rate per unit is 33
    - The pool distributes 33 tokens to each unit
    - 1 token is left undistributed
2. **Example 2:** Let's take a pool that has 100 wei/second as total flow rate and 200 members, each member has 1 units.
    - The flow rate per unit is 100 / 200 = 0.5
    - However, since Solidity can't handle floating point numbers, the flow rate per unit is 0
    - The pool distributes 0 tokens to each unit
    - 200 tokens are left undistributed

These examples are extreme and almost never happen in practice. However, it is important to be aware of these limitations when designing your pools.

:::tip How to design your pools?
The best way to design your pools is to make sure that the total flow rate or the tokens distributed are always orders of magnitude higher than the number of total units in the pool.
This way, you can be sure that the flow rate per unit will always be significantly higher than 0 and that all members will receive a share of the distribution.
:::

## About Pool Connections and Claiming

### What is the difference between connecting to a pool and claiming tokens?
After creating a pool and assigning units to pool members,
they need to connect to the pool or claim their Super Tokens in order for it to show on their balance.
Simply assigning units (shares) to a member does not automatically reflect in their balance.
The accumulated tokens NEED to be claimed by the member (or a different address), or the member needs to connect to the pool
to start receiving their share of the Super Token Distributions.

### How can members collect their Distributions from the pool?

There are two ways for members to get their streamed or transferred Super Tokens from a pool:
- **Connecting to the Pool (Recommended)**: Members should connect to the pool to start receiving their share of the Super Token Distributions in real time to their balance.
This includes both Instant Distributions and Streaming Distributions. In order to connect to the pool, the member should call the `connectPool` function from the [`SuperTokenV1Library`](/docs/technical-reference/SuperTokenV1Library) or [`GDAv1Forwarder`](/docs/technical-reference/GDAv1Forwarder#fn-connectpool).
The address calling the function should be the address of the member. Other addresses will not be able to connect a member to the pool.

- **Claiming the Tokens**: Members can claim their share of the Super Token Distributions accumulated from the pool at any time,
even if they are not connected to the pool. As a matter of fact, anyone can claim the tokens on behalf of the member. To do so, the function
`claimAll` from the [`SuperTokenV1Library`](/docs/technical-reference/SuperTokenV1Library) or [`GDAv1Forwarder`](/docs/technical-reference/GDAv1Forwarder#fn-claimall) should be called with the address of the member as the argument.

:::note Connecting to the pool includes claiming
When a member connects to the pool, they automatically claim the accumulated tokens and start receiving the distributions in real time.
:::

:::tip Reminder
We use the `SuperTokenV1Library` to interact with the Superfluid protocol [on-chain](/docs/protocol/distributions/guides/distributions-and-super-tokens/on-chain) (from your smart contracts),
while we use the forwarders (eg. `GDAv1Forwarder`) to interact with the Superfluid protocol [off-chain](/docs/protocol/distributions/guides/distributions-and-super-tokens/off-chain) (from your web3 frontend applications).
:::

:::tip Recommendation
It is recommended to prompt users to connect to the pool as soon as possible to start receiving the distributions in real time.
Depending on your use case, periodic claiming may also offer the best UX, however pool connections usually offer
the best UX for real-time distributions.
:::

### How can members disconnect from the pool?
Members can always disconnect from the pool to stop receiving distributions in real time by calling the function `disconnectPool` from the [`SuperTokenV1Library`](/docs/technical-reference/SuperTokenV1Library) or [`GDAv1Forwarder`](/docs/technical-reference/GDAv1Forwarder#fn-disconnectpool).

### Example
- **Jake** creates a pool and assigns 100 units to **Alice**, 200 units to **Bob**, and 200 units to **Charlie**.
- **Alice** connects to the pool before any Distribution is made. Thus, she's able to receive her share of the Distributions in real time when they start.
- **Jake** starts a stream of 100 tokens/second to the pool.
- **Alice** receives 20 tokens/second directly into her balance, **Bob** and **Charlie** each accumulate 40 tokens/second in the pool.
- After 100 seconds, **Alice** can already see 2000 tokens on her balance. **Bob** and **Charlie** are each eligible to get 4000 tokens, but they cannot see them on their balance just yet.
- **Bob** chooses to claim every 100 seconds, while **Charlie** chooses to connect to the pool.
- **Bob** receives periodically 4000 tokens every 100 seconds.
- By connecting to the pool, **Charlie** automatically claims the accumulated tokens, but also starts receiving tokens in real time.


## Important Functions

Here are some of the most important functions for interacting with Superfluid pools:

:::note Reminder
Some of this functions are available via [`SuperTokenV1Library.sol`](/docs/technical-reference/SuperTokenV1Library) (contracts using that lib) only.
:::

### createPool

```solidity
function createPool(ISuperToken token, address admin, PoolConfig memory poolConfig)
```

Creates a new pool with the specified admin, configuration and poolConfig.

The `PoolConfig` struct is defined as follows:

```solidity
struct PoolConfig {
    bool transferabilityForUnitsOwner;
    bool distributionFromAnyAddress;
}
```
- `transferabilityForUnitsOwner`: If true, the pool members can transfer their owned units, else, only the pool admin can manipulate the units for pool members
- `distributionFromAnyAddress`: If true, anyone can execute distributions via the pool, else, only the pool admin can execute distributions via the pool

:::warning Strong recommendation
We don't recommend setting `transferabilityForUnitsOwner` to `true` unless you have a specific use case that absolutely requires it. This can sometimes lead to unexpected behavior and security risks.
:::

SuperTokenV1Library also provides overloaded variants setting default values for `admin` (default: `msg.sender`) and/or `poolConfig` (default: `{ transferabilityForUnitsOwner: false, distributionFromAnyAddress: true }`).

### updateMemberUnits

This function is part of `ISuperfluidPool`, can thus be invoked on pool contracts.

```solidity
function updateMemberUnits(address memberAddress, uint128 newUnits)
```

Updates the number of units a member has within a pool, effectively changing their share of future distributions.

:::warning Important
Keep in mind that the total amount of units in the pool needs to be significantly lower than the total flow rate or the total tokens distributed of the pool.
To understand more why this is the case, please refer to the [Member Units](#about-member-units) section.
:::

### claimAll

```solidity
function claimAll(ISuperToken token, ISuperfluidPool pool, address memberAddress)
```

Allows a member to claim their share of the tokens from all previous distributions.

### connectPool

```solidity
function connectPool(ISuperToken token, ISuperfluidPool pool)
```

Connects a pool member to a pool.

:::tip About pool connections
The pool member needs to connect to a pool before the distribution balance is reflected in their net balance.
If the distribution starts before the user is connected to the pool, the user will still receive the tokens
when they connect to the pool eventually.
:::

### disconnectPool

```solidity
function disconnectPool(ISuperToken token, ISuperfluidPool pool)
```

Disconnects a pool member from a pool.

### distribute

```solidity
function distribute(ISuperToken token, ISuperfluidPool pool, uint256 requestedAmount)
```

Distributes a specified amount of tokens to the pool, to be shared among members according to their units.

### distributeFlow

```solidity
function distributeFlow(ISuperToken token, ISuperfluidPool pool, int96 requestedFlowRate)
```

Flow-distributes with the specified flowrate to the pool, with the flow going to members according to their units.

## Example Usage

Here's how you might use these functions within a smart contract to set up and manage a pool:

```solidity
// Assume ISuperToken and SuperfluidPool interfaces are imported and available.

contract MyPool {
    Using SuperTokenV1Library for ISuperToken;
    
    ISuperToken private superToken;
    ISuperfluidPool private pool;
    
    constructor(ISuperToken _superToken) {
        superToken = _superToken;
        // create a pool with default settings:
        // msg.sender is admin, non-transferrable units, anybody can distribute to it
        pool = superToken.createPool();
    }

    // Use updateMemberUnits to assign units to a member.
    // (This will typically be a permissioned operation, it's akin to minting tokens)
    function updateMemberUnits(address member, uint128 units) public {
        pool.updateMemberUnits(member, units);
    }

    // Instant distribution of tokens to pool members proportional to their current units
    function distribute(uint256 amount) public {
        superToken.distribute(pool, amount);
    }

    // Flow distribution of tokens to pool members proportional to their current units
    function distributeFlow(int96 flowRate) public {
        superToken.distributeFlow(pool, flowRate);
    }
}
```

In this example, `MyPool` creates a pool, adds a member, and makes an Instant Distribution (discreet transfer - through `distribute`) and a Streaming Distribution (continuous flow - through `distributeFlow`) using the functions from `SuperTokenV1Library.sol`.

:::info Learn more about the `SuperTokenV1Library`
For more detailed information on the implementation and usage of `SuperTokenV1Library.sol`, refer to the [Technical Reference](/docs/technical-reference/SuperTokenV1Library).
:::
