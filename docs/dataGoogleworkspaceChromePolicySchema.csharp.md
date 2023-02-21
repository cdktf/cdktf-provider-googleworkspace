# `dataGoogleworkspaceChromePolicySchema` Submodule <a name="`dataGoogleworkspaceChromePolicySchema` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceChromePolicySchema <a name="DataGoogleworkspaceChromePolicySchema" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema"></a>

Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/d/chrome_policy_schema googleworkspace_chrome_policy_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchema(Construct Scope, string Id, DataGoogleworkspaceChromePolicySchemaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig">DataGoogleworkspaceChromePolicySchemaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig">DataGoogleworkspaceChromePolicySchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceChromePolicySchema.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceChromePolicySchema.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

DataGoogleworkspaceChromePolicySchema.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.accessRestrictions">AccessRestrictions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.additionalTargetKeyNames">AdditionalTargetKeyNames</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.definition">Definition</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList">DataGoogleworkspaceChromePolicySchemaDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fieldDescriptions">FieldDescriptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.notices">Notices</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList">DataGoogleworkspaceChromePolicySchemaNoticesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.policyDescription">PolicyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.supportUri">SupportUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccessRestrictions`<sup>Required</sup> <a name="AccessRestrictions" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.accessRestrictions"></a>

```csharp
public string[] AccessRestrictions { get; }
```

- *Type:* string[]

---

##### `AdditionalTargetKeyNames`<sup>Required</sup> <a name="AdditionalTargetKeyNames" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.additionalTargetKeyNames"></a>

```csharp
public DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList AdditionalTargetKeyNames { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList</a>

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.definition"></a>

```csharp
public DataGoogleworkspaceChromePolicySchemaDefinitionList Definition { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList">DataGoogleworkspaceChromePolicySchemaDefinitionList</a>

---

##### `FieldDescriptions`<sup>Required</sup> <a name="FieldDescriptions" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fieldDescriptions"></a>

```csharp
public string FieldDescriptions { get; }
```

- *Type:* string

---

##### `Notices`<sup>Required</sup> <a name="Notices" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.notices"></a>

```csharp
public DataGoogleworkspaceChromePolicySchemaNoticesList Notices { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList">DataGoogleworkspaceChromePolicySchemaNoticesList</a>

---

##### `PolicyDescription`<sup>Required</sup> <a name="PolicyDescription" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.policyDescription"></a>

```csharp
public string PolicyDescription { get; }
```

- *Type:* string

---

##### `SupportUri`<sup>Required</sup> <a name="SupportUri" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.supportUri"></a>

```csharp
public string SupportUri { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames <a name="DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames {

};
```


### DataGoogleworkspaceChromePolicySchemaConfig <a name="DataGoogleworkspaceChromePolicySchemaConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SchemaName,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | The full qualified name of the policy schema. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/chrome_policy_schema#id DataGoogleworkspaceChromePolicySchema#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The full qualified name of the policy schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/chrome_policy_schema#schema_name DataGoogleworkspaceChromePolicySchema#schema_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/chrome_policy_schema#id DataGoogleworkspaceChromePolicySchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleworkspaceChromePolicySchemaDefinition <a name="DataGoogleworkspaceChromePolicySchemaDefinition" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaDefinition {

};
```


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumType <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaDefinitionEnumType {

};
```


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue {

};
```


### DataGoogleworkspaceChromePolicySchemaNotices <a name="DataGoogleworkspaceChromePolicySchemaNotices" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaNotices {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList <a name="DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.get"></a>

```csharp
private DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference <a name="DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.keyDescription">KeyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `KeyDescription`<sup>Required</sup> <a name="KeyDescription" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.keyDescription"></a>

```csharp
public string KeyDescription { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames</a>

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.get"></a>

```csharp
private DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType">DataGoogleworkspaceChromePolicySchemaDefinitionEnumType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.value"></a>

```csharp
public DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList Value { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceChromePolicySchemaDefinitionEnumType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType">DataGoogleworkspaceChromePolicySchemaDefinitionEnumType</a>

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.get"></a>

```csharp
private DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue</a>

---


### DataGoogleworkspaceChromePolicySchemaDefinitionList <a name="DataGoogleworkspaceChromePolicySchemaDefinitionList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaDefinitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.get"></a>

```csharp
private DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference <a name="DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.enumType">EnumType</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.messageType">MessageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.package">Package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.syntax">Syntax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition">DataGoogleworkspaceChromePolicySchemaDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnumType`<sup>Required</sup> <a name="EnumType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.enumType"></a>

```csharp
public DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList EnumType { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList</a>

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.messageType"></a>

```csharp
public string MessageType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.package"></a>

```csharp
public string Package { get; }
```

- *Type:* string

---

##### `Syntax`<sup>Required</sup> <a name="Syntax" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.syntax"></a>

```csharp
public string Syntax { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceChromePolicySchemaDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition">DataGoogleworkspaceChromePolicySchemaDefinition</a>

---


### DataGoogleworkspaceChromePolicySchemaNoticesList <a name="DataGoogleworkspaceChromePolicySchemaNoticesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaNoticesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.get"></a>

```csharp
private DataGoogleworkspaceChromePolicySchemaNoticesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleworkspaceChromePolicySchemaNoticesOutputReference <a name="DataGoogleworkspaceChromePolicySchemaNoticesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new DataGoogleworkspaceChromePolicySchemaNoticesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.acknowledgementRequired">AcknowledgementRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeMessage">NoticeMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeValue">NoticeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices">DataGoogleworkspaceChromePolicySchemaNotices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcknowledgementRequired`<sup>Required</sup> <a name="AcknowledgementRequired" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.acknowledgementRequired"></a>

```csharp
public IResolvable AcknowledgementRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `NoticeMessage`<sup>Required</sup> <a name="NoticeMessage" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeMessage"></a>

```csharp
public string NoticeMessage { get; }
```

- *Type:* string

---

##### `NoticeValue`<sup>Required</sup> <a name="NoticeValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeValue"></a>

```csharp
public string NoticeValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleworkspaceChromePolicySchemaNotices InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices">DataGoogleworkspaceChromePolicySchemaNotices</a>

---



