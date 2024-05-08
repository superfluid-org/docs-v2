import React, { useState } from 'react';
import { ethers } from 'ethers';
import contractABI from './PureSuperTokenAbi.json';
import contractBytecode from './PureSuperTokenBytecode.json';

const DeployContractComponent = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [contractAddress, setContractAddress] = useState('');
  const [chainId, setChainId] = useState('1'); // Default to Ethereum Mainnet

const chainAddresses = {
    '1': 'Ethereum Mainnet',
    '100': 'Gnosis Chain',
    '137': 'Polygon',
    '10': 'Optimism',
    '42161': 'Arbitrum One',
    '43114': 'Avalanche C-Chain',
    '56': 'BNB Smart Chain',
    '42220': 'Celo',
    '8453': 'Base Mainnet',
    '666666666': 'Degen Chain',
    '534352': 'Scroll',
    '43113': 'Avalanche Fuji',
    '11155111': 'Ethereum Sepolia',
    '11155420': 'Optimism Sepolia',
    '534351': 'Scroll Sepolia',
};

  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletConnected(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      setChainId(network.chainId.toString());
      console.log('Wallet connected successfully.');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const deployContract = async () => {
    try {
      if (!walletConnected) {
        throw new Error("Wallet not connected. Please connect your wallet.");
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractFactory = new ethers.ContractFactory(contractABI, contractBytecode.bytecode, signer);
      setIsDeploying(true);

      const contract = await contractFactory.deploy();
      await contract.deployed();
      console.log('Contract deployed to:', contract.address);
      setContractAddress(contract.address);

      setIsDeploying(false);
    } catch (error) {
      console.error('Deployment error:', error);
      setIsDeploying(false);
    }
  };

  

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h2>Deploy Pure Super Token</h2>
      <button onClick={connectWallet} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }} disabled={walletConnected}>
        {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
      </button>
      <div>
        <label>Chain:</label>
        <select value={chainId} onChange={(e) => setChainId(e.target.value)} style={{ padding: '10px', width: '100%' }} disabled={!walletConnected}>
          {Object.entries(chainAddresses).map(([id, name]) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </div>
      <button onClick={deployContract} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }} disabled={!walletConnected || isDeploying}>
        {isDeploying ? 'Deploying...' : 'Deploy Contract'}
      </button>
      {contractAddress && (
        <div>
          <p>Contract Address: {contractAddress}</p>
        </div>
      )}
    </div>
  );
};

export default DeployContractComponent;
