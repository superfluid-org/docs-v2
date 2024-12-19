---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';

# Subgraph

The Graph is the indexing layer of our industry, providing a queryable platform for the vast data produced by blockchain networks. The Graph can be used for querying data in the Superfluid ecosystem and other on-chain data. Experiment with queries using the [GraphQL Playground](https://thegraph.com/hosted-service/).

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
- **`Pool`**, **`PoolMember`**, **`Stream`**, **`StreamPeriod`**: Related to Superfluid streams and [pools](/docs/protocol/distributions/guides/pools.mdx).

### Aggregate Entities

Aggregate entities store cumulative data at both account-token and global token levels:

- **`TokenStatistic`**: Aggregates data for a single Token type.
- **`AccountTokenSnapshot`**: Aggregates data on an account's interaction with a token.

## Query Examples

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
### Get the pools that a user is a member of

To list all pools that an account is currently a member (insert the ethereum address in the query below):

```javascript
query MyQuery {
  pools(
    first: 10
    where: {poolMembers_: {account: "YOUR_ADDRESS_HERE", account_: {}}}
  ) {
    totalUnits
    totalMembers
    flowRate
    createdAtBlockNumber
  }
}
```

### Get all the pools for a specific token

To list all pools for a token (insert the token address in the query below):

```javascript
query MyQuery {
  pools(where: {token: "YOUR_TOKEN_ADDRESS_HERE"}) {
    createdAtBlockNumber
    createdAtTimestamp
    flowRate
    id
    totalMembers
    totalUnits
    admin {
      isSuperApp
    }
  }
}
```
### Get all the pools for a specific pool admin

To list all pools for a pool admin (insert the pool admin address in the query below):

```javascript
query MyQuery {
  pools(first: 10, where: {admin: "YOUR_POOL_ADMIN_ADDRESS_HERE"}) {
    totalUnits
    totalMembers
    flowRate
    createdAtBlockNumber
    token {
      id
      isSuperToken
      symbol
    }
  }
}
```

## Explore more queries

Explore more queries using the [Superfluid Subgraph Playground](https://console.superfluid.finance/subgraph).
