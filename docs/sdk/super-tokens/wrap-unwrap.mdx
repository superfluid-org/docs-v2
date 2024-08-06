---
sidebar_position: 1
---

# Wrap and Unwrap Super Tokens

This guide explains how to wrap and unwrap [Wrapped Super Tokens](/docs/protocol/super-tokens/overview#types-of-super-tokens) from your client application.

For all Wrapped Super Tokens, this is an important step in the user journey. It allows users to convert their ERC20 tokens to Super Tokens and vice versa.

:::tip how to deploy a wrapped super token?
If you need to deploy a Wrapped Super Token, you can follow our guide on [Deploying a Wrapped Super Token](/docs/protocol/super-tokens/guides/deploy-super-token/deploy-wrapped-super-token).
:::


## Why do we need to wrap and unwrap Super Tokens?

Super Tokens are an enhanced version of ERC20 tokens, typically built on top of existing ERC20 tokens. This means that to use a Super Token, you often need to "wrap" an ERC20 token into its Super Token equivalent, and vice versa when you want to convert back to the original ERC20.

To find out the address of the underlying ERC20 token for a Super Token, you can use the `getUnderlyingToken` view function provided by the [Super Token interface contract](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol).

:::tip Super Token Interface
You can find the complete Super Token interface in our [ISuperToken Technical Reference](/docs/technical-reference/ISuperToken).
:::

:::warning Not all Wrapped Super Tokens have an underlying ERC20 token
In the case of [Native Super Tokens](/docs/protocol/super-tokens/overview#3-native-super-tokens) (like the ETHx), they do not have a underlying ERC20 token, but rather the native coin of the chain.
Native Super Tokens inherit the ISETH interface, which you can also find in the [Technical Reference Section](/docs/technical-reference/ISETH).
:::

## Super Token ABI

You can find the ABI for the Super Token Interface at the [ISuperToken Technical Reference](/docs/technical-reference/ISuperToken). This ABI includes all the functions available for interacting with Super Tokens.

You can find the ABI for the Native Super Token Interface at the [ISETH Technical Reference](/docs/technical-reference/ISETH). This ABI includes all the functions available for interacting with Native Super Tokens.

## Wrapping and Unwrapping Functions

Super Tokens provide several functions for wrapping (upgrading) and unwrapping (downgrading) tokens:

### Wrapping (Upgrading) Functions

For wrapping ERC20 tokens into Super Tokens, you can use the following functions from the [Super Token interface](/docs/technical-reference/ISuperToken):
1. `upgrade(uint256 amount)`: Upgrades ERC20 tokens to Super Tokens.
2. `upgradeTo(address to, uint256 amount, bytes userData)`: Upgrades ERC20 tokens to Super Tokens and transfers them to a specified address.

For wrapping Native Super Tokens (like ETHx), you can use the following function from the [ISETH interface](/docs/technical-reference/ISETH):
1. `upgradeByETH() payable`: Upgrades native tokens to Super Tokens.
2. `upgradeByETHTo(address to) payable`: Upgrades native tokens to Super Tokens and transfers them to a specified address.

### Unwrapping (Downgrading) Functions

For unwrapping Super Tokens back to ERC20 tokens, you can use the following functions from the [Super Token interface](/docs/technical-reference/ISuperToken):
1. `downgrade(uint256 amount)`: Downgrades Super Tokens back to ERC20 tokens.
2. `downgradeTo(address to, uint256 amount)`: Downgrades Super Tokens to ERC20 tokens and transfers them to a specified address.

For unwrapping Native Super Tokens (like ETHx), you can use the following function from the [ISETH interface](/docs/technical-reference/ISETH):
1. `downgradeToETH(uint256 amount)`: Downgrades Super Tokens back to native tokens.

:::warning Approval for Wrapping
Before wrapping ERC20 tokens into Super Tokens, you need to approve the Super Token contract to spend your ERC20 tokens. This is not needed for unwrapping.
:::

## Live Code Example: Wrapping ERC20 to Super Token

Here's a simple example of how to wrap an ERC20 token into a Super Token using ethers.js:

```jsx live
function WrapERC20ToSuperToken() {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const wrapTokens = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // ERC20 token contract - you need to replace this with the actual token address
        const erc20Address = '0x123...'; // Replace with actual ERC20 token address
        const erc20Abi = ['function approve(address spender, uint256 amount) public returns (bool)'];
        const erc20Contract = new ethers.Contract(erc20Address, erc20Abi, signer);

        // Super Token contract - you need to replace this with the actual Super Token address
        const superTokenAddress = '0x456...'; // Replace with actual Super Token address
        const superTokenAbi = ['function upgrade(uint256 amount) external'];
        const superTokenContract = new ethers.Contract(superTokenAddress, superTokenAbi, signer);

        // Approve the Super Token contract to spend ERC20 tokens
        const approveTx = await erc20Contract.approve(superTokenAddress, amount);
        await approveTx.wait();
        setStatus('Approval successful. Wrapping tokens...');

        // Upgrade (wrap) ERC20 to Super Token
        const upgradeTx = await superTokenContract.upgrade(amount);
        await upgradeTx.wait();
        setStatus('Tokens successfully wrapped!');
      } catch (error) {
        console.error('Error:', error);
        setStatus('Error: ' + error.message);
      }
    } else {
      setStatus('Please install MetaMask!');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount to wrap"
      />
      <button onClick={wrapTokens}>Wrap Tokens</button>
      <p>{status}</p>
    </div>
  );
}
```

:::warning Replace Placeholder Addresses
Replace the placeholder addresses in the code above with actual contract addresses of your ERC20 token and Super Token.
:::

This example demonstrates how to:
1. Connect to the user's wallet
2. Approve the Super Token contract to spend ERC20 tokens
3. Upgrade (wrap) ERC20 tokens to Super Tokens

For more detailed information about the ISuperToken interface and its functions, please refer to our [ISuperToken Technical Reference](/docs/technical-reference/ISuperToken).