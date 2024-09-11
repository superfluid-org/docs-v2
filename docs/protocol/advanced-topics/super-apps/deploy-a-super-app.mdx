---
sidebar_position: 1
---
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';

# Quickstart

## Inroduction

Super Apps are smart contracts registered with the Superfluid Protocol, allowing them to **react to actions of the Superfluid protocol** (like flow creations, flow updates and flow deletions).

<div style={{ display: 'flex', justifyContent: 'center' }}>
    ![The Tradeable Cashflow NFT](/assets/image_(29)_(1).png)
</div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <p>*Super App Illustration*</p>
</div>

This guide provides a simple example of how to deploy a Super App using the [CFASuperAppBase](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/apps/CFASuperAppBase.sol).

:::tip About this Guide
This guide provides a basic example of deploying a Super App using the CFASuperAppBase contract. For more advanced Super App development, refer to the [Super Apps in Depth](/docs/protocol/advanced-topics/super-apps/understand-super-apps).
:::

:::warning Dont overcomplicate it !
For most use cases, the CFASuperAppBase is sufficient. It simplifies the callback process and reduces redundancy.
:::

## CFASuperAppBase - Simplifying Super App Development

### What is [CFASuperAppBase](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/apps/CFASuperAppBase.sol)?

[CFASuperAppBase](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/apps/CFASuperAppBase.sol) is an inheritable base contract designed to streamline the development of Super Apps.
It abstracts the complexities involved in writing callbacks and reduces redundancy.

<div style={{ display: 'flex', justifyContent: 'center' }}>
    ![SuperAppBaseFlow Illustration](/assets/image_(30)_(2).png)
</div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <p>*CFASuperAppBase Illustration*</p>
</div>

:::info Example
onFlowCreated is a more intuitive function than afterAgreementCreated.
:::

### Key Features of CFASuperAppBase

- **Intuitive Callback Functions**: CFASuperAppBase consolidates callback development into three functions (`onFlowCreated`, `onFlowUpdated`, `onFlowDeleted`) with user-friendly parameters.
- **Ease of Use**: Simplifies the callback process compared to the original SuperAppBase, making it more accessible for developers.

#### Importing and Using CFASuperAppBase

```solidity
// Example Code
import { CFASuperAppBase } from "@superfluid-finance/ethereum-contracts/contracts/apps/CFASuperAppBase.sol";

contract SomeSuperAppContract is CFASuperAppBase {
    // Your contract implementation
}
```

#### Constructor Arguments

```solidity
constructor(
    ISuperfluid host_,
    bool activateOnCreated,
    bool activateOnUpdated,
    bool activateOnDeleted
)
    // Constructor implementation
```

* **`host_`**: Superfluid Host address for your target network.
* **Activation Flags**: Indicate which callbacks (`onFlowCreated`, `onFlowUpdated`, `onFlowDeleted`) your Super App will use.

### Token Acceptance

Override the `isAcceptedSuperToken` function to specify which Super Tokens can trigger the Super App's callbacks.

```solidity
function isAcceptedSuperToken(ISuperToken /*superToken*/) public view virtual returns (bool) {
    return true; // Default implementation
}
```

### Callback Functions

#### onFlowCreated

Override for logic when a new flow to the Super App is created.

```solidity
function onFlowCreated(
    ISuperToken superToken,
    address sender,
    bytes calldata ctx
) internal virtual returns (bytes memory /*newCtx*/) {
    // Your logic here
}
```

#### onFlowUpdated

Override for logic when an existing flow to the Super App is updated.

```solidity
function onFlowUpdated(
    ISuperToken superToken,
    address sender,
    int96 previousFlowRate,
    uint256 lastUpdated,
    bytes calldata ctx
) internal virtual returns (bytes memory /*newCtx*/) {
    // Your logic here
}
```

#### onFlowDeleted

Override for logic when an existing flow to the Super App is deleted. Note: This callback must not revert to avoid jailing the Super App.

```solidity
function onFlowDeleted(
    ISuperToken superToken,
    address sender,
    address receiver,
    int96 previousFlowRate,
    uint256 lastUpdated,
    bytes calldata ctx
) internal virtual returns (bytes memory /*newCtx*/) {
    // Your logic here
}
```

## Registering a Super App

Deploying a Super App involves integration with the Superfluid Protocol and compliance with its governance for activation.
For your Super App to be recognized by the protocol, you must register it with the Superfluid Host contract.
If you deploy your Super App on a testnet, you can call the function `selfRegister` to register it.

This is how the function looks on the CFASuperAppBase:

```solidity
function selfRegister(
        bool activateOnCreated,
        bool activateOnUpdated,
        bool activateOnDeleted
    ) public {
        HOST.registerApp(getConfigWord(activateOnCreated, activateOnUpdated, activateOnDeleted));
    }
```

If you are deploying on a mainnet or a network with permissioned registration, you will need to follow the registration process outlined in [Registering a Super App](/docs/protocol/advanced-topics/super-apps/register).