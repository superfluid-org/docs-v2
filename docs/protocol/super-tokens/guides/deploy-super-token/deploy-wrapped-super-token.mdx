---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import ERC20Wrapper from '@site/src/components/Erc20Wrapper';

# Deploy a Wrapper Super Token

This guide offers detailed instructions for deploying [Wrapped Super Tokens](/docs/protocol/super-tokens/overview#1-wrapper-super-tokens) using the [Super Token Factory contract](#super-tokens-factory-contract).

<Admonition type="info">

Learn more about Wrapper Super Tokens in the [Types of Super Tokens](/docs/protocol/super-tokens/overview.mdx#types-of-super-tokens) section.

</Admonition>

## Prerequisites

Before you start, ensure you have:

- Basic understanding of blockchain and smart contracts.
- Access to a compatible cryptocurrency wallet (like [MetaMask](https://metamask.io/)).
- ETH or relevant cryptocurrency for transaction fees.

---
## Super Tokens Factory Contract

The [Super Token Factory contract](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/superfluid/SuperTokenFactory.sol) is used to create Super Tokens:
- It is permissionless and can be used by anyone to create Super Tokens.
- It is deployed on all the networks where you can find the Superfluid Protocol.

We will describe the steps for deploying each type of Super Token in the following chapters.

:::tip Contract addresses
For addresses of the Super Token Factory contract on different networks, refer to [The Superfluid Explorer](https://Explorer.superfluid.finance/), the Protocol section.
:::

<div style={{ display: 'flex', justifyContent: 'center' }}>
    ![SuperFluidConsole](/assets/ScreenshotConsoleFactory.png)
</div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <p>*SuperFluid Explorer: Protocol Section*</p>
</div>

---

## Deploying a Wrapper Super Token

:::tip Are you looking for a Super Token?
Are you looking for a specific token? It may already exist.

Check the [Explorer](https://Explorer.superfluid.finance/) to see if someone else has already created and listed a wrapper for the token you are looking for.
:::

You can deploy your own Wrapper Super Token using the Super Token Factory contract through the interface below. Please ensure you have the required parameters ready before proceeding:
- **Underlying Token**: The address of the ERC20 token to wrap.
- **Name**: The name of the Super Token. We always recommend using the same name as the underlying token prefexed with 'Super' (eg. 'Super DAI').
- **Symbol**: The symbol of the Super Token. We recommend using the same symbol as the underlying token suffixed with 'x' (eg. 'DAIx').

:::tip What is Upgradability?
If you look at the `CreateERC20Wrapper` method at the [Super Token Factory contract](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/superfluid/SuperTokenFactory.sol), you'll see a parameter called `Upgradability`.

This allows Superfluid Protocol Governance to upgrade the Super Token contract in the future and stay compatible with the latest features.
    - '0': Not Upgradable: The contract cannot be upgraded.
    - '1': Semi-Upgradability: The contract can be upgraded by Superfluid Protocol Governance but only under certain [conditions](https://github.com/superfluid-finance/protocol-monorepo/wiki/About-Super-Token-Classification).
    - '2': Fully Upgradable: The contract can be upgraded by Superfluid Protocol Governance without any restrictions.

For the purpose of simplicity, we always recommend using '1'. This is why this parameter is not included in the interface below and is set to 1 by default.
:::

You can choose to deploy your Wrapper Super Token using the interface on your favourite scanner (eg. [Etherscan](https://etherscan.io/)).
You can also use the interface below to deploy your Wrapper Super Token:
<ERC20Wrapper/>

<br/>

:::warning Manual name and symbol
Manual name and symbol input is not recommended unless the deployer above gives you an error and is unable to detect the underlying token name and symbol. The recommended format is always 'Super' + 'Underlying Token Name' and 'Underlying Token Symbol' + 'x'.
:::

:::warning Check Parameters
Double-check the parameters to avoid deployment errors.
:::

### Verifying and Adding Token to Superfluid Dashboard

After you token has been deployed, you can follow these steps in order to add your token to the Superfluid Dashboard:
- Locate the new Super Token's address in the "SuperTokenCreated" event log. This will allow you to retrieve the Super Token address.

<div style={{ display: 'flex', justifyContent: 'center' }}>
    ![Super Token Address](/assets/SuperTokenEvent.png)
</div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <p>*Super Token Address on Etherscan*</p>
</div>

- Follow [these steps](/docs/protocol/contribute/submit-token-dashboard) to submit your request. You will need to provide the Super Token address and some other information.

---

## Deploying a Self-Governed Super Token

Self-Governed Super Tokens give you the ability to control and update Super Token logic.

### Deployment Process

1. **Using SuperTokenFactory**: Interact with the `createERC20Wrapper` function with the `admin` parameter on the SuperTokenFactory contract.
2. **Updating Logic**: Use `updateCode` to apply custom logic or update to the latest Superfluid token contract.

<Admonition type="tip">

For more information, see the [Self-Governed Super Token Wiki](https://github.com/superfluid-finance/protocol-monorepo/wiki/Self-Governed-Super-Token) or seek assistance on [Superfluid Discord](https://discord.superfluid.finance/).

</Admonition>

<Admonition type="warning" title="Be careful!">

Unless you know what you are doing, deploying a self-governed Super Token is not recommended.

</Admonition>
