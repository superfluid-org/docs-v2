---
sidebar_position: 2
---

# Manage Access Control and User Data

This page provides an overview of how to manage access control and user data in the Superfluid protocol.
We will show how to use the [SuperTokenV1Library](/docs/technical-reference/SuperTokenV1Library) to interact with the protocol and demonstrate how to grant permissions, create flows,
and attach user data to transactions within your smart contracts.

## Introduction to SuperTokenV1Library

The [SuperTokenV1Library](/docs/technical-reference/SuperTokenV1Library) is the primary interface for developers to interact with the Superfluid protocol when building smart contracts on-chain.
It provides a comprehensive set of tools for working with [Money Streaming](/docs/protocol/money-streaming/overview) (*Constant Flow Agreement - CFA*) and [Distribution Pools](/docs/protocol/distributions/overview) (*General Distributions Agreement - GDA*).

To use the SuperTokenV1Library in your smart contract:

1. Import the library:
   ```solidity
   import "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
   ```

2. Include the `using` statement:
   ```solidity
   using SuperTokenV1Library for ISuperToken;
   ```

:::tip Learn more about the SuperTokenV1Library
For more details on the SuperTokenV1Library, refer to the page [Using the SuperTokenV1Library](/docs/protocol/super-tokens/guides/using-library). For a full list of its functions, refer to its [technical reference](/docs/technical-reference/SuperTokenV1Library).
:::

## Access Control in Superfluid

Access control is a crucial aspect of smart contract security, allowing certain addresses to perform specific actions.
In the context of Superfluid and money streaming, Access Control Lists (ACLs) enables one address (the Flow Operator) to manage streams on behalf of another address.

### How Access Control Works in Superfluid

Superfluid implements a flexible permission system for flow management:

1. **Granting Permissions**: An account can grant permissions to a flow operator, specifying what actions they can perform (create, update, delete flows) and setting a flow rate allowance.

2. **Flow Rate Allowance**: This is the maximum net flow rate that the operator can create on behalf of the account.

3. **Operator Actions**: Once granted permissions, the operator can perform the allowed actions within the specified flow rate allowance.

:::tip Access Control for [Distribution Pools](/docs/protocol/distributions/overview)
In this document, we address Access Control for Money Streaming (CFA). Currently, there are no access control functions for [Distribution Pools](/docs/protocol/distributions/overview). However, you can build your own access control system using the SuperTokenV1Library functions.
:::

### Key Functions for Access Control

1. `setFlowPermissions`: Set specific permissions for a flow operator.

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

2. `flowFrom`: Control a flow as an operator on behalf of another account.

```solidity
function flowFrom(
    ISuperToken token,
    address sender,
    address receiver,
    int96 flowRate
) internal returns (bool)
```

3. `revokeFlowPermissions`: Revoke all permissions from a flow operator.

```solidity
function revokeFlowPermissions(
    ISuperToken token,
    address flowOperator
) internal returns (bool)
```

:::tip Full list of functions
For a full list of functions related to access control, refer to the [SuperTokenV1Library technical reference](/docs/technical-reference/SuperTokenV1Library).
:::

## User Data in Superfluid

User data in Superfluid allows developers to attach additional information to transactions. This can be used for various purposes, such as including metadata, triggering specific logic in receiver contracts, or implementing off-chain systems.

### How to Use User Data

Many functions in the SuperTokenV1Library accept a `userData` parameter. This is typically a `bytes` type, allowing you to encode any data you want to include.

Example of using user data when controlling a flow:

```solidity
function flowFrom(
    ISuperToken token,
    address sender,
    address receiver,
    int96 flowRate,
    bytes memory userData
) internal returns (bool)
```

You can encode various types of data into the `userData` parameter. For example:

```solidity
bytes memory userData = abi.encode(uint256(1234), "Hello, Superfluid!");
createFlowWithUserData(token, receiver, flowRate, userData);
```

## Example: Granting Permissions and Creating a Flow

Here's a simple example demonstrating how one contract can grant permissions to another, allowing it to create a flow on its behalf:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ISuperfluid, ISuperToken } from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import { SuperTokenV1Library } from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

contract PermissionGranter {
    using SuperTokenV1Library for ISuperToken;

    function grantPermissions(
        ISuperToken token,
        address operator,
        int96 flowRateAllowance
    ) external {
        token.setFlowPermissions(
            operator,
            true, // allowCreate
            false, // allowUpdate
            false, // allowDelete
            flowRateAllowance
        );
    }
}

contract FlowCreator {
    using SuperTokenV1Library for ISuperToken;

    function createFlowAsOperator(
        ISuperToken token,
        address sender,
        address receiver,
        int96 flowRate
    ) external {
        token.flowFrom(sender, receiver, flowRate);
    }
}
```

In this example, `PermissionGranter` can grant permissions to `FlowCreator`. Once permissions are granted, `FlowCreator` can create flows on behalf of the address that called `grantPermissions`.

To use these contracts:

1. Deploy both contracts.
2. Call `grantPermissions` on `PermissionGranter`, passing the token address, the address of the `FlowCreator` contract, and the desired flow rate allowance.
3. Now, anyone can call `createFlowAsOperator` on `FlowCreator`, which will create a flow from the address that granted permissions to the specified receiver.

This setup allows for flexible delegation of flow creation, which can be useful in various DeFi applications, automated systems, or multi-sig wallet scenarios.