---
sidebar_position: 2
---

# Manage Access Control and User Data

This guide explains how to manage access control and user data in the Superfluid protocol from your client applications:
- Access control allows you to delegate flow management to another account
- User data lets you attach additional information to transactions.

## Interacting with the Superfluid Protocol

To interact with the Superfluid protocol from client applications, you'll use the [`CFAv1Forwarder`](/docs/technical-reference/CFAv1Forwarder) contract.
In the case of a JavaScript/TypeScript based application, here's how to set it up:

### Contract ABI and Address

The `CFAv1Forwarder` contract address is the same on all networks:

```
0xcfA132E353cB4E398080B9700609bb008eceB125
```

You can find the full ABI of the `CFAv1Forwarder` contract in the [CFAv1Forwarder technical reference](/docs/technical-reference/CFAv1Forwarder).

### Setting up with ethers.js

Here's how to initiate interaction with the `CFAv1Forwarder` contract using ethers.js:

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

## Access Control in Superfluid

Access control in Superfluid allows one account (the flow operator) to manage flows on behalf of another account. This is particularly useful for automated systems, multi-sig wallets, or any scenario where you want to delegate flow management.

Key concepts:
- **Flow Operator**: An account that has been granted permissions to manage flows on behalf of another account.
- **Permissions**: The specific actions a flow operator is allowed to perform (create, update, delete flows).
- **Flow Rate Allowance**: The maximum net flow rate a flow operator can create on behalf of the account.

## User Data in Superfluid

User data in Superfluid allows you to attach additional information to transactions. This can be used for various purposes:
- Including metadata with transactions
- Triggering specific logic in receiver contracts
- Implementing off-chain systems that react to on-chain events

User data is typically passed as a `bytes` parameter in Superfluid functions, allowing you to encode any type of data you need.

## Key Functions for Access Control (with User Data)

### grantPermissions

Grants permissions to a flow operator to manage flows on behalf of the caller.

```solidity
function grantPermissions(
    ISuperToken token,
    address flowOperator
) external returns (bool)
```

#### Parameters
- `token`: The Super Token address
- `flowOperator`: The account to which permissions are granted

#### Usage Example

```javascript
const grantPermissions = async (tokenAddress, flowOperatorAddress) => {
  try {
    const tx = await forwarderContract.grantPermissions(tokenAddress, flowOperatorAddress);
    await tx.wait();
    console.log("Permissions granted successfully!");
  } catch (error) {
    console.error("Error granting permissions:", error);
  }
};
```

### revokePermissions

Revokes all permissions previously granted to a flow operator.

```solidity
function revokePermissions(
    ISuperToken token,
    address flowOperator
) external returns (bool)
```

#### Parameters
- `token`: The Super Token address
- `flowOperator`: The account from which permissions are revoked

#### Usage Example

```javascript
const revokePermissions = async (tokenAddress, flowOperatorAddress) => {
  try {
    const tx = await forwarderContract.revokePermissions(tokenAddress, flowOperatorAddress);
    await tx.wait();
    console.log("Permissions revoked successfully!");
  } catch (error) {
    console.error("Error revoking permissions:", error);
  }
};
```

### setFlowrateFrom

Allows a flow operator to set the flow rate from one account to another.

```solidity
function setFlowrateFrom(
    ISuperToken token,
    address sender,
    address receiver,
    int96 flowrate
) external returns (bool)
```

#### Parameters
- `token`: The Super Token address
- `sender`: The sender of the flow
- `receiver`: The receiver of the flow
- `flowrate`: The desired flow rate in tokens per second (using 18 decimal places)

#### Usage Example

```javascript
const setFlowrateFrom = async (tokenAddress, senderAddress, receiverAddress, flowRate) => {
  try {
    const tx = await forwarderContract.setFlowrateFrom(tokenAddress, senderAddress, receiverAddress, flowRate);
    await tx.wait();
    console.log("Flow rate set successfully!");
  } catch (error) {
    console.error("Error setting flow rate:", error);
  }
};
```

## Live UI Example for Access Control List Management

Here's an example of a UI component for managing access control lists:

```jsx live
function AccessControlManager() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [flowOperator, setFlowOperator] = useState('');
  const [sender, setSender] = useState('');
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

  const handleAction = async (action) => {
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
        case 'grant':
          tx = await contract.grantPermissions(tokenAddress, flowOperator);
          break;
        case 'revoke':
          tx = await contract.revokePermissions(tokenAddress, flowOperator);
          break;
        case 'setFlowrate':
          tx = await contract.setFlowrateFrom(tokenAddress, sender, receiver, flowRate);
          break;
      }
      await tx.wait();
      toast({
        title: 'Transaction successful',
        description: `${action} action completed successfully!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error(`Error performing ${action} action:`, error);
      toast({
        title: 'Transaction failed',
        description: `Failed to ${action}. Please try again.`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="500px" margin="auto" padding="20px">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">Access Control Manager</Text>
        
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
          placeholder="Flow Operator Address"
          value={flowOperator}
          onChange={(e) => setFlowOperator(e.target.value)}
        />
        <Input
          placeholder="Sender Address (for setFlowrateFrom)"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <Input
          placeholder="Receiver Address (for setFlowrateFrom)"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <Input
          placeholder="Flow Rate (for setFlowrateFrom)"
          value={flowRate}
          onChange={(e) => setFlowRate(e.target.value)}
        />
        
        <HStack spacing={4}>
          <Button colorScheme="green" onClick={() => handleAction('grant')} flex={1}>Grant Permissions</Button>
          <Button colorScheme="red" onClick={() => handleAction('revoke')} flex={1}>Revoke Permissions</Button>
        </HStack>
        <Button colorScheme="blue" onClick={() => handleAction('setFlowrate')}>Set Flowrate From</Button>
      </VStack>
    </Box>
  );
}
```

This UI provides the following features:

1. **Wallet Connection**: Users can connect their Ethereum wallet to interact with the Superfluid protocol.
2. **Input Fields**: Users can enter the token address, flow operator address, sender address, receiver address, and flow rate.
3. **Action Buttons**: Separate buttons for granting permissions, revoking permissions, and setting flow rate.
4. **Feedback**: Toast notifications to inform users about the success or failure of their actions.

To use this component:

1. Click "Connect Wallet" to connect your Ethereum wallet.
2. Enter the required information in the input fields.
3. Click the appropriate button to perform the desired action (grant permissions, revoke permissions, or set flow rate).

This example provides a starting point for building a user interface to manage access control in Superfluid. In a production environment, you would want to add more robust error checking, input validation, and possibly additional features like displaying current permissions or flow rates.

:::tip the example does not work on your developer environment?
The example above is a live example and requires the ABI to be imported. In the case of this example, the ABI has already been imported through the live coder.

In order to make it work on your developer environment, head to the [CFAv1Forwarder technical reference](/docs/technical-reference/CFAv1Forwarder) and copy the ABI.
Then, replace the `forwarderABI` variable in the example with the ABI you copied.
:::