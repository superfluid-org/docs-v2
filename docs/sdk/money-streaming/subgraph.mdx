---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';

# Subgraph

The Graph is the indexing layer of the blockchain industry, providing a queryable platform for the vast data produced by blockchain networks.
The Graph can be used for querying data in the Superfluid ecosystem and other on-chain data. Experiment with queries using the [GraphQL Playground](https://thegraph.com/hosted-service/).

<Admonition type="tip" title="New to GraphQL?">

Before diving into subgraph queries, familiarize yourself with GraphQL basics:
[Learn GraphQL](https://graphql.org/learn/)

</Admonition>

## Querying Different Networks

### Superfluid Explorer

The Superfluid Explorer is an interactive interface for exploring the Superfluid Protocol and interacting with its Subgraph. It provides an intuitive way to query on-chain data, get contract addresses, and manage your Superfluid finances. The console supports various blockchain networks, allowing you to seamlessly switch between them and access specific data sets. Whether you're analyzing streams, checking balances, or staying up to date with the new deployments. The Superfluid Explorer makes these tasks accessible and straightforward.

Explore Superfluid data across various networks using the Superfluid Explorer. Select a network to start querying:

<Tabs
  defaultValue="popular"
  values={[
    {label: 'Popular', value: 'popular'},
    {label: 'Other', value: 'other'},
  ]}>
  
  <TabItem value="popular">
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <a 
        href="https://console.superfluid.finance/subgraph?_network=ethereum"
        className="button-link"
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '4px',
          display: 'inline-block',
          margin: '5px'
        }}
      >
        Ethereum
      </a>
      <a 
        href="https://console.superfluid.finance/subgraph?_network=matic"
        className="button-link"
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '4px',
          display: 'inline-block',
          margin: '5px'
        }}
      >
        Polygon
      </a>
      <a 
        href="https://console.superfluid.finance/subgraph?_network=avalanche"
        className="button-link"
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '4px',
          display: 'inline-block',
          margin: '5px'
        }}
      >
        Avalanche
      </a>
      <a 
        href="https://console.superfluid.finance/subgraph?_network=optimism"
        className="button-link"
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '4px',
          display: 'inline-block',
          margin: '5px'
        }}
      >
        Optimism
      </a>
      <a 
        href="https://console.superfluid.finance/subgraph?_network=arbitrum"
        className="button-link"
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '4px',
          display: 'inline-block',
          margin: '5px'
        }}
      >
        Arbitrum
      </a>
      <a 
        href="https://console.superfluid.finance/subgraph?_network=binance-smart-chain"
        className="button-link"
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '4px',
          display: 'inline-block',
          margin: '5px'
        }}
      >
        Binance Smart Chain
      </a>
    </div>
  </TabItem>
  <TabItem value="other">
    <p>For other networks, use the Superfluid Explorer:</p>
    <a 
      href="https://console.superfluid.finance/"
      className="button-link"
      style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        textDecoration: 'none',
        borderRadius: '4px',
        display: 'inline-block'
      }}
    >
      Superfluid Explorer
    </a>
  </TabItem>
</Tabs>

### Subgraph Networks

You can have the full list of available subgraph endpoints in the [Subgraph Endpoints](/docs/technical-reference/subgraph) page.

## Resources

- **Subgraph Queries**: [Guide on Querying the Graph](https://thegraph.com/docs/en/developer/query-the-graph/)
- **Deploy a Subgraph**: [Creating a Subgraph](https://thegraph.com/docs/en/developer/create-subgraph-hosted/)
- **GraphQL Schema**: [Superfluid Schema](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/subgraph/schema.graphql)
- **Our Subgraph Endpoints**: [Subgraph Endpoints](/docs/technical-reference/subgraph)

## Helpful Tips

- All addresses in the subgraph (`id`, `underlyingAddress`, etc.) are lowercase.
- Convert addresses to lowercase before querying.

### Notable Breaking Changes

<Admonition type="caution" title="Migrating From Legacy Subgraph to V1">

Significant changes were made in October 2021:

- `totalSubscriptions` is now `totalSubscriptionsWithUnits`.
- `Subscriber` entity changed to `Subscription`.
- `createdAt` and `updatedAt` fields are now `createdAtTimestamp` and `updatedAtTimestamp`.

</Admonition>

## Schema Overview

The Superfluid Subgraph includes various entities for querying. Think of entities as analogous to database tables. Here's a brief overview:

### Event Entities

Event entities correspond to contract events, often with added data. Each event entity is immutable and created once.

- **Event ID Format**: `eventName-transactionHash-logIndex`.
- **Naming Convention**: For V1, event names end with 'Event'.

### Higher Order Level Entities (HOL)

HOL entities represent entities over their lifetime and may be updated.

- **`Account`**: Represents any address interacting with Superfluid.
- **`Token`**: Represents valid SuperTokens.
- **`Pool`**, **`PoolMember`**, **`Stream`**, **`StreamPeriod`**: Related to Superfluid streams and [pools](/docs/protocol/distributions/guides/pools).

### Aggregate Entities

Aggregate entities store cumulative data at both account-token and global token levels:

- **`TokenStatistic`**: Aggregates data for a single Token type.
- **`AccountTokenSnapshot`**: Aggregates data on an account's interaction with a token.

## Query Examples

Here are examples to help you get started with Superfluid subgraphs:

### Super Token Data Query

```javascript
{
  tokens(first: 100) {
    id
    symbol
    name
    underlyingAddress
  }
}
```

### Get All Streams for a Given Account

To list all streams that an account is currently receiving (swap 'receiver' for 'sender' to see streams being sent):

```javascript
query MyQuery {
  streams(where: {receiver: "YOUR_ADDRESS_HERE"}) {
    currentFlowRate
    token {
      symbol
    }
    sender {
      id
    }
    receiver {
      id
    }
  }
}
```

### Getting Stream Data Between 2 Parties

Query active streams between two parties, such as Alice ("0x658...") and Bob ("0xd66..."):

```javascript
{
  streams(where:{
    sender: "0x658e1b019f2f30c8089a9ae3ae5820f335bd9ce4"
    receiver: "0xd66e40b0c30595bec72153b502ac1e0c4785991b"
  }) {
    token {
      id
      symbol
    }
    createdAtTimestamp
    updatedAtTimestamp
    currentFlowRate
    streamedUntilUpdatedAt
  }
}
```

<Admonition type="note">

To calculate the current total amount streamed, use: _**streamedUntilUpdatedAt + ((current time in seconds) - updatedAtTimestamp) * currentFlowRate**_.

</Admonition>

### Get The Most Recently Updated Flows

Query the 10 most recently updated flows using the `FlowUpdatedEvent` type:

```javascript
{
  flowUpdatedEvents(first: 10, orderBy: timestamp, orderDirection: desc) {
    oldFlowRate
    flowRate
    userData
    stream {
      token {
        symbol
      }
      sender {
        id
      }
      receiver {
        id
      }
    }
  }
}
```

<Admonition type="info">

Understand the difference between a Flow and a Stream. A new stream is created each time a stream is terminated and restarted.

</Admonition>

### Get Aggregate Flow Data For a Given Token

Query aggregate data for a specific token, such as Super DAI on Polygon:

```javascript
{
  tokenStatistics(where: {
    id: "0x1305f6b6df9dc47159d12eb7ac2804d4a33173c2" // DAIx address on Matic
  }) {
    totalNumberOfActiveStreams
    totalNumberOfActiveIndexes
    totalAmountStreamedUntilUpdatedAt
    totalOutflowRate
    totalAmountDistributedUntilUpdatedAt
  }
}
```

### Get Data On a Specific Account

Query data on a specific account using both the `Account` and `AccountTokenSnapshot` entities:

```javascript
{
  accounts(where: {
    id: "0x..." // Enter an address below
  }) {
    isSuperApp
    inflows {
      currentFlowRate
      token {
        symbol
      }
      sender {
        id
      }
    }
    outflows {
      currentFlowRate
      token {
        symbol
      }
      receiver {
        id
      }
    }
    accountTokenSnapshots {
      token {
        id
      }
      totalNumberOfActiveStreams
      totalNetFlowRate
    }
  }
}
```

<Admonition type="tip">

Use `AccountTokenSnapshot` to get activity data for a specific token associated with an account.

</Admonition> 

## Explore more queries

Explore more queries using the [Superfluid Subgraph Playground](https://console.superfluid.finance/subgraph).