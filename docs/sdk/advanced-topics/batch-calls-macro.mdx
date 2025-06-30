---
sidebar_position: 1
---


import CodeBlock from "@theme/CodeBlock";
import MacroForwarder from "!!raw-loader!@site/src/contracts/MacroForwarder.sol";
import MacroForwarderABI from "!!raw-loader!@site/src/abis/macroForwarder.json";
import MultiFlowDeleteMacro from "!!raw-loader!@site/src/contracts/MultiFlowDeleteMacro.sol";

# Batch transactions with Macros

Superfluid's infrastructure introduces innovative approaches to batching transactions and account abstraction,
leveraging the [modular architrecture](/docs/technical-reference/Architecture) of Superfluid,
and specifically the mastermind contract of the protocol called the [Superfluid Host](/docs/concepts/advanced-topics/superfluid-host).
This document provides a guide of how to use the MacroForwarder contract to batch transactions.

## Background

The Superfluid Host contract makes it possible to batch transactions from day one through a method called `batchCall`.
Eventually, the Superfluid Host adopted [ERC-2771](https://eips.ethereum.org/EIPS/eip-2771). As opposed to the [EIP-4337](https://ethereum.org/en/roadmap/account-abstraction)
which uses a Contract Account (CA) for abstraction, ERC-2771
extends the capabilities of the Host by allowing a trusted forwarder to pass the original `msg.sender` to the host contract through the method `forwardBatchCall`.


## Macro Forwarder Contract Overview

Introducing a simple and secure way for builders to define their own macros without needing to be directly trusted by the Superfluid host contract.
This approach simplifies on-chain logic for batch calls, reduces gas consumption and potentially ameliorates the front-end code, addressing atomicity issues.
Today, Superfluid has a contract called [`MacroForwarder.sol`](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/utils/MacroForwarder.sol)
 which is a trusted forwarder for user-defined macro interfaces.

<div>
<details>
<summary>Click here to show the `MacroForwarder` contract</summary>
<p>

<CodeBlock language="solidity">{MacroForwarder}</CodeBlock>

</p>
</details>
</div>

### Macro Forwarder Contract Address

The `MacroForwarder` contract has the same address on all networks:

```bash
0xFD0268E33111565dE546af2675351A4b1587F89F
```

### Macro Forwarder Contract ABI

In order to interact with the `MacroForwarder` contract from your client application, you can use the following ABI:

<div>
<details>
<summary>Click here to show the `MacroForwarder` ABI</summary>
<p>

<CodeBlock language="json">{MacroForwarderABI}</CodeBlock>

</p>
</details>
</div>


## How to use the Macro Forwarder

In order to understand how to use the `MacroForwarder` contract,
we will use an example contract called `MultiFlowDeleteMacro.sol` which allows us to batch call delete flow transactions from one account to multiple accounts for a specific Super Token:

<div>
<details>
<summary>Click here to show the `MultiFlowDeleteMacro` contract</summary>
<p>
<CodeBlock language="solidity">{MultiFlowDeleteMacro}</CodeBlock>
</p>
</details>
</div>

The steps in order to use the `MacroForwarder` contract are as follows:
1. Create a contract which inherit the User Defined Macro Interface
2. Implement your Macro Interface
3. Use the Macro Forwarder to batch call the transactions

:::tip Get ready for tests and deployment
Creating your own macro involves testing and deploying a smart contract. If you are not familiar with testing and deployment frameworks on the Ethereum Virtual Machine,
you should consider learning about [Hardhat](https://hardhat.org/) or [Foundry](https://book.getfoundry.sh/).
:::


### 1. Create your contract and inherit the User Defined Macro Interface

As you may have noticed, the `MultiFlowDeleteMacro` contract inherits the `IUserDefinedMacro` interface like so:

```solidity
contract MultiFlowDeleteMacro is IUserDefinedMacro {
    ...
}
```
This is an interface that defines the `buildBatchOperations` method. It is the only required method to be implemented in the contract that inherits it.

Therefore, the first step is to create a new contract which inherits the `IUserDefinedMacro` interface.

### 2. Implement your Macro Interface

The `buildBatchOperations` method is the only required method to be implemented in the contract that inherits the `IUserDefinedMacro` interface.
This method returns an array of `ISuperfluid.Operation[]` struct which will be consumed by the `MacroForwarder` contract. This struct is defined as follows:

```solidity
struct Operation {
    operationType operationType;
    address target;
    bytes data;
}
```

In the example contract `MultiFlowDeleteMacro`, you can see that the `buildBatchOperations` method is implemented as follows:

```solidity
function buildBatchOperations(ISuperfluid host, bytes memory params, address msgSender) public virtual view
        returns (ISuperfluid.Operation[] memory operations)
    {
        IConstantFlowAgreementV1 cfa = IConstantFlowAgreementV1(address(host.getAgreementClass(
            keccak256("org.superfluid-finance.agreements.ConstantFlowAgreement.v1")
        )));

        // parse params
        (ISuperToken token, address[] memory receivers) =
            abi.decode(params, (ISuperToken, address[]));

        // construct batch operations
        operations = new ISuperfluid.Operation[](receivers.length);
        for (uint i = 0; i < receivers.length; ++i) {
            bytes memory callData = abi.encodeCall(cfa.deleteFlow,
                                                   (token,
                                                    msgSender,
                                                    receivers[i],
                                                    new bytes(0) // placeholder
                                                   ));
            operations[i] = ISuperfluid.Operation({
                operationType : BatchOperation.OPERATION_TYPE_SUPERFLUID_CALL_AGREEMENT, // type
                target: address(cfa),
                data: abi.encode(callData, new bytes(0))
            });
        }
    }

```


:::warning About the method `getParams`
The `MultiFlowDeleteMacro` example contract contains a method called `getParams`. This method is not required to be implemented in the contract that inherits the `IUserDefinedMacro` interface.
However, it is highly recommended to implement this method in order to parse the parameters of the macro on the front-end.

This method is simply implemented by encoding the parameters that will be used to call the method `runMacro`from `MacroForwarder` contract. It is usually one line of code as such:

```solidity
function getParams(ISuperToken token, address[] memory receivers) public pure returns (bytes memory) {
    return abi.encode(token, receivers);
}
```
:::

Once, you set up and tested your Macro contract, you can deploy it to your target EVM network and use the `MacroForwarder` contract to batch call the transactions.

### 3. Use the Macro Forwarder to batch call the transactions

The `MacroForwarder` contract is used to batch call the transactions. It is a simple contract that has a method called `runMacro` which takes the following parameters:

- `IUserDefinedMacro m`: The address of the contract that inherits the `IUserDefinedMacro` interface
- `bytes calldata params`: The parameters of the macro

The `runMacro` method is called by the user and it will batch call the transactions defined in the `buildBatchOperations` method of the `IUserDefinedMacro` contract.

To showcase how this works, we use the [`MacroFowarder` contract](https://sepolia-optimism.etherscan.io/address/0xFD0268E33111565dE546af2675351A4b1587F89F) deployed on OP Sepolia.
We deployed an example of our [`MultiFlowDeleteMacro` contract](https://sepolia-optimism.etherscan.io/address/0x997b37Fb47c489CF067421aEeAf7Be0543fA5362) on the same network.
We will use the `MacroForwarder` contract to batch call the transactions.

We showcase below a simple React component which implements all of this:

<div>
<details>
<summary>Click here to show the `MacroForwarderComponent`</summary>
<p>

```jsx
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
    //ABI for MacroForwarder contract
  ];

  // ABI for your UserDefinedMacro including `getParams`
  const iUserDefinedMacroABI = [
    //ABI for your UserDefinedMacro including `getParams`
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

```

</p>
</details>
</div>

The `MacroForwarderComponent` is a simple React component that allows you to connect your wallet and execute the macro using EthersJS.
If you deployed your own `MultiFlowDeleteMacro` contract, you can use the `MacroForwarderComponent` to batch call the transactions by inputing
the `MacroForwarder` and `MultiFlowDeleteMacro` contract addresses in the playground below.

```jsx live
function MacroComponentExample() {

const macroForwarderAddress="0xFD0268E33111565dE546af2675351A4b1587F89F";
const userMacroAddress="0x997b37Fb47c489CF067421aEeAf7Be0543fA5362";
return (
    <div>
      <MacroForwarderComponent
      macroForwarderAddress={macroForwarderAddress}
      userDefinedMacroAddress={userMacroAddress}
      />
    </div>
  );
}
```

## Next Steps - EIP-712 Support

We will provide a guide which laverages [EIP-712](https://eips.ethereum.org/EIPS/eip-712) for typed structured data hashing and signing, enhancing the security and usability of macro transactions.
This will allow for the following features:

- On-chain verifiable signatures.
- Multilingual support for transaction signing.
- Supports meta transactions, allowing for gas-less transactions.
- And more...