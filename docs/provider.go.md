# `provider`

Refer to the Terraform Registory for docs: [`googleworkspace`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-googleworkspace.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleworkspaceProvider <a name="GoogleworkspaceProvider" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs googleworkspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/provider"

provider.NewGoogleworkspaceProvider(scope Construct, id *string, config GoogleworkspaceProviderConfig) GoogleworkspaceProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig">GoogleworkspaceProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig">GoogleworkspaceProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCustomerId">ResetCustomerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetImpersonatedUserEmail">ResetImpersonatedUserEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetCustomerId` <a name="ResetCustomerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCustomerId"></a>

```go
func ResetCustomerId()
```

##### `ResetImpersonatedUserEmail` <a name="ResetImpersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetImpersonatedUserEmail"></a>

```go
func ResetImpersonatedUserEmail()
```

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOauthScopes"></a>

```go
func ResetOauthScopes()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleworkspaceProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/provider"

provider.GoogleworkspaceProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/provider"

provider.GoogleworkspaceProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/provider"

provider.GoogleworkspaceProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/provider"

provider.GoogleworkspaceProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleworkspaceProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleworkspaceProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleworkspaceProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleworkspaceProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentialsInput">CredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerIdInput">CustomerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmailInput">ImpersonatedUserEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopesInput">OauthScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentials">Credentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerId">CustomerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmail">ImpersonatedUserEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentialsInput"></a>

```go
func CredentialsInput() *string
```

- *Type:* *string

---

##### `CustomerIdInput`<sup>Optional</sup> <a name="CustomerIdInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerIdInput"></a>

```go
func CustomerIdInput() *string
```

- *Type:* *string

---

##### `ImpersonatedUserEmailInput`<sup>Optional</sup> <a name="ImpersonatedUserEmailInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmailInput"></a>

```go
func ImpersonatedUserEmailInput() *string
```

- *Type:* *string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopesInput"></a>

```go
func OauthScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentials"></a>

```go
func Credentials() *string
```

- *Type:* *string

---

##### `CustomerId`<sup>Optional</sup> <a name="CustomerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerId"></a>

```go
func CustomerId() *string
```

- *Type:* *string

---

##### `ImpersonatedUserEmail`<sup>Optional</sup> <a name="ImpersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmail"></a>

```go
func ImpersonatedUserEmail() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleworkspaceProviderConfig <a name="GoogleworkspaceProviderConfig" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/v7/provider"

&provider.GoogleworkspaceProviderConfig {
	AccessToken: *string,
	Alias: *string,
	Credentials: *string,
	CustomerId: *string,
	ImpersonatedUserEmail: *string,
	OauthScopes: *[]*string,
	ServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.accessToken">AccessToken</a></code> | <code>*string</code> | A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.credentials">Credentials</a></code> | <code>*string</code> | Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.customerId">CustomerId</a></code> | <code>*string</code> | The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.impersonatedUserEmail">ImpersonatedUserEmail</a></code> | <code>*string</code> | The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#access_token GoogleworkspaceProvider#access_token}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#alias GoogleworkspaceProvider#alias}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.credentials"></a>

```go
Credentials *string
```

- *Type:* *string

Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console).

If not provided, the application default credentials will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#credentials GoogleworkspaceProvider#credentials}

---

##### `CustomerId`<sup>Optional</sup> <a name="CustomerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.customerId"></a>

```go
CustomerId *string
```

- *Type:* *string

The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#customer_id GoogleworkspaceProvider#customer_id}

---

##### `ImpersonatedUserEmail`<sup>Optional</sup> <a name="ImpersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.impersonatedUserEmail"></a>

```go
ImpersonatedUserEmail *string
```

- *Type:* *string

The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API.

`impersonated_user_email` is required for all services except group and user management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#impersonated_user_email GoogleworkspaceProvider#impersonated_user_email}

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.oauthScopes"></a>

```go
OauthScopes *[]*string
```

- *Type:* *[]*string

The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#oauth_scopes GoogleworkspaceProvider#oauth_scopes}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user.

This service account will require the GCP role `Service Account Token Creator` if needing to impersonate a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#service_account GoogleworkspaceProvider#service_account}

---



