# `provider`

Refer to the Terraform Registory for docs: [`googleworkspace`](https://www.terraform.io/docs/providers/googleworkspace).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-googleworkspace.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleworkspaceProvider <a name="GoogleworkspaceProvider" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/googleworkspace googleworkspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import provider

provider.GoogleworkspaceProvider(
  scope: Construct,
  id: str,
  access_token: str = None,
  alias: str = None,
  credentials: str = None,
  customer_id: str = None,
  impersonated_user_email: str = None,
  oauth_scopes: typing.List[str] = None,
  service_account: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.accessToken">access_token</a></code> | <code>str</code> | A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.credentials">credentials</a></code> | <code>str</code> | Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.customerId">customer_id</a></code> | <code>str</code> | The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.impersonatedUserEmail">impersonated_user_email</a></code> | <code>str</code> | The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.accessToken"></a>

- *Type:* str

A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#access_token GoogleworkspaceProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#alias GoogleworkspaceProvider#alias}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.credentials"></a>

- *Type:* str

Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console).

If not provided, the application default credentials will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#credentials GoogleworkspaceProvider#credentials}

---

##### `customer_id`<sup>Optional</sup> <a name="customer_id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.customerId"></a>

- *Type:* str

The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#customer_id GoogleworkspaceProvider#customer_id}

---

##### `impersonated_user_email`<sup>Optional</sup> <a name="impersonated_user_email" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.impersonatedUserEmail"></a>

- *Type:* str

The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API.

`impersonated_user_email` is required for all services except group and user management.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#impersonated_user_email GoogleworkspaceProvider#impersonated_user_email}

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#oauth_scopes GoogleworkspaceProvider#oauth_scopes}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user.

This service account will require the GCP role `Service Account Token Creator` if needing to impersonate a user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#service_account GoogleworkspaceProvider#service_account}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCustomerId">reset_customer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetImpersonatedUserEmail">reset_impersonated_user_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetServiceAccount">reset_service_account</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_customer_id` <a name="reset_customer_id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetCustomerId"></a>

```python
def reset_customer_id() -> None
```

##### `reset_impersonated_user_email` <a name="reset_impersonated_user_email" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetImpersonatedUserEmail"></a>

```python
def reset_impersonated_user_email() -> None
```

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import provider

provider.GoogleworkspaceProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import provider

provider.GoogleworkspaceProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_googleworkspace import provider

provider.GoogleworkspaceProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerIdInput">customer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmailInput">impersonated_user_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerId">customer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmail">impersonated_user_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `customer_id_input`<sup>Optional</sup> <a name="customer_id_input" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerIdInput"></a>

```python
customer_id_input: str
```

- *Type:* str

---

##### `impersonated_user_email_input`<sup>Optional</sup> <a name="impersonated_user_email_input" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmailInput"></a>

```python
impersonated_user_email_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `customer_id`<sup>Optional</sup> <a name="customer_id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.customerId"></a>

```python
customer_id: str
```

- *Type:* str

---

##### `impersonated_user_email`<sup>Optional</sup> <a name="impersonated_user_email" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.impersonatedUserEmail"></a>

```python
impersonated_user_email: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleworkspaceProviderConfig <a name="GoogleworkspaceProviderConfig" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import provider

provider.GoogleworkspaceProviderConfig(
  access_token: str = None,
  alias: str = None,
  credentials: str = None,
  customer_id: str = None,
  impersonated_user_email: str = None,
  oauth_scopes: typing.List[str] = None,
  service_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.accessToken">access_token</a></code> | <code>str</code> | A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.credentials">credentials</a></code> | <code>str</code> | Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.customerId">customer_id</a></code> | <code>str</code> | The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.impersonatedUserEmail">impersonated_user_email</a></code> | <code>str</code> | The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API. |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)). |
| <code><a href="#@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#access_token GoogleworkspaceProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#alias GoogleworkspaceProvider#alias}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console).

If not provided, the application default credentials will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#credentials GoogleworkspaceProvider#credentials}

---

##### `customer_id`<sup>Optional</sup> <a name="customer_id" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.customerId"></a>

```python
customer_id: str
```

- *Type:* str

The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#customer_id GoogleworkspaceProvider#customer_id}

---

##### `impersonated_user_email`<sup>Optional</sup> <a name="impersonated_user_email" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.impersonatedUserEmail"></a>

```python
impersonated_user_email: str
```

- *Type:* str

The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API.

`impersonated_user_email` is required for all services except group and user management.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#impersonated_user_email GoogleworkspaceProvider#impersonated_user_email}

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing)).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#oauth_scopes GoogleworkspaceProvider#oauth_scopes}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-googleworkspace.provider.GoogleworkspaceProviderConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user.

This service account will require the GCP role `Service Account Token Creator` if needing to impersonate a user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#service_account GoogleworkspaceProvider#service_account}

---



