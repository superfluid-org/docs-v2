import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./abi.json";
import Logo from "/src/components/Logo";

const FlowSenderComponent = ({ contractAddress }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [contract, setContract] = useState(null);
  const [receiver, setReceiver] = useState("");
  const [flowRate, setFlowRate] = useState("");
  const [message, setMessage] = useState("");

  const contractABI = abi;

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        const contractInstance = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setContract(contractInstance);
        console.log("Connected to MetaMask");
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      console.log("Ethereum wallet is not connected or not installed.");
    }
  };

  const gainDaiX = async () => {
    try {
      const tx = await contract.gainDaiX();
      await tx.wait();
      setMessage("DaiX gained successfully.");
    } catch (error) {
      console.error(error);
    }
  };

  const createStream = async () => {
    try {
      const tx = await contract.createStream(flowRate, receiver);
      await tx.wait();
      setMessage("Stream created successfully.");
    } catch (error) {
      console.error(error);
    }
  };

  const updateStream = async () => {
    try {
      const tx = await contract.updateStream(flowRate, receiver);
      await tx.wait();
      setMessage("Stream updated successfully.");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteStream = async () => {
    try {
      const tx = await contract.deleteStream(receiver);
      await tx.wait();
      setMessage("Stream deleted successfully.");
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
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "--ifm-color-text",
      }}
    >
      <h2>Flow Sender Interface</h2>

      <Logo />

      <h3>
        Step 1: Connect Wallet to your chosen testnet (e.g. Polygon Mumbai)
      </h3>
      {walletAddress ? (
        <p>
          Connected Wallet: <strong>{walletAddress}</strong>
        </p>
      ) : (
        <button
          onClick={connectWallet}
          style={{
            backgroundColor: "#168c1e",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Connect Wallet
        </button>
      )}

      <div style={{ margin: "10px" }}>
        <h3>Step 2: Get fDAIx faucet</h3>
        <button
          onClick={gainDaiX}
          style={{
            backgroundColor: "#168c1e",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            margin: "5px",
          }}
        >
          Get fDAIx faucet
        </button>
        <br />
        <h3>Step 3: Call contract methods</h3>
        <p>
          Enter Receiver Address and FlowRate Below to Create or Update stream
        </p>
        <p>Enter Only Receiver Address Delete or Read Flow</p>
        <input
          type="text"
          placeholder="Receiver Address"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          style={{
            margin: "5px",
            padding: "5px",
            borderRadius: "3px",
            border: "1px solid #ddd",
          }}
        />
        <input
          type="text"
          placeholder="Flow Rate"
          value={flowRate}
          onChange={(e) => setFlowRate(e.target.value)}
          style={{
            margin: "5px",
            padding: "5px",
            borderRadius: "3px",
            border: "1px solid #ddd",
          }}
        />
        <br />
        <button
          onClick={createStream}
          style={{
            backgroundColor: "#168c1e",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            margin: "5px",
          }}
        >
          Create Stream
        </button>
        <button
          onClick={updateStream}
          style={{
            backgroundColor: "#168c1e",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            margin: "5px",
          }}
        >
          Update Stream
        </button>
        <button
          onClick={deleteStream}
          style={{
            backgroundColor: "#168c1e",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            margin: "5px",
          }}
        >
          Delete Stream
        </button>
        <br />
        <button
          onClick={readFlowRate}
          style={{
            backgroundColor: "#168c1e",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            margin: "5px",
          }}
        >
          Read Flow Rate
        </button>
      </div>
      <p style={{ marginTop: "20px" }}>{message}</p>
    </div>
  );
};

const RealTimeBalance = ({liveAddress}) => {
  const [realTimeBalance, setRealTimeBalance] = useState(null);
  const [blockchainBalance, setBlockchainBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRealTimeBalance = async () => {
    setLoading(true);
    setError("");
    const endpoint = "https://polygon-mumbai.subgraph.x.superfluid.dev";

    // Updated query to use GraphQL variables
    const query = {
      query: `query FetchBalance($id: String!) {
        account(id: $id) {
          accountTokenSnapshots {
            balanceUntilUpdatedAt
            totalCFANetFlowRate
            updatedAtTimestamp
          }
        }
      }`,
      variables: { id: liveAddress },
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query),
      });

      const { data } = await response.json();
      const { balanceUntilUpdatedAt, totalCFANetFlowRate, updatedAtTimestamp } =
        data.account.accountTokenSnapshots[0];

      // Fetch current time from the provider
      const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-testnet.public.blastapi.io"
      );
      const currentTime = (await provider.getBlock("latest")).timestamp;

      // Calculate streaming balance
      const streamingBalance =
        totalCFANetFlowRate * (currentTime - updatedAtTimestamp);

      // Convert wei to ether and calculate full balance
      const fullBalance =
        parseFloat(ethers.utils.formatEther(streamingBalance.toString())) +
        parseFloat(ethers.utils.formatEther(balanceUntilUpdatedAt.toString()));
      setRealTimeBalance(fullBalance);
    } catch (error) {
      console.error("Error fetching real-time balance:", error);
      setError("Failed to fetch real-time balance.");
    } finally {
      setLoading(false);
    }
  };

  const fetchBlockchainBalance = async () => {
    setLoading(true);
    setError("");
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-testnet.public.blastapi.io"
      );
      const contractAddress = "0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f"; //fake DAIx contract address on Mumbai
      const contractABI = [
        "function transferFrom(address from, address to, uint value)",
        "function balanceOf(address owner) view returns (uint balance)",
      ];
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );

      const userAddress = liveAddress;
      const balance = await contract.balanceOf(userAddress);
      setBlockchainBalance(ethers.utils.formatEther(balance.toString()));
    } catch (error) {
      console.error("Error fetching blockchain balance:", error);
      setError("Failed to fetch blockchain balance.");
    } finally {
      setLoading(false);
    }
  };

  const handleFetch = async () => {
    await fetchRealTimeBalance();
    await fetchBlockchainBalance();
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'Arial' 
    }}>
      <h1>Real-Time Balance</h1>
      <div style={{ 
        border: '1px solid #ccc', 
        padding: '20px', 
        borderRadius: '5px', 
        marginBottom: '20px', 
      }}>
        <p>Enter your <strong>liveAddress</strong> in the code editor, then click "Fetch Balance" to compare your real-time balance from the subgraph with the blockchain balance.</p>
      </div>
      <button
        onClick={handleFetch}
        disabled={loading}
        style={{
          padding: '10px',
          fontSize: '16px',
          margin: '10px 0',
          cursor: loading ? 'not-allowed' : 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          outline: 'none',
        }}
      >
        {loading ? "Loading..." : "Fetch Balance"}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {realTimeBalance !== null && (
        <p>Real-Time Balance from Subgraph: {realTimeBalance} fake DAIx</p>
      )}
      {blockchainBalance !== null && (
        <p>Balance from Blockchain: {blockchainBalance} fake DAIx</p>
      )}
    </div>
  );
};

const ReactLiveScope = {
  React,
  ...React,
  RealTimeBalance,
  FlowSenderComponent,
};
export default ReactLiveScope;
