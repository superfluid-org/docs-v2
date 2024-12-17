---
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Liquidations & TOGA

## Liquidation and Solvency

When opening a stream, the protocol will take a small `buffer` or `deposit`. By leaving their streams open for too long, stream creators stand to lose this `buffer`. This mechanism creates the main incentive for users to close their Superfluid streams before running out of tokens. It is a user's own responsibility to close their stream.

`superApps` can also draw an `owedDeposit`, allowing them to open a stream of the same size, without needing an initial balance.

Here's the general flow of solvency states for Super Tokens in a Constant Flow Agreement (Money Streaming):

#### 1. Solvent

Everyone is in good standing. The sender's balance is greater than 0. The stream flows to the receiver as expected, and there are enough tokens to back the stream.

#### 2. Critical

The sender's balance is now zero, and the permissions on the stream now allow anyone to close it. Until the stream is actually closed, funds are paid to the receiver's wallet using the sender's initial `buffer`.

The critical period is subdivided into 2 sub-periods:\
a) _**Patrician Period**_: starts when the stream becomes critical (duration defined as governance parameter)\
b) _**Plebs Period**_: spans the remaining timeframe until the stream becomes insolvent

When the stream is closed, any remaining `buffer` is taken and assigned/distributed either to the _**PIC**_ or a _**Pleb**_.\
If the stream is closed during the Plebs Period, we call the account closing the stream a Pleb.

#### 3. Insolvent

If the stream isn't closed, and the sender's deposit is completely consumed, then the insolvent period begins. The stream will continue to the receiver, however since these tokens don't actually exist in the sender's wallet, we must keep track of this `deficit` so that the Super Token itself can remain solvent within the Superfluid Protocol.\
We also call this open ended timeframe the _**Pirate Period**_.

When the stream is eventually closed, the `deficit` is taken from the PICs stake as a slashing fee. This slashing fee is then burned, to offset the tokens created by the insolvent stream. Additionally, a reward equal in amount to the `buffer` amount before its consumption is issued to the account closing the stream, whom we call a _**Pirate.**_. This reward is also detracted from the PICs stake.

<div style={{ display: "flex", justifyContent: "center" }}>
  ![Buffer and
  balance](https://lh6.googleusercontent.com/X7ShIBo-weuUDIVwxj4Klj0VNy0PNP7ajC9zNC9WxiCOMkPDfhjpK4YpNJQ8i1Oor2OjDYzxr1493JxtCU4ycHwU7lZ9rRkiwm4mRQEA9xTDybxd4WXht3JW95U6qEqEvSHA60zi)
</div>
<div style={{ display: "flex", justifyContent: "center" }}>
  <p>
    *Visualization showing the tota user balance as well as the outgoing stream
    part of the buffer*
  </p>
</div>

### Patricians, Plebs and Pirates (3Ps)

Each token has an account called a _**PIC (Patrician in Charge)**_.

Every time a stream is closed while Critical during the Patrician Period, the remaining amount of the `buffer` balance of the closed stream is taken and added to the PICs stake as a reward.

Every time a stream is closed while Critical during the Plebs Period, the remaining buffer is rewarded to the Pleb.

Every time a stream is closed while Insolvent, the PIC is slashed, and the Pirate is rewarded with the full buffer amount.

The monopoly on rewards during the Patrician Period gives PICs an incentive to make sure streams are closed during that timeframe.\
They can set up one or multiple redundant instances of the [superfluid-sentinel](https://github.com/superfluid-finance/superfluid-sentinel) (and/or other mechanisms for closing streams) to ensure this. Note that the PIC account is not needed (not in a _hot wallet_) for this operations as the rewards incurred during the patrician period will be added to the PIC stake regardless of transaction sender.

Plebs act as a fallback in case PICs fail to do their job despite of the incentives.\
The earlier in the Pleb Period a Pleb closes the stream, the more buffer there's left as a reward.

Unlike the PIC, individual Plebs and Pirates don't have a monopoly. Whoever manages to get a stream closing transaction included first during the Plebs / Pirate Period, gets the reward.

Patrician, Pleb and Pirate are roles which map to accounts in specific circumstances.\
The same account could have any of those roles in the context of various stream closing transactions, defined by the timing of that transaction and the state of the TOGA contract (list of PICs) at the time of transaction execution. The reference sentinel implementation provides configuration options influencing that behaviour and timing of transactions.

Note that thanks to this flexible roles model, PICs have an incentive to close streams even after missing the Patrician Period:

1. they can still get rewards, essentially acting as a Pleb or Pirate in the context of that transaction
2. due to the slashing of the `deficit` from their stake, their incentive to close insolvent streams grows linearly over time

![Toga payoff table](</assets/image_(72).png>)

### TOGA - Transparent OnGoing Auction

Since the role of a PIC comes with a monopoly on rewards incurred during the Patrician Period, a fair mechanism for assigning this role is needed. Such a mechanism is provided by the TOGA.

To become a PIC for a token, aspiring Patricians must post a `stake` to the TOGA contract, in the token they are trying to become a PIC for. If the new `stake` is higher than the existing `stake`, the new Patrician becomes the PIC, and the previous Patrician gets their current `stake` back.

PICs can't remove their `stake` at will through a single transaction, but rather, they have to specify an `exitRate`, which defines the flowrate of a Stream to their account. The `exitRate` is also not completely arbitrary, it is limited such that the `stake` will remain above zero for at least a week.

All liquidation rewards are added to the `stake`, thus - depending on the exitRate set by the PIC and the number of size of streams becoming critical - the stake of a PIC could shrink, grow or stay the same over time. (The maximum allowed `exitRate` is calculated based on the worst case of no rewards being added during that timeframe.)

In order to become the PIC, you can either use the Dapp at https://toga.superfluid.finance/ or use `ERC777.send()` to post the desired stake to the TOGA contract - optionally with an `exitRate` set in the `data` parameter if you don't like the default `exitRate`. The TOGA contract implements an ERC777 callback for the auction mechanism.

:::warning CAUTION
Do NOT use `ERC20.transfer()` for TOGA bids, because those may not trigger the needed callback in the future.
:::

### Current Parameters

<Tabs
    defaultValue="polygon"
    values={[
        { label: 'Polygon', value: 'polygon' },
        { label: 'Ethereum Mainnet', value: 'ethereum-mainnet' },
        { label: 'Gnosis Chain', value: 'gnosis-chain' },
        { label: 'Optimism', value: 'optimism' },
        { label: 'Arbitrum', value: 'arbitrum' },
        { label: 'Goerli', value: 'goerli' },
    ]}
>
    <TabItem value="polygon">
        **Deposit**

        4 hour `deposit`

        4 hour maximum `owedDeposit`

        30 minutes `patrician period`

        **TOGA**

        1 week minimum `exitPeriod`

        4 week default `exitPeriod`
    </TabItem>
    <TabItem value="ethereum-mainnet">
        **Minimum Deposit**

        Ethereum L1 is a different environment from other networks where Superfluid has been deployed.
        This is due to the fact that performing any operation on L1 is much more expensive
        in terms of gas cost than it is on other networks.

        To cover additional costs incurred by sentinels, tokens on L1 have been deployed with minimum deposit values.
        This means that the buffer on each of these tokens will not always be calculated
        as 4 hours worth of the stream as it is on lower cost networks.

        - ETHx: 0.042 ETHx
        - USDCx & DAIx: 69 tokens

        **Deposit**

        4 hour `deposit` (note that this value only applies if the deposit is > the min deposit)

        4 hour maximum `owedDeposit`

        30 minutes `patrician period`

        **TOGA**

        1 week minimum `exitPeriod`

        4 week default `exitPeriod`
    </TabItem>
    <TabItem value="gnosis-chain">
        **Deposit**

        4 hour `deposit`

        4 hour maximum `owedDeposit`

        30 minutes `patrician period`

        **TOGA**

        1 week minimum `exitPeriod`

        4 week default `exitPeriod`
    </TabItem>
    <TabItem value="optimism">
        **Deposit**

        4 hour `deposit`

        4 hour maximum `owedDeposit`

        30 minutes `patrician period`

        **TOGA**

        1 week minimum `exitPeriod`

        4 week default `exitPeriod`
    </TabItem>
    <TabItem value="arbitrum">
        **Deposit**

        4 hour `deposit`

        4 hour maximum `owedDeposit`

        30 minutes `patrician period`

        **TOGA**

        1 week minimum `exitPeriod`

        4 week default `exitPeriod`
    </TabItem>
    <TabItem value="goerli">
        **Deposit**

        1 hour `deposit`

        1 hour maximum `owedDeposit`

        12 minutes `patrician period`

        **TOGA**

        1 week minimum `exitPeriod`

        4 week default `exitPeriod`
    </TabItem>

</Tabs>

---

:::info
Note that this parameter definitions in terms of time units refer to simplified idealized scenarios and are basically lower bounds.
:::

\
The deposit related timeframes directly apply for streams where the sender account has no incoming streams and where the net flowrate is thus equal to the outgoing flowrate. If however the sender account has incoming streams, this timeframes are stretched proportionally. If for example the aggregate incoming flowrate is half of the aggregate outgoing flowrate, the time for the buffer to be consumed (critial period) doubles, as do the patrician period and the plebs period. If the aggregate incoming flowrate equals the aggregate outgoing flowrate (net flowrate = zero), those periods become potentially infinite (as long as the net flowrate doesn't change), because in that case the buffer wouldn't be consumed further, but not restored either, leaving outgoing streams critical in perpetuity.

\
For the TOGA `exitPeriod`, something similar applies - it's the lower bound for how long it would take a PIC to stream out the stake with a given `exitRate`, assuming nothing is added to the stake during that time. In practice, accrued liquidation rewards may be added to the stake during that time, leading to a proportional extension of the exitPeriod. In theory such added rewards could even completely offset the exitRate, leading to a net growing stake. In that case the PIC could periodically increase the exitRate (a larger stake allows for a larger exitRate) and would eventually be able to set an exitRate which leads to a shrinking stake.
