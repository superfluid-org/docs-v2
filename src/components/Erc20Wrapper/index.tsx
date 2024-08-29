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
  };

  // Helper function to update provider based on the chain ID
  const updateProvider = useCallback(async () => {
    if (window.ethereum) {
      const newProvider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await newProvider.getNetwork();
      setChainId(network.chainId.toString());
      setProvider(newProvider);
    }
  }, []);

  // Update contract address when the chain ID changes
  useEffect(() => {
    setContractAddress(chainAddresses[chainId]?.address || "");
  }, [chainId]);

  // Update provider when the chain ID changes from the dropdown
  useEffect(() => {
    if (connected) {
      updateProvider();
    }
  }, [connected, chainId, updateProvider]);

  // Set up listener for chain changes
  useEffect(() => {
    const handleChainChanged = async () => {
      await updateProvider();
    };

    if (window.ethereum) {
      window.ethereum.on("chainChanged", handleChainChanged);
      return () => {
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      };
    }
  }, [updateProvider]);

  const connectWallet = async (): Promise<void> => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        await updateProvider();
        setConnected(true);
      } catch (error) {
        console.error("Connection failed:", error);
      }
    } else {
      console.error("Please install MetaMask!");
    }
  };

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
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        ["function createERC20Wrapper(address underlyingToken, uint8 upgradability, string memory name, string memory symbol) returns (bool)"],
        signer
      );

      try {
        const transaction = await contract.createERC20Wrapper(
          underlyingToken,
          upgradability,
          name,
          symbol
        );
        console.log("Transaction:", transaction);
      } catch (error) {
        console.error("Error:", error);
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
          onChange={(e) => setChainId(e.target.value)}
          style={{ padding: "10px", width: "100%" }}
          disabled={!connected}
        >
          {Object.entries(chainAddresses).map(([id, details]) => (
            <option key={id} value={id}>{`${details.name} (${id})`}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Factory Contract Address:</label>
        <input
          type="text"
          value={contractAddress}
          readOnly
          style={{ padding: "10px", width: "100%" }}
          disabled={!connected}
        />
      </div>
      <label>Underlying Token:</label>
      <input
        value={underlyingToken}
        onChange={(e) => setUnderlyingToken(e.target.value)}
        placeholder="Underlying Token Address"
        style={{ padding: "10px" }}
        disabled={!connected}
      />
      {/*<label>Upgradability:</label>
      <input
        type="number"
        value={upgradability.toString()}
        onChange={(e) => setUpgradability(parseInt(e.target.value))}
        placeholder="Upgradability (0, 1, 2)"
        style={{ padding: "10px" }}
        disabled={!connected}
      />*/}
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
      
      <button
        onClick={createWrapper}
        style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
        disabled={!connected || !name || !symbol}
      >
        Create Wrapper
      </button>
    </div>
  );
};

export default ERC20WrapperComponent;
