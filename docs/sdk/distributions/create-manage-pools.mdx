---
sidebar_position: 1
---

# Create and Manage Distribution Pools

This guide explains how to create and manage [Distribution Pools](/docs/protocol/distributions/overview) in Superfluid using the `GDAv1Forwarder` contract.
Distribution pools are a key feature of Superfluid that enable scalable one-to-many and many-to-many transfers and streaming of tokens.

:::tip What are Distribution Pools?
Distribution pools are a mechanism for distributing tokens among multiple recipients.
They are managed by a pool admin who controls the pool's configuration and member units.
Pool members receive distributions based on their units in the pool.
To learn more about distribution pools, refer to the [Distributions Overview](/docs/protocol/distributions/overview).
:::

## Interacting with Distribution Pools from Client Applications

To interact with Superfluid's distribution pools from client applications, you'll use the [`GDAv1Forwarder`](/docs/technical-reference/GDAv1Forwarder) contract. Here's how to set it up:

### Contract ABI and Address

The `GDAv1Forwarder` contract address is the same on all Superfluid chains:

```
0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08
```

You can find the full ABI of the `GDAv1Forwarder` contract in the [GDAv1Forwarder technical reference](/docs/technical-reference/GDAv1Forwarder).

### Setting up with ethers.js

Here's how to initiate interaction with the `GDAv1Forwarder` contract using ethers.js:

```javascript
import { ethers } from 'ethers';

// Assuming you have a provider set up (e.g., using MetaMask)
const provider = new ethers.providers.Web3Provider(window.ethereum);

// The address of the GDAv1Forwarder contract
const forwarderAddress = '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08';

// The ABI of the GDAv1Forwarder contract (import this from the technical reference)
const forwarderABI = [...]; // Insert the ABI here

// Create a contract instance
const forwarderContract = new ethers.Contract(forwarderAddress, forwarderABI, provider.getSigner());
```

## Understanding Distribution Pools

Distributions is a Superfluid primitive that allows scalable one-to-many or many-to-many transfer of value, in the form of discrete transfers or Money Streaming. Superfluid's implementation of this concept allows for the creation of **Pools** with a designated **pool admin** who manages **units** for **pool members**.

Key concepts:
- **Pool**: A mechanism for distributing tokens among multiple recipients.
- **Pool Admin**: The address that has control over the pool's configuration and member units.
- **Units**: A measure of a member's share in the pool's distributions.
- **Pool Members**: Addresses that receive distributions from the pool based on their units.

## Interacting with the GDAv1Forwarder Contract

Let's look at how to use the `GDAv1Forwarder` contract to create and manage distribution pools.

### Creating a Pool

To create a new Superfluid Pool, use the `createPool` function:

```solidity
function createPool(
    ISuperfluidToken token,
    address admin,
    PoolConfig memory config
) external returns (bool success, ISuperfluidPool pool)
```

#### Parameters
- `token`: The Super Token address.
- `admin`: The pool admin address.
- `config`: The pool configuration (see below).

The `PoolConfig` struct is defined as follows:

```solidity
struct PoolConfig {
    bool transferabilityForUnitsOwner;
    bool distributionFromAnyAddress;
}
```
- `transferabilityForUnitsOwner`: If true, the pool members can transfer their owned units, else, only the pool admin can manipulate the units for pool members
- `distributionFromAnyAddress`: If true, anyone can execute distributions via the pool, else, only the pool admin can execute distributions via the pool

:::warning Strong recommendation
We don't recommend setting `transferabilityForUnitsOwner` to `true` unless you have a specific use case that absolutely requires it. This can sometimes lead to unexpected behavior and security risks.
:::

#### Usage Example

```javascript
const createPool = async (tokenAddress, adminAddress, config) => {
  try {
    const tx = await forwarderContract.createPool(tokenAddress, adminAddress, config);
    const receipt = await tx.wait();
    const [success, poolAddress] = receipt.events.find(e => e.event === 'PoolCreated').args;
    console.log("Pool created successfully:", poolAddress);
    return poolAddress;
  } catch (error) {
    console.error("Error creating pool:", error);
  }
};
```

### Updating Member Units

To update the units of a pool member, use the `updateMemberUnits` function:

```solidity
function updateMemberUnits(
    ISuperfluidPool pool,
    address memberAddress,
    uint128 newUnits,
    bytes memory userData
) external
```

#### Parameters
- `pool`: The Superfluid Pool to update.
- `memberAddress`: The address of the member to update.
- `newUnits`: The new units of the member.
- `userData`: User-specific data.

#### Usage Example

```javascript
const updateMemberUnits = async (poolAddress, memberAddress, newUnits, userData) => {
  try {
    const tx = await forwarderContract.updateMemberUnits(poolAddress, memberAddress, newUnits, userData);
    await tx.wait();
    console.log("Member units updated successfully!");
  } catch (error) {
    console.error("Error updating member units:", error);
  }
};
```

## Live UI Example for Distribution Pool Management

Here's an example of a UI component for creating and managing distribution pools:

```jsx live
function DistributionPoolManager() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [adminAddress, setAdminAddress] = useState('');
  const [poolAddress, setPoolAddress] = useState('');
  const [memberAddress, setMemberAddress] = useState('');
  const [newUnits, setNewUnits] = useState('');
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState('');
  const toast = useToast();

  const forwarderAddress = '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08';
  const forwarderABI = GDAv1ForwarderABI; // You will need to import the ABI in your code. You can do that from: https://docs.superfluid.finance/docs/technical-reference/CFAv1Forwarder

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setWalletConnected(true);
        toast({
          title: 'Wallet connected',
          description: `Connected to ${address}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error('Failed to connect wallet:', error);
        toast({
          title: 'Connection failed',
          description: 'Failed to connect wallet. Please try again.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: 'Metamask not detected',
        description: 'Please install Metamask to use this feature.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const createPool = async () => {
    if (!walletConnected) {
      toast({
        title: 'Wallet not connected',
        description: 'Please connect your wallet first.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(forwarderAddress, forwarderABI, signer);

    try {
      // For simplicity, we're using a basic pool configuration here
      const config = {
        transferabilityForUnitsOwner: 0, // Non-transferable
        distributionFromAnyAddress: false
      };
      
      const tx = await contract.createPool(tokenAddress, adminAddress, config);
      const receipt = await tx.wait();
      const [success, poolAddress] = receipt.events.find(e => e.event === 'PoolCreated').args;
      
      setPoolAddress(poolAddress);
      toast({
        title: 'Pool created',
        description: `Pool created successfully at ${poolAddress}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error creating pool:', error);
      toast({
        title: 'Error',
        description: 'Failed to create pool. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const updateMemberUnits = async () => {
    if (!walletConnected) {
      toast({
        title: 'Wallet not connected',
        description: 'Please connect your wallet first.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(forwarderAddress, forwarderABI, signer);

    try {
      const tx = await contract.updateMemberUnits(poolAddress, memberAddress, newUnits, "0x");
      await tx.wait();
      toast({
        title: 'Units updated',
        description: 'Member units updated successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error updating member units:', error);
      toast({
        title: 'Error',
        description: 'Failed to update member units. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="500px" margin="auto" padding="20px">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">Distribution Pool Manager</Text>
        
        {!walletConnected ? (
          <Button colorScheme="blue" onClick={connectWallet}>Connect Wallet</Button>
        ) : (
          <Text>Connected: {account}</Text>
        )}
        
        <Text fontSize="xl" fontWeight="bold">Create Pool</Text>
        <Input
          placeholder="Token Address"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
        />
        <Input
          placeholder="Admin Address"
          value={adminAddress}
          onChange={(e) => setAdminAddress(e.target.value)}
        />
        <Button colorScheme="green" onClick={createPool}>Create Pool</Button>
        
        <Text fontSize="xl" fontWeight="bold" mt={4}>Update Member Units</Text>
        <Input
          placeholder="Pool Address"
          value={poolAddress}
          onChange={(e) => setPoolAddress(e.target.value)}
        />
        <Input
          placeholder="Member Address"
          value={memberAddress}
          onChange={(e) => setMemberAddress(e.target.value)}
        />
        <Input
          placeholder="New Units"
          value={newUnits}
          onChange={(e) => setNewUnits(e.target.value)}
        />
        <Button colorScheme="blue" onClick={updateMemberUnits}>Update Member Units</Button>
      </VStack>
    </Box>
  );
}
```

This UI provides the following features:

1. **Wallet Connection**: Users can connect their Ethereum wallet to interact with the Superfluid protocol.
2. **Create Pool**: Users can create a new distribution pool by providing the token address and admin address.
3. **Update Member Units**: Users can update the units of a pool member by providing the pool address, member address, and new units.
4. **Feedback**: Toast notifications inform users about the success or failure of their actions.

To use this component:

1. Click "Connect Wallet" to connect your Ethereum wallet.
2. To create a pool, enter the token address and admin address, then click "Create Pool".
3. To update member units, enter the pool address, member address, and new units, then click "Update Member Units".

This example provides a starting point for building a user interface to manage distribution pools in Superfluid. In a production environment, you would want to add more robust error checking, input validation, and additional features like displaying pool information or listing pool members.

:::tip the example does not work on your developer environment?
The example above is a live example and requires the ABI to be imported. In the case of this example, the ABI has already been imported through the live coder.

In order to make it work on your developer environment, head to the [GDAv1Forwarder technical reference](/docs/technical-reference/GDAv1Forwarder) and copy the ABI.
Then, replace the `forwarderABI` variable in the example with the ABI you copied.
:::