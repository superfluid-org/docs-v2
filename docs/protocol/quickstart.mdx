---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FlowSenderVis from '@site/src/components/Visualizations/FlowSenderVis';
import MotomoComponent from '@site/src/components/MotomoComponent';


# Quickstart

<MotomoComponent/>

Superfluid is a token-centric protocol revolving around a new token standard called Super Token. Super Tokens have special capabilities.
One of them allows to create second-by-second token transfers (called [Money Streaming](/docs/protocol/money-streaming/overview.mdx)).
In this guide, we'll walk through the process of setting up and deploying a basic vesting contract which deploys a Mock Super Token and creates a stream to a recipient.

This contract allows you to:
- Deploy a Mock Super Token
- Create, update or delete money streams

:::note Why this Quickstart?
This is just an example to get you started with Superfluid. You can use this as a base to build more complex applications.

You DO NOT need to follow this quickstart guide in order to create, update and delete streams. You can do this directly from the [Dashboard](https://app.superfluid.finance/) or by interacting with the [CFAv1Forwarder contract](https://docs.superfluid.finance/docs/technical-reference/CFAv1Forwarder).
:::

## Prerequisites

- The [Superfluid Simple Vesting Contract Repository](https://github.com/superfluid-finance/superfluid-boilerplate)
- A development environment *(Remix or Foundry)*
- A testnet wallet (in case you want to deploy the contract to a testnet) *(e.g., MetaMask)*


## Contract Overview: SuperfluidBoilerplate

In this guide we will describe the contract [`SuperfluidVesting.sol`](https://github.com/superfluid-finance/superfluid-quickstart/blob/master/src/SuperfluidVesting.sol):
- This contract is designed to interact with the Superfluid protocol, specifically to deploy a [Super Token](/docs/protocol/super-tokens/overview) and use [Money Streaming](/docs/protocol/money-streaming/overview.mdx).
- The contract enables the deployment of a Mock Super Token in the constructor.
- This contract enables the creation, modification, and deletion of continuous money streams to the a recipient.

<div style={{ display: 'flex', justifyContent: 'center' }}>
<FlowSenderVis/>
</div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <p>*Visualization showing the vesting contract streaming tokens to users*</p>
</div>


### Contract and Key Functions

<div>
<details>
<summary>Click here to show `SuperfluidBoilerplate` contract</summary>
<p>

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {SuperTokenV1Library, ISuperToken, ISuperfluid} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {ISuperTokenFactory} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperTokenFactory.sol";
import {PureSuperTokenProxy, IPureSuperToken} from "./PureSuperToken.sol";

/// @title SuperfluidVesting
/// @notice A contract for managing token vesting using Superfluid streams
/// @dev Uses SuperTokenV1Library for handling Superfluid token operations
contract SuperfluidVesting {
    using SuperTokenV1Library for ISuperToken;

    /// @notice The Super Token that will be used for vesting
    ISuperToken public acceptedSuperToken;
    /// @notice The Superfluid protocol host contract
    ISuperfluid public host;
    /// @notice The address of the contract owner
    address public owner;

    /// @notice Restricts function access to contract owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    /// @notice Initializes the vesting contract
    /// @param _host The address of the Superfluid host contract
    /// @dev Assigns the host and owner addresses
    /// Creates a new PureSuperToken and initializes it with mock data
    /// Mints the total supply of the token to the contract
    constructor(ISuperfluid _host) {
        host = _host;
        owner = msg.sender;
        acceptedSuperToken = IPureSuperToken(address(new PureSuperTokenProxy()));
        PureSuperTokenProxy(payable(address(acceptedSuperToken))).initialize(
            ISuperTokenFactory(host.getSuperTokenFactory()),
            "Mock Super Token",
            "mST",
            address(this),
            1000000000000000000000000
        );
    }

    /// @notice Creates or updates a vesting stream for a recipient
    /// @param recipient The address that will receive the stream
    /// @param flowRate The rate at which tokens will be streamed (tokens per second)
    /// @dev Flow rate must be positive and contract must have sufficient balance
    function setVesting(address recipient, int96 flowRate) public onlyOwner {
        require(flowRate > 0, "Flow rate must be greater than 0");
        require(acceptedSuperToken.balanceOf(address(this)) > 0, "Insufficient balance");
        acceptedSuperToken.flow(recipient, flowRate);
    }
}
```

</p>
</details>
</div>


The contract has two main methods:

- **constructor**: Creates a new contract and with it it deploys a Mock Super Token with 1,000,000 units initial supply minted to the contract.
- **setVesting**: Creates, updates or deletes a stream to the user with the specified flow rate, gated by the modifier `onlyOwner`.


## Environment Setup and Deployment

<Tabs>
  <TabItem value="remix" label="Remix IDE" default>

### Using Remix IDE

1. **Create Files**: 
   - Create `SuperfluidVesting.sol` and paste the main contract from the [repository's `/src` folder](https://github.com/superfluid-finance/superfluid-quickstart/tree/master/src)
   - Create `PureSuperToken.sol` and paste the interface from the [repository's `/src` folder](https://github.com/superfluid-finance/superfluid-quickstart/tree/master/src)
2. **Compile**: Select compiler version 0.8.20 or higher
3. **Deploy**: 
   - Select "Injected Provider - MetaMask"
   - Choose your network (make sure Superfluid supports it - check [here](https://explorer.superfluid.finance/base-mainnet/protocol))
   - Enter the Superfluid host address in the constructor (get it from the [docs](/docs/protocol/contract-addresses) or from the [explorer](https://explorer.superfluid.finance/base-mainnet/protocol))
   - Click "Deploy"

  </TabItem>
  <TabItem value="foundry" label="Foundry">

### Using Foundry

After cloning the [Superfluid Boilerplate Repository](https://github.com/superfluid-finance/superfluid-quickstart), you can test and deploy the contract with the following commands:

1. **Install Dependencies**:
```bash
forge install
```

2. **Test**:
```bash
forge test
```

3. **Deploy**:
```bash
forge create src/SuperfluidVesting.sol:SuperfluidVesting \
  --constructor-args SUPERFLUID_HOST_ADDRESS \
  --rpc-url YOUR_RPC_URL \
  --private-key YOUR_PRIVATE_KEY
```

  </TabItem>
</Tabs>

:::tip Where can I get the Superfluid host address?
Make sure to use the correct Superfluid host address for your network.
You can get the Superfluid host address from the [docs](/docs/protocol/contract-addresses) or from the [explorer](https://explorer.superfluid.finance/base-mainnet/protocol).
:::

## Using the Contract

After deployment, interact with your contract in 3 different ways:

1. **Create Vesting**:
   - Call `setFlowRate(flowRate)`
   - The `flowRate` is tokens per second (with 18 decimals)
   - Example:
     - For 1 token per month, use `flowRate ≈ 380414535736`
2. **Update Vesting**:
   - Call `setFlowRate(flowRate)`
   - The `flowRate` is tokens per second (with 18 decimals)
   - Example:
     - For 1 token per week, use `flowRate ≈ 1653439153439`
3. **Delete Vesting**:
   - Call `setFlowRate(0)`

:::tip How do I find the full list of methods for the SuperTokenV1Library?
You can find the full list of methods for the SuperTokenV1Library in the [SuperTokenV1Library Technical Reference](/docs/technical-reference/SuperTokenV1Library).
:::

## Testing Your Contract

As you can see in the repository, we have a test file that tests the contract. Here's a breakdown of the test file:

```solidity
// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import {SuperfluidVesting} from "../src/SuperfluidVesting.sol";
import {SuperfluidFrameworkDeployer} from "@superfluid-finance/ethereum-contracts/contracts/utils/SuperfluidFrameworkDeployer.t.sol";
import {SuperTokenV1Library, ISuperToken, ISuperfluid} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import { ERC1820RegistryCompiled } from "@superfluid-finance/ethereum-contracts/contracts/libs/ERC1820RegistryCompiled.sol";


contract SuperfluidVestingTest is Test {
    SuperfluidVesting private vestingContract;
    SuperfluidFrameworkDeployer.Framework private sf;
    ISuperToken private acceptedSuperToken;
    using SuperTokenV1Library for ISuperToken;

    function setUp() public {
        vm.etch(ERC1820RegistryCompiled.at, ERC1820RegistryCompiled.bin);
        SuperfluidFrameworkDeployer sfDeployer = new SuperfluidFrameworkDeployer();
        sfDeployer.deployTestFramework();
        sf = sfDeployer.getFramework();
    
        vestingContract = new SuperfluidVesting(sf.host);
        acceptedSuperToken = vestingContract.acceptedSuperToken();
    }

    function testVesting() public {
        vestingContract.setVesting(address(this), 100000000);
        uint256 flowRate = uint256(uint96(acceptedSuperToken.getFlowRate(address(vestingContract), address(this))));
        assertEq(flowRate, uint256(100000000));
    }

}
```

The test file does two main things:

1. **Setup (`setUp` function)**:
   - Deploys a local version of the Superfluid protocol for testing
   - Creates our `SuperfluidBoilerplate` contract
   - Deploys the Mock Super Token

2. **Vesting Test (`testVesting` function)**:
   - Creates a vesting stream with a flow rate of 100000000 wad/second
   - Verifies that the flow rate was set correctly

You can run these tests using the `forge test` command as shown in the setup instructions above.

## Next Steps

Now that you understand the basics, you can:

1. **Explore Super Tokens**:
   - [Super Tokens Overview](/docs/protocol/super-tokens/overview)
   - [Advanced Token Creation](docs/protocol/super-tokens/guides/deploy-super-token/deploy-custom-super-token)

2. **Build Smart Contracts**:
   - [Money Streaming Overview](/docs/protocol/money-streaming/overview)
   - [Distribution Pools Overview](docs/protocol/distributions/overview)
   - [How to use the SuperTokenV1Library](/docs/protocol/super-tokens/guides/using-library)

3. **Build your client application**:
   - [SDK Quickstart](/docs/sdk/quickstart)
