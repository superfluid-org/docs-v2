---
sidebar_position: 1
---

# Control Flows

This guide covers various methods for managing flows directly on the Superfluid protocol. It includes creating, updating, and deleting flows, **on chain, from another smart contracts**.
This guide does NOT cover:
- How to create a flow by an operator on behalf of another account. For that, please refer to the [ACL and User Data guide](/docs/protocol/money-streaming/guides/acl-user-data).
- How to manage flows with user data. For that, please refer to the [ACL and User Data guide](/docs/protocol/money-streaming/guides/acl-user-data).
- How to create flows by interacting with the Money Streaming Forwarder contract from client applications. For that please refer to the [SDK section](/docs/sdk/money-streaming/create-update-delete-flow).

## Prerequisites

Before proceeding, ensure you have:

- Familiarity with Solidity.
- Basic understanding of Superfluid and its functionalities.
- Access to a development environment for deploying or interacting with Smart Contracts.
- Importing the SuperTokenV1Library in your smart contract. For more details, refer to the [Using the SuperTokenV1Library](/docs/protocol/super-tokens/guides/using-library).

## What is a flow?
In Superfluid terminology, a flow is a continuous stream of tokens from one account to another.
It is a fundamental concept in the Superfluid protocol, enabling real-time, continuous payments between accounts.

:::tip What is the difference between a "Stream" and a "Flow"?
This is a small technicality which is not necessarily important to understand.
However, in Superfluid, a "Flow" is a more general term than a "Stream".
A Stream is a non-zero flow, while a zero flow is not considered a Stream.
:::

## Set the flowrate

### Function `flow`

This function sets the specified flowrate between sender and receiver.

```
/**
    * @dev Sets the given CFA flowrate between the caller and a given receiver.
    * If there's no pre-existing flow and `flowRate` non-zero, a new flow is created.
    * If there's an existing flow and `flowRate` non-zero, the flowRate of that flow is updated.
    * If there's an existing flow and `flowRate` zero, the flow is deleted.
    * If the existing and given flowRate are equal, no action is taken.
    * On creation of a flow, a "buffer" amount is automatically detracted from the sender account's available balance.
    * If the sender account is solvent when the flow is deleted, this buffer is redeemed to it.
    * @param token Super token address
    * @param receiver The receiver of the flow
    * @param flowRate The wanted flowrate in wad/second. Only positive values are valid here.
    * @return bool
    */
function flow(ISuperToken token, address receiver, int96 flowRate)
    internal returns (bool)
```

:::note when not using the lib
The CFAv1Forwarder contract has a function called `setFlowrate` which does the same.
:::

## CRUD methods

If you want to be more explicit when changing the state of flows, you can use the following CRUD methods:

### Function: `createFlow`

To create a flow, you need to call `createFlow` by specifying the token, sender, receiver, and flow rate.

```solidity
/**
 * @dev Create flow
 * @param token The token used in flow
 * @param receiver The receiver of the flow
 * @param flowRate The desired flowRate
 */
function createFlow(ISuperToken token, address receiver, int96 flowRate)
    internal returns (bool)
```

### Function: `updateFlow`

For an existing flow, you can update the flow rate through the `updateFlow` function.

```solidity
/**
 * @dev Update flow
 * @param token The token used in flow
 * @param receiver The receiver of the flow
 * @param flowRate The desired flowRate
 */
function updateFlow(ISuperToken token, address receiver, int96 flowRate)
    internal returns (bool)
```

### Function: `deleteFlow`

To delete an eisting, you need to call `deleteFlow` and  specify the token, sender, and receiver.

```solidity
/**
 * @dev Delete flow without userData
 * @param token The token used in flow
 * @param sender The sender of the flow
 * @param receiver The receiver of the flow
 */
function deleteFlow(ISuperToken token, address sender, address receiver)
    internal returns (bool)
```

:::warning Can I update or delete a non-existent flow?
No, you cannot update or delete a non-existent flow. If a flow does not exist, the function will revert.
:::

:::tip Full list of functions
For a full list of functions related to creating, updating, and deleting flows, refer to the [SuperTokenV1Library technical reference](/docs/technical-reference/SuperTokenV1Library).
:::

## Example: Control Flows

For this example, we'll use the `FlowSender` contract described in the [Quickstart](/docs/protocol/quickstart.mdx) as our example to demonstrate how to write a contract with creates, updates, deletes and reads flow data.

<div>
<details>
<summary>Click here to show `FlowSender` contract</summary>
<p>

```solidity
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { ISuperfluid, ISuperToken } from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import { SuperTokenV1Library } from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

interface IFakeDAI is IERC20 {
    function mint(address account, uint256 amount) external;
}

contract FlowSender {
    using SuperTokenV1Library for ISuperToken;

    mapping (address => bool) public accountList;
    ISuperToken public daix;

    // fDAIx address on Polygon Mumbai = 0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f
    constructor(ISuperToken _daix) {
        daix = _daix;
    }

    /// @dev Mints 10,000 fDAI to this contract and wraps it all into fDAIx
    function gainDaiX() external {

        // Get address of fDAI by getting underlying token address from DAIx token
        IFakeDAI fdai = IFakeDAI( daix.getUnderlyingToken() );

        // Mint 10,000 fDAI
        fdai.mint(address(this), 10000e18);

        // Approve fDAIx contract to spend fDAI
        fdai.approve(address(daix), 20000e18);

        // Wrap the fDAI into fDAIx
        daix.upgrade(10000e18);
    }

    /// @dev controls a stream with the given flowrate between this contract and the desired receiver
    function setStream(address receiver, int96 flowRate) external {
        daix.flow(receiver, flowRate);
    }

    /// @dev get flow rate between this contract and the given receiver
    function getFlowRate(address receiver) external view returns (int96 flowRate) {
        return daix.getFlowRate(address(this), receiver);
    }
}
```

</p>
</details>
</div>

This contract has a few functions:

- **gainDaiX**: Mints and wraps fDAI into fDAIx (Superfluid's wrapped token).
- **setStream**: Controls a stream between the contract and a receiver
- **getFlowRate**: Reads the current flow rate of a stream.

:::tip About the `SuperTokenV1Library`
As you can see, the `FlowSender` contract uses the [`SuperTokenV1Library`](/docs/technical-reference/SuperTokenV1Library) to interact with the Superfluid protocol.
Instead of passing the token address to the functions, the contract uses `using SuperTokenV1Library for ISuperToken;` to access the functions directly.
You can learn more about how to use the `SuperTokenV1Library` in the [Using the SuperTokenV1Library](/docs/protocol/super-tokens/guides/using-library) guide.
:::