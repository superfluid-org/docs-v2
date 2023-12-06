# SuperTokenV1Library

_Set `using for ISuperToken` in including file, and call any of these functions on an instance
of ISuperToken.
Note that it is important to "warm up" the cache and cache the host, cfa, ida before calling,
this is only applicable to Foundry tests where the vm.expectRevert() will not work as expected.
You must use vm.startPrank(account) instead of vm.prank when executing functions if the cache
isn't "warmed up" yet. vm.prank impersonates the account only for the first call, which will be
used for caching._

### createFlow

```solidity
function createFlow(contract ISuperToken token, address receiver, int96 flowRate) internal returns (bool)
```

_Create flow without userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| receiver | address | The receiver of the flow |
| flowRate | int96 | The desired flowRate |

### createFlow

```solidity
function createFlow(contract ISuperToken token, address receiver, int96 flowRate, bytes userData) internal returns (bool)
```

_Create flow with userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| receiver | address | The receiver of the flow |
| flowRate | int96 | The desired flowRate |
| userData | bytes | The userdata passed along with call |

### updateFlow

```solidity
function updateFlow(contract ISuperToken token, address receiver, int96 flowRate) internal returns (bool)
```

_Update flow without userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| receiver | address | The receiver of the flow |
| flowRate | int96 | The desired flowRate |

### updateFlow

```solidity
function updateFlow(contract ISuperToken token, address receiver, int96 flowRate, bytes userData) internal returns (bool)
```

_Update flow with userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| receiver | address | The receiver of the flow |
| flowRate | int96 | The desired flowRate |
| userData | bytes | The userdata passed along with call |

### deleteFlow

```solidity
function deleteFlow(contract ISuperToken token, address sender, address receiver) internal returns (bool)
```

_Delete flow without userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |

### deleteFlow

```solidity
function deleteFlow(contract ISuperToken token, address sender, address receiver, bytes userData) internal returns (bool)
```

_Delete flow with userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |
| userData | bytes | The userdata passed along with call |

### setFlowPermissions

```solidity
function setFlowPermissions(contract ISuperToken token, address flowOperator, bool allowCreate, bool allowUpdate, bool allowDelete, int96 flowRateAllowance) internal returns (bool)
```

_Update permissions for flow operator_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address given flow permissions |
| allowCreate | bool | creation permissions |
| allowUpdate | bool |  |
| allowDelete | bool |  |
| flowRateAllowance | int96 | The allowance provided to flowOperator |

### setMaxFlowPermissions

```solidity
function setMaxFlowPermissions(contract ISuperToken token, address flowOperator) internal returns (bool)
```

_Update permissions for flow operator - give operator max permissions_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address given flow permissions |

### revokeFlowPermissions

```solidity
function revokeFlowPermissions(contract ISuperToken token, address flowOperator) internal returns (bool)
```

_Update permissions for flow operator - revoke all permission_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address given flow permissions |

### increaseFlowRateAllowance

```solidity
function increaseFlowRateAllowance(contract ISuperToken token, address flowOperator, int96 addedFlowRateAllowance) internal returns (bool)
```

allowing userData to be a parameter here triggered stack too deep error

_Increases the flow rate allowance for flow operator_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address whose flow rate allowance is increased |
| addedFlowRateAllowance | int96 | amount to increase allowance by |

### increaseFlowRateAllowance

```solidity
function increaseFlowRateAllowance(contract ISuperToken token, address flowOperator, int96 addedFlowRateAllowance, bytes userData) internal returns (bool)
```

allowing userData to be a parameter here triggered stack too deep error

_Increases the flow rate allowance for flow operator_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address whose flow rate allowance is increased |
| addedFlowRateAllowance | int96 | amount to increase allowance by |
| userData | bytes | The userdata passed along with call |

### decreaseFlowRateAllowance

```solidity
function decreaseFlowRateAllowance(contract ISuperToken token, address flowOperator, int96 subtractedFlowRateAllowance) internal returns (bool)
```

allowing userData to be a parameter here triggered stack too deep error

_Decreases the flow rate allowance for flow operator_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address whose flow rate allowance is decreased |
| subtractedFlowRateAllowance | int96 | amount to decrease allowance by |

### decreaseFlowRateAllowance

```solidity
function decreaseFlowRateAllowance(contract ISuperToken token, address flowOperator, int96 subtractedFlowRateAllowance, bytes userData) internal returns (bool)
```

allowing userData to be a parameter here triggered stack too deep error

_Decreases the flow rate allowance for flow operator_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address whose flow rate allowance is decreased |
| subtractedFlowRateAllowance | int96 | amount to decrease allowance by |
| userData | bytes | The userdata passed along with call |

### increaseFlowRateAllowanceWithPermissions

```solidity
function increaseFlowRateAllowanceWithPermissions(contract ISuperToken token, address flowOperator, uint8 permissionsToAdd, int96 addedFlowRateAllowance) internal returns (bool)
```

allowing userData to be a parameter here triggered stack too deep error

_Increases the flow rate allowance for flow operator and adds the permissions_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address whose flow rate allowance is increased |
| permissionsToAdd | uint8 | The permissions to add for the flow operator |
| addedFlowRateAllowance | int96 | amount to increase allowance by |

### increaseFlowRateAllowanceWithPermissions

```solidity
function increaseFlowRateAllowanceWithPermissions(contract ISuperToken token, address flowOperator, uint8 permissionsToAdd, int96 addedFlowRateAllowance, bytes userData) internal returns (bool)
```

allowing userData to be a parameter here triggered stack too deep error

_Increases the flow rate allowance for flow operator and adds the permissions_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address whose flow rate allowance is increased |
| permissionsToAdd | uint8 | The permissions to add for the flow operator |
| addedFlowRateAllowance | int96 | amount to increase allowance by |
| userData | bytes | The userdata passed along with call |

### decreaseFlowRateAllowanceWithPermissions

```solidity
function decreaseFlowRateAllowanceWithPermissions(contract ISuperToken token, address flowOperator, uint8 permissionsToRemove, int96 subtractedFlowRateAllowance) internal returns (bool)
```

allowing userData to be a parameter here triggered stack too deep error

_Decreases the flow rate allowance for flow operator and removes the permissions_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address whose flow rate allowance is subtracted |
| permissionsToRemove | uint8 | The permissions to remove for the flow operator |
| subtractedFlowRateAllowance | int96 | amount to subtract allowance by |

### decreaseFlowRateAllowanceWithPermissions

```solidity
function decreaseFlowRateAllowanceWithPermissions(contract ISuperToken token, address flowOperator, uint8 permissionsToRemove, int96 subtractedFlowRateAllowance, bytes userData) internal returns (bool)
```

allowing userData to be a parameter here triggered stack too deep error

_Decreases the flow rate allowance for flow operator and removes the permissions_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address whose flow rate allowance is subtracted |
| permissionsToRemove | uint8 | The permissions to remove for the flow operator |
| subtractedFlowRateAllowance | int96 | amount to subtract allowance by |
| userData | bytes | The userdata passed along with call |

### setFlowPermissionsWithCtx

```solidity
function setFlowPermissionsWithCtx(contract ISuperToken token, address flowOperator, bool allowCreate, bool allowUpdate, bool allowDelete, int96 flowRateAllowance, bytes ctx) internal returns (bytes newCtx)
```

allowing userData to be a parameter here triggered stack too deep error

_Update permissions for flow operator in callback_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address given flow permissions |
| allowCreate | bool | creation permissions |
| allowUpdate | bool |  |
| allowDelete | bool |  |
| flowRateAllowance | int96 | The allowance provided to flowOperator |
| ctx | bytes | Context bytes (see ISuperfluid.sol for Context struct) |

### setMaxFlowPermissionsWithCtx

```solidity
function setMaxFlowPermissionsWithCtx(contract ISuperToken token, address flowOperator, bytes ctx) internal returns (bytes newCtx)
```

_Update permissions for flow operator - give operator max permissions_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address given flow permissions |
| ctx | bytes | Context bytes (see ISuperfluid.sol for Context struct) |

### revokeFlowPermissionsWithCtx

```solidity
function revokeFlowPermissionsWithCtx(contract ISuperToken token, address flowOperator, bytes ctx) internal returns (bytes newCtx)
```

_Update permissions for flow operator - revoke all permission_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowOperator | address | The address given flow permissions |
| ctx | bytes | Context bytes (see ISuperfluid.sol for Context struct) |

### createFlowFrom

```solidity
function createFlowFrom(contract ISuperToken token, address sender, address receiver, int96 flowRate) internal returns (bool)
```

_Creates flow as an operator without userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token to flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |
| flowRate | int96 | The desired flowRate |

### createFlowFrom

```solidity
function createFlowFrom(contract ISuperToken token, address sender, address receiver, int96 flowRate, bytes userData) internal returns (bool)
```

_Creates flow as an operator with userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token to flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |
| flowRate | int96 | The desired flowRate |
| userData | bytes | The user provided data |

### updateFlowFrom

```solidity
function updateFlowFrom(contract ISuperToken token, address sender, address receiver, int96 flowRate) internal returns (bool)
```

_Updates flow as an operator without userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token to flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |
| flowRate | int96 | The desired flowRate |

### updateFlowFrom

```solidity
function updateFlowFrom(contract ISuperToken token, address sender, address receiver, int96 flowRate, bytes userData) internal returns (bool)
```

_Updates flow as an operator with userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token to flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |
| flowRate | int96 | The desired flowRate |
| userData | bytes | The user provided data |

### deleteFlowFrom

```solidity
function deleteFlowFrom(contract ISuperToken token, address sender, address receiver) internal returns (bool)
```

_Deletes flow as an operator without userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token to flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |

### deleteFlowFrom

```solidity
function deleteFlowFrom(contract ISuperToken token, address sender, address receiver, bytes userData) internal returns (bool)
```

_Deletes flow as an operator with userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token to flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |
| userData | bytes | The user provided data |

### createFlowWithCtx

```solidity
function createFlowWithCtx(contract ISuperToken token, address receiver, int96 flowRate, bytes ctx) internal returns (bytes newCtx)
```

_Create flow with context and userData_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token to flow |
| receiver | address | The receiver of the flow |
| flowRate | int96 | The desired flowRate |
| ctx | bytes | Context bytes (see ISuperfluid.sol for Context struct) |

### createFlowFromWithCtx

```solidity
function createFlowFromWithCtx(contract ISuperToken token, address sender, address receiver, int96 flowRate, bytes ctx) internal returns (bytes newCtx)
```

_Create flow by operator with context_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token to flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |
| flowRate | int96 | The desired flowRate |
| ctx | bytes | Context bytes (see ISuperfluid.sol for Context struct) |

### updateFlowWithCtx

```solidity
function updateFlowWithCtx(contract ISuperToken token, address receiver, int96 flowRate, bytes ctx) internal returns (bytes newCtx)
```

_Update flow with context_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token to flow |
| receiver | address | The receiver of the flow |
| flowRate | int96 | The desired flowRate |
| ctx | bytes | Context bytes (see ISuperfluid.sol for Context struct) |

### updateFlowFromWithCtx

```solidity
function updateFlowFromWithCtx(contract ISuperToken token, address sender, address receiver, int96 flowRate, bytes ctx) internal returns (bytes newCtx)
```

_Update flow by operator with context_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token to flow |
| sender | address | The receiver of the flow |
| receiver | address | The receiver of the flow |
| flowRate | int96 | The desired flowRate |
| ctx | bytes | Context bytes (see ISuperfluid.sol for Context struct) |

### deleteFlowWithCtx

```solidity
function deleteFlowWithCtx(contract ISuperToken token, address sender, address receiver, bytes ctx) internal returns (bytes newCtx)
```

_Delete flow with context_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token to flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |
| ctx | bytes | Context bytes (see ISuperfluid.sol for Context struct) |

### deleteFlowFromWithCtx

```solidity
function deleteFlowFromWithCtx(contract ISuperToken token, address sender, address receiver, bytes ctx) internal returns (bytes newCtx)
```

_Delete flow by operator with context_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token to flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |
| ctx | bytes | Context bytes (see ISuperfluid.sol for Context struct) |

### getFlowRate

```solidity
function getFlowRate(contract ISuperToken token, address sender, address receiver) internal view returns (int96 flowRate)
```

_get flow rate between two accounts for given token_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| flowRate | int96 | The flow rate |

### getFlowInfo

```solidity
function getFlowInfo(contract ISuperToken token, address sender, address receiver) internal view returns (uint256 lastUpdated, int96 flowRate, uint256 deposit, uint256 owedDeposit)
```

_get flow info between two accounts for given token_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| sender | address | The sender of the flow |
| receiver | address | The receiver of the flow |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| lastUpdated | uint256 | Timestamp of flow creation or last flowrate change |
| flowRate | int96 | The flow rate |
| deposit | uint256 | The amount of deposit the flow |
| owedDeposit | uint256 | The amount of owed deposit of the flow |

### getNetFlowRate

```solidity
function getNetFlowRate(contract ISuperToken token, address account) internal view returns (int96 flowRate)
```

_get net flow rate for given account for given token_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super token address |
| account | address | Account to query |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| flowRate | int96 | The net flow rate of the account |

### getNetFlowInfo

```solidity
function getNetFlowInfo(contract ISuperToken token, address account) internal view returns (uint256 lastUpdated, int96 flowRate, uint256 deposit, uint256 owedDeposit)
```

_get the aggregated flow info of the account_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super token address |
| account | address | Account to query |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| lastUpdated | uint256 | Timestamp of the last change of the net flow |
| flowRate | int96 | The net flow rate of token for account |
| deposit | uint256 | The sum of all deposits for account's flows |
| owedDeposit | uint256 | The sum of all owed deposits for account's flows |

### getBufferAmountByFlowRate

```solidity
function getBufferAmountByFlowRate(contract ISuperToken token, int96 flowRate) internal view returns (uint256 bufferAmount)
```

_calculate buffer for a flow rate_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| flowRate | int96 | The flowrate to calculate the needed buffer for |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| bufferAmount | uint256 | The buffer amount based on flowRate, liquidationPeriod and minimum deposit |

### getFlowPermissions

```solidity
function getFlowPermissions(contract ISuperToken token, address sender, address flowOperator) internal view returns (bool allowCreate, bool allowUpdate, bool allowDelete, int96 flowRateAllowance)
```

_get existing flow permissions_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | The token used in flow |
| sender | address | sender of a flow |
| flowOperator | address | the address we are checking permissions of for sender & token |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| allowCreate | bool | is true if the flowOperator can create flows |
| allowUpdate | bool | is true if the flowOperator can update flows |
| allowDelete | bool | is true if the flowOperator can delete flows |
| flowRateAllowance | int96 | The flow rate allowance the flowOperator is granted (only goes down) |

### getIndex

```solidity
function getIndex(contract ISuperToken token, address publisher, uint32 indexId) internal view returns (bool exist, uint128 indexValue, uint128 totalUnitsApproved, uint128 totalUnitsPending)
```

_Gets an index by its ID and publisher._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| exist | bool | True if the index exists. |
| indexValue | uint128 | Total value of the index. |
| totalUnitsApproved | uint128 | Units of the index approved by subscribers. |
| totalUnitsPending | uint128 | Units of teh index not yet approved by subscribers. |

### calculateDistribution

```solidity
function calculateDistribution(contract ISuperToken token, address publisher, uint32 indexId, uint256 amount) internal view returns (uint256 actualAmount, uint128 newIndexValue)
```

_Calculates the distribution amount based on the amount of tokens desired to distribute._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |
| amount | uint256 | Amount of tokens desired to distribute. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| actualAmount | uint256 | Amount to be distributed with correct rounding. |
| newIndexValue | uint128 | The index value after the distribution would be called. |

### listSubscriptions

```solidity
function listSubscriptions(contract ISuperToken token, address subscriber) internal view returns (address[] publishers, uint32[] indexIds, uint128[] unitsList)
```

_List all subscriptions of an address_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super token used in the indexes listed. |
| subscriber | address | Subscriber address. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| publishers | address[] | Publishers of the indices. |
| indexIds | uint32[] | IDs of the indices. |
| unitsList | uint128[] | Units owned of the indices. |

### getSubscription

```solidity
function getSubscription(contract ISuperToken token, address publisher, uint32 indexId, address subscriber) internal view returns (bool exist, bool approved, uint128 units, uint256 pendingDistribution)
```

_Gets subscription by publisher, index id, and subscriber._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |
| subscriber | address | Subscriber to the index. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| exist | bool | True if the subscription exists. |
| approved | bool | True if the subscription has been approved by the subscriber. |
| units | uint128 | Units held by the subscriber |
| pendingDistribution | uint256 | If not approved, the amount to be claimed on approval. |

### getSubscriptionByID

```solidity
function getSubscriptionByID(contract ISuperToken token, bytes32 agreementId) internal view returns (address publisher, uint32 indexId, bool approved, uint128 units, uint256 pendingDistribution)
```

### createIndex

```solidity
function createIndex(contract ISuperToken token, uint32 indexId) internal returns (bool)
```

_Creates a new index._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| indexId | uint32 | ID of the index. |

### createIndex

```solidity
function createIndex(contract ISuperToken token, uint32 indexId, bytes userData) internal returns (bool)
```

_Creates a new index with userData._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| indexId | uint32 | ID of the index. |
| userData | bytes | Arbitrary user data field. |

### updateIndexValue

```solidity
function updateIndexValue(contract ISuperToken token, uint32 indexId, uint128 indexValue) internal returns (bool)
```

_Updates an index value. This distributes an amount of tokens equal to
`indexValue - lastIndexValue`. See `distribute` for another way to distribute._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| indexId | uint32 | ID of the index. |
| indexValue | uint128 | New TOTAL index value, this will equal the total amount distributed. |

### updateIndexValue

```solidity
function updateIndexValue(contract ISuperToken token, uint32 indexId, uint128 indexValue, bytes userData) internal returns (bool)
```

_Updates an index value with userData. This distributes an amount of tokens equal to
`indexValue - lastIndexValue`. See `distribute` for another way to distribute._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| indexId | uint32 | ID of the index. |
| indexValue | uint128 | New TOTAL index value, this will equal the total amount distributed. |
| userData | bytes | Arbitrary user data field. |

### distribute

```solidity
function distribute(contract ISuperToken token, uint32 indexId, uint256 amount) internal returns (bool)
```

_Distributes tokens in a more developer friendly way than `updateIndex`. Instead of
passing the new total index value, you pass the amount of tokens desired to be distributed._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| indexId | uint32 | ID of the index. |
| amount | uint256 | - total number of tokens desired to be distributed NOTE in many cases, there can be some precision loss      This may cause a slight difference in the amount param specified and the actual amount distributed.      See below for math:      //indexDelta = amount the index will be updated by during an internal call to _updateIndex().      It is calculated like so:      indexDelta = amount / totalUnits      (see the distribute() implementatation in ./agreements/InstantDistributionAgreement.sol) NOTE Solidity does not support floating point numbers      So the indexDelta will be rounded down to the nearest integer.      This will create a 'remainder' amount of tokens that will not be distributed      (we'll call this the 'distribution modulo')      distributionModulo = amount - indexDelta * totalUnits NOTE due to rounding, there may be a small amount of tokens left in the publisher's account      This amount is equal to the 'distributionModulo' value      // |

### distribute

```solidity
function distribute(contract ISuperToken token, uint32 indexId, uint256 amount, bytes userData) internal returns (bool)
```

_Distributes tokens in a more developer friendly way than `updateIndex` (w user data). Instead of
passing the new total index value, this function will increase the index value by `amount`.
This takes arbitrary user data._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| indexId | uint32 | ID of the index. |
| amount | uint256 | Amount by which the index value should increase. |
| userData | bytes | Arbitrary user data field. |

### approveSubscription

```solidity
function approveSubscription(contract ISuperToken token, address publisher, uint32 indexId) internal returns (bool)
```

_Approves a subscription to an index. The subscriber's real time balance will not update
until the subscription is approved, but once approved, the balance will be updated with
prior distributions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |

### approveSubscription

```solidity
function approveSubscription(contract ISuperToken token, address publisher, uint32 indexId, bytes userData) internal returns (bool)
```

_Approves a subscription to an index with user data. The subscriber's real time balance will not update
until the subscription is approved, but once approved, the balance will be updated with
prior distributions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |
| userData | bytes | Arbitrary user data field. |

### revokeSubscription

```solidity
function revokeSubscription(contract ISuperToken token, address publisher, uint32 indexId) internal returns (bool)
```

_Revokes a previously approved subscription._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |

### revokeSubscription

```solidity
function revokeSubscription(contract ISuperToken token, address publisher, uint32 indexId, bytes userData) internal returns (bool)
```

_Revokes a previously approved subscription. This takes arbitrary user data._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |
| userData | bytes | Arbitrary user data field. |

### updateSubscriptionUnits

```solidity
function updateSubscriptionUnits(contract ISuperToken token, uint32 indexId, address subscriber, uint128 units) internal returns (bool)
```

_Updates the units of a subscription. This changes the number of shares the subscriber holds_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| indexId | uint32 | ID of the index. |
| subscriber | address | Subscriber address whose units are to be updated. |
| units | uint128 | New number of units the subscriber holds. |

### updateSubscriptionUnits

```solidity
function updateSubscriptionUnits(contract ISuperToken token, uint32 indexId, address subscriber, uint128 units, bytes userData) internal returns (bool)
```

_Updates the units of a subscription. This changes the number of shares the subscriber
holds. This takes arbitrary user data._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| indexId | uint32 | ID of the index. |
| subscriber | address | Subscriber address whose units are to be updated. |
| units | uint128 | New number of units the subscriber holds. |
| userData | bytes | Arbitrary user data field. |

### deleteSubscription

```solidity
function deleteSubscription(contract ISuperToken token, address publisher, uint32 indexId, address subscriber) internal returns (bool)
```

_Deletes a subscription, setting a subcriber's units to zero_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |
| subscriber | address | Subscriber address whose units are to be deleted. |

### deleteSubscription

```solidity
function deleteSubscription(contract ISuperToken token, address publisher, uint32 indexId, address subscriber, bytes userData) internal returns (bool)
```

_Deletes a subscription, setting a subcriber's units to zero. This takes arbitrary userdata._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |
| subscriber | address | Subscriber address whose units are to be deleted. |
| userData | bytes | Arbitrary user data field. |

### claim

```solidity
function claim(contract ISuperToken token, address publisher, uint32 indexId, address subscriber) internal returns (bool)
```

_Claims pending distribution. Subscription should not be approved_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |
| subscriber | address | Subscriber address that receives the claim. |

### claim

```solidity
function claim(contract ISuperToken token, address publisher, uint32 indexId, address subscriber, bytes userData) internal returns (bool)
```

_Claims pending distribution. Subscription should not be approved. This takes arbitrary user data._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |
| subscriber | address | Subscriber address that receives the claim. |
| userData | bytes | Arbitrary user data field. |

### createIndexWithCtx

```solidity
function createIndexWithCtx(contract ISuperToken token, uint32 indexId, bytes ctx) internal returns (bytes newCtx)
```

_Creates a new index with ctx.
Meant for usage in super app callbacks_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| indexId | uint32 | ID of the index. |
| ctx | bytes | from super app callback |

### updateIndexValueWithCtx

```solidity
function updateIndexValueWithCtx(contract ISuperToken token, uint32 indexId, uint128 indexValue, bytes ctx) internal returns (bytes newCtx)
```

_Updates an index value with ctx. This distributes an amount of tokens equal to
`indexValue - lastIndexValue`. See `distribute` for another way to distribute.
Meant for usage in super app callbakcs_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| indexId | uint32 | ID of the index. |
| indexValue | uint128 | New TOTAL index value, this will equal the total amount distributed. |
| ctx | bytes | from super app callback |

### distributeWithCtx

```solidity
function distributeWithCtx(contract ISuperToken token, uint32 indexId, uint256 amount, bytes ctx) internal returns (bytes newCtx)
```

_Distributes tokens in a more developer friendly way than `updateIndex`.Instead of
passing the new total index value, this function will increase the index value by `amount`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| indexId | uint32 | ID of the index. |
| amount | uint256 | Amount by which the index value should increase. |
| ctx | bytes | from super app callback |

### approveSubscriptionWithCtx

```solidity
function approveSubscriptionWithCtx(contract ISuperToken token, address publisher, uint32 indexId, bytes ctx) internal returns (bytes newCtx)
```

_Approves a subscription to an index. The subscriber's real time balance will not update
until the subscription is approved, but once approved, the balance will be updated with
prior distributions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |
| ctx | bytes | from super app callback |

### revokeSubscriptionWithCtx

```solidity
function revokeSubscriptionWithCtx(contract ISuperToken token, address publisher, uint32 indexId, bytes ctx) internal returns (bytes newCtx)
```

_Revokes a previously approved subscription. Meant for usage in super apps_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |
| ctx | bytes | from super app callback |

### updateSubscriptionUnitsWithCtx

```solidity
function updateSubscriptionUnitsWithCtx(contract ISuperToken token, uint32 indexId, address subscriber, uint128 units, bytes ctx) internal returns (bytes newCtx)
```

_Updates the units of a subscription. This changes the number of shares the subscriber
holds. Meant for usage in super apps_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| indexId | uint32 | ID of the index. |
| subscriber | address | Subscriber address whose units are to be updated. |
| units | uint128 | New number of units the subscriber holds. |
| ctx | bytes | from super app callback |

### deleteSubscriptionWithCtx

```solidity
function deleteSubscriptionWithCtx(contract ISuperToken token, address publisher, uint32 indexId, address subscriber, bytes ctx) internal returns (bytes newCtx)
```

_Deletes a subscription, setting a subcriber's units to zero.
Meant for usage in super apps_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |
| subscriber | address | Subscriber address whose units are to be deleted. |
| ctx | bytes | from super app callback |

### claimWithCtx

```solidity
function claimWithCtx(contract ISuperToken token, address publisher, uint32 indexId, address subscriber, bytes ctx) internal returns (bytes newCtx)
```

_Claims pending distribution. Subscription should not be approved.
Meant for usage in super app callbacks_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract ISuperToken | Super Token used with the index. |
| publisher | address | Publisher of the index. |
| indexId | uint32 | ID of the index. |
| subscriber | address | Subscriber address that receives the claim. |
| ctx | bytes | from super app callback |

