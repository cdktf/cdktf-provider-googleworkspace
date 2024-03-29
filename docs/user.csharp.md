# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-googleworkspace.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-googleworkspace.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user googleworkspace_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.User.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new User(Construct Scope, string Id, UserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putAddresses">PutAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putCustomSchemas">PutCustomSchemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putEmails">PutEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putExternalIds">PutExternalIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putIms">PutIms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putKeywords">PutKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putLanguages">PutLanguages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putLocations">PutLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putName">PutName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putOrganizations">PutOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putPhones">PutPhones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putPosixAccounts">PutPosixAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putRelations">PutRelations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putSshPublicKeys">PutSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putWebsites">PutWebsites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetAddresses">ResetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetAliases">ResetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetArchived">ResetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetChangePasswordAtNextLogin">ResetChangePasswordAtNextLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetCustomSchemas">ResetCustomSchemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetEmails">ResetEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetExternalIds">ResetExternalIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetHashFunction">ResetHashFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetIms">ResetIms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetIncludeInGlobalAddressList">ResetIncludeInGlobalAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetIpAllowlist">ResetIpAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetIsAdmin">ResetIsAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetKeywords">ResetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetLanguages">ResetLanguages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetLocations">ResetLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetOrganizations">ResetOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetOrgUnitPath">ResetOrgUnitPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetPhones">ResetPhones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetPosixAccounts">ResetPosixAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetRecoveryEmail">ResetRecoveryEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetRecoveryPhone">ResetRecoveryPhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetRelations">ResetRelations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetSshPublicKeys">ResetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetSuspended">ResetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetWebsites">ResetWebsites</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.User.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.user.User.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-googleworkspace.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.user.User.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-googleworkspace.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.user.User.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-googleworkspace.user.User.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.user.User.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.user.User.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-googleworkspace.user.User.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-googleworkspace.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.User.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.User.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.User.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.User.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-googleworkspace.user.User.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-googleworkspace.user.User.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.user.User.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.user.User.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.User.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-googleworkspace.user.User.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.user.User.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-googleworkspace.user.User.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-googleworkspace.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.User.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-googleworkspace.user.User.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.user.User.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAddresses` <a name="PutAddresses" id="@cdktf/provider-googleworkspace.user.User.putAddresses"></a>

```csharp
private void PutAddresses(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putAddresses.parameter.value"></a>

- *Type:* object

---

##### `PutCustomSchemas` <a name="PutCustomSchemas" id="@cdktf/provider-googleworkspace.user.User.putCustomSchemas"></a>

```csharp
private void PutCustomSchemas(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putCustomSchemas.parameter.value"></a>

- *Type:* object

---

##### `PutEmails` <a name="PutEmails" id="@cdktf/provider-googleworkspace.user.User.putEmails"></a>

```csharp
private void PutEmails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putEmails.parameter.value"></a>

- *Type:* object

---

##### `PutExternalIds` <a name="PutExternalIds" id="@cdktf/provider-googleworkspace.user.User.putExternalIds"></a>

```csharp
private void PutExternalIds(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putExternalIds.parameter.value"></a>

- *Type:* object

---

##### `PutIms` <a name="PutIms" id="@cdktf/provider-googleworkspace.user.User.putIms"></a>

```csharp
private void PutIms(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putIms.parameter.value"></a>

- *Type:* object

---

##### `PutKeywords` <a name="PutKeywords" id="@cdktf/provider-googleworkspace.user.User.putKeywords"></a>

```csharp
private void PutKeywords(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putKeywords.parameter.value"></a>

- *Type:* object

---

##### `PutLanguages` <a name="PutLanguages" id="@cdktf/provider-googleworkspace.user.User.putLanguages"></a>

```csharp
private void PutLanguages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putLanguages.parameter.value"></a>

- *Type:* object

---

##### `PutLocations` <a name="PutLocations" id="@cdktf/provider-googleworkspace.user.User.putLocations"></a>

```csharp
private void PutLocations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putLocations.parameter.value"></a>

- *Type:* object

---

##### `PutName` <a name="PutName" id="@cdktf/provider-googleworkspace.user.User.putName"></a>

```csharp
private void PutName(UserName Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

---

##### `PutOrganizations` <a name="PutOrganizations" id="@cdktf/provider-googleworkspace.user.User.putOrganizations"></a>

```csharp
private void PutOrganizations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putOrganizations.parameter.value"></a>

- *Type:* object

---

##### `PutPhones` <a name="PutPhones" id="@cdktf/provider-googleworkspace.user.User.putPhones"></a>

```csharp
private void PutPhones(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putPhones.parameter.value"></a>

- *Type:* object

---

##### `PutPosixAccounts` <a name="PutPosixAccounts" id="@cdktf/provider-googleworkspace.user.User.putPosixAccounts"></a>

```csharp
private void PutPosixAccounts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putPosixAccounts.parameter.value"></a>

- *Type:* object

---

##### `PutRelations` <a name="PutRelations" id="@cdktf/provider-googleworkspace.user.User.putRelations"></a>

```csharp
private void PutRelations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putRelations.parameter.value"></a>

- *Type:* object

---

##### `PutSshPublicKeys` <a name="PutSshPublicKeys" id="@cdktf/provider-googleworkspace.user.User.putSshPublicKeys"></a>

```csharp
private void PutSshPublicKeys(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putSshPublicKeys.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-googleworkspace.user.User.putTimeouts"></a>

```csharp
private void PutTimeouts(UserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

---

##### `PutWebsites` <a name="PutWebsites" id="@cdktf/provider-googleworkspace.user.User.putWebsites"></a>

```csharp
private void PutWebsites(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.User.putWebsites.parameter.value"></a>

- *Type:* object

---

##### `ResetAddresses` <a name="ResetAddresses" id="@cdktf/provider-googleworkspace.user.User.resetAddresses"></a>

```csharp
private void ResetAddresses()
```

##### `ResetAliases` <a name="ResetAliases" id="@cdktf/provider-googleworkspace.user.User.resetAliases"></a>

```csharp
private void ResetAliases()
```

##### `ResetArchived` <a name="ResetArchived" id="@cdktf/provider-googleworkspace.user.User.resetArchived"></a>

```csharp
private void ResetArchived()
```

##### `ResetChangePasswordAtNextLogin` <a name="ResetChangePasswordAtNextLogin" id="@cdktf/provider-googleworkspace.user.User.resetChangePasswordAtNextLogin"></a>

```csharp
private void ResetChangePasswordAtNextLogin()
```

##### `ResetCustomSchemas` <a name="ResetCustomSchemas" id="@cdktf/provider-googleworkspace.user.User.resetCustomSchemas"></a>

```csharp
private void ResetCustomSchemas()
```

##### `ResetEmails` <a name="ResetEmails" id="@cdktf/provider-googleworkspace.user.User.resetEmails"></a>

```csharp
private void ResetEmails()
```

##### `ResetExternalIds` <a name="ResetExternalIds" id="@cdktf/provider-googleworkspace.user.User.resetExternalIds"></a>

```csharp
private void ResetExternalIds()
```

##### `ResetHashFunction` <a name="ResetHashFunction" id="@cdktf/provider-googleworkspace.user.User.resetHashFunction"></a>

```csharp
private void ResetHashFunction()
```

##### `ResetIms` <a name="ResetIms" id="@cdktf/provider-googleworkspace.user.User.resetIms"></a>

```csharp
private void ResetIms()
```

##### `ResetIncludeInGlobalAddressList` <a name="ResetIncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.user.User.resetIncludeInGlobalAddressList"></a>

```csharp
private void ResetIncludeInGlobalAddressList()
```

##### `ResetIpAllowlist` <a name="ResetIpAllowlist" id="@cdktf/provider-googleworkspace.user.User.resetIpAllowlist"></a>

```csharp
private void ResetIpAllowlist()
```

##### `ResetIsAdmin` <a name="ResetIsAdmin" id="@cdktf/provider-googleworkspace.user.User.resetIsAdmin"></a>

```csharp
private void ResetIsAdmin()
```

##### `ResetKeywords` <a name="ResetKeywords" id="@cdktf/provider-googleworkspace.user.User.resetKeywords"></a>

```csharp
private void ResetKeywords()
```

##### `ResetLanguages` <a name="ResetLanguages" id="@cdktf/provider-googleworkspace.user.User.resetLanguages"></a>

```csharp
private void ResetLanguages()
```

##### `ResetLocations` <a name="ResetLocations" id="@cdktf/provider-googleworkspace.user.User.resetLocations"></a>

```csharp
private void ResetLocations()
```

##### `ResetOrganizations` <a name="ResetOrganizations" id="@cdktf/provider-googleworkspace.user.User.resetOrganizations"></a>

```csharp
private void ResetOrganizations()
```

##### `ResetOrgUnitPath` <a name="ResetOrgUnitPath" id="@cdktf/provider-googleworkspace.user.User.resetOrgUnitPath"></a>

```csharp
private void ResetOrgUnitPath()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-googleworkspace.user.User.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPhones` <a name="ResetPhones" id="@cdktf/provider-googleworkspace.user.User.resetPhones"></a>

```csharp
private void ResetPhones()
```

##### `ResetPosixAccounts` <a name="ResetPosixAccounts" id="@cdktf/provider-googleworkspace.user.User.resetPosixAccounts"></a>

```csharp
private void ResetPosixAccounts()
```

##### `ResetRecoveryEmail` <a name="ResetRecoveryEmail" id="@cdktf/provider-googleworkspace.user.User.resetRecoveryEmail"></a>

```csharp
private void ResetRecoveryEmail()
```

##### `ResetRecoveryPhone` <a name="ResetRecoveryPhone" id="@cdktf/provider-googleworkspace.user.User.resetRecoveryPhone"></a>

```csharp
private void ResetRecoveryPhone()
```

##### `ResetRelations` <a name="ResetRelations" id="@cdktf/provider-googleworkspace.user.User.resetRelations"></a>

```csharp
private void ResetRelations()
```

##### `ResetSshPublicKeys` <a name="ResetSshPublicKeys" id="@cdktf/provider-googleworkspace.user.User.resetSshPublicKeys"></a>

```csharp
private void ResetSshPublicKeys()
```

##### `ResetSuspended` <a name="ResetSuspended" id="@cdktf/provider-googleworkspace.user.User.resetSuspended"></a>

```csharp
private void ResetSuspended()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-googleworkspace.user.User.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWebsites` <a name="ResetWebsites" id="@cdktf/provider-googleworkspace.user.User.resetWebsites"></a>

```csharp
private void ResetWebsites()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.user.User.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

User.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.user.User.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.user.User.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

User.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.user.User.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-googleworkspace.user.User.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

User.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.user.User.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

User.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the User to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.addresses">Addresses</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList">UserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.agreedToTerms">AgreedToTerms</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.customerId">CustomerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.customSchemas">CustomSchemas</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList">UserCustomSchemasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.deletionTime">DeletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.emails">Emails</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList">UserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.externalIds">ExternalIds</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList">UserExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.ims">Ims</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList">UserImsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isDelegatedAdmin">IsDelegatedAdmin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isEnforcedIn2StepVerification">IsEnforcedIn2StepVerification</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isEnrolledIn2StepVerification">IsEnrolledIn2StepVerification</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isMailboxSetup">IsMailboxSetup</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.keywords">Keywords</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList">UserKeywordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.languages">Languages</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList">UserLanguagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.lastLoginTime">LastLoginTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList">UserLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.name">Name</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference">UserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.nonEditableAliases">NonEditableAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.organizations">Organizations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList">UserOrganizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.phones">Phones</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList">UserPhonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.posixAccounts">PosixAccounts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList">UserPosixAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.relations">Relations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList">UserRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.sshPublicKeys">SshPublicKeys</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList">UserSshPublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.suspensionReason">SuspensionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoEtag">ThumbnailPhotoEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoUrl">ThumbnailPhotoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.websites">Websites</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList">UserWebsitesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.addressesInput">AddressesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.aliasesInput">AliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.archivedInput">ArchivedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLoginInput">ChangePasswordAtNextLoginInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.customSchemasInput">CustomSchemasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.emailsInput">EmailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.externalIdsInput">ExternalIdsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.hashFunctionInput">HashFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.imsInput">ImsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressListInput">IncludeInGlobalAddressListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.ipAllowlistInput">IpAllowlistInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isAdminInput">IsAdminInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.keywordsInput">KeywordsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.languagesInput">LanguagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.locationsInput">LocationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.nameInput">NameInput</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.organizationsInput">OrganizationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.orgUnitPathInput">OrgUnitPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.phonesInput">PhonesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.posixAccountsInput">PosixAccountsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.primaryEmailInput">PrimaryEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryEmailInput">RecoveryEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryPhoneInput">RecoveryPhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.relationsInput">RelationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.suspendedInput">SuspendedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.websitesInput">WebsitesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.aliases">Aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.archived">Archived</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLogin">ChangePasswordAtNextLogin</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.hashFunction">HashFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressList">IncludeInGlobalAddressList</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.ipAllowlist">IpAllowlist</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isAdmin">IsAdmin</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.orgUnitPath">OrgUnitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.primaryEmail">PrimaryEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryEmail">RecoveryEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryPhone">RecoveryPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.suspended">Suspended</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.user.User.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.user.User.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.User.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.user.User.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.user.User.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.user.User.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.user.User.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.user.User.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.user.User.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.user.User.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.user.User.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.user.User.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.user.User.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.user.User.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-googleworkspace.user.User.property.addresses"></a>

```csharp
public UserAddressesList Addresses { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserAddressesList">UserAddressesList</a>

---

##### `AgreedToTerms`<sup>Required</sup> <a name="AgreedToTerms" id="@cdktf/provider-googleworkspace.user.User.property.agreedToTerms"></a>

```csharp
public IResolvable AgreedToTerms { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-googleworkspace.user.User.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `CustomerId`<sup>Required</sup> <a name="CustomerId" id="@cdktf/provider-googleworkspace.user.User.property.customerId"></a>

```csharp
public string CustomerId { get; }
```

- *Type:* string

---

##### `CustomSchemas`<sup>Required</sup> <a name="CustomSchemas" id="@cdktf/provider-googleworkspace.user.User.property.customSchemas"></a>

```csharp
public UserCustomSchemasList CustomSchemas { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList">UserCustomSchemasList</a>

---

##### `DeletionTime`<sup>Required</sup> <a name="DeletionTime" id="@cdktf/provider-googleworkspace.user.User.property.deletionTime"></a>

```csharp
public string DeletionTime { get; }
```

- *Type:* string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-googleworkspace.user.User.property.emails"></a>

```csharp
public UserEmailsList Emails { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserEmailsList">UserEmailsList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-googleworkspace.user.User.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ExternalIds`<sup>Required</sup> <a name="ExternalIds" id="@cdktf/provider-googleworkspace.user.User.property.externalIds"></a>

```csharp
public UserExternalIdsList ExternalIds { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList">UserExternalIdsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.user.User.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ims`<sup>Required</sup> <a name="Ims" id="@cdktf/provider-googleworkspace.user.User.property.ims"></a>

```csharp
public UserImsList Ims { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserImsList">UserImsList</a>

---

##### `IsDelegatedAdmin`<sup>Required</sup> <a name="IsDelegatedAdmin" id="@cdktf/provider-googleworkspace.user.User.property.isDelegatedAdmin"></a>

```csharp
public IResolvable IsDelegatedAdmin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsEnforcedIn2StepVerification`<sup>Required</sup> <a name="IsEnforcedIn2StepVerification" id="@cdktf/provider-googleworkspace.user.User.property.isEnforcedIn2StepVerification"></a>

```csharp
public IResolvable IsEnforcedIn2StepVerification { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsEnrolledIn2StepVerification`<sup>Required</sup> <a name="IsEnrolledIn2StepVerification" id="@cdktf/provider-googleworkspace.user.User.property.isEnrolledIn2StepVerification"></a>

```csharp
public IResolvable IsEnrolledIn2StepVerification { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMailboxSetup`<sup>Required</sup> <a name="IsMailboxSetup" id="@cdktf/provider-googleworkspace.user.User.property.isMailboxSetup"></a>

```csharp
public IResolvable IsMailboxSetup { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktf/provider-googleworkspace.user.User.property.keywords"></a>

```csharp
public UserKeywordsList Keywords { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList">UserKeywordsList</a>

---

##### `Languages`<sup>Required</sup> <a name="Languages" id="@cdktf/provider-googleworkspace.user.User.property.languages"></a>

```csharp
public UserLanguagesList Languages { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList">UserLanguagesList</a>

---

##### `LastLoginTime`<sup>Required</sup> <a name="LastLoginTime" id="@cdktf/provider-googleworkspace.user.User.property.lastLoginTime"></a>

```csharp
public string LastLoginTime { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-googleworkspace.user.User.property.locations"></a>

```csharp
public UserLocationsList Locations { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserLocationsList">UserLocationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.user.User.property.name"></a>

```csharp
public UserNameOutputReference Name { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference">UserNameOutputReference</a>

---

##### `NonEditableAliases`<sup>Required</sup> <a name="NonEditableAliases" id="@cdktf/provider-googleworkspace.user.User.property.nonEditableAliases"></a>

```csharp
public string[] NonEditableAliases { get; }
```

- *Type:* string[]

---

##### `Organizations`<sup>Required</sup> <a name="Organizations" id="@cdktf/provider-googleworkspace.user.User.property.organizations"></a>

```csharp
public UserOrganizationsList Organizations { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList">UserOrganizationsList</a>

---

##### `Phones`<sup>Required</sup> <a name="Phones" id="@cdktf/provider-googleworkspace.user.User.property.phones"></a>

```csharp
public UserPhonesList Phones { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserPhonesList">UserPhonesList</a>

---

##### `PosixAccounts`<sup>Required</sup> <a name="PosixAccounts" id="@cdktf/provider-googleworkspace.user.User.property.posixAccounts"></a>

```csharp
public UserPosixAccountsList PosixAccounts { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList">UserPosixAccountsList</a>

---

##### `Relations`<sup>Required</sup> <a name="Relations" id="@cdktf/provider-googleworkspace.user.User.property.relations"></a>

```csharp
public UserRelationsList Relations { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserRelationsList">UserRelationsList</a>

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-googleworkspace.user.User.property.sshPublicKeys"></a>

```csharp
public UserSshPublicKeysList SshPublicKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList">UserSshPublicKeysList</a>

---

##### `SuspensionReason`<sup>Required</sup> <a name="SuspensionReason" id="@cdktf/provider-googleworkspace.user.User.property.suspensionReason"></a>

```csharp
public string SuspensionReason { get; }
```

- *Type:* string

---

##### `ThumbnailPhotoEtag`<sup>Required</sup> <a name="ThumbnailPhotoEtag" id="@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoEtag"></a>

```csharp
public string ThumbnailPhotoEtag { get; }
```

- *Type:* string

---

##### `ThumbnailPhotoUrl`<sup>Required</sup> <a name="ThumbnailPhotoUrl" id="@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoUrl"></a>

```csharp
public string ThumbnailPhotoUrl { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-googleworkspace.user.User.property.timeouts"></a>

```csharp
public UserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a>

---

##### `Websites`<sup>Required</sup> <a name="Websites" id="@cdktf/provider-googleworkspace.user.User.property.websites"></a>

```csharp
public UserWebsitesList Websites { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList">UserWebsitesList</a>

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="@cdktf/provider-googleworkspace.user.User.property.addressesInput"></a>

```csharp
public object AddressesInput { get; }
```

- *Type:* object

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktf/provider-googleworkspace.user.User.property.aliasesInput"></a>

```csharp
public string[] AliasesInput { get; }
```

- *Type:* string[]

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="@cdktf/provider-googleworkspace.user.User.property.archivedInput"></a>

```csharp
public object ArchivedInput { get; }
```

- *Type:* object

---

##### `ChangePasswordAtNextLoginInput`<sup>Optional</sup> <a name="ChangePasswordAtNextLoginInput" id="@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLoginInput"></a>

```csharp
public object ChangePasswordAtNextLoginInput { get; }
```

- *Type:* object

---

##### `CustomSchemasInput`<sup>Optional</sup> <a name="CustomSchemasInput" id="@cdktf/provider-googleworkspace.user.User.property.customSchemasInput"></a>

```csharp
public object CustomSchemasInput { get; }
```

- *Type:* object

---

##### `EmailsInput`<sup>Optional</sup> <a name="EmailsInput" id="@cdktf/provider-googleworkspace.user.User.property.emailsInput"></a>

```csharp
public object EmailsInput { get; }
```

- *Type:* object

---

##### `ExternalIdsInput`<sup>Optional</sup> <a name="ExternalIdsInput" id="@cdktf/provider-googleworkspace.user.User.property.externalIdsInput"></a>

```csharp
public object ExternalIdsInput { get; }
```

- *Type:* object

---

##### `HashFunctionInput`<sup>Optional</sup> <a name="HashFunctionInput" id="@cdktf/provider-googleworkspace.user.User.property.hashFunctionInput"></a>

```csharp
public string HashFunctionInput { get; }
```

- *Type:* string

---

##### `ImsInput`<sup>Optional</sup> <a name="ImsInput" id="@cdktf/provider-googleworkspace.user.User.property.imsInput"></a>

```csharp
public object ImsInput { get; }
```

- *Type:* object

---

##### `IncludeInGlobalAddressListInput`<sup>Optional</sup> <a name="IncludeInGlobalAddressListInput" id="@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressListInput"></a>

```csharp
public object IncludeInGlobalAddressListInput { get; }
```

- *Type:* object

---

##### `IpAllowlistInput`<sup>Optional</sup> <a name="IpAllowlistInput" id="@cdktf/provider-googleworkspace.user.User.property.ipAllowlistInput"></a>

```csharp
public object IpAllowlistInput { get; }
```

- *Type:* object

---

##### `IsAdminInput`<sup>Optional</sup> <a name="IsAdminInput" id="@cdktf/provider-googleworkspace.user.User.property.isAdminInput"></a>

```csharp
public object IsAdminInput { get; }
```

- *Type:* object

---

##### `KeywordsInput`<sup>Optional</sup> <a name="KeywordsInput" id="@cdktf/provider-googleworkspace.user.User.property.keywordsInput"></a>

```csharp
public object KeywordsInput { get; }
```

- *Type:* object

---

##### `LanguagesInput`<sup>Optional</sup> <a name="LanguagesInput" id="@cdktf/provider-googleworkspace.user.User.property.languagesInput"></a>

```csharp
public object LanguagesInput { get; }
```

- *Type:* object

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-googleworkspace.user.User.property.locationsInput"></a>

```csharp
public object LocationsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-googleworkspace.user.User.property.nameInput"></a>

```csharp
public UserName NameInput { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

---

##### `OrganizationsInput`<sup>Optional</sup> <a name="OrganizationsInput" id="@cdktf/provider-googleworkspace.user.User.property.organizationsInput"></a>

```csharp
public object OrganizationsInput { get; }
```

- *Type:* object

---

##### `OrgUnitPathInput`<sup>Optional</sup> <a name="OrgUnitPathInput" id="@cdktf/provider-googleworkspace.user.User.property.orgUnitPathInput"></a>

```csharp
public string OrgUnitPathInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-googleworkspace.user.User.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PhonesInput`<sup>Optional</sup> <a name="PhonesInput" id="@cdktf/provider-googleworkspace.user.User.property.phonesInput"></a>

```csharp
public object PhonesInput { get; }
```

- *Type:* object

---

##### `PosixAccountsInput`<sup>Optional</sup> <a name="PosixAccountsInput" id="@cdktf/provider-googleworkspace.user.User.property.posixAccountsInput"></a>

```csharp
public object PosixAccountsInput { get; }
```

- *Type:* object

---

##### `PrimaryEmailInput`<sup>Optional</sup> <a name="PrimaryEmailInput" id="@cdktf/provider-googleworkspace.user.User.property.primaryEmailInput"></a>

```csharp
public string PrimaryEmailInput { get; }
```

- *Type:* string

---

##### `RecoveryEmailInput`<sup>Optional</sup> <a name="RecoveryEmailInput" id="@cdktf/provider-googleworkspace.user.User.property.recoveryEmailInput"></a>

```csharp
public string RecoveryEmailInput { get; }
```

- *Type:* string

---

##### `RecoveryPhoneInput`<sup>Optional</sup> <a name="RecoveryPhoneInput" id="@cdktf/provider-googleworkspace.user.User.property.recoveryPhoneInput"></a>

```csharp
public string RecoveryPhoneInput { get; }
```

- *Type:* string

---

##### `RelationsInput`<sup>Optional</sup> <a name="RelationsInput" id="@cdktf/provider-googleworkspace.user.User.property.relationsInput"></a>

```csharp
public object RelationsInput { get; }
```

- *Type:* object

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktf/provider-googleworkspace.user.User.property.sshPublicKeysInput"></a>

```csharp
public object SshPublicKeysInput { get; }
```

- *Type:* object

---

##### `SuspendedInput`<sup>Optional</sup> <a name="SuspendedInput" id="@cdktf/provider-googleworkspace.user.User.property.suspendedInput"></a>

```csharp
public object SuspendedInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-googleworkspace.user.User.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WebsitesInput`<sup>Optional</sup> <a name="WebsitesInput" id="@cdktf/provider-googleworkspace.user.User.property.websitesInput"></a>

```csharp
public object WebsitesInput { get; }
```

- *Type:* object

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-googleworkspace.user.User.property.aliases"></a>

```csharp
public string[] Aliases { get; }
```

- *Type:* string[]

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-googleworkspace.user.User.property.archived"></a>

```csharp
public object Archived { get; }
```

- *Type:* object

---

##### `ChangePasswordAtNextLogin`<sup>Required</sup> <a name="ChangePasswordAtNextLogin" id="@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLogin"></a>

```csharp
public object ChangePasswordAtNextLogin { get; }
```

- *Type:* object

---

##### `HashFunction`<sup>Required</sup> <a name="HashFunction" id="@cdktf/provider-googleworkspace.user.User.property.hashFunction"></a>

```csharp
public string HashFunction { get; }
```

- *Type:* string

---

##### `IncludeInGlobalAddressList`<sup>Required</sup> <a name="IncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressList"></a>

```csharp
public object IncludeInGlobalAddressList { get; }
```

- *Type:* object

---

##### `IpAllowlist`<sup>Required</sup> <a name="IpAllowlist" id="@cdktf/provider-googleworkspace.user.User.property.ipAllowlist"></a>

```csharp
public object IpAllowlist { get; }
```

- *Type:* object

---

##### `IsAdmin`<sup>Required</sup> <a name="IsAdmin" id="@cdktf/provider-googleworkspace.user.User.property.isAdmin"></a>

```csharp
public object IsAdmin { get; }
```

- *Type:* object

---

##### `OrgUnitPath`<sup>Required</sup> <a name="OrgUnitPath" id="@cdktf/provider-googleworkspace.user.User.property.orgUnitPath"></a>

```csharp
public string OrgUnitPath { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-googleworkspace.user.User.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PrimaryEmail`<sup>Required</sup> <a name="PrimaryEmail" id="@cdktf/provider-googleworkspace.user.User.property.primaryEmail"></a>

```csharp
public string PrimaryEmail { get; }
```

- *Type:* string

---

##### `RecoveryEmail`<sup>Required</sup> <a name="RecoveryEmail" id="@cdktf/provider-googleworkspace.user.User.property.recoveryEmail"></a>

```csharp
public string RecoveryEmail { get; }
```

- *Type:* string

---

##### `RecoveryPhone`<sup>Required</sup> <a name="RecoveryPhone" id="@cdktf/provider-googleworkspace.user.User.property.recoveryPhone"></a>

```csharp
public string RecoveryPhone { get; }
```

- *Type:* string

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-googleworkspace.user.User.property.suspended"></a>

```csharp
public object Suspended { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.user.User.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserAddresses <a name="UserAddresses" id="@cdktf/provider-googleworkspace.user.UserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserAddresses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserAddresses {
    string Type,
    string Country = null,
    string CountryCode = null,
    string CustomType = null,
    string ExtendedAddress = null,
    string Formatted = null,
    string Locality = null,
    string PoBox = null,
    string PostalCode = null,
    object Primary = null,
    string Region = null,
    object SourceIsStructured = null,
    string StreetAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.type">Type</a></code> | <code>string</code> | The address type. Acceptable values: `custom`, `home`, `other`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.country">Country</a></code> | <code>string</code> | Country. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.countryCode">CountryCode</a></code> | <code>string</code> | The country code. Uses the ISO 3166-1 standard. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.customType">CustomType</a></code> | <code>string</code> | If the address type is custom, this property contains the custom value. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.extendedAddress">ExtendedAddress</a></code> | <code>string</code> | For extended addresses, such as an address that includes a sub-region. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.formatted">Formatted</a></code> | <code>string</code> | A full and unstructured postal address. This is not synced with the structured address fields. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.locality">Locality</a></code> | <code>string</code> | The town or city of the address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.poBox">PoBox</a></code> | <code>string</code> | The post office box, if present. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.postalCode">PostalCode</a></code> | <code>string</code> | The ZIP or postal code, if applicable. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.primary">Primary</a></code> | <code>object</code> | If this is the user's primary address. The addresses list may contain only one primary address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.region">Region</a></code> | <code>string</code> | The abbreviated province or state. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.sourceIsStructured">SourceIsStructured</a></code> | <code>object</code> | Indicates if the user-supplied address was formatted. Formatted addresses are not currently supported. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.streetAddress">StreetAddress</a></code> | <code>string</code> | The street address, such as 1600 Amphitheatre Parkway. Whitespace within the string is ignored; however, newlines are significant. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The address type. Acceptable values: `custom`, `home`, `other`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#country User#country}

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

The country code. Uses the ISO 3166-1 standard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#country_code User#country_code}

---

##### `CustomType`<sup>Optional</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.customType"></a>

```csharp
public string CustomType { get; set; }
```

- *Type:* string

If the address type is custom, this property contains the custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `ExtendedAddress`<sup>Optional</sup> <a name="ExtendedAddress" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.extendedAddress"></a>

```csharp
public string ExtendedAddress { get; set; }
```

- *Type:* string

For extended addresses, such as an address that includes a sub-region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#extended_address User#extended_address}

---

##### `Formatted`<sup>Optional</sup> <a name="Formatted" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.formatted"></a>

```csharp
public string Formatted { get; set; }
```

- *Type:* string

A full and unstructured postal address. This is not synced with the structured address fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#formatted User#formatted}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.locality"></a>

```csharp
public string Locality { get; set; }
```

- *Type:* string

The town or city of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#locality User#locality}

---

##### `PoBox`<sup>Optional</sup> <a name="PoBox" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.poBox"></a>

```csharp
public string PoBox { get; set; }
```

- *Type:* string

The post office box, if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#po_box User#po_box}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

The ZIP or postal code, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#postal_code User#postal_code}

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

If this is the user's primary address. The addresses list may contain only one primary address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The abbreviated province or state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#region User#region}

---

##### `SourceIsStructured`<sup>Optional</sup> <a name="SourceIsStructured" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.sourceIsStructured"></a>

```csharp
public object SourceIsStructured { get; set; }
```

- *Type:* object

Indicates if the user-supplied address was formatted. Formatted addresses are not currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#source_is_structured User#source_is_structured}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.streetAddress"></a>

```csharp
public string StreetAddress { get; set; }
```

- *Type:* string

The street address, such as 1600 Amphitheatre Parkway. Whitespace within the string is ignored; however, newlines are significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#street_address User#street_address}

---

### UserConfig <a name="UserConfig" id="@cdktf/provider-googleworkspace.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    UserName Name,
    string PrimaryEmail,
    object Addresses = null,
    string[] Aliases = null,
    object Archived = null,
    object ChangePasswordAtNextLogin = null,
    object CustomSchemas = null,
    object Emails = null,
    object ExternalIds = null,
    string HashFunction = null,
    object Ims = null,
    object IncludeInGlobalAddressList = null,
    object IpAllowlist = null,
    object IsAdmin = null,
    object Keywords = null,
    object Languages = null,
    object Locations = null,
    object Organizations = null,
    string OrgUnitPath = null,
    string Password = null,
    object Phones = null,
    object PosixAccounts = null,
    string RecoveryEmail = null,
    string RecoveryPhone = null,
    object Relations = null,
    object SshPublicKeys = null,
    object Suspended = null,
    UserTimeouts Timeouts = null,
    object Websites = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.name">Name</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | name block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.primaryEmail">PrimaryEmail</a></code> | <code>string</code> | The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.addresses">Addresses</a></code> | <code>object</code> | addresses block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.aliases">Aliases</a></code> | <code>string[]</code> | asps.list of the user's alias email addresses. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.archived">Archived</a></code> | <code>object</code> | Indicates if user is archived. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.changePasswordAtNextLogin">ChangePasswordAtNextLogin</a></code> | <code>object</code> | Indicates if the user is forced to change their password at next login. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.customSchemas">CustomSchemas</a></code> | <code>object</code> | custom_schemas block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.emails">Emails</a></code> | <code>object</code> | emails block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.externalIds">ExternalIds</a></code> | <code>object</code> | external_ids block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.hashFunction">HashFunction</a></code> | <code>string</code> | Stores the hash format of the password property. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.ims">Ims</a></code> | <code>object</code> | ims block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.includeInGlobalAddressList">IncludeInGlobalAddressList</a></code> | <code>object</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.ipAllowlist">IpAllowlist</a></code> | <code>object</code> | If true, the user's IP address is added to the allow list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.isAdmin">IsAdmin</a></code> | <code>object</code> | Indicates a user with super admininistrator privileges. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.keywords">Keywords</a></code> | <code>object</code> | keywords block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.languages">Languages</a></code> | <code>object</code> | languages block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.locations">Locations</a></code> | <code>object</code> | locations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.organizations">Organizations</a></code> | <code>object</code> | organizations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.orgUnitPath">OrgUnitPath</a></code> | <code>string</code> | The full path of the parent organization associated with the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.password">Password</a></code> | <code>string</code> | Stores the password for the user account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.phones">Phones</a></code> | <code>object</code> | phones block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.posixAccounts">PosixAccounts</a></code> | <code>object</code> | posix_accounts block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryEmail">RecoveryEmail</a></code> | <code>string</code> | Recovery email of the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryPhone">RecoveryPhone</a></code> | <code>string</code> | Recovery phone of the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.relations">Relations</a></code> | <code>object</code> | relations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.sshPublicKeys">SshPublicKeys</a></code> | <code>object</code> | ssh_public_keys block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.suspended">Suspended</a></code> | <code>object</code> | Indicates if user is suspended. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.websites">Websites</a></code> | <code>object</code> | websites block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.user.UserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.user.UserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.user.UserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.user.UserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.user.UserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.user.UserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.user.UserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.user.UserConfig.property.name"></a>

```csharp
public UserName Name { get; set; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#name User#name}

---

##### `PrimaryEmail`<sup>Required</sup> <a name="PrimaryEmail" id="@cdktf/provider-googleworkspace.user.UserConfig.property.primaryEmail"></a>

```csharp
public string PrimaryEmail { get; set; }
```

- *Type:* string

The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary_email User#primary_email}

---

##### `Addresses`<sup>Optional</sup> <a name="Addresses" id="@cdktf/provider-googleworkspace.user.UserConfig.property.addresses"></a>

```csharp
public object Addresses { get; set; }
```

- *Type:* object

addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#addresses User#addresses}

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktf/provider-googleworkspace.user.UserConfig.property.aliases"></a>

```csharp
public string[] Aliases { get; set; }
```

- *Type:* string[]

asps.list of the user's alias email addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#aliases User#aliases}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="@cdktf/provider-googleworkspace.user.UserConfig.property.archived"></a>

```csharp
public object Archived { get; set; }
```

- *Type:* object

Indicates if user is archived.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#archived User#archived}

---

##### `ChangePasswordAtNextLogin`<sup>Optional</sup> <a name="ChangePasswordAtNextLogin" id="@cdktf/provider-googleworkspace.user.UserConfig.property.changePasswordAtNextLogin"></a>

```csharp
public object ChangePasswordAtNextLogin { get; set; }
```

- *Type:* object

Indicates if the user is forced to change their password at next login.

This setting doesn't apply when the user signs in via a third-party identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#change_password_at_next_login User#change_password_at_next_login}

---

##### `CustomSchemas`<sup>Optional</sup> <a name="CustomSchemas" id="@cdktf/provider-googleworkspace.user.UserConfig.property.customSchemas"></a>

```csharp
public object CustomSchemas { get; set; }
```

- *Type:* object

custom_schemas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_schemas User#custom_schemas}

---

##### `Emails`<sup>Optional</sup> <a name="Emails" id="@cdktf/provider-googleworkspace.user.UserConfig.property.emails"></a>

```csharp
public object Emails { get; set; }
```

- *Type:* object

emails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#emails User#emails}

---

##### `ExternalIds`<sup>Optional</sup> <a name="ExternalIds" id="@cdktf/provider-googleworkspace.user.UserConfig.property.externalIds"></a>

```csharp
public object ExternalIds { get; set; }
```

- *Type:* object

external_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#external_ids User#external_ids}

---

##### `HashFunction`<sup>Optional</sup> <a name="HashFunction" id="@cdktf/provider-googleworkspace.user.UserConfig.property.hashFunction"></a>

```csharp
public string HashFunction { get; set; }
```

- *Type:* string

Stores the hash format of the password property.

We recommend sending the password property value as a base 16 bit hexadecimal-encoded hash value. Set the hashFunction values as either the SHA-1, MD5, or crypt hash format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#hash_function User#hash_function}

---

##### `Ims`<sup>Optional</sup> <a name="Ims" id="@cdktf/provider-googleworkspace.user.UserConfig.property.ims"></a>

```csharp
public object Ims { get; set; }
```

- *Type:* object

ims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ims User#ims}

---

##### `IncludeInGlobalAddressList`<sup>Optional</sup> <a name="IncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.user.UserConfig.property.includeInGlobalAddressList"></a>

```csharp
public object IncludeInGlobalAddressList { get; set; }
```

- *Type:* object

Defaults to `true`.

Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#include_in_global_address_list User#include_in_global_address_list}

---

##### `IpAllowlist`<sup>Optional</sup> <a name="IpAllowlist" id="@cdktf/provider-googleworkspace.user.UserConfig.property.ipAllowlist"></a>

```csharp
public object IpAllowlist { get; set; }
```

- *Type:* object

If true, the user's IP address is added to the allow list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ip_allowlist User#ip_allowlist}

---

##### `IsAdmin`<sup>Optional</sup> <a name="IsAdmin" id="@cdktf/provider-googleworkspace.user.UserConfig.property.isAdmin"></a>

```csharp
public object IsAdmin { get; set; }
```

- *Type:* object

Indicates a user with super admininistrator privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#is_admin User#is_admin}

---

##### `Keywords`<sup>Optional</sup> <a name="Keywords" id="@cdktf/provider-googleworkspace.user.UserConfig.property.keywords"></a>

```csharp
public object Keywords { get; set; }
```

- *Type:* object

keywords block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#keywords User#keywords}

---

##### `Languages`<sup>Optional</sup> <a name="Languages" id="@cdktf/provider-googleworkspace.user.UserConfig.property.languages"></a>

```csharp
public object Languages { get; set; }
```

- *Type:* object

languages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#languages User#languages}

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktf/provider-googleworkspace.user.UserConfig.property.locations"></a>

```csharp
public object Locations { get; set; }
```

- *Type:* object

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#locations User#locations}

---

##### `Organizations`<sup>Optional</sup> <a name="Organizations" id="@cdktf/provider-googleworkspace.user.UserConfig.property.organizations"></a>

```csharp
public object Organizations { get; set; }
```

- *Type:* object

organizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#organizations User#organizations}

---

##### `OrgUnitPath`<sup>Optional</sup> <a name="OrgUnitPath" id="@cdktf/provider-googleworkspace.user.UserConfig.property.orgUnitPath"></a>

```csharp
public string OrgUnitPath { get; set; }
```

- *Type:* string

The full path of the parent organization associated with the user.

If the parent organization is the top-level, it is represented as a forward slash (/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#org_unit_path User#org_unit_path}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-googleworkspace.user.UserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Stores the password for the user account.

A password can contain any combination of ASCII characters. A minimum of 8 characters is required. The maximum length is 100 characters. As the API does not return the value of password, this field is write-only, and the value stored in the state will be what is provided in the configuration. The field is required on create and will be empty on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#password User#password}

---

##### `Phones`<sup>Optional</sup> <a name="Phones" id="@cdktf/provider-googleworkspace.user.UserConfig.property.phones"></a>

```csharp
public object Phones { get; set; }
```

- *Type:* object

phones block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#phones User#phones}

---

##### `PosixAccounts`<sup>Optional</sup> <a name="PosixAccounts" id="@cdktf/provider-googleworkspace.user.UserConfig.property.posixAccounts"></a>

```csharp
public object PosixAccounts { get; set; }
```

- *Type:* object

posix_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#posix_accounts User#posix_accounts}

---

##### `RecoveryEmail`<sup>Optional</sup> <a name="RecoveryEmail" id="@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryEmail"></a>

```csharp
public string RecoveryEmail { get; set; }
```

- *Type:* string

Recovery email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#recovery_email User#recovery_email}

---

##### `RecoveryPhone`<sup>Optional</sup> <a name="RecoveryPhone" id="@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryPhone"></a>

```csharp
public string RecoveryPhone { get; set; }
```

- *Type:* string

Recovery phone of the user.

The phone number must be in the E.164 format, starting with the plus sign (+). Example: +16506661212.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#recovery_phone User#recovery_phone}

---

##### `Relations`<sup>Optional</sup> <a name="Relations" id="@cdktf/provider-googleworkspace.user.UserConfig.property.relations"></a>

```csharp
public object Relations { get; set; }
```

- *Type:* object

relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#relations User#relations}

---

##### `SshPublicKeys`<sup>Optional</sup> <a name="SshPublicKeys" id="@cdktf/provider-googleworkspace.user.UserConfig.property.sshPublicKeys"></a>

```csharp
public object SshPublicKeys { get; set; }
```

- *Type:* object

ssh_public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ssh_public_keys User#ssh_public_keys}

---

##### `Suspended`<sup>Optional</sup> <a name="Suspended" id="@cdktf/provider-googleworkspace.user.UserConfig.property.suspended"></a>

```csharp
public object Suspended { get; set; }
```

- *Type:* object

Indicates if user is suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#suspended User#suspended}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-googleworkspace.user.UserConfig.property.timeouts"></a>

```csharp
public UserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#timeouts User#timeouts}

---

##### `Websites`<sup>Optional</sup> <a name="Websites" id="@cdktf/provider-googleworkspace.user.UserConfig.property.websites"></a>

```csharp
public object Websites { get; set; }
```

- *Type:* object

websites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#websites User#websites}

---

### UserCustomSchemas <a name="UserCustomSchemas" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserCustomSchemas {
    string SchemaName,
    System.Collections.Generic.IDictionary<string, string> SchemaValues
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaName">SchemaName</a></code> | <code>string</code> | The name of the schema. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaValues">SchemaValues</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | JSON encoded map that represents key/value pairs that correspond to the given schema. |

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#schema_name User#schema_name}

---

##### `SchemaValues`<sup>Required</sup> <a name="SchemaValues" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SchemaValues { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

JSON encoded map that represents key/value pairs that correspond to the given schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#schema_values User#schema_values}

---

### UserEmails <a name="UserEmails" id="@cdktf/provider-googleworkspace.user.UserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserEmails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserEmails {
    string Type,
    string Address = null,
    string CustomType = null,
    object Primary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.type">Type</a></code> | <code>string</code> | The type of the email account. Acceptable values: `custom`, `home`, `other`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.address">Address</a></code> | <code>string</code> | The user's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.customType">CustomType</a></code> | <code>string</code> | If the value of type is custom, this property contains the custom type string. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.primary">Primary</a></code> | <code>object</code> | Defaults to `false`. Indicates if this is the user's primary email. Only one entry can be marked as primary. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserEmails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the email account. Acceptable values: `custom`, `home`, `other`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-googleworkspace.user.UserEmails.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The user's email address.

Also serves as the email ID. This value can be the user's primary email address or an alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#address User#address}

---

##### `CustomType`<sup>Optional</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserEmails.property.customType"></a>

```csharp
public string CustomType { get; set; }
```

- *Type:* string

If the value of type is custom, this property contains the custom type string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserEmails.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

Defaults to `false`. Indicates if this is the user's primary email. Only one entry can be marked as primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

### UserExternalIds <a name="UserExternalIds" id="@cdktf/provider-googleworkspace.user.UserExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserExternalIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserExternalIds {
    string Type,
    string Value,
    string CustomType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIds.property.type">Type</a></code> | <code>string</code> | The type of external ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIds.property.value">Value</a></code> | <code>string</code> | The value of the ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIds.property.customType">CustomType</a></code> | <code>string</code> | If the external ID type is custom, this property contains the custom value and must be set. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserExternalIds.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of external ID.

If set to custom, customType must also be set. Acceptable values: `account`, `custom`, `customer`, `login_id`, `network`, `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.UserExternalIds.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `CustomType`<sup>Optional</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserExternalIds.property.customType"></a>

```csharp
public string CustomType { get; set; }
```

- *Type:* string

If the external ID type is custom, this property contains the custom value and must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

### UserIms <a name="UserIms" id="@cdktf/provider-googleworkspace.user.UserIms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserIms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserIms {
    string Protocol,
    string Type,
    string CustomProtocol = null,
    string CustomType = null,
    string Im = null,
    object Primary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.protocol">Protocol</a></code> | <code>string</code> | An IM protocol identifies the IM network. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.type">Type</a></code> | <code>string</code> | Acceptable values: `custom`, `home`, `other`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.customProtocol">CustomProtocol</a></code> | <code>string</code> | If the protocol value is custom_protocol, this property holds the custom protocol's string. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.customType">CustomType</a></code> | <code>string</code> | If the IM type is custom, this property holds the custom type string. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.im">Im</a></code> | <code>string</code> | The user's IM network ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.primary">Primary</a></code> | <code>object</code> | If this is the user's primary IM. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-googleworkspace.user.UserIms.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

An IM protocol identifies the IM network.

The value can be a custom network or the standard network. Acceptable values: `aim`, `custom_protocol`, `gtalk`, `icq`, `jabber`, `msn`, `net_meeting`, `qq`, `skype`, `yahoo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#protocol User#protocol}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserIms.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Acceptable values: `custom`, `home`, `other`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `CustomProtocol`<sup>Optional</sup> <a name="CustomProtocol" id="@cdktf/provider-googleworkspace.user.UserIms.property.customProtocol"></a>

```csharp
public string CustomProtocol { get; set; }
```

- *Type:* string

If the protocol value is custom_protocol, this property holds the custom protocol's string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_protocol User#custom_protocol}

---

##### `CustomType`<sup>Optional</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserIms.property.customType"></a>

```csharp
public string CustomType { get; set; }
```

- *Type:* string

If the IM type is custom, this property holds the custom type string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `Im`<sup>Optional</sup> <a name="Im" id="@cdktf/provider-googleworkspace.user.UserIms.property.im"></a>

```csharp
public string Im { get; set; }
```

- *Type:* string

The user's IM network ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#im User#im}

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserIms.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

If this is the user's primary IM.

Only one entry in the IM list can have a value of true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

### UserKeywords <a name="UserKeywords" id="@cdktf/provider-googleworkspace.user.UserKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserKeywords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserKeywords {
    string Type,
    string Value,
    string CustomType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywords.property.type">Type</a></code> | <code>string</code> | Each entry can have a type which indicates standard type of that entry. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywords.property.value">Value</a></code> | <code>string</code> | Keyword. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywords.property.customType">CustomType</a></code> | <code>string</code> | Custom Type. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserKeywords.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Each entry can have a type which indicates standard type of that entry.

For example, keyword could be of type occupation or outlook. In addition to the standard type, an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. Acceptable values: `custom`, `mission`, `occupation`, `outlook`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.UserKeywords.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Keyword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `CustomType`<sup>Optional</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserKeywords.property.customType"></a>

```csharp
public string CustomType { get; set; }
```

- *Type:* string

Custom Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

### UserLanguages <a name="UserLanguages" id="@cdktf/provider-googleworkspace.user.UserLanguages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserLanguages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserLanguages {
    string CustomLanguage = null,
    string LanguageCode = null,
    string Preference = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguages.property.customLanguage">CustomLanguage</a></code> | <code>string</code> | Other language. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguages.property.languageCode">LanguageCode</a></code> | <code>string</code> | Defaults to `en`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguages.property.preference">Preference</a></code> | <code>string</code> | Defaults to `preferred`. |

---

##### `CustomLanguage`<sup>Optional</sup> <a name="CustomLanguage" id="@cdktf/provider-googleworkspace.user.UserLanguages.property.customLanguage"></a>

```csharp
public string CustomLanguage { get; set; }
```

- *Type:* string

Other language.

A user can provide their own language name if there is no corresponding Google III language code. If this is set, LanguageCode can't be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_language User#custom_language}

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktf/provider-googleworkspace.user.UserLanguages.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

Defaults to `en`.

Language Code. Should be used for storing Google III LanguageCode string representation for language. Illegal values cause SchemaException.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#language_code User#language_code}

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="@cdktf/provider-googleworkspace.user.UserLanguages.property.preference"></a>

```csharp
public string Preference { get; set; }
```

- *Type:* string

Defaults to `preferred`.

If present, controls whether the specified languageCode is the user's preferred language. Allowed values are `preferred` and `not_preferred`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#preference User#preference}

---

### UserLocations <a name="UserLocations" id="@cdktf/provider-googleworkspace.user.UserLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserLocations {
    string Type,
    string Area = null,
    string BuildingId = null,
    string CustomType = null,
    string DeskCode = null,
    string FloorName = null,
    string FloorSection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.type">Type</a></code> | <code>string</code> | The location type. Acceptable values: `custom`, `default`, `desk`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.area">Area</a></code> | <code>string</code> | Textual location. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.buildingId">BuildingId</a></code> | <code>string</code> | Building identifier. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.customType">CustomType</a></code> | <code>string</code> | If the location type is custom, this property contains the custom value. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.deskCode">DeskCode</a></code> | <code>string</code> | Most specific textual code of individual desk location. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.floorName">FloorName</a></code> | <code>string</code> | Floor name/number. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.floorSection">FloorSection</a></code> | <code>string</code> | Floor section. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserLocations.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The location type. Acceptable values: `custom`, `default`, `desk`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `Area`<sup>Optional</sup> <a name="Area" id="@cdktf/provider-googleworkspace.user.UserLocations.property.area"></a>

```csharp
public string Area { get; set; }
```

- *Type:* string

Textual location.

This is most useful for display purposes to concisely describe the location. For example, Mountain View, CA or Near Seattle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#area User#area}

---

##### `BuildingId`<sup>Optional</sup> <a name="BuildingId" id="@cdktf/provider-googleworkspace.user.UserLocations.property.buildingId"></a>

```csharp
public string BuildingId { get; set; }
```

- *Type:* string

Building identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#building_id User#building_id}

---

##### `CustomType`<sup>Optional</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserLocations.property.customType"></a>

```csharp
public string CustomType { get; set; }
```

- *Type:* string

If the location type is custom, this property contains the custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `DeskCode`<sup>Optional</sup> <a name="DeskCode" id="@cdktf/provider-googleworkspace.user.UserLocations.property.deskCode"></a>

```csharp
public string DeskCode { get; set; }
```

- *Type:* string

Most specific textual code of individual desk location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#desk_code User#desk_code}

---

##### `FloorName`<sup>Optional</sup> <a name="FloorName" id="@cdktf/provider-googleworkspace.user.UserLocations.property.floorName"></a>

```csharp
public string FloorName { get; set; }
```

- *Type:* string

Floor name/number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#floor_name User#floor_name}

---

##### `FloorSection`<sup>Optional</sup> <a name="FloorSection" id="@cdktf/provider-googleworkspace.user.UserLocations.property.floorSection"></a>

```csharp
public string FloorSection { get; set; }
```

- *Type:* string

Floor section.

More specific location within the floor. For example, if a floor is divided into sections A, B, and C, this field would identify one of those values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#floor_section User#floor_section}

---

### UserName <a name="UserName" id="@cdktf/provider-googleworkspace.user.UserName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserName {
    string FamilyName,
    string GivenName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserName.property.familyName">FamilyName</a></code> | <code>string</code> | The user's last name. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserName.property.givenName">GivenName</a></code> | <code>string</code> | The user's first name. |

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktf/provider-googleworkspace.user.UserName.property.familyName"></a>

```csharp
public string FamilyName { get; set; }
```

- *Type:* string

The user's last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#family_name User#family_name}

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="@cdktf/provider-googleworkspace.user.UserName.property.givenName"></a>

```csharp
public string GivenName { get; set; }
```

- *Type:* string

The user's first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#given_name User#given_name}

---

### UserOrganizations <a name="UserOrganizations" id="@cdktf/provider-googleworkspace.user.UserOrganizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserOrganizations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserOrganizations {
    string Type,
    string CostCenter = null,
    string CustomType = null,
    string Department = null,
    string Description = null,
    string Domain = null,
    double FullTimeEquivalent = null,
    string Location = null,
    string Name = null,
    object Primary = null,
    string Symbol = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.type">Type</a></code> | <code>string</code> | The type of organization. Acceptable values: `domain_only`, `school`, `unknown`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.costCenter">CostCenter</a></code> | <code>string</code> | The cost center of the user's organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.customType">CustomType</a></code> | <code>string</code> | If the value of type is custom, this property contains the custom value. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.department">Department</a></code> | <code>string</code> | Specifies the department within the organization, such as sales or engineering. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.description">Description</a></code> | <code>string</code> | The description of the organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.domain">Domain</a></code> | <code>string</code> | The domain the organization belongs to. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.fullTimeEquivalent">FullTimeEquivalent</a></code> | <code>double</code> | The full-time equivalent millipercent within the organization (100000 = 100%). |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.location">Location</a></code> | <code>string</code> | The physical location of the organization. This does not need to be a fully qualified address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.name">Name</a></code> | <code>string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.primary">Primary</a></code> | <code>object</code> | Indicates if this is the user's primary organization. A user may only have one primary organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.symbol">Symbol</a></code> | <code>string</code> | Text string symbol of the organization. For example, the text symbol for Google is GOOG. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.title">Title</a></code> | <code>string</code> | The user's title within the organization. For example, member or engineer. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of organization. Acceptable values: `domain_only`, `school`, `unknown`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `CostCenter`<sup>Optional</sup> <a name="CostCenter" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.costCenter"></a>

```csharp
public string CostCenter { get; set; }
```

- *Type:* string

The cost center of the user's organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#cost_center User#cost_center}

---

##### `CustomType`<sup>Optional</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.customType"></a>

```csharp
public string CustomType { get; set; }
```

- *Type:* string

If the value of type is custom, this property contains the custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `Department`<sup>Optional</sup> <a name="Department" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.department"></a>

```csharp
public string Department { get; set; }
```

- *Type:* string

Specifies the department within the organization, such as sales or engineering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#department User#department}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#description User#description}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The domain the organization belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#domain User#domain}

---

##### `FullTimeEquivalent`<sup>Optional</sup> <a name="FullTimeEquivalent" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.fullTimeEquivalent"></a>

```csharp
public double FullTimeEquivalent { get; set; }
```

- *Type:* double

The full-time equivalent millipercent within the organization (100000 = 100%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#full_time_equivalent User#full_time_equivalent}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The physical location of the organization. This does not need to be a fully qualified address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#location User#location}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#name User#name}

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

Indicates if this is the user's primary organization. A user may only have one primary organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

##### `Symbol`<sup>Optional</sup> <a name="Symbol" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.symbol"></a>

```csharp
public string Symbol { get; set; }
```

- *Type:* string

Text string symbol of the organization. For example, the text symbol for Google is GOOG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#symbol User#symbol}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The user's title within the organization. For example, member or engineer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#title User#title}

---

### UserPhones <a name="UserPhones" id="@cdktf/provider-googleworkspace.user.UserPhones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserPhones.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserPhones {
    string Type,
    string Value,
    string CustomType = null,
    object Primary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.type">Type</a></code> | <code>string</code> | The type of phone number. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.value">Value</a></code> | <code>string</code> | A human-readable phone number. It may be in any telephone number format. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.customType">CustomType</a></code> | <code>string</code> | If the phone number type is custom, this property contains the custom value and must be set. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.primary">Primary</a></code> | <code>object</code> | Indicates if this is the user's primary phone number. A user may only have one primary phone number. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserPhones.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of phone number.

Acceptable values: `assistant`, `callback`, `car`, `company_main` , `custom`, `grand_central`, `home`, `home_fax`, `isdn`, `main`, `mobile`, `other`, `other_fax`, `pager`, `radio`, `telex`, `tty_tdd`, `work`, `work_fax`, `work_mobile`, `work_pager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.UserPhones.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A human-readable phone number. It may be in any telephone number format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `CustomType`<sup>Optional</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserPhones.property.customType"></a>

```csharp
public string CustomType { get; set; }
```

- *Type:* string

If the phone number type is custom, this property contains the custom value and must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserPhones.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

Indicates if this is the user's primary phone number. A user may only have one primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

### UserPosixAccounts <a name="UserPosixAccounts" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserPosixAccounts {
    string AccountId = null,
    string Gecos = null,
    string Gid = null,
    string HomeDirectory = null,
    string OperatingSystemType = null,
    object Primary = null,
    string Shell = null,
    string SystemId = null,
    string Uid = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.accountId">AccountId</a></code> | <code>string</code> | A POSIX account field identifier. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gecos">Gecos</a></code> | <code>string</code> | The GECOS (user information) for this account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gid">Gid</a></code> | <code>string</code> | The default group ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.homeDirectory">HomeDirectory</a></code> | <code>string</code> | The path to the home directory for this account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.operatingSystemType">OperatingSystemType</a></code> | <code>string</code> | The operating system type for this account. Acceptable values: `linux`, `unspecified`, `windows`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.primary">Primary</a></code> | <code>object</code> | If this is user's primary account within the SystemId. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.shell">Shell</a></code> | <code>string</code> | The path to the login shell for this account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.systemId">SystemId</a></code> | <code>string</code> | System identifier for which account Username or Uid apply to. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.uid">Uid</a></code> | <code>string</code> | The POSIX compliant user ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.username">Username</a></code> | <code>string</code> | The username of the account. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

A POSIX account field identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#account_id User#account_id}

---

##### `Gecos`<sup>Optional</sup> <a name="Gecos" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gecos"></a>

```csharp
public string Gecos { get; set; }
```

- *Type:* string

The GECOS (user information) for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#gecos User#gecos}

---

##### `Gid`<sup>Optional</sup> <a name="Gid" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gid"></a>

```csharp
public string Gid { get; set; }
```

- *Type:* string

The default group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#gid User#gid}

---

##### `HomeDirectory`<sup>Optional</sup> <a name="HomeDirectory" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.homeDirectory"></a>

```csharp
public string HomeDirectory { get; set; }
```

- *Type:* string

The path to the home directory for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#home_directory User#home_directory}

---

##### `OperatingSystemType`<sup>Optional</sup> <a name="OperatingSystemType" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.operatingSystemType"></a>

```csharp
public string OperatingSystemType { get; set; }
```

- *Type:* string

The operating system type for this account. Acceptable values: `linux`, `unspecified`, `windows`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#operating_system_type User#operating_system_type}

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

If this is user's primary account within the SystemId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

##### `Shell`<sup>Optional</sup> <a name="Shell" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.shell"></a>

```csharp
public string Shell { get; set; }
```

- *Type:* string

The path to the login shell for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#shell User#shell}

---

##### `SystemId`<sup>Optional</sup> <a name="SystemId" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.systemId"></a>

```csharp
public string SystemId { get; set; }
```

- *Type:* string

System identifier for which account Username or Uid apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#system_id User#system_id}

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.uid"></a>

```csharp
public string Uid { get; set; }
```

- *Type:* string

The POSIX compliant user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#uid User#uid}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#username User#username}

---

### UserRelations <a name="UserRelations" id="@cdktf/provider-googleworkspace.user.UserRelations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserRelations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserRelations {
    string Type,
    string Value,
    string CustomType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelations.property.type">Type</a></code> | <code>string</code> | The type of relation. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelations.property.value">Value</a></code> | <code>string</code> | The name of the person the user is related to. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelations.property.customType">CustomType</a></code> | <code>string</code> | If the value of type is custom, this property contains the custom type string. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserRelations.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of relation.

Acceptable values: `admin_assistant`, `assistant`, `brother`, `child`, `custom`, `domestic_partner`, `dotted_line_manager`, `exec_assistant`, `father`, `friend`, `manager`, `mother`, `parent`, `partner`, `referred_by`, `relative`, `sister`, `spouse`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.UserRelations.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The name of the person the user is related to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `CustomType`<sup>Optional</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserRelations.property.customType"></a>

```csharp
public string CustomType { get; set; }
```

- *Type:* string

If the value of type is custom, this property contains the custom type string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

### UserSshPublicKeys <a name="UserSshPublicKeys" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserSshPublicKeys {
    string Key,
    string ExpirationTimeUsec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.key">Key</a></code> | <code>string</code> | An SSH public key. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.expirationTimeUsec">ExpirationTimeUsec</a></code> | <code>string</code> | An expiration time in microseconds since epoch. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

An SSH public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#key User#key}

---

##### `ExpirationTimeUsec`<sup>Optional</sup> <a name="ExpirationTimeUsec" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.expirationTimeUsec"></a>

```csharp
public string ExpirationTimeUsec { get; set; }
```

- *Type:* string

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#expiration_time_usec User#expiration_time_usec}

---

### UserTimeouts <a name="UserTimeouts" id="@cdktf/provider-googleworkspace.user.UserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#create User#create}. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#update User#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-googleworkspace.user.UserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#create User#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-googleworkspace.user.UserTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#update User#update}.

---

### UserWebsites <a name="UserWebsites" id="@cdktf/provider-googleworkspace.user.UserWebsites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserWebsites.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserWebsites {
    string Type,
    string Value,
    string CustomType = null,
    object Primary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.type">Type</a></code> | <code>string</code> | The type or purpose of the website. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.value">Value</a></code> | <code>string</code> | The URL of the website. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.customType">CustomType</a></code> | <code>string</code> | The custom type. Only used if the type is custom. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.primary">Primary</a></code> | <code>object</code> | If this is user's primary website or not. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type or purpose of the website.

For example, a website could be labeled as home or blog. Alternatively, an entry can have a custom type Custom types must have a customType value. Acceptable values: `app_install_page`, `blog`, `custom`, `ftp` , `home`, `home_page`, `other`, `profile`, `reservations`, `resume`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The URL of the website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `CustomType`<sup>Optional</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.customType"></a>

```csharp
public string CustomType { get; set; }
```

- *Type:* string

The custom type. Only used if the type is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

If this is user's primary website or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

## Classes <a name="Classes" id="Classes"></a>

### UserAddressesList <a name="UserAddressesList" id="@cdktf/provider-googleworkspace.user.UserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserAddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserAddressesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserAddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserAddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserAddressesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserAddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserAddressesList.get"></a>

```csharp
private UserAddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserAddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserAddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserAddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserAddressesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserAddressesOutputReference <a name="UserAddressesOutputReference" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserAddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCustomType">ResetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetExtendedAddress">ResetExtendedAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetFormatted">ResetFormatted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPoBox">ResetPoBox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetSourceIsStructured">ResetSourceIsStructured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetCustomType` <a name="ResetCustomType" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCustomType"></a>

```csharp
private void ResetCustomType()
```

##### `ResetExtendedAddress` <a name="ResetExtendedAddress" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetExtendedAddress"></a>

```csharp
private void ResetExtendedAddress()
```

##### `ResetFormatted` <a name="ResetFormatted" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetFormatted"></a>

```csharp
private void ResetFormatted()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetLocality"></a>

```csharp
private void ResetLocality()
```

##### `ResetPoBox` <a name="ResetPoBox" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPoBox"></a>

```csharp
private void ResetPoBox()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSourceIsStructured` <a name="ResetSourceIsStructured" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetSourceIsStructured"></a>

```csharp
private void ResetSourceIsStructured()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetStreetAddress"></a>

```csharp
private void ResetStreetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customTypeInput">CustomTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddressInput">ExtendedAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formattedInput">FormattedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.localityInput">LocalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBoxInput">PoBoxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructuredInput">SourceIsStructuredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddressInput">StreetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddress">ExtendedAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formatted">Formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.locality">Locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBox">PoBox</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructured">SourceIsStructured</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddress">StreetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CustomTypeInput`<sup>Optional</sup> <a name="CustomTypeInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customTypeInput"></a>

```csharp
public string CustomTypeInput { get; }
```

- *Type:* string

---

##### `ExtendedAddressInput`<sup>Optional</sup> <a name="ExtendedAddressInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddressInput"></a>

```csharp
public string ExtendedAddressInput { get; }
```

- *Type:* string

---

##### `FormattedInput`<sup>Optional</sup> <a name="FormattedInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formattedInput"></a>

```csharp
public string FormattedInput { get; }
```

- *Type:* string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.localityInput"></a>

```csharp
public string LocalityInput { get; }
```

- *Type:* string

---

##### `PoBoxInput`<sup>Optional</sup> <a name="PoBoxInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBoxInput"></a>

```csharp
public string PoBoxInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SourceIsStructuredInput`<sup>Optional</sup> <a name="SourceIsStructuredInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructuredInput"></a>

```csharp
public object SourceIsStructuredInput { get; }
```

- *Type:* object

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddressInput"></a>

```csharp
public string StreetAddressInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `ExtendedAddress`<sup>Required</sup> <a name="ExtendedAddress" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddress"></a>

```csharp
public string ExtendedAddress { get; }
```

- *Type:* string

---

##### `Formatted`<sup>Required</sup> <a name="Formatted" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formatted"></a>

```csharp
public string Formatted { get; }
```

- *Type:* string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.locality"></a>

```csharp
public string Locality { get; }
```

- *Type:* string

---

##### `PoBox`<sup>Required</sup> <a name="PoBox" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBox"></a>

```csharp
public string PoBox { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SourceIsStructured`<sup>Required</sup> <a name="SourceIsStructured" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructured"></a>

```csharp
public object SourceIsStructured { get; }
```

- *Type:* object

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddress"></a>

```csharp
public string StreetAddress { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserCustomSchemasList <a name="UserCustomSchemasList" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserCustomSchemasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.get"></a>

```csharp
private UserCustomSchemasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserCustomSchemasOutputReference <a name="UserCustomSchemasOutputReference" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserCustomSchemasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValuesInput">SchemaValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValues">SchemaValues</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `SchemaValuesInput`<sup>Optional</sup> <a name="SchemaValuesInput" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SchemaValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SchemaValues`<sup>Required</sup> <a name="SchemaValues" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SchemaValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserEmailsList <a name="UserEmailsList" id="@cdktf/provider-googleworkspace.user.UserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserEmailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserEmailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserEmailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserEmailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserEmailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserEmailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserEmailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserEmailsList.get"></a>

```csharp
private UserEmailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserEmailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserEmailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserEmailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserEmailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserEmailsOutputReference <a name="UserEmailsOutputReference" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserEmailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetCustomType">ResetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetCustomType` <a name="ResetCustomType" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetCustomType"></a>

```csharp
private void ResetCustomType()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customTypeInput">CustomTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `CustomTypeInput`<sup>Optional</sup> <a name="CustomTypeInput" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customTypeInput"></a>

```csharp
public string CustomTypeInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserExternalIdsList <a name="UserExternalIdsList" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserExternalIdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.get"></a>

```csharp
private UserExternalIdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserExternalIdsOutputReference <a name="UserExternalIdsOutputReference" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserExternalIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resetCustomType">ResetCustomType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomType` <a name="ResetCustomType" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resetCustomType"></a>

```csharp
private void ResetCustomType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customTypeInput">CustomTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomTypeInput`<sup>Optional</sup> <a name="CustomTypeInput" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customTypeInput"></a>

```csharp
public string CustomTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserImsList <a name="UserImsList" id="@cdktf/provider-googleworkspace.user.UserImsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserImsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserImsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserImsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserImsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserImsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserImsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserImsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserImsList.get"></a>

```csharp
private UserImsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserImsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserImsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserImsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserImsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserImsOutputReference <a name="UserImsOutputReference" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserImsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomProtocol">ResetCustomProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomType">ResetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetIm">ResetIm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomProtocol` <a name="ResetCustomProtocol" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomProtocol"></a>

```csharp
private void ResetCustomProtocol()
```

##### `ResetCustomType` <a name="ResetCustomType" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomType"></a>

```csharp
private void ResetCustomType()
```

##### `ResetIm` <a name="ResetIm" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetIm"></a>

```csharp
private void ResetIm()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocolInput">CustomProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customTypeInput">CustomTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.imInput">ImInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocol">CustomProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.im">Im</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomProtocolInput`<sup>Optional</sup> <a name="CustomProtocolInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocolInput"></a>

```csharp
public string CustomProtocolInput { get; }
```

- *Type:* string

---

##### `CustomTypeInput`<sup>Optional</sup> <a name="CustomTypeInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customTypeInput"></a>

```csharp
public string CustomTypeInput { get; }
```

- *Type:* string

---

##### `ImInput`<sup>Optional</sup> <a name="ImInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.imInput"></a>

```csharp
public string ImInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CustomProtocol`<sup>Required</sup> <a name="CustomProtocol" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocol"></a>

```csharp
public string CustomProtocol { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Im`<sup>Required</sup> <a name="Im" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.im"></a>

```csharp
public string Im { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserKeywordsList <a name="UserKeywordsList" id="@cdktf/provider-googleworkspace.user.UserKeywordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserKeywordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.get"></a>

```csharp
private UserKeywordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserKeywordsOutputReference <a name="UserKeywordsOutputReference" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserKeywordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resetCustomType">ResetCustomType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomType` <a name="ResetCustomType" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resetCustomType"></a>

```csharp
private void ResetCustomType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customTypeInput">CustomTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomTypeInput`<sup>Optional</sup> <a name="CustomTypeInput" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customTypeInput"></a>

```csharp
public string CustomTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserLanguagesList <a name="UserLanguagesList" id="@cdktf/provider-googleworkspace.user.UserLanguagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserLanguagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.get"></a>

```csharp
private UserLanguagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserLanguagesOutputReference <a name="UserLanguagesOutputReference" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserLanguagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetCustomLanguage">ResetCustomLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomLanguage` <a name="ResetCustomLanguage" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetCustomLanguage"></a>

```csharp
private void ResetCustomLanguage()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetLanguageCode"></a>

```csharp
private void ResetLanguageCode()
```

##### `ResetPreference` <a name="ResetPreference" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetPreference"></a>

```csharp
private void ResetPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguageInput">CustomLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguage">CustomLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomLanguageInput`<sup>Optional</sup> <a name="CustomLanguageInput" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguageInput"></a>

```csharp
public string CustomLanguageInput { get; }
```

- *Type:* string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preferenceInput"></a>

```csharp
public string PreferenceInput { get; }
```

- *Type:* string

---

##### `CustomLanguage`<sup>Required</sup> <a name="CustomLanguage" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguage"></a>

```csharp
public string CustomLanguage { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserLocationsList <a name="UserLocationsList" id="@cdktf/provider-googleworkspace.user.UserLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserLocationsList.get"></a>

```csharp
private UserLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserLocationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserLocationsOutputReference <a name="UserLocationsOutputReference" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetArea">ResetArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetBuildingId">ResetBuildingId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetCustomType">ResetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetDeskCode">ResetDeskCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorName">ResetFloorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorSection">ResetFloorSection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArea` <a name="ResetArea" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetArea"></a>

```csharp
private void ResetArea()
```

##### `ResetBuildingId` <a name="ResetBuildingId" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetBuildingId"></a>

```csharp
private void ResetBuildingId()
```

##### `ResetCustomType` <a name="ResetCustomType" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetCustomType"></a>

```csharp
private void ResetCustomType()
```

##### `ResetDeskCode` <a name="ResetDeskCode" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetDeskCode"></a>

```csharp
private void ResetDeskCode()
```

##### `ResetFloorName` <a name="ResetFloorName" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorName"></a>

```csharp
private void ResetFloorName()
```

##### `ResetFloorSection` <a name="ResetFloorSection" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorSection"></a>

```csharp
private void ResetFloorSection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.areaInput">AreaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingIdInput">BuildingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customTypeInput">CustomTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCodeInput">DeskCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorNameInput">FloorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSectionInput">FloorSectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.area">Area</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingId">BuildingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCode">DeskCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorName">FloorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSection">FloorSection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AreaInput`<sup>Optional</sup> <a name="AreaInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.areaInput"></a>

```csharp
public string AreaInput { get; }
```

- *Type:* string

---

##### `BuildingIdInput`<sup>Optional</sup> <a name="BuildingIdInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingIdInput"></a>

```csharp
public string BuildingIdInput { get; }
```

- *Type:* string

---

##### `CustomTypeInput`<sup>Optional</sup> <a name="CustomTypeInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customTypeInput"></a>

```csharp
public string CustomTypeInput { get; }
```

- *Type:* string

---

##### `DeskCodeInput`<sup>Optional</sup> <a name="DeskCodeInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCodeInput"></a>

```csharp
public string DeskCodeInput { get; }
```

- *Type:* string

---

##### `FloorNameInput`<sup>Optional</sup> <a name="FloorNameInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorNameInput"></a>

```csharp
public string FloorNameInput { get; }
```

- *Type:* string

---

##### `FloorSectionInput`<sup>Optional</sup> <a name="FloorSectionInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSectionInput"></a>

```csharp
public string FloorSectionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Area`<sup>Required</sup> <a name="Area" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.area"></a>

```csharp
public string Area { get; }
```

- *Type:* string

---

##### `BuildingId`<sup>Required</sup> <a name="BuildingId" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingId"></a>

```csharp
public string BuildingId { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `DeskCode`<sup>Required</sup> <a name="DeskCode" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCode"></a>

```csharp
public string DeskCode { get; }
```

- *Type:* string

---

##### `FloorName`<sup>Required</sup> <a name="FloorName" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorName"></a>

```csharp
public string FloorName { get; }
```

- *Type:* string

---

##### `FloorSection`<sup>Required</sup> <a name="FloorSection" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSection"></a>

```csharp
public string FloorSection { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserNameOutputReference <a name="UserNameOutputReference" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.resetGivenName">ResetGivenName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGivenName` <a name="ResetGivenName" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.resetGivenName"></a>

```csharp
private void ResetGivenName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyNameInput">FamilyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenNameInput">GivenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyName">FamilyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `FamilyNameInput`<sup>Optional</sup> <a name="FamilyNameInput" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyNameInput"></a>

```csharp
public string FamilyNameInput { get; }
```

- *Type:* string

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenNameInput"></a>

```csharp
public string GivenNameInput { get; }
```

- *Type:* string

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyName"></a>

```csharp
public string FamilyName { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.internalValue"></a>

```csharp
public UserName InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

---


### UserOrganizationsList <a name="UserOrganizationsList" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserOrganizationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.get"></a>

```csharp
private UserOrganizationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserOrganizationsOutputReference <a name="UserOrganizationsOutputReference" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserOrganizationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCostCenter">ResetCostCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCustomType">ResetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDepartment">ResetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetFullTimeEquivalent">ResetFullTimeEquivalent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetSymbol">ResetSymbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCostCenter` <a name="ResetCostCenter" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCostCenter"></a>

```csharp
private void ResetCostCenter()
```

##### `ResetCustomType` <a name="ResetCustomType" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCustomType"></a>

```csharp
private void ResetCustomType()
```

##### `ResetDepartment` <a name="ResetDepartment" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDepartment"></a>

```csharp
private void ResetDepartment()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetFullTimeEquivalent` <a name="ResetFullTimeEquivalent" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetFullTimeEquivalent"></a>

```csharp
private void ResetFullTimeEquivalent()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetSymbol` <a name="ResetSymbol" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetSymbol"></a>

```csharp
private void ResetSymbol()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenterInput">CostCenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customTypeInput">CustomTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.departmentInput">DepartmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalentInput">FullTimeEquivalentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbolInput">SymbolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenter">CostCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.department">Department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalent">FullTimeEquivalent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbol">Symbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CostCenterInput`<sup>Optional</sup> <a name="CostCenterInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenterInput"></a>

```csharp
public string CostCenterInput { get; }
```

- *Type:* string

---

##### `CustomTypeInput`<sup>Optional</sup> <a name="CustomTypeInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customTypeInput"></a>

```csharp
public string CustomTypeInput { get; }
```

- *Type:* string

---

##### `DepartmentInput`<sup>Optional</sup> <a name="DepartmentInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.departmentInput"></a>

```csharp
public string DepartmentInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `FullTimeEquivalentInput`<sup>Optional</sup> <a name="FullTimeEquivalentInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalentInput"></a>

```csharp
public double FullTimeEquivalentInput { get; }
```

- *Type:* double

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `SymbolInput`<sup>Optional</sup> <a name="SymbolInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbolInput"></a>

```csharp
public string SymbolInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CostCenter`<sup>Required</sup> <a name="CostCenter" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenter"></a>

```csharp
public string CostCenter { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.department"></a>

```csharp
public string Department { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FullTimeEquivalent`<sup>Required</sup> <a name="FullTimeEquivalent" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalent"></a>

```csharp
public double FullTimeEquivalent { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `Symbol`<sup>Required</sup> <a name="Symbol" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbol"></a>

```csharp
public string Symbol { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserPhonesList <a name="UserPhonesList" id="@cdktf/provider-googleworkspace.user.UserPhonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserPhonesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserPhonesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserPhonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserPhonesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserPhonesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserPhonesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserPhonesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserPhonesList.get"></a>

```csharp
private UserPhonesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserPhonesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserPhonesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserPhonesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserPhonesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserPhonesOutputReference <a name="UserPhonesOutputReference" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserPhonesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetCustomType">ResetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomType` <a name="ResetCustomType" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetCustomType"></a>

```csharp
private void ResetCustomType()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customTypeInput">CustomTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomTypeInput`<sup>Optional</sup> <a name="CustomTypeInput" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customTypeInput"></a>

```csharp
public string CustomTypeInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserPosixAccountsList <a name="UserPosixAccountsList" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserPosixAccountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.get"></a>

```csharp
private UserPosixAccountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserPosixAccountsOutputReference <a name="UserPosixAccountsOutputReference" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserPosixAccountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGecos">ResetGecos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGid">ResetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetHomeDirectory">ResetHomeDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetOperatingSystemType">ResetOperatingSystemType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetShell">ResetShell</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetSystemId">ResetSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUid">ResetUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetGecos` <a name="ResetGecos" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGecos"></a>

```csharp
private void ResetGecos()
```

##### `ResetGid` <a name="ResetGid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGid"></a>

```csharp
private void ResetGid()
```

##### `ResetHomeDirectory` <a name="ResetHomeDirectory" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetHomeDirectory"></a>

```csharp
private void ResetHomeDirectory()
```

##### `ResetOperatingSystemType` <a name="ResetOperatingSystemType" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetOperatingSystemType"></a>

```csharp
private void ResetOperatingSystemType()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetShell` <a name="ResetShell" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetShell"></a>

```csharp
private void ResetShell()
```

##### `ResetSystemId` <a name="ResetSystemId" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetSystemId"></a>

```csharp
private void ResetSystemId()
```

##### `ResetUid` <a name="ResetUid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUid"></a>

```csharp
private void ResetUid()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecosInput">GecosInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gidInput">GidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectoryInput">HomeDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemTypeInput">OperatingSystemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shellInput">ShellInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemIdInput">SystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uidInput">UidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecos">Gecos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gid">Gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectory">HomeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemType">OperatingSystemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shell">Shell</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemId">SystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `GecosInput`<sup>Optional</sup> <a name="GecosInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecosInput"></a>

```csharp
public string GecosInput { get; }
```

- *Type:* string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gidInput"></a>

```csharp
public string GidInput { get; }
```

- *Type:* string

---

##### `HomeDirectoryInput`<sup>Optional</sup> <a name="HomeDirectoryInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectoryInput"></a>

```csharp
public string HomeDirectoryInput { get; }
```

- *Type:* string

---

##### `OperatingSystemTypeInput`<sup>Optional</sup> <a name="OperatingSystemTypeInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemTypeInput"></a>

```csharp
public string OperatingSystemTypeInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `ShellInput`<sup>Optional</sup> <a name="ShellInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shellInput"></a>

```csharp
public string ShellInput { get; }
```

- *Type:* string

---

##### `SystemIdInput`<sup>Optional</sup> <a name="SystemIdInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemIdInput"></a>

```csharp
public string SystemIdInput { get; }
```

- *Type:* string

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uidInput"></a>

```csharp
public string UidInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Gecos`<sup>Required</sup> <a name="Gecos" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecos"></a>

```csharp
public string Gecos { get; }
```

- *Type:* string

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gid"></a>

```csharp
public string Gid { get; }
```

- *Type:* string

---

##### `HomeDirectory`<sup>Required</sup> <a name="HomeDirectory" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectory"></a>

```csharp
public string HomeDirectory { get; }
```

- *Type:* string

---

##### `OperatingSystemType`<sup>Required</sup> <a name="OperatingSystemType" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemType"></a>

```csharp
public string OperatingSystemType { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shell"></a>

```csharp
public string Shell { get; }
```

- *Type:* string

---

##### `SystemId`<sup>Required</sup> <a name="SystemId" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemId"></a>

```csharp
public string SystemId { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserRelationsList <a name="UserRelationsList" id="@cdktf/provider-googleworkspace.user.UserRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserRelationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserRelationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserRelationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserRelationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserRelationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserRelationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserRelationsList.get"></a>

```csharp
private UserRelationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserRelationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserRelationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserRelationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserRelationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserRelationsOutputReference <a name="UserRelationsOutputReference" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserRelationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resetCustomType">ResetCustomType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomType` <a name="ResetCustomType" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resetCustomType"></a>

```csharp
private void ResetCustomType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customTypeInput">CustomTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomTypeInput`<sup>Optional</sup> <a name="CustomTypeInput" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customTypeInput"></a>

```csharp
public string CustomTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserSshPublicKeysList <a name="UserSshPublicKeysList" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserSshPublicKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.get"></a>

```csharp
private UserSshPublicKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserSshPublicKeysOutputReference <a name="UserSshPublicKeysOutputReference" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserSshPublicKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resetExpirationTimeUsec">ResetExpirationTimeUsec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationTimeUsec` <a name="ResetExpirationTimeUsec" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resetExpirationTimeUsec"></a>

```csharp
private void ResetExpirationTimeUsec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsecInput">ExpirationTimeUsecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsec">ExpirationTimeUsec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `ExpirationTimeUsecInput`<sup>Optional</sup> <a name="ExpirationTimeUsecInput" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsecInput"></a>

```csharp
public string ExpirationTimeUsecInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ExpirationTimeUsec`<sup>Required</sup> <a name="ExpirationTimeUsec" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsec"></a>

```csharp
public string ExpirationTimeUsec { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserTimeoutsOutputReference <a name="UserTimeoutsOutputReference" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserWebsitesList <a name="UserWebsitesList" id="@cdktf/provider-googleworkspace.user.UserWebsitesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserWebsitesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.get"></a>

```csharp
private UserWebsitesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserWebsitesOutputReference <a name="UserWebsitesOutputReference" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new UserWebsitesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetCustomType">ResetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomType` <a name="ResetCustomType" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetCustomType"></a>

```csharp
private void ResetCustomType()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customTypeInput">CustomTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomTypeInput`<sup>Optional</sup> <a name="CustomTypeInput" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customTypeInput"></a>

```csharp
public string CustomTypeInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



