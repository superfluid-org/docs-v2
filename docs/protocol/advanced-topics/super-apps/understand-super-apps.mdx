---
sidebar_position: 2
---

import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';

# Super Apps in Depth

### **What is a Super App?**

Super Apps are smart contracts registered with the Superfluid Protocol, allowing them to **react to Super Agreements** (like money streams). They are similar to ERC777 hooks but for Super Agreements.

<div style={{ display: 'flex', justifyContent: 'center' }}>
    ![The Tradeable Cashflow NFT](/assets/image_(29)_(1).png)
</div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <p>*The Tradeable Cashflow NFT*</p>
</div>

Super Apps can execute custom logic in response to streaming-related actions. A great example is the [tradeable cashflow NFT contract](https://github.com/superfluid-finance/super-examples/tree/c784d239557d6fb5e56a2c8951ac4353256d611d/projects/tradeable-cashflow), which automatically opens a new stream from the NFT contract to the owner of the NFT upon receiving a stream.

Callbacks in Super Apps are triggered by these actions:

1. A flow is opened with the Super App as the `receiver`.
2. A flow involving the Super App as the `receiver` is updated.
3. A flow is closed by the Super App's counterparty.

These callbacks can execute any arbitrary logic, enabling a wide range of possibilities for Super Apps.

### Super App Configuration

Super Apps need to be registered with the Superfluid Protocol to use callbacks. Here's how to register a Super App:

<CodeBlock className="language-javascript">
{`
// Example registration code for a Super App
uint256 configWord =
    SuperAppDefinitions.APP_LEVEL_FINAL |
    SuperAppDefinitions.BEFORE_AGREEMENT_CREATED_NOOP |
    SuperAppDefinitions.BEFORE_AGREEMENT_UPDATED_NOOP |
    SuperAppDefinitions.BEFORE_AGREEMENT_TERMINATED_NOOP;

string memory registrationKey = ""; // Can be empty for testnet deployments

_host.registerAppWithKey(configWord, registrationKey);
`}
</CodeBlock>

The `APP_LEVEL_FINAL` flag ensures that the callbacks run in the first app in a chain of Super Apps. The `_NOOP` designations specify which callbacks are not used, avoiding unnecessary reverts.

For mainnet deployments, pre-approval is required for registering Super Apps. Check out the [Super App White-listing Guide](https://github.com/superfluid-finance/protocol-monorepo/wiki/Super-App-White-listing-Guide) for more information.

### Super App Stream Buffers

When creating a Superfluid stream, an up-front buffer is taken to ensure the protocol's security. These deposits vary based on whether the stream is sent to a Super App and whether it's on testnet or mainnet.

For example, on testnets, the deposit is 1 hour x `flowRate` for non-Super Apps and up to 2 hours x `flowRate` for Super Apps. On mainnet, these values are 4 hours and 8 hours x `flowRate`, respectively.

### Super App Callbacks

Super App callbacks are triggered in response to certain actions in Superfluid agreements:

- When a stream is created, updated, or closed involving a Super App.
- Before and after these actions occur, different callbacks are executed.

Callback Anatomy:

<CodeBlock className="language-javascript">
{`
function beforeAgreementCreated(
    ISuperToken /*superToken*/,
    address /*agreementClass*/,
    bytes32 /*agreementId*/,
    bytes calldata /*agreementData*/,
    bytes calldata /*ctx*/
)
    external
    view
    virtual
    override
    returns (bytes memory /*cbdata*/)
{
    revert("Unsupported callback - Before Agreement Created");
}
`}
</CodeBlock>

<CodeBlock className="language-javascript">
{`
function afterAgreementCreated(
    ISuperToken /*superToken*/,
    address /*agreementClass*/,
    bytes32 /*agreementId*/,
    bytes calldata /*agreementData*/,
    bytes calldata /*cbdata*/,
    bytes calldata /*ctx*/
)
    external
    virtual
    override
    returns (bytes memory /*newCtx*/)
{
    revert("Unsupported callback - After Agreement Created");
}
`}
</CodeBlock>

### Super App Rules (Jail System)

Super Apps must comply with specific rules to avoid being jailed. These rules ensure the security and proper functioning of the protocol.

1. Super Apps cannot revert in the termination callback.
2. Super Apps must not become insolvent.
3. Operations within the termination callback must adhere to a gas limit.
4. The `ctx` data must be correctly handled in the termination callback.

#### Checking for Jailing

To check if a Super App is jailed, call `isAppJailed` on the Superfluid Host contract with the Super App's address. This can be done on Etherscan or through the Superfluid subgraph.

<Admonition type="note">
  For more details on the Jail system and Super App rules, visit the [Superfluid documentation](https://docs.superfluid.finance/superfluid).
</Admonition>

### Conclusion

Super Apps offer a versatile framework for building complex, reactive financial applications on the Superfluid Protocol. By understanding their mechanics, rules, and potential, developers can create innovative solutions for real-time finance.