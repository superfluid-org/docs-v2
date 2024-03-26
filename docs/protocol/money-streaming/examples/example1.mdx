---
sidebar_position: 1
---

# FlowSplitter Smart Contract

This guide provides an overview and usage instructions for the `FlowSplitter` smart contract, which leverages the Superfluid protocol to route incoming streams of Super Tokens to two different recipients based on predefined proportions.

## Introduction

The `FlowSplitter` contract is designed to automatically split incoming Super Token streams to a main and a side receiver. This splitting is determined by the `sideReceiverPortion` parameter, which defines the percentage of the incoming flow to be routed to the side receiver, with the remainder going to the main receiver.

## Contract Overview

<img src="/assets/diagram.png" alt="FlowSplitter Diagram"/>


The above diagram illustrates how the `FlowSplitter` works. For example, if the `sideReceiverPortion` is set to 30%, then 30% of all incoming Super Token streams will be routed to the side receiver, and the remaining 70% will go to the main receiver.

<div>
<details>
<summary>Click here to show `FlowSender` contract</summary>
<p>

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {SuperAppBaseFlow} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperAppBaseFlow.sol";
import {
    ISuperfluid,
    ISuperToken
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

/// @title FlowSplitter
/// @author Superfluid | Modified by @0xdavinchee
/// @dev A negative sideReceiverPortion portion is not allowed
/// A portion > 1000 is fine though because the protocol will
/// revert when trying to create a flow with a negative flow rate
/// A flowRate which is less than 1000 will be rounded down to 0 and will revert
/// Also an inflow which does not contain a whole number will be rounded down,
/// this will also lead to a revert.
contract FlowSplitter is SuperAppBaseFlow {
    using SuperTokenV1Library for ISuperToken;

    /// @dev Account that ought to be routed the majority of the inflows
    address public immutable MAIN_RECEIVER;

    /// @dev Account that ought to be routed the minority of the inflows
    address public immutable SIDE_RECEIVER;

    /// @dev Account that deployed the contract
    address public immutable CREATOR;

    /// @dev Super Token that the FlowSplitter will accept streams of
    ISuperToken public immutable ACCEPTED_SUPER_TOKEN;

    /// @dev number out of 1000 representing portion of inflows to be redirected to SIDE_RECEIVER
    ///      Ex: 300 would represent 30%
    int96 public sideReceiverPortion;

    error INVALID_PORTION();
    error SAME_RECEIVERS_NOT_ALLOWED();
    error NO_SELF_FLOW();
    error NOT_CREATOR();

    /// @dev emitted when the split of the outflow to MAIN_RECEIVER and SIDE_RECEIVER is updated
    event SplitUpdated(int96 mainReceiverPortion, int96 newSideReceiverPortion);

    constructor(
        ISuperfluid host_,
        ISuperToken acceptedSuperToken_,
        address creator_,
        address mainReceiver_,
        address sideReceiver_,
        int96 sideReceiverPortion_
    ) SuperAppBaseFlow(host_, true, true, true) {
        if (sideReceiverPortion_ <= 0 || sideReceiverPortion_ == 1000) revert INVALID_PORTION();
        if (mainReceiver_ == sideReceiver_) revert SAME_RECEIVERS_NOT_ALLOWED();
        if (mainReceiver_ == address(this) || sideReceiver_ == address(this)) revert NO_SELF_FLOW();

        ACCEPTED_SUPER_TOKEN = acceptedSuperToken_;
        CREATOR = creator_;
        MAIN_RECEIVER = mainReceiver_;
        SIDE_RECEIVER = sideReceiver_;
        sideReceiverPortion = sideReceiverPortion_;
    }

    /// @dev checks that only the acceptedToken is used when sending streams into this contract
    /// @param superToken_ the token being streamed into the contract
    function isAcceptedSuperToken(ISuperToken superToken_) public view override returns (bool) {
        return superToken_ == ACCEPTED_SUPER_TOKEN;
    }

    /// @notice Returns the outflow rates to main and side receiver given flowRate_ and an arbitrary
    /// sideReceiverPortion_
    /// @dev If either returns 0, it will revert when trying to create a flow
    ///     because the protocol does not allow creating flows with a flow rate of 0
    ///     Also, if the sum of the two outflows is not equal to the inflow, it means the app will
    ///     receive a residual flow.
    /// @param flowRate_ the inflow rate
    /// @param sideReceiverPortion_ the portion of the inflow to be redirected to SIDE_RECEIVER
    /// @return mainFlowRate the outflow rate to MAIN_RECEIVER
    /// @return sideFlowRate the outflow rate to SIDE_RECEIVER
    /// @return residualFlowRate the residual flow rate
    function getMainAndSideReceiverFlowRates(int96 flowRate_, int96 sideReceiverPortion_)
        external
        pure
        returns (int96 mainFlowRate, int96 sideFlowRate, int96 residualFlowRate)
    {
        mainFlowRate = (flowRate_ * (1000 - sideReceiverPortion_)) / 1000;
        sideFlowRate = (flowRate_ * sideReceiverPortion_) / 1000;
        residualFlowRate = flowRate_ - (mainFlowRate + sideFlowRate);
    }

    /// @notice Updates the split of the outflow to MAIN_RECEIVER and SIDE_RECEIVER
    /// @dev Only the creator should be able to call update split.
    /// @param newSideReceiverPortion_ the new portion of inflows to be redirected to SIDE_RECEIVER
    function updateSplit(int96 newSideReceiverPortion_) external {
        if (newSideReceiverPortion_ <= 0 || newSideReceiverPortion_ >= 1000) revert INVALID_PORTION();
        if (msg.sender != CREATOR) revert NOT_CREATOR();

        sideReceiverPortion = newSideReceiverPortion_;

        // get current outflow rate
        int96 totalOutflowRate = ACCEPTED_SUPER_TOKEN.getFlowRate(address(this), MAIN_RECEIVER)
            + ACCEPTED_SUPER_TOKEN.getFlowRate(address(this), SIDE_RECEIVER);

        int96 mainReceiverPortion = 1000 - newSideReceiverPortion_;

        // update outflows
        // @note there is a peculiar bug here where you can't change the outflow in any way
        ACCEPTED_SUPER_TOKEN.updateFlow(MAIN_RECEIVER, (totalOutflowRate * mainReceiverPortion) / 1000);
        ACCEPTED_SUPER_TOKEN.updateFlow(SIDE_RECEIVER, (totalOutflowRate * newSideReceiverPortion_) / 1000);

        emit SplitUpdated(mainReceiverPortion, newSideReceiverPortion_);
    }

    // ---------------------------------------------------------------------------------------------
    // CALLBACK LOGIC

    function onFlowCreated(ISuperToken superToken_, address sender_, bytes calldata ctx_)
        internal
        override
        returns (bytes memory newCtx)
    {
        newCtx = ctx_;

        // get inflow rate from sender_
        int96 inflowRate = superToken_.getFlowRate(sender_, address(this));

        // if there's no outflow already, create outflows
        if (superToken_.getFlowRate(address(this), MAIN_RECEIVER) == 0) {
            newCtx =
                superToken_.createFlowWithCtx(MAIN_RECEIVER, (inflowRate * (1000 - sideReceiverPortion)) / 1000, newCtx);

            newCtx = superToken_.createFlowWithCtx(SIDE_RECEIVER, (inflowRate * sideReceiverPortion) / 1000, newCtx);
        }
        // otherwise, there's already outflows which should be increased
        else {
            newCtx = superToken_.updateFlowWithCtx(
                MAIN_RECEIVER,
                ACCEPTED_SUPER_TOKEN.getFlowRate(address(this), MAIN_RECEIVER)
                    + (inflowRate * (1000 - sideReceiverPortion)) / 1000,
                newCtx
            );

            newCtx = superToken_.updateFlowWithCtx(
                SIDE_RECEIVER,
                ACCEPTED_SUPER_TOKEN.getFlowRate(address(this), SIDE_RECEIVER)
                    + (inflowRate * sideReceiverPortion) / 1000,
                newCtx
            );
        }
    }

    function onFlowUpdated(
        ISuperToken superToken_,
        address sender_,
        int96 previousFlowRate_,
        uint256, /*lastUpdated*/
        bytes calldata ctx_
    ) internal override returns (bytes memory newCtx) {
        newCtx = ctx_;

        // get inflow rate change from sender_
        int96 inflowChange = superToken_.getFlowRate(sender_, address(this)) - previousFlowRate_;

        // update outflows
        newCtx = superToken_.updateFlowWithCtx(
            MAIN_RECEIVER,
            ACCEPTED_SUPER_TOKEN.getFlowRate(address(this), MAIN_RECEIVER)
                + (inflowChange * (1000 - sideReceiverPortion)) / 1000,
            newCtx
        );

        newCtx = superToken_.updateFlowWithCtx(
            SIDE_RECEIVER,
            ACCEPTED_SUPER_TOKEN.getFlowRate(address(this), SIDE_RECEIVER) + (inflowChange * sideReceiverPortion) / 1000,
            newCtx
        );
    }

    function onFlowDeleted(
        ISuperToken superToken_,
        address, /*sender_*/
        address receiver_,
        int96 previousFlowRate_,
        uint256, /*lastUpdated*/
        bytes calldata ctx_
    ) internal override returns (bytes memory newCtx) {
        newCtx = ctx_;

        // remaining inflow is equal to total outflow less the inflow that just got deleted
        int96 remainingInflow = (
            ACCEPTED_SUPER_TOKEN.getFlowRate(address(this), MAIN_RECEIVER)
                + ACCEPTED_SUPER_TOKEN.getFlowRate(address(this), SIDE_RECEIVER)
        ) - previousFlowRate_;

        // handle "rogue recipients" with sticky stream - see readme
        if (receiver_ == MAIN_RECEIVER || receiver_ == SIDE_RECEIVER) {
            newCtx = superToken_.createFlowWithCtx(receiver_, previousFlowRate_, newCtx);
        }

        // if there is no more inflow, outflows should be deleted
        if (remainingInflow <= 0) {
            newCtx = superToken_.deleteFlowWithCtx(address(this), MAIN_RECEIVER, newCtx);

            newCtx = superToken_.deleteFlowWithCtx(address(this), SIDE_RECEIVER, newCtx);
        }
        // otherwise, there's still inflow left and outflows must be updated
        else {
            newCtx = superToken_.updateFlowWithCtx(
                MAIN_RECEIVER, (remainingInflow * (1000 - sideReceiverPortion)) / 1000, newCtx
            );

            newCtx =
                superToken_.updateFlowWithCtx(SIDE_RECEIVER, (remainingInflow * sideReceiverPortion) / 1000, newCtx);
        }
    }
}
```

</p>
</details>
</div>

## Key Components

- **`MAIN_RECEIVER`:** The primary account that receives the majority of the inflows.
- **`SIDE_RECEIVER`:** The secondary account that receives a smaller, specified portion of the inflows.
- **`ACCEPTED_SUPER_TOKEN`:** The specific Super Token that the `FlowSplitter` will accept for streaming.
- **`sideReceiverPortion`:** A numerical value representing the portion (out of 1000) of inflows redirected to the `SIDE_RECEIVER`.

## Usage

### Deploying the Contract

To deploy the `FlowSplitter`, you must specify the following parameters:

- `host_`: The Superfluid host contract.
- `acceptedSuperToken_`: The Super Token to be accepted by the contract.
- `creator_`: The address of the account deploying the contract.
- `mainReceiver_`: The address of the main receiver.
- `sideReceiver_`: The address of the side receiver.
- `sideReceiverPortion_`: The initial portion of the inflow to be directed to the side receiver.

### Updating the Flow Split

The creator of the contract can update the flow split by calling the `updateSplit` function with a new `sideReceiverPortion_`. This adjusts the outflow rates to both receivers accordingly.

```solidity
function updateSplit(int96 newSideReceiverPortion_) external;
```

### Calculating Flow Rates

To calculate the exact outflow rates for the main and side receivers based on any inflow rate and `sideReceiverPortion`, use the `getMainAndSideReceiverFlowRates` function:

```solidity
function getMainAndSideReceiverFlowRates(
    int96 flowRate_,
    int96 sideReceiverPortion_
) external pure returns (
    int96 mainFlowRate,
    int96 sideFlowRate,
    int96 residualFlowRate
);
```

### Handling Streams

The contract includes several internal callback functions that handle the creation, updating, and deletion of streams:

* `onFlowCreated`: Called when a new inflow to the `FlowSplitter` is created.
* `onFlowUpdated`: Called when an existing inflow to the `FlowSplitter` is updated.
* `onFlowDeleted`: Called when an inflow to the `FlowSplitter` is deleted.

## Conclusion

The `FlowSplitter` smart contract offers a robust solution for automatically splitting incoming Super Token streams. By setting the `sideReceiverPortion`, users can determine the flow rates to different parties, enabling a fair and transparent distribution of funds.
