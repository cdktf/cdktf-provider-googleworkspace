# `provider`

Refer to the Terraform Registory for docs: [`googleworkspace`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-googleworkspace.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleworkspaceProvider <a name="GoogleworkspaceProvider" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs googleworkspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.provider.GoogleworkspaceProvider;

GoogleworkspaceProvider.Builder.create(Construct scope, java.lang.String id)
//  .accessToken(java.lang.String)
//  .alias(java.lang.String)
//  .credentials(java.lang.String)
//  .customerId(java.lang.String)
//  .impersonatedUserEmail(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
//  .serviceAccount(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.accessToken">accessToken</a></code> | <code>java.lang.String</code> | A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.credentials">credentials</a></code> | <code>java.lang.String</code> | Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.customerId">customerId</a></code> | <code>java.lang.String</code> | The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.impersonatedUserEmail">impersonatedUserEmail</a></code> | <code>java.lang.String</code> | The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.accessToken"></a>

- *Type:* java.lang.String

A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#access_token GoogleworkspaceProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#alias GoogleworkspaceProvider#alias}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.credentials"></a>

- *Type:* java.lang.String

Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console).

If not provided, the application default credentials will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#credentials GoogleworkspaceProvider#credentials}

---

##### `customerId`<sup>Optional</sup> <a name="customerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.customerId"></a>

- *Type:* java.lang.String

The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#customer_id GoogleworkspaceProvider#customer_id}

---

##### `impersonatedUserEmail`<sup>Optional</sup> <a name="impersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.impersonatedUserEmail"></a>

- *Type:* java.lang.String

The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API.

`impersonated_user_email` is required for all services except group and user management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#impersonated_user_email GoogleworkspaceProvider#impersonated_user_email}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.oauthScopes"></a>

- *Type:* java.util.List<java.lang.String>

The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#oauth_scopes GoogleworkspaceProvider#oauth_scopes}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user.

This service account will require the GCP role `Service Account Token Creator` if needing to impersonate a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#service_account GoogleworkspaceProvider#service_account}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCustomerId">resetCustomerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetImpersonatedUserEmail">resetImpersonatedUserEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetCustomerId` <a name="resetCustomerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCustomerId"></a>

```java
public void resetCustomerId()
```

##### `resetImpersonatedUserEmail` <a name="resetImpersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetImpersonatedUserEmail"></a>

```java
public void resetImpersonatedUserEmail()
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.provider.GoogleworkspaceProvider;

GoogleworkspaceProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.provider.GoogleworkspaceProvider;

GoogleworkspaceProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.provider.GoogleworkspaceProvider;

GoogleworkspaceProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentialsInput">credentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerIdInput">customerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmailInput">impersonatedUserEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentials">credentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerId">customerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmail">impersonatedUserEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentialsInput"></a>

```java
public java.lang.String getCredentialsInput();
```

- *Type:* java.lang.String

---

##### `customerIdInput`<sup>Optional</sup> <a name="customerIdInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerIdInput"></a>

```java
public java.lang.String getCustomerIdInput();
```

- *Type:* java.lang.String

---

##### `impersonatedUserEmailInput`<sup>Optional</sup> <a name="impersonatedUserEmailInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmailInput"></a>

```java
public java.lang.String getImpersonatedUserEmailInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

---

##### `customerId`<sup>Optional</sup> <a name="customerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerId"></a>

```java
public java.lang.String getCustomerId();
```

- *Type:* java.lang.String

---

##### `impersonatedUserEmail`<sup>Optional</sup> <a name="impersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmail"></a>

```java
public java.lang.String getImpersonatedUserEmail();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleworkspaceProviderConfig <a name="GoogleworkspaceProviderConfig" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.provider.GoogleworkspaceProviderConfig;

GoogleworkspaceProviderConfig.builder()
//  .accessToken(java.lang.String)
//  .alias(java.lang.String)
//  .credentials(java.lang.String)
//  .customerId(java.lang.String)
//  .impersonatedUserEmail(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
//  .serviceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.credentials">credentials</a></code> | <code>java.lang.String</code> | Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.customerId">customerId</a></code> | <code>java.lang.String</code> | The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.impersonatedUserEmail">impersonatedUserEmail</a></code> | <code>java.lang.String</code> | The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#access_token GoogleworkspaceProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#alias GoogleworkspaceProvider#alias}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console).

If not provided, the application default credentials will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#credentials GoogleworkspaceProvider#credentials}

---

##### `customerId`<sup>Optional</sup> <a name="customerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.customerId"></a>

```java
public java.lang.String getCustomerId();
```

- *Type:* java.lang.String

The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#customer_id GoogleworkspaceProvider#customer_id}

---

##### `impersonatedUserEmail`<sup>Optional</sup> <a name="impersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.impersonatedUserEmail"></a>

```java
public java.lang.String getImpersonatedUserEmail();
```

- *Type:* java.lang.String

The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API.

`impersonated_user_email` is required for all services except group and user management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#impersonated_user_email GoogleworkspaceProvider#impersonated_user_email}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#oauth_scopes GoogleworkspaceProvider#oauth_scopes}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user.

This service account will require the GCP role `Service Account Token Creator` if needing to impersonate a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#service_account GoogleworkspaceProvider#service_account}

---



