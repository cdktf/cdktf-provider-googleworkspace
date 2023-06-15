# `data_googleworkspace_group_member`

Refer to the Terraform Registory for docs: [`data_googleworkspace_group_member`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member).

# `dataGoogleworkspaceGroupMember` Submodule <a name="`dataGoogleworkspaceGroupMember` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceGroupMember <a name="DataGoogleworkspaceGroupMember" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member googleworkspace_group_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/datagoogleworkspacegroupmember"

datagoogleworkspacegroupmember.NewDataGoogleworkspaceGroupMember(scope Construct, id *string, config DataGoogleworkspaceGroupMemberConfig) DataGoogleworkspaceGroupMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig">DataGoogleworkspaceGroupMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig">DataGoogleworkspaceGroupMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetMemberId">ResetMemberId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetMemberId` <a name="ResetMemberId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetMemberId"></a>

```go
func ResetMemberId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/datagoogleworkspacegroupmember"

datagoogleworkspacegroupmember.DataGoogleworkspaceGroupMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/datagoogleworkspacegroupmember"

datagoogleworkspacegroupmember.DataGoogleworkspaceGroupMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/datagoogleworkspacegroupmember"

datagoogleworkspacegroupmember.DataGoogleworkspaceGroupMember_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.deliverySettings">DeliverySettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.memberIdInput">MemberIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.memberId">MemberId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DeliverySettings`<sup>Required</sup> <a name="DeliverySettings" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.deliverySettings"></a>

```go
func DeliverySettings() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `MemberIdInput`<sup>Optional</sup> <a name="MemberIdInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.memberIdInput"></a>

```go
func MemberIdInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.memberId"></a>

```go
func MemberId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceGroupMemberConfig <a name="DataGoogleworkspaceGroupMemberConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v5/datagoogleworkspacegroupmember"

&datagoogleworkspacegroupmember.DataGoogleworkspaceGroupMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupId: *string,
	Email: *string,
	MemberId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.groupId">GroupId</a></code> | <code>*string</code> | Identifies the group in the API request. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.email">Email</a></code> | <code>*string</code> | The member's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.memberId">MemberId</a></code> | <code>*string</code> | The unique ID of the group member. A member id can be used as a member request URI's memberKey. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Identifies the group in the API request.

The value can be the group's email address, group alias, or the unique group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#group_id DataGoogleworkspaceGroupMember#group_id}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

The member's email address.

A member can be a user or another group. This property is required when adding a member to a group. The email must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#email DataGoogleworkspaceGroupMember#email}

---

##### `MemberId`<sup>Optional</sup> <a name="MemberId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.memberId"></a>

```go
MemberId *string
```

- *Type:* *string

The unique ID of the group member. A member id can be used as a member request URI's memberKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#member_id DataGoogleworkspaceGroupMember#member_id}

---



