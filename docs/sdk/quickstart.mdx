---
sidebar_position: 1
---

# Quickstart

This guide will help you get started with the Superfluid protocol by creating a simple React app that interacts with the protocol.
You'll learn how to connect your wallet, create streams, and create pools using the Superfluid protocol.

## How to Interact with the Superfluid Protocol

When interacting with the Superfluid protocol from a client application, you'll use one of two contracts depending on the functionality you need:

1. For Money Streaming: Use the [`CFAv1Forwarder`](/docs/technical-reference/CFAv1Forwarder) contract
2. For Distribution Pools: Use the [`GDAv1Forwarder`](/docs/technical-reference/GDAv1Forwarder) contract

We use these forwarder contracts instead of building an SDK because:
- It simplifies the integration process
- It reduces the need for frequent updates to the SDK
- It allows for more flexibility and direct interaction with the protocol

## Contract Addresses and ABIs

Here are the addresses for each contract across all Superfluid-supported chains:

- `CFAv1Forwarder`: `0xcfA132E353cB4E398080B9700609bb008eceB125`
- `GDAv1Forwarder`: `0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08`

You can find the full ABIs for these contracts in the following technical references:
- [CFAv1Forwarder ABI](/docs/technical-reference/CFAv1Forwarder)
- [GDAv1Forwarder ABI](/docs/technical-reference/GDAv1Forwarder)

## Creating a React App (Next.js)

To create a new Next.js app, follow these steps:

1. Open your terminal and run:
   ```
   npx create-next-app@latest my-superfluid-app
   ```
2. Navigate to your new app directory:
   ```
   cd my-superfluid-app
   ```
3. Install necessary dependencies:
   ```
   npm install ethers@5.7.2
   ```

## Superfluid Interaction Component

In this section, we will provide a React component that allows you to interact with the Superfluid protocol.
This component will allow you to:
- Connect your wallet (eg. Metamask)
- Create a stream through the `CFAv1Forwarder` contract (for [Money Streaming](docs/concepts/overview/money-streaming))
- Create a pool through the `GDAv1Forwarder` contract (for [Distribution Pools](docs/concepts/overview/distributions))

Here's a React component that allows you to create a stream and create a pool. You can copy and paste this into a new file in your Next.js app's `pages` directory (e.g., `pages/superfluid-demo.js`):

:::note
For a full list of available functions and events, refer to the [CFAv1Forwarder technical reference](/docs/technical-reference/CFAv1Forwarder) and [GDAv1Forwarder technical reference](/docs/technical-reference/GDAv1Forwarder).
:::

```jsx live
// Don't forget imports
//import React, { useState } from 'react';
//import { ethers } from 'ethers';

function SuperfluidDemo() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState('');
  const [tokenAddress, setTokenAddress] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [flowRate, setFlowRate] = useState('');
  const [adminAddress, setAdminAddress] = useState('');
  const [message, setMessage] = useState('');

  const CFAv1ForwarderAddress = '0xcfA132E353cB4E398080B9700609bb008eceB125';
  const GDAv1ForwarderAddress = '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08';
  // Simplified ABIs with only the functions we need
  const CFAv1ForwarderABI = [
  "function createFlow(address token, address sender, address receiver, int96 flowRate, bytes memory userData) external returns (bool)"
  ];

  const GDAv1ForwarderABI = [
  "function createPool(address token, address admin, (uint32 transferabilityForUnitsOwner, bool distributionFromAnyAddress) memory poolConfig) external returns (bool, address)"
  ];

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setMessage(`Connected to ${address}`);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
        setMessage('Failed to connect wallet. Please try again.');
      }
    } else {
      setMessage('Please install Metamask to use this feature.');
    }
  };

  const createStream = async () => {
    if (!provider) {
      setMessage('Please connect your wallet first.');
      return;
    }

    const signer = provider.getSigner();
    const contract = new ethers.Contract(CFAv1ForwarderAddress, CFAv1ForwarderABI, signer);

    try {
      const tx = await contract.createFlow(
        tokenAddress,
        account,
        receiverAddress,
        flowRate,
        "0x"
      );
      await tx.wait();
      setMessage('The stream has been created successfully.');
    } catch (error) {
      console.error('Error creating stream:', error);
      setMessage('Failed to create stream. Please try again.');
    }
  };

  const createPool = async () => {
    if (!provider) {
      setMessage('Please connect your wallet first.');
      return;
    }

    const signer = provider.getSigner();
    const contract = new ethers.Contract(GDAv1ForwarderAddress, GDAv1ForwarderABI, signer);

    try {
      const poolConfig = {
        transferabilityForUnitsOwner: 0,
        distributionFromAnyAddress: false
      };
      const tx = await contract.createPool(tokenAddress, adminAddress, poolConfig);
      const receipt = await tx.wait();
      const [success, poolAddress] = receipt.events.find(e => e.event === 'PoolCreated').args;
      setMessage(`Pool created successfully at ${poolAddress}`);
    } catch (error) {
      console.error('Error creating pool:', error);
      setMessage('Failed to create pool. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>Superfluid Demo</h1>
      
      {!account ? (
        <button onClick={connectWallet} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '100%' }}>Connect Wallet</button>
      ) : (
        <p>Connected: {account}</p>
      )}
      
      <input
        placeholder="Token Address"
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
        style={{ width: '100%', padding: '10px', margin: '10px 0' }}
      />
      
      <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Create Stream</h2>
      <input
        placeholder="Receiver Address"
        value={receiverAddress}
        onChange={(e) => setReceiverAddress(e.target.value)}
        style={{ width: '100%', padding: '10px', margin: '10px 0' }}
      />
      <input
        placeholder="Flow Rate"
        value={flowRate}
        onChange={(e) => setFlowRate(e.target.value)}
        style={{ width: '100%', padding: '10px', margin: '10px 0' }}
      />
      <button onClick={createStream} style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '100%' }}>Create Stream</button>
      
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>Create Pool</h2>
      <input
        placeholder="Admin Address"
        value={adminAddress}
        onChange={(e) => setAdminAddress(e.target.value)}
        style={{ width: '100%', padding: '10px', margin: '10px 0' }}
      />
      <button onClick={createPool} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '100%' }}>Create Pool</button>

      {message && <p style={{ marginTop: '20px', textAlign: 'center' }}>{message}</p>}
    </div>
  );
}
```

To use this component:

1. Copy the above code into a new file in your Next.js app's `pages` directory (e.g., `pages/superfluid-demo.js`).
2. Uncomment the necessary imports at the top of the file.
3. Run your Next.js app with `npm run dev`.
4. Navigate to `http://localhost:3000/superfluid-demo` in your browser.
5. Connect your wallet, then you can create streams and pools using the Superfluid protocol.

This component provides a basic interface for creating streams and pools. In a production environment, you would want to add more error checking, input validation, and additional features.

:::tip About the Component
A few tips in order to make sure you can use the component correctly:
- The component above uses simple ethers.js functions to interact with the Superfluid protocol. You can choose to use a different library or SDK if you prefer (eg. [Viem](https://viem.sh/), [Web3.js](https://docs.web3js.org/)).
- The component does not manage wallet connections or chain switching in a production-ready way. You should add more robust error handling and user feedback.
- The component uses the Superfluid forwarders ABIs in a simplified form. You can find the full ABIs in the [CFAv1Forwarder technical reference](/docs/technical-reference/CFAv1Forwarder) and [GDAv1Forwarder technical reference](/docs/technical-reference/GDAv1Forwarder).
:::