# `orgUnit` Submodule <a name="`orgUnit` Submodule" id="@cdktf/provider-googleworkspace.orgUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgUnit <a name="OrgUnit" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit"></a>

Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/r/org_unit googleworkspace_org_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new OrgUnit(Construct Scope, string Id, OrgUnitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig">OrgUnitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig">OrgUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetBlockInheritance">ResetBlockInheritance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetParentOrgUnitId">ResetParentOrgUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetParentOrgUnitPath">ResetParentOrgUnitPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBlockInheritance` <a name="ResetBlockInheritance" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetBlockInheritance"></a>

```csharp
private void ResetBlockInheritance()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetParentOrgUnitId` <a name="ResetParentOrgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetParentOrgUnitId"></a>

```csharp
private void ResetParentOrgUnitId()
```

##### `ResetParentOrgUnitPath` <a name="ResetParentOrgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetParentOrgUnitPath"></a>

```csharp
private void ResetParentOrgUnitPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

OrgUnit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

OrgUnit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

OrgUnit.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.orgUnitId">OrgUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.orgUnitPath">OrgUnitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.blockInheritanceInput">BlockInheritanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitIdInput">ParentOrgUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitPathInput">ParentOrgUnitPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.blockInheritance">BlockInheritance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitId">ParentOrgUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitPath">ParentOrgUnitPath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgUnitId`<sup>Required</sup> <a name="OrgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.orgUnitId"></a>

```csharp
public string OrgUnitId { get; }
```

- *Type:* string

---

##### `OrgUnitPath`<sup>Required</sup> <a name="OrgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.orgUnitPath"></a>

```csharp
public string OrgUnitPath { get; }
```

- *Type:* string

---

##### `BlockInheritanceInput`<sup>Optional</sup> <a name="BlockInheritanceInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.blockInheritanceInput"></a>

```csharp
public object BlockInheritanceInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentOrgUnitIdInput`<sup>Optional</sup> <a name="ParentOrgUnitIdInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitIdInput"></a>

```csharp
public string ParentOrgUnitIdInput { get; }
```

- *Type:* string

---

##### `ParentOrgUnitPathInput`<sup>Optional</sup> <a name="ParentOrgUnitPathInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitPathInput"></a>

```csharp
public string ParentOrgUnitPathInput { get; }
```

- *Type:* string

---

##### `BlockInheritance`<sup>Required</sup> <a name="BlockInheritance" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.blockInheritance"></a>

```csharp
public object BlockInheritance { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentOrgUnitId`<sup>Required</sup> <a name="ParentOrgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitId"></a>

```csharp
public string ParentOrgUnitId { get; }
```

- *Type:* string

---

##### `ParentOrgUnitPath`<sup>Required</sup> <a name="ParentOrgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitPath"></a>

```csharp
public string ParentOrgUnitPath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrgUnitConfig <a name="OrgUnitConfig" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new OrgUnitConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object BlockInheritance = null,
    string Description = null,
    string ParentOrgUnitId = null,
    string ParentOrgUnitPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.name">Name</a></code> | <code>string</code> | The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.blockInheritance">BlockInheritance</a></code> | <code>object</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.description">Description</a></code> | <code>string</code> | Description of the organizational unit. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.parentOrgUnitId">ParentOrgUnitId</a></code> | <code>string</code> | The unique ID of the parent organizational unit. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.parentOrgUnitPath">ParentOrgUnitPath</a></code> | <code>string</code> | The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/org_unit#name OrgUnit#name}

---

##### `BlockInheritance`<sup>Optional</sup> <a name="BlockInheritance" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.blockInheritance"></a>

```csharp
public object BlockInheritance { get; set; }
```

- *Type:* object

Defaults to `false`.

Determines if a sub-organizational unit can inherit the settings of the parent organization. False means a sub-organizational unit inherits the settings of the nearest parent organizational unit. For more information on inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/org_unit#block_inheritance OrgUnit#block_inheritance}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the organizational unit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/org_unit#description OrgUnit#description}

---

##### `ParentOrgUnitId`<sup>Optional</sup> <a name="ParentOrgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.parentOrgUnitId"></a>

```csharp
public string ParentOrgUnitId { get; set; }
```

- *Type:* string

The unique ID of the parent organizational unit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/org_unit#parent_org_unit_id OrgUnit#parent_org_unit_id}

---

##### `ParentOrgUnitPath`<sup>Optional</sup> <a name="ParentOrgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.parentOrgUnitPath"></a>

```csharp
public string ParentOrgUnitPath { get; set; }
```

- *Type:* string

The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/org_unit#parent_org_unit_path OrgUnit#parent_org_unit_path}

---



