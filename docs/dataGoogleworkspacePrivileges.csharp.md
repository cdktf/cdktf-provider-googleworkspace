# `dataGoogleworkspacePrivileges` Submodule <a name="`dataGoogleworkspacePrivileges` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspacePrivileges <a name="DataGoogleworkspacePrivileges" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/privileges googleworkspace_privileges}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspacePrivileges(Construct Scope, string Id, DataGoogleworkspacePrivilegesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig">DataGoogleworkspacePrivilegesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig">DataGoogleworkspacePrivilegesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleworkspacePrivileges resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspacePrivileges.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspacePrivileges.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspacePrivileges.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspacePrivileges.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleworkspacePrivileges resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleworkspacePrivileges to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleworkspacePrivileges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/privileges#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleworkspacePrivileges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.items">Items</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList">DataGoogleworkspacePrivilegesItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.items"></a>

```csharp
public DataGoogleworkspacePrivilegesItemsList Items { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList">DataGoogleworkspacePrivilegesItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspacePrivilegesConfig <a name="DataGoogleworkspacePrivilegesConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspacePrivilegesConfig {
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
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/privileges#id DataGoogleworkspacePrivileges#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/privileges#id DataGoogleworkspacePrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleworkspacePrivilegesItems <a name="DataGoogleworkspacePrivilegesItems" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspacePrivilegesItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleworkspacePrivilegesItemsList <a name="DataGoogleworkspacePrivilegesItemsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspacePrivilegesItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.get"></a>

```csharp
private DataGoogleworkspacePrivilegesItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspacePrivilegesItemsOutputReference <a name="DataGoogleworkspacePrivilegesItemsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspacePrivilegesItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.isOrgUnitScopable">IsOrgUnitScopable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.privilegeName">PrivilegeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems">DataGoogleworkspacePrivilegesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `IsOrgUnitScopable`<sup>Required</sup> <a name="IsOrgUnitScopable" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.isOrgUnitScopable"></a>

```csharp
public IResolvable IsOrgUnitScopable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PrivilegeName`<sup>Required</sup> <a name="PrivilegeName" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.privilegeName"></a>

```csharp
public string PrivilegeName { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspacePrivilegesItems InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems">DataGoogleworkspacePrivilegesItems</a>

---



