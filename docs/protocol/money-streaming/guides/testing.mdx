---
sidebar_position: 4
---

import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";

# Testing

In this guide, we'll walk through the process of testing a Superfluid contract using the Foundry framework. We'll use the `FlowSender` contract described in the [Quickstart](/docs/protocol/quickstart.mdx) as our example to demonstrate how to write effective tests.

## Prerequisites

Before diving into testing your Superfluid contracts with Foundry, make sure you have set up your development environment properly. Here's a brief explanation of each step required:

1. **Creating and Navigating to Your Project Directory**:

   ```bash
   mkdir superfluid-example && cd superfluid-example
   ```

   This command creates a new directory named `foundry-example` and then changes your current working directory to it.

2. **Initializing a Foundry Project**:

   ```bash
   forge init
   ```

   This initializes a new Foundry project in your directory, setting up the necessary structure and configuration for Ethereum smart contract development.

3. **Installing Superfluid Protocol Dependencies**:

   ```bash
   forge install superfluid-protocol-monorepo=https://github.com/superfluid-finance/protocol-monorepo --no-commit
   ```

   Installs the `dev` branch of the Superfluid protocol from its GitHub repository.

4. **Installing OpenZeppelin Contracts**:

   ```bash
   forge install https://github.com/OpenZeppelin/openzeppelin-contracts@v4.9.6 --no-commit
   ```

   Installs the necessary (4.9.X) of the OpenZeppelin contracts, which are widely used for secure smart contract development.

These steps ensure you have the necessary tools and dependencies installed to start developing and testing your Superfluid-based contracts with Foundry.

## Contract and Key Functions

<div>
<details>
<summary>Click here to show `FlowSender` contract</summary>
<p>

```solidity
//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.14;

import { ISuperfluid, ISuperToken } from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import { SuperTokenV1Library } from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// For deployment on Mumbai Testnet

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

    /// @dev creates a stream from this contract to desired receiver at desired rate
    function createStream(int96 flowRate, address receiver) external {

        // Create stream
        daix.createFlow(receiver, flowRate);

    }

    /// @dev updates a stream from this contract to desired receiver to desired rate
    function updateStream(int96 flowRate, address receiver) external {

        // Update stream
        daix.updateFlow(receiver, flowRate);

    }

    /// @dev deletes a stream from this contract to desired receiver
    function deleteStream(address receiver) external {

        // Delete stream
        daix.deleteFlow(address(this), receiver);

    }

    /// @dev get flow rate between this contract to certain receiver
    function readFlowRate(address receiver) external view returns (int96 flowRate) {

        // Get flow rate
        return daix.getFlowRate(address(this), receiver);

    }

}
```

</p>
</details>
</div>

- **gainDaiX**: Mints and wraps fDAI into fDAIx (Superfluid's wrapped token).
- **createStream**: Initiates a new money stream to a specified receiver.
- **updateStream**: Updates an existing money stream's flow rate.
- **deleteStream**: Terminates an existing money stream.
- **readFlowRate**: Reads the current flow rate of a stream.

## Writing Tests

### Setting Up Your Test Environment

Your test environment will depend on where you would like to test your Superfluid application.
You can fork a public testnet where an instance of the Superfluid Protocol already exists (e.g Polygon Mumbai). In this case, you do not need to deploy a new instance of the Superfluid protocol.
However, if you are testing on a local testnet you would need to deploy a new instance of the Superfluid protocol.

<Tabs
    defaultValue="testnet"
    values={[
        { label: 'Forked Testnet', value: 'testnet' },
        { label: 'Local Net', value: 'localnet' },
    ]}
>

<TabItem value="testnet">

- Create a new Solidity file for your tests
- Import `forge-std/Test.sol` and inherit from `Test`.
- Import the Superfluid protocol contracts.
- Write your `setUp` function to run before each test case.

```solidity
pragma solidity ^0.8.14;
import "forge-std/Test.sol";
import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {TestGovernance, Superfluid, ConstantFlowAgreementV1, CFAv1Library, SuperTokenFactory} from "@superfluid-finance/ethereum-contracts/contracts/utils/SuperfluidFrameworkDeploymentSteps.sol";
import {SuperfluidFrameworkDeployer} from "@superfluid-finance/ethereum-contracts/contracts/utils/SuperfluidFrameworkDeployer.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

contract FlowSenderTest is Test {
    // Test contract instance
    FlowSender flowSender;
    // Mumbai fork parameters
    uint256 mumbaiFork;
    // Set up your environment variables and include MUMBAI_RPC_URL
    string MUMBAI_RPC_URL = vm.envString("MUMBAI_RPC_URL");

    // Setup function to initialize test environment
    function setUp() public {

        //Forking and selecting the Mumbai testnet
        mumbaiFork = vm.createSelectFork(MUMBAI_RPC_URL);

        //Pointing to the fake Daix contract on Mumbai
        //For token and protocol addresses on all networks, check out the Superfluid Explorer: https://Explorer.superfluid.finance/
        daix = ISuperToken(0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f);

        //Deploy the contract
        vm.prank(address(0x123)); // Simulate a different caller
        flowSender=new FlowSender(daix);
        vm.unprank(); // Restore the caller

        //Add other functions and test contracts...
    }
}
```

</TabItem>
<TabItem value="localnet">
- Create a new Solidity file for your test.
- Import `forge-std/Test.sol` and inherit from `Test`.
- Import the Superfluid protocol contracts.
- Deploy a new instance of the Superfluid Protocol in the `setUp` function.
- Create and Deploy a new instance of your test contract.

```solidity
pragma solidity ^0.8.14;
import "forge-std/Test.sol";
import {ISuperfluid} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperfluidFrameworkDeployer,
    TestGovernance,
    Superfluid,
    ConstantFlowAgreementV1,
    CFAv1Library,
    SuperTokenFactory
} from "@superfluid-finance/ethereum-contracts/contracts/utils/SuperfluidFrameworkDeployer.sol";


contract FlowSenderTest is Test {
    // Test contract instance
    FlowSender flowSender;
    //Set up your Superfluid framework
    struct Framework {
        TestGovernance governance;
        Superfluid host;
        ConstantFlowAgreementV1 cfa;
        CFAv1Library.InitData cfaLib;
        InstantDistributionAgreementV1 ida;
        IDAv1Library.InitData idaLib;
        SuperTokenFactory superTokenFactory;
    }

    SuperfluidFrameworkDeployer.Framework sf;

    // Setup function to initialize test environment
    function setUp() public {
        address public owner;
	    //DEPLOYING THE FRAMEWORK
        SuperfluidFrameworkDeployer sfDeployer = new SuperfluidFrameworkDeployer();
        sfDeployer.deployTestFramework();
        sf = sfDeployer.getFramework();

	    // DEPLOYING DAI and DAI wrapper super token

	    ISuperToken daix = sfDeployer.deployWrapperToken(
	    "Fake DAI", "DAI", 18, 10000000000000
	    );

        // Initialize your contract here
        flowSender = new FlowSender(
            daix
        );

    }
}
```

</TabItem>
</Tabs>

:::tip About the `setUp` Function
The `setUp` function is an **optional** function standardized by Foundry (but it is necessary here, especially in the case of local testnet). It is a special function that is executed before each test case. It is used to initialize the test environment and contract instances.
To learn more about the `setUp` function, check out the [Foundry documentation](https://book.getfoundry.sh/forge/writing-tests).
:::

### Testing Contract Functions

#### GainDaiX Function

Let's write a test for the `gainDaiX` function in the `FlowSender` contract:

```solidity
function testGainDaiX() public {
    // Setup: Deploy the FlowSender contract
    IFakeDAI fdai = new FakeDAI();
    ISuperToken daix = new SuperToken(address(fdai));
    FlowSender flowSender = new FlowSender(daix);

    // Action: Call the gainDaiX function
    flowSender.gainDaiX();

    // Assertions: Check if the contract has the expected amount of DAIx
    uint256 balance = daix.balanceOf(address(flowSender));
    assertEq(balance, 10000e18, "The balance of DAIx should be 10,000 after gainDaiX");
}
```

#### CreateStream Function

Now, let's test the `createStream` function:

```solidity
function testCreateStream() public {
    // Setup: Deploy the FlowSender contract and create a receiver address
    IFakeDAI fdai = new FakeDAI();
    ISuperToken daix = new SuperToken(address(fdai));
    FlowSender flowSender = new FlowSender(daix);
    address receiver = address(new Receiver());

    // Setup: Define a flow rate
    int96 flowRate = 1000; // Example flow rate

    // Action: Call the createStream function
    flowSender.createStream(flowRate, receiver);

    // Assertions: Verify if the stream is created with correct parameters
    (,int96 outFlowRate,,) = daix.getFlow(address(flowSender), receiver);
    assertEq(outFlowRate, flowRate, "The flow rate should match the specified rate");
}

```

### Using Cheat Codes

Foundry's cheat codes can simulate various blockchain states and interactions. For example, to test the `deleteStream` function, you might want to simulate different account permissions:

```solidity
function testDeleteStream() public {
    // Setup: Deploy the FlowSender contract and create a receiver address
    IFakeDAI fdai = new FakeDAI();
    ISuperToken daix = new SuperToken(address(fdai));
    FlowSender flowSender = new FlowSender(daix);
    address receiver = address(new Receiver());

    // Setup: Create a stream first
    flowSender.createStream(1000, receiver);

    // Use cheat codes to simulate different account permissions
    // Attempt to delete a stream with an unauthorized user
    vm.prank(address(0x123)); // Simulate a different caller
    vm.expectRevert("Unauthorized"); // Expect a revert due to unauthorized access
    flowSender.deleteStream(receiver);

    // Action: Attempt to delete a stream with the correct permission
    flowSender.deleteStream(receiver);

    // Assertions: Verify the stream is deleted
    (,int96 outFlowRate,,) = daix.getFlow(address(flowSender), receiver);
    assertEq(outFlowRate, 0, "The flow rate should be zero after deletion");
}

```

## Running Tests

To execute your tests, use:

```bash
forge test
```

## Best Practices

- Write clear and descriptive test cases.
- Ensure code readability for easier maintenance.
- Use Foundry cheat codes to simulate real-world scenarios.
- Strive for high test coverage to capture a wide range of use cases.

## Conclusion

Testing is crucial in blockchain development for ensuring contract reliability and security, especially for complex protocols like Superfluid. This guide provides a foundation for using Foundry to write and run effective tests.

## Further Resources

- [Foundry Book](https://foundry.readthedocs.io)
