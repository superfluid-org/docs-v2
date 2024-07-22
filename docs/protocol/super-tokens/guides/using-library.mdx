---
sidebar_position: 1
---

# Using the SuperTokenV1Library

The [SuperTokenV1Library](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol) is the primary interface for developers to interact with the Superfluid protocol
when building smart contracts on-chain.

This comprehensive library provides all the necessary tools to work with the two main primitives of the Superfluid protocol:
[Money Streaming](/docs/protocol/money-streaming/overview) (also called *Constant Flow Agreement* or *CFA*)
and [Distribution Pools](/docs/protocol/distributions/overview) (also called *General Distributions Agreement* or *GDA*).

## Getting Started

To use the SuperTokenV1Library in your smart contract, follow these steps:

1. Import the library in your contract:

```solidity
import "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
```

2. Include the `using` statement in your contract:

```solidity
using SuperTokenV1Library for ISuperToken;
```

:::note about Native Super Tokens
For Native Super Tokens, use `using SuperTokenV1Library for ISETH;` instead.
:::

:::tip Technical Reference
For more details on the full list of functions and usage, refer to the [SuperTokenV1Library Technical Reference](/docs/technical-reference/SuperTokenV1Library).
:::

## Key Concepts

The SuperTokenV1Library revolves around two main primitives:

1. **Constant Flow Agreement (CFA)**: This represents Money Streaming functionality.
2. **General Distributions Agreement (GDA)**: This handles Distribution Pools.

The library provides functions for various operations within these primitives:

- Writing to the protocol (e.g., creating flows, updating flows, creating pools)
- Reading from the protocol (e.g., getting flow rates)
- Access control (allowing other wallets to control flow rates)
- Attaching user data to blockchain function calls

## Key Functions

Let's explore some example functions in the SuperTokenV1Library:

### Money Streaming (CFA) Functions

The library provides a wide range of functions for managing money streams, including creating, updating, and deleting flows. For example:

#### Creating a Flow

```solidity
function createFlow(
    ISuperToken token,
    address receiver,
    int96 flowRate,
    bytes memory userData
) internal returns (bool)
```

This function creates a new money stream. You can omit the `userData` parameter if not needed.

#### Getting Flow Information

```solidity
function getFlowInfo(
    ISuperToken token,
    address sender,
    address receiver
) internal returns (
    uint256 lastUpdated,
    int96 flowRate,
    uint256 deposit,
    uint256 owedDeposit
)
```

This function retrieves detailed information about a specific flow.

### Distribution Pools (GDA) Functions

By the same token, the library provides functions for managing distribution pools, including creating pools and claiming distributions:

#### Creating a Pool

```solidity
function createPool(
    contract ISuperToken token,
    address admin,
    struct PoolConfig poolConfig
) 
    internal 
    returns (contract ISuperfluidPool pool)
```

The `PoolConfig` struct is defined as follows:

```solidity
struct PoolConfig {
    bool transferabilityForUnitsOwner;
    bool distributionFromAnyAddress;
}
```
- `transferabilityForUnitsOwner`: If true, the pool members can transfer their owned units, else, only the pool admin can manipulate the units for pool members
- `distributionFromAnyAddress`: If true, anyone can execute distributions via the pool, else, only the pool admin can execute distributions via the pool

#### Claiming tokens

```solidity
function claimAll(
    contract ISuperToken token,
    contract ISuperfluidPool pool,
    address memberAddress
) 
    internal 
    returns (bool)
```
This function allows a member to claim all tokens to all the members of the pool.


### Access Control Functions

The library also provides functions for managing access control and permissions between different wallet addresses and smart contracts:

#### Setting Flow Permissions

```solidity
function setFlowPermissions(
    ISuperToken token,
    address flowOperator,
    bool allowCreate,
    bool allowUpdate,
    bool allowDelete,
    int96 flowRateAllowance
) internal returns (bool)
```

This function allows you to grant specific permissions to another address (flowOperator) to manage flows on your behalf.

## Advanced Usage

### Context-Aware Functions

For more advanced use cases including with [Super Apps](/docs/protocol/advanced-topics/super-apps/understand-super-apps), the library provides context-aware versions of many functions. These are useful when you need to chain multiple operations or when working within the context of a Superfluid callback:

```solidity
function createFlowFromWithCtx(
    ISuperToken token,
    address sender,
    address receiver,
    int96 flowRate,
    bytes memory ctx
) internal returns (bytes memory newCtx)
```

### User Data

Many functions in the SuperTokenV1Library allow you to attach user data to your transactions. This can be useful for adding metadata or triggering specific logic in receiver contracts.

## Best Practices

1. Always check return values of functions to ensure operations were successful.
2. Be mindful of gas costs, especially when working with multiple flows or large distribution pools.
3. Use the appropriate permissions and access control functions to ensure the security of your contract.

## Conclusion

The SuperTokenV1Library is a powerful tool for interacting with the Superfluid protocol on-chain, in order to build smart contracts. By leveraging its functions for money streaming and distribution pools, you can create sophisticated blockchain applications with real-time finance capabilities. Always refer to the latest documentation and test thoroughly to ensure your implementation is correct and secure.