# `provider`

Refer to the Terraform Registory for docs: [`googleworkspace`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-googleworkspace.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleworkspaceProvider <a name="GoogleworkspaceProvider" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs googleworkspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-googleworkspace'

new provider.GoogleworkspaceProvider(scope: Construct, id: string, config?: GoogleworkspaceProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig">GoogleworkspaceProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig">GoogleworkspaceProviderConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetCustomerId` <a name="resetCustomerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCustomerId"></a>

```typescript
public resetCustomerId(): void
```

##### `resetImpersonatedUserEmail` <a name="resetImpersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetImpersonatedUserEmail"></a>

```typescript
public resetImpersonatedUserEmail(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-googleworkspace'

provider.GoogleworkspaceProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-googleworkspace'

provider.GoogleworkspaceProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-googleworkspace'

provider.GoogleworkspaceProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentialsInput">credentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerIdInput">customerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmailInput">impersonatedUserEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentials">credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerId">customerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmail">impersonatedUserEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: string;
```

- *Type:* string

---

##### `customerIdInput`<sup>Optional</sup> <a name="customerIdInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerIdInput"></a>

```typescript
public readonly customerIdInput: string;
```

- *Type:* string

---

##### `impersonatedUserEmailInput`<sup>Optional</sup> <a name="impersonatedUserEmailInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmailInput"></a>

```typescript
public readonly impersonatedUserEmailInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

---

##### `customerId`<sup>Optional</sup> <a name="customerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerId"></a>

```typescript
public readonly customerId: string;
```

- *Type:* string

---

##### `impersonatedUserEmail`<sup>Optional</sup> <a name="impersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmail"></a>

```typescript
public readonly impersonatedUserEmail: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleworkspaceProviderConfig <a name="GoogleworkspaceProviderConfig" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-googleworkspace'

const googleworkspaceProviderConfig: provider.GoogleworkspaceProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.accessToken">accessToken</a></code> | <code>string</code> | A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.credentials">credentials</a></code> | <code>string</code> | Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.customerId">customerId</a></code> | <code>string</code> | The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.impersonatedUserEmail">impersonatedUserEmail</a></code> | <code>string</code> | The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#access_token GoogleworkspaceProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#alias GoogleworkspaceProvider#alias}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console).

If not provided, the application default credentials will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#credentials GoogleworkspaceProvider#credentials}

---

##### `customerId`<sup>Optional</sup> <a name="customerId" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.customerId"></a>

```typescript
public readonly customerId: string;
```

- *Type:* string

The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#customer_id GoogleworkspaceProvider#customer_id}

---

##### `impersonatedUserEmail`<sup>Optional</sup> <a name="impersonatedUserEmail" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.impersonatedUserEmail"></a>

```typescript
public readonly impersonatedUserEmail: string;
```

- *Type:* string

The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API.

`impersonated_user_email` is required for all services except group and user management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#impersonated_user_email GoogleworkspaceProvider#impersonated_user_email}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#oauth_scopes GoogleworkspaceProvider#oauth_scopes}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user.

This service account will require the GCP role `Service Account Token Creator` if needing to impersonate a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs#service_account GoogleworkspaceProvider#service_account}

---



