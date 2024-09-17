---
sidebar_position: 1
---
import ContractsTable from '@site/src/components/ContractsTable';

# Protocol Architecture

The Superfluid Protocol is designed with a modular and upgradable architecture, consisting of several smart contract components that interact with each other to facilitate real-time finance on the blockchain.

## Overview
The architecture diagram below provides a high-level overview of the Superfluid Protocol's components and their relationships.
It is the protocol deployed when a new `SuperfluidFrameworkDeployer` instance is created and the method `deployFramework()`.
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src="/assets/architecture.png" alt="Architecture" width="900" />
</div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <p>*Architecture of the Superfluid Protocol*</p>
</div>

## Legend

- **Immutable Instance**: These are contract instances that are not intended to be upgraded or changed.
- **Upgradable Instance**: These are contract instances that are intended to be upgraded or changed, eventually by the Superfluid Protocol's Governance.
- **Link**: Represents the relationship or interaction between components.


## Components

### SuperToken (UUPS Proxy - EIP-1967)

This is the fundamental smart contract within the Superfluid Protocol, which is an upgradable advanced token contract which inherits from the ERC20 standard, and enhances it
with additional features such as Money Streaming and Distributions.

:::note Unmanaged SuperTokens
Super Token contracts can be created by anyone, and can either be managed by the Superfluid Protocol ([The Host](#superfluid-host-contract-uups-proxy)), or completely unmanaged with no influence from the Host.
They can be used to represent any asset or right, and can be used in any context.
:::

### Superfluid Agreements

#### ConstantFlowAgreementV1 (UUPS Proxy)

A versioned agreement that governs the continuous flow of tokens between parties, ie [Money Streaming](/docs/protocol/money-streaming/overview.mdx).

#### InstantDistributionAgreementV1 (UUPS Proxy)

A smart contract that manages the mechanisms for the instant distribution of tokens, a feature that allows for scalable one-to-many token distributions.

:::warning Deprecated
This agreement is in the process of being deprecated in favor of the more flexible [GeneralDistributionAgreementV1](#generaldistributionagreementv1-uups-proxy).
:::

#### GeneralDistributionAgreementV1 (UUPS Proxy)

A smart contract that manages the mechanisms for everything related to one-to-many transfers and streams, ie [Distributions](/docs/protocol/distributions/overview.mdx).

### Infrastructure

#### Superfluid Host Contract (UUPS Proxy)

The central contract that hosts the Superfluid Protocol, managing the various tokens and agreements.

#### SuperTokenFactory (UUPS Proxy)

A factory contract for creating SuperTokens, likely with specific initial conditions or properties.

#### SuperfluidPool (UUPS Proxy)

This a contract representing the [Pools](/docs/protocol/distributions/guides/pools.mdx) created to manage Distributions.

### Superfluid Governance

#### SuperfluidGovernanceII (UUPS Proxy)

The main governance contract that will allow Superfluid community members to participate in the governance of the protocol.

### Existential NFTs

#### ConstantFlowNFT (UUPS Proxy)

Smart contract for non-fungible tokens (NFTs) that have a constant flow rate associated with them. These are NFTs minted to represent Money Streaming flows.

#### PoolAdminNFT (UUPS Proxy)

NFT contract representing admin rights over a [SuperfluidPool](#superfluidpool-uups-proxy).

#### PoolMemberNFT (UUPS Proxy)

This is an NFT contract where tokens represent membership within a pool, granting units to members in that pool.

## Learn more

The technical details and contract interactions are further documented in the codebase. Refer to the following for an in-depth understanding:

- [Superfluid Framework Deployment Steps](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/utils/SuperfluidFrameworkDeploymentSteps.sol).
- [Superfluid Protocol Monorepo Wiki](https://github.com/superfluid-finance/protocol-monorepo/wiki).

