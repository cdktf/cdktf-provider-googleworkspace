# `data_googleworkspace_users`

Refer to the Terraform Registory for docs: [`data_googleworkspace_users`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/users).

# `dataGoogleworkspaceUsers` Submodule <a name="`dataGoogleworkspaceUsers` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceUsers <a name="DataGoogleworkspaceUsers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/users googleworkspace_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsers(Construct Scope, string Id, DataGoogleworkspaceUsersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig">DataGoogleworkspaceUsersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig">DataGoogleworkspaceUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleworkspaceUsers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceUsers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceUsers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceUsers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceUsers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleworkspaceUsers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleworkspaceUsers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleworkspaceUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleworkspaceUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.users">Users</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList">DataGoogleworkspaceUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.users"></a>

```csharp
public DataGoogleworkspaceUsersUsersList Users { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList">DataGoogleworkspaceUsersUsersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceUsersConfig <a name="DataGoogleworkspaceUsersConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/users#id DataGoogleworkspaceUsers#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/users#id DataGoogleworkspaceUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleworkspaceUsersUsers <a name="DataGoogleworkspaceUsersUsers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsers {

};
```


### DataGoogleworkspaceUsersUsersAddresses <a name="DataGoogleworkspaceUsersUsersAddresses" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddresses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersAddresses {

};
```


### DataGoogleworkspaceUsersUsersCustomSchemas <a name="DataGoogleworkspaceUsersUsersCustomSchemas" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersCustomSchemas {

};
```


### DataGoogleworkspaceUsersUsersEmails <a name="DataGoogleworkspaceUsersUsersEmails" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersEmails {

};
```


### DataGoogleworkspaceUsersUsersExternalIds <a name="DataGoogleworkspaceUsersUsersExternalIds" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersExternalIds {

};
```


### DataGoogleworkspaceUsersUsersIms <a name="DataGoogleworkspaceUsersUsersIms" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersIms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersIms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersIms {

};
```


### DataGoogleworkspaceUsersUsersKeywords <a name="DataGoogleworkspaceUsersUsersKeywords" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersKeywords {

};
```


### DataGoogleworkspaceUsersUsersLanguages <a name="DataGoogleworkspaceUsersUsersLanguages" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersLanguages {

};
```


### DataGoogleworkspaceUsersUsersLocations <a name="DataGoogleworkspaceUsersUsersLocations" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersLocations {

};
```


### DataGoogleworkspaceUsersUsersName <a name="DataGoogleworkspaceUsersUsersName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersName {

};
```


### DataGoogleworkspaceUsersUsersOrganizations <a name="DataGoogleworkspaceUsersUsersOrganizations" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersOrganizations {

};
```


### DataGoogleworkspaceUsersUsersPhones <a name="DataGoogleworkspaceUsersUsersPhones" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhones.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersPhones {

};
```


### DataGoogleworkspaceUsersUsersPosixAccounts <a name="DataGoogleworkspaceUsersUsersPosixAccounts" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersPosixAccounts {

};
```


### DataGoogleworkspaceUsersUsersRelations <a name="DataGoogleworkspaceUsersUsersRelations" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersRelations {

};
```


### DataGoogleworkspaceUsersUsersSshPublicKeys <a name="DataGoogleworkspaceUsersUsersSshPublicKeys" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersSshPublicKeys {

};
```


### DataGoogleworkspaceUsersUsersWebsites <a name="DataGoogleworkspaceUsersUsersWebsites" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsites.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersWebsites {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleworkspaceUsersUsersAddressesList <a name="DataGoogleworkspaceUsersUsersAddressesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersAddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersAddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersAddressesOutputReference <a name="DataGoogleworkspaceUsersUsersAddressesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersAddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.extendedAddress">ExtendedAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.formatted">Formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.locality">Locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.poBox">PoBox</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.primary">Primary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.sourceIsStructured">SourceIsStructured</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.streetAddress">StreetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddresses">DataGoogleworkspaceUsersUsersAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `ExtendedAddress`<sup>Required</sup> <a name="ExtendedAddress" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.extendedAddress"></a>

```csharp
public string ExtendedAddress { get; }
```

- *Type:* string

---

##### `Formatted`<sup>Required</sup> <a name="Formatted" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.formatted"></a>

```csharp
public string Formatted { get; }
```

- *Type:* string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.locality"></a>

```csharp
public string Locality { get; }
```

- *Type:* string

---

##### `PoBox`<sup>Required</sup> <a name="PoBox" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.poBox"></a>

```csharp
public string PoBox { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.primary"></a>

```csharp
public IResolvable Primary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SourceIsStructured`<sup>Required</sup> <a name="SourceIsStructured" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.sourceIsStructured"></a>

```csharp
public IResolvable SourceIsStructured { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.streetAddress"></a>

```csharp
public string StreetAddress { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersAddresses InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddresses">DataGoogleworkspaceUsersUsersAddresses</a>

---


### DataGoogleworkspaceUsersUsersCustomSchemasList <a name="DataGoogleworkspaceUsersUsersCustomSchemasList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersCustomSchemasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersCustomSchemasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersCustomSchemasOutputReference <a name="DataGoogleworkspaceUsersUsersCustomSchemasOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersCustomSchemasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.schemaValues">SchemaValues</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemas">DataGoogleworkspaceUsersUsersCustomSchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SchemaValues`<sup>Required</sup> <a name="SchemaValues" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.schemaValues"></a>

```csharp
public StringMap SchemaValues { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersCustomSchemas InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemas">DataGoogleworkspaceUsersUsersCustomSchemas</a>

---


### DataGoogleworkspaceUsersUsersEmailsList <a name="DataGoogleworkspaceUsersUsersEmailsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersEmailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersEmailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersEmailsOutputReference <a name="DataGoogleworkspaceUsersUsersEmailsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersEmailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.primary">Primary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmails">DataGoogleworkspaceUsersUsersEmails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.primary"></a>

```csharp
public IResolvable Primary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersEmails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmails">DataGoogleworkspaceUsersUsersEmails</a>

---


### DataGoogleworkspaceUsersUsersExternalIdsList <a name="DataGoogleworkspaceUsersUsersExternalIdsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersExternalIdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersExternalIdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersExternalIdsOutputReference <a name="DataGoogleworkspaceUsersUsersExternalIdsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersExternalIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIds">DataGoogleworkspaceUsersUsersExternalIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersExternalIds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIds">DataGoogleworkspaceUsersUsersExternalIds</a>

---


### DataGoogleworkspaceUsersUsersImsList <a name="DataGoogleworkspaceUsersUsersImsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersImsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersImsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersImsOutputReference <a name="DataGoogleworkspaceUsersUsersImsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersImsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.customProtocol">CustomProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.im">Im</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.primary">Primary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersIms">DataGoogleworkspaceUsersUsersIms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomProtocol`<sup>Required</sup> <a name="CustomProtocol" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.customProtocol"></a>

```csharp
public string CustomProtocol { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Im`<sup>Required</sup> <a name="Im" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.im"></a>

```csharp
public string Im { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.primary"></a>

```csharp
public IResolvable Primary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersIms InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersIms">DataGoogleworkspaceUsersUsersIms</a>

---


### DataGoogleworkspaceUsersUsersKeywordsList <a name="DataGoogleworkspaceUsersUsersKeywordsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersKeywordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersKeywordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersKeywordsOutputReference <a name="DataGoogleworkspaceUsersUsersKeywordsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersKeywordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywords">DataGoogleworkspaceUsersUsersKeywords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersKeywords InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywords">DataGoogleworkspaceUsersUsersKeywords</a>

---


### DataGoogleworkspaceUsersUsersLanguagesList <a name="DataGoogleworkspaceUsersUsersLanguagesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersLanguagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersLanguagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersLanguagesOutputReference <a name="DataGoogleworkspaceUsersUsersLanguagesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersLanguagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.customLanguage">CustomLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguages">DataGoogleworkspaceUsersUsersLanguages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomLanguage`<sup>Required</sup> <a name="CustomLanguage" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.customLanguage"></a>

```csharp
public string CustomLanguage { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersLanguages InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguages">DataGoogleworkspaceUsersUsersLanguages</a>

---


### DataGoogleworkspaceUsersUsersList <a name="DataGoogleworkspaceUsersUsersList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersLocationsList <a name="DataGoogleworkspaceUsersUsersLocationsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersLocationsOutputReference <a name="DataGoogleworkspaceUsersUsersLocationsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.area">Area</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.buildingId">BuildingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.deskCode">DeskCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.floorName">FloorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.floorSection">FloorSection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocations">DataGoogleworkspaceUsersUsersLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Area`<sup>Required</sup> <a name="Area" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.area"></a>

```csharp
public string Area { get; }
```

- *Type:* string

---

##### `BuildingId`<sup>Required</sup> <a name="BuildingId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.buildingId"></a>

```csharp
public string BuildingId { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `DeskCode`<sup>Required</sup> <a name="DeskCode" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.deskCode"></a>

```csharp
public string DeskCode { get; }
```

- *Type:* string

---

##### `FloorName`<sup>Required</sup> <a name="FloorName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.floorName"></a>

```csharp
public string FloorName { get; }
```

- *Type:* string

---

##### `FloorSection`<sup>Required</sup> <a name="FloorSection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.floorSection"></a>

```csharp
public string FloorSection { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocations">DataGoogleworkspaceUsersUsersLocations</a>

---


### DataGoogleworkspaceUsersUsersNameList <a name="DataGoogleworkspaceUsersUsersNameList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersNameList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersNameOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersNameOutputReference <a name="DataGoogleworkspaceUsersUsersNameOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.familyName">FamilyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersName">DataGoogleworkspaceUsersUsersName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.familyName"></a>

```csharp
public string FamilyName { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersName InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersName">DataGoogleworkspaceUsersUsersName</a>

---


### DataGoogleworkspaceUsersUsersOrganizationsList <a name="DataGoogleworkspaceUsersUsersOrganizationsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersOrganizationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersOrganizationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersOrganizationsOutputReference <a name="DataGoogleworkspaceUsersUsersOrganizationsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersOrganizationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.costCenter">CostCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.department">Department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.fullTimeEquivalent">FullTimeEquivalent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.primary">Primary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.symbol">Symbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizations">DataGoogleworkspaceUsersUsersOrganizations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CostCenter`<sup>Required</sup> <a name="CostCenter" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.costCenter"></a>

```csharp
public string CostCenter { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.department"></a>

```csharp
public string Department { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FullTimeEquivalent`<sup>Required</sup> <a name="FullTimeEquivalent" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.fullTimeEquivalent"></a>

```csharp
public double FullTimeEquivalent { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.primary"></a>

```csharp
public IResolvable Primary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Symbol`<sup>Required</sup> <a name="Symbol" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.symbol"></a>

```csharp
public string Symbol { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersOrganizations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizations">DataGoogleworkspaceUsersUsersOrganizations</a>

---


### DataGoogleworkspaceUsersUsersOutputReference <a name="DataGoogleworkspaceUsersUsersOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.addresses">Addresses</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList">DataGoogleworkspaceUsersUsersAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.agreedToTerms">AgreedToTerms</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.aliases">Aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.archived">Archived</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.changePasswordAtNextLogin">ChangePasswordAtNextLogin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.customerId">CustomerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.customSchemas">CustomSchemas</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList">DataGoogleworkspaceUsersUsersCustomSchemasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.deletionTime">DeletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.emails">Emails</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList">DataGoogleworkspaceUsersUsersEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.externalIds">ExternalIds</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList">DataGoogleworkspaceUsersUsersExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.hashFunction">HashFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.ims">Ims</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList">DataGoogleworkspaceUsersUsersImsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.includeInGlobalAddressList">IncludeInGlobalAddressList</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.ipAllowlist">IpAllowlist</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isAdmin">IsAdmin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isDelegatedAdmin">IsDelegatedAdmin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isEnforcedIn2StepVerification">IsEnforcedIn2StepVerification</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isEnrolledIn2StepVerification">IsEnrolledIn2StepVerification</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isMailboxSetup">IsMailboxSetup</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.keywords">Keywords</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList">DataGoogleworkspaceUsersUsersKeywordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.languages">Languages</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList">DataGoogleworkspaceUsersUsersLanguagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.lastLoginTime">LastLoginTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList">DataGoogleworkspaceUsersUsersLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.name">Name</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList">DataGoogleworkspaceUsersUsersNameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.nonEditableAliases">NonEditableAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.organizations">Organizations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList">DataGoogleworkspaceUsersUsersOrganizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.orgUnitPath">OrgUnitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.phones">Phones</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList">DataGoogleworkspaceUsersUsersPhonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.posixAccounts">PosixAccounts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList">DataGoogleworkspaceUsersUsersPosixAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.primaryEmail">PrimaryEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.recoveryEmail">RecoveryEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.recoveryPhone">RecoveryPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.relations">Relations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList">DataGoogleworkspaceUsersUsersRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList">DataGoogleworkspaceUsersUsersSshPublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.suspended">Suspended</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.suspensionReason">SuspensionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.thumbnailPhotoEtag">ThumbnailPhotoEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.thumbnailPhotoUrl">ThumbnailPhotoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.websites">Websites</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList">DataGoogleworkspaceUsersUsersWebsitesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsers">DataGoogleworkspaceUsersUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.addresses"></a>

```csharp
public DataGoogleworkspaceUsersUsersAddressesList Addresses { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList">DataGoogleworkspaceUsersUsersAddressesList</a>

---

##### `AgreedToTerms`<sup>Required</sup> <a name="AgreedToTerms" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.agreedToTerms"></a>

```csharp
public IResolvable AgreedToTerms { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.aliases"></a>

```csharp
public string[] Aliases { get; }
```

- *Type:* string[]

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.archived"></a>

```csharp
public IResolvable Archived { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ChangePasswordAtNextLogin`<sup>Required</sup> <a name="ChangePasswordAtNextLogin" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.changePasswordAtNextLogin"></a>

```csharp
public IResolvable ChangePasswordAtNextLogin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `CustomerId`<sup>Required</sup> <a name="CustomerId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.customerId"></a>

```csharp
public string CustomerId { get; }
```

- *Type:* string

---

##### `CustomSchemas`<sup>Required</sup> <a name="CustomSchemas" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.customSchemas"></a>

```csharp
public DataGoogleworkspaceUsersUsersCustomSchemasList CustomSchemas { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList">DataGoogleworkspaceUsersUsersCustomSchemasList</a>

---

##### `DeletionTime`<sup>Required</sup> <a name="DeletionTime" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.deletionTime"></a>

```csharp
public string DeletionTime { get; }
```

- *Type:* string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.emails"></a>

```csharp
public DataGoogleworkspaceUsersUsersEmailsList Emails { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList">DataGoogleworkspaceUsersUsersEmailsList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ExternalIds`<sup>Required</sup> <a name="ExternalIds" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.externalIds"></a>

```csharp
public DataGoogleworkspaceUsersUsersExternalIdsList ExternalIds { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList">DataGoogleworkspaceUsersUsersExternalIdsList</a>

---

##### `HashFunction`<sup>Required</sup> <a name="HashFunction" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.hashFunction"></a>

```csharp
public string HashFunction { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ims`<sup>Required</sup> <a name="Ims" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.ims"></a>

```csharp
public DataGoogleworkspaceUsersUsersImsList Ims { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList">DataGoogleworkspaceUsersUsersImsList</a>

---

##### `IncludeInGlobalAddressList`<sup>Required</sup> <a name="IncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.includeInGlobalAddressList"></a>

```csharp
public IResolvable IncludeInGlobalAddressList { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IpAllowlist`<sup>Required</sup> <a name="IpAllowlist" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.ipAllowlist"></a>

```csharp
public IResolvable IpAllowlist { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsAdmin`<sup>Required</sup> <a name="IsAdmin" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isAdmin"></a>

```csharp
public IResolvable IsAdmin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDelegatedAdmin`<sup>Required</sup> <a name="IsDelegatedAdmin" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isDelegatedAdmin"></a>

```csharp
public IResolvable IsDelegatedAdmin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsEnforcedIn2StepVerification`<sup>Required</sup> <a name="IsEnforcedIn2StepVerification" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isEnforcedIn2StepVerification"></a>

```csharp
public IResolvable IsEnforcedIn2StepVerification { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsEnrolledIn2StepVerification`<sup>Required</sup> <a name="IsEnrolledIn2StepVerification" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isEnrolledIn2StepVerification"></a>

```csharp
public IResolvable IsEnrolledIn2StepVerification { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMailboxSetup`<sup>Required</sup> <a name="IsMailboxSetup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isMailboxSetup"></a>

```csharp
public IResolvable IsMailboxSetup { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.keywords"></a>

```csharp
public DataGoogleworkspaceUsersUsersKeywordsList Keywords { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList">DataGoogleworkspaceUsersUsersKeywordsList</a>

---

##### `Languages`<sup>Required</sup> <a name="Languages" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.languages"></a>

```csharp
public DataGoogleworkspaceUsersUsersLanguagesList Languages { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList">DataGoogleworkspaceUsersUsersLanguagesList</a>

---

##### `LastLoginTime`<sup>Required</sup> <a name="LastLoginTime" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.lastLoginTime"></a>

```csharp
public string LastLoginTime { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.locations"></a>

```csharp
public DataGoogleworkspaceUsersUsersLocationsList Locations { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList">DataGoogleworkspaceUsersUsersLocationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.name"></a>

```csharp
public DataGoogleworkspaceUsersUsersNameList Name { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList">DataGoogleworkspaceUsersUsersNameList</a>

---

##### `NonEditableAliases`<sup>Required</sup> <a name="NonEditableAliases" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.nonEditableAliases"></a>

```csharp
public string[] NonEditableAliases { get; }
```

- *Type:* string[]

---

##### `Organizations`<sup>Required</sup> <a name="Organizations" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.organizations"></a>

```csharp
public DataGoogleworkspaceUsersUsersOrganizationsList Organizations { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList">DataGoogleworkspaceUsersUsersOrganizationsList</a>

---

##### `OrgUnitPath`<sup>Required</sup> <a name="OrgUnitPath" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.orgUnitPath"></a>

```csharp
public string OrgUnitPath { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Phones`<sup>Required</sup> <a name="Phones" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.phones"></a>

```csharp
public DataGoogleworkspaceUsersUsersPhonesList Phones { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList">DataGoogleworkspaceUsersUsersPhonesList</a>

---

##### `PosixAccounts`<sup>Required</sup> <a name="PosixAccounts" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.posixAccounts"></a>

```csharp
public DataGoogleworkspaceUsersUsersPosixAccountsList PosixAccounts { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList">DataGoogleworkspaceUsersUsersPosixAccountsList</a>

---

##### `PrimaryEmail`<sup>Required</sup> <a name="PrimaryEmail" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.primaryEmail"></a>

```csharp
public string PrimaryEmail { get; }
```

- *Type:* string

---

##### `RecoveryEmail`<sup>Required</sup> <a name="RecoveryEmail" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.recoveryEmail"></a>

```csharp
public string RecoveryEmail { get; }
```

- *Type:* string

---

##### `RecoveryPhone`<sup>Required</sup> <a name="RecoveryPhone" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.recoveryPhone"></a>

```csharp
public string RecoveryPhone { get; }
```

- *Type:* string

---

##### `Relations`<sup>Required</sup> <a name="Relations" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.relations"></a>

```csharp
public DataGoogleworkspaceUsersUsersRelationsList Relations { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList">DataGoogleworkspaceUsersUsersRelationsList</a>

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.sshPublicKeys"></a>

```csharp
public DataGoogleworkspaceUsersUsersSshPublicKeysList SshPublicKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList">DataGoogleworkspaceUsersUsersSshPublicKeysList</a>

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.suspended"></a>

```csharp
public IResolvable Suspended { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SuspensionReason`<sup>Required</sup> <a name="SuspensionReason" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.suspensionReason"></a>

```csharp
public string SuspensionReason { get; }
```

- *Type:* string

---

##### `ThumbnailPhotoEtag`<sup>Required</sup> <a name="ThumbnailPhotoEtag" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.thumbnailPhotoEtag"></a>

```csharp
public string ThumbnailPhotoEtag { get; }
```

- *Type:* string

---

##### `ThumbnailPhotoUrl`<sup>Required</sup> <a name="ThumbnailPhotoUrl" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.thumbnailPhotoUrl"></a>

```csharp
public string ThumbnailPhotoUrl { get; }
```

- *Type:* string

---

##### `Websites`<sup>Required</sup> <a name="Websites" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.websites"></a>

```csharp
public DataGoogleworkspaceUsersUsersWebsitesList Websites { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList">DataGoogleworkspaceUsersUsersWebsitesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsers">DataGoogleworkspaceUsersUsers</a>

---


### DataGoogleworkspaceUsersUsersPhonesList <a name="DataGoogleworkspaceUsersUsersPhonesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersPhonesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersPhonesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersPhonesOutputReference <a name="DataGoogleworkspaceUsersUsersPhonesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersPhonesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.primary">Primary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhones">DataGoogleworkspaceUsersUsersPhones</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.primary"></a>

```csharp
public IResolvable Primary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersPhones InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhones">DataGoogleworkspaceUsersUsersPhones</a>

---


### DataGoogleworkspaceUsersUsersPosixAccountsList <a name="DataGoogleworkspaceUsersUsersPosixAccountsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersPosixAccountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersPosixAccountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersPosixAccountsOutputReference <a name="DataGoogleworkspaceUsersUsersPosixAccountsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersPosixAccountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.gecos">Gecos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.gid">Gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.homeDirectory">HomeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.operatingSystemType">OperatingSystemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.primary">Primary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.shell">Shell</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.systemId">SystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccounts">DataGoogleworkspaceUsersUsersPosixAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Gecos`<sup>Required</sup> <a name="Gecos" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.gecos"></a>

```csharp
public string Gecos { get; }
```

- *Type:* string

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.gid"></a>

```csharp
public string Gid { get; }
```

- *Type:* string

---

##### `HomeDirectory`<sup>Required</sup> <a name="HomeDirectory" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.homeDirectory"></a>

```csharp
public string HomeDirectory { get; }
```

- *Type:* string

---

##### `OperatingSystemType`<sup>Required</sup> <a name="OperatingSystemType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.operatingSystemType"></a>

```csharp
public string OperatingSystemType { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.primary"></a>

```csharp
public IResolvable Primary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.shell"></a>

```csharp
public string Shell { get; }
```

- *Type:* string

---

##### `SystemId`<sup>Required</sup> <a name="SystemId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.systemId"></a>

```csharp
public string SystemId { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersPosixAccounts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccounts">DataGoogleworkspaceUsersUsersPosixAccounts</a>

---


### DataGoogleworkspaceUsersUsersRelationsList <a name="DataGoogleworkspaceUsersUsersRelationsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersRelationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersRelationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersRelationsOutputReference <a name="DataGoogleworkspaceUsersUsersRelationsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersRelationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelations">DataGoogleworkspaceUsersUsersRelations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersRelations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelations">DataGoogleworkspaceUsersUsersRelations</a>

---


### DataGoogleworkspaceUsersUsersSshPublicKeysList <a name="DataGoogleworkspaceUsersUsersSshPublicKeysList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersSshPublicKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference <a name="DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.expirationTimeUsec">ExpirationTimeUsec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeys">DataGoogleworkspaceUsersUsersSshPublicKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationTimeUsec`<sup>Required</sup> <a name="ExpirationTimeUsec" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.expirationTimeUsec"></a>

```csharp
public string ExpirationTimeUsec { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersSshPublicKeys InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeys">DataGoogleworkspaceUsersUsersSshPublicKeys</a>

---


### DataGoogleworkspaceUsersUsersWebsitesList <a name="DataGoogleworkspaceUsersUsersWebsitesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersWebsitesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.get"></a>

```csharp
private DataGoogleworkspaceUsersUsersWebsitesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceUsersUsersWebsitesOutputReference <a name="DataGoogleworkspaceUsersUsersWebsitesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceUsersUsersWebsitesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.customType">CustomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.primary">Primary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsites">DataGoogleworkspaceUsersUsersWebsites</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomType`<sup>Required</sup> <a name="CustomType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.customType"></a>

```csharp
public string CustomType { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.primary"></a>

```csharp
public IResolvable Primary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceUsersUsersWebsites InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsites">DataGoogleworkspaceUsersUsersWebsites</a>

---



