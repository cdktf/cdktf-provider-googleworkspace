# `googleworkspace_schema`

Refer to the Terraform Registory for docs: [`googleworkspace_schema`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema).

# `schema` Submodule <a name="`schema` Submodule" id="@cdktf/provider-googleworkspace.schema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Schema <a name="Schema" id="@cdktf/provider-googleworkspace.schema.Schema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema googleworkspace_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.schema.Schema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/schema"

schema.NewSchema(scope Construct, id *string, config SchemaConfig) Schema
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig">SchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.schema.Schema.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.schema.Schema.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-googleworkspace.schema.Schema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig">SchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.schema.Schema.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.schema.Schema.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.schema.Schema.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.schema.Schema.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.schema.Schema.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.schema.Schema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.schema.Schema.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.schema.Schema.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.schema.Schema.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFields` <a name="PutFields" id="@cdktf/provider-googleworkspace.schema.Schema.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.schema.Schema.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-googleworkspace.schema.Schema.putTimeouts"></a>

```go
func PutTimeouts(value SchemaTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.schema.Schema.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts">SchemaTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-googleworkspace.schema.Schema.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-googleworkspace.schema.Schema.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.schema.Schema.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/schema"

schema.Schema_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.schema.Schema.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.schema.Schema.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/schema"

schema.Schema_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.schema.Schema.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-googleworkspace.schema.Schema.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/schema"

schema.Schema_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.schema.Schema.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.fields">Fields</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList">SchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference">SchemaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.schema.Schema.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.schema.Schema.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.schema.Schema.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.schema.Schema.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.schema.Schema.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.schema.Schema.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.schema.Schema.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.schema.Schema.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.schema.Schema.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.schema.Schema.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.schema.Schema.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.schema.Schema.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.schema.Schema.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.schema.Schema.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-googleworkspace.schema.Schema.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-googleworkspace.schema.Schema.property.fields"></a>

```go
func Fields() SchemaFieldsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList">SchemaFieldsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.schema.Schema.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-googleworkspace.schema.Schema.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-googleworkspace.schema.Schema.property.timeouts"></a>

```go
func Timeouts() SchemaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference">SchemaTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-googleworkspace.schema.Schema.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-googleworkspace.schema.Schema.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-googleworkspace.schema.Schema.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-googleworkspace.schema.Schema.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-googleworkspace.schema.Schema.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-googleworkspace.schema.Schema.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.schema.Schema.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SchemaConfig <a name="SchemaConfig" id="@cdktf/provider-googleworkspace.schema.SchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/schema"

&schema.SchemaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Fields: interface{},
	SchemaName: *string,
	DisplayName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5.schema.SchemaTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.fields">Fields</a></code> | <code>interface{}</code> | fields block. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | The schema's name. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name for the schema. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts">SchemaTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#fields Schema#fields}

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

The schema's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#schema_name Schema#schema_name}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#display_name Schema#display_name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.timeouts"></a>

```go
Timeouts SchemaTimeouts
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts">SchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#timeouts Schema#timeouts}

---

### SchemaFields <a name="SchemaFields" id="@cdktf/provider-googleworkspace.schema.SchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.schema.SchemaFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/schema"

&schema.SchemaFields {
	FieldName: *string,
	FieldType: *string,
	DisplayName: *string,
	Indexed: interface{},
	MultiValued: interface{},
	NumericIndexingSpec: github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5.schema.SchemaFieldsNumericIndexingSpec,
	ReadAccessType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.fieldName">FieldName</a></code> | <code>*string</code> | The name of the field. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.fieldType">FieldType</a></code> | <code>*string</code> | The type of the field. Acceptable values are:  - `BOOL` - `DATE` - `DOUBLE` - `EMAIL` - `INT64` - `PHONE` - `STRING`. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.displayName">DisplayName</a></code> | <code>*string</code> | Display Name of the field. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.indexed">Indexed</a></code> | <code>interface{}</code> | Defaults to `true`. Boolean specifying whether the field is indexed or not. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.multiValued">MultiValued</a></code> | <code>interface{}</code> | Defaults to `false`. A boolean specifying whether this is a multi-valued field or not. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.numericIndexingSpec">NumericIndexingSpec</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a></code> | numeric_indexing_spec block. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.readAccessType">ReadAccessType</a></code> | <code>*string</code> | Defaults to `ALL_DOMAIN_USERS`. |

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.fieldName"></a>

```go
FieldName *string
```

- *Type:* *string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#field_name Schema#field_name}

---

##### `FieldType`<sup>Required</sup> <a name="FieldType" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.fieldType"></a>

```go
FieldType *string
```

- *Type:* *string

The type of the field. Acceptable values are:  - `BOOL` - `DATE` - `DOUBLE` - `EMAIL` - `INT64` - `PHONE` - `STRING`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#field_type Schema#field_type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#display_name Schema#display_name}

---

##### `Indexed`<sup>Optional</sup> <a name="Indexed" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.indexed"></a>

```go
Indexed interface{}
```

- *Type:* interface{}

Defaults to `true`. Boolean specifying whether the field is indexed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#indexed Schema#indexed}

---

##### `MultiValued`<sup>Optional</sup> <a name="MultiValued" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.multiValued"></a>

```go
MultiValued interface{}
```

- *Type:* interface{}

Defaults to `false`. A boolean specifying whether this is a multi-valued field or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#multi_valued Schema#multi_valued}

---

##### `NumericIndexingSpec`<sup>Optional</sup> <a name="NumericIndexingSpec" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.numericIndexingSpec"></a>

```go
NumericIndexingSpec SchemaFieldsNumericIndexingSpec
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a>

numeric_indexing_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#numeric_indexing_spec Schema#numeric_indexing_spec}

---

##### `ReadAccessType`<sup>Optional</sup> <a name="ReadAccessType" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.readAccessType"></a>

```go
ReadAccessType *string
```

- *Type:* *string

Defaults to `ALL_DOMAIN_USERS`.

Specifies who can view values of this field. See Retrieve users as a non-administrator for more information. Acceptable values are:

* `ADMINS_AND_SELF`
* `ALL_DOMAIN_USERS`
  Note: It may take up to 24 hours for changes to this field to be reflected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#read_access_type Schema#read_access_type}

---

### SchemaFieldsNumericIndexingSpec <a name="SchemaFieldsNumericIndexingSpec" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/schema"

&schema.SchemaFieldsNumericIndexingSpec {
	MaxValue: *f64,
	MinValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec.property.maxValue">MaxValue</a></code> | <code>*f64</code> | Maximum value of this field. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec.property.minValue">MinValue</a></code> | <code>*f64</code> | Minimum value of this field. |

---

##### `MaxValue`<sup>Optional</sup> <a name="MaxValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec.property.maxValue"></a>

```go
MaxValue *f64
```

- *Type:* *f64

Maximum value of this field.

This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#max_value Schema#max_value}

---

##### `MinValue`<sup>Optional</sup> <a name="MinValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec.property.minValue"></a>

```go
MinValue *f64
```

- *Type:* *f64

Minimum value of this field.

This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#min_value Schema#min_value}

---

### SchemaTimeouts <a name="SchemaTimeouts" id="@cdktf/provider-googleworkspace.schema.SchemaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.schema.SchemaTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/schema"

&schema.SchemaTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#create Schema#create}. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#delete Schema#delete}. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#update Schema#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-googleworkspace.schema.SchemaTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#create Schema#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-googleworkspace.schema.SchemaTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#delete Schema#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-googleworkspace.schema.SchemaTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#update Schema#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SchemaFieldsList <a name="SchemaFieldsList" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/schema"

schema.NewSchemaFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SchemaFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.get"></a>

```go
func Get(index *f64) SchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchemaFieldsNumericIndexingSpecOutputReference <a name="SchemaFieldsNumericIndexingSpecOutputReference" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/schema"

schema.NewSchemaFieldsNumericIndexingSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchemaFieldsNumericIndexingSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resetMaxValue">ResetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resetMinValue">ResetMinValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxValue` <a name="ResetMaxValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resetMaxValue"></a>

```go
func ResetMaxValue()
```

##### `ResetMinValue` <a name="ResetMinValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resetMinValue"></a>

```go
func ResetMinValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.maxValueInput">MaxValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.minValueInput">MinValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.maxValue">MaxValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.minValue">MinValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValueInput`<sup>Optional</sup> <a name="MaxValueInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.maxValueInput"></a>

```go
func MaxValueInput() *f64
```

- *Type:* *f64

---

##### `MinValueInput`<sup>Optional</sup> <a name="MinValueInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.minValueInput"></a>

```go
func MinValueInput() *f64
```

- *Type:* *f64

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.maxValue"></a>

```go
func MaxValue() *f64
```

- *Type:* *f64

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.minValue"></a>

```go
func MinValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() SchemaFieldsNumericIndexingSpec
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a>

---


### SchemaFieldsOutputReference <a name="SchemaFieldsOutputReference" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/schema"

schema.NewSchemaFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SchemaFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.putNumericIndexingSpec">PutNumericIndexingSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetIndexed">ResetIndexed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetMultiValued">ResetMultiValued</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetNumericIndexingSpec">ResetNumericIndexingSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetReadAccessType">ResetReadAccessType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNumericIndexingSpec` <a name="PutNumericIndexingSpec" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.putNumericIndexingSpec"></a>

```go
func PutNumericIndexingSpec(value SchemaFieldsNumericIndexingSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.putNumericIndexingSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetIndexed` <a name="ResetIndexed" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetIndexed"></a>

```go
func ResetIndexed()
```

##### `ResetMultiValued` <a name="ResetMultiValued" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetMultiValued"></a>

```go
func ResetMultiValued()
```

##### `ResetNumericIndexingSpec` <a name="ResetNumericIndexingSpec" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetNumericIndexingSpec"></a>

```go
func ResetNumericIndexingSpec()
```

##### `ResetReadAccessType` <a name="ResetReadAccessType" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetReadAccessType"></a>

```go
func ResetReadAccessType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.numericIndexingSpec">NumericIndexingSpec</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference">SchemaFieldsNumericIndexingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldTypeInput">FieldTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.indexedInput">IndexedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.multiValuedInput">MultiValuedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.numericIndexingSpecInput">NumericIndexingSpecInput</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.readAccessTypeInput">ReadAccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldType">FieldType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.indexed">Indexed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.multiValued">MultiValued</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.readAccessType">ReadAccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldId"></a>

```go
func FieldId() *string
```

- *Type:* *string

---

##### `NumericIndexingSpec`<sup>Required</sup> <a name="NumericIndexingSpec" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.numericIndexingSpec"></a>

```go
func NumericIndexingSpec() SchemaFieldsNumericIndexingSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference">SchemaFieldsNumericIndexingSpecOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldNameInput"></a>

```go
func FieldNameInput() *string
```

- *Type:* *string

---

##### `FieldTypeInput`<sup>Optional</sup> <a name="FieldTypeInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldTypeInput"></a>

```go
func FieldTypeInput() *string
```

- *Type:* *string

---

##### `IndexedInput`<sup>Optional</sup> <a name="IndexedInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.indexedInput"></a>

```go
func IndexedInput() interface{}
```

- *Type:* interface{}

---

##### `MultiValuedInput`<sup>Optional</sup> <a name="MultiValuedInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.multiValuedInput"></a>

```go
func MultiValuedInput() interface{}
```

- *Type:* interface{}

---

##### `NumericIndexingSpecInput`<sup>Optional</sup> <a name="NumericIndexingSpecInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.numericIndexingSpecInput"></a>

```go
func NumericIndexingSpecInput() SchemaFieldsNumericIndexingSpec
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a>

---

##### `ReadAccessTypeInput`<sup>Optional</sup> <a name="ReadAccessTypeInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.readAccessTypeInput"></a>

```go
func ReadAccessTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `FieldType`<sup>Required</sup> <a name="FieldType" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldType"></a>

```go
func FieldType() *string
```

- *Type:* *string

---

##### `Indexed`<sup>Required</sup> <a name="Indexed" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.indexed"></a>

```go
func Indexed() interface{}
```

- *Type:* interface{}

---

##### `MultiValued`<sup>Required</sup> <a name="MultiValued" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.multiValued"></a>

```go
func MultiValued() interface{}
```

- *Type:* interface{}

---

##### `ReadAccessType`<sup>Required</sup> <a name="ReadAccessType" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.readAccessType"></a>

```go
func ReadAccessType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchemaTimeoutsOutputReference <a name="SchemaTimeoutsOutputReference" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/schema"

schema.NewSchemaTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchemaTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



