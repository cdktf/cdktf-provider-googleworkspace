# `data_googleworkspace_privileges`

Refer to the Terraform Registory for docs: [`data_googleworkspace_privileges`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/privileges).

# `dataGoogleworkspacePrivileges` Submodule <a name="`dataGoogleworkspacePrivileges` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspacePrivileges <a name="DataGoogleworkspacePrivileges" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/privileges googleworkspace_privileges}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/datagoogleworkspaceprivileges"

datagoogleworkspaceprivileges.NewDataGoogleworkspacePrivileges(scope Construct, id *string, config DataGoogleworkspacePrivilegesConfig) DataGoogleworkspacePrivileges
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig">DataGoogleworkspacePrivilegesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig">DataGoogleworkspacePrivilegesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/datagoogleworkspaceprivileges"

datagoogleworkspaceprivileges.DataGoogleworkspacePrivileges_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/datagoogleworkspaceprivileges"

datagoogleworkspaceprivileges.DataGoogleworkspacePrivileges_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/datagoogleworkspaceprivileges"

datagoogleworkspaceprivileges.DataGoogleworkspacePrivileges_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.items">Items</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList">DataGoogleworkspacePrivilegesItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.items"></a>

```go
func Items() DataGoogleworkspacePrivilegesItemsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList">DataGoogleworkspacePrivilegesItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspacePrivilegesConfig <a name="DataGoogleworkspacePrivilegesConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/datagoogleworkspaceprivileges"

&datagoogleworkspaceprivileges.DataGoogleworkspacePrivilegesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/privileges#id DataGoogleworkspacePrivileges#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/privileges#id DataGoogleworkspacePrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleworkspacePrivilegesItems <a name="DataGoogleworkspacePrivilegesItems" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/datagoogleworkspaceprivileges"

&datagoogleworkspaceprivileges.DataGoogleworkspacePrivilegesItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleworkspacePrivilegesItemsList <a name="DataGoogleworkspacePrivilegesItemsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/datagoogleworkspaceprivileges"

datagoogleworkspaceprivileges.NewDataGoogleworkspacePrivilegesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleworkspacePrivilegesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.get"></a>

```go
func Get(index *f64) DataGoogleworkspacePrivilegesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleworkspacePrivilegesItemsOutputReference <a name="DataGoogleworkspacePrivilegesItemsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/datagoogleworkspaceprivileges"

datagoogleworkspaceprivileges.NewDataGoogleworkspacePrivilegesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleworkspacePrivilegesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.isOrgUnitScopable">IsOrgUnitScopable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.privilegeName">PrivilegeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems">DataGoogleworkspacePrivilegesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IsOrgUnitScopable`<sup>Required</sup> <a name="IsOrgUnitScopable" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.isOrgUnitScopable"></a>

```go
func IsOrgUnitScopable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PrivilegeName`<sup>Required</sup> <a name="PrivilegeName" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.privilegeName"></a>

```go
func PrivilegeName() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleworkspacePrivilegesItems
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems">DataGoogleworkspacePrivilegesItems</a>

---



