# `googleworkspace_gmail_send_as_alias`

Refer to the Terraform Registory for docs: [`googleworkspace_gmail_send_as_alias`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias).

# `gmailSendAsAlias` Submodule <a name="`gmailSendAsAlias` Submodule" id="@cdktf/provider-googleworkspace.gmailSendAsAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GmailSendAsAlias <a name="GmailSendAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias googleworkspace_gmail_send_as_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/gmailsendasalias"

gmailsendasalias.NewGmailSendAsAlias(scope Construct, id *string, config GmailSendAsAliasConfig) GmailSendAsAlias
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig">GmailSendAsAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig">GmailSendAsAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa">PutSmtpMsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetReplyToAddress">ResetReplyToAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSignature">ResetSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSmtpMsa">ResetSmtpMsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetTreatAsAlias">ResetTreatAsAlias</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSmtpMsa` <a name="PutSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa"></a>

```go
func PutSmtpMsa(value GmailSendAsAliasSmtpMsa)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetIsDefault"></a>

```go
func ResetIsDefault()
```

##### `ResetReplyToAddress` <a name="ResetReplyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetReplyToAddress"></a>

```go
func ResetReplyToAddress()
```

##### `ResetSignature` <a name="ResetSignature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSignature"></a>

```go
func ResetSignature()
```

##### `ResetSmtpMsa` <a name="ResetSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSmtpMsa"></a>

```go
func ResetSmtpMsa()
```

##### `ResetTreatAsAlias` <a name="ResetTreatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetTreatAsAlias"></a>

```go
func ResetTreatAsAlias()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/gmailsendasalias"

gmailsendasalias.GmailSendAsAlias_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/gmailsendasalias"

gmailsendasalias.GmailSendAsAlias_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/gmailsendasalias"

gmailsendasalias.GmailSendAsAlias_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isPrimary">IsPrimary</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsa">SmtpMsa</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference">GmailSendAsAliasSmtpMsaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.verificationStatus">VerificationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefaultInput">IsDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmailInput">PrimaryEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddressInput">ReplyToAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmailInput">SendAsEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signatureInput">SignatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsaInput">SmtpMsaInput</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAliasInput">TreatAsAliasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmail">PrimaryEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddress">ReplyToAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmail">SendAsEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAlias">TreatAsAlias</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isPrimary"></a>

```go
func IsPrimary() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SmtpMsa`<sup>Required</sup> <a name="SmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsa"></a>

```go
func SmtpMsa() GmailSendAsAliasSmtpMsaOutputReference
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference">GmailSendAsAliasSmtpMsaOutputReference</a>

---

##### `VerificationStatus`<sup>Required</sup> <a name="VerificationStatus" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.verificationStatus"></a>

```go
func VerificationStatus() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefaultInput"></a>

```go
func IsDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryEmailInput`<sup>Optional</sup> <a name="PrimaryEmailInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmailInput"></a>

```go
func PrimaryEmailInput() *string
```

- *Type:* *string

---

##### `ReplyToAddressInput`<sup>Optional</sup> <a name="ReplyToAddressInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddressInput"></a>

```go
func ReplyToAddressInput() *string
```

- *Type:* *string

---

##### `SendAsEmailInput`<sup>Optional</sup> <a name="SendAsEmailInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmailInput"></a>

```go
func SendAsEmailInput() *string
```

- *Type:* *string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signatureInput"></a>

```go
func SignatureInput() *string
```

- *Type:* *string

---

##### `SmtpMsaInput`<sup>Optional</sup> <a name="SmtpMsaInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsaInput"></a>

```go
func SmtpMsaInput() GmailSendAsAliasSmtpMsa
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---

##### `TreatAsAliasInput`<sup>Optional</sup> <a name="TreatAsAliasInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAliasInput"></a>

```go
func TreatAsAliasInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefault"></a>

```go
func IsDefault() interface{}
```

- *Type:* interface{}

---

##### `PrimaryEmail`<sup>Required</sup> <a name="PrimaryEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmail"></a>

```go
func PrimaryEmail() *string
```

- *Type:* *string

---

##### `ReplyToAddress`<sup>Required</sup> <a name="ReplyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddress"></a>

```go
func ReplyToAddress() *string
```

- *Type:* *string

---

##### `SendAsEmail`<sup>Required</sup> <a name="SendAsEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmail"></a>

```go
func SendAsEmail() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `TreatAsAlias`<sup>Required</sup> <a name="TreatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAlias"></a>

```go
func TreatAsAlias() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GmailSendAsAliasConfig <a name="GmailSendAsAliasConfig" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/gmailsendasalias"

&gmailsendasalias.GmailSendAsAliasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PrimaryEmail: *string,
	SendAsEmail: *string,
	DisplayName: *string,
	IsDefault: interface{},
	ReplyToAddress: *string,
	Signature: *string,
	SmtpMsa: github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7.gmailSendAsAlias.GmailSendAsAliasSmtpMsa,
	TreatAsAlias: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.primaryEmail">PrimaryEmail</a></code> | <code>*string</code> | User's primary email address. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.sendAsEmail">SendAsEmail</a></code> | <code>*string</code> | The email address that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A name that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.replyToAddress">ReplyToAddress</a></code> | <code>*string</code> | An optional email address that is included in a 'Reply-To:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.signature">Signature</a></code> | <code>*string</code> | An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.smtpMsa">SmtpMsa</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | smtp_msa block. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.treatAsAlias">TreatAsAlias</a></code> | <code>interface{}</code> | Defaults to `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrimaryEmail`<sup>Required</sup> <a name="PrimaryEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.primaryEmail"></a>

```go
PrimaryEmail *string
```

- *Type:* *string

User's primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#primary_email GmailSendAsAlias#primary_email}

---

##### `SendAsEmail`<sup>Required</sup> <a name="SendAsEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.sendAsEmail"></a>

```go
SendAsEmail *string
```

- *Type:* *string

The email address that appears in the 'From:' header for mail sent using this alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#send_as_email GmailSendAsAlias#send_as_email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A name that appears in the 'From:' header for mail sent using this alias.

For custom 'from' addresses, when this is empty, Gmail will populate the 'From:' header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#display_name GmailSendAsAlias#display_name}

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.isDefault"></a>

```go
IsDefault interface{}
```

- *Type:* interface{}

Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply.

Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false to true for an address will result in this field becoming false for the other previous default address. Toggling an existing alias' default to false is not possible, another alias must be added/imported and toggled to true to remove the default from an existing alias. To avoid drift with Terraform, please change the previous default's config to false AFTER a new default is applied and perform a refresh to synchronize with remote state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#is_default GmailSendAsAlias#is_default}

---

##### `ReplyToAddress`<sup>Optional</sup> <a name="ReplyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.replyToAddress"></a>

```go
ReplyToAddress *string
```

- *Type:* *string

An optional email address that is included in a 'Reply-To:' header for mail sent using this alias.

If this is empty, Gmail will not generate a 'Reply-To:' header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#reply_to_address GmailSendAsAlias#reply_to_address}

---

##### `Signature`<sup>Optional</sup> <a name="Signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.signature"></a>

```go
Signature *string
```

- *Type:* *string

An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.

This signature is added to new emails only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#signature GmailSendAsAlias#signature}

---

##### `SmtpMsa`<sup>Optional</sup> <a name="SmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.smtpMsa"></a>

```go
SmtpMsa GmailSendAsAliasSmtpMsa
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

smtp_msa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#smtp_msa GmailSendAsAlias#smtp_msa}

---

##### `TreatAsAlias`<sup>Optional</sup> <a name="TreatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.treatAsAlias"></a>

```go
TreatAsAlias interface{}
```

- *Type:* interface{}

Defaults to `true`.

Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom 'from' aliases. See https://support.google.com/a/answer/1710338 for help on making this decision

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#treat_as_alias GmailSendAsAlias#treat_as_alias}

---

### GmailSendAsAliasSmtpMsa <a name="GmailSendAsAliasSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/gmailsendasalias"

&gmailsendasalias.GmailSendAsAliasSmtpMsa {
	Host: *string,
	Port: *f64,
	Password: *string,
	SecurityMode: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.host">Host</a></code> | <code>*string</code> | The hostname of the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.port">Port</a></code> | <code>*f64</code> | The port of the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.password">Password</a></code> | <code>*string</code> | The password that will be used for authentication with the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.securityMode">SecurityMode</a></code> | <code>*string</code> | Defaults to `securityModeUnspecified`. The protocol that will be used to secure communication with the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.username">Username</a></code> | <code>*string</code> | The username that will be used for authentication with the SMTP service. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.host"></a>

```go
Host *string
```

- *Type:* *string

The hostname of the SMTP service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#host GmailSendAsAlias#host}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port of the SMTP service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#port GmailSendAsAlias#port}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password that will be used for authentication with the SMTP service.

This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#password GmailSendAsAlias#password}

---

##### `SecurityMode`<sup>Optional</sup> <a name="SecurityMode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.securityMode"></a>

```go
SecurityMode *string
```

- *Type:* *string

Defaults to `securityModeUnspecified`. The protocol that will be used to secure communication with the SMTP service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#security_mode GmailSendAsAlias#security_mode}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username that will be used for authentication with the SMTP service.

This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#username GmailSendAsAlias#username}

---

## Classes <a name="Classes" id="Classes"></a>

### GmailSendAsAliasSmtpMsaOutputReference <a name="GmailSendAsAliasSmtpMsaOutputReference" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/gmailsendasalias"

gmailsendasalias.NewGmailSendAsAliasSmtpMsaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GmailSendAsAliasSmtpMsaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetSecurityMode">ResetSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetSecurityMode` <a name="ResetSecurityMode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetSecurityMode"></a>

```go
func ResetSecurityMode()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityModeInput">SecurityModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityMode">SecurityMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SecurityModeInput`<sup>Optional</sup> <a name="SecurityModeInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityModeInput"></a>

```go
func SecurityModeInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SecurityMode`<sup>Required</sup> <a name="SecurityMode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityMode"></a>

```go
func SecurityMode() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.internalValue"></a>

```go
func InternalValue() GmailSendAsAliasSmtpMsa
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---



