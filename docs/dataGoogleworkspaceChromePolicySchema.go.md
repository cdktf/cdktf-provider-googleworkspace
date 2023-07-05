# `data_googleworkspace_chrome_policy_schema`

Refer to the Terraform Registory for docs: [`data_googleworkspace_chrome_policy_schema`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema).

# `dataGoogleworkspaceChromePolicySchema` Submodule <a name="`dataGoogleworkspaceChromePolicySchema` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceChromePolicySchema <a name="DataGoogleworkspaceChromePolicySchema" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema googleworkspace_chrome_policy_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.NewDataGoogleworkspaceChromePolicySchema(scope Construct, id *string, config DataGoogleworkspaceChromePolicySchemaConfig) DataGoogleworkspaceChromePolicySchema
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig">DataGoogleworkspaceChromePolicySchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.DataGoogleworkspaceChromePolicySchema_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.DataGoogleworkspaceChromePolicySchema_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.DataGoogleworkspaceChromePolicySchema_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.accessRestrictions">AccessRestrictions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.additionalTargetKeyNames">AdditionalTargetKeyNames</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.definition">Definition</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList">DataGoogleworkspaceChromePolicySchemaDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fieldDescriptions">FieldDescriptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.notices">Notices</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList">DataGoogleworkspaceChromePolicySchemaNoticesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.policyDescription">PolicyDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.supportUri">SupportUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessRestrictions`<sup>Required</sup> <a name="AccessRestrictions" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.accessRestrictions"></a>

```go
func AccessRestrictions() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalTargetKeyNames`<sup>Required</sup> <a name="AdditionalTargetKeyNames" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.additionalTargetKeyNames"></a>

```go
func AdditionalTargetKeyNames() DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList</a>

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.definition"></a>

```go
func Definition() DataGoogleworkspaceChromePolicySchemaDefinitionList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList">DataGoogleworkspaceChromePolicySchemaDefinitionList</a>

---

##### `FieldDescriptions`<sup>Required</sup> <a name="FieldDescriptions" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fieldDescriptions"></a>

```go
func FieldDescriptions() *string
```

- *Type:* *string

---

##### `Notices`<sup>Required</sup> <a name="Notices" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.notices"></a>

```go
func Notices() DataGoogleworkspaceChromePolicySchemaNoticesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList">DataGoogleworkspaceChromePolicySchemaNoticesList</a>

---

##### `PolicyDescription`<sup>Required</sup> <a name="PolicyDescription" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.policyDescription"></a>

```go
func PolicyDescription() *string
```

- *Type:* *string

---

##### `SupportUri`<sup>Required</sup> <a name="SupportUri" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.supportUri"></a>

```go
func SupportUri() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames <a name="DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

&datagoogleworkspacechromepolicyschema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames {

}
```


### DataGoogleworkspaceChromePolicySchemaConfig <a name="DataGoogleworkspaceChromePolicySchemaConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

&datagoogleworkspacechromepolicyschema.DataGoogleworkspaceChromePolicySchemaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SchemaName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | The full qualified name of the policy schema. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#id DataGoogleworkspaceChromePolicySchema#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

The full qualified name of the policy schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#schema_name DataGoogleworkspaceChromePolicySchema#schema_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#id DataGoogleworkspaceChromePolicySchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleworkspaceChromePolicySchemaDefinition <a name="DataGoogleworkspaceChromePolicySchemaDefinition" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

&datagoogleworkspacechromepolicyschema.DataGoogleworkspaceChromePolicySchemaDefinition {

}
```


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumType <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

&datagoogleworkspacechromepolicyschema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType {

}
```


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

&datagoogleworkspacechromepolicyschema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue {

}
```


### DataGoogleworkspaceChromePolicySchemaNotices <a name="DataGoogleworkspaceChromePolicySchemaNotices" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

&datagoogleworkspacechromepolicyschema.DataGoogleworkspaceChromePolicySchemaNotices {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList <a name="DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.NewDataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.get"></a>

```go
func Get(index *f64) DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference <a name="DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.NewDataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.keyDescription">KeyDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `KeyDescription`<sup>Required</sup> <a name="KeyDescription" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.keyDescription"></a>

```go
func KeyDescription() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames</a>

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.NewDataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.get"></a>

```go
func Get(index *f64) DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.NewDataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType">DataGoogleworkspaceChromePolicySchemaDefinitionEnumType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.value"></a>

```go
func Value() DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleworkspaceChromePolicySchemaDefinitionEnumType
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType">DataGoogleworkspaceChromePolicySchemaDefinitionEnumType</a>

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.NewDataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.get"></a>

```go
func Get(index *f64) DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.NewDataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue</a>

---


### DataGoogleworkspaceChromePolicySchemaDefinitionList <a name="DataGoogleworkspaceChromePolicySchemaDefinitionList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.NewDataGoogleworkspaceChromePolicySchemaDefinitionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleworkspaceChromePolicySchemaDefinitionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.get"></a>

```go
func Get(index *f64) DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference <a name="DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.NewDataGoogleworkspaceChromePolicySchemaDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.enumType">EnumType</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.messageType">MessageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.package">Package</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.syntax">Syntax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition">DataGoogleworkspaceChromePolicySchemaDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnumType`<sup>Required</sup> <a name="EnumType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.enumType"></a>

```go
func EnumType() DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList</a>

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.messageType"></a>

```go
func MessageType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.package"></a>

```go
func Package() *string
```

- *Type:* *string

---

##### `Syntax`<sup>Required</sup> <a name="Syntax" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.syntax"></a>

```go
func Syntax() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleworkspaceChromePolicySchemaDefinition
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition">DataGoogleworkspaceChromePolicySchemaDefinition</a>

---


### DataGoogleworkspaceChromePolicySchemaNoticesList <a name="DataGoogleworkspaceChromePolicySchemaNoticesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.NewDataGoogleworkspaceChromePolicySchemaNoticesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleworkspaceChromePolicySchemaNoticesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.get"></a>

```go
func Get(index *f64) DataGoogleworkspaceChromePolicySchemaNoticesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleworkspaceChromePolicySchemaNoticesOutputReference <a name="DataGoogleworkspaceChromePolicySchemaNoticesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v6/datagoogleworkspacechromepolicyschema"

datagoogleworkspacechromepolicyschema.NewDataGoogleworkspaceChromePolicySchemaNoticesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleworkspaceChromePolicySchemaNoticesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.acknowledgementRequired">AcknowledgementRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeMessage">NoticeMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeValue">NoticeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices">DataGoogleworkspaceChromePolicySchemaNotices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcknowledgementRequired`<sup>Required</sup> <a name="AcknowledgementRequired" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.acknowledgementRequired"></a>

```go
func AcknowledgementRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `NoticeMessage`<sup>Required</sup> <a name="NoticeMessage" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeMessage"></a>

```go
func NoticeMessage() *string
```

- *Type:* *string

---

##### `NoticeValue`<sup>Required</sup> <a name="NoticeValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeValue"></a>

```go
func NoticeValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleworkspaceChromePolicySchemaNotices
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices">DataGoogleworkspaceChromePolicySchemaNotices</a>

---



