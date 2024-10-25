import React, { useState } from 'react';
import { ethers } from 'ethers';

const InitializeContractComponent = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [initialSupply, setInitialSupply] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [chainId, setChainId] = useState('1'); // Default to Ethereum Mainnet

  const chainAddresses: { [key: string]: { address: string; name: string } } = {
    "1": {
      address: "0x0422689cc4087b6B7280e0a7e7F655200ec86Ae1",
      name: "Ethereum Mainnet",
    },
    "100": {
      address: "0x23410e2659380784498509698ed70E414D384880",
      name: "Gnosis Chain",
    },
    "137": {
      address: "0x2C90719f25B10Fc5646c82DA3240C76Fa5BcCF34",
      name: "Polygon",
    },
    "10": {
      address: "0x8276469A443D5C6B7146BED45e2abCaD3B6adad9",
      name: "Optimism",
    },
    "42161": {
      address: "0x1C21Ead77fd45C84a4c916Db7A6635D0C6FF09D6",
      name: "Arbitrum One",
    },
    "43114": {
      address: "0x464AADdBB2B80f3Cb666522EB7381bE610F638b4",
      name: "Avalanche C-Chain",
    },
    "56": {
      address: "0x8bde47397301F0Cd31b9000032fD517a39c946Eb",
      name: "BNB Smart Chain",
    },
    "42220": {
      address: "0x36be86dEe6BC726Ed0Cbd170ccD2F21760BC73D9",
      name: "Celo",
    },
    "8453": {
      address: "0xe20B9a38E0c96F61d1bA6b42a61512D56Fea1Eb3",
      name: "Base Mainnet",
    },
    "666666666": {
      address: "0x184D999ea60e9b16fE4cCC1f756422114E9B663f",
      name: "Degen Chain",
    },
    "534352": {
      address: "0xacFBED2bC9344C158DD3dC229b84Bd7220e7c673",
      name: "Scroll",
    },
    "43113": {
      address: "0x1C92042426B6bAAe497bEf461B6d8342D03aEc92",
      name: "Avalanche Fuji",
    },
    "11155111": {
      address: "0x254C2e152E8602839D288A7bccdf3d0974597193",
      name: "Ethereum Sepolia",
    },
    "11155420": {
      address: "0xfcF0489488397332579f35b0F711BE570Da0E8f5",
      name: "Optimism Sepolia",
    },
    "534351": {
      address: "0x87560833d59Be057aFc63cFFa3fc531589Ba428F",
      name: "Scroll Sepolia",
    },
    "84532": {
      address: "0x7447E94Dfe3d804a9f46Bf12838d467c912C8F6C",
      name: "Base Sepolia",
    },
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

  const initializeContract = async () => {
    if (!contractAddress) return alert("Please enter a valid contract address.");
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, [
      "function initialize(address factory, string memory name, string memory symbol, address receiver, uint256 initialSupply) external"
    ], signer);

    try {
      const tx = await contract.initialize(chainAddresses[chainId].address, tokenName, tokenSymbol, receiverAddress, ethers.utils.parseUnits(initialSupply, 18));
      await tx.wait();
      console.log('Contract initialized:', tx);
    } catch (error) {
      console.error('Initialization error:', error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h2>Initialize Pure Super Token</h2>
      <button onClick={connectWallet} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
        {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
      </button>
      <select value={chainId} onChange={(e) => setChainId(e.target.value)} style={{ padding: '10px', width: '100%' }} disabled={!walletConnected}>
        {Object.entries(chainAddresses).map(([id, { name }]) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
      <input
        type="text"
        value={contractAddress}
        onChange={(e) => setContractAddress(e.target.value)}
        placeholder="Contract Address"
        style={{ padding: '10px' }}
        disabled={!walletConnected}
      />
      <input
        type="text"
        value={tokenName}
        onChange={(e) => setTokenName(e.target.value)}
        placeholder="Token Name"
        style={{ padding: '10px' }}
        disabled={!walletConnected}
      />
      <input
        type="text"
        value={tokenSymbol}
        onChange={(e) => setTokenSymbol(e.target.value)}
        placeholder="Token Symbol"
        style={{ padding: '10px' }}
        disabled={!walletConnected}
      />
      <input
        type="text"
        value={receiverAddress}
        onChange={(e) => setReceiverAddress(e.target.value)}
        placeholder="Receiver Address"
        style={{ padding: '10px' }}
        disabled={!walletConnected}
      />
      <input
        type="text"
        value={initialSupply}
        onChange={(e) => setInitialSupply(e.target.value)}
        placeholder="Initial Supply (in tokens)"
        style={{ padding: '10px' }}
        disabled={!walletConnected}
      />
      <button onClick={initializeContract} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }} disabled={!walletConnected}>
        Initialize Contract
      </button>
    </div>
  );
};

export default InitializeContractComponent;
