# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-googleworkspace.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-googleworkspace.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user googleworkspace_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.User.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.User;

User.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(UserName)
    .primaryEmail(java.lang.String)
//  .addresses(IResolvable)
//  .addresses(java.util.List<UserAddresses>)
//  .aliases(java.util.List<java.lang.String>)
//  .archived(java.lang.Boolean)
//  .archived(IResolvable)
//  .changePasswordAtNextLogin(java.lang.Boolean)
//  .changePasswordAtNextLogin(IResolvable)
//  .customSchemas(IResolvable)
//  .customSchemas(java.util.List<UserCustomSchemas>)
//  .emails(IResolvable)
//  .emails(java.util.List<UserEmails>)
//  .externalIds(IResolvable)
//  .externalIds(java.util.List<UserExternalIds>)
//  .hashFunction(java.lang.String)
//  .ims(IResolvable)
//  .ims(java.util.List<UserIms>)
//  .includeInGlobalAddressList(java.lang.Boolean)
//  .includeInGlobalAddressList(IResolvable)
//  .ipAllowlist(java.lang.Boolean)
//  .ipAllowlist(IResolvable)
//  .isAdmin(java.lang.Boolean)
//  .isAdmin(IResolvable)
//  .keywords(IResolvable)
//  .keywords(java.util.List<UserKeywords>)
//  .languages(IResolvable)
//  .languages(java.util.List<UserLanguages>)
//  .locations(IResolvable)
//  .locations(java.util.List<UserLocations>)
//  .organizations(IResolvable)
//  .organizations(java.util.List<UserOrganizations>)
//  .orgUnitPath(java.lang.String)
//  .password(java.lang.String)
//  .phones(IResolvable)
//  .phones(java.util.List<UserPhones>)
//  .posixAccounts(IResolvable)
//  .posixAccounts(java.util.List<UserPosixAccounts>)
//  .recoveryEmail(java.lang.String)
//  .recoveryPhone(java.lang.String)
//  .relations(IResolvable)
//  .relations(java.util.List<UserRelations>)
//  .sshPublicKeys(IResolvable)
//  .sshPublicKeys(java.util.List<UserSshPublicKeys>)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .timeouts(UserTimeouts)
//  .websites(IResolvable)
//  .websites(java.util.List<UserWebsites>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.name">name</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | name block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.primaryEmail">primaryEmail</a></code> | <code>java.lang.String</code> | The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.addresses">addresses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>></code> | addresses block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | asps.list of the user's alias email addresses. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.archived">archived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if user is archived. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.changePasswordAtNextLogin">changePasswordAtNextLogin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the user is forced to change their password at next login. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.customSchemas">customSchemas</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>></code> | custom_schemas block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.emails">emails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>></code> | emails block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.externalIds">externalIds</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>></code> | external_ids block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.hashFunction">hashFunction</a></code> | <code>java.lang.String</code> | Stores the hash format of the password property. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.ims">ims</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>></code> | ims block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.includeInGlobalAddressList">includeInGlobalAddressList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.ipAllowlist">ipAllowlist</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the user's IP address is added to the allow list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.isAdmin">isAdmin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates a user with super admininistrator privileges. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.keywords">keywords</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>></code> | keywords block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.languages">languages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>></code> | languages block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.locations">locations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>></code> | locations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.organizations">organizations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>></code> | organizations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.orgUnitPath">orgUnitPath</a></code> | <code>java.lang.String</code> | The full path of the parent organization associated with the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Stores the password for the user account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.phones">phones</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>></code> | phones block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.posixAccounts">posixAccounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>></code> | posix_accounts block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.recoveryEmail">recoveryEmail</a></code> | <code>java.lang.String</code> | Recovery email of the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.recoveryPhone">recoveryPhone</a></code> | <code>java.lang.String</code> | Recovery phone of the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.relations">relations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>></code> | relations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.sshPublicKeys">sshPublicKeys</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>></code> | ssh_public_keys block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if user is suspended. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.websites">websites</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>></code> | websites block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.name"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#name User#name}

---

##### `primaryEmail`<sup>Required</sup> <a name="primaryEmail" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.primaryEmail"></a>

- *Type:* java.lang.String

The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary_email User#primary_email}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.addresses"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>>

addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#addresses User#addresses}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.aliases"></a>

- *Type:* java.util.List<java.lang.String>

asps.list of the user's alias email addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#aliases User#aliases}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.archived"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if user is archived.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#archived User#archived}

---

##### `changePasswordAtNextLogin`<sup>Optional</sup> <a name="changePasswordAtNextLogin" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.changePasswordAtNextLogin"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the user is forced to change their password at next login.

This setting doesn't apply when the user signs in via a third-party identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#change_password_at_next_login User#change_password_at_next_login}

---

##### `customSchemas`<sup>Optional</sup> <a name="customSchemas" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.customSchemas"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>>

custom_schemas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_schemas User#custom_schemas}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.emails"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>>

emails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#emails User#emails}

---

##### `externalIds`<sup>Optional</sup> <a name="externalIds" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.externalIds"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>>

external_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#external_ids User#external_ids}

---

##### `hashFunction`<sup>Optional</sup> <a name="hashFunction" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.hashFunction"></a>

- *Type:* java.lang.String

Stores the hash format of the password property.

We recommend sending the password property value as a base 16 bit hexadecimal-encoded hash value. Set the hashFunction values as either the SHA-1, MD5, or crypt hash format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#hash_function User#hash_function}

---

##### `ims`<sup>Optional</sup> <a name="ims" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.ims"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>>

ims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ims User#ims}

---

##### `includeInGlobalAddressList`<sup>Optional</sup> <a name="includeInGlobalAddressList" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.includeInGlobalAddressList"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `true`.

Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#include_in_global_address_list User#include_in_global_address_list}

---

##### `ipAllowlist`<sup>Optional</sup> <a name="ipAllowlist" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.ipAllowlist"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the user's IP address is added to the allow list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ip_allowlist User#ip_allowlist}

---

##### `isAdmin`<sup>Optional</sup> <a name="isAdmin" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.isAdmin"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates a user with super admininistrator privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#is_admin User#is_admin}

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.keywords"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>>

keywords block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#keywords User#keywords}

---

##### `languages`<sup>Optional</sup> <a name="languages" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.languages"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>>

languages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#languages User#languages}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.locations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>>

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#locations User#locations}

---

##### `organizations`<sup>Optional</sup> <a name="organizations" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.organizations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>>

organizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#organizations User#organizations}

---

##### `orgUnitPath`<sup>Optional</sup> <a name="orgUnitPath" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.orgUnitPath"></a>

- *Type:* java.lang.String

The full path of the parent organization associated with the user.

If the parent organization is the top-level, it is represented as a forward slash (/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#org_unit_path User#org_unit_path}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Stores the password for the user account.

A password can contain any combination of ASCII characters. A minimum of 8 characters is required. The maximum length is 100 characters. As the API does not return the value of password, this field is write-only, and the value stored in the state will be what is provided in the configuration. The field is required on create and will be empty on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#password User#password}

---

##### `phones`<sup>Optional</sup> <a name="phones" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.phones"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>>

phones block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#phones User#phones}

---

##### `posixAccounts`<sup>Optional</sup> <a name="posixAccounts" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.posixAccounts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>>

posix_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#posix_accounts User#posix_accounts}

---

##### `recoveryEmail`<sup>Optional</sup> <a name="recoveryEmail" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.recoveryEmail"></a>

- *Type:* java.lang.String

Recovery email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#recovery_email User#recovery_email}

---

##### `recoveryPhone`<sup>Optional</sup> <a name="recoveryPhone" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.recoveryPhone"></a>

- *Type:* java.lang.String

Recovery phone of the user.

The phone number must be in the E.164 format, starting with the plus sign (+). Example: +16506661212.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#recovery_phone User#recovery_phone}

---

##### `relations`<sup>Optional</sup> <a name="relations" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.relations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>>

relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#relations User#relations}

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="sshPublicKeys" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.sshPublicKeys"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>>

ssh_public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ssh_public_keys User#ssh_public_keys}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.suspended"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if user is suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#suspended User#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#timeouts User#timeouts}

---

##### `websites`<sup>Optional</sup> <a name="websites" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.websites"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>>

websites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#websites User#websites}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putAddresses">putAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putCustomSchemas">putCustomSchemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putEmails">putEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putExternalIds">putExternalIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putIms">putIms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putKeywords">putKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putLanguages">putLanguages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putLocations">putLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putName">putName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putOrganizations">putOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putPhones">putPhones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putPosixAccounts">putPosixAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putRelations">putRelations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putSshPublicKeys">putSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.putWebsites">putWebsites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetAddresses">resetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetChangePasswordAtNextLogin">resetChangePasswordAtNextLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetCustomSchemas">resetCustomSchemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetEmails">resetEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetExternalIds">resetExternalIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetHashFunction">resetHashFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetIms">resetIms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetIncludeInGlobalAddressList">resetIncludeInGlobalAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetIpAllowlist">resetIpAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetIsAdmin">resetIsAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetKeywords">resetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetLanguages">resetLanguages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetOrganizations">resetOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetOrgUnitPath">resetOrgUnitPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetPhones">resetPhones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetPosixAccounts">resetPosixAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetRecoveryEmail">resetRecoveryEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetRecoveryPhone">resetRecoveryPhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetRelations">resetRelations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetSshPublicKeys">resetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetSuspended">resetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.resetWebsites">resetWebsites</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.User.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.user.User.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.user.User.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.user.User.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.user.User.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.user.User.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.user.User.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-googleworkspace.user.User.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-googleworkspace.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.User.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.User.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.User.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.User.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-googleworkspace.user.User.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.user.User.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.user.User.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.User.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-googleworkspace.user.User.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-googleworkspace.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.User.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAddresses` <a name="putAddresses" id="@cdktf/provider-googleworkspace.user.User.putAddresses"></a>

```java
public void putAddresses(IResolvable OR java.util.List<UserAddresses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putAddresses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>>

---

##### `putCustomSchemas` <a name="putCustomSchemas" id="@cdktf/provider-googleworkspace.user.User.putCustomSchemas"></a>

```java
public void putCustomSchemas(IResolvable OR java.util.List<UserCustomSchemas> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putCustomSchemas.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>>

---

##### `putEmails` <a name="putEmails" id="@cdktf/provider-googleworkspace.user.User.putEmails"></a>

```java
public void putEmails(IResolvable OR java.util.List<UserEmails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putEmails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>>

---

##### `putExternalIds` <a name="putExternalIds" id="@cdktf/provider-googleworkspace.user.User.putExternalIds"></a>

```java
public void putExternalIds(IResolvable OR java.util.List<UserExternalIds> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putExternalIds.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>>

---

##### `putIms` <a name="putIms" id="@cdktf/provider-googleworkspace.user.User.putIms"></a>

```java
public void putIms(IResolvable OR java.util.List<UserIms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putIms.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>>

---

##### `putKeywords` <a name="putKeywords" id="@cdktf/provider-googleworkspace.user.User.putKeywords"></a>

```java
public void putKeywords(IResolvable OR java.util.List<UserKeywords> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putKeywords.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>>

---

##### `putLanguages` <a name="putLanguages" id="@cdktf/provider-googleworkspace.user.User.putLanguages"></a>

```java
public void putLanguages(IResolvable OR java.util.List<UserLanguages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putLanguages.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>>

---

##### `putLocations` <a name="putLocations" id="@cdktf/provider-googleworkspace.user.User.putLocations"></a>

```java
public void putLocations(IResolvable OR java.util.List<UserLocations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putLocations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>>

---

##### `putName` <a name="putName" id="@cdktf/provider-googleworkspace.user.User.putName"></a>

```java
public void putName(UserName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

---

##### `putOrganizations` <a name="putOrganizations" id="@cdktf/provider-googleworkspace.user.User.putOrganizations"></a>

```java
public void putOrganizations(IResolvable OR java.util.List<UserOrganizations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putOrganizations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>>

---

##### `putPhones` <a name="putPhones" id="@cdktf/provider-googleworkspace.user.User.putPhones"></a>

```java
public void putPhones(IResolvable OR java.util.List<UserPhones> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putPhones.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>>

---

##### `putPosixAccounts` <a name="putPosixAccounts" id="@cdktf/provider-googleworkspace.user.User.putPosixAccounts"></a>

```java
public void putPosixAccounts(IResolvable OR java.util.List<UserPosixAccounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putPosixAccounts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>>

---

##### `putRelations` <a name="putRelations" id="@cdktf/provider-googleworkspace.user.User.putRelations"></a>

```java
public void putRelations(IResolvable OR java.util.List<UserRelations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putRelations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>>

---

##### `putSshPublicKeys` <a name="putSshPublicKeys" id="@cdktf/provider-googleworkspace.user.User.putSshPublicKeys"></a>

```java
public void putSshPublicKeys(IResolvable OR java.util.List<UserSshPublicKeys> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putSshPublicKeys.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-googleworkspace.user.User.putTimeouts"></a>

```java
public void putTimeouts(UserTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

---

##### `putWebsites` <a name="putWebsites" id="@cdktf/provider-googleworkspace.user.User.putWebsites"></a>

```java
public void putWebsites(IResolvable OR java.util.List<UserWebsites> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putWebsites.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>>

---

##### `resetAddresses` <a name="resetAddresses" id="@cdktf/provider-googleworkspace.user.User.resetAddresses"></a>

```java
public void resetAddresses()
```

##### `resetAliases` <a name="resetAliases" id="@cdktf/provider-googleworkspace.user.User.resetAliases"></a>

```java
public void resetAliases()
```

##### `resetArchived` <a name="resetArchived" id="@cdktf/provider-googleworkspace.user.User.resetArchived"></a>

```java
public void resetArchived()
```

##### `resetChangePasswordAtNextLogin` <a name="resetChangePasswordAtNextLogin" id="@cdktf/provider-googleworkspace.user.User.resetChangePasswordAtNextLogin"></a>

```java
public void resetChangePasswordAtNextLogin()
```

##### `resetCustomSchemas` <a name="resetCustomSchemas" id="@cdktf/provider-googleworkspace.user.User.resetCustomSchemas"></a>

```java
public void resetCustomSchemas()
```

##### `resetEmails` <a name="resetEmails" id="@cdktf/provider-googleworkspace.user.User.resetEmails"></a>

```java
public void resetEmails()
```

##### `resetExternalIds` <a name="resetExternalIds" id="@cdktf/provider-googleworkspace.user.User.resetExternalIds"></a>

```java
public void resetExternalIds()
```

##### `resetHashFunction` <a name="resetHashFunction" id="@cdktf/provider-googleworkspace.user.User.resetHashFunction"></a>

```java
public void resetHashFunction()
```

##### `resetIms` <a name="resetIms" id="@cdktf/provider-googleworkspace.user.User.resetIms"></a>

```java
public void resetIms()
```

##### `resetIncludeInGlobalAddressList` <a name="resetIncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.user.User.resetIncludeInGlobalAddressList"></a>

```java
public void resetIncludeInGlobalAddressList()
```

##### `resetIpAllowlist` <a name="resetIpAllowlist" id="@cdktf/provider-googleworkspace.user.User.resetIpAllowlist"></a>

```java
public void resetIpAllowlist()
```

##### `resetIsAdmin` <a name="resetIsAdmin" id="@cdktf/provider-googleworkspace.user.User.resetIsAdmin"></a>

```java
public void resetIsAdmin()
```

##### `resetKeywords` <a name="resetKeywords" id="@cdktf/provider-googleworkspace.user.User.resetKeywords"></a>

```java
public void resetKeywords()
```

##### `resetLanguages` <a name="resetLanguages" id="@cdktf/provider-googleworkspace.user.User.resetLanguages"></a>

```java
public void resetLanguages()
```

##### `resetLocations` <a name="resetLocations" id="@cdktf/provider-googleworkspace.user.User.resetLocations"></a>

```java
public void resetLocations()
```

##### `resetOrganizations` <a name="resetOrganizations" id="@cdktf/provider-googleworkspace.user.User.resetOrganizations"></a>

```java
public void resetOrganizations()
```

##### `resetOrgUnitPath` <a name="resetOrgUnitPath" id="@cdktf/provider-googleworkspace.user.User.resetOrgUnitPath"></a>

```java
public void resetOrgUnitPath()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-googleworkspace.user.User.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPhones` <a name="resetPhones" id="@cdktf/provider-googleworkspace.user.User.resetPhones"></a>

```java
public void resetPhones()
```

##### `resetPosixAccounts` <a name="resetPosixAccounts" id="@cdktf/provider-googleworkspace.user.User.resetPosixAccounts"></a>

```java
public void resetPosixAccounts()
```

##### `resetRecoveryEmail` <a name="resetRecoveryEmail" id="@cdktf/provider-googleworkspace.user.User.resetRecoveryEmail"></a>

```java
public void resetRecoveryEmail()
```

##### `resetRecoveryPhone` <a name="resetRecoveryPhone" id="@cdktf/provider-googleworkspace.user.User.resetRecoveryPhone"></a>

```java
public void resetRecoveryPhone()
```

##### `resetRelations` <a name="resetRelations" id="@cdktf/provider-googleworkspace.user.User.resetRelations"></a>

```java
public void resetRelations()
```

##### `resetSshPublicKeys` <a name="resetSshPublicKeys" id="@cdktf/provider-googleworkspace.user.User.resetSshPublicKeys"></a>

```java
public void resetSshPublicKeys()
```

##### `resetSuspended` <a name="resetSuspended" id="@cdktf/provider-googleworkspace.user.User.resetSuspended"></a>

```java
public void resetSuspended()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-googleworkspace.user.User.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWebsites` <a name="resetWebsites" id="@cdktf/provider-googleworkspace.user.User.resetWebsites"></a>

```java
public void resetWebsites()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.user.User.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.User;

User.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.user.User.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.User;

User.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.user.User.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-googleworkspace.user.User.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.User;

User.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.user.User.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.User;

User.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),User.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList">UserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.agreedToTerms">agreedToTerms</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.customerId">customerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.customSchemas">customSchemas</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList">UserCustomSchemasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.deletionTime">deletionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.emails">emails</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList">UserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.externalIds">externalIds</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList">UserExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.ims">ims</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList">UserImsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isDelegatedAdmin">isDelegatedAdmin</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isEnforcedIn2StepVerification">isEnforcedIn2StepVerification</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isEnrolledIn2StepVerification">isEnrolledIn2StepVerification</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isMailboxSetup">isMailboxSetup</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.keywords">keywords</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList">UserKeywordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.languages">languages</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList">UserLanguagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.lastLoginTime">lastLoginTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList">UserLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.name">name</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference">UserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.nonEditableAliases">nonEditableAliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.organizations">organizations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList">UserOrganizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.phones">phones</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList">UserPhonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.posixAccounts">posixAccounts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList">UserPosixAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.relations">relations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList">UserRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.sshPublicKeys">sshPublicKeys</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList">UserSshPublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.suspensionReason">suspensionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoEtag">thumbnailPhotoEtag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoUrl">thumbnailPhotoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.websites">websites</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList">UserWebsitesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.addressesInput">addressesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.aliasesInput">aliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.archivedInput">archivedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLoginInput">changePasswordAtNextLoginInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.customSchemasInput">customSchemasInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.emailsInput">emailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.externalIdsInput">externalIdsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.hashFunctionInput">hashFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.imsInput">imsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressListInput">includeInGlobalAddressListInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.ipAllowlistInput">ipAllowlistInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isAdminInput">isAdminInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.keywordsInput">keywordsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.languagesInput">languagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.locationsInput">locationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.nameInput">nameInput</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.organizationsInput">organizationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.orgUnitPathInput">orgUnitPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.phonesInput">phonesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.posixAccountsInput">posixAccountsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.primaryEmailInput">primaryEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryEmailInput">recoveryEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryPhoneInput">recoveryPhoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.relationsInput">relationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.suspendedInput">suspendedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.websitesInput">websitesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.archived">archived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLogin">changePasswordAtNextLogin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.hashFunction">hashFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressList">includeInGlobalAddressList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.ipAllowlist">ipAllowlist</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isAdmin">isAdmin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.orgUnitPath">orgUnitPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.primaryEmail">primaryEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryEmail">recoveryEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryPhone">recoveryPhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.user.User.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.user.User.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.User.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.user.User.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.user.User.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.user.User.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.user.User.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.user.User.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.user.User.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.user.User.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.user.User.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.user.User.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.user.User.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.user.User.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-googleworkspace.user.User.property.addresses"></a>

```java
public UserAddressesList getAddresses();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserAddressesList">UserAddressesList</a>

---

##### `agreedToTerms`<sup>Required</sup> <a name="agreedToTerms" id="@cdktf/provider-googleworkspace.user.User.property.agreedToTerms"></a>

```java
public IResolvable getAgreedToTerms();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-googleworkspace.user.User.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `customerId`<sup>Required</sup> <a name="customerId" id="@cdktf/provider-googleworkspace.user.User.property.customerId"></a>

```java
public java.lang.String getCustomerId();
```

- *Type:* java.lang.String

---

##### `customSchemas`<sup>Required</sup> <a name="customSchemas" id="@cdktf/provider-googleworkspace.user.User.property.customSchemas"></a>

```java
public UserCustomSchemasList getCustomSchemas();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList">UserCustomSchemasList</a>

---

##### `deletionTime`<sup>Required</sup> <a name="deletionTime" id="@cdktf/provider-googleworkspace.user.User.property.deletionTime"></a>

```java
public java.lang.String getDeletionTime();
```

- *Type:* java.lang.String

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-googleworkspace.user.User.property.emails"></a>

```java
public UserEmailsList getEmails();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserEmailsList">UserEmailsList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.user.User.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `externalIds`<sup>Required</sup> <a name="externalIds" id="@cdktf/provider-googleworkspace.user.User.property.externalIds"></a>

```java
public UserExternalIdsList getExternalIds();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList">UserExternalIdsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.user.User.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ims`<sup>Required</sup> <a name="ims" id="@cdktf/provider-googleworkspace.user.User.property.ims"></a>

```java
public UserImsList getIms();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserImsList">UserImsList</a>

---

##### `isDelegatedAdmin`<sup>Required</sup> <a name="isDelegatedAdmin" id="@cdktf/provider-googleworkspace.user.User.property.isDelegatedAdmin"></a>

```java
public IResolvable getIsDelegatedAdmin();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isEnforcedIn2StepVerification`<sup>Required</sup> <a name="isEnforcedIn2StepVerification" id="@cdktf/provider-googleworkspace.user.User.property.isEnforcedIn2StepVerification"></a>

```java
public IResolvable getIsEnforcedIn2StepVerification();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isEnrolledIn2StepVerification`<sup>Required</sup> <a name="isEnrolledIn2StepVerification" id="@cdktf/provider-googleworkspace.user.User.property.isEnrolledIn2StepVerification"></a>

```java
public IResolvable getIsEnrolledIn2StepVerification();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isMailboxSetup`<sup>Required</sup> <a name="isMailboxSetup" id="@cdktf/provider-googleworkspace.user.User.property.isMailboxSetup"></a>

```java
public IResolvable getIsMailboxSetup();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktf/provider-googleworkspace.user.User.property.keywords"></a>

```java
public UserKeywordsList getKeywords();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList">UserKeywordsList</a>

---

##### `languages`<sup>Required</sup> <a name="languages" id="@cdktf/provider-googleworkspace.user.User.property.languages"></a>

```java
public UserLanguagesList getLanguages();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList">UserLanguagesList</a>

---

##### `lastLoginTime`<sup>Required</sup> <a name="lastLoginTime" id="@cdktf/provider-googleworkspace.user.User.property.lastLoginTime"></a>

```java
public java.lang.String getLastLoginTime();
```

- *Type:* java.lang.String

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-googleworkspace.user.User.property.locations"></a>

```java
public UserLocationsList getLocations();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserLocationsList">UserLocationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.User.property.name"></a>

```java
public UserNameOutputReference getName();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference">UserNameOutputReference</a>

---

##### `nonEditableAliases`<sup>Required</sup> <a name="nonEditableAliases" id="@cdktf/provider-googleworkspace.user.User.property.nonEditableAliases"></a>

```java
public java.util.List<java.lang.String> getNonEditableAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizations`<sup>Required</sup> <a name="organizations" id="@cdktf/provider-googleworkspace.user.User.property.organizations"></a>

```java
public UserOrganizationsList getOrganizations();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList">UserOrganizationsList</a>

---

##### `phones`<sup>Required</sup> <a name="phones" id="@cdktf/provider-googleworkspace.user.User.property.phones"></a>

```java
public UserPhonesList getPhones();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserPhonesList">UserPhonesList</a>

---

##### `posixAccounts`<sup>Required</sup> <a name="posixAccounts" id="@cdktf/provider-googleworkspace.user.User.property.posixAccounts"></a>

```java
public UserPosixAccountsList getPosixAccounts();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList">UserPosixAccountsList</a>

---

##### `relations`<sup>Required</sup> <a name="relations" id="@cdktf/provider-googleworkspace.user.User.property.relations"></a>

```java
public UserRelationsList getRelations();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserRelationsList">UserRelationsList</a>

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktf/provider-googleworkspace.user.User.property.sshPublicKeys"></a>

```java
public UserSshPublicKeysList getSshPublicKeys();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList">UserSshPublicKeysList</a>

---

##### `suspensionReason`<sup>Required</sup> <a name="suspensionReason" id="@cdktf/provider-googleworkspace.user.User.property.suspensionReason"></a>

```java
public java.lang.String getSuspensionReason();
```

- *Type:* java.lang.String

---

##### `thumbnailPhotoEtag`<sup>Required</sup> <a name="thumbnailPhotoEtag" id="@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoEtag"></a>

```java
public java.lang.String getThumbnailPhotoEtag();
```

- *Type:* java.lang.String

---

##### `thumbnailPhotoUrl`<sup>Required</sup> <a name="thumbnailPhotoUrl" id="@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoUrl"></a>

```java
public java.lang.String getThumbnailPhotoUrl();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.user.User.property.timeouts"></a>

```java
public UserTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a>

---

##### `websites`<sup>Required</sup> <a name="websites" id="@cdktf/provider-googleworkspace.user.User.property.websites"></a>

```java
public UserWebsitesList getWebsites();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList">UserWebsitesList</a>

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-googleworkspace.user.User.property.addressesInput"></a>

```java
public java.lang.Object getAddressesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>>

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktf/provider-googleworkspace.user.User.property.aliasesInput"></a>

```java
public java.util.List<java.lang.String> getAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktf/provider-googleworkspace.user.User.property.archivedInput"></a>

```java
public java.lang.Object getArchivedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `changePasswordAtNextLoginInput`<sup>Optional</sup> <a name="changePasswordAtNextLoginInput" id="@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLoginInput"></a>

```java
public java.lang.Object getChangePasswordAtNextLoginInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customSchemasInput`<sup>Optional</sup> <a name="customSchemasInput" id="@cdktf/provider-googleworkspace.user.User.property.customSchemasInput"></a>

```java
public java.lang.Object getCustomSchemasInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>>

---

##### `emailsInput`<sup>Optional</sup> <a name="emailsInput" id="@cdktf/provider-googleworkspace.user.User.property.emailsInput"></a>

```java
public java.lang.Object getEmailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>>

---

##### `externalIdsInput`<sup>Optional</sup> <a name="externalIdsInput" id="@cdktf/provider-googleworkspace.user.User.property.externalIdsInput"></a>

```java
public java.lang.Object getExternalIdsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>>

---

##### `hashFunctionInput`<sup>Optional</sup> <a name="hashFunctionInput" id="@cdktf/provider-googleworkspace.user.User.property.hashFunctionInput"></a>

```java
public java.lang.String getHashFunctionInput();
```

- *Type:* java.lang.String

---

##### `imsInput`<sup>Optional</sup> <a name="imsInput" id="@cdktf/provider-googleworkspace.user.User.property.imsInput"></a>

```java
public java.lang.Object getImsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>>

---

##### `includeInGlobalAddressListInput`<sup>Optional</sup> <a name="includeInGlobalAddressListInput" id="@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressListInput"></a>

```java
public java.lang.Object getIncludeInGlobalAddressListInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipAllowlistInput`<sup>Optional</sup> <a name="ipAllowlistInput" id="@cdktf/provider-googleworkspace.user.User.property.ipAllowlistInput"></a>

```java
public java.lang.Object getIpAllowlistInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isAdminInput`<sup>Optional</sup> <a name="isAdminInput" id="@cdktf/provider-googleworkspace.user.User.property.isAdminInput"></a>

```java
public java.lang.Object getIsAdminInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keywordsInput`<sup>Optional</sup> <a name="keywordsInput" id="@cdktf/provider-googleworkspace.user.User.property.keywordsInput"></a>

```java
public java.lang.Object getKeywordsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>>

---

##### `languagesInput`<sup>Optional</sup> <a name="languagesInput" id="@cdktf/provider-googleworkspace.user.User.property.languagesInput"></a>

```java
public java.lang.Object getLanguagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>>

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-googleworkspace.user.User.property.locationsInput"></a>

```java
public java.lang.Object getLocationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-googleworkspace.user.User.property.nameInput"></a>

```java
public UserName getNameInput();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

---

##### `organizationsInput`<sup>Optional</sup> <a name="organizationsInput" id="@cdktf/provider-googleworkspace.user.User.property.organizationsInput"></a>

```java
public java.lang.Object getOrganizationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>>

---

##### `orgUnitPathInput`<sup>Optional</sup> <a name="orgUnitPathInput" id="@cdktf/provider-googleworkspace.user.User.property.orgUnitPathInput"></a>

```java
public java.lang.String getOrgUnitPathInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-googleworkspace.user.User.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `phonesInput`<sup>Optional</sup> <a name="phonesInput" id="@cdktf/provider-googleworkspace.user.User.property.phonesInput"></a>

```java
public java.lang.Object getPhonesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>>

---

##### `posixAccountsInput`<sup>Optional</sup> <a name="posixAccountsInput" id="@cdktf/provider-googleworkspace.user.User.property.posixAccountsInput"></a>

```java
public java.lang.Object getPosixAccountsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>>

---

##### `primaryEmailInput`<sup>Optional</sup> <a name="primaryEmailInput" id="@cdktf/provider-googleworkspace.user.User.property.primaryEmailInput"></a>

```java
public java.lang.String getPrimaryEmailInput();
```

- *Type:* java.lang.String

---

##### `recoveryEmailInput`<sup>Optional</sup> <a name="recoveryEmailInput" id="@cdktf/provider-googleworkspace.user.User.property.recoveryEmailInput"></a>

```java
public java.lang.String getRecoveryEmailInput();
```

- *Type:* java.lang.String

---

##### `recoveryPhoneInput`<sup>Optional</sup> <a name="recoveryPhoneInput" id="@cdktf/provider-googleworkspace.user.User.property.recoveryPhoneInput"></a>

```java
public java.lang.String getRecoveryPhoneInput();
```

- *Type:* java.lang.String

---

##### `relationsInput`<sup>Optional</sup> <a name="relationsInput" id="@cdktf/provider-googleworkspace.user.User.property.relationsInput"></a>

```java
public java.lang.Object getRelationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>>

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktf/provider-googleworkspace.user.User.property.sshPublicKeysInput"></a>

```java
public java.lang.Object getSshPublicKeysInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>>

---

##### `suspendedInput`<sup>Optional</sup> <a name="suspendedInput" id="@cdktf/provider-googleworkspace.user.User.property.suspendedInput"></a>

```java
public java.lang.Object getSuspendedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-googleworkspace.user.User.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

---

##### `websitesInput`<sup>Optional</sup> <a name="websitesInput" id="@cdktf/provider-googleworkspace.user.User.property.websitesInput"></a>

```java
public java.lang.Object getWebsitesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>>

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-googleworkspace.user.User.property.aliases"></a>

```java
public java.util.List<java.lang.String> getAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-googleworkspace.user.User.property.archived"></a>

```java
public java.lang.Object getArchived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `changePasswordAtNextLogin`<sup>Required</sup> <a name="changePasswordAtNextLogin" id="@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLogin"></a>

```java
public java.lang.Object getChangePasswordAtNextLogin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hashFunction`<sup>Required</sup> <a name="hashFunction" id="@cdktf/provider-googleworkspace.user.User.property.hashFunction"></a>

```java
public java.lang.String getHashFunction();
```

- *Type:* java.lang.String

---

##### `includeInGlobalAddressList`<sup>Required</sup> <a name="includeInGlobalAddressList" id="@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressList"></a>

```java
public java.lang.Object getIncludeInGlobalAddressList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipAllowlist`<sup>Required</sup> <a name="ipAllowlist" id="@cdktf/provider-googleworkspace.user.User.property.ipAllowlist"></a>

```java
public java.lang.Object getIpAllowlist();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-googleworkspace.user.User.property.isAdmin"></a>

```java
public java.lang.Object getIsAdmin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `orgUnitPath`<sup>Required</sup> <a name="orgUnitPath" id="@cdktf/provider-googleworkspace.user.User.property.orgUnitPath"></a>

```java
public java.lang.String getOrgUnitPath();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-googleworkspace.user.User.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `primaryEmail`<sup>Required</sup> <a name="primaryEmail" id="@cdktf/provider-googleworkspace.user.User.property.primaryEmail"></a>

```java
public java.lang.String getPrimaryEmail();
```

- *Type:* java.lang.String

---

##### `recoveryEmail`<sup>Required</sup> <a name="recoveryEmail" id="@cdktf/provider-googleworkspace.user.User.property.recoveryEmail"></a>

```java
public java.lang.String getRecoveryEmail();
```

- *Type:* java.lang.String

---

##### `recoveryPhone`<sup>Required</sup> <a name="recoveryPhone" id="@cdktf/provider-googleworkspace.user.User.property.recoveryPhone"></a>

```java
public java.lang.String getRecoveryPhone();
```

- *Type:* java.lang.String

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-googleworkspace.user.User.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.user.User.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserAddresses <a name="UserAddresses" id="@cdktf/provider-googleworkspace.user.UserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserAddresses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserAddresses;

UserAddresses.builder()
    .type(java.lang.String)
//  .country(java.lang.String)
//  .countryCode(java.lang.String)
//  .customType(java.lang.String)
//  .extendedAddress(java.lang.String)
//  .formatted(java.lang.String)
//  .locality(java.lang.String)
//  .poBox(java.lang.String)
//  .postalCode(java.lang.String)
//  .primary(java.lang.Boolean)
//  .primary(IResolvable)
//  .region(java.lang.String)
//  .sourceIsStructured(java.lang.Boolean)
//  .sourceIsStructured(IResolvable)
//  .streetAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.type">type</a></code> | <code>java.lang.String</code> | The address type. Acceptable values: `custom`, `home`, `other`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.country">country</a></code> | <code>java.lang.String</code> | Country. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | The country code. Uses the ISO 3166-1 standard. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.customType">customType</a></code> | <code>java.lang.String</code> | If the address type is custom, this property contains the custom value. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.extendedAddress">extendedAddress</a></code> | <code>java.lang.String</code> | For extended addresses, such as an address that includes a sub-region. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.formatted">formatted</a></code> | <code>java.lang.String</code> | A full and unstructured postal address. This is not synced with the structured address fields. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.locality">locality</a></code> | <code>java.lang.String</code> | The town or city of the address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.poBox">poBox</a></code> | <code>java.lang.String</code> | The post office box, if present. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | The ZIP or postal code, if applicable. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this is the user's primary address. The addresses list may contain only one primary address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.region">region</a></code> | <code>java.lang.String</code> | The abbreviated province or state. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.sourceIsStructured">sourceIsStructured</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the user-supplied address was formatted. Formatted addresses are not currently supported. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | The street address, such as 1600 Amphitheatre Parkway. Whitespace within the string is ignored; however, newlines are significant. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The address type. Acceptable values: `custom`, `home`, `other`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#country User#country}

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

The country code. Uses the ISO 3166-1 standard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#country_code User#country_code}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

If the address type is custom, this property contains the custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `extendedAddress`<sup>Optional</sup> <a name="extendedAddress" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.extendedAddress"></a>

```java
public java.lang.String getExtendedAddress();
```

- *Type:* java.lang.String

For extended addresses, such as an address that includes a sub-region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#extended_address User#extended_address}

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.formatted"></a>

```java
public java.lang.String getFormatted();
```

- *Type:* java.lang.String

A full and unstructured postal address. This is not synced with the structured address fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#formatted User#formatted}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

The town or city of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#locality User#locality}

---

##### `poBox`<sup>Optional</sup> <a name="poBox" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.poBox"></a>

```java
public java.lang.String getPoBox();
```

- *Type:* java.lang.String

The post office box, if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#po_box User#po_box}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

The ZIP or postal code, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#postal_code User#postal_code}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this is the user's primary address. The addresses list may contain only one primary address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The abbreviated province or state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#region User#region}

---

##### `sourceIsStructured`<sup>Optional</sup> <a name="sourceIsStructured" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.sourceIsStructured"></a>

```java
public java.lang.Object getSourceIsStructured();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the user-supplied address was formatted. Formatted addresses are not currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#source_is_structured User#source_is_structured}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

The street address, such as 1600 Amphitheatre Parkway. Whitespace within the string is ignored; however, newlines are significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#street_address User#street_address}

---

### UserConfig <a name="UserConfig" id="@cdktf/provider-googleworkspace.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserConfig;

UserConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(UserName)
    .primaryEmail(java.lang.String)
//  .addresses(IResolvable)
//  .addresses(java.util.List<UserAddresses>)
//  .aliases(java.util.List<java.lang.String>)
//  .archived(java.lang.Boolean)
//  .archived(IResolvable)
//  .changePasswordAtNextLogin(java.lang.Boolean)
//  .changePasswordAtNextLogin(IResolvable)
//  .customSchemas(IResolvable)
//  .customSchemas(java.util.List<UserCustomSchemas>)
//  .emails(IResolvable)
//  .emails(java.util.List<UserEmails>)
//  .externalIds(IResolvable)
//  .externalIds(java.util.List<UserExternalIds>)
//  .hashFunction(java.lang.String)
//  .ims(IResolvable)
//  .ims(java.util.List<UserIms>)
//  .includeInGlobalAddressList(java.lang.Boolean)
//  .includeInGlobalAddressList(IResolvable)
//  .ipAllowlist(java.lang.Boolean)
//  .ipAllowlist(IResolvable)
//  .isAdmin(java.lang.Boolean)
//  .isAdmin(IResolvable)
//  .keywords(IResolvable)
//  .keywords(java.util.List<UserKeywords>)
//  .languages(IResolvable)
//  .languages(java.util.List<UserLanguages>)
//  .locations(IResolvable)
//  .locations(java.util.List<UserLocations>)
//  .organizations(IResolvable)
//  .organizations(java.util.List<UserOrganizations>)
//  .orgUnitPath(java.lang.String)
//  .password(java.lang.String)
//  .phones(IResolvable)
//  .phones(java.util.List<UserPhones>)
//  .posixAccounts(IResolvable)
//  .posixAccounts(java.util.List<UserPosixAccounts>)
//  .recoveryEmail(java.lang.String)
//  .recoveryPhone(java.lang.String)
//  .relations(IResolvable)
//  .relations(java.util.List<UserRelations>)
//  .sshPublicKeys(IResolvable)
//  .sshPublicKeys(java.util.List<UserSshPublicKeys>)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .timeouts(UserTimeouts)
//  .websites(IResolvable)
//  .websites(java.util.List<UserWebsites>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.name">name</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | name block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.primaryEmail">primaryEmail</a></code> | <code>java.lang.String</code> | The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.addresses">addresses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>></code> | addresses block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | asps.list of the user's alias email addresses. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.archived">archived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if user is archived. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.changePasswordAtNextLogin">changePasswordAtNextLogin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the user is forced to change their password at next login. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.customSchemas">customSchemas</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>></code> | custom_schemas block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.emails">emails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>></code> | emails block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.externalIds">externalIds</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>></code> | external_ids block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.hashFunction">hashFunction</a></code> | <code>java.lang.String</code> | Stores the hash format of the password property. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.ims">ims</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>></code> | ims block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.includeInGlobalAddressList">includeInGlobalAddressList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.ipAllowlist">ipAllowlist</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the user's IP address is added to the allow list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.isAdmin">isAdmin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates a user with super admininistrator privileges. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.keywords">keywords</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>></code> | keywords block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.languages">languages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>></code> | languages block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.locations">locations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>></code> | locations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.organizations">organizations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>></code> | organizations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.orgUnitPath">orgUnitPath</a></code> | <code>java.lang.String</code> | The full path of the parent organization associated with the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.password">password</a></code> | <code>java.lang.String</code> | Stores the password for the user account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.phones">phones</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>></code> | phones block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.posixAccounts">posixAccounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>></code> | posix_accounts block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryEmail">recoveryEmail</a></code> | <code>java.lang.String</code> | Recovery email of the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryPhone">recoveryPhone</a></code> | <code>java.lang.String</code> | Recovery phone of the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.relations">relations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>></code> | relations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.sshPublicKeys">sshPublicKeys</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>></code> | ssh_public_keys block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if user is suspended. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.websites">websites</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>></code> | websites block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.user.UserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.user.UserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.user.UserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.user.UserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.user.UserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.user.UserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.user.UserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.UserConfig.property.name"></a>

```java
public UserName getName();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#name User#name}

---

##### `primaryEmail`<sup>Required</sup> <a name="primaryEmail" id="@cdktf/provider-googleworkspace.user.UserConfig.property.primaryEmail"></a>

```java
public java.lang.String getPrimaryEmail();
```

- *Type:* java.lang.String

The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary_email User#primary_email}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-googleworkspace.user.UserConfig.property.addresses"></a>

```java
public java.lang.Object getAddresses();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>>

addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#addresses User#addresses}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-googleworkspace.user.UserConfig.property.aliases"></a>

```java
public java.util.List<java.lang.String> getAliases();
```

- *Type:* java.util.List<java.lang.String>

asps.list of the user's alias email addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#aliases User#aliases}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-googleworkspace.user.UserConfig.property.archived"></a>

```java
public java.lang.Object getArchived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if user is archived.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#archived User#archived}

---

##### `changePasswordAtNextLogin`<sup>Optional</sup> <a name="changePasswordAtNextLogin" id="@cdktf/provider-googleworkspace.user.UserConfig.property.changePasswordAtNextLogin"></a>

```java
public java.lang.Object getChangePasswordAtNextLogin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the user is forced to change their password at next login.

This setting doesn't apply when the user signs in via a third-party identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#change_password_at_next_login User#change_password_at_next_login}

---

##### `customSchemas`<sup>Optional</sup> <a name="customSchemas" id="@cdktf/provider-googleworkspace.user.UserConfig.property.customSchemas"></a>

```java
public java.lang.Object getCustomSchemas();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>>

custom_schemas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_schemas User#custom_schemas}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-googleworkspace.user.UserConfig.property.emails"></a>

```java
public java.lang.Object getEmails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>>

emails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#emails User#emails}

---

##### `externalIds`<sup>Optional</sup> <a name="externalIds" id="@cdktf/provider-googleworkspace.user.UserConfig.property.externalIds"></a>

```java
public java.lang.Object getExternalIds();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>>

external_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#external_ids User#external_ids}

---

##### `hashFunction`<sup>Optional</sup> <a name="hashFunction" id="@cdktf/provider-googleworkspace.user.UserConfig.property.hashFunction"></a>

```java
public java.lang.String getHashFunction();
```

- *Type:* java.lang.String

Stores the hash format of the password property.

We recommend sending the password property value as a base 16 bit hexadecimal-encoded hash value. Set the hashFunction values as either the SHA-1, MD5, or crypt hash format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#hash_function User#hash_function}

---

##### `ims`<sup>Optional</sup> <a name="ims" id="@cdktf/provider-googleworkspace.user.UserConfig.property.ims"></a>

```java
public java.lang.Object getIms();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>>

ims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ims User#ims}

---

##### `includeInGlobalAddressList`<sup>Optional</sup> <a name="includeInGlobalAddressList" id="@cdktf/provider-googleworkspace.user.UserConfig.property.includeInGlobalAddressList"></a>

```java
public java.lang.Object getIncludeInGlobalAddressList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `true`.

Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#include_in_global_address_list User#include_in_global_address_list}

---

##### `ipAllowlist`<sup>Optional</sup> <a name="ipAllowlist" id="@cdktf/provider-googleworkspace.user.UserConfig.property.ipAllowlist"></a>

```java
public java.lang.Object getIpAllowlist();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the user's IP address is added to the allow list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ip_allowlist User#ip_allowlist}

---

##### `isAdmin`<sup>Optional</sup> <a name="isAdmin" id="@cdktf/provider-googleworkspace.user.UserConfig.property.isAdmin"></a>

```java
public java.lang.Object getIsAdmin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates a user with super admininistrator privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#is_admin User#is_admin}

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktf/provider-googleworkspace.user.UserConfig.property.keywords"></a>

```java
public java.lang.Object getKeywords();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>>

keywords block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#keywords User#keywords}

---

##### `languages`<sup>Optional</sup> <a name="languages" id="@cdktf/provider-googleworkspace.user.UserConfig.property.languages"></a>

```java
public java.lang.Object getLanguages();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>>

languages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#languages User#languages}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-googleworkspace.user.UserConfig.property.locations"></a>

```java
public java.lang.Object getLocations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>>

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#locations User#locations}

---

##### `organizations`<sup>Optional</sup> <a name="organizations" id="@cdktf/provider-googleworkspace.user.UserConfig.property.organizations"></a>

```java
public java.lang.Object getOrganizations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>>

organizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#organizations User#organizations}

---

##### `orgUnitPath`<sup>Optional</sup> <a name="orgUnitPath" id="@cdktf/provider-googleworkspace.user.UserConfig.property.orgUnitPath"></a>

```java
public java.lang.String getOrgUnitPath();
```

- *Type:* java.lang.String

The full path of the parent organization associated with the user.

If the parent organization is the top-level, it is represented as a forward slash (/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#org_unit_path User#org_unit_path}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-googleworkspace.user.UserConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Stores the password for the user account.

A password can contain any combination of ASCII characters. A minimum of 8 characters is required. The maximum length is 100 characters. As the API does not return the value of password, this field is write-only, and the value stored in the state will be what is provided in the configuration. The field is required on create and will be empty on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#password User#password}

---

##### `phones`<sup>Optional</sup> <a name="phones" id="@cdktf/provider-googleworkspace.user.UserConfig.property.phones"></a>

```java
public java.lang.Object getPhones();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>>

phones block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#phones User#phones}

---

##### `posixAccounts`<sup>Optional</sup> <a name="posixAccounts" id="@cdktf/provider-googleworkspace.user.UserConfig.property.posixAccounts"></a>

```java
public java.lang.Object getPosixAccounts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>>

posix_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#posix_accounts User#posix_accounts}

---

##### `recoveryEmail`<sup>Optional</sup> <a name="recoveryEmail" id="@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryEmail"></a>

```java
public java.lang.String getRecoveryEmail();
```

- *Type:* java.lang.String

Recovery email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#recovery_email User#recovery_email}

---

##### `recoveryPhone`<sup>Optional</sup> <a name="recoveryPhone" id="@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryPhone"></a>

```java
public java.lang.String getRecoveryPhone();
```

- *Type:* java.lang.String

Recovery phone of the user.

The phone number must be in the E.164 format, starting with the plus sign (+). Example: +16506661212.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#recovery_phone User#recovery_phone}

---

##### `relations`<sup>Optional</sup> <a name="relations" id="@cdktf/provider-googleworkspace.user.UserConfig.property.relations"></a>

```java
public java.lang.Object getRelations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>>

relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#relations User#relations}

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="sshPublicKeys" id="@cdktf/provider-googleworkspace.user.UserConfig.property.sshPublicKeys"></a>

```java
public java.lang.Object getSshPublicKeys();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>>

ssh_public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ssh_public_keys User#ssh_public_keys}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-googleworkspace.user.UserConfig.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if user is suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#suspended User#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.user.UserConfig.property.timeouts"></a>

```java
public UserTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#timeouts User#timeouts}

---

##### `websites`<sup>Optional</sup> <a name="websites" id="@cdktf/provider-googleworkspace.user.UserConfig.property.websites"></a>

```java
public java.lang.Object getWebsites();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>>

websites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#websites User#websites}

---

### UserCustomSchemas <a name="UserCustomSchemas" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserCustomSchemas;

UserCustomSchemas.builder()
    .schemaName(java.lang.String)
    .schemaValues(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | The name of the schema. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaValues">schemaValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | JSON encoded map that represents key/value pairs that correspond to the given schema. |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

The name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#schema_name User#schema_name}

---

##### `schemaValues`<sup>Required</sup> <a name="schemaValues" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSchemaValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

JSON encoded map that represents key/value pairs that correspond to the given schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#schema_values User#schema_values}

---

### UserEmails <a name="UserEmails" id="@cdktf/provider-googleworkspace.user.UserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserEmails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserEmails;

UserEmails.builder()
    .type(java.lang.String)
//  .address(java.lang.String)
//  .customType(java.lang.String)
//  .primary(java.lang.Boolean)
//  .primary(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.type">type</a></code> | <code>java.lang.String</code> | The type of the email account. Acceptable values: `custom`, `home`, `other`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.address">address</a></code> | <code>java.lang.String</code> | The user's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.customType">customType</a></code> | <code>java.lang.String</code> | If the value of type is custom, this property contains the custom type string. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. Indicates if this is the user's primary email. Only one entry can be marked as primary. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserEmails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the email account. Acceptable values: `custom`, `home`, `other`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-googleworkspace.user.UserEmails.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The user's email address.

Also serves as the email ID. This value can be the user's primary email address or an alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#address User#address}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserEmails.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

If the value of type is custom, this property contains the custom type string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserEmails.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`. Indicates if this is the user's primary email. Only one entry can be marked as primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

### UserExternalIds <a name="UserExternalIds" id="@cdktf/provider-googleworkspace.user.UserExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserExternalIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserExternalIds;

UserExternalIds.builder()
    .type(java.lang.String)
    .value(java.lang.String)
//  .customType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIds.property.type">type</a></code> | <code>java.lang.String</code> | The type of external ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIds.property.value">value</a></code> | <code>java.lang.String</code> | The value of the ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIds.property.customType">customType</a></code> | <code>java.lang.String</code> | If the external ID type is custom, this property contains the custom value and must be set. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserExternalIds.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of external ID.

If set to custom, customType must also be set. Acceptable values: `account`, `custom`, `customer`, `login_id`, `network`, `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserExternalIds.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserExternalIds.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

If the external ID type is custom, this property contains the custom value and must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

### UserIms <a name="UserIms" id="@cdktf/provider-googleworkspace.user.UserIms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserIms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserIms;

UserIms.builder()
    .protocol(java.lang.String)
    .type(java.lang.String)
//  .customProtocol(java.lang.String)
//  .customType(java.lang.String)
//  .im(java.lang.String)
//  .primary(java.lang.Boolean)
//  .primary(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.protocol">protocol</a></code> | <code>java.lang.String</code> | An IM protocol identifies the IM network. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.type">type</a></code> | <code>java.lang.String</code> | Acceptable values: `custom`, `home`, `other`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.customProtocol">customProtocol</a></code> | <code>java.lang.String</code> | If the protocol value is custom_protocol, this property holds the custom protocol's string. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.customType">customType</a></code> | <code>java.lang.String</code> | If the IM type is custom, this property holds the custom type string. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.im">im</a></code> | <code>java.lang.String</code> | The user's IM network ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this is the user's primary IM. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-googleworkspace.user.UserIms.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

An IM protocol identifies the IM network.

The value can be a custom network or the standard network. Acceptable values: `aim`, `custom_protocol`, `gtalk`, `icq`, `jabber`, `msn`, `net_meeting`, `qq`, `skype`, `yahoo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#protocol User#protocol}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserIms.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Acceptable values: `custom`, `home`, `other`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `customProtocol`<sup>Optional</sup> <a name="customProtocol" id="@cdktf/provider-googleworkspace.user.UserIms.property.customProtocol"></a>

```java
public java.lang.String getCustomProtocol();
```

- *Type:* java.lang.String

If the protocol value is custom_protocol, this property holds the custom protocol's string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_protocol User#custom_protocol}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserIms.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

If the IM type is custom, this property holds the custom type string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `im`<sup>Optional</sup> <a name="im" id="@cdktf/provider-googleworkspace.user.UserIms.property.im"></a>

```java
public java.lang.String getIm();
```

- *Type:* java.lang.String

The user's IM network ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#im User#im}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserIms.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this is the user's primary IM.

Only one entry in the IM list can have a value of true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

### UserKeywords <a name="UserKeywords" id="@cdktf/provider-googleworkspace.user.UserKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserKeywords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserKeywords;

UserKeywords.builder()
    .type(java.lang.String)
    .value(java.lang.String)
//  .customType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywords.property.type">type</a></code> | <code>java.lang.String</code> | Each entry can have a type which indicates standard type of that entry. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywords.property.value">value</a></code> | <code>java.lang.String</code> | Keyword. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywords.property.customType">customType</a></code> | <code>java.lang.String</code> | Custom Type. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserKeywords.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Each entry can have a type which indicates standard type of that entry.

For example, keyword could be of type occupation or outlook. In addition to the standard type, an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. Acceptable values: `custom`, `mission`, `occupation`, `outlook`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserKeywords.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Keyword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserKeywords.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

Custom Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

### UserLanguages <a name="UserLanguages" id="@cdktf/provider-googleworkspace.user.UserLanguages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserLanguages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserLanguages;

UserLanguages.builder()
//  .customLanguage(java.lang.String)
//  .languageCode(java.lang.String)
//  .preference(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguages.property.customLanguage">customLanguage</a></code> | <code>java.lang.String</code> | Other language. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguages.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Defaults to `en`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguages.property.preference">preference</a></code> | <code>java.lang.String</code> | Defaults to `preferred`. |

---

##### `customLanguage`<sup>Optional</sup> <a name="customLanguage" id="@cdktf/provider-googleworkspace.user.UserLanguages.property.customLanguage"></a>

```java
public java.lang.String getCustomLanguage();
```

- *Type:* java.lang.String

Other language.

A user can provide their own language name if there is no corresponding Google III language code. If this is set, LanguageCode can't be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_language User#custom_language}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-googleworkspace.user.UserLanguages.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Defaults to `en`.

Language Code. Should be used for storing Google III LanguageCode string representation for language. Illegal values cause SchemaException.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#language_code User#language_code}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-googleworkspace.user.UserLanguages.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

Defaults to `preferred`.

If present, controls whether the specified languageCode is the user's preferred language. Allowed values are `preferred` and `not_preferred`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#preference User#preference}

---

### UserLocations <a name="UserLocations" id="@cdktf/provider-googleworkspace.user.UserLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserLocations;

UserLocations.builder()
    .type(java.lang.String)
//  .area(java.lang.String)
//  .buildingId(java.lang.String)
//  .customType(java.lang.String)
//  .deskCode(java.lang.String)
//  .floorName(java.lang.String)
//  .floorSection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.type">type</a></code> | <code>java.lang.String</code> | The location type. Acceptable values: `custom`, `default`, `desk`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.area">area</a></code> | <code>java.lang.String</code> | Textual location. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.buildingId">buildingId</a></code> | <code>java.lang.String</code> | Building identifier. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.customType">customType</a></code> | <code>java.lang.String</code> | If the location type is custom, this property contains the custom value. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.deskCode">deskCode</a></code> | <code>java.lang.String</code> | Most specific textual code of individual desk location. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.floorName">floorName</a></code> | <code>java.lang.String</code> | Floor name/number. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.floorSection">floorSection</a></code> | <code>java.lang.String</code> | Floor section. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserLocations.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The location type. Acceptable values: `custom`, `default`, `desk`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `area`<sup>Optional</sup> <a name="area" id="@cdktf/provider-googleworkspace.user.UserLocations.property.area"></a>

```java
public java.lang.String getArea();
```

- *Type:* java.lang.String

Textual location.

This is most useful for display purposes to concisely describe the location. For example, Mountain View, CA or Near Seattle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#area User#area}

---

##### `buildingId`<sup>Optional</sup> <a name="buildingId" id="@cdktf/provider-googleworkspace.user.UserLocations.property.buildingId"></a>

```java
public java.lang.String getBuildingId();
```

- *Type:* java.lang.String

Building identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#building_id User#building_id}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserLocations.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

If the location type is custom, this property contains the custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `deskCode`<sup>Optional</sup> <a name="deskCode" id="@cdktf/provider-googleworkspace.user.UserLocations.property.deskCode"></a>

```java
public java.lang.String getDeskCode();
```

- *Type:* java.lang.String

Most specific textual code of individual desk location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#desk_code User#desk_code}

---

##### `floorName`<sup>Optional</sup> <a name="floorName" id="@cdktf/provider-googleworkspace.user.UserLocations.property.floorName"></a>

```java
public java.lang.String getFloorName();
```

- *Type:* java.lang.String

Floor name/number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#floor_name User#floor_name}

---

##### `floorSection`<sup>Optional</sup> <a name="floorSection" id="@cdktf/provider-googleworkspace.user.UserLocations.property.floorSection"></a>

```java
public java.lang.String getFloorSection();
```

- *Type:* java.lang.String

Floor section.

More specific location within the floor. For example, if a floor is divided into sections A, B, and C, this field would identify one of those values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#floor_section User#floor_section}

---

### UserName <a name="UserName" id="@cdktf/provider-googleworkspace.user.UserName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserName;

UserName.builder()
    .familyName(java.lang.String)
//  .givenName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserName.property.familyName">familyName</a></code> | <code>java.lang.String</code> | The user's last name. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserName.property.givenName">givenName</a></code> | <code>java.lang.String</code> | The user's first name. |

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-googleworkspace.user.UserName.property.familyName"></a>

```java
public java.lang.String getFamilyName();
```

- *Type:* java.lang.String

The user's last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#family_name User#family_name}

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktf/provider-googleworkspace.user.UserName.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

The user's first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#given_name User#given_name}

---

### UserOrganizations <a name="UserOrganizations" id="@cdktf/provider-googleworkspace.user.UserOrganizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserOrganizations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserOrganizations;

UserOrganizations.builder()
    .type(java.lang.String)
//  .costCenter(java.lang.String)
//  .customType(java.lang.String)
//  .department(java.lang.String)
//  .description(java.lang.String)
//  .domain(java.lang.String)
//  .fullTimeEquivalent(java.lang.Number)
//  .location(java.lang.String)
//  .name(java.lang.String)
//  .primary(java.lang.Boolean)
//  .primary(IResolvable)
//  .symbol(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.type">type</a></code> | <code>java.lang.String</code> | The type of organization. Acceptable values: `domain_only`, `school`, `unknown`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.costCenter">costCenter</a></code> | <code>java.lang.String</code> | The cost center of the user's organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.customType">customType</a></code> | <code>java.lang.String</code> | If the value of type is custom, this property contains the custom value. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.department">department</a></code> | <code>java.lang.String</code> | Specifies the department within the organization, such as sales or engineering. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.description">description</a></code> | <code>java.lang.String</code> | The description of the organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.domain">domain</a></code> | <code>java.lang.String</code> | The domain the organization belongs to. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.fullTimeEquivalent">fullTimeEquivalent</a></code> | <code>java.lang.Number</code> | The full-time equivalent millipercent within the organization (100000 = 100%). |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.location">location</a></code> | <code>java.lang.String</code> | The physical location of the organization. This does not need to be a fully qualified address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.name">name</a></code> | <code>java.lang.String</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if this is the user's primary organization. A user may only have one primary organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.symbol">symbol</a></code> | <code>java.lang.String</code> | Text string symbol of the organization. For example, the text symbol for Google is GOOG. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.title">title</a></code> | <code>java.lang.String</code> | The user's title within the organization. For example, member or engineer. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of organization. Acceptable values: `domain_only`, `school`, `unknown`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `costCenter`<sup>Optional</sup> <a name="costCenter" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.costCenter"></a>

```java
public java.lang.String getCostCenter();
```

- *Type:* java.lang.String

The cost center of the user's organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#cost_center User#cost_center}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

If the value of type is custom, this property contains the custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.department"></a>

```java
public java.lang.String getDepartment();
```

- *Type:* java.lang.String

Specifies the department within the organization, such as sales or engineering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#department User#department}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#description User#description}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The domain the organization belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#domain User#domain}

---

##### `fullTimeEquivalent`<sup>Optional</sup> <a name="fullTimeEquivalent" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.fullTimeEquivalent"></a>

```java
public java.lang.Number getFullTimeEquivalent();
```

- *Type:* java.lang.Number

The full-time equivalent millipercent within the organization (100000 = 100%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#full_time_equivalent User#full_time_equivalent}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The physical location of the organization. This does not need to be a fully qualified address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#location User#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#name User#name}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if this is the user's primary organization. A user may only have one primary organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

##### `symbol`<sup>Optional</sup> <a name="symbol" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.symbol"></a>

```java
public java.lang.String getSymbol();
```

- *Type:* java.lang.String

Text string symbol of the organization. For example, the text symbol for Google is GOOG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#symbol User#symbol}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The user's title within the organization. For example, member or engineer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#title User#title}

---

### UserPhones <a name="UserPhones" id="@cdktf/provider-googleworkspace.user.UserPhones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserPhones.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserPhones;

UserPhones.builder()
    .type(java.lang.String)
    .value(java.lang.String)
//  .customType(java.lang.String)
//  .primary(java.lang.Boolean)
//  .primary(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.type">type</a></code> | <code>java.lang.String</code> | The type of phone number. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.value">value</a></code> | <code>java.lang.String</code> | A human-readable phone number. It may be in any telephone number format. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.customType">customType</a></code> | <code>java.lang.String</code> | If the phone number type is custom, this property contains the custom value and must be set. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if this is the user's primary phone number. A user may only have one primary phone number. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserPhones.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of phone number.

Acceptable values: `assistant`, `callback`, `car`, `company_main` , `custom`, `grand_central`, `home`, `home_fax`, `isdn`, `main`, `mobile`, `other`, `other_fax`, `pager`, `radio`, `telex`, `tty_tdd`, `work`, `work_fax`, `work_mobile`, `work_pager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserPhones.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A human-readable phone number. It may be in any telephone number format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserPhones.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

If the phone number type is custom, this property contains the custom value and must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserPhones.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if this is the user's primary phone number. A user may only have one primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

### UserPosixAccounts <a name="UserPosixAccounts" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserPosixAccounts;

UserPosixAccounts.builder()
//  .accountId(java.lang.String)
//  .gecos(java.lang.String)
//  .gid(java.lang.String)
//  .homeDirectory(java.lang.String)
//  .operatingSystemType(java.lang.String)
//  .primary(java.lang.Boolean)
//  .primary(IResolvable)
//  .shell(java.lang.String)
//  .systemId(java.lang.String)
//  .uid(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.accountId">accountId</a></code> | <code>java.lang.String</code> | A POSIX account field identifier. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gecos">gecos</a></code> | <code>java.lang.String</code> | The GECOS (user information) for this account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gid">gid</a></code> | <code>java.lang.String</code> | The default group ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.homeDirectory">homeDirectory</a></code> | <code>java.lang.String</code> | The path to the home directory for this account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.operatingSystemType">operatingSystemType</a></code> | <code>java.lang.String</code> | The operating system type for this account. Acceptable values: `linux`, `unspecified`, `windows`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this is user's primary account within the SystemId. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.shell">shell</a></code> | <code>java.lang.String</code> | The path to the login shell for this account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.systemId">systemId</a></code> | <code>java.lang.String</code> | System identifier for which account Username or Uid apply to. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.uid">uid</a></code> | <code>java.lang.String</code> | The POSIX compliant user ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.username">username</a></code> | <code>java.lang.String</code> | The username of the account. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

A POSIX account field identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#account_id User#account_id}

---

##### `gecos`<sup>Optional</sup> <a name="gecos" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gecos"></a>

```java
public java.lang.String getGecos();
```

- *Type:* java.lang.String

The GECOS (user information) for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#gecos User#gecos}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gid"></a>

```java
public java.lang.String getGid();
```

- *Type:* java.lang.String

The default group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#gid User#gid}

---

##### `homeDirectory`<sup>Optional</sup> <a name="homeDirectory" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.homeDirectory"></a>

```java
public java.lang.String getHomeDirectory();
```

- *Type:* java.lang.String

The path to the home directory for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#home_directory User#home_directory}

---

##### `operatingSystemType`<sup>Optional</sup> <a name="operatingSystemType" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.operatingSystemType"></a>

```java
public java.lang.String getOperatingSystemType();
```

- *Type:* java.lang.String

The operating system type for this account. Acceptable values: `linux`, `unspecified`, `windows`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#operating_system_type User#operating_system_type}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this is user's primary account within the SystemId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

##### `shell`<sup>Optional</sup> <a name="shell" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.shell"></a>

```java
public java.lang.String getShell();
```

- *Type:* java.lang.String

The path to the login shell for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#shell User#shell}

---

##### `systemId`<sup>Optional</sup> <a name="systemId" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.systemId"></a>

```java
public java.lang.String getSystemId();
```

- *Type:* java.lang.String

System identifier for which account Username or Uid apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#system_id User#system_id}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

The POSIX compliant user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#uid User#uid}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#username User#username}

---

### UserRelations <a name="UserRelations" id="@cdktf/provider-googleworkspace.user.UserRelations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserRelations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserRelations;

UserRelations.builder()
    .type(java.lang.String)
    .value(java.lang.String)
//  .customType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelations.property.type">type</a></code> | <code>java.lang.String</code> | The type of relation. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelations.property.value">value</a></code> | <code>java.lang.String</code> | The name of the person the user is related to. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelations.property.customType">customType</a></code> | <code>java.lang.String</code> | If the value of type is custom, this property contains the custom type string. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserRelations.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of relation.

Acceptable values: `admin_assistant`, `assistant`, `brother`, `child`, `custom`, `domestic_partner`, `dotted_line_manager`, `exec_assistant`, `father`, `friend`, `manager`, `mother`, `parent`, `partner`, `referred_by`, `relative`, `sister`, `spouse`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserRelations.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The name of the person the user is related to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserRelations.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

If the value of type is custom, this property contains the custom type string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

### UserSshPublicKeys <a name="UserSshPublicKeys" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserSshPublicKeys;

UserSshPublicKeys.builder()
    .key(java.lang.String)
//  .expirationTimeUsec(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.key">key</a></code> | <code>java.lang.String</code> | An SSH public key. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.expirationTimeUsec">expirationTimeUsec</a></code> | <code>java.lang.String</code> | An expiration time in microseconds since epoch. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

An SSH public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#key User#key}

---

##### `expirationTimeUsec`<sup>Optional</sup> <a name="expirationTimeUsec" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.expirationTimeUsec"></a>

```java
public java.lang.String getExpirationTimeUsec();
```

- *Type:* java.lang.String

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#expiration_time_usec User#expiration_time_usec}

---

### UserTimeouts <a name="UserTimeouts" id="@cdktf/provider-googleworkspace.user.UserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserTimeouts;

UserTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#create User#create}. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#update User#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-googleworkspace.user.UserTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#create User#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-googleworkspace.user.UserTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#update User#update}.

---

### UserWebsites <a name="UserWebsites" id="@cdktf/provider-googleworkspace.user.UserWebsites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserWebsites.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserWebsites;

UserWebsites.builder()
    .type(java.lang.String)
    .value(java.lang.String)
//  .customType(java.lang.String)
//  .primary(java.lang.Boolean)
//  .primary(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.type">type</a></code> | <code>java.lang.String</code> | The type or purpose of the website. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.value">value</a></code> | <code>java.lang.String</code> | The URL of the website. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.customType">customType</a></code> | <code>java.lang.String</code> | The custom type. Only used if the type is custom. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this is user's primary website or not. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type or purpose of the website.

For example, a website could be labeled as home or blog. Alternatively, an entry can have a custom type Custom types must have a customType value. Acceptable values: `app_install_page`, `blog`, `custom`, `ftp` , `home`, `home_page`, `other`, `profile`, `reservations`, `resume`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The URL of the website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

The custom type. Only used if the type is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this is user's primary website or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

## Classes <a name="Classes" id="Classes"></a>

### UserAddressesList <a name="UserAddressesList" id="@cdktf/provider-googleworkspace.user.UserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserAddressesList;

new UserAddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserAddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserAddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserAddressesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserAddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserAddressesList.get"></a>

```java
public UserAddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserAddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserAddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserAddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserAddressesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>>

---


### UserAddressesOutputReference <a name="UserAddressesOutputReference" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserAddressesOutputReference;

new UserAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCustomType">resetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetExtendedAddress">resetExtendedAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetFormatted">resetFormatted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPoBox">resetPoBox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetSourceIsStructured">resetSourceIsStructured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCustomType"></a>

```java
public void resetCustomType()
```

##### `resetExtendedAddress` <a name="resetExtendedAddress" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetExtendedAddress"></a>

```java
public void resetExtendedAddress()
```

##### `resetFormatted` <a name="resetFormatted" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetFormatted"></a>

```java
public void resetFormatted()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetPoBox` <a name="resetPoBox" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPoBox"></a>

```java
public void resetPoBox()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSourceIsStructured` <a name="resetSourceIsStructured" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetSourceIsStructured"></a>

```java
public void resetSourceIsStructured()
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetStreetAddress"></a>

```java
public void resetStreetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddressInput">extendedAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formattedInput">formattedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBoxInput">poBoxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructuredInput">sourceIsStructuredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddressInput">streetAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customType">customType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddress">extendedAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formatted">formatted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBox">poBox</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructured">sourceIsStructured</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customTypeInput"></a>

```java
public java.lang.String getCustomTypeInput();
```

- *Type:* java.lang.String

---

##### `extendedAddressInput`<sup>Optional</sup> <a name="extendedAddressInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddressInput"></a>

```java
public java.lang.String getExtendedAddressInput();
```

- *Type:* java.lang.String

---

##### `formattedInput`<sup>Optional</sup> <a name="formattedInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formattedInput"></a>

```java
public java.lang.String getFormattedInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `poBoxInput`<sup>Optional</sup> <a name="poBoxInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBoxInput"></a>

```java
public java.lang.String getPoBoxInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primaryInput"></a>

```java
public java.lang.Object getPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sourceIsStructuredInput`<sup>Optional</sup> <a name="sourceIsStructuredInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructuredInput"></a>

```java
public java.lang.Object getSourceIsStructuredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddressInput"></a>

```java
public java.lang.String getStreetAddressInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

---

##### `extendedAddress`<sup>Required</sup> <a name="extendedAddress" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddress"></a>

```java
public java.lang.String getExtendedAddress();
```

- *Type:* java.lang.String

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formatted"></a>

```java
public java.lang.String getFormatted();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `poBox`<sup>Required</sup> <a name="poBox" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBox"></a>

```java
public java.lang.String getPoBox();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sourceIsStructured`<sup>Required</sup> <a name="sourceIsStructured" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructured"></a>

```java
public java.lang.Object getSourceIsStructured();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>

---


### UserCustomSchemasList <a name="UserCustomSchemasList" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserCustomSchemasList;

new UserCustomSchemasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.get"></a>

```java
public UserCustomSchemasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>>

---


### UserCustomSchemasOutputReference <a name="UserCustomSchemasOutputReference" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserCustomSchemasOutputReference;

new UserCustomSchemasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValuesInput">schemaValuesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValues">schemaValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `schemaValuesInput`<sup>Optional</sup> <a name="schemaValuesInput" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValuesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSchemaValuesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `schemaValues`<sup>Required</sup> <a name="schemaValues" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSchemaValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>

---


### UserEmailsList <a name="UserEmailsList" id="@cdktf/provider-googleworkspace.user.UserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserEmailsList;

new UserEmailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserEmailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserEmailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserEmailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserEmailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserEmailsList.get"></a>

```java
public UserEmailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserEmailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserEmailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserEmailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserEmailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>>

---


### UserEmailsOutputReference <a name="UserEmailsOutputReference" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserEmailsOutputReference;

new UserEmailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetCustomType">resetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetCustomType"></a>

```java
public void resetCustomType()
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customType">customType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customTypeInput"></a>

```java
public java.lang.String getCustomTypeInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primaryInput"></a>

```java
public java.lang.Object getPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>

---


### UserExternalIdsList <a name="UserExternalIdsList" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserExternalIdsList;

new UserExternalIdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.get"></a>

```java
public UserExternalIdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>>

---


### UserExternalIdsOutputReference <a name="UserExternalIdsOutputReference" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserExternalIdsOutputReference;

new UserExternalIdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resetCustomType">resetCustomType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resetCustomType"></a>

```java
public void resetCustomType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customType">customType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customTypeInput"></a>

```java
public java.lang.String getCustomTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>

---


### UserImsList <a name="UserImsList" id="@cdktf/provider-googleworkspace.user.UserImsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserImsList;

new UserImsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserImsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserImsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserImsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserImsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserImsList.get"></a>

```java
public UserImsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserImsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserImsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserImsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserImsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>>

---


### UserImsOutputReference <a name="UserImsOutputReference" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserImsOutputReference;

new UserImsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomProtocol">resetCustomProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomType">resetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetIm">resetIm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomProtocol` <a name="resetCustomProtocol" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomProtocol"></a>

```java
public void resetCustomProtocol()
```

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomType"></a>

```java
public void resetCustomType()
```

##### `resetIm` <a name="resetIm" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetIm"></a>

```java
public void resetIm()
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocolInput">customProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.imInput">imInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocol">customProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customType">customType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.im">im</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customProtocolInput`<sup>Optional</sup> <a name="customProtocolInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocolInput"></a>

```java
public java.lang.String getCustomProtocolInput();
```

- *Type:* java.lang.String

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customTypeInput"></a>

```java
public java.lang.String getCustomTypeInput();
```

- *Type:* java.lang.String

---

##### `imInput`<sup>Optional</sup> <a name="imInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.imInput"></a>

```java
public java.lang.String getImInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primaryInput"></a>

```java
public java.lang.Object getPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `customProtocol`<sup>Required</sup> <a name="customProtocol" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocol"></a>

```java
public java.lang.String getCustomProtocol();
```

- *Type:* java.lang.String

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

---

##### `im`<sup>Required</sup> <a name="im" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.im"></a>

```java
public java.lang.String getIm();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>

---


### UserKeywordsList <a name="UserKeywordsList" id="@cdktf/provider-googleworkspace.user.UserKeywordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserKeywordsList;

new UserKeywordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.get"></a>

```java
public UserKeywordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>>

---


### UserKeywordsOutputReference <a name="UserKeywordsOutputReference" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserKeywordsOutputReference;

new UserKeywordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resetCustomType">resetCustomType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resetCustomType"></a>

```java
public void resetCustomType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customType">customType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customTypeInput"></a>

```java
public java.lang.String getCustomTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>

---


### UserLanguagesList <a name="UserLanguagesList" id="@cdktf/provider-googleworkspace.user.UserLanguagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserLanguagesList;

new UserLanguagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.get"></a>

```java
public UserLanguagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>>

---


### UserLanguagesOutputReference <a name="UserLanguagesOutputReference" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserLanguagesOutputReference;

new UserLanguagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetCustomLanguage">resetCustomLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetPreference">resetPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomLanguage` <a name="resetCustomLanguage" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetCustomLanguage"></a>

```java
public void resetCustomLanguage()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetPreference` <a name="resetPreference" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetPreference"></a>

```java
public void resetPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguageInput">customLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguage">customLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customLanguageInput`<sup>Optional</sup> <a name="customLanguageInput" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguageInput"></a>

```java
public java.lang.String getCustomLanguageInput();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preferenceInput"></a>

```java
public java.lang.String getPreferenceInput();
```

- *Type:* java.lang.String

---

##### `customLanguage`<sup>Required</sup> <a name="customLanguage" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguage"></a>

```java
public java.lang.String getCustomLanguage();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>

---


### UserLocationsList <a name="UserLocationsList" id="@cdktf/provider-googleworkspace.user.UserLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserLocationsList;

new UserLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserLocationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserLocationsList.get"></a>

```java
public UserLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserLocationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>>

---


### UserLocationsOutputReference <a name="UserLocationsOutputReference" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserLocationsOutputReference;

new UserLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetArea">resetArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetBuildingId">resetBuildingId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetCustomType">resetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetDeskCode">resetDeskCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorName">resetFloorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorSection">resetFloorSection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArea` <a name="resetArea" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetArea"></a>

```java
public void resetArea()
```

##### `resetBuildingId` <a name="resetBuildingId" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetBuildingId"></a>

```java
public void resetBuildingId()
```

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetCustomType"></a>

```java
public void resetCustomType()
```

##### `resetDeskCode` <a name="resetDeskCode" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetDeskCode"></a>

```java
public void resetDeskCode()
```

##### `resetFloorName` <a name="resetFloorName" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorName"></a>

```java
public void resetFloorName()
```

##### `resetFloorSection` <a name="resetFloorSection" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorSection"></a>

```java
public void resetFloorSection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.areaInput">areaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingIdInput">buildingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCodeInput">deskCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorNameInput">floorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSectionInput">floorSectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.area">area</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingId">buildingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customType">customType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCode">deskCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorName">floorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSection">floorSection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `areaInput`<sup>Optional</sup> <a name="areaInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.areaInput"></a>

```java
public java.lang.String getAreaInput();
```

- *Type:* java.lang.String

---

##### `buildingIdInput`<sup>Optional</sup> <a name="buildingIdInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingIdInput"></a>

```java
public java.lang.String getBuildingIdInput();
```

- *Type:* java.lang.String

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customTypeInput"></a>

```java
public java.lang.String getCustomTypeInput();
```

- *Type:* java.lang.String

---

##### `deskCodeInput`<sup>Optional</sup> <a name="deskCodeInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCodeInput"></a>

```java
public java.lang.String getDeskCodeInput();
```

- *Type:* java.lang.String

---

##### `floorNameInput`<sup>Optional</sup> <a name="floorNameInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorNameInput"></a>

```java
public java.lang.String getFloorNameInput();
```

- *Type:* java.lang.String

---

##### `floorSectionInput`<sup>Optional</sup> <a name="floorSectionInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSectionInput"></a>

```java
public java.lang.String getFloorSectionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `area`<sup>Required</sup> <a name="area" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.area"></a>

```java
public java.lang.String getArea();
```

- *Type:* java.lang.String

---

##### `buildingId`<sup>Required</sup> <a name="buildingId" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingId"></a>

```java
public java.lang.String getBuildingId();
```

- *Type:* java.lang.String

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

---

##### `deskCode`<sup>Required</sup> <a name="deskCode" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCode"></a>

```java
public java.lang.String getDeskCode();
```

- *Type:* java.lang.String

---

##### `floorName`<sup>Required</sup> <a name="floorName" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorName"></a>

```java
public java.lang.String getFloorName();
```

- *Type:* java.lang.String

---

##### `floorSection`<sup>Required</sup> <a name="floorSection" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSection"></a>

```java
public java.lang.String getFloorSection();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>

---


### UserNameOutputReference <a name="UserNameOutputReference" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserNameOutputReference;

new UserNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.resetGivenName">resetGivenName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGivenName` <a name="resetGivenName" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.resetGivenName"></a>

```java
public void resetGivenName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyNameInput">familyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyName">familyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `familyNameInput`<sup>Optional</sup> <a name="familyNameInput" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyNameInput"></a>

```java
public java.lang.String getFamilyNameInput();
```

- *Type:* java.lang.String

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenNameInput"></a>

```java
public java.lang.String getGivenNameInput();
```

- *Type:* java.lang.String

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyName"></a>

```java
public java.lang.String getFamilyName();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.internalValue"></a>

```java
public UserName getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

---


### UserOrganizationsList <a name="UserOrganizationsList" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserOrganizationsList;

new UserOrganizationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.get"></a>

```java
public UserOrganizationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>>

---


### UserOrganizationsOutputReference <a name="UserOrganizationsOutputReference" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserOrganizationsOutputReference;

new UserOrganizationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCostCenter">resetCostCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCustomType">resetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDepartment">resetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetFullTimeEquivalent">resetFullTimeEquivalent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetSymbol">resetSymbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCostCenter` <a name="resetCostCenter" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCostCenter"></a>

```java
public void resetCostCenter()
```

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCustomType"></a>

```java
public void resetCustomType()
```

##### `resetDepartment` <a name="resetDepartment" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDepartment"></a>

```java
public void resetDepartment()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetFullTimeEquivalent` <a name="resetFullTimeEquivalent" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetFullTimeEquivalent"></a>

```java
public void resetFullTimeEquivalent()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetSymbol` <a name="resetSymbol" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetSymbol"></a>

```java
public void resetSymbol()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenterInput">costCenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.departmentInput">departmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalentInput">fullTimeEquivalentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbolInput">symbolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenter">costCenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customType">customType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.department">department</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalent">fullTimeEquivalent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbol">symbol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costCenterInput`<sup>Optional</sup> <a name="costCenterInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenterInput"></a>

```java
public java.lang.String getCostCenterInput();
```

- *Type:* java.lang.String

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customTypeInput"></a>

```java
public java.lang.String getCustomTypeInput();
```

- *Type:* java.lang.String

---

##### `departmentInput`<sup>Optional</sup> <a name="departmentInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.departmentInput"></a>

```java
public java.lang.String getDepartmentInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `fullTimeEquivalentInput`<sup>Optional</sup> <a name="fullTimeEquivalentInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalentInput"></a>

```java
public java.lang.Number getFullTimeEquivalentInput();
```

- *Type:* java.lang.Number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primaryInput"></a>

```java
public java.lang.Object getPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `symbolInput`<sup>Optional</sup> <a name="symbolInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbolInput"></a>

```java
public java.lang.String getSymbolInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `costCenter`<sup>Required</sup> <a name="costCenter" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenter"></a>

```java
public java.lang.String getCostCenter();
```

- *Type:* java.lang.String

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.department"></a>

```java
public java.lang.String getDepartment();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `fullTimeEquivalent`<sup>Required</sup> <a name="fullTimeEquivalent" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalent"></a>

```java
public java.lang.Number getFullTimeEquivalent();
```

- *Type:* java.lang.Number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `symbol`<sup>Required</sup> <a name="symbol" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbol"></a>

```java
public java.lang.String getSymbol();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>

---


### UserPhonesList <a name="UserPhonesList" id="@cdktf/provider-googleworkspace.user.UserPhonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserPhonesList;

new UserPhonesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserPhonesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserPhonesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserPhonesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserPhonesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserPhonesList.get"></a>

```java
public UserPhonesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserPhonesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserPhonesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserPhonesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserPhonesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>>

---


### UserPhonesOutputReference <a name="UserPhonesOutputReference" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserPhonesOutputReference;

new UserPhonesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetCustomType">resetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetCustomType"></a>

```java
public void resetCustomType()
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customType">customType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customTypeInput"></a>

```java
public java.lang.String getCustomTypeInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primaryInput"></a>

```java
public java.lang.Object getPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>

---


### UserPosixAccountsList <a name="UserPosixAccountsList" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserPosixAccountsList;

new UserPosixAccountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.get"></a>

```java
public UserPosixAccountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>>

---


### UserPosixAccountsOutputReference <a name="UserPosixAccountsOutputReference" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserPosixAccountsOutputReference;

new UserPosixAccountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGecos">resetGecos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetHomeDirectory">resetHomeDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetOperatingSystemType">resetOperatingSystemType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetShell">resetShell</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetSystemId">resetSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUid">resetUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetGecos` <a name="resetGecos" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGecos"></a>

```java
public void resetGecos()
```

##### `resetGid` <a name="resetGid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGid"></a>

```java
public void resetGid()
```

##### `resetHomeDirectory` <a name="resetHomeDirectory" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetHomeDirectory"></a>

```java
public void resetHomeDirectory()
```

##### `resetOperatingSystemType` <a name="resetOperatingSystemType" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetOperatingSystemType"></a>

```java
public void resetOperatingSystemType()
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetShell` <a name="resetShell" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetShell"></a>

```java
public void resetShell()
```

##### `resetSystemId` <a name="resetSystemId" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetSystemId"></a>

```java
public void resetSystemId()
```

##### `resetUid` <a name="resetUid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUid"></a>

```java
public void resetUid()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecosInput">gecosInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gidInput">gidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectoryInput">homeDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemTypeInput">operatingSystemTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shellInput">shellInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemIdInput">systemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uidInput">uidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecos">gecos</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gid">gid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectory">homeDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemType">operatingSystemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shell">shell</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemId">systemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `gecosInput`<sup>Optional</sup> <a name="gecosInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecosInput"></a>

```java
public java.lang.String getGecosInput();
```

- *Type:* java.lang.String

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gidInput"></a>

```java
public java.lang.String getGidInput();
```

- *Type:* java.lang.String

---

##### `homeDirectoryInput`<sup>Optional</sup> <a name="homeDirectoryInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectoryInput"></a>

```java
public java.lang.String getHomeDirectoryInput();
```

- *Type:* java.lang.String

---

##### `operatingSystemTypeInput`<sup>Optional</sup> <a name="operatingSystemTypeInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemTypeInput"></a>

```java
public java.lang.String getOperatingSystemTypeInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primaryInput"></a>

```java
public java.lang.Object getPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shellInput`<sup>Optional</sup> <a name="shellInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shellInput"></a>

```java
public java.lang.String getShellInput();
```

- *Type:* java.lang.String

---

##### `systemIdInput`<sup>Optional</sup> <a name="systemIdInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemIdInput"></a>

```java
public java.lang.String getSystemIdInput();
```

- *Type:* java.lang.String

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uidInput"></a>

```java
public java.lang.String getUidInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `gecos`<sup>Required</sup> <a name="gecos" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecos"></a>

```java
public java.lang.String getGecos();
```

- *Type:* java.lang.String

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gid"></a>

```java
public java.lang.String getGid();
```

- *Type:* java.lang.String

---

##### `homeDirectory`<sup>Required</sup> <a name="homeDirectory" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectory"></a>

```java
public java.lang.String getHomeDirectory();
```

- *Type:* java.lang.String

---

##### `operatingSystemType`<sup>Required</sup> <a name="operatingSystemType" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemType"></a>

```java
public java.lang.String getOperatingSystemType();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shell"></a>

```java
public java.lang.String getShell();
```

- *Type:* java.lang.String

---

##### `systemId`<sup>Required</sup> <a name="systemId" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemId"></a>

```java
public java.lang.String getSystemId();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>

---


### UserRelationsList <a name="UserRelationsList" id="@cdktf/provider-googleworkspace.user.UserRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserRelationsList;

new UserRelationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserRelationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserRelationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserRelationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserRelationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserRelationsList.get"></a>

```java
public UserRelationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserRelationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserRelationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserRelationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserRelationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>>

---


### UserRelationsOutputReference <a name="UserRelationsOutputReference" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserRelationsOutputReference;

new UserRelationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resetCustomType">resetCustomType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resetCustomType"></a>

```java
public void resetCustomType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customType">customType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customTypeInput"></a>

```java
public java.lang.String getCustomTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>

---


### UserSshPublicKeysList <a name="UserSshPublicKeysList" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserSshPublicKeysList;

new UserSshPublicKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.get"></a>

```java
public UserSshPublicKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>>

---


### UserSshPublicKeysOutputReference <a name="UserSshPublicKeysOutputReference" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserSshPublicKeysOutputReference;

new UserSshPublicKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resetExpirationTimeUsec">resetExpirationTimeUsec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationTimeUsec` <a name="resetExpirationTimeUsec" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resetExpirationTimeUsec"></a>

```java
public void resetExpirationTimeUsec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsecInput">expirationTimeUsecInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsec">expirationTimeUsec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `expirationTimeUsecInput`<sup>Optional</sup> <a name="expirationTimeUsecInput" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsecInput"></a>

```java
public java.lang.String getExpirationTimeUsecInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `expirationTimeUsec`<sup>Required</sup> <a name="expirationTimeUsec" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsec"></a>

```java
public java.lang.String getExpirationTimeUsec();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>

---


### UserTimeoutsOutputReference <a name="UserTimeoutsOutputReference" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserTimeoutsOutputReference;

new UserTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

---


### UserWebsitesList <a name="UserWebsitesList" id="@cdktf/provider-googleworkspace.user.UserWebsitesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserWebsitesList;

new UserWebsitesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.get"></a>

```java
public UserWebsitesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>>

---


### UserWebsitesOutputReference <a name="UserWebsitesOutputReference" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.user.UserWebsitesOutputReference;

new UserWebsitesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetCustomType">resetCustomType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetCustomType"></a>

```java
public void resetCustomType()
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customType">customType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customTypeInput"></a>

```java
public java.lang.String getCustomTypeInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primaryInput"></a>

```java
public java.lang.Object getPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customType"></a>

```java
public java.lang.String getCustomType();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>

---



