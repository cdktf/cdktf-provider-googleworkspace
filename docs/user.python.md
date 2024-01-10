# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-googleworkspace.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-googleworkspace.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user googleworkspace_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.User.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.User(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: UserName,
  primary_email: str,
  addresses: typing.Union[IResolvable, typing.List[UserAddresses]] = None,
  aliases: typing.List[str] = None,
  archived: typing.Union[bool, IResolvable] = None,
  change_password_at_next_login: typing.Union[bool, IResolvable] = None,
  custom_schemas: typing.Union[IResolvable, typing.List[UserCustomSchemas]] = None,
  emails: typing.Union[IResolvable, typing.List[UserEmails]] = None,
  external_ids: typing.Union[IResolvable, typing.List[UserExternalIds]] = None,
  hash_function: str = None,
  ims: typing.Union[IResolvable, typing.List[UserIms]] = None,
  include_in_global_address_list: typing.Union[bool, IResolvable] = None,
  ip_allowlist: typing.Union[bool, IResolvable] = None,
  is_admin: typing.Union[bool, IResolvable] = None,
  keywords: typing.Union[IResolvable, typing.List[UserKeywords]] = None,
  languages: typing.Union[IResolvable, typing.List[UserLanguages]] = None,
  locations: typing.Union[IResolvable, typing.List[UserLocations]] = None,
  organizations: typing.Union[IResolvable, typing.List[UserOrganizations]] = None,
  org_unit_path: str = None,
  password: str = None,
  phones: typing.Union[IResolvable, typing.List[UserPhones]] = None,
  posix_accounts: typing.Union[IResolvable, typing.List[UserPosixAccounts]] = None,
  recovery_email: str = None,
  recovery_phone: str = None,
  relations: typing.Union[IResolvable, typing.List[UserRelations]] = None,
  ssh_public_keys: typing.Union[IResolvable, typing.List[UserSshPublicKeys]] = None,
  suspended: typing.Union[bool, IResolvable] = None,
  timeouts: UserTimeouts = None,
  websites: typing.Union[IResolvable, typing.List[UserWebsites]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.name">name</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | name block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.primaryEmail">primary_email</a></code> | <code>str</code> | The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.addresses">addresses</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>]]</code> | addresses block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.aliases">aliases</a></code> | <code>typing.List[str]</code> | asps.list of the user's alias email addresses. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if user is archived. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.changePasswordAtNextLogin">change_password_at_next_login</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the user is forced to change their password at next login. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.customSchemas">custom_schemas</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>]]</code> | custom_schemas block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.emails">emails</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>]]</code> | emails block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.externalIds">external_ids</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>]]</code> | external_ids block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.hashFunction">hash_function</a></code> | <code>str</code> | Stores the hash format of the password property. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.ims">ims</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>]]</code> | ims block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.includeInGlobalAddressList">include_in_global_address_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.ipAllowlist">ip_allowlist</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the user's IP address is added to the allow list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.isAdmin">is_admin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates a user with super admininistrator privileges. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.keywords">keywords</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>]]</code> | keywords block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.languages">languages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>]]</code> | languages block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.locations">locations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>]]</code> | locations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.organizations">organizations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>]]</code> | organizations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.orgUnitPath">org_unit_path</a></code> | <code>str</code> | The full path of the parent organization associated with the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.password">password</a></code> | <code>str</code> | Stores the password for the user account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.phones">phones</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>]]</code> | phones block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.posixAccounts">posix_accounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>]]</code> | posix_accounts block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.recoveryEmail">recovery_email</a></code> | <code>str</code> | Recovery email of the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.recoveryPhone">recovery_phone</a></code> | <code>str</code> | Recovery phone of the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.relations">relations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>]]</code> | relations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>]]</code> | ssh_public_keys block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if user is suspended. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.websites">websites</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>]]</code> | websites block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.name"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#name User#name}

---

##### `primary_email`<sup>Required</sup> <a name="primary_email" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.primaryEmail"></a>

- *Type:* str

The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary_email User#primary_email}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.addresses"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>]]

addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#addresses User#addresses}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.aliases"></a>

- *Type:* typing.List[str]

asps.list of the user's alias email addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#aliases User#aliases}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.archived"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if user is archived.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#archived User#archived}

---

##### `change_password_at_next_login`<sup>Optional</sup> <a name="change_password_at_next_login" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.changePasswordAtNextLogin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the user is forced to change their password at next login.

This setting doesn't apply when the user signs in via a third-party identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#change_password_at_next_login User#change_password_at_next_login}

---

##### `custom_schemas`<sup>Optional</sup> <a name="custom_schemas" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.customSchemas"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>]]

custom_schemas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_schemas User#custom_schemas}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.emails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>]]

emails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#emails User#emails}

---

##### `external_ids`<sup>Optional</sup> <a name="external_ids" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.externalIds"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>]]

external_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#external_ids User#external_ids}

---

##### `hash_function`<sup>Optional</sup> <a name="hash_function" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.hashFunction"></a>

- *Type:* str

Stores the hash format of the password property.

We recommend sending the password property value as a base 16 bit hexadecimal-encoded hash value. Set the hashFunction values as either the SHA-1, MD5, or crypt hash format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#hash_function User#hash_function}

---

##### `ims`<sup>Optional</sup> <a name="ims" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.ims"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>]]

ims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ims User#ims}

---

##### `include_in_global_address_list`<sup>Optional</sup> <a name="include_in_global_address_list" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.includeInGlobalAddressList"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `true`.

Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#include_in_global_address_list User#include_in_global_address_list}

---

##### `ip_allowlist`<sup>Optional</sup> <a name="ip_allowlist" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.ipAllowlist"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the user's IP address is added to the allow list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ip_allowlist User#ip_allowlist}

---

##### `is_admin`<sup>Optional</sup> <a name="is_admin" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.isAdmin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates a user with super admininistrator privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#is_admin User#is_admin}

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.keywords"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>]]

keywords block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#keywords User#keywords}

---

##### `languages`<sup>Optional</sup> <a name="languages" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.languages"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>]]

languages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#languages User#languages}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.locations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>]]

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#locations User#locations}

---

##### `organizations`<sup>Optional</sup> <a name="organizations" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.organizations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>]]

organizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#organizations User#organizations}

---

##### `org_unit_path`<sup>Optional</sup> <a name="org_unit_path" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.orgUnitPath"></a>

- *Type:* str

The full path of the parent organization associated with the user.

If the parent organization is the top-level, it is represented as a forward slash (/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#org_unit_path User#org_unit_path}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.password"></a>

- *Type:* str

Stores the password for the user account.

A password can contain any combination of ASCII characters. A minimum of 8 characters is required. The maximum length is 100 characters. As the API does not return the value of password, this field is write-only, and the value stored in the state will be what is provided in the configuration. The field is required on create and will be empty on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#password User#password}

---

##### `phones`<sup>Optional</sup> <a name="phones" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.phones"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>]]

phones block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#phones User#phones}

---

##### `posix_accounts`<sup>Optional</sup> <a name="posix_accounts" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.posixAccounts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>]]

posix_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#posix_accounts User#posix_accounts}

---

##### `recovery_email`<sup>Optional</sup> <a name="recovery_email" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.recoveryEmail"></a>

- *Type:* str

Recovery email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#recovery_email User#recovery_email}

---

##### `recovery_phone`<sup>Optional</sup> <a name="recovery_phone" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.recoveryPhone"></a>

- *Type:* str

Recovery phone of the user.

The phone number must be in the E.164 format, starting with the plus sign (+). Example: +16506661212.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#recovery_phone User#recovery_phone}

---

##### `relations`<sup>Optional</sup> <a name="relations" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.relations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>]]

relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#relations User#relations}

---

##### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.sshPublicKeys"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>]]

ssh_public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ssh_public_keys User#ssh_public_keys}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.suspended"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if user is suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#suspended User#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#timeouts User#timeouts}

---

##### `websites`<sup>Optional</sup> <a name="websites" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.websites"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>]]

websites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#websites User#websites}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putAddresses">put_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putCustomSchemas">put_custom_schemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putEmails">put_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putExternalIds">put_external_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putIms">put_ims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putKeywords">put_keywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putLanguages">put_languages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putLocations">put_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putName">put_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putOrganizations">put_organizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putPhones">put_phones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putPosixAccounts">put_posix_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putRelations">put_relations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putSshPublicKeys">put_ssh_public_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putWebsites">put_websites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetAddresses">reset_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetAliases">reset_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetArchived">reset_archived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetChangePasswordAtNextLogin">reset_change_password_at_next_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetCustomSchemas">reset_custom_schemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetEmails">reset_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetExternalIds">reset_external_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetHashFunction">reset_hash_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetIms">reset_ims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetIncludeInGlobalAddressList">reset_include_in_global_address_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetIpAllowlist">reset_ip_allowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetIsAdmin">reset_is_admin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetKeywords">reset_keywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetLanguages">reset_languages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetLocations">reset_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetOrganizations">reset_organizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetOrgUnitPath">reset_org_unit_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetPhones">reset_phones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetPosixAccounts">reset_posix_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetRecoveryEmail">reset_recovery_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetRecoveryPhone">reset_recovery_phone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetRelations">reset_relations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetSshPublicKeys">reset_ssh_public_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetSuspended">reset_suspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetWebsites">reset_websites</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.User.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.user.User.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.user.User.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.user.User.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.user.User.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-googleworkspace.user.User.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.user.User.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.user.User.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-googleworkspace.user.User.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-googleworkspace.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.User.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.User.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.User.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.User.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.User.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.User.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.User.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-googleworkspace.user.User.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-googleworkspace.user.User.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.user.User.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.User.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-googleworkspace.user.User.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.user.User.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-googleworkspace.user.User.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-googleworkspace.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.User.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-googleworkspace.user.User.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.user.User.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_addresses` <a name="put_addresses" id="@cdktf/provider-googleworkspace.user.User.putAddresses"></a>

```python
def put_addresses(
  value: typing.Union[IResolvable, typing.List[UserAddresses]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putAddresses.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>]]

---

##### `put_custom_schemas` <a name="put_custom_schemas" id="@cdktf/provider-googleworkspace.user.User.putCustomSchemas"></a>

```python
def put_custom_schemas(
  value: typing.Union[IResolvable, typing.List[UserCustomSchemas]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putCustomSchemas.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>]]

---

##### `put_emails` <a name="put_emails" id="@cdktf/provider-googleworkspace.user.User.putEmails"></a>

```python
def put_emails(
  value: typing.Union[IResolvable, typing.List[UserEmails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putEmails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>]]

---

##### `put_external_ids` <a name="put_external_ids" id="@cdktf/provider-googleworkspace.user.User.putExternalIds"></a>

```python
def put_external_ids(
  value: typing.Union[IResolvable, typing.List[UserExternalIds]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putExternalIds.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>]]

---

##### `put_ims` <a name="put_ims" id="@cdktf/provider-googleworkspace.user.User.putIms"></a>

```python
def put_ims(
  value: typing.Union[IResolvable, typing.List[UserIms]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putIms.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>]]

---

##### `put_keywords` <a name="put_keywords" id="@cdktf/provider-googleworkspace.user.User.putKeywords"></a>

```python
def put_keywords(
  value: typing.Union[IResolvable, typing.List[UserKeywords]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putKeywords.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>]]

---

##### `put_languages` <a name="put_languages" id="@cdktf/provider-googleworkspace.user.User.putLanguages"></a>

```python
def put_languages(
  value: typing.Union[IResolvable, typing.List[UserLanguages]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putLanguages.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>]]

---

##### `put_locations` <a name="put_locations" id="@cdktf/provider-googleworkspace.user.User.putLocations"></a>

```python
def put_locations(
  value: typing.Union[IResolvable, typing.List[UserLocations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putLocations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>]]

---

##### `put_name` <a name="put_name" id="@cdktf/provider-googleworkspace.user.User.putName"></a>

```python
def put_name(
  family_name: str,
  given_name: str = None
) -> None
```

###### `family_name`<sup>Required</sup> <a name="family_name" id="@cdktf/provider-googleworkspace.user.User.putName.parameter.familyName"></a>

- *Type:* str

The user's last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#family_name User#family_name}

---

###### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktf/provider-googleworkspace.user.User.putName.parameter.givenName"></a>

- *Type:* str

The user's first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#given_name User#given_name}

---

##### `put_organizations` <a name="put_organizations" id="@cdktf/provider-googleworkspace.user.User.putOrganizations"></a>

```python
def put_organizations(
  value: typing.Union[IResolvable, typing.List[UserOrganizations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putOrganizations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>]]

---

##### `put_phones` <a name="put_phones" id="@cdktf/provider-googleworkspace.user.User.putPhones"></a>

```python
def put_phones(
  value: typing.Union[IResolvable, typing.List[UserPhones]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putPhones.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>]]

---

##### `put_posix_accounts` <a name="put_posix_accounts" id="@cdktf/provider-googleworkspace.user.User.putPosixAccounts"></a>

```python
def put_posix_accounts(
  value: typing.Union[IResolvable, typing.List[UserPosixAccounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putPosixAccounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>]]

---

##### `put_relations` <a name="put_relations" id="@cdktf/provider-googleworkspace.user.User.putRelations"></a>

```python
def put_relations(
  value: typing.Union[IResolvable, typing.List[UserRelations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putRelations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>]]

---

##### `put_ssh_public_keys` <a name="put_ssh_public_keys" id="@cdktf/provider-googleworkspace.user.User.putSshPublicKeys"></a>

```python
def put_ssh_public_keys(
  value: typing.Union[IResolvable, typing.List[UserSshPublicKeys]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putSshPublicKeys.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-googleworkspace.user.User.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-googleworkspace.user.User.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#create User#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-googleworkspace.user.User.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#update User#update}.

---

##### `put_websites` <a name="put_websites" id="@cdktf/provider-googleworkspace.user.User.putWebsites"></a>

```python
def put_websites(
  value: typing.Union[IResolvable, typing.List[UserWebsites]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putWebsites.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>]]

---

##### `reset_addresses` <a name="reset_addresses" id="@cdktf/provider-googleworkspace.user.User.resetAddresses"></a>

```python
def reset_addresses() -> None
```

##### `reset_aliases` <a name="reset_aliases" id="@cdktf/provider-googleworkspace.user.User.resetAliases"></a>

```python
def reset_aliases() -> None
```

##### `reset_archived` <a name="reset_archived" id="@cdktf/provider-googleworkspace.user.User.resetArchived"></a>

```python
def reset_archived() -> None
```

##### `reset_change_password_at_next_login` <a name="reset_change_password_at_next_login" id="@cdktf/provider-googleworkspace.user.User.resetChangePasswordAtNextLogin"></a>

```python
def reset_change_password_at_next_login() -> None
```

##### `reset_custom_schemas` <a name="reset_custom_schemas" id="@cdktf/provider-googleworkspace.user.User.resetCustomSchemas"></a>

```python
def reset_custom_schemas() -> None
```

##### `reset_emails` <a name="reset_emails" id="@cdktf/provider-googleworkspace.user.User.resetEmails"></a>

```python
def reset_emails() -> None
```

##### `reset_external_ids` <a name="reset_external_ids" id="@cdktf/provider-googleworkspace.user.User.resetExternalIds"></a>

```python
def reset_external_ids() -> None
```

##### `reset_hash_function` <a name="reset_hash_function" id="@cdktf/provider-googleworkspace.user.User.resetHashFunction"></a>

```python
def reset_hash_function() -> None
```

##### `reset_ims` <a name="reset_ims" id="@cdktf/provider-googleworkspace.user.User.resetIms"></a>

```python
def reset_ims() -> None
```

##### `reset_include_in_global_address_list` <a name="reset_include_in_global_address_list" id="@cdktf/provider-googleworkspace.user.User.resetIncludeInGlobalAddressList"></a>

```python
def reset_include_in_global_address_list() -> None
```

##### `reset_ip_allowlist` <a name="reset_ip_allowlist" id="@cdktf/provider-googleworkspace.user.User.resetIpAllowlist"></a>

```python
def reset_ip_allowlist() -> None
```

##### `reset_is_admin` <a name="reset_is_admin" id="@cdktf/provider-googleworkspace.user.User.resetIsAdmin"></a>

```python
def reset_is_admin() -> None
```

##### `reset_keywords` <a name="reset_keywords" id="@cdktf/provider-googleworkspace.user.User.resetKeywords"></a>

```python
def reset_keywords() -> None
```

##### `reset_languages` <a name="reset_languages" id="@cdktf/provider-googleworkspace.user.User.resetLanguages"></a>

```python
def reset_languages() -> None
```

##### `reset_locations` <a name="reset_locations" id="@cdktf/provider-googleworkspace.user.User.resetLocations"></a>

```python
def reset_locations() -> None
```

##### `reset_organizations` <a name="reset_organizations" id="@cdktf/provider-googleworkspace.user.User.resetOrganizations"></a>

```python
def reset_organizations() -> None
```

##### `reset_org_unit_path` <a name="reset_org_unit_path" id="@cdktf/provider-googleworkspace.user.User.resetOrgUnitPath"></a>

```python
def reset_org_unit_path() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-googleworkspace.user.User.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_phones` <a name="reset_phones" id="@cdktf/provider-googleworkspace.user.User.resetPhones"></a>

```python
def reset_phones() -> None
```

##### `reset_posix_accounts` <a name="reset_posix_accounts" id="@cdktf/provider-googleworkspace.user.User.resetPosixAccounts"></a>

```python
def reset_posix_accounts() -> None
```

##### `reset_recovery_email` <a name="reset_recovery_email" id="@cdktf/provider-googleworkspace.user.User.resetRecoveryEmail"></a>

```python
def reset_recovery_email() -> None
```

##### `reset_recovery_phone` <a name="reset_recovery_phone" id="@cdktf/provider-googleworkspace.user.User.resetRecoveryPhone"></a>

```python
def reset_recovery_phone() -> None
```

##### `reset_relations` <a name="reset_relations" id="@cdktf/provider-googleworkspace.user.User.resetRelations"></a>

```python
def reset_relations() -> None
```

##### `reset_ssh_public_keys` <a name="reset_ssh_public_keys" id="@cdktf/provider-googleworkspace.user.User.resetSshPublicKeys"></a>

```python
def reset_ssh_public_keys() -> None
```

##### `reset_suspended` <a name="reset_suspended" id="@cdktf/provider-googleworkspace.user.User.resetSuspended"></a>

```python
def reset_suspended() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-googleworkspace.user.User.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_websites` <a name="reset_websites" id="@cdktf/provider-googleworkspace.user.User.resetWebsites"></a>

```python
def reset_websites() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.user.User.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.User.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.user.User.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.user.User.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.User.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.user.User.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-googleworkspace.user.User.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.User.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.user.User.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.User.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the User to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList">UserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.agreedToTerms">agreed_to_terms</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.customerId">customer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.customSchemas">custom_schemas</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList">UserCustomSchemasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.deletionTime">deletion_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.emails">emails</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList">UserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.externalIds">external_ids</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList">UserExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.ims">ims</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList">UserImsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isDelegatedAdmin">is_delegated_admin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isEnforcedIn2StepVerification">is_enforced_in2_step_verification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isEnrolledIn2StepVerification">is_enrolled_in2_step_verification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isMailboxSetup">is_mailbox_setup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.keywords">keywords</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList">UserKeywordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.languages">languages</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList">UserLanguagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.lastLoginTime">last_login_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList">UserLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.name">name</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference">UserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.nonEditableAliases">non_editable_aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.organizations">organizations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList">UserOrganizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.phones">phones</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList">UserPhonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.posixAccounts">posix_accounts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList">UserPosixAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.relations">relations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList">UserRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.sshPublicKeys">ssh_public_keys</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList">UserSshPublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.suspensionReason">suspension_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoEtag">thumbnail_photo_etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoUrl">thumbnail_photo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.websites">websites</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList">UserWebsitesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.addressesInput">addresses_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.aliasesInput">aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.archivedInput">archived_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLoginInput">change_password_at_next_login_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.customSchemasInput">custom_schemas_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.emailsInput">emails_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.externalIdsInput">external_ids_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.hashFunctionInput">hash_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.imsInput">ims_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressListInput">include_in_global_address_list_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.ipAllowlistInput">ip_allowlist_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isAdminInput">is_admin_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.keywordsInput">keywords_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.languagesInput">languages_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.locationsInput">locations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.nameInput">name_input</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.organizationsInput">organizations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.orgUnitPathInput">org_unit_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.phonesInput">phones_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.posixAccountsInput">posix_accounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.primaryEmailInput">primary_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryEmailInput">recovery_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryPhoneInput">recovery_phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.relationsInput">relations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.suspendedInput">suspended_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.websitesInput">websites_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLogin">change_password_at_next_login</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.hashFunction">hash_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressList">include_in_global_address_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.ipAllowlist">ip_allowlist</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isAdmin">is_admin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.orgUnitPath">org_unit_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.primaryEmail">primary_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryEmail">recovery_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryPhone">recovery_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.user.User.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.user.User.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.User.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.user.User.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-googleworkspace.user.User.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.user.User.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.user.User.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.user.User.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.user.User.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.user.User.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.user.User.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.user.User.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.user.User.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.user.User.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-googleworkspace.user.User.property.addresses"></a>

```python
addresses: UserAddressesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserAddressesList">UserAddressesList</a>

---

##### `agreed_to_terms`<sup>Required</sup> <a name="agreed_to_terms" id="@cdktf/provider-googleworkspace.user.User.property.agreedToTerms"></a>

```python
agreed_to_terms: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-googleworkspace.user.User.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `customer_id`<sup>Required</sup> <a name="customer_id" id="@cdktf/provider-googleworkspace.user.User.property.customerId"></a>

```python
customer_id: str
```

- *Type:* str

---

##### `custom_schemas`<sup>Required</sup> <a name="custom_schemas" id="@cdktf/provider-googleworkspace.user.User.property.customSchemas"></a>

```python
custom_schemas: UserCustomSchemasList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList">UserCustomSchemasList</a>

---

##### `deletion_time`<sup>Required</sup> <a name="deletion_time" id="@cdktf/provider-googleworkspace.user.User.property.deletionTime"></a>

```python
deletion_time: str
```

- *Type:* str

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-googleworkspace.user.User.property.emails"></a>

```python
emails: UserEmailsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserEmailsList">UserEmailsList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.user.User.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `external_ids`<sup>Required</sup> <a name="external_ids" id="@cdktf/provider-googleworkspace.user.User.property.externalIds"></a>

```python
external_ids: UserExternalIdsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList">UserExternalIdsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.user.User.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ims`<sup>Required</sup> <a name="ims" id="@cdktf/provider-googleworkspace.user.User.property.ims"></a>

```python
ims: UserImsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserImsList">UserImsList</a>

---

##### `is_delegated_admin`<sup>Required</sup> <a name="is_delegated_admin" id="@cdktf/provider-googleworkspace.user.User.property.isDelegatedAdmin"></a>

```python
is_delegated_admin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_enforced_in2_step_verification`<sup>Required</sup> <a name="is_enforced_in2_step_verification" id="@cdktf/provider-googleworkspace.user.User.property.isEnforcedIn2StepVerification"></a>

```python
is_enforced_in2_step_verification: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_enrolled_in2_step_verification`<sup>Required</sup> <a name="is_enrolled_in2_step_verification" id="@cdktf/provider-googleworkspace.user.User.property.isEnrolledIn2StepVerification"></a>

```python
is_enrolled_in2_step_verification: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_mailbox_setup`<sup>Required</sup> <a name="is_mailbox_setup" id="@cdktf/provider-googleworkspace.user.User.property.isMailboxSetup"></a>

```python
is_mailbox_setup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktf/provider-googleworkspace.user.User.property.keywords"></a>

```python
keywords: UserKeywordsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList">UserKeywordsList</a>

---

##### `languages`<sup>Required</sup> <a name="languages" id="@cdktf/provider-googleworkspace.user.User.property.languages"></a>

```python
languages: UserLanguagesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList">UserLanguagesList</a>

---

##### `last_login_time`<sup>Required</sup> <a name="last_login_time" id="@cdktf/provider-googleworkspace.user.User.property.lastLoginTime"></a>

```python
last_login_time: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-googleworkspace.user.User.property.locations"></a>

```python
locations: UserLocationsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserLocationsList">UserLocationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.User.property.name"></a>

```python
name: UserNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference">UserNameOutputReference</a>

---

##### `non_editable_aliases`<sup>Required</sup> <a name="non_editable_aliases" id="@cdktf/provider-googleworkspace.user.User.property.nonEditableAliases"></a>

```python
non_editable_aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizations`<sup>Required</sup> <a name="organizations" id="@cdktf/provider-googleworkspace.user.User.property.organizations"></a>

```python
organizations: UserOrganizationsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList">UserOrganizationsList</a>

---

##### `phones`<sup>Required</sup> <a name="phones" id="@cdktf/provider-googleworkspace.user.User.property.phones"></a>

```python
phones: UserPhonesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserPhonesList">UserPhonesList</a>

---

##### `posix_accounts`<sup>Required</sup> <a name="posix_accounts" id="@cdktf/provider-googleworkspace.user.User.property.posixAccounts"></a>

```python
posix_accounts: UserPosixAccountsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList">UserPosixAccountsList</a>

---

##### `relations`<sup>Required</sup> <a name="relations" id="@cdktf/provider-googleworkspace.user.User.property.relations"></a>

```python
relations: UserRelationsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserRelationsList">UserRelationsList</a>

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktf/provider-googleworkspace.user.User.property.sshPublicKeys"></a>

```python
ssh_public_keys: UserSshPublicKeysList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList">UserSshPublicKeysList</a>

---

##### `suspension_reason`<sup>Required</sup> <a name="suspension_reason" id="@cdktf/provider-googleworkspace.user.User.property.suspensionReason"></a>

```python
suspension_reason: str
```

- *Type:* str

---

##### `thumbnail_photo_etag`<sup>Required</sup> <a name="thumbnail_photo_etag" id="@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoEtag"></a>

```python
thumbnail_photo_etag: str
```

- *Type:* str

---

##### `thumbnail_photo_url`<sup>Required</sup> <a name="thumbnail_photo_url" id="@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoUrl"></a>

```python
thumbnail_photo_url: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.user.User.property.timeouts"></a>

```python
timeouts: UserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a>

---

##### `websites`<sup>Required</sup> <a name="websites" id="@cdktf/provider-googleworkspace.user.User.property.websites"></a>

```python
websites: UserWebsitesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList">UserWebsitesList</a>

---

##### `addresses_input`<sup>Optional</sup> <a name="addresses_input" id="@cdktf/provider-googleworkspace.user.User.property.addressesInput"></a>

```python
addresses_input: typing.Union[IResolvable, typing.List[UserAddresses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>]]

---

##### `aliases_input`<sup>Optional</sup> <a name="aliases_input" id="@cdktf/provider-googleworkspace.user.User.property.aliasesInput"></a>

```python
aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `archived_input`<sup>Optional</sup> <a name="archived_input" id="@cdktf/provider-googleworkspace.user.User.property.archivedInput"></a>

```python
archived_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `change_password_at_next_login_input`<sup>Optional</sup> <a name="change_password_at_next_login_input" id="@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLoginInput"></a>

```python
change_password_at_next_login_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_schemas_input`<sup>Optional</sup> <a name="custom_schemas_input" id="@cdktf/provider-googleworkspace.user.User.property.customSchemasInput"></a>

```python
custom_schemas_input: typing.Union[IResolvable, typing.List[UserCustomSchemas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>]]

---

##### `emails_input`<sup>Optional</sup> <a name="emails_input" id="@cdktf/provider-googleworkspace.user.User.property.emailsInput"></a>

```python
emails_input: typing.Union[IResolvable, typing.List[UserEmails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>]]

---

##### `external_ids_input`<sup>Optional</sup> <a name="external_ids_input" id="@cdktf/provider-googleworkspace.user.User.property.externalIdsInput"></a>

```python
external_ids_input: typing.Union[IResolvable, typing.List[UserExternalIds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>]]

---

##### `hash_function_input`<sup>Optional</sup> <a name="hash_function_input" id="@cdktf/provider-googleworkspace.user.User.property.hashFunctionInput"></a>

```python
hash_function_input: str
```

- *Type:* str

---

##### `ims_input`<sup>Optional</sup> <a name="ims_input" id="@cdktf/provider-googleworkspace.user.User.property.imsInput"></a>

```python
ims_input: typing.Union[IResolvable, typing.List[UserIms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>]]

---

##### `include_in_global_address_list_input`<sup>Optional</sup> <a name="include_in_global_address_list_input" id="@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressListInput"></a>

```python
include_in_global_address_list_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_allowlist_input`<sup>Optional</sup> <a name="ip_allowlist_input" id="@cdktf/provider-googleworkspace.user.User.property.ipAllowlistInput"></a>

```python
ip_allowlist_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_admin_input`<sup>Optional</sup> <a name="is_admin_input" id="@cdktf/provider-googleworkspace.user.User.property.isAdminInput"></a>

```python
is_admin_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keywords_input`<sup>Optional</sup> <a name="keywords_input" id="@cdktf/provider-googleworkspace.user.User.property.keywordsInput"></a>

```python
keywords_input: typing.Union[IResolvable, typing.List[UserKeywords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>]]

---

##### `languages_input`<sup>Optional</sup> <a name="languages_input" id="@cdktf/provider-googleworkspace.user.User.property.languagesInput"></a>

```python
languages_input: typing.Union[IResolvable, typing.List[UserLanguages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>]]

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-googleworkspace.user.User.property.locationsInput"></a>

```python
locations_input: typing.Union[IResolvable, typing.List[UserLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-googleworkspace.user.User.property.nameInput"></a>

```python
name_input: UserName
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

---

##### `organizations_input`<sup>Optional</sup> <a name="organizations_input" id="@cdktf/provider-googleworkspace.user.User.property.organizationsInput"></a>

```python
organizations_input: typing.Union[IResolvable, typing.List[UserOrganizations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>]]

---

##### `org_unit_path_input`<sup>Optional</sup> <a name="org_unit_path_input" id="@cdktf/provider-googleworkspace.user.User.property.orgUnitPathInput"></a>

```python
org_unit_path_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-googleworkspace.user.User.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `phones_input`<sup>Optional</sup> <a name="phones_input" id="@cdktf/provider-googleworkspace.user.User.property.phonesInput"></a>

```python
phones_input: typing.Union[IResolvable, typing.List[UserPhones]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>]]

---

##### `posix_accounts_input`<sup>Optional</sup> <a name="posix_accounts_input" id="@cdktf/provider-googleworkspace.user.User.property.posixAccountsInput"></a>

```python
posix_accounts_input: typing.Union[IResolvable, typing.List[UserPosixAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>]]

---

##### `primary_email_input`<sup>Optional</sup> <a name="primary_email_input" id="@cdktf/provider-googleworkspace.user.User.property.primaryEmailInput"></a>

```python
primary_email_input: str
```

- *Type:* str

---

##### `recovery_email_input`<sup>Optional</sup> <a name="recovery_email_input" id="@cdktf/provider-googleworkspace.user.User.property.recoveryEmailInput"></a>

```python
recovery_email_input: str
```

- *Type:* str

---

##### `recovery_phone_input`<sup>Optional</sup> <a name="recovery_phone_input" id="@cdktf/provider-googleworkspace.user.User.property.recoveryPhoneInput"></a>

```python
recovery_phone_input: str
```

- *Type:* str

---

##### `relations_input`<sup>Optional</sup> <a name="relations_input" id="@cdktf/provider-googleworkspace.user.User.property.relationsInput"></a>

```python
relations_input: typing.Union[IResolvable, typing.List[UserRelations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>]]

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="@cdktf/provider-googleworkspace.user.User.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.Union[IResolvable, typing.List[UserSshPublicKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>]]

---

##### `suspended_input`<sup>Optional</sup> <a name="suspended_input" id="@cdktf/provider-googleworkspace.user.User.property.suspendedInput"></a>

```python
suspended_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-googleworkspace.user.User.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, UserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>]

---

##### `websites_input`<sup>Optional</sup> <a name="websites_input" id="@cdktf/provider-googleworkspace.user.User.property.websitesInput"></a>

```python
websites_input: typing.Union[IResolvable, typing.List[UserWebsites]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>]]

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-googleworkspace.user.User.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-googleworkspace.user.User.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `change_password_at_next_login`<sup>Required</sup> <a name="change_password_at_next_login" id="@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLogin"></a>

```python
change_password_at_next_login: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hash_function`<sup>Required</sup> <a name="hash_function" id="@cdktf/provider-googleworkspace.user.User.property.hashFunction"></a>

```python
hash_function: str
```

- *Type:* str

---

##### `include_in_global_address_list`<sup>Required</sup> <a name="include_in_global_address_list" id="@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressList"></a>

```python
include_in_global_address_list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_allowlist`<sup>Required</sup> <a name="ip_allowlist" id="@cdktf/provider-googleworkspace.user.User.property.ipAllowlist"></a>

```python
ip_allowlist: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_admin`<sup>Required</sup> <a name="is_admin" id="@cdktf/provider-googleworkspace.user.User.property.isAdmin"></a>

```python
is_admin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `org_unit_path`<sup>Required</sup> <a name="org_unit_path" id="@cdktf/provider-googleworkspace.user.User.property.orgUnitPath"></a>

```python
org_unit_path: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-googleworkspace.user.User.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `primary_email`<sup>Required</sup> <a name="primary_email" id="@cdktf/provider-googleworkspace.user.User.property.primaryEmail"></a>

```python
primary_email: str
```

- *Type:* str

---

##### `recovery_email`<sup>Required</sup> <a name="recovery_email" id="@cdktf/provider-googleworkspace.user.User.property.recoveryEmail"></a>

```python
recovery_email: str
```

- *Type:* str

---

##### `recovery_phone`<sup>Required</sup> <a name="recovery_phone" id="@cdktf/provider-googleworkspace.user.User.property.recoveryPhone"></a>

```python
recovery_phone: str
```

- *Type:* str

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-googleworkspace.user.User.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.user.User.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserAddresses <a name="UserAddresses" id="@cdktf/provider-googleworkspace.user.UserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserAddresses.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserAddresses(
  type: str,
  country: str = None,
  country_code: str = None,
  custom_type: str = None,
  extended_address: str = None,
  formatted: str = None,
  locality: str = None,
  po_box: str = None,
  postal_code: str = None,
  primary: typing.Union[bool, IResolvable] = None,
  region: str = None,
  source_is_structured: typing.Union[bool, IResolvable] = None,
  street_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.type">type</a></code> | <code>str</code> | The address type. Acceptable values: `custom`, `home`, `other`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.country">country</a></code> | <code>str</code> | Country. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.countryCode">country_code</a></code> | <code>str</code> | The country code. Uses the ISO 3166-1 standard. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.customType">custom_type</a></code> | <code>str</code> | If the address type is custom, this property contains the custom value. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.extendedAddress">extended_address</a></code> | <code>str</code> | For extended addresses, such as an address that includes a sub-region. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.formatted">formatted</a></code> | <code>str</code> | A full and unstructured postal address. This is not synced with the structured address fields. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.locality">locality</a></code> | <code>str</code> | The town or city of the address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.poBox">po_box</a></code> | <code>str</code> | The post office box, if present. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.postalCode">postal_code</a></code> | <code>str</code> | The ZIP or postal code, if applicable. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this is the user's primary address. The addresses list may contain only one primary address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.region">region</a></code> | <code>str</code> | The abbreviated province or state. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.sourceIsStructured">source_is_structured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the user-supplied address was formatted. Formatted addresses are not currently supported. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.streetAddress">street_address</a></code> | <code>str</code> | The street address, such as 1600 Amphitheatre Parkway. Whitespace within the string is ignored; however, newlines are significant. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.type"></a>

```python
type: str
```

- *Type:* str

The address type. Acceptable values: `custom`, `home`, `other`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.country"></a>

```python
country: str
```

- *Type:* str

Country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#country User#country}

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

The country code. Uses the ISO 3166-1 standard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#country_code User#country_code}

---

##### `custom_type`<sup>Optional</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

If the address type is custom, this property contains the custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `extended_address`<sup>Optional</sup> <a name="extended_address" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.extendedAddress"></a>

```python
extended_address: str
```

- *Type:* str

For extended addresses, such as an address that includes a sub-region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#extended_address User#extended_address}

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

A full and unstructured postal address. This is not synced with the structured address fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#formatted User#formatted}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.locality"></a>

```python
locality: str
```

- *Type:* str

The town or city of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#locality User#locality}

---

##### `po_box`<sup>Optional</sup> <a name="po_box" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.poBox"></a>

```python
po_box: str
```

- *Type:* str

The post office box, if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#po_box User#po_box}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

The ZIP or postal code, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#postal_code User#postal_code}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this is the user's primary address. The addresses list may contain only one primary address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.region"></a>

```python
region: str
```

- *Type:* str

The abbreviated province or state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#region User#region}

---

##### `source_is_structured`<sup>Optional</sup> <a name="source_is_structured" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.sourceIsStructured"></a>

```python
source_is_structured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the user-supplied address was formatted. Formatted addresses are not currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#source_is_structured User#source_is_structured}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

The street address, such as 1600 Amphitheatre Parkway. Whitespace within the string is ignored; however, newlines are significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#street_address User#street_address}

---

### UserConfig <a name="UserConfig" id="@cdktf/provider-googleworkspace.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: UserName,
  primary_email: str,
  addresses: typing.Union[IResolvable, typing.List[UserAddresses]] = None,
  aliases: typing.List[str] = None,
  archived: typing.Union[bool, IResolvable] = None,
  change_password_at_next_login: typing.Union[bool, IResolvable] = None,
  custom_schemas: typing.Union[IResolvable, typing.List[UserCustomSchemas]] = None,
  emails: typing.Union[IResolvable, typing.List[UserEmails]] = None,
  external_ids: typing.Union[IResolvable, typing.List[UserExternalIds]] = None,
  hash_function: str = None,
  ims: typing.Union[IResolvable, typing.List[UserIms]] = None,
  include_in_global_address_list: typing.Union[bool, IResolvable] = None,
  ip_allowlist: typing.Union[bool, IResolvable] = None,
  is_admin: typing.Union[bool, IResolvable] = None,
  keywords: typing.Union[IResolvable, typing.List[UserKeywords]] = None,
  languages: typing.Union[IResolvable, typing.List[UserLanguages]] = None,
  locations: typing.Union[IResolvable, typing.List[UserLocations]] = None,
  organizations: typing.Union[IResolvable, typing.List[UserOrganizations]] = None,
  org_unit_path: str = None,
  password: str = None,
  phones: typing.Union[IResolvable, typing.List[UserPhones]] = None,
  posix_accounts: typing.Union[IResolvable, typing.List[UserPosixAccounts]] = None,
  recovery_email: str = None,
  recovery_phone: str = None,
  relations: typing.Union[IResolvable, typing.List[UserRelations]] = None,
  ssh_public_keys: typing.Union[IResolvable, typing.List[UserSshPublicKeys]] = None,
  suspended: typing.Union[bool, IResolvable] = None,
  timeouts: UserTimeouts = None,
  websites: typing.Union[IResolvable, typing.List[UserWebsites]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.name">name</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | name block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.primaryEmail">primary_email</a></code> | <code>str</code> | The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.addresses">addresses</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>]]</code> | addresses block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | asps.list of the user's alias email addresses. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if user is archived. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.changePasswordAtNextLogin">change_password_at_next_login</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the user is forced to change their password at next login. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.customSchemas">custom_schemas</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>]]</code> | custom_schemas block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.emails">emails</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>]]</code> | emails block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.externalIds">external_ids</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>]]</code> | external_ids block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.hashFunction">hash_function</a></code> | <code>str</code> | Stores the hash format of the password property. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.ims">ims</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>]]</code> | ims block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.includeInGlobalAddressList">include_in_global_address_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.ipAllowlist">ip_allowlist</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the user's IP address is added to the allow list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.isAdmin">is_admin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates a user with super admininistrator privileges. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.keywords">keywords</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>]]</code> | keywords block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.languages">languages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>]]</code> | languages block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.locations">locations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>]]</code> | locations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.organizations">organizations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>]]</code> | organizations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.orgUnitPath">org_unit_path</a></code> | <code>str</code> | The full path of the parent organization associated with the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.password">password</a></code> | <code>str</code> | Stores the password for the user account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.phones">phones</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>]]</code> | phones block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.posixAccounts">posix_accounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>]]</code> | posix_accounts block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryEmail">recovery_email</a></code> | <code>str</code> | Recovery email of the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryPhone">recovery_phone</a></code> | <code>str</code> | Recovery phone of the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.relations">relations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>]]</code> | relations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>]]</code> | ssh_public_keys block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if user is suspended. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.websites">websites</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>]]</code> | websites block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.user.UserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.user.UserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.user.UserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.user.UserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.user.UserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.user.UserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.user.UserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.UserConfig.property.name"></a>

```python
name: UserName
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#name User#name}

---

##### `primary_email`<sup>Required</sup> <a name="primary_email" id="@cdktf/provider-googleworkspace.user.UserConfig.property.primaryEmail"></a>

```python
primary_email: str
```

- *Type:* str

The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary_email User#primary_email}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-googleworkspace.user.UserConfig.property.addresses"></a>

```python
addresses: typing.Union[IResolvable, typing.List[UserAddresses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>]]

addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#addresses User#addresses}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-googleworkspace.user.UserConfig.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

asps.list of the user's alias email addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#aliases User#aliases}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-googleworkspace.user.UserConfig.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if user is archived.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#archived User#archived}

---

##### `change_password_at_next_login`<sup>Optional</sup> <a name="change_password_at_next_login" id="@cdktf/provider-googleworkspace.user.UserConfig.property.changePasswordAtNextLogin"></a>

```python
change_password_at_next_login: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the user is forced to change their password at next login.

This setting doesn't apply when the user signs in via a third-party identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#change_password_at_next_login User#change_password_at_next_login}

---

##### `custom_schemas`<sup>Optional</sup> <a name="custom_schemas" id="@cdktf/provider-googleworkspace.user.UserConfig.property.customSchemas"></a>

```python
custom_schemas: typing.Union[IResolvable, typing.List[UserCustomSchemas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>]]

custom_schemas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_schemas User#custom_schemas}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-googleworkspace.user.UserConfig.property.emails"></a>

```python
emails: typing.Union[IResolvable, typing.List[UserEmails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>]]

emails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#emails User#emails}

---

##### `external_ids`<sup>Optional</sup> <a name="external_ids" id="@cdktf/provider-googleworkspace.user.UserConfig.property.externalIds"></a>

```python
external_ids: typing.Union[IResolvable, typing.List[UserExternalIds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>]]

external_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#external_ids User#external_ids}

---

##### `hash_function`<sup>Optional</sup> <a name="hash_function" id="@cdktf/provider-googleworkspace.user.UserConfig.property.hashFunction"></a>

```python
hash_function: str
```

- *Type:* str

Stores the hash format of the password property.

We recommend sending the password property value as a base 16 bit hexadecimal-encoded hash value. Set the hashFunction values as either the SHA-1, MD5, or crypt hash format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#hash_function User#hash_function}

---

##### `ims`<sup>Optional</sup> <a name="ims" id="@cdktf/provider-googleworkspace.user.UserConfig.property.ims"></a>

```python
ims: typing.Union[IResolvable, typing.List[UserIms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>]]

ims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ims User#ims}

---

##### `include_in_global_address_list`<sup>Optional</sup> <a name="include_in_global_address_list" id="@cdktf/provider-googleworkspace.user.UserConfig.property.includeInGlobalAddressList"></a>

```python
include_in_global_address_list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `true`.

Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#include_in_global_address_list User#include_in_global_address_list}

---

##### `ip_allowlist`<sup>Optional</sup> <a name="ip_allowlist" id="@cdktf/provider-googleworkspace.user.UserConfig.property.ipAllowlist"></a>

```python
ip_allowlist: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the user's IP address is added to the allow list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ip_allowlist User#ip_allowlist}

---

##### `is_admin`<sup>Optional</sup> <a name="is_admin" id="@cdktf/provider-googleworkspace.user.UserConfig.property.isAdmin"></a>

```python
is_admin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates a user with super admininistrator privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#is_admin User#is_admin}

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktf/provider-googleworkspace.user.UserConfig.property.keywords"></a>

```python
keywords: typing.Union[IResolvable, typing.List[UserKeywords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>]]

keywords block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#keywords User#keywords}

---

##### `languages`<sup>Optional</sup> <a name="languages" id="@cdktf/provider-googleworkspace.user.UserConfig.property.languages"></a>

```python
languages: typing.Union[IResolvable, typing.List[UserLanguages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>]]

languages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#languages User#languages}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-googleworkspace.user.UserConfig.property.locations"></a>

```python
locations: typing.Union[IResolvable, typing.List[UserLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>]]

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#locations User#locations}

---

##### `organizations`<sup>Optional</sup> <a name="organizations" id="@cdktf/provider-googleworkspace.user.UserConfig.property.organizations"></a>

```python
organizations: typing.Union[IResolvable, typing.List[UserOrganizations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>]]

organizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#organizations User#organizations}

---

##### `org_unit_path`<sup>Optional</sup> <a name="org_unit_path" id="@cdktf/provider-googleworkspace.user.UserConfig.property.orgUnitPath"></a>

```python
org_unit_path: str
```

- *Type:* str

The full path of the parent organization associated with the user.

If the parent organization is the top-level, it is represented as a forward slash (/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#org_unit_path User#org_unit_path}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-googleworkspace.user.UserConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Stores the password for the user account.

A password can contain any combination of ASCII characters. A minimum of 8 characters is required. The maximum length is 100 characters. As the API does not return the value of password, this field is write-only, and the value stored in the state will be what is provided in the configuration. The field is required on create and will be empty on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#password User#password}

---

##### `phones`<sup>Optional</sup> <a name="phones" id="@cdktf/provider-googleworkspace.user.UserConfig.property.phones"></a>

```python
phones: typing.Union[IResolvable, typing.List[UserPhones]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>]]

phones block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#phones User#phones}

---

##### `posix_accounts`<sup>Optional</sup> <a name="posix_accounts" id="@cdktf/provider-googleworkspace.user.UserConfig.property.posixAccounts"></a>

```python
posix_accounts: typing.Union[IResolvable, typing.List[UserPosixAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>]]

posix_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#posix_accounts User#posix_accounts}

---

##### `recovery_email`<sup>Optional</sup> <a name="recovery_email" id="@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryEmail"></a>

```python
recovery_email: str
```

- *Type:* str

Recovery email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#recovery_email User#recovery_email}

---

##### `recovery_phone`<sup>Optional</sup> <a name="recovery_phone" id="@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryPhone"></a>

```python
recovery_phone: str
```

- *Type:* str

Recovery phone of the user.

The phone number must be in the E.164 format, starting with the plus sign (+). Example: +16506661212.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#recovery_phone User#recovery_phone}

---

##### `relations`<sup>Optional</sup> <a name="relations" id="@cdktf/provider-googleworkspace.user.UserConfig.property.relations"></a>

```python
relations: typing.Union[IResolvable, typing.List[UserRelations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>]]

relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#relations User#relations}

---

##### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktf/provider-googleworkspace.user.UserConfig.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.Union[IResolvable, typing.List[UserSshPublicKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>]]

ssh_public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ssh_public_keys User#ssh_public_keys}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-googleworkspace.user.UserConfig.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if user is suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#suspended User#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.user.UserConfig.property.timeouts"></a>

```python
timeouts: UserTimeouts
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#timeouts User#timeouts}

---

##### `websites`<sup>Optional</sup> <a name="websites" id="@cdktf/provider-googleworkspace.user.UserConfig.property.websites"></a>

```python
websites: typing.Union[IResolvable, typing.List[UserWebsites]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>]]

websites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#websites User#websites}

---

### UserCustomSchemas <a name="UserCustomSchemas" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserCustomSchemas(
  schema_name: str,
  schema_values: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaName">schema_name</a></code> | <code>str</code> | The name of the schema. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaValues">schema_values</a></code> | <code>typing.Mapping[str]</code> | JSON encoded map that represents key/value pairs that correspond to the given schema. |

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#schema_name User#schema_name}

---

##### `schema_values`<sup>Required</sup> <a name="schema_values" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaValues"></a>

```python
schema_values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

JSON encoded map that represents key/value pairs that correspond to the given schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#schema_values User#schema_values}

---

### UserEmails <a name="UserEmails" id="@cdktf/provider-googleworkspace.user.UserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserEmails.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserEmails(
  type: str,
  address: str = None,
  custom_type: str = None,
  primary: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.type">type</a></code> | <code>str</code> | The type of the email account. Acceptable values: `custom`, `home`, `other`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.address">address</a></code> | <code>str</code> | The user's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.customType">custom_type</a></code> | <code>str</code> | If the value of type is custom, this property contains the custom type string. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. Indicates if this is the user's primary email. Only one entry can be marked as primary. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserEmails.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the email account. Acceptable values: `custom`, `home`, `other`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-googleworkspace.user.UserEmails.property.address"></a>

```python
address: str
```

- *Type:* str

The user's email address.

Also serves as the email ID. This value can be the user's primary email address or an alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#address User#address}

---

##### `custom_type`<sup>Optional</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserEmails.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

If the value of type is custom, this property contains the custom type string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserEmails.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`. Indicates if this is the user's primary email. Only one entry can be marked as primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

### UserExternalIds <a name="UserExternalIds" id="@cdktf/provider-googleworkspace.user.UserExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserExternalIds.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserExternalIds(
  type: str,
  value: str,
  custom_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIds.property.type">type</a></code> | <code>str</code> | The type of external ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIds.property.value">value</a></code> | <code>str</code> | The value of the ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIds.property.customType">custom_type</a></code> | <code>str</code> | If the external ID type is custom, this property contains the custom value and must be set. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserExternalIds.property.type"></a>

```python
type: str
```

- *Type:* str

The type of external ID.

If set to custom, customType must also be set. Acceptable values: `account`, `custom`, `customer`, `login_id`, `network`, `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserExternalIds.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `custom_type`<sup>Optional</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserExternalIds.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

If the external ID type is custom, this property contains the custom value and must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

### UserIms <a name="UserIms" id="@cdktf/provider-googleworkspace.user.UserIms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserIms.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserIms(
  protocol: str,
  type: str,
  custom_protocol: str = None,
  custom_type: str = None,
  im: str = None,
  primary: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.protocol">protocol</a></code> | <code>str</code> | An IM protocol identifies the IM network. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.type">type</a></code> | <code>str</code> | Acceptable values: `custom`, `home`, `other`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.customProtocol">custom_protocol</a></code> | <code>str</code> | If the protocol value is custom_protocol, this property holds the custom protocol's string. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.customType">custom_type</a></code> | <code>str</code> | If the IM type is custom, this property holds the custom type string. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.im">im</a></code> | <code>str</code> | The user's IM network ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this is the user's primary IM. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-googleworkspace.user.UserIms.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

An IM protocol identifies the IM network.

The value can be a custom network or the standard network. Acceptable values: `aim`, `custom_protocol`, `gtalk`, `icq`, `jabber`, `msn`, `net_meeting`, `qq`, `skype`, `yahoo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#protocol User#protocol}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserIms.property.type"></a>

```python
type: str
```

- *Type:* str

Acceptable values: `custom`, `home`, `other`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `custom_protocol`<sup>Optional</sup> <a name="custom_protocol" id="@cdktf/provider-googleworkspace.user.UserIms.property.customProtocol"></a>

```python
custom_protocol: str
```

- *Type:* str

If the protocol value is custom_protocol, this property holds the custom protocol's string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_protocol User#custom_protocol}

---

##### `custom_type`<sup>Optional</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserIms.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

If the IM type is custom, this property holds the custom type string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `im`<sup>Optional</sup> <a name="im" id="@cdktf/provider-googleworkspace.user.UserIms.property.im"></a>

```python
im: str
```

- *Type:* str

The user's IM network ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#im User#im}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserIms.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this is the user's primary IM.

Only one entry in the IM list can have a value of true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

### UserKeywords <a name="UserKeywords" id="@cdktf/provider-googleworkspace.user.UserKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserKeywords.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserKeywords(
  type: str,
  value: str,
  custom_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywords.property.type">type</a></code> | <code>str</code> | Each entry can have a type which indicates standard type of that entry. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywords.property.value">value</a></code> | <code>str</code> | Keyword. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywords.property.customType">custom_type</a></code> | <code>str</code> | Custom Type. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserKeywords.property.type"></a>

```python
type: str
```

- *Type:* str

Each entry can have a type which indicates standard type of that entry.

For example, keyword could be of type occupation or outlook. In addition to the standard type, an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. Acceptable values: `custom`, `mission`, `occupation`, `outlook`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserKeywords.property.value"></a>

```python
value: str
```

- *Type:* str

Keyword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `custom_type`<sup>Optional</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserKeywords.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

Custom Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

### UserLanguages <a name="UserLanguages" id="@cdktf/provider-googleworkspace.user.UserLanguages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserLanguages.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserLanguages(
  custom_language: str = None,
  language_code: str = None,
  preference: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguages.property.customLanguage">custom_language</a></code> | <code>str</code> | Other language. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguages.property.languageCode">language_code</a></code> | <code>str</code> | Defaults to `en`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguages.property.preference">preference</a></code> | <code>str</code> | Defaults to `preferred`. |

---

##### `custom_language`<sup>Optional</sup> <a name="custom_language" id="@cdktf/provider-googleworkspace.user.UserLanguages.property.customLanguage"></a>

```python
custom_language: str
```

- *Type:* str

Other language.

A user can provide their own language name if there is no corresponding Google III language code. If this is set, LanguageCode can't be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_language User#custom_language}

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktf/provider-googleworkspace.user.UserLanguages.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Defaults to `en`.

Language Code. Should be used for storing Google III LanguageCode string representation for language. Illegal values cause SchemaException.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#language_code User#language_code}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-googleworkspace.user.UserLanguages.property.preference"></a>

```python
preference: str
```

- *Type:* str

Defaults to `preferred`.

If present, controls whether the specified languageCode is the user's preferred language. Allowed values are `preferred` and `not_preferred`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#preference User#preference}

---

### UserLocations <a name="UserLocations" id="@cdktf/provider-googleworkspace.user.UserLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserLocations(
  type: str,
  area: str = None,
  building_id: str = None,
  custom_type: str = None,
  desk_code: str = None,
  floor_name: str = None,
  floor_section: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.type">type</a></code> | <code>str</code> | The location type. Acceptable values: `custom`, `default`, `desk`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.area">area</a></code> | <code>str</code> | Textual location. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.buildingId">building_id</a></code> | <code>str</code> | Building identifier. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.customType">custom_type</a></code> | <code>str</code> | If the location type is custom, this property contains the custom value. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.deskCode">desk_code</a></code> | <code>str</code> | Most specific textual code of individual desk location. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.floorName">floor_name</a></code> | <code>str</code> | Floor name/number. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.floorSection">floor_section</a></code> | <code>str</code> | Floor section. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserLocations.property.type"></a>

```python
type: str
```

- *Type:* str

The location type. Acceptable values: `custom`, `default`, `desk`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `area`<sup>Optional</sup> <a name="area" id="@cdktf/provider-googleworkspace.user.UserLocations.property.area"></a>

```python
area: str
```

- *Type:* str

Textual location.

This is most useful for display purposes to concisely describe the location. For example, Mountain View, CA or Near Seattle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#area User#area}

---

##### `building_id`<sup>Optional</sup> <a name="building_id" id="@cdktf/provider-googleworkspace.user.UserLocations.property.buildingId"></a>

```python
building_id: str
```

- *Type:* str

Building identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#building_id User#building_id}

---

##### `custom_type`<sup>Optional</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserLocations.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

If the location type is custom, this property contains the custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `desk_code`<sup>Optional</sup> <a name="desk_code" id="@cdktf/provider-googleworkspace.user.UserLocations.property.deskCode"></a>

```python
desk_code: str
```

- *Type:* str

Most specific textual code of individual desk location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#desk_code User#desk_code}

---

##### `floor_name`<sup>Optional</sup> <a name="floor_name" id="@cdktf/provider-googleworkspace.user.UserLocations.property.floorName"></a>

```python
floor_name: str
```

- *Type:* str

Floor name/number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#floor_name User#floor_name}

---

##### `floor_section`<sup>Optional</sup> <a name="floor_section" id="@cdktf/provider-googleworkspace.user.UserLocations.property.floorSection"></a>

```python
floor_section: str
```

- *Type:* str

Floor section.

More specific location within the floor. For example, if a floor is divided into sections A, B, and C, this field would identify one of those values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#floor_section User#floor_section}

---

### UserName <a name="UserName" id="@cdktf/provider-googleworkspace.user.UserName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserName.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserName(
  family_name: str,
  given_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserName.property.familyName">family_name</a></code> | <code>str</code> | The user's last name. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserName.property.givenName">given_name</a></code> | <code>str</code> | The user's first name. |

---

##### `family_name`<sup>Required</sup> <a name="family_name" id="@cdktf/provider-googleworkspace.user.UserName.property.familyName"></a>

```python
family_name: str
```

- *Type:* str

The user's last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#family_name User#family_name}

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktf/provider-googleworkspace.user.UserName.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

The user's first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#given_name User#given_name}

---

### UserOrganizations <a name="UserOrganizations" id="@cdktf/provider-googleworkspace.user.UserOrganizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserOrganizations.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserOrganizations(
  type: str,
  cost_center: str = None,
  custom_type: str = None,
  department: str = None,
  description: str = None,
  domain: str = None,
  full_time_equivalent: typing.Union[int, float] = None,
  location: str = None,
  name: str = None,
  primary: typing.Union[bool, IResolvable] = None,
  symbol: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.type">type</a></code> | <code>str</code> | The type of organization. Acceptable values: `domain_only`, `school`, `unknown`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.costCenter">cost_center</a></code> | <code>str</code> | The cost center of the user's organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.customType">custom_type</a></code> | <code>str</code> | If the value of type is custom, this property contains the custom value. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.department">department</a></code> | <code>str</code> | Specifies the department within the organization, such as sales or engineering. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.description">description</a></code> | <code>str</code> | The description of the organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.domain">domain</a></code> | <code>str</code> | The domain the organization belongs to. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.fullTimeEquivalent">full_time_equivalent</a></code> | <code>typing.Union[int, float]</code> | The full-time equivalent millipercent within the organization (100000 = 100%). |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.location">location</a></code> | <code>str</code> | The physical location of the organization. This does not need to be a fully qualified address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.name">name</a></code> | <code>str</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if this is the user's primary organization. A user may only have one primary organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.symbol">symbol</a></code> | <code>str</code> | Text string symbol of the organization. For example, the text symbol for Google is GOOG. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.title">title</a></code> | <code>str</code> | The user's title within the organization. For example, member or engineer. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.type"></a>

```python
type: str
```

- *Type:* str

The type of organization. Acceptable values: `domain_only`, `school`, `unknown`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `cost_center`<sup>Optional</sup> <a name="cost_center" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.costCenter"></a>

```python
cost_center: str
```

- *Type:* str

The cost center of the user's organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#cost_center User#cost_center}

---

##### `custom_type`<sup>Optional</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

If the value of type is custom, this property contains the custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.department"></a>

```python
department: str
```

- *Type:* str

Specifies the department within the organization, such as sales or engineering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#department User#department}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#description User#description}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.domain"></a>

```python
domain: str
```

- *Type:* str

The domain the organization belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#domain User#domain}

---

##### `full_time_equivalent`<sup>Optional</sup> <a name="full_time_equivalent" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.fullTimeEquivalent"></a>

```python
full_time_equivalent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The full-time equivalent millipercent within the organization (100000 = 100%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#full_time_equivalent User#full_time_equivalent}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.location"></a>

```python
location: str
```

- *Type:* str

The physical location of the organization. This does not need to be a fully qualified address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#location User#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#name User#name}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if this is the user's primary organization. A user may only have one primary organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

##### `symbol`<sup>Optional</sup> <a name="symbol" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.symbol"></a>

```python
symbol: str
```

- *Type:* str

Text string symbol of the organization. For example, the text symbol for Google is GOOG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#symbol User#symbol}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.title"></a>

```python
title: str
```

- *Type:* str

The user's title within the organization. For example, member or engineer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#title User#title}

---

### UserPhones <a name="UserPhones" id="@cdktf/provider-googleworkspace.user.UserPhones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserPhones.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserPhones(
  type: str,
  value: str,
  custom_type: str = None,
  primary: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.type">type</a></code> | <code>str</code> | The type of phone number. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.value">value</a></code> | <code>str</code> | A human-readable phone number. It may be in any telephone number format. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.customType">custom_type</a></code> | <code>str</code> | If the phone number type is custom, this property contains the custom value and must be set. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if this is the user's primary phone number. A user may only have one primary phone number. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserPhones.property.type"></a>

```python
type: str
```

- *Type:* str

The type of phone number.

Acceptable values: `assistant`, `callback`, `car`, `company_main` , `custom`, `grand_central`, `home`, `home_fax`, `isdn`, `main`, `mobile`, `other`, `other_fax`, `pager`, `radio`, `telex`, `tty_tdd`, `work`, `work_fax`, `work_mobile`, `work_pager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserPhones.property.value"></a>

```python
value: str
```

- *Type:* str

A human-readable phone number. It may be in any telephone number format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `custom_type`<sup>Optional</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserPhones.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

If the phone number type is custom, this property contains the custom value and must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserPhones.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if this is the user's primary phone number. A user may only have one primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

### UserPosixAccounts <a name="UserPosixAccounts" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserPosixAccounts(
  account_id: str = None,
  gecos: str = None,
  gid: str = None,
  home_directory: str = None,
  operating_system_type: str = None,
  primary: typing.Union[bool, IResolvable] = None,
  shell: str = None,
  system_id: str = None,
  uid: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.accountId">account_id</a></code> | <code>str</code> | A POSIX account field identifier. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gecos">gecos</a></code> | <code>str</code> | The GECOS (user information) for this account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gid">gid</a></code> | <code>str</code> | The default group ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.homeDirectory">home_directory</a></code> | <code>str</code> | The path to the home directory for this account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.operatingSystemType">operating_system_type</a></code> | <code>str</code> | The operating system type for this account. Acceptable values: `linux`, `unspecified`, `windows`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this is user's primary account within the SystemId. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.shell">shell</a></code> | <code>str</code> | The path to the login shell for this account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.systemId">system_id</a></code> | <code>str</code> | System identifier for which account Username or Uid apply to. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.uid">uid</a></code> | <code>str</code> | The POSIX compliant user ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.username">username</a></code> | <code>str</code> | The username of the account. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

A POSIX account field identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#account_id User#account_id}

---

##### `gecos`<sup>Optional</sup> <a name="gecos" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gecos"></a>

```python
gecos: str
```

- *Type:* str

The GECOS (user information) for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#gecos User#gecos}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gid"></a>

```python
gid: str
```

- *Type:* str

The default group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#gid User#gid}

---

##### `home_directory`<sup>Optional</sup> <a name="home_directory" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.homeDirectory"></a>

```python
home_directory: str
```

- *Type:* str

The path to the home directory for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#home_directory User#home_directory}

---

##### `operating_system_type`<sup>Optional</sup> <a name="operating_system_type" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.operatingSystemType"></a>

```python
operating_system_type: str
```

- *Type:* str

The operating system type for this account. Acceptable values: `linux`, `unspecified`, `windows`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#operating_system_type User#operating_system_type}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this is user's primary account within the SystemId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

##### `shell`<sup>Optional</sup> <a name="shell" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.shell"></a>

```python
shell: str
```

- *Type:* str

The path to the login shell for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#shell User#shell}

---

##### `system_id`<sup>Optional</sup> <a name="system_id" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.systemId"></a>

```python
system_id: str
```

- *Type:* str

System identifier for which account Username or Uid apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#system_id User#system_id}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.uid"></a>

```python
uid: str
```

- *Type:* str

The POSIX compliant user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#uid User#uid}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.username"></a>

```python
username: str
```

- *Type:* str

The username of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#username User#username}

---

### UserRelations <a name="UserRelations" id="@cdktf/provider-googleworkspace.user.UserRelations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserRelations.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserRelations(
  type: str,
  value: str,
  custom_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelations.property.type">type</a></code> | <code>str</code> | The type of relation. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelations.property.value">value</a></code> | <code>str</code> | The name of the person the user is related to. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelations.property.customType">custom_type</a></code> | <code>str</code> | If the value of type is custom, this property contains the custom type string. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserRelations.property.type"></a>

```python
type: str
```

- *Type:* str

The type of relation.

Acceptable values: `admin_assistant`, `assistant`, `brother`, `child`, `custom`, `domestic_partner`, `dotted_line_manager`, `exec_assistant`, `father`, `friend`, `manager`, `mother`, `parent`, `partner`, `referred_by`, `relative`, `sister`, `spouse`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserRelations.property.value"></a>

```python
value: str
```

- *Type:* str

The name of the person the user is related to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `custom_type`<sup>Optional</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserRelations.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

If the value of type is custom, this property contains the custom type string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

### UserSshPublicKeys <a name="UserSshPublicKeys" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserSshPublicKeys(
  key: str,
  expiration_time_usec: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.key">key</a></code> | <code>str</code> | An SSH public key. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.expirationTimeUsec">expiration_time_usec</a></code> | <code>str</code> | An expiration time in microseconds since epoch. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.key"></a>

```python
key: str
```

- *Type:* str

An SSH public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#key User#key}

---

##### `expiration_time_usec`<sup>Optional</sup> <a name="expiration_time_usec" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.expirationTimeUsec"></a>

```python
expiration_time_usec: str
```

- *Type:* str

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#expiration_time_usec User#expiration_time_usec}

---

### UserTimeouts <a name="UserTimeouts" id="@cdktf/provider-googleworkspace.user.UserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#create User#create}. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#update User#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-googleworkspace.user.UserTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#create User#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-googleworkspace.user.UserTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#update User#update}.

---

### UserWebsites <a name="UserWebsites" id="@cdktf/provider-googleworkspace.user.UserWebsites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserWebsites.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserWebsites(
  type: str,
  value: str,
  custom_type: str = None,
  primary: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.type">type</a></code> | <code>str</code> | The type or purpose of the website. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.value">value</a></code> | <code>str</code> | The URL of the website. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.customType">custom_type</a></code> | <code>str</code> | The custom type. Only used if the type is custom. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this is user's primary website or not. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.type"></a>

```python
type: str
```

- *Type:* str

The type or purpose of the website.

For example, a website could be labeled as home or blog. Alternatively, an entry can have a custom type Custom types must have a customType value. Acceptable values: `app_install_page`, `blog`, `custom`, `ftp` , `home`, `home_page`, `other`, `profile`, `reservations`, `resume`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.value"></a>

```python
value: str
```

- *Type:* str

The URL of the website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `custom_type`<sup>Optional</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

The custom type. Only used if the type is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this is user's primary website or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

## Classes <a name="Classes" id="Classes"></a>

### UserAddressesList <a name="UserAddressesList" id="@cdktf/provider-googleworkspace.user.UserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserAddressesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserAddresses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>]]

---


### UserAddressesOutputReference <a name="UserAddressesOutputReference" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCustomType">reset_custom_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetExtendedAddress">reset_extended_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetFormatted">reset_formatted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPoBox">reset_po_box</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetSourceIsStructured">reset_source_is_structured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetStreetAddress">reset_street_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_country` <a name="reset_country" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_custom_type` <a name="reset_custom_type" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCustomType"></a>

```python
def reset_custom_type() -> None
```

##### `reset_extended_address` <a name="reset_extended_address" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetExtendedAddress"></a>

```python
def reset_extended_address() -> None
```

##### `reset_formatted` <a name="reset_formatted" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetFormatted"></a>

```python
def reset_formatted() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_po_box` <a name="reset_po_box" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPoBox"></a>

```python
def reset_po_box() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_source_is_structured` <a name="reset_source_is_structured" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetSourceIsStructured"></a>

```python
def reset_source_is_structured() -> None
```

##### `reset_street_address` <a name="reset_street_address" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetStreetAddress"></a>

```python
def reset_street_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customTypeInput">custom_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddressInput">extended_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formattedInput">formatted_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBoxInput">po_box_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructuredInput">source_is_structured_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddressInput">street_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddress">extended_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formatted">formatted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBox">po_box</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructured">source_is_structured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `custom_type_input`<sup>Optional</sup> <a name="custom_type_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customTypeInput"></a>

```python
custom_type_input: str
```

- *Type:* str

---

##### `extended_address_input`<sup>Optional</sup> <a name="extended_address_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddressInput"></a>

```python
extended_address_input: str
```

- *Type:* str

---

##### `formatted_input`<sup>Optional</sup> <a name="formatted_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formattedInput"></a>

```python
formatted_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `po_box_input`<sup>Optional</sup> <a name="po_box_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBoxInput"></a>

```python
po_box_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `source_is_structured_input`<sup>Optional</sup> <a name="source_is_structured_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructuredInput"></a>

```python
source_is_structured_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `street_address_input`<sup>Optional</sup> <a name="street_address_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddressInput"></a>

```python
street_address_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `extended_address`<sup>Required</sup> <a name="extended_address" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddress"></a>

```python
extended_address: str
```

- *Type:* str

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `po_box`<sup>Required</sup> <a name="po_box" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBox"></a>

```python
po_box: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `source_is_structured`<sup>Required</sup> <a name="source_is_structured" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructured"></a>

```python
source_is_structured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserAddresses]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>]

---


### UserCustomSchemasList <a name="UserCustomSchemasList" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserCustomSchemasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserCustomSchemasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserCustomSchemas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>]]

---


### UserCustomSchemasOutputReference <a name="UserCustomSchemasOutputReference" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserCustomSchemasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValuesInput">schema_values_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValues">schema_values</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `schema_values_input`<sup>Optional</sup> <a name="schema_values_input" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValuesInput"></a>

```python
schema_values_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `schema_values`<sup>Required</sup> <a name="schema_values" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValues"></a>

```python
schema_values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserCustomSchemas]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>]

---


### UserEmailsList <a name="UserEmailsList" id="@cdktf/provider-googleworkspace.user.UserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserEmailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserEmailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserEmailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserEmailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserEmailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserEmailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserEmailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserEmailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserEmailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserEmailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserEmailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserEmailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserEmailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserEmails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>]]

---


### UserEmailsOutputReference <a name="UserEmailsOutputReference" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserEmailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetCustomType">reset_custom_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_custom_type` <a name="reset_custom_type" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetCustomType"></a>

```python
def reset_custom_type() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customTypeInput">custom_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `custom_type_input`<sup>Optional</sup> <a name="custom_type_input" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customTypeInput"></a>

```python
custom_type_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserEmails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>]

---


### UserExternalIdsList <a name="UserExternalIdsList" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserExternalIdsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserExternalIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserExternalIds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>]]

---


### UserExternalIdsOutputReference <a name="UserExternalIdsOutputReference" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserExternalIdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resetCustomType">reset_custom_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_type` <a name="reset_custom_type" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resetCustomType"></a>

```python
def reset_custom_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customTypeInput">custom_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_type_input`<sup>Optional</sup> <a name="custom_type_input" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customTypeInput"></a>

```python
custom_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserExternalIds]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>]

---


### UserImsList <a name="UserImsList" id="@cdktf/provider-googleworkspace.user.UserImsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserImsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserImsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserImsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserImsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserImsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserImsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserImsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserImsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserImsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserImsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserImsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserImsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserImsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserIms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>]]

---


### UserImsOutputReference <a name="UserImsOutputReference" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserImsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomProtocol">reset_custom_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomType">reset_custom_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetIm">reset_im</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_protocol` <a name="reset_custom_protocol" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomProtocol"></a>

```python
def reset_custom_protocol() -> None
```

##### `reset_custom_type` <a name="reset_custom_type" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomType"></a>

```python
def reset_custom_type() -> None
```

##### `reset_im` <a name="reset_im" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetIm"></a>

```python
def reset_im() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocolInput">custom_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customTypeInput">custom_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.imInput">im_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocol">custom_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.im">im</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_protocol_input`<sup>Optional</sup> <a name="custom_protocol_input" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocolInput"></a>

```python
custom_protocol_input: str
```

- *Type:* str

---

##### `custom_type_input`<sup>Optional</sup> <a name="custom_type_input" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customTypeInput"></a>

```python
custom_type_input: str
```

- *Type:* str

---

##### `im_input`<sup>Optional</sup> <a name="im_input" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.imInput"></a>

```python
im_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `custom_protocol`<sup>Required</sup> <a name="custom_protocol" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocol"></a>

```python
custom_protocol: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `im`<sup>Required</sup> <a name="im" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.im"></a>

```python
im: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserIms]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>]

---


### UserKeywordsList <a name="UserKeywordsList" id="@cdktf/provider-googleworkspace.user.UserKeywordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserKeywordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserKeywordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserKeywords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>]]

---


### UserKeywordsOutputReference <a name="UserKeywordsOutputReference" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserKeywordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resetCustomType">reset_custom_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_type` <a name="reset_custom_type" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resetCustomType"></a>

```python
def reset_custom_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customTypeInput">custom_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_type_input`<sup>Optional</sup> <a name="custom_type_input" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customTypeInput"></a>

```python
custom_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserKeywords]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>]

---


### UserLanguagesList <a name="UserLanguagesList" id="@cdktf/provider-googleworkspace.user.UserLanguagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserLanguagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserLanguagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserLanguages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>]]

---


### UserLanguagesOutputReference <a name="UserLanguagesOutputReference" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserLanguagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetCustomLanguage">reset_custom_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetLanguageCode">reset_language_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetPreference">reset_preference</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_language` <a name="reset_custom_language" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetCustomLanguage"></a>

```python
def reset_custom_language() -> None
```

##### `reset_language_code` <a name="reset_language_code" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetLanguageCode"></a>

```python
def reset_language_code() -> None
```

##### `reset_preference` <a name="reset_preference" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetPreference"></a>

```python
def reset_preference() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguageInput">custom_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preferenceInput">preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguage">custom_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_language_input`<sup>Optional</sup> <a name="custom_language_input" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguageInput"></a>

```python
custom_language_input: str
```

- *Type:* str

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `preference_input`<sup>Optional</sup> <a name="preference_input" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preferenceInput"></a>

```python
preference_input: str
```

- *Type:* str

---

##### `custom_language`<sup>Required</sup> <a name="custom_language" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguage"></a>

```python
custom_language: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserLanguages]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>]

---


### UserLocationsList <a name="UserLocationsList" id="@cdktf/provider-googleworkspace.user.UserLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserLocationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>]]

---


### UserLocationsOutputReference <a name="UserLocationsOutputReference" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetArea">reset_area</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetBuildingId">reset_building_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetCustomType">reset_custom_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetDeskCode">reset_desk_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorName">reset_floor_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorSection">reset_floor_section</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_area` <a name="reset_area" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetArea"></a>

```python
def reset_area() -> None
```

##### `reset_building_id` <a name="reset_building_id" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetBuildingId"></a>

```python
def reset_building_id() -> None
```

##### `reset_custom_type` <a name="reset_custom_type" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetCustomType"></a>

```python
def reset_custom_type() -> None
```

##### `reset_desk_code` <a name="reset_desk_code" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetDeskCode"></a>

```python
def reset_desk_code() -> None
```

##### `reset_floor_name` <a name="reset_floor_name" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorName"></a>

```python
def reset_floor_name() -> None
```

##### `reset_floor_section` <a name="reset_floor_section" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorSection"></a>

```python
def reset_floor_section() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.areaInput">area_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingIdInput">building_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customTypeInput">custom_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCodeInput">desk_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorNameInput">floor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSectionInput">floor_section_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.area">area</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingId">building_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCode">desk_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorName">floor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSection">floor_section</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `area_input`<sup>Optional</sup> <a name="area_input" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.areaInput"></a>

```python
area_input: str
```

- *Type:* str

---

##### `building_id_input`<sup>Optional</sup> <a name="building_id_input" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingIdInput"></a>

```python
building_id_input: str
```

- *Type:* str

---

##### `custom_type_input`<sup>Optional</sup> <a name="custom_type_input" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customTypeInput"></a>

```python
custom_type_input: str
```

- *Type:* str

---

##### `desk_code_input`<sup>Optional</sup> <a name="desk_code_input" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCodeInput"></a>

```python
desk_code_input: str
```

- *Type:* str

---

##### `floor_name_input`<sup>Optional</sup> <a name="floor_name_input" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorNameInput"></a>

```python
floor_name_input: str
```

- *Type:* str

---

##### `floor_section_input`<sup>Optional</sup> <a name="floor_section_input" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSectionInput"></a>

```python
floor_section_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `area`<sup>Required</sup> <a name="area" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.area"></a>

```python
area: str
```

- *Type:* str

---

##### `building_id`<sup>Required</sup> <a name="building_id" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingId"></a>

```python
building_id: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `desk_code`<sup>Required</sup> <a name="desk_code" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCode"></a>

```python
desk_code: str
```

- *Type:* str

---

##### `floor_name`<sup>Required</sup> <a name="floor_name" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorName"></a>

```python
floor_name: str
```

- *Type:* str

---

##### `floor_section`<sup>Required</sup> <a name="floor_section" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSection"></a>

```python
floor_section: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserLocations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>]

---


### UserNameOutputReference <a name="UserNameOutputReference" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.resetGivenName">reset_given_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_given_name` <a name="reset_given_name" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.resetGivenName"></a>

```python
def reset_given_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyNameInput">family_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyName">family_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `family_name_input`<sup>Optional</sup> <a name="family_name_input" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyNameInput"></a>

```python
family_name_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `family_name`<sup>Required</sup> <a name="family_name" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyName"></a>

```python
family_name: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.internalValue"></a>

```python
internal_value: UserName
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

---


### UserOrganizationsList <a name="UserOrganizationsList" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserOrganizationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserOrganizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserOrganizations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>]]

---


### UserOrganizationsOutputReference <a name="UserOrganizationsOutputReference" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserOrganizationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCostCenter">reset_cost_center</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCustomType">reset_custom_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDepartment">reset_department</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetFullTimeEquivalent">reset_full_time_equivalent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetSymbol">reset_symbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cost_center` <a name="reset_cost_center" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCostCenter"></a>

```python
def reset_cost_center() -> None
```

##### `reset_custom_type` <a name="reset_custom_type" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCustomType"></a>

```python
def reset_custom_type() -> None
```

##### `reset_department` <a name="reset_department" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDepartment"></a>

```python
def reset_department() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_full_time_equivalent` <a name="reset_full_time_equivalent" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetFullTimeEquivalent"></a>

```python
def reset_full_time_equivalent() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_symbol` <a name="reset_symbol" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetSymbol"></a>

```python
def reset_symbol() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenterInput">cost_center_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customTypeInput">custom_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.departmentInput">department_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalentInput">full_time_equivalent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbolInput">symbol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenter">cost_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.department">department</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalent">full_time_equivalent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbol">symbol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_center_input`<sup>Optional</sup> <a name="cost_center_input" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenterInput"></a>

```python
cost_center_input: str
```

- *Type:* str

---

##### `custom_type_input`<sup>Optional</sup> <a name="custom_type_input" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customTypeInput"></a>

```python
custom_type_input: str
```

- *Type:* str

---

##### `department_input`<sup>Optional</sup> <a name="department_input" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.departmentInput"></a>

```python
department_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `full_time_equivalent_input`<sup>Optional</sup> <a name="full_time_equivalent_input" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalentInput"></a>

```python
full_time_equivalent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `symbol_input`<sup>Optional</sup> <a name="symbol_input" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbolInput"></a>

```python
symbol_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `cost_center`<sup>Required</sup> <a name="cost_center" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenter"></a>

```python
cost_center: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.department"></a>

```python
department: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `full_time_equivalent`<sup>Required</sup> <a name="full_time_equivalent" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalent"></a>

```python
full_time_equivalent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `symbol`<sup>Required</sup> <a name="symbol" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbol"></a>

```python
symbol: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserOrganizations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>]

---


### UserPhonesList <a name="UserPhonesList" id="@cdktf/provider-googleworkspace.user.UserPhonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserPhonesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserPhonesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserPhonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserPhonesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserPhonesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserPhonesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserPhonesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserPhonesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserPhonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserPhonesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserPhonesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserPhonesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserPhonesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserPhones]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>]]

---


### UserPhonesOutputReference <a name="UserPhonesOutputReference" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserPhonesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetCustomType">reset_custom_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_type` <a name="reset_custom_type" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetCustomType"></a>

```python
def reset_custom_type() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customTypeInput">custom_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_type_input`<sup>Optional</sup> <a name="custom_type_input" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customTypeInput"></a>

```python
custom_type_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserPhones]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>]

---


### UserPosixAccountsList <a name="UserPosixAccountsList" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserPosixAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserPosixAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserPosixAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>]]

---


### UserPosixAccountsOutputReference <a name="UserPosixAccountsOutputReference" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserPosixAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGecos">reset_gecos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGid">reset_gid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetHomeDirectory">reset_home_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetOperatingSystemType">reset_operating_system_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetShell">reset_shell</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetSystemId">reset_system_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUid">reset_uid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_gecos` <a name="reset_gecos" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGecos"></a>

```python
def reset_gecos() -> None
```

##### `reset_gid` <a name="reset_gid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGid"></a>

```python
def reset_gid() -> None
```

##### `reset_home_directory` <a name="reset_home_directory" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetHomeDirectory"></a>

```python
def reset_home_directory() -> None
```

##### `reset_operating_system_type` <a name="reset_operating_system_type" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetOperatingSystemType"></a>

```python
def reset_operating_system_type() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_shell` <a name="reset_shell" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetShell"></a>

```python
def reset_shell() -> None
```

##### `reset_system_id` <a name="reset_system_id" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetSystemId"></a>

```python
def reset_system_id() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUid"></a>

```python
def reset_uid() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecosInput">gecos_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gidInput">gid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectoryInput">home_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemTypeInput">operating_system_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shellInput">shell_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemIdInput">system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uidInput">uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecos">gecos</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gid">gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectory">home_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemType">operating_system_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shell">shell</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemId">system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `gecos_input`<sup>Optional</sup> <a name="gecos_input" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecosInput"></a>

```python
gecos_input: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gidInput"></a>

```python
gid_input: str
```

- *Type:* str

---

##### `home_directory_input`<sup>Optional</sup> <a name="home_directory_input" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectoryInput"></a>

```python
home_directory_input: str
```

- *Type:* str

---

##### `operating_system_type_input`<sup>Optional</sup> <a name="operating_system_type_input" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemTypeInput"></a>

```python
operating_system_type_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shell_input`<sup>Optional</sup> <a name="shell_input" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shellInput"></a>

```python
shell_input: str
```

- *Type:* str

---

##### `system_id_input`<sup>Optional</sup> <a name="system_id_input" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemIdInput"></a>

```python
system_id_input: str
```

- *Type:* str

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uidInput"></a>

```python
uid_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `gecos`<sup>Required</sup> <a name="gecos" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecos"></a>

```python
gecos: str
```

- *Type:* str

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gid"></a>

```python
gid: str
```

- *Type:* str

---

##### `home_directory`<sup>Required</sup> <a name="home_directory" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectory"></a>

```python
home_directory: str
```

- *Type:* str

---

##### `operating_system_type`<sup>Required</sup> <a name="operating_system_type" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemType"></a>

```python
operating_system_type: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shell"></a>

```python
shell: str
```

- *Type:* str

---

##### `system_id`<sup>Required</sup> <a name="system_id" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemId"></a>

```python
system_id: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserPosixAccounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>]

---


### UserRelationsList <a name="UserRelationsList" id="@cdktf/provider-googleworkspace.user.UserRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserRelationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserRelationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserRelationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserRelationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserRelationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserRelationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserRelationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserRelationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserRelationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserRelationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserRelationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserRelationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserRelations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>]]

---


### UserRelationsOutputReference <a name="UserRelationsOutputReference" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserRelationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resetCustomType">reset_custom_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_type` <a name="reset_custom_type" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resetCustomType"></a>

```python
def reset_custom_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customTypeInput">custom_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_type_input`<sup>Optional</sup> <a name="custom_type_input" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customTypeInput"></a>

```python
custom_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserRelations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>]

---


### UserSshPublicKeysList <a name="UserSshPublicKeysList" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserSshPublicKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserSshPublicKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserSshPublicKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>]]

---


### UserSshPublicKeysOutputReference <a name="UserSshPublicKeysOutputReference" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserSshPublicKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resetExpirationTimeUsec">reset_expiration_time_usec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_time_usec` <a name="reset_expiration_time_usec" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resetExpirationTimeUsec"></a>

```python
def reset_expiration_time_usec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsecInput">expiration_time_usec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsec">expiration_time_usec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `expiration_time_usec_input`<sup>Optional</sup> <a name="expiration_time_usec_input" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsecInput"></a>

```python
expiration_time_usec_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `expiration_time_usec`<sup>Required</sup> <a name="expiration_time_usec" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsec"></a>

```python
expiration_time_usec: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserSshPublicKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>]

---


### UserTimeoutsOutputReference <a name="UserTimeoutsOutputReference" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>]

---


### UserWebsitesList <a name="UserWebsitesList" id="@cdktf/provider-googleworkspace.user.UserWebsitesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserWebsitesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserWebsitesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserWebsites]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>]]

---


### UserWebsitesOutputReference <a name="UserWebsitesOutputReference" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import user

user.UserWebsitesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetCustomType">reset_custom_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_type` <a name="reset_custom_type" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetCustomType"></a>

```python
def reset_custom_type() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customTypeInput">custom_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_type_input`<sup>Optional</sup> <a name="custom_type_input" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customTypeInput"></a>

```python
custom_type_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserWebsites]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>]

---



