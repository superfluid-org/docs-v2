import React, { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import ERC20ABI from './erc20.abi.json';

interface ERC20WrapperProps {
  // No props are needed as chain IDs and addresses are handled internally
}

const ERC20WrapperComponent: React.FC<ERC20WrapperProps> = () => {
  const [underlyingToken, setUnderlyingToken] = useState<string>("");
  const [upgradability, setUpgradability] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");
  const [connected, setConnected] = useState<boolean>(false);
  const [chainId, setChainId] = useState<string>("1"); // Default to Ethereum Mainnet
  const [contractAddress, setContractAddress] = useState<string>("");
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [error, setError] = useState<string>("");
  const [manualInput, setManualInput] = useState<boolean>(false);
  const [isDeploying, setIsDeploying] = useState<boolean>(false);
  const [deployedAddress, setDeployedAddress] = useState<string>("");

  const chainAddresses: { [key: string]: { address: string; name: string; chainParams?: any } } = {
    "1": {
      address: "0x0422689cc4087b6B7280e0a7e7F655200ec86Ae1",
      name: "Ethereum Mainnet",
      chainParams: {
        chainId: "0x1",
        chainName: "Ethereum Mainnet",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://mainnet.infura.io/v3/"],
        blockExplorerUrls: ["https://etherscan.io"],
      },
    },
    "100": {
      address: "0x23410e2659380784498509698ed70E414D384880",
      name: "Gnosis Chain",
      chainParams: {
        chainId: "0x64",
        chainName: "Gnosis Chain",
        nativeCurrency: { name: "xDAI", symbol: "xDAI", decimals: 18 },
        rpcUrls: ["https://rpc.gnosischain.com"],
        blockExplorerUrls: ["https://gnosisscan.io"],
      },
    },
    "137": {
      address: "0x2C90719f25B10Fc5646c82DA3240C76Fa5BcCF34",
      name: "Polygon",
      chainParams: {
        chainId: "0x89",
        chainName: "Polygon",
        nativeCurrency: { name: "Polygon", symbol: "POL", decimals: 18 },
        rpcUrls: ["https://polygon-rpc.com"],
        blockExplorerUrls: ["https://polygonscan.com"],
      },
    },
    "10": {
      address: "0x8276469A443D5C6B7146BED45e2abCaD3B6adad9",
      name: "OP Mainnet",
      chainParams: {
        chainId: "0xa",
        chainName: "Optimism",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://mainnet.optimism.io"],
        blockExplorerUrls: ["https://optimistic.etherscan.io"],
      },
    },
    "42161": {
      address: "0x1C21Ead77fd45C84a4c916Db7A6635D0C6FF09D6",
      name: "Arbitrum One",
      chainParams: {
        chainId: "0xa4b1",
        chainName: "Arbitrum One",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://arb1.arbitrum.io/rpc"],
        blockExplorerUrls: ["https://arbiscan.io"],
      },
    },
    "43114": {
      address: "0x464AADdBB2B80f3Cb666522EB7381bE610F638b4",
      name: "Avalanche C-Chain",
      chainParams: {
        chainId: "0xa86a",
        chainName: "Avalanche C-Chain",
        nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
        rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://snowtrace.io"],
      },
    },
    "56": {
      address: "0x8bde47397301F0Cd31b9000032fD517a39c946Eb",
      name: "BNB Smart Chain",
      chainParams: {
        chainId: "0x38",
        chainName: "BNB Smart Chain",
        nativeCurrency: { name: "Binance Coin", symbol: "BNB", decimals: 18 },
        rpcUrls: ["https://bsc-dataseed.binance.org"],
        blockExplorerUrls: ["https://bscscan.com"],
      },
    },
    "42220": {
      address: "0x36be86dEe6BC726Ed0Cbd170ccD2F21760BC73D9",
      name: "Celo",
      chainParams: {
        chainId: "0xa4ec",
        chainName: "Celo",
        nativeCurrency: { name: "Celo", symbol: "CELO", decimals: 18 },
        rpcUrls: ["https://forno.celo.org"],
        blockExplorerUrls: ["https://explorer.celo.org"],
      },
    },
    "8453": {
      address: "0xe20B9a38E0c96F61d1bA6b42a61512D56Fea1Eb3",
      name: "Base Mainnet",
      chainParams: {
        chainId: "0x2105",
        chainName: "Base Mainnet",
        nativeCurrency: { name: "Base ETH", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://mainnet.base.org"],
        blockExplorerUrls: ["https://basescan.org"],
      },
    },
    "666666666": {
      address: "0x184D999ea60e9b16fE4cCC1f756422114E9B663f",
      name: "Degen Chain",
      chainParams: {
        chainId: "0x27d8d8d8",
        chainName: "Degen Chain",
        nativeCurrency: { name: "Degen", symbol: "DEGEN", decimals: 18 },
        rpcUrls: ["https://rpc.degenchain.com"],
        blockExplorerUrls: ["https://degenscan.com"],
      },
    },
    "534352": {
      address: "0xacFBED2bC9344C158DD3dC229b84Bd7220e7c673",
      name: "Scroll",
      chainParams: {
        chainId: "0x82888",
        chainName: "Scroll",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://scroll.io/rpc"],
        blockExplorerUrls: ["https://scrollscan.io"],
      },
    },
    "43113": {
      address: "0x1C92042426B6bAAe497bEf461B6d8342D03aEc92",
      name: "Avalanche Fuji",
      chainParams: {
        chainId: "0xa869",
        chainName: "Avalanche Fuji",
        nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
        rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://testnet.snowtrace.io"],
      },
    },
    "11155111": {
      address: "0x254C2e152E8602839D288A7bccdf3d0974597193",
      name: "Ethereum Sepolia",
      chainParams: {
        chainId: "0xaa36a7",
        chainName: "Ethereum Sepolia",
        nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://rpc.sepolia.org"],
        blockExplorerUrls: ["https://sepolia.etherscan.io"],
      },
    },
    "11155420": {
      address: "0xfcF0489488397332579f35b0F711BE570Da0E8f5",
      name: "Optimism Sepolia",
      chainParams: {
        chainId: "0xaa36a8",
        chainName: "Optimism Sepolia",
        nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://rpc.optimism.sepolia.org"],
        blockExplorerUrls: ["https://optimism.sepolia.etherscan.io"],
      },
    },
    "534351": {
      address: "0x87560833d59Be057aFc63cFFa3fc531589Ba428F",
      name: "Scroll Sepolia",
      chainParams: {
        chainId: "0x82887",
        chainName: "Scroll Sepolia",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://rpc.scroll.sepolia.org"],
        blockExplorerUrls: ["https://scroll.sepolia.etherscan.io"],
      },
    },
  };

  // Helper function to switch chains
  const switchChain = async (newChainId: string) => {
    if (!window.ethereum) return;

    const hexChainId = `0x${Number(newChainId).toString(16)}`;
    
    try {
      // Try to switch to the chain
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: hexChainId }],
      });
      
      // Update provider after successful switch
      const newProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(newProvider);
      setChainId(newChainId);
      setContractAddress(chainAddresses[newChainId]?.address || "");
      
    } catch (error: any) {
      // If the chain hasn't been added to MetaMask, try to add it
      if (error.code === 4902) {
        try {
          const chainConfig = chainAddresses[newChainId]?.chainParams;
          if (chainConfig) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [chainConfig],
            });
          }
        } catch (addError) {
          console.error("Error adding chain:", addError);
          setError("Failed to add the network to your wallet.");
        }
      } else {
        console.error("Error switching chain:", error);
        setError("Failed to switch networks. Please try again.");
      }
    }
  };

  // Handle chain selection from dropdown
  const handleChainChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newChainId = e.target.value;
    if (connected) {
      await switchChain(newChainId);
    } else {
      setChainId(newChainId);
    }
  };

  const connectWallet = async (): Promise<void> => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await newProvider.getNetwork();
        
        // If the wallet's chain doesn't match the selected chain, switch to the selected chain
        if (network.chainId.toString() !== chainId) {
          await switchChain(chainId);
        } else {
          setProvider(newProvider);
        }
        
        setConnected(true);
      } catch (error) {
        console.error("Connection failed:", error);
        setError("Failed to connect wallet. Please try again.");
      }
    } else {
      setError("Please install MetaMask!");
    }
  };

  // Set up listener for chain changes in wallet
  useEffect(() => {
    const handleChainChanged = async (newChainId: string) => {
      const decimalChainId = parseInt(newChainId).toString();
      setChainId(decimalChainId);
      setContractAddress(chainAddresses[decimalChainId]?.address || "");
      
      const newProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(newProvider);
    };

    if (window.ethereum) {
      window.ethereum.on("chainChanged", handleChainChanged);
      return () => {
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      };
    }
  }, []);

  // Rest of your component code remains the same...
  const fetchTokenInfo = async () => {
    if (provider && ethers.utils.isAddress(underlyingToken) && !manualInput) {
      const contract = new ethers.Contract(underlyingToken, ERC20ABI, provider);
      try {
        const tokenName = await contract.name();
        const tokenSymbol = await contract.symbol();

        if (!tokenName || !tokenSymbol) {
          throw new Error("Token name or symbol not found");
        }

        setName(`Super ${tokenName}`);
        setSymbol(`${tokenSymbol}x`);
        setError("");
      } catch (error) {
        console.error("Error fetching token info:", error);
        setName("");
        setSymbol("");
        setError("Error: Unable to fetch token name or symbol. Please ensure the contract implements these functions or use manual input.");
      }
    }
  };

  useEffect(() => {
    if (provider && underlyingToken) {
      fetchTokenInfo();
    }
  }, [underlyingToken, provider, manualInput]);

  const createWrapper = async () => {
    if (provider && contractAddress) {
      setIsDeploying(true);
      setError("");
      setDeployedAddress("");
      
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        [
          "function createERC20Wrapper(address underlyingToken, uint8 upgradability, string memory name, string memory symbol) returns (address)",
        ],
        signer
      );

      try {
        const transaction = await contract.createERC20Wrapper(
          underlyingToken,
          upgradability,
          name,
          symbol
        );
        
        // Wait for transaction to be mined
        const receipt = await transaction.wait();
        
        // Get the created wrapper address from events
        const wrapperAddress = receipt.logs[2].address;
        setDeployedAddress(wrapperAddress);
        console.log("Transaction:", receipt);
      } catch (error) {
        console.error("Error:", error);
        setError("Failed to create wrapper. Please try again.");
      } finally {
        setIsDeploying(false);
      }
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2>Create your Wrapped Super Token</h2>
      <button
        onClick={connectWallet}
        style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
        disabled={connected}
      >
        Connect Wallet
      </button>
      <div>
        <label>Chain ID:</label>
        <select
          value={chainId}
          onChange={handleChainChange}
          style={{ padding: "10px", width: "100%" }}
        >
          {Object.entries(chainAddresses).map(([id, details]) => (
            <option key={id} value={id}>{`${details.name} (${id})`}</option>
          ))}
        </select>
      </div>
      <label>Underlying Token:</label>
      <input
        value={underlyingToken}
        onChange={(e) => setUnderlyingToken(e.target.value)}
        placeholder="Underlying Token Address"
        style={{ padding: "10px" }}
        disabled={!connected}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={manualInput}
            onChange={() => setManualInput(!manualInput)}
          />
          Name & Symbol (toggle for manual input)
        </label>
      </div>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Token Name"
        style={{ padding: "10px", backgroundColor: manualInput ? "white" : "#f0f0f0", color: "black" }}
        disabled={!manualInput}
      />
      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Token Symbol"
        style={{ padding: "10px", backgroundColor: manualInput ? "white" : "#f0f0f0", color: "black" }}
        disabled={!manualInput}
      />
      
      {error && <div style={{ color: "red", fontSize: "14px" }}>{error}</div>}
      
      {isDeploying && (
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <div className="loading-spinner"></div>
          <p>Deploying Super Token Wrapper...</p>
        </div>
      )}
      
      {deployedAddress && (
        <div>
          <p>Super Token Wrapper deployed successfully!</p>
          <p>Address: {deployedAddress}</p>
        </div>
      )}
      
      <button
        onClick={createWrapper}
        style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
        disabled={!connected || !name || !symbol || isDeploying}
      >
        {isDeploying ? "Deploying..." : "Create Wrapper"}
      </button>
    </div>
  );
};

// Add this CSS somewhere in your styles
const styles = `
.loading-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin: 10px auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default ERC20WrapperComponent;