# `gmailSendAsAlias` Submodule <a name="`gmailSendAsAlias` Submodule" id="@cdktf/provider-googleworkspace.gmailSendAsAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GmailSendAsAlias <a name="GmailSendAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias googleworkspace_gmail_send_as_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new GmailSendAsAlias(Construct Scope, string Id, GmailSendAsAliasConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig">GmailSendAsAliasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig">GmailSendAsAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa">PutSmtpMsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetReplyToAddress">ResetReplyToAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSignature">ResetSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSmtpMsa">ResetSmtpMsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetTreatAsAlias">ResetTreatAsAlias</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutSmtpMsa` <a name="PutSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa"></a>

```csharp
private void PutSmtpMsa(GmailSendAsAliasSmtpMsa Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetIsDefault"></a>

```csharp
private void ResetIsDefault()
```

##### `ResetReplyToAddress` <a name="ResetReplyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetReplyToAddress"></a>

```csharp
private void ResetReplyToAddress()
```

##### `ResetSignature` <a name="ResetSignature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSignature"></a>

```csharp
private void ResetSignature()
```

##### `ResetSmtpMsa` <a name="ResetSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSmtpMsa"></a>

```csharp
private void ResetSmtpMsa()
```

##### `ResetTreatAsAlias` <a name="ResetTreatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetTreatAsAlias"></a>

```csharp
private void ResetTreatAsAlias()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GmailSendAsAlias resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

GmailSendAsAlias.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

GmailSendAsAlias.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

GmailSendAsAlias.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

GmailSendAsAlias.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GmailSendAsAlias resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GmailSendAsAlias to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GmailSendAsAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GmailSendAsAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isPrimary">IsPrimary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsa">SmtpMsa</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference">GmailSendAsAliasSmtpMsaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.verificationStatus">VerificationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefaultInput">IsDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmailInput">PrimaryEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddressInput">ReplyToAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmailInput">SendAsEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signatureInput">SignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsaInput">SmtpMsaInput</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAliasInput">TreatAsAliasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefault">IsDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmail">PrimaryEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddress">ReplyToAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmail">SendAsEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAlias">TreatAsAlias</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isPrimary"></a>

```csharp
public IResolvable IsPrimary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SmtpMsa`<sup>Required</sup> <a name="SmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsa"></a>

```csharp
public GmailSendAsAliasSmtpMsaOutputReference SmtpMsa { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference">GmailSendAsAliasSmtpMsaOutputReference</a>

---

##### `VerificationStatus`<sup>Required</sup> <a name="VerificationStatus" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.verificationStatus"></a>

```csharp
public string VerificationStatus { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefaultInput"></a>

```csharp
public object IsDefaultInput { get; }
```

- *Type:* object

---

##### `PrimaryEmailInput`<sup>Optional</sup> <a name="PrimaryEmailInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmailInput"></a>

```csharp
public string PrimaryEmailInput { get; }
```

- *Type:* string

---

##### `ReplyToAddressInput`<sup>Optional</sup> <a name="ReplyToAddressInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddressInput"></a>

```csharp
public string ReplyToAddressInput { get; }
```

- *Type:* string

---

##### `SendAsEmailInput`<sup>Optional</sup> <a name="SendAsEmailInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmailInput"></a>

```csharp
public string SendAsEmailInput { get; }
```

- *Type:* string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signatureInput"></a>

```csharp
public string SignatureInput { get; }
```

- *Type:* string

---

##### `SmtpMsaInput`<sup>Optional</sup> <a name="SmtpMsaInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsaInput"></a>

```csharp
public GmailSendAsAliasSmtpMsa SmtpMsaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---

##### `TreatAsAliasInput`<sup>Optional</sup> <a name="TreatAsAliasInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAliasInput"></a>

```csharp
public object TreatAsAliasInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefault"></a>

```csharp
public object IsDefault { get; }
```

- *Type:* object

---

##### `PrimaryEmail`<sup>Required</sup> <a name="PrimaryEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmail"></a>

```csharp
public string PrimaryEmail { get; }
```

- *Type:* string

---

##### `ReplyToAddress`<sup>Required</sup> <a name="ReplyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddress"></a>

```csharp
public string ReplyToAddress { get; }
```

- *Type:* string

---

##### `SendAsEmail`<sup>Required</sup> <a name="SendAsEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmail"></a>

```csharp
public string SendAsEmail { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `TreatAsAlias`<sup>Required</sup> <a name="TreatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAlias"></a>

```csharp
public object TreatAsAlias { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GmailSendAsAliasConfig <a name="GmailSendAsAliasConfig" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new GmailSendAsAliasConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PrimaryEmail,
    string SendAsEmail,
    string DisplayName = null,
    object IsDefault = null,
    string ReplyToAddress = null,
    string Signature = null,
    GmailSendAsAliasSmtpMsa SmtpMsa = null,
    object TreatAsAlias = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.primaryEmail">PrimaryEmail</a></code> | <code>string</code> | User's primary email address. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.sendAsEmail">SendAsEmail</a></code> | <code>string</code> | The email address that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A name that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.isDefault">IsDefault</a></code> | <code>object</code> | Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.replyToAddress">ReplyToAddress</a></code> | <code>string</code> | An optional email address that is included in a 'Reply-To:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.signature">Signature</a></code> | <code>string</code> | An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.smtpMsa">SmtpMsa</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | smtp_msa block. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.treatAsAlias">TreatAsAlias</a></code> | <code>object</code> | Defaults to `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PrimaryEmail`<sup>Required</sup> <a name="PrimaryEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.primaryEmail"></a>

```csharp
public string PrimaryEmail { get; set; }
```

- *Type:* string

User's primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#primary_email GmailSendAsAlias#primary_email}

---

##### `SendAsEmail`<sup>Required</sup> <a name="SendAsEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.sendAsEmail"></a>

```csharp
public string SendAsEmail { get; set; }
```

- *Type:* string

The email address that appears in the 'From:' header for mail sent using this alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#send_as_email GmailSendAsAlias#send_as_email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A name that appears in the 'From:' header for mail sent using this alias.

For custom 'from' addresses, when this is empty, Gmail will populate the 'From:' header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#display_name GmailSendAsAlias#display_name}

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.isDefault"></a>

```csharp
public object IsDefault { get; set; }
```

- *Type:* object

Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply.

Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false to true for an address will result in this field becoming false for the other previous default address. Toggling an existing alias' default to false is not possible, another alias must be added/imported and toggled to true to remove the default from an existing alias. To avoid drift with Terraform, please change the previous default's config to false AFTER a new default is applied and perform a refresh to synchronize with remote state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#is_default GmailSendAsAlias#is_default}

---

##### `ReplyToAddress`<sup>Optional</sup> <a name="ReplyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.replyToAddress"></a>

```csharp
public string ReplyToAddress { get; set; }
```

- *Type:* string

An optional email address that is included in a 'Reply-To:' header for mail sent using this alias.

If this is empty, Gmail will not generate a 'Reply-To:' header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#reply_to_address GmailSendAsAlias#reply_to_address}

---

##### `Signature`<sup>Optional</sup> <a name="Signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.signature"></a>

```csharp
public string Signature { get; set; }
```

- *Type:* string

An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.

This signature is added to new emails only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#signature GmailSendAsAlias#signature}

---

##### `SmtpMsa`<sup>Optional</sup> <a name="SmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.smtpMsa"></a>

```csharp
public GmailSendAsAliasSmtpMsa SmtpMsa { get; set; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

smtp_msa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#smtp_msa GmailSendAsAlias#smtp_msa}

---

##### `TreatAsAlias`<sup>Optional</sup> <a name="TreatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.treatAsAlias"></a>

```csharp
public object TreatAsAlias { get; set; }
```

- *Type:* object

Defaults to `true`.

Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom 'from' aliases. See https://support.google.com/a/answer/1710338 for help on making this decision

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#treat_as_alias GmailSendAsAlias#treat_as_alias}

---

### GmailSendAsAliasSmtpMsa <a name="GmailSendAsAliasSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new GmailSendAsAliasSmtpMsa {
    string Host,
    double Port,
    string Password = null,
    string SecurityMode = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.host">Host</a></code> | <code>string</code> | The hostname of the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.port">Port</a></code> | <code>double</code> | The port of the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.password">Password</a></code> | <code>string</code> | The password that will be used for authentication with the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.securityMode">SecurityMode</a></code> | <code>string</code> | Defaults to `securityModeUnspecified`. The protocol that will be used to secure communication with the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.username">Username</a></code> | <code>string</code> | The username that will be used for authentication with the SMTP service. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The hostname of the SMTP service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#host GmailSendAsAlias#host}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port of the SMTP service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#port GmailSendAsAlias#port}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password that will be used for authentication with the SMTP service.

This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#password GmailSendAsAlias#password}

---

##### `SecurityMode`<sup>Optional</sup> <a name="SecurityMode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.securityMode"></a>

```csharp
public string SecurityMode { get; set; }
```

- *Type:* string

Defaults to `securityModeUnspecified`. The protocol that will be used to secure communication with the SMTP service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#security_mode GmailSendAsAlias#security_mode}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username that will be used for authentication with the SMTP service.

This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#username GmailSendAsAlias#username}

---

## Classes <a name="Classes" id="Classes"></a>

### GmailSendAsAliasSmtpMsaOutputReference <a name="GmailSendAsAliasSmtpMsaOutputReference" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new GmailSendAsAliasSmtpMsaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetSecurityMode">ResetSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetSecurityMode` <a name="ResetSecurityMode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetSecurityMode"></a>

```csharp
private void ResetSecurityMode()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityModeInput">SecurityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityMode">SecurityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SecurityModeInput`<sup>Optional</sup> <a name="SecurityModeInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityModeInput"></a>

```csharp
public string SecurityModeInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SecurityMode`<sup>Required</sup> <a name="SecurityMode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityMode"></a>

```csharp
public string SecurityMode { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.internalValue"></a>

```csharp
public GmailSendAsAliasSmtpMsa InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---



