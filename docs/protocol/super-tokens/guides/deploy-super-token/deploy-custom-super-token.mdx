---
sidebar_position: 3
---


# Deploying a Custom Super Token

This guide will walk you through the process of deploying a Custom Super Token for the Superfluid protocol.
Custom Super Tokens allow you to create tokens with additional functionality while maintaining compatibility with the Superfluid protocol.

This documentation contains different guides if you are looking to easily deploy a simple [Wrapped Super Token](/docs/protocol/super-tokens/guides/deploy-super-token/deploy-wrapped-super-token) or a simple [Pure Super Token](/docs/protocol/super-tokens/guides/deploy-super-token/deploy-pure-super-token) from your interface with no code.
We strongly recommend to check those guides first before this one.

For the purposes of this guide, we'll explore two examples:
- [a Pure Super Token](#example-1-pure-super-token)
- [a Bridged Super Token](#example-2-bridged-super-token)

## Prerequisites

Before we begin, make sure you have the following:

- [Foundry](https://book.getfoundry.sh/) installed on your system
- Basic knowledge of Solidity and smart contract development

## Getting Started

First, let's clone the Custom Super Tokens repository:

```bash
git clone https://github.com/superfluid-finance/custom-supertokens
cd custom-supertokens
```

This repository is structured as a Foundry project and contains multiple examples of custom Super Tokens.

Once you've cloned the repository, install the dependencies:

```bash
forge install
```

This command will install the required packages, including `@superfluid-finance`, `@openzeppelin-contracts (v4.9.3)`, and `forge-std`.

## Example 1: Pure Super Token

Let's start with the Pure Super Token example. This is a simple custom Super Token implementation.

### Understanding the Contract

The `PureSuperToken.sol` file contains the contract for our Pure Super Token:

```solidity
contract PureSuperTokenProxy is CustomSuperTokenBase, UUPSProxy {
    function initialize(
        ISuperTokenFactory factory,
        string memory name,
        string memory symbol,
        address receiver,
        uint256 initialSupply
    ) external {
        ISuperTokenFactory(factory).initializeCustomSuperToken(address(this));
        ISuperToken(address(this)).initialize(
            IERC20(address(0)),
            18,
            name,
            symbol
        );
        ISuperToken(address(this)).selfMint(receiver, initialSupply, "");
    }
}
```

This contract creates a new `UUPSProxy` which is initialized as a Pure Super Token. The `initialize` function sets up the token using the `SuperTokenFactory` and mints the initial supply to the specified receiver.

### Testing

To test the Pure Super Token, run:

```bash
forge test --match testDeploy testSuperTokenBalance
```

This will execute the tests in `PureSuperToken.t.sol`, which include deploying the token and checking the receiver's balance.

### Deployment

To deploy the Pure Super Token, use the following Foundry command:

```bash
forge create --rpc-url <RPC_URL> --private-key <YOUR_PRIVATE_KEY> --etherscan-api-key <YOUR_API_KEY> --verify --via-ir src/PureSuperToken.sol:PureSuperTokenProxy
```

Replace `<RPC_URL>`, `<YOUR_PRIVATE_KEY>`, and `<YOUR_API_KEY>` with your actual values.

### Initialization

After deployment, you need to initialize the token by calling the `initialize` function with the appropriate parameters:

```solidity
pureSuperToken.initialize(
    superTokenFactory,
    "MyToken",
    "MTK",
    initialReceiver,
    initialSupply
);
```

## Example 2: Bridged Super Token

The Bridged Super Token is a more complex example that includes additional functionality for cross-chain operations.

### Understanding the Contract

The `BridgedSuperToken.sol` file contains the contract for our Bridged Super Token. This implementation includes features like minting and burning limits for bridges.

### Testing

To test the Bridged Super Token, run:

```bash
forge test
```

This will execute the tests in `BridgedSuperTokenTest.t.sol`, which cover various aspects of the token's functionality, including limit setting, minting, and burning.

### Deployment and Initialization

The deployment and initialization process for the Bridged Super Token is similar to the Pure Super Token. Use the `forge create` command for deployment, and then call the `initialize` function to set up the token.

## Creating Your Own Custom Super Token

When creating your own custom Super Token, you can use the following functions from the [ISuperToken Interface](/docs/technical-reference/ISuperToken)

### `selfMint`

```solidity
function selfMint(
    address account,
    uint256 amount,
    bytes memory userData
) external;
```

This function mints new tokens for the specified account. If `userData` is not empty, it invokes the `tokensReceived` hook according to ERC777 semantics.

### `selfBurn`

```solidity
function selfBurn(
    address account,
    uint256 amount,
    bytes memory userData
) external;
```

This function burns existing tokens for the specified account. If `userData` is not empty, it invokes the `tokensToSend` hook according to ERC777 semantics.

### `selfTransferFrom`

```solidity
function selfTransferFrom(
    address sender,
    address spender,
    address recipient,
    uint256 amount
) external;
```

This function transfers tokens from the `sender` to the `recipient`. If `spender` isn't the same as `sender`, it checks if `spender` has allowance to spend tokens of `sender`.

### `selfApproveFor`

```solidity
function selfApproveFor(
    address account,
    address spender,
    uint256 amount
) external;
```

This function gives `spender` the `amount` allowance to spend the tokens of `account`.

These functions allow you to customize the behavior of your Super Token while maintaining compatibility with the Superfluid protocol.

## Conclusion

By following this guide, you should now be able to deploy and initialize custom Super Tokens for the Superfluid protocol. Remember to thoroughly test your custom implementations and consider the security implications of any additional functionality you add to your tokens.

For more information on Custom Super Tokens, check out the [Custom Super Token Wiki](https://github.com/superfluid-finance/protocol-monorepo/wiki/About-Custom-Super-Token) and the [Deploy a Custom Super Token Guide](https://docs.superfluid.finance/docs/protocol/super-tokens/guides/deploy-super-token/deploy-custom-super-token).