---
sidebar_position: 4
---

import TabItem from '@theme/TabItem'; import Tabs from '@theme/Tabs';

# Testing

In this guide, we'll walk through the process of testing the `DistributionContract` using the Foundry framework. This guide follows the structure used for the `Superfluid` contract, adapting to the specifics of the `DistributionContract`.

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
<summary>Click here to show `DistributionContract`</summary> 
<p>

```solidity
//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.14;

import { ISuperfluid, ISuperToken } from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import { SuperTokenV1Library } from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

import {IGeneralDistributionAgreementV1, ISuperfluidPool, PoolConfig} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/gdav1/IGeneralDistributionAgreementV1.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IFakeDAI is IERC20 {

    function mint(address account, uint256 amount) external;

}

contract DistributionContract {

    using SuperTokenV1Library for ISuperToken;
    
    mapping (address => bool) public accountList;

    ISuperToken public daix;

    ISuperfluidPool pool;

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

    /// @dev creates a Pool with this contract being the admin
    function createPool(ISuperToken token, PoolConfig memory poolConfig) external {

        // Create Pool
        pool=daix.createPool(token, address(this), poolConfig);

    }

    /// @dev updates Units for a specific member
    function updateMemberUnits(address memberAddress, uint128 newUnits) external {

        // Update member units
        pool.updateMemberUnits(memberAddress, newUnits);

    }

    /// @dev creates a stream from this contract to the pool
    function createStreamToPool(int96 flowRate) external {

        // Create stream
        daix.createFlow(receiver, flowRate);

    }

}
```

</p> </details> </div>

* **gainDaiX**: Mints and wraps fDAI into fDAIx.
* **createPool**: Initiates a new Superfluid pool with this contract as the admin.
* **updateMemberUnits**: Updates units for a specific pool member.
* **createStreamToPool**: Creates a money stream from this contract to the pool.

## Writing Tests

### Setting Up Your Test Environment

Your test environment will depend on where you would like to test your Superfluid application.
You can fork a public testnet where an instance of the Superfluid Protocol already exists (e.g Polygon Mumbai). In this case, you do not need to deploy a new instance of the Superfluid protocol.
However, if you are testing on a local testnet you would need to deploy a new instance of the Superfluid protocol.

<Tabs
    defaultValue="testnet"
    values={[
        { label: 'Forking Testnet', value: 'testnet' },
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

contract DistributionContractTest is Test {
    // Test contract instance
    DistributionContract distributionContract;
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
        distributionContract= new DistributionContract(daix);
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
- Deploy a new instance of the Superfluid Protocol in the `setUp`function.
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


contract DistributionContractTest is Test {
    // Test contract instance
    DistributionContract distributionContract;
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
        sfDeployer.deployFramework();
        sf = sfDeployer.getFramework();
				
	    // DEPLOYING DAI and DAI wrapper super token

	    ISuperToken daix = sfDeployer.deployWrapperToken(
	    "Fake DAI", "DAI", 18, 10000000000000
	    );

        // Deploy your contract here
        distributionContract= new DistributionContract(daix);

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

The `gainDaiX` function mints and wraps fDAI into fDAIx. Here's how to test it:

```solidity
function testGainDaiX() public {
    // Setup: Deploy the DistributionContract with a mock fDAIx token
    ISuperToken daix = new MockSuperToken();
    DistributionContract distributionContract = new DistributionContract(daix);

    // Action: Call the gainDaiX function
    distributionContract.gainDaiX();

    // Assertions: Check if the contract has the expected amount of fDAIx
    uint256 balance = daix.balanceOf(address(distributionContract));
    assertEq(balance, 10000e18, "The balance of fDAIx should be 10,000 after gainDaiX");
}
```

#### CreatePool Function

To test `createPool`, you'll verify if a pool is created with the correct parameters:

```solidity
function testCreatePool() public {
    // Setup: Deploy the DistributionContract and mock tokens
    ISuperToken daix = new MockSuperToken();
    DistributionContract distributionContract = new DistributionContract(daix);

    // Define pool configuration
    PoolConfig memory poolConfig;
    // Set poolConfig parameters...

    // Action: Call the createPool function
    distributionContract.createPool(daix, poolConfig);

    // Assertions: Verify if the pool is created correctly
    ISuperfluidPool pool = distributionContract.pool();
    // Additional assertions about pool...
}
```

#### UpdateMemberUnits Function

Testing `updateMemberUnits` involves checking if member units in a pool are updated correctly:

```solidity
function testUpdateMemberUnits() public {
    // Setup: Deploy the DistributionContract, create a pool, and add members
    ISuperToken daix = new MockSuperToken();
    DistributionContract distributionContract = new DistributionContract(daix);
    // Create pool...
    address memberAddress = address(new Member());

    // Action: Update member units
    uint128 newUnits = 100;
    distributionContract.updateMemberUnits(memberAddress, newUnits);

    // Assertions: Check if the member's units are updated
    uint128 updatedUnits = daix.getMemberUnits(memberAddress);
    assertEq(updatedUnits, newUnits, "Member units should be updated to the new value");
}
```

#### CreateStreamToPool Function

For `createStreamToPool`, you'll need to ensure that a stream is correctly established:

```solidity
function testCreateStreamToPool() public {
    // Setup: Deploy the DistributionContract and create a pool
    ISuperToken daix = new MockSuperToken();
    DistributionContract distributionContract = new DistributionContract(daix);
    // Create pool...

    // Action: Create a stream to the pool
    int96 flowRate = 1000;
    distributionContract.createStreamToPool(flowRate);

    // Assertions: Verify the stream is created with the correct flow rate
    // Implement checks for stream creation...
}
```

### Using Cheat Codes

Foundry's cheat codes can simulate various scenarios. Here's an example of using a cheat code to test access control:

```solidity
function testUnauthorizedAccess() public {
    // Setup: Deploy the DistributionContract
    DistributionContract distributionContract = new DistributionContract(...);

    // Use cheat codes to simulate an unauthorized user
    vm.prank(address(0x123));
    vm.expectRevert("Unauthorized access");

    // Attempt to call a function that requires specific permissions
    distributionContract.someFunctionRequiringAuthorization();
}

## Running Tests

Execute your tests using the following command:

```bash
forge test
```

## Best Practices

* Write clear, descriptive test cases.
* Maintain code readability.
* Use Foundry cheat codes for simulating real-world scenarios.
* Aim for high test coverage.

## Conclusion

Testing ensures the reliability and security of blockchain contracts. This guide provides a foundational approach for using Foundry to test the `DistributionContract`.

## Further Resources

* [Foundry Book](https://foundry.readthedocs.io)
