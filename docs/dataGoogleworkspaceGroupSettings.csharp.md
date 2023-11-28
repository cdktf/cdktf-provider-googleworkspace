# `dataGoogleworkspaceGroupSettings` Submodule <a name="`dataGoogleworkspaceGroupSettings` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceGroupSettings <a name="DataGoogleworkspaceGroupSettings" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings googleworkspace_group_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceGroupSettings(Construct Scope, string Id, DataGoogleworkspaceGroupSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig">DataGoogleworkspaceGroupSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig">DataGoogleworkspaceGroupSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleworkspaceGroupSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceGroupSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceGroupSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceGroupSettings.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceGroupSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleworkspaceGroupSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleworkspaceGroupSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleworkspaceGroupSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleworkspaceGroupSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowExternalMembers">AllowExternalMembers</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowWebPosting">AllowWebPosting</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.archiveOnly">ArchiveOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customFooterText">CustomFooterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customReplyTo">CustomReplyTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customRolesEnabledForSettingsToBeMerged">CustomRolesEnabledForSettingsToBeMerged</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.defaultMessageDenyNotificationText">DefaultMessageDenyNotificationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.enableCollaborativeInbox">EnableCollaborativeInbox</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeCustomFooter">IncludeCustomFooter</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeInGlobalAddressList">IncludeInGlobalAddressList</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.isArchived">IsArchived</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.membersCanPostAsTheGroup">MembersCanPostAsTheGroup</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.messageModerationLevel">MessageModerationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.primaryLanguage">PrimaryLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.replyTo">ReplyTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.sendMessageDenyNotification">SendMessageDenyNotification</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.spamModerationLevel">SpamModerationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanAssistContent">WhoCanAssistContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanContactOwner">WhoCanContactOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanDiscoverGroup">WhoCanDiscoverGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanJoin">WhoCanJoin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanLeaveGroup">WhoCanLeaveGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateContent">WhoCanModerateContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateMembers">WhoCanModerateMembers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanPostMessage">WhoCanPostMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewGroup">WhoCanViewGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewMembership">WhoCanViewMembership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.email">Email</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AllowExternalMembers`<sup>Required</sup> <a name="AllowExternalMembers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowExternalMembers"></a>

```csharp
public IResolvable AllowExternalMembers { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AllowWebPosting`<sup>Required</sup> <a name="AllowWebPosting" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowWebPosting"></a>

```csharp
public IResolvable AllowWebPosting { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ArchiveOnly`<sup>Required</sup> <a name="ArchiveOnly" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.archiveOnly"></a>

```csharp
public IResolvable ArchiveOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CustomFooterText`<sup>Required</sup> <a name="CustomFooterText" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customFooterText"></a>

```csharp
public string CustomFooterText { get; }
```

- *Type:* string

---

##### `CustomReplyTo`<sup>Required</sup> <a name="CustomReplyTo" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customReplyTo"></a>

```csharp
public string CustomReplyTo { get; }
```

- *Type:* string

---

##### `CustomRolesEnabledForSettingsToBeMerged`<sup>Required</sup> <a name="CustomRolesEnabledForSettingsToBeMerged" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customRolesEnabledForSettingsToBeMerged"></a>

```csharp
public IResolvable CustomRolesEnabledForSettingsToBeMerged { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DefaultMessageDenyNotificationText`<sup>Required</sup> <a name="DefaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.defaultMessageDenyNotificationText"></a>

```csharp
public string DefaultMessageDenyNotificationText { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableCollaborativeInbox`<sup>Required</sup> <a name="EnableCollaborativeInbox" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.enableCollaborativeInbox"></a>

```csharp
public IResolvable EnableCollaborativeInbox { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeCustomFooter`<sup>Required</sup> <a name="IncludeCustomFooter" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeCustomFooter"></a>

```csharp
public IResolvable IncludeCustomFooter { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeInGlobalAddressList`<sup>Required</sup> <a name="IncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeInGlobalAddressList"></a>

```csharp
public IResolvable IncludeInGlobalAddressList { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsArchived`<sup>Required</sup> <a name="IsArchived" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.isArchived"></a>

```csharp
public IResolvable IsArchived { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MembersCanPostAsTheGroup`<sup>Required</sup> <a name="MembersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.membersCanPostAsTheGroup"></a>

```csharp
public IResolvable MembersCanPostAsTheGroup { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MessageModerationLevel`<sup>Required</sup> <a name="MessageModerationLevel" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.messageModerationLevel"></a>

```csharp
public string MessageModerationLevel { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrimaryLanguage`<sup>Required</sup> <a name="PrimaryLanguage" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.primaryLanguage"></a>

```csharp
public string PrimaryLanguage { get; }
```

- *Type:* string

---

##### `ReplyTo`<sup>Required</sup> <a name="ReplyTo" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.replyTo"></a>

```csharp
public string ReplyTo { get; }
```

- *Type:* string

---

##### `SendMessageDenyNotification`<sup>Required</sup> <a name="SendMessageDenyNotification" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.sendMessageDenyNotification"></a>

```csharp
public IResolvable SendMessageDenyNotification { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SpamModerationLevel`<sup>Required</sup> <a name="SpamModerationLevel" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.spamModerationLevel"></a>

```csharp
public string SpamModerationLevel { get; }
```

- *Type:* string

---

##### `WhoCanAssistContent`<sup>Required</sup> <a name="WhoCanAssistContent" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanAssistContent"></a>

```csharp
public string WhoCanAssistContent { get; }
```

- *Type:* string

---

##### `WhoCanContactOwner`<sup>Required</sup> <a name="WhoCanContactOwner" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanContactOwner"></a>

```csharp
public string WhoCanContactOwner { get; }
```

- *Type:* string

---

##### `WhoCanDiscoverGroup`<sup>Required</sup> <a name="WhoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanDiscoverGroup"></a>

```csharp
public string WhoCanDiscoverGroup { get; }
```

- *Type:* string

---

##### `WhoCanJoin`<sup>Required</sup> <a name="WhoCanJoin" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanJoin"></a>

```csharp
public string WhoCanJoin { get; }
```

- *Type:* string

---

##### `WhoCanLeaveGroup`<sup>Required</sup> <a name="WhoCanLeaveGroup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanLeaveGroup"></a>

```csharp
public string WhoCanLeaveGroup { get; }
```

- *Type:* string

---

##### `WhoCanModerateContent`<sup>Required</sup> <a name="WhoCanModerateContent" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateContent"></a>

```csharp
public string WhoCanModerateContent { get; }
```

- *Type:* string

---

##### `WhoCanModerateMembers`<sup>Required</sup> <a name="WhoCanModerateMembers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateMembers"></a>

```csharp
public string WhoCanModerateMembers { get; }
```

- *Type:* string

---

##### `WhoCanPostMessage`<sup>Required</sup> <a name="WhoCanPostMessage" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanPostMessage"></a>

```csharp
public string WhoCanPostMessage { get; }
```

- *Type:* string

---

##### `WhoCanViewGroup`<sup>Required</sup> <a name="WhoCanViewGroup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewGroup"></a>

```csharp
public string WhoCanViewGroup { get; }
```

- *Type:* string

---

##### `WhoCanViewMembership`<sup>Required</sup> <a name="WhoCanViewMembership" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewMembership"></a>

```csharp
public string WhoCanViewMembership { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceGroupSettingsConfig <a name="DataGoogleworkspaceGroupSettingsConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceGroupSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Email
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.email">Email</a></code> | <code>string</code> | The group's email address. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings#email DataGoogleworkspaceGroupSettings#email}

---



