# `provider`

Refer to the Terraform Registory for docs: [`googleworkspace`](https://www.terraform.io/docs/providers/googleworkspace).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-googleworkspace.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleworkspaceProvider <a name="GoogleworkspaceProvider" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/googleworkspace googleworkspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new GoogleworkspaceProvider(Construct Scope, string Id, GoogleworkspaceProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig">GoogleworkspaceProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetCustomerId` <a name="ResetCustomerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCustomerId"></a>

```csharp
private void ResetCustomerId()
```

##### `ResetImpersonatedUserEmail` <a name="ResetImpersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetImpersonatedUserEmail"></a>

```csharp
private void ResetImpersonatedUserEmail()
```

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOauthScopes"></a>

```csharp
private void ResetOauthScopes()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

GoogleworkspaceProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

GoogleworkspaceProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

GoogleworkspaceProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentialsInput">CredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerIdInput">CustomerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmailInput">ImpersonatedUserEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentials">Credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerId">CustomerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmail">ImpersonatedUserEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentialsInput"></a>

```csharp
public string CredentialsInput { get; }
```

- *Type:* string

---

##### `CustomerIdInput`<sup>Optional</sup> <a name="CustomerIdInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerIdInput"></a>

```csharp
public string CustomerIdInput { get; }
```

- *Type:* string

---

##### `ImpersonatedUserEmailInput`<sup>Optional</sup> <a name="ImpersonatedUserEmailInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmailInput"></a>

```csharp
public string ImpersonatedUserEmailInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentials"></a>

```csharp
public string Credentials { get; }
```

- *Type:* string

---

##### `CustomerId`<sup>Optional</sup> <a name="CustomerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerId"></a>

```csharp
public string CustomerId { get; }
```

- *Type:* string

---

##### `ImpersonatedUserEmail`<sup>Optional</sup> <a name="ImpersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmail"></a>

```csharp
public string ImpersonatedUserEmail { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleworkspaceProviderConfig <a name="GoogleworkspaceProviderConfig" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new GoogleworkspaceProviderConfig {
    string AccessToken = null,
    string Alias = null,
    string Credentials = null,
    string CustomerId = null,
    string ImpersonatedUserEmail = null,
    string[] OauthScopes = null,
    string ServiceAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.accessToken">AccessToken</a></code> | <code>string</code> | A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.credentials">Credentials</a></code> | <code>string</code> | Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.customerId">CustomerId</a></code> | <code>string</code> | The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.impersonatedUserEmail">ImpersonatedUserEmail</a></code> | <code>string</code> | The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#access_token GoogleworkspaceProvider#access_token}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#alias GoogleworkspaceProvider#alias}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.credentials"></a>

```csharp
public string Credentials { get; set; }
```

- *Type:* string

Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console).

If not provided, the application default credentials will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#credentials GoogleworkspaceProvider#credentials}

---

##### `CustomerId`<sup>Optional</sup> <a name="CustomerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.customerId"></a>

```csharp
public string CustomerId { get; set; }
```

- *Type:* string

The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#customer_id GoogleworkspaceProvider#customer_id}

---

##### `ImpersonatedUserEmail`<sup>Optional</sup> <a name="ImpersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.impersonatedUserEmail"></a>

```csharp
public string ImpersonatedUserEmail { get; set; }
```

- *Type:* string

The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API.

`impersonated_user_email` is required for all services except group and user management.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#impersonated_user_email GoogleworkspaceProvider#impersonated_user_email}

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#oauth_scopes GoogleworkspaceProvider#oauth_scopes}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user.

This service account will require the GCP role `Service Account Token Creator` if needing to impersonate a user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#service_account GoogleworkspaceProvider#service_account}

---



