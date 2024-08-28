---
sidebar_position: 2
---

import StakingContract from '@site/src/components/StakingContract';

# Staking Platform

This guide explores the development of a staking platform, leveraging the capabilities of Superfluid's [Distribution Pools](/docs/protocol/distributions/guides/pools.mdx) (also called the *General Distributions Agreement - GDA*).


<StakingContract/>


## Repository

The contract and associated tests can be found in the [SuperfluidStaking Repository](https://github.com/superfluid-finance/sf-example-staking).

## Contract Architecture

The SuperfluidStaking system consists of two main contracts:

1. **SuperfluidStaking**: The core contract that manages staking, unstaking, and reward distribution.
2. **ClaimContract**: An auxiliary contract created for each staker to manage their individual rewards.

### SuperfluidStaking Contract

This contract is responsible for:

- Accepting stakes from users
- Managing the total staked amount
- Creating and upgrading Super Tokens for rewards
- Creating and managing a Superfluid pool for reward distribution
- Handling the unstaking process
- Facilitating reward claims

Key components:

- `underlyingStakedToken`: The ERC20 token that users stake
- `underlyingRewardsToken`: The ERC20 token used for rewards
- `superToken`: The Super Token wrapper for the rewards token
- `pool`: The Superfluid pool used for distributing rewards
- `scalingFactor`: A factor used to scale down staked amounts for precision

### ClaimContract

This contract is created for each staker and is responsible for:

- Claiming rewards from the Superfluid pool
- Holding claimed rewards until withdrawn by the staker

## Setup and Installation

To set up the development environment and run the tests, follow these steps:

1. **Install Foundry**

   Foundry is a blazing fast, portable and modular toolkit for Ethereum application development. To install Foundry, run the following command:

   ```bash
   curl -L https://foundry.paradigm.xyz | bash
   ```

   Then, run `foundryup` in a new terminal session to install the latest version.

2. **Clone the repository**

   ```bash
   git clone https://github.com/superfluid-finance/sf-example-staking
   cd superfluid-staking
   ```

3. **Install dependencies**

   Use Forge to install the necessary dependencies:

   ```bash
   forge install
   ```

   This will install OpenZeppelin contracts and Superfluid contracts as specified in the `foundry.toml` file.

4. **Compile the contracts**

   ```bash
   forge build
   ```

5. **Run the tests**

   ```bash
   forge test
   ```

   This will run all the test cases defined in the `test` directory.

## Contract Interaction Flow

1. **Deployment**: The contract is deployed with parameters for the staked token, rewards token, Superfluid token factory, and scaling factor.

2. **Supplying Funds**: The contract owner calls `supplyFunds` to add rewards to the pool.

3. **Staking**: Users call `stake` to deposit tokens. This creates a ClaimContract if they don't have one and updates their units in the Superfluid pool.

4. **Unstaking**: Users call `unstake` to withdraw their staked tokens. This updates their units in the Superfluid pool.

5. **Claiming Rewards**: Users call `claimRewards` to receive their accumulated rewards. This interacts with their ClaimContract to fetch and distribute rewards.

## Key Considerations

- The use of a scaling factor is crucial for maintaining precision in reward calculations, especially when dealing with tokens of different decimals.
- The ClaimContract pattern allows for efficient reward claiming without requiring frequent updates to the main contract.
- The contract leverages Superfluid's streaming capabilities for continuous and gas-efficient reward distribution.

## Testing

The test suite (located in `test/SuperfluidStaking.t.sol`) covers various scenarios including:

- Staking and unstaking
- Reward distribution and claiming
- Multiple users interacting with the contract
- Edge cases and potential vulnerabilities

To run a specific test:

```bash
forge test --match-test testFunctionName
```

Replace `testFunctionName` with the name of the test function you want to run.

## Conclusion

The SuperfluidStaking contract provides a robust and efficient system for stake-based reward distribution using Superfluid.
By following this guide, you should be able to understand the contract's architecture, set up your development environment, and run the tests.