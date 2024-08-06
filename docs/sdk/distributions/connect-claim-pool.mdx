---
sidebar_position: 2
---

# Connecting and Claiming from the Pools

This guide focuses on connecting and claiming from Superfluid [Distribution Pools](/docs/concepts/overview/distributions) using the `GDAv1Forwarder` contract.
You'll learn how to interact with Superfluid pools from client applications. We will specifically show how you can connect members to pools, and claim tokens from them.

## Interacting with the Superfluid Protocol

To interact with Superfluid's distribution pools from client applications, you'll use the `GDAv1Forwarder` contract. Here's how to set it up:

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

## Understanding Connecting and Claiming

When interacting with Superfluid pools, it's important to understand the difference between connecting to a pool and claiming from it:

1. **Connecting to a Pool**: 
   - When a member connects to a pool, they start receiving streams and transfers in real-time.
   - The member's balance will automatically reflect incoming tokens without any further action.
   - This is ideal for continuous, real-time token distribution.

2. **Claiming from a Pool**:
   - Claiming is the process of explicitly withdrawing accumulated tokens from the pool.
   - Members can claim periodically to move tokens from the pool to their personal balance.
   - This is useful for members who prefer to manually manage their token receipts or for specific accounting purposes.

In essence, connecting provides a passive, continuous flow of tokens, while claiming is an active process to withdraw accumulated tokens.

## Interacting with the GDAv1Forwarder Contract

Let's look at how to use the `GDAv1Forwarder` contract to connect, disconnect, and claim from pools.

### Connecting to a Pool

To connect a member to a pool, use the `connectPool` function:

```solidity
function connectPool(
    ISuperfluidPool pool,
    bytes memory userData
) external returns (bool)
```

#### Parameters
- `pool`: The Superfluid Pool to connect.
- `userData`: User-specific data.

#### Usage Example

```javascript
const connectPool = async (poolAddress, userData = "0x") => {
  try {
    const tx = await forwarderContract.connectPool(poolAddress, userData);
    const receipt = await tx.wait();
    console.log("Successfully connected to pool");
    return receipt.status === 1; // 1 indicates success
  } catch (error) {
    console.error("Error connecting to pool:", error);
    return false;
  }
};
```

:::tip Connecting triggers a claim
When a member connects to a pool, the contract automatically claims all the previously available tokens for the member.
:::

### Disconnecting from a Pool

To disconnect a member from a pool, use the `disconnectPool` function:

```solidity
function disconnectPool(
    ISuperfluidPool pool,
    bytes memory userData
) external returns (bool)
```

#### Parameters
- `pool`: The Superfluid Pool to disconnect.
- `userData`: User-specific data.

#### Usage Example

```javascript
const disconnectPool = async (poolAddress, userData = "0x") => {
  try {
    const tx = await forwarderContract.disconnectPool(poolAddress, userData);
    const receipt = await tx.wait();
    console.log("Successfully disconnected from pool");
    return receipt.status === 1; // 1 indicates success
  } catch (error) {
    console.error("Error disconnecting from pool:", error);
    return false;
  }
};
```

### Claiming All Tokens from a Pool

To claim all available tokens for a member from a pool, use the `claimAll` function:

```solidity
function claimAll(
    ISuperfluidPool pool,
    address memberAddress,
    bytes memory userData
) external
```

#### Parameters
- `pool`: The Superfluid Pool to claim from.
- `memberAddress`: The address of the member to claim for.
- `userData`: User-specific data.

#### Usage Example

```javascript
const claimAll = async (poolAddress, memberAddress, userData = "0x") => {
  try {
    const tx = await forwarderContract.claimAll(poolAddress, memberAddress, userData);
    await tx.wait();
    console.log("Successfully claimed all tokens from pool");
    return true;
  } catch (error) {
    console.error("Error claiming tokens from pool:", error);
    return false;
  }
};
```

## Live UI Example for Pool Interaction

Here's an example of a UI component for connecting, disconnecting, and claiming from Superfluid pools:

```jsx live

function PoolInteractionManager() {
  const [poolAddress, setPoolAddress] = useState('');
  const [memberAddress, setMemberAddress] = useState('');
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

  const performAction = async (action) => {
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
      let tx;
      switch (action) {
        case 'connect':
          tx = await contract.connectPool(poolAddress, "0x");
          break;
        case 'disconnect':
          tx = await contract.disconnectPool(poolAddress, "0x");
          break;
        case 'claim':
          tx = await contract.claimAll(poolAddress, memberAddress || account, "0x");
          break;
      }
      await tx.wait();
      toast({
        title: 'Action successful',
        description: `Successfully ${action}ed ${action === 'claim' ? 'from' : 'to'} pool`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error(`Error ${action}ing:`, error);
      toast({
        title: 'Action failed',
        description: `Failed to ${action} ${action === 'claim' ? 'from' : 'to'} pool. Please try again.`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="500px" margin="auto" padding="20px">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">Pool Interaction Manager</Text>
        
        {!walletConnected ? (
          <Button colorScheme="blue" onClick={connectWallet}>Connect Wallet</Button>
        ) : (
          <Text>Connected: {account}</Text>
        )}
        
        <Input
          placeholder="Pool Address"
          value={poolAddress}
          onChange={(e) => setPoolAddress(e.target.value)}
        />
        <Input
          placeholder="Member Address (for claiming, optional)"
          value={memberAddress}
          onChange={(e) => setMemberAddress(e.target.value)}
        />
        
        <HStack spacing={4}>
          <Button colorScheme="green" onClick={() => performAction('connect')} flex={1}>Connect to Pool</Button>
          <Button colorScheme="red" onClick={() => performAction('disconnect')} flex={1}>Disconnect from Pool</Button>
        </HStack>
        <Button colorScheme="blue" onClick={() => performAction('claim')}>Claim All Tokens</Button>
      </VStack>
    </Box>
  );
}
```

This UI provides the following features:

1. **Wallet Connection**: Users can connect their Ethereum wallet to interact with the Superfluid protocol.
2. **Connect to Pool**: Users can connect to a specified pool.
3. **Disconnect from Pool**: Users can disconnect from a specified pool.
4. **Claim All Tokens**: Users can claim all available tokens from a specified pool.
5. **Feedback**: Toast notifications inform users about the success or failure of their actions.

To use this component:

1. Click "Connect Wallet" to connect your Ethereum wallet.
2. Enter the pool address in the "Pool Address" field.
3. (Optional) Enter a member address in the "Member Address" field for claiming. If left empty, it will use the connected wallet's address.
4. Click the appropriate button to connect to a pool, disconnect from a pool, or claim all tokens.

Remember to replace the `forwarderABI` placeholder with the actual ABI of the `GDAv1Forwarder` contract.

This example provides a starting point for building a user interface to interact with Superfluid pools. In a production environment, you would want to add more robust error checking, input validation, and additional features like displaying pool information or showing the user's current pool connections.

:::tip the example does not work on your developer environment?
The example above is a live example and requires the ABI to be imported. In the case of this example, the ABI has already been imported through the live coder.

In order to make it work on your developer environment, head to the [GDAv1Forwarder technical reference](/docs/technical-reference/GDAv1Forwarder) and copy the ABI.
Then, replace the `forwarderABI` variable in the example with the ABI you copied.
:::