import React from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import abi from './abi.json';
import Logo from '/src/components/Logo';

const FlowSenderComponent = ({contractAddress}) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [contract, setContract] = useState(null);
  const [receiver, setReceiver] = useState('');
  const [flowRate, setFlowRate] = useState('');
  const [message, setMessage] = useState('');

  const contractABI = abi;

  const connectWallet = async () => {
      if (window.ethereum) {
          try {
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              await provider.send('eth_requestAccounts', []);
              const signer = provider.getSigner();
              const address = await signer.getAddress();
              setWalletAddress(address);
              const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
              setContract(contractInstance);
              console.log('Connected to MetaMask');
          } catch (error) {
              console.error('Error connecting to MetaMask', error);
          }
      } else {
          console.log('Ethereum wallet is not connected or not installed.');
      }
  };

    const gainDaiX = async () => {
        try {
            const tx = await contract.gainDaiX();
            await tx.wait();
            setMessage('DaiX gained successfully.');
        } catch (error) {
            console.error(error);
        }
    };

    const createStream = async () => {
        try {
            const tx = await contract.createStream(flowRate, receiver);
            await tx.wait();
            setMessage('Stream created successfully.');
        } catch (error) {
            console.error(error);
        }
    };

    const updateStream = async () => {
        try {
            const tx = await contract.updateStream(flowRate, receiver);
            await tx.wait();
            setMessage('Stream updated successfully.');
        } catch (error) {
            console.error(error);
        }
    };

    const deleteStream = async () => {
        try {
            const tx = await contract.deleteStream(receiver);
            await tx.wait();
            setMessage('Stream deleted successfully.');
        } catch (error) {
            console.error(error);
        }
    };

    const readFlowRate = async () => {
        try {
            const rate = await contract.readFlowRate(receiver);
            setMessage(`Current flow rate: ${rate}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif', color: 'white' }}>
            <h2>Flow Sender Interface</h2>
            
            <Logo/>
            
            <h3>Step 1: Connect Wallet to your chosen testnet (e.g. Polygon Mumbai)</h3>
            {walletAddress ? (
                <p>Connected Wallet: <strong>{walletAddress}</strong></p>
            ) : (
                <button onClick={connectWallet} style={{ backgroundColor: '#168c1e', color: 'white', padding: '10px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Connect Wallet</button>
            )}
    
            <div style={{ margin: '10px' }}>
                <h3>Step 2: Get fDAIx faucet</h3>
                <button onClick={gainDaiX} style={{ backgroundColor: '#168c1e', color: 'white', padding: '10px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer', margin: '5px' }}>Get fDAIx faucet</button>
                <br />
                <h3>Step 3: Call contract methods</h3>
                <p>Enter Receiver Address and FlowRate Below to Create or Update stream</p>
                <p>Enter Only Receiver Address Delete or Read Flow</p>
                <input type="text" placeholder="Receiver Address" value={receiver} onChange={(e) => setReceiver(e.target.value)} style={{ margin: '5px', padding: '5px', borderRadius: '3px', border: '1px solid #ddd' }} />
                <input type="text" placeholder="Flow Rate" value={flowRate} onChange={(e) => setFlowRate(e.target.value)} style={{ margin: '5px', padding: '5px', borderRadius: '3px', border: '1px solid #ddd' }} />
                <br />
                <button onClick={createStream} style={{ backgroundColor: '#168c1e', color: 'white', padding: '10px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer', margin: '5px' }}>Create Stream</button>
                <button onClick={updateStream} style={{ backgroundColor: '#168c1e', color: 'white', padding: '10px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer', margin: '5px' }}>Update Stream</button>
                <button onClick={deleteStream} style={{ backgroundColor: '#168c1e', color: 'white', padding: '10px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer', margin: '5px' }}>Delete Stream</button>
                <br />
                <button onClick={readFlowRate} style={{ backgroundColor: '#168c1e', color: 'white', padding: '10px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer', margin: '5px' }}>Read Flow Rate</button>
            </div>
            <p style={{ marginTop: '20px' }}>{message}</p>
        </div>
    );
};

const ReactLiveScope = {
  React,
  ...React,
  FlowSenderComponent
};
export default ReactLiveScope;
