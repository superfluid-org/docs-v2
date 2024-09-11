---
sidebar_position: 2
---
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';

# Tracking Super Token Balances

Super Token balances can dynamically change every second, presenting unique challenges and considerations for tracking them within the Ethereum ecosystem.

## Compatibility with ERC20

Super Tokens, while being ERC20 compatible, have some nuances in terms of forward compatibility with Ethereum infrastructure and tools.

### Key Points

- **Backward Compatibility**: Super Tokens work with existing Ethereum tools like Metamask and Gnosis Safe. You can view balances in Metamask, transfer funds using Gnosis Safe, and even swap Super Tokens on platforms like Uniswap.
- **Forward Compatibility**: While tools like Metamask and Gnosis Safe can display balances accurately, they do not support all functionalities of Super Tokens. For example, you cannot swap your streamed money on Automated Market Makers (eg. Uniswap).

## Balance Tracking Considerations

Tracking the balance of Super Tokens requires a more nuanced approach than traditional ERC20 tokens.

### Challenges

- **Event-Based Tracking Limitation**: Some applications, like Etherscan, use `transfer` events to track user balances. However, due to scalability concerns, Super Tokens don't emit `transfer` events with every balance change, leading to potential discrepancies in displayed balances.
- **Multi-source updates**: Super Tokens can be updated from multiple sources, from [Money Streaming](/docs/protocol/money-streaming/overview.mdx), but also [Distributions](/docs/protocol/distributions/overview.mdx).

### Solution 1 (recommended): Using `balanceOf`

As we mentioned earlier, Super Tokens are ERC20 compatible, so you can use the `balanceOf` function from the token smart contract to get the real time aggregated balance of a user.
The Superfluid Protocol modifies the `balanceOf` function to account for the various fund movement methods unique to Super Tokens including Money Streaming and Distributions.
You can simply call this function to get the real time aggregated balance of a user like so:

```jsx
const fetchBlockchainBalance = async () => {
    setLoading(true);
    setError("");
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "YOUR PROVIDER URL"
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
      return(ethers.utils.formatEther(balance.toString()));
    } catch (error) {
      console.error("Error fetching blockchain balance:", error);
    }
  };
```

:::tip About Accuracy
We recommend this solution because it guarantees the most accurate result. However, it is important to note that this method is not always possible depending on your application architecture design.
:::

### Solution 2: Using queries from the Subgraph

To accurately track Super Token balances, you can use the queries below to get inflows and outflow object from Superfluid's [Subgraph](https://explorer.superfluid.finance/subgraph).

#### Getting all the inflows for user
```graphql
query allReceivedStreams($receiver: String) {
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
}
```
#### Getting all the outflows for user
```graphql
query allSentStreams($sender: String) {
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
}
```
Doing this allows you to do the following:
- Get **the data related to each stream a user is receiving** : This allows us to calculate the positive balance associated with each stream they receive.
- Get **the data related to each pool where the user is connected** : This allows us to calculate the positive balance associated with each membership in a pool.
- Get **the data related to each stream a user is sending** : This allows us to calculate the negative balance associated with each stream they send.
- Get **the data related to each pool where the user is distributing** : This allows us to calculate the negative balance associated with each distribution they make.

:::tip How to calculate each balance?
The rule of thumb for calculating each one of these balances is the following:

<div style={{ display: 'flex', justifyContent: 'center' }}>
    **The Balance = FlowRate * (CurrentTime - LastUpdatedAtTime) + StreamedUntilUpdatedAt**.
</div>
:::


Once we have the balance from each stream and each pool/distribution, we can sum them up to get the net aggregated balance of a user.
An implementation of this can be seen in the `NetBalance` component below.

<div>
<details>
<summary>Click here to show `NetBalance` component</summary>
<p>
```jsx
const NetBalance = ({ liveAddress }) => {
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
      <h1>Real-Time Balance</h1>
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
          "Fetch Balance" to compare your real-time balance from the subgraph
          with the blockchain balance.
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
        <p>Real-Time Balance from Subgraph: {realTimeBalance} fake DAIx</p>
      )}
      {blockchainBalance !== null && (
        <p>Balance from Blockchain: {blockchainBalance} fake DAIx</p>
      )}
    </div>
  );
};
```
</p>
</details>
</div>

Furthermore, you can use the live code block below to see the `NetBalance` component in action:
- Enter your `liveAddress` in the code editor.
- Click "Fetch Balance" to compare your real-time balance from the subgraph with the blockchain balance.

```jsx live
function UserBalance() {
const yourAddress="0x5e48a37d34d93778807ef19d74e06128252bab45";

return (
    <div>
      <RealTimeBalance liveAddress={yourAddress} />
    </div>
  );
}
```

:::tip About this example
Please keep in mind that in the example above we make the assumption that the user is only using Money Streaming and Distributions in the form of the GDA,
but not Distributions in the form of the IDA. If you are using IDA, you will need to add a new query to get the data related to each transfer a user is distributing.
:::
