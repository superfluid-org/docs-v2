---
sidebar_position: 4
---
# Registering Super Apps

## Overview

To activate a Super App, you need to register it in the [Superfluid Host](/docs/concepts/advanced-topics/superfluid-host) contract. This registration is crucial for enabling the Super App's business logic to be invoked via agreement hooks.

## Registration Process

### Basic Registration

You can 

1. Use the `registerApp` method of the host contract.
2. Two ways to register:
   - Self-registration: `registerApp(configWord)`
   - Registration by another account: `registerApp(app, configWord)`



### Permissioned vs. Non-Permissioned Networks

Some networks require additional steps for Super App registration. Here's how to check:

1. Query `host.APP_WHITE_LISTING_ENABLED()` on your target network.
2. You can do this via the Superfluid Explorer:
   - Go to the "protocol" section (e.g., [Polygon Mainnet Explorer](https://Explorer.superfluid.finance/matic/protocol))
   - Click the Explorer link for "Host"
   - Navigate to Contract -> Read as Proxy
   - Expand "WHITE_LISTING_ENABLED"

![Superfluid Explorer Screenshot](https://github.com/superfluid-finance/protocol-monorepo/assets/5479136/442b460c-d1e9-419e-8483-12235ca19f0a)

- If `false`: Standard registration process applies
- If `true`: Follow the permissioned registration process below

## Permissioned App Registration

If your target network requires permissioned registration:

1. Get a "deployer" account whitelisted (can be an EOA or a contract)
2. Choose your deployment strategy:

   a) For a single Super App:
   - Register in the constructor or initialize method
   - Use `host.registerApp(configWord)`
   - Whitelist the EOA making this transaction

   b) For multiple Super App instances (e.g., factory pattern):
   - Whitelist a contract as the deployer
   - Use `host.registerApp(app, configWord)` from this contract

### Important Notes

- Using `registerApp(configWord)`: `tx.origin` must be whitelisted
- Using `registerApp(app, configWord)`: `msg.sender` must be whitelisted

## Need Help?

If you need assistance or have questions about the process:
1. Join our [Discord](http://discord.superfluid.finance/)
2. Contact the Superfluid dev team in the #development channel

## Code Examples

Here are some basic examples to illustrate the registration process:

```solidity
// Self-registration in constructor
constructor(ISuperfluid host, uint256 configWord) {
    host.registerApp(configWord);
}

// Registration by another account
function registerSuperApp(ISuperfluid host, ISuperApp app, uint256 configWord) external {
    host.registerApp(app, configWord);
}
```

Remember to adjust these examples based on your specific Super App implementation and network requirements.