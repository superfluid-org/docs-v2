import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./abi.json";
import Logo from "/src/components/Logo";
import { Button, Input, Box, Text, Flex, VStack, HStack, useToast } from '@chakra-ui/react';

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

const RealTimeBalance = ({ liveAddress }) => {
  const [realTimeBalance, setRealTimeBalance] = useState(null);
  const [blockchainBalance, setBlockchainBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchSubgraphBalance() {
    setLoading(true); // Assuming setLoading is a function that updates loading state
    setError(""); // Assuming setError is a function that clears any previous errors
    const endpoint = "https://polygon-mumbai.subgraph.x.superfluid.dev";
    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-testnet.public.blastapi.io"
    );
    const currentTimestamp = (await provider.getBlock("latest")).timestamp;

    const inflowQuery = {
      query: `query allReceivedStreams($receiver: String) {
        cfaStreams: streams(where: {receiver: $receiver}) {
          currentFlowRate
          streamedUntilUpdatedAt
          updatedAtTimestamp
        }
        gdaStreams: poolMembers(where: {account: $receiver}) {
          pool {
            totalUnits
            flowRate
            totalAmountDistributedUntilUpdatedAt
            updatedAtTimestamp
          }
          units
          totalAmountReceivedUntilUpdatedAt
          poolTotalAmountDistributedUntilUpdatedAt
          updatedAtTimestamp
        }
      }`,
      variables: { receiver: liveAddress },
    };

    const outflowQuery = {
      query: `query allSentStreams($sender: String) {
        cfaStreams: streams(where: {sender: $sender}) {
          currentFlowRate
          streamedUntilUpdatedAt
          updatedAtTimestamp
        }
        gdaStreams: poolDistributors(where: {account: $sender}) {
          flowRate
          updatedAtTimestamp
          totalAmountDistributedUntilUpdatedAt
        }
      }`,
      variables: { sender: liveAddress },
    };

    try {
      const inflowResponse = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inflowQuery),
      });

      const outflowResponse = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outflowQuery),
      });

      const inflowData = await inflowResponse.json();
      const outflowData = await outflowResponse.json();

      let netBalance = 0;

      // Calculate inflow balance
      inflowData.data.cfaStreams.forEach((stream) => {
        netBalance +=
          parseInt(stream.currentFlowRate) *
            (currentTimestamp - parseInt(stream.updatedAtTimestamp)) +
          parseInt(stream.streamedUntilUpdatedAt);
      });

      inflowData.data.gdaStreams.forEach((pool) => {
        const balance =
          (parseInt(pool.units) / parseInt(pool.pool.totalUnits)) *
            parseInt(pool.pool.flowRate) *
            (currentTimestamp - parseInt(pool.updatedAtTimestamp)) +
          parseInt(pool.totalAmountReceivedUntilUpdatedAt);
        netBalance += balance;
      });

      // Calculate outflow balance (as negative)
      outflowData.data.cfaStreams.forEach((stream) => {
        netBalance -=
          parseInt(stream.currentFlowRate) *
            (currentTimestamp - parseInt(stream.updatedAtTimestamp)) +
          parseInt(stream.streamedUntilUpdatedAt);
      });

      outflowData.data.gdaStreams.forEach((pool) => {
        const balance =
          parseInt(pool.flowRate) *
            (currentTimestamp - parseInt(pool.updatedAtTimestamp)) -
          parseInt(pool.totalAmountDistributedUntilUpdatedAt);
        netBalance -= balance;
      });

      setRealTimeBalance(ethers.utils.formatEther(netBalance.toString())); // Assuming setRealTimeBalance is a function that updates the balance state
    } catch (error) {
      console.error("Error calculating net balance:", error);
      setError("Failed to calculate net balance."); // Assuming setError is a function that sets error state
    } finally {
      setLoading(false); // Assuming setLoading is a function that updates loading state
    }
  }

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
    await fetchSubgraphBalance();
    await fetchBlockchainBalance();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
      }}
    >
      <h1>Net Balance</h1>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <p>
          Enter your <strong>liveAddress</strong> in the code editor, then click
          "Fetch Balance" to compare your net balance from the subgraph with the
          blockchain balance.
        </p>
      </div>
      <button
        onClick={handleFetch}
        disabled={loading}
        style={{
          padding: "10px",
          fontSize: "16px",
          margin: "10px 0",
          cursor: loading ? "not-allowed" : "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          outline: "none",
        }}
      >
        {loading ? "Loading..." : "Fetch Balance"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {realTimeBalance !== null && (
        <p>Net Balance from Subgraph: {realTimeBalance} fake DAIx</p>
      )}
      {blockchainBalance !== null && (
        <p>Balance from Blockchain: {blockchainBalance} fake DAIx</p>
      )}
    </div>
  );
};

const MacroForwarderComponent = ({
  macroForwarderAddress,
  userDefinedMacroAddress,
}) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [superToken, setSuperToken] = useState("");
  const [receivers, setReceivers] = useState("");
  const [message, setMessage] = useState("");

  // ABI for MacroForwarder contract including `runMacro`
  const macroForwarderABI = [
    {
      inputs: [
        { internalType: "contract ISuperfluid", name: "host", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "contract IUserDefinedMacro",
          name: "m",
          type: "address",
        },
        { internalType: "bytes", name: "params", type: "bytes" },
      ],
      name: "buildBatchOperations",
      outputs: [
        {
          components: [
            { internalType: "uint32", name: "operationType", type: "uint32" },
            { internalType: "address", name: "target", type: "address" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          internalType: "struct ISuperfluid.Operation[]",
          name: "operations",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IUserDefinedMacro",
          name: "m",
          type: "address",
        },
        { internalType: "bytes", name: "params", type: "bytes" },
      ],
      name: "runMacro",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  // ABI for IUserDefinedMacro including `getParams`
  const iUserDefinedMacroABI = [
    {
      inputs: [
        {
          internalType: "contract ISuperfluid",
          name: "host",
          type: "address",
        },
        { internalType: "bytes", name: "params", type: "bytes" },
        { internalType: "address", name: "msgSender", type: "address" },
      ],
      name: "buildBatchOperations",
      outputs: [
        {
          components: [
            { internalType: "uint32", name: "operationType", type: "uint32" },
            { internalType: "address", name: "target", type: "address" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          internalType: "struct ISuperfluid.Operation[]",
          name: "operations",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        console.log("Connected to MetaMask");
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
        setMessage("Error connecting to MetaMask");
      }
    } else {
      console.log("Ethereum wallet is not connected or not installed.");
      setMessage("Ethereum wallet is not connected or not installed.");
    }
  };

  const executeMacro = async () => {
    try {
      if (!walletAddress) throw new Error("Wallet not connected.");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const userDefinedMacroContract = new ethers.Contract(
        userDefinedMacroAddress,
        iUserDefinedMacroABI,
        signer
      );
      const receiversArray = receivers
        .split(",")
        .map((address) => address.trim());
      const params = await userDefinedMacroContract.getParams(
        superToken,
        receiversArray
      );

      const macroForwarderContract = new ethers.Contract(
        macroForwarderAddress,
        macroForwarderABI,
        signer
      );
      const tx = await macroForwarderContract.runMacro(
        userDefinedMacroAddress,
        params
      );
      await tx.wait();
      setMessage("Macro executed successfully.");
    } catch (error) {
      console.error("Error executing macro", error);
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Macro Forwarder Interface</h2>
      <h3>Connect Wallet to your chosen testnet (e.g. OP Sepolia)</h3>
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
        {walletAddress && (
          <>
            <div>
              <input
                type="text"
                placeholder="SuperToken Address"
                value={superToken}
                onChange={(e) => setSuperToken(e.target.value)}
                style={{ margin: "5px", padding: "5px" }}
              />
              <input
                type="text"
                placeholder="Receiver Addresses (comma separated)"
                value={receivers}
                onChange={(e) => setReceivers(e.target.value)}
                style={{ margin: "5px", padding: "5px" }}
              />
            </div>
            <button onClick={executeMacro} style={{ margin: "10px" }}>
              Execute Macro
            </button>
            <p style={{ marginTop: "20px" }}>{message}</p>
          </>
        )}
      </div>
    </div>
  );
};

const ReactLiveScope = {
  React,
  ...React,
  RealTimeBalance,
  FlowSenderComponent,
  MacroForwarderComponent,
  Button,
  Input,
  Box,
  Text,
  Flex,
  VStack,
  HStack,
  useToast,
  ethers
};
export default ReactLiveScope;
