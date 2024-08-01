---
sidebar_position: 1
---

# Create, Update, and Delete Flows

This guide covers various methods for managing flows in Superfluid from your client application side.
This guide will not cover how to interact with the protocol from another smart contract. 
For that, please refer to the [Create, Update, and Delete Flows guide](/docs/protocol/money-streaming/guides/create-update-delete-flow) in the Contracts section.

## Prerequisites

Before proceeding, ensure you have:

* Familiarity with JavaScript (and an EVM framework such as ethers.js, viem or wagmi).
* Basic understanding of Superfluid and its functionalities.
* Access to a development environment for developing client applications.

## What is a flow?
In Superfluid terminology, a flow is a continuous stream of tokens from one account to another.
It is a fundamental concept in the Superfluid protocol, enabling real-time, continuous payments between accounts.

:::tip What is the difference between a "Stream" and a "Flow"?
This is a small technicality which is not necessarily important to understand.
However, in Superfluid, a "Flow" is a more general term than a "Stream".
A Stream is a non-zero flow, while a zero flow is not considered a Stream.
:::

## How to interact with the Superfluid protocol from a client application?
There are mainly two ways to interact with the Superfluid protocol from a client application:
- The [`CFAv1Forwarder`](/docs/technical-reference/CFAv1Forwarder) contract: This contract is used to create, update, and delete flows.
- The [`GDAv1Forwarder`](/docs/technical-reference/GDAv1Forwarder) contract: This contract is used to create and manage Distribution Pools.

For the purposes of this guide, we will focus on the [`CFAv1Forwarder`](/docs/technical-reference/CFAv1Forwarder) contract which allows you to create, update, and delete flows.

:::tip Where does the name CFAv1Forwarder come from?
The name `CFAv1Forwarder` is derived from the term "Constant Flow Agreement" (CFA) which is the underlying agreement that governs Money Streaming in Superfluid.
:::

## Interacting with the CFAv1Forwarder Contract

To interact with Money Streaming, you'll need to use the `CFAv1Forwarder` contract. Here's how to get started:

### Contract ABI and Address

You can find the full ABI of the `CFAv1Forwarder` contract in the [CFAv1Forwarder technical reference](/docs/technical-reference/CFAv1Forwarder).

The `CFAv1Forwarder` contract address is the same on all networks:

```
0xcfA132E353cB4E398080B9700609bb008eceB125
```

### Initiating Contract Interaction with ethers.js

Here's an example of how to initiate interaction with the `CFAv1Forwarder` contract using ethers.js:

```javascript
import { ethers } from 'ethers';

// Assuming you have a provider set up (e.g., using MetaMask)
const provider = new ethers.providers.Web3Provider(window.ethereum);

// The address of the CFAv1Forwarder contract
const forwarderAddress = '0xcfA132E353cB4E398080B9700609bb008eceB125';

// The ABI of the CFAv1Forwarder contract (import this from the technical reference)
const forwarderABI = [...]; // Insert the ABI here

// Create a contract instance
const forwarderContract = new ethers.Contract(forwarderAddress, forwarderABI, provider.getSigner());
```

Now that we have our contract instance set up, let's look at how to create, update, and delete flows.

## Creating a Flow

To create a new flow, you can use the `createFlow` function of the `CFAv1Forwarder` contract.

### Function Signature

```solidity
function createFlow(
    ISuperToken token,
    address sender,
    address receiver,
    int96 flowrate,
    bytes userData
) external returns (bool)
```

### Parameters

- `token`: The address of the Super Token you want to stream.
- `sender`: The address that will be sending the tokens.
- `receiver`: The address that will be receiving the tokens.
- `flowrate`: The rate at which tokens will be streamed, in tokens per second (using 18 decimal places).
- `userData`: (Optional) Additional data to include with the transaction. Use "0x" if not needed.

### Example Usage

```javascript
const createFlow = async (tokenAddress, receiver, flowRate) => {
  try {
    const tx = await forwarderContract.createFlow(
      tokenAddress,
      await provider.getSigner().getAddress(), // sender (current user)
      receiver,
      flowRate,
      "0x" // no user data
    );
    await tx.wait();
    console.log("Flow created successfully!");
  } catch (error) {
    console.error("Error creating flow:", error);
  }
};
```
:::tip using setFlowrate instead
You can also use the `setFlowrate` function to update the flow rate of an existing flow.
For a full list of functions available in the `CFAv1Forwarder` contract, refer to the [CFAv1Forwarder technical reference](/docs/technical-reference/CFAv1Forwarder).
:::

## Updating a Flow

To update an existing flow, use the `updateFlow` function.

### Function Signature

```solidity
function updateFlow(
    ISuperToken token,
    address sender,
    address receiver,
    int96 flowrate,
    bytes userData
) external returns (bool)
```

### Parameters

The parameters are the same as for `createFlow`. The `flowrate` parameter specifies the new flow rate.

### Example Usage

```javascript
const updateFlow = async (tokenAddress, receiver, newFlowRate) => {
  try {
    const tx = await forwarderContract.updateFlow(
      tokenAddress,
      await provider.getSigner().getAddress(), // sender (current user)
      receiver,
      newFlowRate,
      "0x" // no user data
    );
    await tx.wait();
    console.log("Flow updated successfully!");
  } catch (error) {
    console.error("Error updating flow:", error);
  }
};
```
:::tip using setFlowrate instead
You can also use the `setFlowrate` function to update the flow rate of an existing flow.
For a full list of functions available in the `CFAv1Forwarder` contract, refer to the [CFAv1Forwarder technical reference](/docs/technical-reference/CFAv1Forwarder).
:::

## Deleting a Flow

To stop and delete an existing flow, use the `deleteFlow` function.

### Function Signature

```solidity
function deleteFlow(
    ISuperToken token,
    address sender,
    address receiver,
    bytes userData
) external returns (bool)
```

### Parameters

- `token`: The address of the Super Token of the flow you want to delete.
- `sender`: The address that is sending the tokens in the flow.
- `receiver`: The address that is receiving the tokens in the flow.
- `userData`: (Optional) Additional data to include with the transaction. Use "0x" if not needed.

### Example Usage

```javascript
const deleteFlow = async (tokenAddress, receiver) => {
  try {
    const tx = await forwarderContract.deleteFlow(
      tokenAddress,
      await provider.getSigner().getAddress(), // sender (current user)
      receiver,
      "0x" // no user data
    );
    await tx.wait();
    console.log("Flow deleted successfully!");
  } catch (error) {
    console.error("Error deleting flow:", error);
  }
};
```

:::tip using setFlowrate instead
You can also use the `setFlowrate` function to update the flow rate of an existing flow.
For a full list of functions available in the `CFAv1Forwarder` contract, refer to the [CFAv1Forwarder technical reference](/docs/technical-reference/CFAv1Forwarder).
:::


## Building a Simple UI

Here's an example of how you might build a simple UI to interact with these functions:

```jsx live
function FlowManager() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [receiver, setReceiver] = useState('');
  const [flowRate, setFlowRate] = useState('');
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState('');
  const toast = useToast();

  const forwarderAddress = '0xcfA132E353cB4E398080B9700609bb008eceB125';
  const forwarderABI = CFAv1ForwarderABI; // You will need to import the ABI in your code. You can do that from: https://docs.superfluid.finance/docs/technical-reference/CFAv1Forwarder

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

  const handleFlow = async (action) => {
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
        case 'create':
          tx = await contract.createFlow(tokenAddress, account, receiver, flowRate, "0x");
          break;
        case 'update':
          tx = await contract.updateFlow(tokenAddress, account, receiver, flowRate, "0x");
          break;
        case 'delete':
          tx = await contract.deleteFlow(tokenAddress, account, receiver, "0x");
          break;
      }
      await tx.wait();
      toast({
        title: 'Transaction successful',
        description: `Flow ${action}d successfully!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error(`Error ${action}ing flow:`, error);
      toast({
        title: 'Transaction failed',
        description: `Failed to ${action} flow. Please try again.`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="500px" margin="auto" padding="20px">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">Flow Manager</Text>
        
        {!walletConnected ? (
          <Button colorScheme="blue" onClick={connectWallet}>Connect Wallet</Button>
        ) : (
          <Text>Connected: {account}</Text>
        )}
        
        <Input
          placeholder="Token Address"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
        />
        <Input
          placeholder="Receiver Address"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <Input
          placeholder="Flow Rate"
          value={flowRate}
          onChange={(e) => setFlowRate(e.target.value)}
        />
        
        <HStack spacing={4}>
          <Button colorScheme="green" onClick={() => handleFlow('create')} flex={1}>Create Flow</Button>
          <Button colorScheme="yellow" onClick={() => handleFlow('update')} flex={1}>Update Flow</Button>
          <Button colorScheme="red" onClick={() => handleFlow('delete')} flex={1}>Delete Flow</Button>
        </HStack>
      </VStack>
    </Box>
  );
}
```

This UI provides input fields for the token address, receiver address, and flow rate, along with buttons to create, update, and delete flows. You would need to implement the `createFlow`, `updateFlow`, and `deleteFlow` functions as shown in the previous examples.

:::tip the example does not work on your developer environment?
The example above is a live example and requires the ABI to be imported. In the case of this example, the ABI has already been imported through the live coder.

In order to make it work on your developer environment, head to the [CFAv1Forwarder technical reference](/docs/technical-reference/CFAv1Forwarder) and copy the ABI.
Then, replace the `forwarderABI` variable in the example with the ABI you copied.
:::