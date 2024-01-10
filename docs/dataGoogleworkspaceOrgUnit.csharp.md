# `dataGoogleworkspaceOrgUnit` Submodule <a name="`dataGoogleworkspaceOrgUnit` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceOrgUnit <a name="DataGoogleworkspaceOrgUnit" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/org_unit googleworkspace_org_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceOrgUnit(Construct Scope, string Id, DataGoogleworkspaceOrgUnitConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig">DataGoogleworkspaceOrgUnitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig">DataGoogleworkspaceOrgUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.resetOrgUnitId">ResetOrgUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.resetOrgUnitPath">ResetOrgUnitPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetOrgUnitId` <a name="ResetOrgUnitId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.resetOrgUnitId"></a>

```csharp
private void ResetOrgUnitId()
```

##### `ResetOrgUnitPath` <a name="ResetOrgUnitPath" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.resetOrgUnitPath"></a>

```csharp
private void ResetOrgUnitPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleworkspaceOrgUnit resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceOrgUnit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceOrgUnit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceOrgUnit.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceOrgUnit.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleworkspaceOrgUnit resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleworkspaceOrgUnit to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleworkspaceOrgUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/org_unit#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleworkspaceOrgUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.blockInheritance">BlockInheritance</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.parentOrgUnitId">ParentOrgUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.parentOrgUnitPath">ParentOrgUnitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitIdInput">OrgUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitPathInput">OrgUnitPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitId">OrgUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitPath">OrgUnitPath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BlockInheritance`<sup>Required</sup> <a name="BlockInheritance" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.blockInheritance"></a>

```csharp
public IResolvable BlockInheritance { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentOrgUnitId`<sup>Required</sup> <a name="ParentOrgUnitId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.parentOrgUnitId"></a>

```csharp
public string ParentOrgUnitId { get; }
```

- *Type:* string

---

##### `ParentOrgUnitPath`<sup>Required</sup> <a name="ParentOrgUnitPath" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.parentOrgUnitPath"></a>

```csharp
public string ParentOrgUnitPath { get; }
```

- *Type:* string

---

##### `OrgUnitIdInput`<sup>Optional</sup> <a name="OrgUnitIdInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitIdInput"></a>

```csharp
public string OrgUnitIdInput { get; }
```

- *Type:* string

---

##### `OrgUnitPathInput`<sup>Optional</sup> <a name="OrgUnitPathInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitPathInput"></a>

```csharp
public string OrgUnitPathInput { get; }
```

- *Type:* string

---

##### `OrgUnitId`<sup>Required</sup> <a name="OrgUnitId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitId"></a>

```csharp
public string OrgUnitId { get; }
```

- *Type:* string

---

##### `OrgUnitPath`<sup>Required</sup> <a name="OrgUnitPath" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitPath"></a>

```csharp
public string OrgUnitPath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceOrgUnitConfig <a name="DataGoogleworkspaceOrgUnitConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceOrgUnitConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OrgUnitId = null,
    string OrgUnitPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.orgUnitId">OrgUnitId</a></code> | <code>string</code> | The unique ID of the organizational unit. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.orgUnitPath">OrgUnitPath</a></code> | <code>string</code> | The full path to the organizational unit. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OrgUnitId`<sup>Optional</sup> <a name="OrgUnitId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.orgUnitId"></a>

```csharp
public string OrgUnitId { get; set; }
```

- *Type:* string

The unique ID of the organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/org_unit#org_unit_id DataGoogleworkspaceOrgUnit#org_unit_id}

---

##### `OrgUnitPath`<sup>Optional</sup> <a name="OrgUnitPath" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.orgUnitPath"></a>

```csharp
public string OrgUnitPath { get; set; }
```

- *Type:* string

The full path to the organizational unit.

The orgUnitPath is a derived property. When listed, it is derived from parentOrgunitPath and organizational unit's name. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an orgUnitPath, either update the name of the organization or the parentOrgunitPath. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [chromeosdevices.update a user](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/org_unit#org_unit_path DataGoogleworkspaceOrgUnit#org_unit_path}

---



