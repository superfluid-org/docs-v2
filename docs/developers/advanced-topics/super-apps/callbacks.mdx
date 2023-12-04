---
sidebar_position: 3
---


# Callbacks

Super App callbacks play a pivotal role in how Super Apps interact with the Superfluid Protocol. These callbacks are invoked in response to specific events related to Super Agreements.

## Callback Invocation Conditions

Depending on the Super Agreement involved, the callbacks are triggered under different scenarios. The following table outlines these conditions:

<table><thead><tr><th width="150">Agreement</th><th width="273.3632148377125">Callback</th><th>Condition</th></tr></thead><tbody><tr><td>CFAv1</td><td>beforeAgreementCreated, afterAgreementCreated</td><td>A stream to a Super App is created.</td></tr><tr><td>CFAv1</td><td>beforeAgreementUpdated, afterAgreementUpdated</td><td>A stream to a Super App is updated.</td></tr><tr><td>CFAv1</td><td>beforeAgreementTerminated, afterAgreementTerminated</td><td>A stream to a Super App is deleted.</td></tr><tr><td>IDAv1</td><td>beforeAgreementCreated, afterAgreementCreated</td><td>A subscription (with zero units) to an index published by a Super App is approved.</td></tr><tr><td>IDAv1</td><td>beforeAgreementUpdated, afterAgreementUpdated</td><td>A subscription (with units) to an index published by a Super App is approved.</td></tr><tr><td>IDAv1</td><td>beforeAgreementTerminated, afterAgreementTerminated</td><td>A subscription to an index published by a Super App is revoked.</td></tr><tr><td>IDAv1</td><td>beforeAgreementUpdated, afterAgreementUpdated</td><td>A subscription to an index published by a Super App is claimed</td></tr><tr><td>IDAv1</td><td>beforeAgreementCreated, afterAgreementCreated</td><td>Units of an index are issued to a Super App if the units were previously zero.</td></tr><tr><td>IDAv1</td><td>beforeAgreementUpdated, afterAgreementUpdated</td><td>Units of an index are issued to a Super App if the units were previously non-zero.</td></tr><tr><td>IDAv1</td><td>beforeAgreementTerminated, afterAgreementTerminated</td><td>Units of an index issued to a Super App are deleted.</td></tr></tbody></table>

## Callback Origin

The Superfluid protocol itself triggers these callbacks on-chain in response to various actions performed within the Constant Flow Agreement contract. The protocol checks if a Super App is involved in a transaction and, if so, executes the relevant callbacks.

### Anatomy of Super App Callbacks

Below are examples of Super App callbacks and their structure:

```solidity
function beforeAgreementCreated(
    ISuperToken /*superToken*/,
    address /*agreementClass*/,
    bytes32 /*agreementId*/,
    bytes calldata /*agreementData*/,
    bytes calldata /*ctx*/
) external view virtual override returns (bytes memory /*cbdata*/) {
    revert("Unsupported callback - Before Agreement Created");
}
```

```solidity
function afterAgreementCreated(
    ISuperToken /*superToken*/,
    address /*agreementClass*/,
    bytes32 /*agreementId*/,
    bytes calldata /*agreementData*/,
    bytes calldata /*cbdata*/,
    bytes calldata /*ctx*/
) external virtual override returns (bytes memory /*newCtx*/) {
    revert("Unsupported callback - After Agreement Created");
}
```

#### Callback Execution

* `beforeAgreement` callbacks are executed before the corresponding agreement contract action. They are `view` functions and can return data to be used in `afterAgreement` callbacks.
* `afterAgreement` callbacks are executed after the agreement contract action. They can implement logic based on the outcome of the agreement action and the data returned from `beforeAgreement` callbacks.

#### Callback Parameters

* **`ISuperToken`**: The Super Token used in the transaction.
* **`address`**: Address of the Constant Flow Agreement contract.
* **`agreementId`**: A unique identifier for the agreement.
* **`agreementData`**: Encoded data of the agreement details.
* **`cbdata`**: Data returned from `beforeAgreement` callbacks (applicable to `afterAgreement` callbacks).
* **`ctx`**: Context of the transaction, essential for understanding the background of the callback invocation.

### Utilizing Callbacks

Understanding and effectively using these callbacks is crucial for Super App developers. Each callback serves a specific purpose and offers the flexibility to execute custom logic in response to changes in Super Agreements.

## CallAgreement vs CallAgreementWithContext

If you're making a call to a Superfluid agreement inside of a Super App callback, you should remember that you need to "receive a context, and return a context" by using the `callAgreementWithContext` function. If you're not making this call inside of a Super App callback, you should use `callAgreement`.


:::note
Note that this is a highly technical section for those looking to understand lower level features of the protocol. If you're looking to create, update, and delete streams or work with the instant distribution agreement in your super app callbacks, you can refer to the [SuperTokenV1Library](https://github.com/superfluid-finance/super-examples/blob/main/projects/tradeable-cashflow/contracts/RedirectAll.sol#L223) to perform these operations in a single line of code.
:::

### In Depth

When calling the host contract to trigger actions related to the constant flow agreement (CFA) or instant distribution agreement (IDA), you may use either `callAgreement` or `callAgreementWithContext`. Both of these functions allow you to pass in an encoded call to the agreement you'd like to interact with, as well as an optional `userData` value. The `callAgreementWithContext` function will perform the same actions as the `callAgreement` function, but it also enables you to pass in a new context value (abbreviated `ctx` ) to your function call.

Keep in mind that `callAgreementWithContext` is designed for use within Super Apps - if this function is run outside of a Super App, then `callAgreementWithContext` will fail due to this statement:

``` solidity
require(
    context.appAddress == msg.sender,  
    "SF: callAgreementWithContext from wrong address"
);
```

`callAgreementWithContext` is primarily meant for use within Super App callbacks. Each Super App callback will be passed a context value (`ctx`) from the host contract (as the Superfluid host contract is the _caller_ of each callback). This `ctx` value is what needs to be passed to any call you want to make to the Superfluid host contract _inside_ of your callback (this goes for all operations which create, update, and delete flows in these callbacks). As a reminder, the logic within the 'host' contract can be found in `Superfluid.sol`.

The process looks like this:

<div>
<details>
<summary>Click here to show the code</summary>
<p>

```solidity
//a function which we'll use to create a flow within a callback
function _createFlowInCallback(
        bytes calldata ctx,
        ISuperfluid _host, 
        IConstantFlowAgreementV1 _cfa,    
        ISuperfluidToken _acceptedToken,
        address _receiver, 
        int96 _flowRate	
    )
	private
	returns (bytes memory newCtx)
    {
        newCtx = ctx;

        (newCtx,) = _host.callAgreementwithContext(
	    _cfa,
            abi.encodeWithSelector(
            _cfa.deleteFlow.selector,
            _acceptedToken,
            address(this),
	    _receiver,
            new bytes(0) // placeholder
          ),
          "0x", //placeholder userdata value
          newCtx //passing in the context from the super app callback
       );	
}

function afterAgreementCreated(
    ISuperToken _superToken,
    address _agreementClass,
    bytes32, // _agreementId,
    bytes calldata /*_agreementData*/,
    bytes calldata ,// _cbdata,
    bytes calldata _ctx
)
    external override
    onlyExpected(_superToken, _agreementClass)
    onlyHost
    returns (bytes memory newCtx)
{
//passing in the ctx which is sent to the callback here
   return _createFlowInCallback(_ctx, _host, _cfa, _acceptedToken, _receiver, _flowrate); 
}
```
</p>
</details>
</div>


You can also do this in a much easier way by using our new CFA Library, which abstracts away the need to use `host.callAgreement` or `host.callAgreementWithContext` directly.

<div>
<details>
<summary>Click here to show the code</summary>
<p>
```solidity
using CFALibraryV1 for CFALibraryV1.InitData;

    //initialize cfaV1 variable
    CFALibraryV1.InitData public cfaV1; 

    constructor(
        ISuperfluid host
    ) {

    //initialize InitData struct, and set equal to cfaV1
    cfaV1 = CFALibraryV1.InitData(
       host,
       IConstantFlowAgreementV1(
	  address(host.getAgreementClass(
           keccak256("org.superfluid-finance.agreements.ConstantFlowAgreement.v1")
	   ))
        )
     );
   }

function afterAgreementCreated(
    ISuperToken _superToken,
    address _agreementClass,
    bytes32, // _agreementId,
    bytes calldata /*_agreementData*/,
    bytes calldata ,// _cbdata,
    bytes calldata _ctx
)
    external override
    onlyExpected(_superToken, _agreementClass)
    onlyHost
    returns (bytes memory newCtx)
{
//passing in the ctx which is sent to the callback here
//createFlowWithCtx makes use of callAgreementWithContext
   return cfaV1.createFlowWithCtx(_ctx, receiver, token, flowRate);
}
```
</p>
</details>
</div>

You may have another scenario in which you want to make additional calls to the host contract after you first run `callAgreementWithContext`. If you do this, you can save the value returned by the first `callAgreementWithContext` function to a new variable, then pass this value to your next call to `callAgreementWithContext` . The takeaway here is that you need to pass the most recent iteration of `ctx` when creating, updating, or deleting flows inside Super App callbacks. You can see this done here with the CFA Library:

<div>
<details>
<summary>Click here to show the code</summary>
<p>
```solidity
using CFALibraryV1 for CFALibraryV1.InitData;

    //initialize cfaV1 variable
    CFALibraryV1.InitData public cfaV1; 

    constructor(
        ISuperfluid host
    ) {

    //initialize InitData struct, and set equal to cfaV1
    cfaV1 = CFALibraryV1.InitData(
       host,
       IConstantFlowAgreementV1(
	  address(host.getAgreementClass(
           keccak256("org.superfluid-finance.agreements.ConstantFlowAgreement.v1")
	    ))
        )
     );
   }

function afterAgreementCreated(
    ISuperToken _superToken,
    address _agreementClass,
    bytes32, // _agreementId,
    bytes calldata /*_agreementData*/,
    bytes calldata ,// _cbdata,
    bytes calldata _ctx
)
    external override
    onlyExpected(_superToken, _agreementClass)
    onlyHost
    returns (bytes memory newCtx)
{
   newCtx = cfaV1.createFlowWithCtx(_ctx, receiver, token, flowRate); //passing in the ctx which is sent to the callback here
   newCtx = cfaV1.createFlowWithCtx(newCtx, receiver, token, flowRate); //passing in the ctx which is returned from the first call here
			 
}
```
</p>
</details>
</div>

One final item to note is to not manually change the value of `ctx` when it's used within a Super App. `Ctx` is formatted in a very specific way within a struct that is compiled to bytecode by the protocol, and it's not meant to be manipulated directly. If you wish to pass in userData to your function call, this can be done by simply adding the `userData` value in as a parameter:

<div>
<details>
<summary>Click here to show the code</summary>
<p>
```solidity
//using the CFA Library:
function afterAgreementCreated(
    ISuperToken _superToken,
    address _agreementClass,
    bytes32, // _agreementId,
    bytes calldata /*_agreementData*/,
    bytes calldata ,// _cbdata,
    bytes calldata _ctx
)
    external override
    onlyExpected(_superToken, _agreementClass)
    onlyHost
    returns (bytes memory newCtx)
{
   //passing in the ctx which is sent to the callback here
   //createFlowWithCtx makes use of callAgreementWithContext
   return cfaV1.createFlowWithCtx(_ctx, receiver, token, flowRate, userData);
}

//using a low level call
function afterAgreementCreated(
    ISuperToken _superToken,
    address _agreementClass,
    bytes32, // _agreementId,
    bytes calldata /*_agreementData*/,
    bytes calldata ,// _cbdata,
    bytes calldata _ctx
)
    external override
    onlyExpected(_superToken, _agreementClass)
    onlyHost
    returns (bytes memory newCtx)
  {
	newCtx = _ctx;
	 (newCtx,) = _host.callAgreementwithContext(
	      _cfa,
	      abi.encodeWithSelector(
	      _cfa.deleteFlow.selector,
	      _acceptedToken,
	      address(this),
	      _receiver,
        new bytes(0) // placeholder
      ),
      userData, //userData goes here
      newCtx //passing in the context from the super app callback
   );	
 }

```
</p>
</details>
</div>

If you read through the Superfluid codebase, you'll see that nearly every state changing operation will return a context value. This `ctx` value helps to provide additional internal accounting for the protocol to enhance security, and it allows you to decode it and make use of values like userData inside Super Apps. When making calls within your Super Apps, keep in mind that you need to pass in updated context values if you want to make use of the callbacks properly. Remember: if you need to run callAgreement within a Super App callback, you'll need to use `callAgreementWithContext` and pass in `ctx`.
