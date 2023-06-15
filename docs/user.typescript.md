# `googleworkspace_user`

Refer to the Terraform Registory for docs: [`googleworkspace_user`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-googleworkspace.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-googleworkspace.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user googleworkspace_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.User.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.User(scope: Construct, id: string, config: UserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-googleworkspace.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserConfig">UserConfig</a>

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
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.user.User.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.user.User.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.user.User.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.user.User.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.user.User.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.User.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.User.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.User.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.User.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.User.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAddresses` <a name="putAddresses" id="@cdktf/provider-googleworkspace.user.User.putAddresses"></a>

```typescript
public putAddresses(value: IResolvable | UserAddresses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putAddresses.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>[]

---

##### `putCustomSchemas` <a name="putCustomSchemas" id="@cdktf/provider-googleworkspace.user.User.putCustomSchemas"></a>

```typescript
public putCustomSchemas(value: IResolvable | UserCustomSchemas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putCustomSchemas.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>[]

---

##### `putEmails` <a name="putEmails" id="@cdktf/provider-googleworkspace.user.User.putEmails"></a>

```typescript
public putEmails(value: IResolvable | UserEmails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putEmails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>[]

---

##### `putExternalIds` <a name="putExternalIds" id="@cdktf/provider-googleworkspace.user.User.putExternalIds"></a>

```typescript
public putExternalIds(value: IResolvable | UserExternalIds[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putExternalIds.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>[]

---

##### `putIms` <a name="putIms" id="@cdktf/provider-googleworkspace.user.User.putIms"></a>

```typescript
public putIms(value: IResolvable | UserIms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putIms.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>[]

---

##### `putKeywords` <a name="putKeywords" id="@cdktf/provider-googleworkspace.user.User.putKeywords"></a>

```typescript
public putKeywords(value: IResolvable | UserKeywords[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putKeywords.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>[]

---

##### `putLanguages` <a name="putLanguages" id="@cdktf/provider-googleworkspace.user.User.putLanguages"></a>

```typescript
public putLanguages(value: IResolvable | UserLanguages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putLanguages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>[]

---

##### `putLocations` <a name="putLocations" id="@cdktf/provider-googleworkspace.user.User.putLocations"></a>

```typescript
public putLocations(value: IResolvable | UserLocations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putLocations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>[]

---

##### `putName` <a name="putName" id="@cdktf/provider-googleworkspace.user.User.putName"></a>

```typescript
public putName(value: UserName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

---

##### `putOrganizations` <a name="putOrganizations" id="@cdktf/provider-googleworkspace.user.User.putOrganizations"></a>

```typescript
public putOrganizations(value: IResolvable | UserOrganizations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putOrganizations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>[]

---

##### `putPhones` <a name="putPhones" id="@cdktf/provider-googleworkspace.user.User.putPhones"></a>

```typescript
public putPhones(value: IResolvable | UserPhones[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putPhones.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>[]

---

##### `putPosixAccounts` <a name="putPosixAccounts" id="@cdktf/provider-googleworkspace.user.User.putPosixAccounts"></a>

```typescript
public putPosixAccounts(value: IResolvable | UserPosixAccounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putPosixAccounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>[]

---

##### `putRelations` <a name="putRelations" id="@cdktf/provider-googleworkspace.user.User.putRelations"></a>

```typescript
public putRelations(value: IResolvable | UserRelations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putRelations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>[]

---

##### `putSshPublicKeys` <a name="putSshPublicKeys" id="@cdktf/provider-googleworkspace.user.User.putSshPublicKeys"></a>

```typescript
public putSshPublicKeys(value: IResolvable | UserSshPublicKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putSshPublicKeys.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-googleworkspace.user.User.putTimeouts"></a>

```typescript
public putTimeouts(value: UserTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

---

##### `putWebsites` <a name="putWebsites" id="@cdktf/provider-googleworkspace.user.User.putWebsites"></a>

```typescript
public putWebsites(value: IResolvable | UserWebsites[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.User.putWebsites.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>[]

---

##### `resetAddresses` <a name="resetAddresses" id="@cdktf/provider-googleworkspace.user.User.resetAddresses"></a>

```typescript
public resetAddresses(): void
```

##### `resetAliases` <a name="resetAliases" id="@cdktf/provider-googleworkspace.user.User.resetAliases"></a>

```typescript
public resetAliases(): void
```

##### `resetArchived` <a name="resetArchived" id="@cdktf/provider-googleworkspace.user.User.resetArchived"></a>

```typescript
public resetArchived(): void
```

##### `resetChangePasswordAtNextLogin` <a name="resetChangePasswordAtNextLogin" id="@cdktf/provider-googleworkspace.user.User.resetChangePasswordAtNextLogin"></a>

```typescript
public resetChangePasswordAtNextLogin(): void
```

##### `resetCustomSchemas` <a name="resetCustomSchemas" id="@cdktf/provider-googleworkspace.user.User.resetCustomSchemas"></a>

```typescript
public resetCustomSchemas(): void
```

##### `resetEmails` <a name="resetEmails" id="@cdktf/provider-googleworkspace.user.User.resetEmails"></a>

```typescript
public resetEmails(): void
```

##### `resetExternalIds` <a name="resetExternalIds" id="@cdktf/provider-googleworkspace.user.User.resetExternalIds"></a>

```typescript
public resetExternalIds(): void
```

##### `resetHashFunction` <a name="resetHashFunction" id="@cdktf/provider-googleworkspace.user.User.resetHashFunction"></a>

```typescript
public resetHashFunction(): void
```

##### `resetIms` <a name="resetIms" id="@cdktf/provider-googleworkspace.user.User.resetIms"></a>

```typescript
public resetIms(): void
```

##### `resetIncludeInGlobalAddressList` <a name="resetIncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.user.User.resetIncludeInGlobalAddressList"></a>

```typescript
public resetIncludeInGlobalAddressList(): void
```

##### `resetIpAllowlist` <a name="resetIpAllowlist" id="@cdktf/provider-googleworkspace.user.User.resetIpAllowlist"></a>

```typescript
public resetIpAllowlist(): void
```

##### `resetIsAdmin` <a name="resetIsAdmin" id="@cdktf/provider-googleworkspace.user.User.resetIsAdmin"></a>

```typescript
public resetIsAdmin(): void
```

##### `resetKeywords` <a name="resetKeywords" id="@cdktf/provider-googleworkspace.user.User.resetKeywords"></a>

```typescript
public resetKeywords(): void
```

##### `resetLanguages` <a name="resetLanguages" id="@cdktf/provider-googleworkspace.user.User.resetLanguages"></a>

```typescript
public resetLanguages(): void
```

##### `resetLocations` <a name="resetLocations" id="@cdktf/provider-googleworkspace.user.User.resetLocations"></a>

```typescript
public resetLocations(): void
```

##### `resetOrganizations` <a name="resetOrganizations" id="@cdktf/provider-googleworkspace.user.User.resetOrganizations"></a>

```typescript
public resetOrganizations(): void
```

##### `resetOrgUnitPath` <a name="resetOrgUnitPath" id="@cdktf/provider-googleworkspace.user.User.resetOrgUnitPath"></a>

```typescript
public resetOrgUnitPath(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-googleworkspace.user.User.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPhones` <a name="resetPhones" id="@cdktf/provider-googleworkspace.user.User.resetPhones"></a>

```typescript
public resetPhones(): void
```

##### `resetPosixAccounts` <a name="resetPosixAccounts" id="@cdktf/provider-googleworkspace.user.User.resetPosixAccounts"></a>

```typescript
public resetPosixAccounts(): void
```

##### `resetRecoveryEmail` <a name="resetRecoveryEmail" id="@cdktf/provider-googleworkspace.user.User.resetRecoveryEmail"></a>

```typescript
public resetRecoveryEmail(): void
```

##### `resetRecoveryPhone` <a name="resetRecoveryPhone" id="@cdktf/provider-googleworkspace.user.User.resetRecoveryPhone"></a>

```typescript
public resetRecoveryPhone(): void
```

##### `resetRelations` <a name="resetRelations" id="@cdktf/provider-googleworkspace.user.User.resetRelations"></a>

```typescript
public resetRelations(): void
```

##### `resetSshPublicKeys` <a name="resetSshPublicKeys" id="@cdktf/provider-googleworkspace.user.User.resetSshPublicKeys"></a>

```typescript
public resetSshPublicKeys(): void
```

##### `resetSuspended` <a name="resetSuspended" id="@cdktf/provider-googleworkspace.user.User.resetSuspended"></a>

```typescript
public resetSuspended(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-googleworkspace.user.User.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWebsites` <a name="resetWebsites" id="@cdktf/provider-googleworkspace.user.User.resetWebsites"></a>

```typescript
public resetWebsites(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.user.User.isConstruct"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

user.User.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.user.User.isTerraformElement"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

user.User.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.user.User.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-googleworkspace.user.User.isTerraformResource"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

user.User.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.user.User.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList">UserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.agreedToTerms">agreedToTerms</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.customerId">customerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.customSchemas">customSchemas</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList">UserCustomSchemasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.deletionTime">deletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.emails">emails</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList">UserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.externalIds">externalIds</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList">UserExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.ims">ims</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList">UserImsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isDelegatedAdmin">isDelegatedAdmin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isEnforcedIn2StepVerification">isEnforcedIn2StepVerification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isEnrolledIn2StepVerification">isEnrolledIn2StepVerification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isMailboxSetup">isMailboxSetup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.keywords">keywords</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList">UserKeywordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.languages">languages</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList">UserLanguagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.lastLoginTime">lastLoginTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList">UserLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.name">name</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference">UserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.nonEditableAliases">nonEditableAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.organizations">organizations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList">UserOrganizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.phones">phones</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList">UserPhonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.posixAccounts">posixAccounts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList">UserPosixAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.relations">relations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList">UserRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.sshPublicKeys">sshPublicKeys</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList">UserSshPublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.suspensionReason">suspensionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoEtag">thumbnailPhotoEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoUrl">thumbnailPhotoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.websites">websites</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList">UserWebsitesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.addressesInput">addressesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.aliasesInput">aliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.archivedInput">archivedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLoginInput">changePasswordAtNextLoginInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.customSchemasInput">customSchemasInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.emailsInput">emailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.externalIdsInput">externalIdsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.hashFunctionInput">hashFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.imsInput">imsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressListInput">includeInGlobalAddressListInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.ipAllowlistInput">ipAllowlistInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isAdminInput">isAdminInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.keywordsInput">keywordsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.languagesInput">languagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.locationsInput">locationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.nameInput">nameInput</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.organizationsInput">organizationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.orgUnitPathInput">orgUnitPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.phonesInput">phonesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.posixAccountsInput">posixAccountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.primaryEmailInput">primaryEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryEmailInput">recoveryEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryPhoneInput">recoveryPhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.relationsInput">relationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.suspendedInput">suspendedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.websitesInput">websitesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.aliases">aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLogin">changePasswordAtNextLogin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.hashFunction">hashFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressList">includeInGlobalAddressList</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.ipAllowlist">ipAllowlist</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.isAdmin">isAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.orgUnitPath">orgUnitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.primaryEmail">primaryEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryEmail">recoveryEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.recoveryPhone">recoveryPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.suspended">suspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.user.User.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.user.User.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.User.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.user.User.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.user.User.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.user.User.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.user.User.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.user.User.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.user.User.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.user.User.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.user.User.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.user.User.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.user.User.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.user.User.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-googleworkspace.user.User.property.addresses"></a>

```typescript
public readonly addresses: UserAddressesList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserAddressesList">UserAddressesList</a>

---

##### `agreedToTerms`<sup>Required</sup> <a name="agreedToTerms" id="@cdktf/provider-googleworkspace.user.User.property.agreedToTerms"></a>

```typescript
public readonly agreedToTerms: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-googleworkspace.user.User.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `customerId`<sup>Required</sup> <a name="customerId" id="@cdktf/provider-googleworkspace.user.User.property.customerId"></a>

```typescript
public readonly customerId: string;
```

- *Type:* string

---

##### `customSchemas`<sup>Required</sup> <a name="customSchemas" id="@cdktf/provider-googleworkspace.user.User.property.customSchemas"></a>

```typescript
public readonly customSchemas: UserCustomSchemasList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList">UserCustomSchemasList</a>

---

##### `deletionTime`<sup>Required</sup> <a name="deletionTime" id="@cdktf/provider-googleworkspace.user.User.property.deletionTime"></a>

```typescript
public readonly deletionTime: string;
```

- *Type:* string

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-googleworkspace.user.User.property.emails"></a>

```typescript
public readonly emails: UserEmailsList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserEmailsList">UserEmailsList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.user.User.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `externalIds`<sup>Required</sup> <a name="externalIds" id="@cdktf/provider-googleworkspace.user.User.property.externalIds"></a>

```typescript
public readonly externalIds: UserExternalIdsList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList">UserExternalIdsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.user.User.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ims`<sup>Required</sup> <a name="ims" id="@cdktf/provider-googleworkspace.user.User.property.ims"></a>

```typescript
public readonly ims: UserImsList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserImsList">UserImsList</a>

---

##### `isDelegatedAdmin`<sup>Required</sup> <a name="isDelegatedAdmin" id="@cdktf/provider-googleworkspace.user.User.property.isDelegatedAdmin"></a>

```typescript
public readonly isDelegatedAdmin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEnforcedIn2StepVerification`<sup>Required</sup> <a name="isEnforcedIn2StepVerification" id="@cdktf/provider-googleworkspace.user.User.property.isEnforcedIn2StepVerification"></a>

```typescript
public readonly isEnforcedIn2StepVerification: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEnrolledIn2StepVerification`<sup>Required</sup> <a name="isEnrolledIn2StepVerification" id="@cdktf/provider-googleworkspace.user.User.property.isEnrolledIn2StepVerification"></a>

```typescript
public readonly isEnrolledIn2StepVerification: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isMailboxSetup`<sup>Required</sup> <a name="isMailboxSetup" id="@cdktf/provider-googleworkspace.user.User.property.isMailboxSetup"></a>

```typescript
public readonly isMailboxSetup: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktf/provider-googleworkspace.user.User.property.keywords"></a>

```typescript
public readonly keywords: UserKeywordsList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList">UserKeywordsList</a>

---

##### `languages`<sup>Required</sup> <a name="languages" id="@cdktf/provider-googleworkspace.user.User.property.languages"></a>

```typescript
public readonly languages: UserLanguagesList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList">UserLanguagesList</a>

---

##### `lastLoginTime`<sup>Required</sup> <a name="lastLoginTime" id="@cdktf/provider-googleworkspace.user.User.property.lastLoginTime"></a>

```typescript
public readonly lastLoginTime: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-googleworkspace.user.User.property.locations"></a>

```typescript
public readonly locations: UserLocationsList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserLocationsList">UserLocationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.User.property.name"></a>

```typescript
public readonly name: UserNameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference">UserNameOutputReference</a>

---

##### `nonEditableAliases`<sup>Required</sup> <a name="nonEditableAliases" id="@cdktf/provider-googleworkspace.user.User.property.nonEditableAliases"></a>

```typescript
public readonly nonEditableAliases: string[];
```

- *Type:* string[]

---

##### `organizations`<sup>Required</sup> <a name="organizations" id="@cdktf/provider-googleworkspace.user.User.property.organizations"></a>

```typescript
public readonly organizations: UserOrganizationsList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList">UserOrganizationsList</a>

---

##### `phones`<sup>Required</sup> <a name="phones" id="@cdktf/provider-googleworkspace.user.User.property.phones"></a>

```typescript
public readonly phones: UserPhonesList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserPhonesList">UserPhonesList</a>

---

##### `posixAccounts`<sup>Required</sup> <a name="posixAccounts" id="@cdktf/provider-googleworkspace.user.User.property.posixAccounts"></a>

```typescript
public readonly posixAccounts: UserPosixAccountsList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList">UserPosixAccountsList</a>

---

##### `relations`<sup>Required</sup> <a name="relations" id="@cdktf/provider-googleworkspace.user.User.property.relations"></a>

```typescript
public readonly relations: UserRelationsList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserRelationsList">UserRelationsList</a>

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktf/provider-googleworkspace.user.User.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: UserSshPublicKeysList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList">UserSshPublicKeysList</a>

---

##### `suspensionReason`<sup>Required</sup> <a name="suspensionReason" id="@cdktf/provider-googleworkspace.user.User.property.suspensionReason"></a>

```typescript
public readonly suspensionReason: string;
```

- *Type:* string

---

##### `thumbnailPhotoEtag`<sup>Required</sup> <a name="thumbnailPhotoEtag" id="@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoEtag"></a>

```typescript
public readonly thumbnailPhotoEtag: string;
```

- *Type:* string

---

##### `thumbnailPhotoUrl`<sup>Required</sup> <a name="thumbnailPhotoUrl" id="@cdktf/provider-googleworkspace.user.User.property.thumbnailPhotoUrl"></a>

```typescript
public readonly thumbnailPhotoUrl: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.user.User.property.timeouts"></a>

```typescript
public readonly timeouts: UserTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a>

---

##### `websites`<sup>Required</sup> <a name="websites" id="@cdktf/provider-googleworkspace.user.User.property.websites"></a>

```typescript
public readonly websites: UserWebsitesList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList">UserWebsitesList</a>

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-googleworkspace.user.User.property.addressesInput"></a>

```typescript
public readonly addressesInput: IResolvable | UserAddresses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>[]

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktf/provider-googleworkspace.user.User.property.aliasesInput"></a>

```typescript
public readonly aliasesInput: string[];
```

- *Type:* string[]

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktf/provider-googleworkspace.user.User.property.archivedInput"></a>

```typescript
public readonly archivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `changePasswordAtNextLoginInput`<sup>Optional</sup> <a name="changePasswordAtNextLoginInput" id="@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLoginInput"></a>

```typescript
public readonly changePasswordAtNextLoginInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customSchemasInput`<sup>Optional</sup> <a name="customSchemasInput" id="@cdktf/provider-googleworkspace.user.User.property.customSchemasInput"></a>

```typescript
public readonly customSchemasInput: IResolvable | UserCustomSchemas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>[]

---

##### `emailsInput`<sup>Optional</sup> <a name="emailsInput" id="@cdktf/provider-googleworkspace.user.User.property.emailsInput"></a>

```typescript
public readonly emailsInput: IResolvable | UserEmails[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>[]

---

##### `externalIdsInput`<sup>Optional</sup> <a name="externalIdsInput" id="@cdktf/provider-googleworkspace.user.User.property.externalIdsInput"></a>

```typescript
public readonly externalIdsInput: IResolvable | UserExternalIds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>[]

---

##### `hashFunctionInput`<sup>Optional</sup> <a name="hashFunctionInput" id="@cdktf/provider-googleworkspace.user.User.property.hashFunctionInput"></a>

```typescript
public readonly hashFunctionInput: string;
```

- *Type:* string

---

##### `imsInput`<sup>Optional</sup> <a name="imsInput" id="@cdktf/provider-googleworkspace.user.User.property.imsInput"></a>

```typescript
public readonly imsInput: IResolvable | UserIms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>[]

---

##### `includeInGlobalAddressListInput`<sup>Optional</sup> <a name="includeInGlobalAddressListInput" id="@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressListInput"></a>

```typescript
public readonly includeInGlobalAddressListInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipAllowlistInput`<sup>Optional</sup> <a name="ipAllowlistInput" id="@cdktf/provider-googleworkspace.user.User.property.ipAllowlistInput"></a>

```typescript
public readonly ipAllowlistInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAdminInput`<sup>Optional</sup> <a name="isAdminInput" id="@cdktf/provider-googleworkspace.user.User.property.isAdminInput"></a>

```typescript
public readonly isAdminInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keywordsInput`<sup>Optional</sup> <a name="keywordsInput" id="@cdktf/provider-googleworkspace.user.User.property.keywordsInput"></a>

```typescript
public readonly keywordsInput: IResolvable | UserKeywords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>[]

---

##### `languagesInput`<sup>Optional</sup> <a name="languagesInput" id="@cdktf/provider-googleworkspace.user.User.property.languagesInput"></a>

```typescript
public readonly languagesInput: IResolvable | UserLanguages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>[]

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-googleworkspace.user.User.property.locationsInput"></a>

```typescript
public readonly locationsInput: IResolvable | UserLocations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-googleworkspace.user.User.property.nameInput"></a>

```typescript
public readonly nameInput: UserName;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

---

##### `organizationsInput`<sup>Optional</sup> <a name="organizationsInput" id="@cdktf/provider-googleworkspace.user.User.property.organizationsInput"></a>

```typescript
public readonly organizationsInput: IResolvable | UserOrganizations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>[]

---

##### `orgUnitPathInput`<sup>Optional</sup> <a name="orgUnitPathInput" id="@cdktf/provider-googleworkspace.user.User.property.orgUnitPathInput"></a>

```typescript
public readonly orgUnitPathInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-googleworkspace.user.User.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `phonesInput`<sup>Optional</sup> <a name="phonesInput" id="@cdktf/provider-googleworkspace.user.User.property.phonesInput"></a>

```typescript
public readonly phonesInput: IResolvable | UserPhones[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>[]

---

##### `posixAccountsInput`<sup>Optional</sup> <a name="posixAccountsInput" id="@cdktf/provider-googleworkspace.user.User.property.posixAccountsInput"></a>

```typescript
public readonly posixAccountsInput: IResolvable | UserPosixAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>[]

---

##### `primaryEmailInput`<sup>Optional</sup> <a name="primaryEmailInput" id="@cdktf/provider-googleworkspace.user.User.property.primaryEmailInput"></a>

```typescript
public readonly primaryEmailInput: string;
```

- *Type:* string

---

##### `recoveryEmailInput`<sup>Optional</sup> <a name="recoveryEmailInput" id="@cdktf/provider-googleworkspace.user.User.property.recoveryEmailInput"></a>

```typescript
public readonly recoveryEmailInput: string;
```

- *Type:* string

---

##### `recoveryPhoneInput`<sup>Optional</sup> <a name="recoveryPhoneInput" id="@cdktf/provider-googleworkspace.user.User.property.recoveryPhoneInput"></a>

```typescript
public readonly recoveryPhoneInput: string;
```

- *Type:* string

---

##### `relationsInput`<sup>Optional</sup> <a name="relationsInput" id="@cdktf/provider-googleworkspace.user.User.property.relationsInput"></a>

```typescript
public readonly relationsInput: IResolvable | UserRelations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>[]

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktf/provider-googleworkspace.user.User.property.sshPublicKeysInput"></a>

```typescript
public readonly sshPublicKeysInput: IResolvable | UserSshPublicKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>[]

---

##### `suspendedInput`<sup>Optional</sup> <a name="suspendedInput" id="@cdktf/provider-googleworkspace.user.User.property.suspendedInput"></a>

```typescript
public readonly suspendedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-googleworkspace.user.User.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | UserTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

---

##### `websitesInput`<sup>Optional</sup> <a name="websitesInput" id="@cdktf/provider-googleworkspace.user.User.property.websitesInput"></a>

```typescript
public readonly websitesInput: IResolvable | UserWebsites[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>[]

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-googleworkspace.user.User.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-googleworkspace.user.User.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `changePasswordAtNextLogin`<sup>Required</sup> <a name="changePasswordAtNextLogin" id="@cdktf/provider-googleworkspace.user.User.property.changePasswordAtNextLogin"></a>

```typescript
public readonly changePasswordAtNextLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hashFunction`<sup>Required</sup> <a name="hashFunction" id="@cdktf/provider-googleworkspace.user.User.property.hashFunction"></a>

```typescript
public readonly hashFunction: string;
```

- *Type:* string

---

##### `includeInGlobalAddressList`<sup>Required</sup> <a name="includeInGlobalAddressList" id="@cdktf/provider-googleworkspace.user.User.property.includeInGlobalAddressList"></a>

```typescript
public readonly includeInGlobalAddressList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipAllowlist`<sup>Required</sup> <a name="ipAllowlist" id="@cdktf/provider-googleworkspace.user.User.property.ipAllowlist"></a>

```typescript
public readonly ipAllowlist: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-googleworkspace.user.User.property.isAdmin"></a>

```typescript
public readonly isAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `orgUnitPath`<sup>Required</sup> <a name="orgUnitPath" id="@cdktf/provider-googleworkspace.user.User.property.orgUnitPath"></a>

```typescript
public readonly orgUnitPath: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-googleworkspace.user.User.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `primaryEmail`<sup>Required</sup> <a name="primaryEmail" id="@cdktf/provider-googleworkspace.user.User.property.primaryEmail"></a>

```typescript
public readonly primaryEmail: string;
```

- *Type:* string

---

##### `recoveryEmail`<sup>Required</sup> <a name="recoveryEmail" id="@cdktf/provider-googleworkspace.user.User.property.recoveryEmail"></a>

```typescript
public readonly recoveryEmail: string;
```

- *Type:* string

---

##### `recoveryPhone`<sup>Required</sup> <a name="recoveryPhone" id="@cdktf/provider-googleworkspace.user.User.property.recoveryPhone"></a>

```typescript
public readonly recoveryPhone: string;
```

- *Type:* string

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-googleworkspace.user.User.property.suspended"></a>

```typescript
public readonly suspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.User.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.user.User.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserAddresses <a name="UserAddresses" id="@cdktf/provider-googleworkspace.user.UserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserAddresses.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userAddresses: user.UserAddresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.type">type</a></code> | <code>string</code> | The address type. Acceptable values: `custom`, `home`, `other`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.country">country</a></code> | <code>string</code> | Country. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.countryCode">countryCode</a></code> | <code>string</code> | The country code. Uses the ISO 3166-1 standard. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.customType">customType</a></code> | <code>string</code> | If the address type is custom, this property contains the custom value. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.extendedAddress">extendedAddress</a></code> | <code>string</code> | For extended addresses, such as an address that includes a sub-region. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.formatted">formatted</a></code> | <code>string</code> | A full and unstructured postal address. This is not synced with the structured address fields. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.locality">locality</a></code> | <code>string</code> | The town or city of the address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.poBox">poBox</a></code> | <code>string</code> | The post office box, if present. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.postalCode">postalCode</a></code> | <code>string</code> | The ZIP or postal code, if applicable. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this is the user's primary address. The addresses list may contain only one primary address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.region">region</a></code> | <code>string</code> | The abbreviated province or state. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.sourceIsStructured">sourceIsStructured</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the user-supplied address was formatted. Formatted addresses are not currently supported. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddresses.property.streetAddress">streetAddress</a></code> | <code>string</code> | The street address, such as 1600 Amphitheatre Parkway. Whitespace within the string is ignored; however, newlines are significant. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The address type. Acceptable values: `custom`, `home`, `other`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#country User#country}

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

The country code. Uses the ISO 3166-1 standard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#country_code User#country_code}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

If the address type is custom, this property contains the custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `extendedAddress`<sup>Optional</sup> <a name="extendedAddress" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.extendedAddress"></a>

```typescript
public readonly extendedAddress: string;
```

- *Type:* string

For extended addresses, such as an address that includes a sub-region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#extended_address User#extended_address}

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

A full and unstructured postal address. This is not synced with the structured address fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#formatted User#formatted}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

The town or city of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#locality User#locality}

---

##### `poBox`<sup>Optional</sup> <a name="poBox" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.poBox"></a>

```typescript
public readonly poBox: string;
```

- *Type:* string

The post office box, if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#po_box User#po_box}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

The ZIP or postal code, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#postal_code User#postal_code}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this is the user's primary address. The addresses list may contain only one primary address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The abbreviated province or state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#region User#region}

---

##### `sourceIsStructured`<sup>Optional</sup> <a name="sourceIsStructured" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.sourceIsStructured"></a>

```typescript
public readonly sourceIsStructured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the user-supplied address was formatted. Formatted addresses are not currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#source_is_structured User#source_is_structured}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-googleworkspace.user.UserAddresses.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

The street address, such as 1600 Amphitheatre Parkway. Whitespace within the string is ignored; however, newlines are significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#street_address User#street_address}

---

### UserConfig <a name="UserConfig" id="@cdktf/provider-googleworkspace.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserConfig.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userConfig: user.UserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.name">name</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | name block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.primaryEmail">primaryEmail</a></code> | <code>string</code> | The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.addresses">addresses</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>[]</code> | addresses block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.aliases">aliases</a></code> | <code>string[]</code> | asps.list of the user's alias email addresses. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if user is archived. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.changePasswordAtNextLogin">changePasswordAtNextLogin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the user is forced to change their password at next login. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.customSchemas">customSchemas</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>[]</code> | custom_schemas block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.emails">emails</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>[]</code> | emails block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.externalIds">externalIds</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>[]</code> | external_ids block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.hashFunction">hashFunction</a></code> | <code>string</code> | Stores the hash format of the password property. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.ims">ims</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>[]</code> | ims block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.includeInGlobalAddressList">includeInGlobalAddressList</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.ipAllowlist">ipAllowlist</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the user's IP address is added to the allow list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.isAdmin">isAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates a user with super admininistrator privileges. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.keywords">keywords</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>[]</code> | keywords block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.languages">languages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>[]</code> | languages block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.locations">locations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>[]</code> | locations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.organizations">organizations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>[]</code> | organizations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.orgUnitPath">orgUnitPath</a></code> | <code>string</code> | The full path of the parent organization associated with the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.password">password</a></code> | <code>string</code> | Stores the password for the user account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.phones">phones</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>[]</code> | phones block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.posixAccounts">posixAccounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>[]</code> | posix_accounts block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryEmail">recoveryEmail</a></code> | <code>string</code> | Recovery email of the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryPhone">recoveryPhone</a></code> | <code>string</code> | Recovery phone of the user. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.relations">relations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>[]</code> | relations block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.sshPublicKeys">sshPublicKeys</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>[]</code> | ssh_public_keys block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.suspended">suspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if user is suspended. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserConfig.property.websites">websites</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>[]</code> | websites block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.user.UserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.user.UserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.user.UserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.user.UserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.user.UserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.user.UserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.user.UserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.UserConfig.property.name"></a>

```typescript
public readonly name: UserName;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#name User#name}

---

##### `primaryEmail`<sup>Required</sup> <a name="primaryEmail" id="@cdktf/provider-googleworkspace.user.UserConfig.property.primaryEmail"></a>

```typescript
public readonly primaryEmail: string;
```

- *Type:* string

The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary_email User#primary_email}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-googleworkspace.user.UserConfig.property.addresses"></a>

```typescript
public readonly addresses: IResolvable | UserAddresses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>[]

addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#addresses User#addresses}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-googleworkspace.user.UserConfig.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

asps.list of the user's alias email addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#aliases User#aliases}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-googleworkspace.user.UserConfig.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if user is archived.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#archived User#archived}

---

##### `changePasswordAtNextLogin`<sup>Optional</sup> <a name="changePasswordAtNextLogin" id="@cdktf/provider-googleworkspace.user.UserConfig.property.changePasswordAtNextLogin"></a>

```typescript
public readonly changePasswordAtNextLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the user is forced to change their password at next login.

This setting doesn't apply when the user signs in via a third-party identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#change_password_at_next_login User#change_password_at_next_login}

---

##### `customSchemas`<sup>Optional</sup> <a name="customSchemas" id="@cdktf/provider-googleworkspace.user.UserConfig.property.customSchemas"></a>

```typescript
public readonly customSchemas: IResolvable | UserCustomSchemas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>[]

custom_schemas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_schemas User#custom_schemas}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-googleworkspace.user.UserConfig.property.emails"></a>

```typescript
public readonly emails: IResolvable | UserEmails[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>[]

emails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#emails User#emails}

---

##### `externalIds`<sup>Optional</sup> <a name="externalIds" id="@cdktf/provider-googleworkspace.user.UserConfig.property.externalIds"></a>

```typescript
public readonly externalIds: IResolvable | UserExternalIds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>[]

external_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#external_ids User#external_ids}

---

##### `hashFunction`<sup>Optional</sup> <a name="hashFunction" id="@cdktf/provider-googleworkspace.user.UserConfig.property.hashFunction"></a>

```typescript
public readonly hashFunction: string;
```

- *Type:* string

Stores the hash format of the password property.

We recommend sending the password property value as a base 16 bit hexadecimal-encoded hash value. Set the hashFunction values as either the SHA-1, MD5, or crypt hash format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#hash_function User#hash_function}

---

##### `ims`<sup>Optional</sup> <a name="ims" id="@cdktf/provider-googleworkspace.user.UserConfig.property.ims"></a>

```typescript
public readonly ims: IResolvable | UserIms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>[]

ims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ims User#ims}

---

##### `includeInGlobalAddressList`<sup>Optional</sup> <a name="includeInGlobalAddressList" id="@cdktf/provider-googleworkspace.user.UserConfig.property.includeInGlobalAddressList"></a>

```typescript
public readonly includeInGlobalAddressList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `true`.

Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#include_in_global_address_list User#include_in_global_address_list}

---

##### `ipAllowlist`<sup>Optional</sup> <a name="ipAllowlist" id="@cdktf/provider-googleworkspace.user.UserConfig.property.ipAllowlist"></a>

```typescript
public readonly ipAllowlist: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the user's IP address is added to the allow list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ip_allowlist User#ip_allowlist}

---

##### `isAdmin`<sup>Optional</sup> <a name="isAdmin" id="@cdktf/provider-googleworkspace.user.UserConfig.property.isAdmin"></a>

```typescript
public readonly isAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates a user with super admininistrator privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#is_admin User#is_admin}

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktf/provider-googleworkspace.user.UserConfig.property.keywords"></a>

```typescript
public readonly keywords: IResolvable | UserKeywords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>[]

keywords block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#keywords User#keywords}

---

##### `languages`<sup>Optional</sup> <a name="languages" id="@cdktf/provider-googleworkspace.user.UserConfig.property.languages"></a>

```typescript
public readonly languages: IResolvable | UserLanguages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>[]

languages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#languages User#languages}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-googleworkspace.user.UserConfig.property.locations"></a>

```typescript
public readonly locations: IResolvable | UserLocations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>[]

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#locations User#locations}

---

##### `organizations`<sup>Optional</sup> <a name="organizations" id="@cdktf/provider-googleworkspace.user.UserConfig.property.organizations"></a>

```typescript
public readonly organizations: IResolvable | UserOrganizations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>[]

organizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#organizations User#organizations}

---

##### `orgUnitPath`<sup>Optional</sup> <a name="orgUnitPath" id="@cdktf/provider-googleworkspace.user.UserConfig.property.orgUnitPath"></a>

```typescript
public readonly orgUnitPath: string;
```

- *Type:* string

The full path of the parent organization associated with the user.

If the parent organization is the top-level, it is represented as a forward slash (/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#org_unit_path User#org_unit_path}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-googleworkspace.user.UserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Stores the password for the user account.

A password can contain any combination of ASCII characters. A minimum of 8 characters is required. The maximum length is 100 characters. As the API does not return the value of password, this field is write-only, and the value stored in the state will be what is provided in the configuration. The field is required on create and will be empty on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#password User#password}

---

##### `phones`<sup>Optional</sup> <a name="phones" id="@cdktf/provider-googleworkspace.user.UserConfig.property.phones"></a>

```typescript
public readonly phones: IResolvable | UserPhones[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>[]

phones block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#phones User#phones}

---

##### `posixAccounts`<sup>Optional</sup> <a name="posixAccounts" id="@cdktf/provider-googleworkspace.user.UserConfig.property.posixAccounts"></a>

```typescript
public readonly posixAccounts: IResolvable | UserPosixAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>[]

posix_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#posix_accounts User#posix_accounts}

---

##### `recoveryEmail`<sup>Optional</sup> <a name="recoveryEmail" id="@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryEmail"></a>

```typescript
public readonly recoveryEmail: string;
```

- *Type:* string

Recovery email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#recovery_email User#recovery_email}

---

##### `recoveryPhone`<sup>Optional</sup> <a name="recoveryPhone" id="@cdktf/provider-googleworkspace.user.UserConfig.property.recoveryPhone"></a>

```typescript
public readonly recoveryPhone: string;
```

- *Type:* string

Recovery phone of the user.

The phone number must be in the E.164 format, starting with the plus sign (+). Example: +16506661212.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#recovery_phone User#recovery_phone}

---

##### `relations`<sup>Optional</sup> <a name="relations" id="@cdktf/provider-googleworkspace.user.UserConfig.property.relations"></a>

```typescript
public readonly relations: IResolvable | UserRelations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>[]

relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#relations User#relations}

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="sshPublicKeys" id="@cdktf/provider-googleworkspace.user.UserConfig.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: IResolvable | UserSshPublicKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>[]

ssh_public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#ssh_public_keys User#ssh_public_keys}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-googleworkspace.user.UserConfig.property.suspended"></a>

```typescript
public readonly suspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if user is suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#suspended User#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.user.UserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: UserTimeouts;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#timeouts User#timeouts}

---

##### `websites`<sup>Optional</sup> <a name="websites" id="@cdktf/provider-googleworkspace.user.UserConfig.property.websites"></a>

```typescript
public readonly websites: IResolvable | UserWebsites[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>[]

websites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#websites User#websites}

---

### UserCustomSchemas <a name="UserCustomSchemas" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userCustomSchemas: user.UserCustomSchemas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaName">schemaName</a></code> | <code>string</code> | The name of the schema. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaValues">schemaValues</a></code> | <code>{[ key: string ]: string}</code> | JSON encoded map that represents key/value pairs that correspond to the given schema. |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#schema_name User#schema_name}

---

##### `schemaValues`<sup>Required</sup> <a name="schemaValues" id="@cdktf/provider-googleworkspace.user.UserCustomSchemas.property.schemaValues"></a>

```typescript
public readonly schemaValues: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

JSON encoded map that represents key/value pairs that correspond to the given schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#schema_values User#schema_values}

---

### UserEmails <a name="UserEmails" id="@cdktf/provider-googleworkspace.user.UserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserEmails.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userEmails: user.UserEmails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.type">type</a></code> | <code>string</code> | The type of the email account. Acceptable values: `custom`, `home`, `other`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.address">address</a></code> | <code>string</code> | The user's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.customType">customType</a></code> | <code>string</code> | If the value of type is custom, this property contains the custom type string. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmails.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. Indicates if this is the user's primary email. Only one entry can be marked as primary. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserEmails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the email account. Acceptable values: `custom`, `home`, `other`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-googleworkspace.user.UserEmails.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The user's email address.

Also serves as the email ID. This value can be the user's primary email address or an alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#address User#address}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserEmails.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

If the value of type is custom, this property contains the custom type string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserEmails.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`. Indicates if this is the user's primary email. Only one entry can be marked as primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

### UserExternalIds <a name="UserExternalIds" id="@cdktf/provider-googleworkspace.user.UserExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserExternalIds.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userExternalIds: user.UserExternalIds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIds.property.type">type</a></code> | <code>string</code> | The type of external ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIds.property.value">value</a></code> | <code>string</code> | The value of the ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIds.property.customType">customType</a></code> | <code>string</code> | If the external ID type is custom, this property contains the custom value and must be set. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserExternalIds.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of external ID.

If set to custom, customType must also be set. Acceptable values: `account`, `custom`, `customer`, `login_id`, `network`, `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserExternalIds.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserExternalIds.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

If the external ID type is custom, this property contains the custom value and must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

### UserIms <a name="UserIms" id="@cdktf/provider-googleworkspace.user.UserIms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserIms.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userIms: user.UserIms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.protocol">protocol</a></code> | <code>string</code> | An IM protocol identifies the IM network. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.type">type</a></code> | <code>string</code> | Acceptable values: `custom`, `home`, `other`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.customProtocol">customProtocol</a></code> | <code>string</code> | If the protocol value is custom_protocol, this property holds the custom protocol's string. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.customType">customType</a></code> | <code>string</code> | If the IM type is custom, this property holds the custom type string. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.im">im</a></code> | <code>string</code> | The user's IM network ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserIms.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this is the user's primary IM. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-googleworkspace.user.UserIms.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

An IM protocol identifies the IM network.

The value can be a custom network or the standard network. Acceptable values: `aim`, `custom_protocol`, `gtalk`, `icq`, `jabber`, `msn`, `net_meeting`, `qq`, `skype`, `yahoo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#protocol User#protocol}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserIms.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Acceptable values: `custom`, `home`, `other`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `customProtocol`<sup>Optional</sup> <a name="customProtocol" id="@cdktf/provider-googleworkspace.user.UserIms.property.customProtocol"></a>

```typescript
public readonly customProtocol: string;
```

- *Type:* string

If the protocol value is custom_protocol, this property holds the custom protocol's string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_protocol User#custom_protocol}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserIms.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

If the IM type is custom, this property holds the custom type string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `im`<sup>Optional</sup> <a name="im" id="@cdktf/provider-googleworkspace.user.UserIms.property.im"></a>

```typescript
public readonly im: string;
```

- *Type:* string

The user's IM network ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#im User#im}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserIms.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this is the user's primary IM.

Only one entry in the IM list can have a value of true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

### UserKeywords <a name="UserKeywords" id="@cdktf/provider-googleworkspace.user.UserKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserKeywords.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userKeywords: user.UserKeywords = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywords.property.type">type</a></code> | <code>string</code> | Each entry can have a type which indicates standard type of that entry. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywords.property.value">value</a></code> | <code>string</code> | Keyword. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywords.property.customType">customType</a></code> | <code>string</code> | Custom Type. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserKeywords.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Each entry can have a type which indicates standard type of that entry.

For example, keyword could be of type occupation or outlook. In addition to the standard type, an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. Acceptable values: `custom`, `mission`, `occupation`, `outlook`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserKeywords.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Keyword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserKeywords.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

Custom Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

### UserLanguages <a name="UserLanguages" id="@cdktf/provider-googleworkspace.user.UserLanguages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserLanguages.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userLanguages: user.UserLanguages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguages.property.customLanguage">customLanguage</a></code> | <code>string</code> | Other language. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguages.property.languageCode">languageCode</a></code> | <code>string</code> | Defaults to `en`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguages.property.preference">preference</a></code> | <code>string</code> | Defaults to `preferred`. |

---

##### `customLanguage`<sup>Optional</sup> <a name="customLanguage" id="@cdktf/provider-googleworkspace.user.UserLanguages.property.customLanguage"></a>

```typescript
public readonly customLanguage: string;
```

- *Type:* string

Other language.

A user can provide their own language name if there is no corresponding Google III language code. If this is set, LanguageCode can't be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_language User#custom_language}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-googleworkspace.user.UserLanguages.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Defaults to `en`.

Language Code. Should be used for storing Google III LanguageCode string representation for language. Illegal values cause SchemaException.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#language_code User#language_code}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-googleworkspace.user.UserLanguages.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

Defaults to `preferred`.

If present, controls whether the specified languageCode is the user's preferred language. Allowed values are `preferred` and `not_preferred`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#preference User#preference}

---

### UserLocations <a name="UserLocations" id="@cdktf/provider-googleworkspace.user.UserLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserLocations.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userLocations: user.UserLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.type">type</a></code> | <code>string</code> | The location type. Acceptable values: `custom`, `default`, `desk`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.area">area</a></code> | <code>string</code> | Textual location. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.buildingId">buildingId</a></code> | <code>string</code> | Building identifier. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.customType">customType</a></code> | <code>string</code> | If the location type is custom, this property contains the custom value. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.deskCode">deskCode</a></code> | <code>string</code> | Most specific textual code of individual desk location. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.floorName">floorName</a></code> | <code>string</code> | Floor name/number. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocations.property.floorSection">floorSection</a></code> | <code>string</code> | Floor section. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserLocations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The location type. Acceptable values: `custom`, `default`, `desk`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `area`<sup>Optional</sup> <a name="area" id="@cdktf/provider-googleworkspace.user.UserLocations.property.area"></a>

```typescript
public readonly area: string;
```

- *Type:* string

Textual location.

This is most useful for display purposes to concisely describe the location. For example, Mountain View, CA or Near Seattle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#area User#area}

---

##### `buildingId`<sup>Optional</sup> <a name="buildingId" id="@cdktf/provider-googleworkspace.user.UserLocations.property.buildingId"></a>

```typescript
public readonly buildingId: string;
```

- *Type:* string

Building identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#building_id User#building_id}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserLocations.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

If the location type is custom, this property contains the custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `deskCode`<sup>Optional</sup> <a name="deskCode" id="@cdktf/provider-googleworkspace.user.UserLocations.property.deskCode"></a>

```typescript
public readonly deskCode: string;
```

- *Type:* string

Most specific textual code of individual desk location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#desk_code User#desk_code}

---

##### `floorName`<sup>Optional</sup> <a name="floorName" id="@cdktf/provider-googleworkspace.user.UserLocations.property.floorName"></a>

```typescript
public readonly floorName: string;
```

- *Type:* string

Floor name/number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#floor_name User#floor_name}

---

##### `floorSection`<sup>Optional</sup> <a name="floorSection" id="@cdktf/provider-googleworkspace.user.UserLocations.property.floorSection"></a>

```typescript
public readonly floorSection: string;
```

- *Type:* string

Floor section.

More specific location within the floor. For example, if a floor is divided into sections A, B, and C, this field would identify one of those values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#floor_section User#floor_section}

---

### UserName <a name="UserName" id="@cdktf/provider-googleworkspace.user.UserName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserName.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userName: user.UserName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserName.property.familyName">familyName</a></code> | <code>string</code> | The user's last name. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserName.property.givenName">givenName</a></code> | <code>string</code> | The user's first name. |

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-googleworkspace.user.UserName.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

The user's last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#family_name User#family_name}

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktf/provider-googleworkspace.user.UserName.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

The user's first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#given_name User#given_name}

---

### UserOrganizations <a name="UserOrganizations" id="@cdktf/provider-googleworkspace.user.UserOrganizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserOrganizations.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userOrganizations: user.UserOrganizations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.type">type</a></code> | <code>string</code> | The type of organization. Acceptable values: `domain_only`, `school`, `unknown`, `work`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.costCenter">costCenter</a></code> | <code>string</code> | The cost center of the user's organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.customType">customType</a></code> | <code>string</code> | If the value of type is custom, this property contains the custom value. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.department">department</a></code> | <code>string</code> | Specifies the department within the organization, such as sales or engineering. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.description">description</a></code> | <code>string</code> | The description of the organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.domain">domain</a></code> | <code>string</code> | The domain the organization belongs to. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.fullTimeEquivalent">fullTimeEquivalent</a></code> | <code>number</code> | The full-time equivalent millipercent within the organization (100000 = 100%). |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.location">location</a></code> | <code>string</code> | The physical location of the organization. This does not need to be a fully qualified address. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.name">name</a></code> | <code>string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if this is the user's primary organization. A user may only have one primary organization. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.symbol">symbol</a></code> | <code>string</code> | Text string symbol of the organization. For example, the text symbol for Google is GOOG. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizations.property.title">title</a></code> | <code>string</code> | The user's title within the organization. For example, member or engineer. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of organization. Acceptable values: `domain_only`, `school`, `unknown`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `costCenter`<sup>Optional</sup> <a name="costCenter" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.costCenter"></a>

```typescript
public readonly costCenter: string;
```

- *Type:* string

The cost center of the user's organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#cost_center User#cost_center}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

If the value of type is custom, this property contains the custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

Specifies the department within the organization, such as sales or engineering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#department User#department}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#description User#description}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The domain the organization belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#domain User#domain}

---

##### `fullTimeEquivalent`<sup>Optional</sup> <a name="fullTimeEquivalent" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.fullTimeEquivalent"></a>

```typescript
public readonly fullTimeEquivalent: number;
```

- *Type:* number

The full-time equivalent millipercent within the organization (100000 = 100%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#full_time_equivalent User#full_time_equivalent}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The physical location of the organization. This does not need to be a fully qualified address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#location User#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#name User#name}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if this is the user's primary organization. A user may only have one primary organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

##### `symbol`<sup>Optional</sup> <a name="symbol" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.symbol"></a>

```typescript
public readonly symbol: string;
```

- *Type:* string

Text string symbol of the organization. For example, the text symbol for Google is GOOG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#symbol User#symbol}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-googleworkspace.user.UserOrganizations.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The user's title within the organization. For example, member or engineer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#title User#title}

---

### UserPhones <a name="UserPhones" id="@cdktf/provider-googleworkspace.user.UserPhones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserPhones.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userPhones: user.UserPhones = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.type">type</a></code> | <code>string</code> | The type of phone number. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.value">value</a></code> | <code>string</code> | A human-readable phone number. It may be in any telephone number format. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.customType">customType</a></code> | <code>string</code> | If the phone number type is custom, this property contains the custom value and must be set. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhones.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if this is the user's primary phone number. A user may only have one primary phone number. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserPhones.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of phone number.

Acceptable values: `assistant`, `callback`, `car`, `company_main` , `custom`, `grand_central`, `home`, `home_fax`, `isdn`, `main`, `mobile`, `other`, `other_fax`, `pager`, `radio`, `telex`, `tty_tdd`, `work`, `work_fax`, `work_mobile`, `work_pager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserPhones.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A human-readable phone number. It may be in any telephone number format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserPhones.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

If the phone number type is custom, this property contains the custom value and must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserPhones.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if this is the user's primary phone number. A user may only have one primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

### UserPosixAccounts <a name="UserPosixAccounts" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userPosixAccounts: user.UserPosixAccounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.accountId">accountId</a></code> | <code>string</code> | A POSIX account field identifier. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gecos">gecos</a></code> | <code>string</code> | The GECOS (user information) for this account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gid">gid</a></code> | <code>string</code> | The default group ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.homeDirectory">homeDirectory</a></code> | <code>string</code> | The path to the home directory for this account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.operatingSystemType">operatingSystemType</a></code> | <code>string</code> | The operating system type for this account. Acceptable values: `linux`, `unspecified`, `windows`. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this is user's primary account within the SystemId. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.shell">shell</a></code> | <code>string</code> | The path to the login shell for this account. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.systemId">systemId</a></code> | <code>string</code> | System identifier for which account Username or Uid apply to. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.uid">uid</a></code> | <code>string</code> | The POSIX compliant user ID. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.username">username</a></code> | <code>string</code> | The username of the account. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

A POSIX account field identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#account_id User#account_id}

---

##### `gecos`<sup>Optional</sup> <a name="gecos" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gecos"></a>

```typescript
public readonly gecos: string;
```

- *Type:* string

The GECOS (user information) for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#gecos User#gecos}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

The default group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#gid User#gid}

---

##### `homeDirectory`<sup>Optional</sup> <a name="homeDirectory" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.homeDirectory"></a>

```typescript
public readonly homeDirectory: string;
```

- *Type:* string

The path to the home directory for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#home_directory User#home_directory}

---

##### `operatingSystemType`<sup>Optional</sup> <a name="operatingSystemType" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.operatingSystemType"></a>

```typescript
public readonly operatingSystemType: string;
```

- *Type:* string

The operating system type for this account. Acceptable values: `linux`, `unspecified`, `windows`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#operating_system_type User#operating_system_type}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this is user's primary account within the SystemId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

##### `shell`<sup>Optional</sup> <a name="shell" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

The path to the login shell for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#shell User#shell}

---

##### `systemId`<sup>Optional</sup> <a name="systemId" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.systemId"></a>

```typescript
public readonly systemId: string;
```

- *Type:* string

System identifier for which account Username or Uid apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#system_id User#system_id}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

The POSIX compliant user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#uid User#uid}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-googleworkspace.user.UserPosixAccounts.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#username User#username}

---

### UserRelations <a name="UserRelations" id="@cdktf/provider-googleworkspace.user.UserRelations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserRelations.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userRelations: user.UserRelations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelations.property.type">type</a></code> | <code>string</code> | The type of relation. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelations.property.value">value</a></code> | <code>string</code> | The name of the person the user is related to. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelations.property.customType">customType</a></code> | <code>string</code> | If the value of type is custom, this property contains the custom type string. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserRelations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of relation.

Acceptable values: `admin_assistant`, `assistant`, `brother`, `child`, `custom`, `domestic_partner`, `dotted_line_manager`, `exec_assistant`, `father`, `friend`, `manager`, `mother`, `parent`, `partner`, `referred_by`, `relative`, `sister`, `spouse`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserRelations.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The name of the person the user is related to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserRelations.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

If the value of type is custom, this property contains the custom type string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

### UserSshPublicKeys <a name="UserSshPublicKeys" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userSshPublicKeys: user.UserSshPublicKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.key">key</a></code> | <code>string</code> | An SSH public key. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.expirationTimeUsec">expirationTimeUsec</a></code> | <code>string</code> | An expiration time in microseconds since epoch. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

An SSH public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#key User#key}

---

##### `expirationTimeUsec`<sup>Optional</sup> <a name="expirationTimeUsec" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeys.property.expirationTimeUsec"></a>

```typescript
public readonly expirationTimeUsec: string;
```

- *Type:* string

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#expiration_time_usec User#expiration_time_usec}

---

### UserTimeouts <a name="UserTimeouts" id="@cdktf/provider-googleworkspace.user.UserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserTimeouts.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userTimeouts: user.UserTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#create User#create}. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#update User#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-googleworkspace.user.UserTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#create User#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-googleworkspace.user.UserTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#update User#update}.

---

### UserWebsites <a name="UserWebsites" id="@cdktf/provider-googleworkspace.user.UserWebsites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.user.UserWebsites.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

const userWebsites: user.UserWebsites = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.type">type</a></code> | <code>string</code> | The type or purpose of the website. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.value">value</a></code> | <code>string</code> | The URL of the website. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.customType">customType</a></code> | <code>string</code> | The custom type. Only used if the type is custom. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsites.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this is user's primary website or not. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type or purpose of the website.

For example, a website could be labeled as home or blog. Alternatively, an entry can have a custom type Custom types must have a customType value. Acceptable values: `app_install_page`, `blog`, `custom`, `ftp` , `home`, `home_page`, `other`, `profile`, `reservations`, `resume`, `work`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#type User#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The URL of the website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#value User#value}

---

##### `customType`<sup>Optional</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

The custom type. Only used if the type is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#custom_type User#custom_type}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserWebsites.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this is user's primary website or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/user#primary User#primary}

---

## Classes <a name="Classes" id="Classes"></a>

### UserAddressesList <a name="UserAddressesList" id="@cdktf/provider-googleworkspace.user.UserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserAddressesList.get"></a>

```typescript
public get(index: number): UserAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserAddressesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserAddresses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>[]

---


### UserAddressesOutputReference <a name="UserAddressesOutputReference" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetCustomType"></a>

```typescript
public resetCustomType(): void
```

##### `resetExtendedAddress` <a name="resetExtendedAddress" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetExtendedAddress"></a>

```typescript
public resetExtendedAddress(): void
```

##### `resetFormatted` <a name="resetFormatted" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetFormatted"></a>

```typescript
public resetFormatted(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetPoBox` <a name="resetPoBox" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPoBox"></a>

```typescript
public resetPoBox(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSourceIsStructured` <a name="resetSourceIsStructured" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetSourceIsStructured"></a>

```typescript
public resetSourceIsStructured(): void
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.resetStreetAddress"></a>

```typescript
public resetStreetAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddressInput">extendedAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formattedInput">formattedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBoxInput">poBoxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructuredInput">sourceIsStructuredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddressInput">streetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customType">customType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddress">extendedAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formatted">formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBox">poBox</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructured">sourceIsStructured</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customTypeInput"></a>

```typescript
public readonly customTypeInput: string;
```

- *Type:* string

---

##### `extendedAddressInput`<sup>Optional</sup> <a name="extendedAddressInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddressInput"></a>

```typescript
public readonly extendedAddressInput: string;
```

- *Type:* string

---

##### `formattedInput`<sup>Optional</sup> <a name="formattedInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formattedInput"></a>

```typescript
public readonly formattedInput: string;
```

- *Type:* string

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `poBoxInput`<sup>Optional</sup> <a name="poBoxInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBoxInput"></a>

```typescript
public readonly poBoxInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sourceIsStructuredInput`<sup>Optional</sup> <a name="sourceIsStructuredInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructuredInput"></a>

```typescript
public readonly sourceIsStructuredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

---

##### `extendedAddress`<sup>Required</sup> <a name="extendedAddress" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.extendedAddress"></a>

```typescript
public readonly extendedAddress: string;
```

- *Type:* string

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `poBox`<sup>Required</sup> <a name="poBox" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.poBox"></a>

```typescript
public readonly poBox: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sourceIsStructured`<sup>Required</sup> <a name="sourceIsStructured" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.sourceIsStructured"></a>

```typescript
public readonly sourceIsStructured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserAddresses;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserAddresses">UserAddresses</a>

---


### UserCustomSchemasList <a name="UserCustomSchemasList" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserCustomSchemasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.get"></a>

```typescript
public get(index: number): UserCustomSchemasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserCustomSchemas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>[]

---


### UserCustomSchemasOutputReference <a name="UserCustomSchemasOutputReference" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserCustomSchemasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValuesInput">schemaValuesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValues">schemaValues</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `schemaValuesInput`<sup>Optional</sup> <a name="schemaValuesInput" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValuesInput"></a>

```typescript
public readonly schemaValuesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `schemaValues`<sup>Required</sup> <a name="schemaValues" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.schemaValues"></a>

```typescript
public readonly schemaValues: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserCustomSchemasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserCustomSchemas;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserCustomSchemas">UserCustomSchemas</a>

---


### UserEmailsList <a name="UserEmailsList" id="@cdktf/provider-googleworkspace.user.UserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserEmailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserEmailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserEmailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserEmailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserEmailsList.get"></a>

```typescript
public get(index: number): UserEmailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserEmailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserEmailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserEmailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserEmailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserEmails[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>[]

---


### UserEmailsOutputReference <a name="UserEmailsOutputReference" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserEmailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetCustomType"></a>

```typescript
public resetCustomType(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customType">customType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customTypeInput"></a>

```typescript
public readonly customTypeInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserEmailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserEmails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserEmails">UserEmails</a>

---


### UserExternalIdsList <a name="UserExternalIdsList" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserExternalIdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.get"></a>

```typescript
public get(index: number): UserExternalIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserExternalIdsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserExternalIds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>[]

---


### UserExternalIdsOutputReference <a name="UserExternalIdsOutputReference" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserExternalIdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.resetCustomType"></a>

```typescript
public resetCustomType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customType">customType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customTypeInput"></a>

```typescript
public readonly customTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserExternalIdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserExternalIds;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserExternalIds">UserExternalIds</a>

---


### UserImsList <a name="UserImsList" id="@cdktf/provider-googleworkspace.user.UserImsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserImsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserImsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserImsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserImsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserImsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserImsList.get"></a>

```typescript
public get(index: number): UserImsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserImsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserImsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserImsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserImsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserIms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>[]

---


### UserImsOutputReference <a name="UserImsOutputReference" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserImsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomProtocol` <a name="resetCustomProtocol" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomProtocol"></a>

```typescript
public resetCustomProtocol(): void
```

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetCustomType"></a>

```typescript
public resetCustomType(): void
```

##### `resetIm` <a name="resetIm" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetIm"></a>

```typescript
public resetIm(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocolInput">customProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.imInput">imInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocol">customProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customType">customType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.im">im</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customProtocolInput`<sup>Optional</sup> <a name="customProtocolInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocolInput"></a>

```typescript
public readonly customProtocolInput: string;
```

- *Type:* string

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customTypeInput"></a>

```typescript
public readonly customTypeInput: string;
```

- *Type:* string

---

##### `imInput`<sup>Optional</sup> <a name="imInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.imInput"></a>

```typescript
public readonly imInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `customProtocol`<sup>Required</sup> <a name="customProtocol" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customProtocol"></a>

```typescript
public readonly customProtocol: string;
```

- *Type:* string

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

---

##### `im`<sup>Required</sup> <a name="im" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.im"></a>

```typescript
public readonly im: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserImsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserIms;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserIms">UserIms</a>

---


### UserKeywordsList <a name="UserKeywordsList" id="@cdktf/provider-googleworkspace.user.UserKeywordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserKeywordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.get"></a>

```typescript
public get(index: number): UserKeywordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserKeywordsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserKeywords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>[]

---


### UserKeywordsOutputReference <a name="UserKeywordsOutputReference" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserKeywordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.resetCustomType"></a>

```typescript
public resetCustomType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customType">customType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customTypeInput"></a>

```typescript
public readonly customTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserKeywordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserKeywords;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserKeywords">UserKeywords</a>

---


### UserLanguagesList <a name="UserLanguagesList" id="@cdktf/provider-googleworkspace.user.UserLanguagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserLanguagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.get"></a>

```typescript
public get(index: number): UserLanguagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserLanguagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserLanguages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>[]

---


### UserLanguagesOutputReference <a name="UserLanguagesOutputReference" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserLanguagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomLanguage` <a name="resetCustomLanguage" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetCustomLanguage"></a>

```typescript
public resetCustomLanguage(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetPreference` <a name="resetPreference" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.resetPreference"></a>

```typescript
public resetPreference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguageInput">customLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguage">customLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customLanguageInput`<sup>Optional</sup> <a name="customLanguageInput" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguageInput"></a>

```typescript
public readonly customLanguageInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preferenceInput"></a>

```typescript
public readonly preferenceInput: string;
```

- *Type:* string

---

##### `customLanguage`<sup>Required</sup> <a name="customLanguage" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.customLanguage"></a>

```typescript
public readonly customLanguage: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserLanguagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserLanguages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserLanguages">UserLanguages</a>

---


### UserLocationsList <a name="UserLocationsList" id="@cdktf/provider-googleworkspace.user.UserLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserLocationsList.get"></a>

```typescript
public get(index: number): UserLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserLocationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserLocations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>[]

---


### UserLocationsOutputReference <a name="UserLocationsOutputReference" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArea` <a name="resetArea" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetArea"></a>

```typescript
public resetArea(): void
```

##### `resetBuildingId` <a name="resetBuildingId" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetBuildingId"></a>

```typescript
public resetBuildingId(): void
```

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetCustomType"></a>

```typescript
public resetCustomType(): void
```

##### `resetDeskCode` <a name="resetDeskCode" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetDeskCode"></a>

```typescript
public resetDeskCode(): void
```

##### `resetFloorName` <a name="resetFloorName" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorName"></a>

```typescript
public resetFloorName(): void
```

##### `resetFloorSection` <a name="resetFloorSection" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.resetFloorSection"></a>

```typescript
public resetFloorSection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.areaInput">areaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingIdInput">buildingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCodeInput">deskCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorNameInput">floorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSectionInput">floorSectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.area">area</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingId">buildingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customType">customType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCode">deskCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorName">floorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSection">floorSection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `areaInput`<sup>Optional</sup> <a name="areaInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.areaInput"></a>

```typescript
public readonly areaInput: string;
```

- *Type:* string

---

##### `buildingIdInput`<sup>Optional</sup> <a name="buildingIdInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingIdInput"></a>

```typescript
public readonly buildingIdInput: string;
```

- *Type:* string

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customTypeInput"></a>

```typescript
public readonly customTypeInput: string;
```

- *Type:* string

---

##### `deskCodeInput`<sup>Optional</sup> <a name="deskCodeInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCodeInput"></a>

```typescript
public readonly deskCodeInput: string;
```

- *Type:* string

---

##### `floorNameInput`<sup>Optional</sup> <a name="floorNameInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorNameInput"></a>

```typescript
public readonly floorNameInput: string;
```

- *Type:* string

---

##### `floorSectionInput`<sup>Optional</sup> <a name="floorSectionInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSectionInput"></a>

```typescript
public readonly floorSectionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `area`<sup>Required</sup> <a name="area" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.area"></a>

```typescript
public readonly area: string;
```

- *Type:* string

---

##### `buildingId`<sup>Required</sup> <a name="buildingId" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.buildingId"></a>

```typescript
public readonly buildingId: string;
```

- *Type:* string

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

---

##### `deskCode`<sup>Required</sup> <a name="deskCode" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.deskCode"></a>

```typescript
public readonly deskCode: string;
```

- *Type:* string

---

##### `floorName`<sup>Required</sup> <a name="floorName" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorName"></a>

```typescript
public readonly floorName: string;
```

- *Type:* string

---

##### `floorSection`<sup>Required</sup> <a name="floorSection" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.floorSection"></a>

```typescript
public readonly floorSection: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserLocations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserLocations">UserLocations</a>

---


### UserNameOutputReference <a name="UserNameOutputReference" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGivenName` <a name="resetGivenName" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.resetGivenName"></a>

```typescript
public resetGivenName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyNameInput">familyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyName">familyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `familyNameInput`<sup>Optional</sup> <a name="familyNameInput" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyNameInput"></a>

```typescript
public readonly familyNameInput: string;
```

- *Type:* string

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenNameInput"></a>

```typescript
public readonly givenNameInput: string;
```

- *Type:* string

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: UserName;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.user.UserName">UserName</a>

---


### UserOrganizationsList <a name="UserOrganizationsList" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserOrganizationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.get"></a>

```typescript
public get(index: number): UserOrganizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserOrganizationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserOrganizations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>[]

---


### UserOrganizationsOutputReference <a name="UserOrganizationsOutputReference" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserOrganizationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCostCenter` <a name="resetCostCenter" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCostCenter"></a>

```typescript
public resetCostCenter(): void
```

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetCustomType"></a>

```typescript
public resetCustomType(): void
```

##### `resetDepartment` <a name="resetDepartment" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDepartment"></a>

```typescript
public resetDepartment(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetFullTimeEquivalent` <a name="resetFullTimeEquivalent" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetFullTimeEquivalent"></a>

```typescript
public resetFullTimeEquivalent(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetSymbol` <a name="resetSymbol" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetSymbol"></a>

```typescript
public resetSymbol(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenterInput">costCenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.departmentInput">departmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalentInput">fullTimeEquivalentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbolInput">symbolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenter">costCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customType">customType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.department">department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalent">fullTimeEquivalent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbol">symbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `costCenterInput`<sup>Optional</sup> <a name="costCenterInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenterInput"></a>

```typescript
public readonly costCenterInput: string;
```

- *Type:* string

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customTypeInput"></a>

```typescript
public readonly customTypeInput: string;
```

- *Type:* string

---

##### `departmentInput`<sup>Optional</sup> <a name="departmentInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.departmentInput"></a>

```typescript
public readonly departmentInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `fullTimeEquivalentInput`<sup>Optional</sup> <a name="fullTimeEquivalentInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalentInput"></a>

```typescript
public readonly fullTimeEquivalentInput: number;
```

- *Type:* number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `symbolInput`<sup>Optional</sup> <a name="symbolInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbolInput"></a>

```typescript
public readonly symbolInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `costCenter`<sup>Required</sup> <a name="costCenter" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.costCenter"></a>

```typescript
public readonly costCenter: string;
```

- *Type:* string

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `fullTimeEquivalent`<sup>Required</sup> <a name="fullTimeEquivalent" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.fullTimeEquivalent"></a>

```typescript
public readonly fullTimeEquivalent: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `symbol`<sup>Required</sup> <a name="symbol" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.symbol"></a>

```typescript
public readonly symbol: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserOrganizationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserOrganizations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserOrganizations">UserOrganizations</a>

---


### UserPhonesList <a name="UserPhonesList" id="@cdktf/provider-googleworkspace.user.UserPhonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserPhonesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserPhonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserPhonesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserPhonesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserPhonesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserPhonesList.get"></a>

```typescript
public get(index: number): UserPhonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserPhonesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserPhonesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserPhonesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserPhonesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserPhones[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>[]

---


### UserPhonesOutputReference <a name="UserPhonesOutputReference" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserPhonesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetCustomType"></a>

```typescript
public resetCustomType(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customType">customType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customTypeInput"></a>

```typescript
public readonly customTypeInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserPhonesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserPhones;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserPhones">UserPhones</a>

---


### UserPosixAccountsList <a name="UserPosixAccountsList" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserPosixAccountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.get"></a>

```typescript
public get(index: number): UserPosixAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserPosixAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>[]

---


### UserPosixAccountsOutputReference <a name="UserPosixAccountsOutputReference" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserPosixAccountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetGecos` <a name="resetGecos" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGecos"></a>

```typescript
public resetGecos(): void
```

##### `resetGid` <a name="resetGid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetGid"></a>

```typescript
public resetGid(): void
```

##### `resetHomeDirectory` <a name="resetHomeDirectory" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetHomeDirectory"></a>

```typescript
public resetHomeDirectory(): void
```

##### `resetOperatingSystemType` <a name="resetOperatingSystemType" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetOperatingSystemType"></a>

```typescript
public resetOperatingSystemType(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetShell` <a name="resetShell" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetShell"></a>

```typescript
public resetShell(): void
```

##### `resetSystemId` <a name="resetSystemId" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetSystemId"></a>

```typescript
public resetSystemId(): void
```

##### `resetUid` <a name="resetUid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUid"></a>

```typescript
public resetUid(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecosInput">gecosInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gidInput">gidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectoryInput">homeDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemTypeInput">operatingSystemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shellInput">shellInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemIdInput">systemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uidInput">uidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecos">gecos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gid">gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectory">homeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemType">operatingSystemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shell">shell</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemId">systemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `gecosInput`<sup>Optional</sup> <a name="gecosInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecosInput"></a>

```typescript
public readonly gecosInput: string;
```

- *Type:* string

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gidInput"></a>

```typescript
public readonly gidInput: string;
```

- *Type:* string

---

##### `homeDirectoryInput`<sup>Optional</sup> <a name="homeDirectoryInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectoryInput"></a>

```typescript
public readonly homeDirectoryInput: string;
```

- *Type:* string

---

##### `operatingSystemTypeInput`<sup>Optional</sup> <a name="operatingSystemTypeInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemTypeInput"></a>

```typescript
public readonly operatingSystemTypeInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shellInput`<sup>Optional</sup> <a name="shellInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shellInput"></a>

```typescript
public readonly shellInput: string;
```

- *Type:* string

---

##### `systemIdInput`<sup>Optional</sup> <a name="systemIdInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemIdInput"></a>

```typescript
public readonly systemIdInput: string;
```

- *Type:* string

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `gecos`<sup>Required</sup> <a name="gecos" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gecos"></a>

```typescript
public readonly gecos: string;
```

- *Type:* string

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

---

##### `homeDirectory`<sup>Required</sup> <a name="homeDirectory" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.homeDirectory"></a>

```typescript
public readonly homeDirectory: string;
```

- *Type:* string

---

##### `operatingSystemType`<sup>Required</sup> <a name="operatingSystemType" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.operatingSystemType"></a>

```typescript
public readonly operatingSystemType: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

---

##### `systemId`<sup>Required</sup> <a name="systemId" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.systemId"></a>

```typescript
public readonly systemId: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserPosixAccountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserPosixAccounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserPosixAccounts">UserPosixAccounts</a>

---


### UserRelationsList <a name="UserRelationsList" id="@cdktf/provider-googleworkspace.user.UserRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserRelationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserRelationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserRelationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserRelationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserRelationsList.get"></a>

```typescript
public get(index: number): UserRelationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserRelationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserRelationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserRelationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserRelationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserRelations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>[]

---


### UserRelationsOutputReference <a name="UserRelationsOutputReference" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserRelationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.resetCustomType"></a>

```typescript
public resetCustomType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customType">customType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customTypeInput"></a>

```typescript
public readonly customTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserRelationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserRelations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserRelations">UserRelations</a>

---


### UserSshPublicKeysList <a name="UserSshPublicKeysList" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserSshPublicKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.get"></a>

```typescript
public get(index: number): UserSshPublicKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserSshPublicKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>[]

---


### UserSshPublicKeysOutputReference <a name="UserSshPublicKeysOutputReference" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserSshPublicKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationTimeUsec` <a name="resetExpirationTimeUsec" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.resetExpirationTimeUsec"></a>

```typescript
public resetExpirationTimeUsec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsecInput">expirationTimeUsecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsec">expirationTimeUsec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `expirationTimeUsecInput`<sup>Optional</sup> <a name="expirationTimeUsecInput" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsecInput"></a>

```typescript
public readonly expirationTimeUsecInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `expirationTimeUsec`<sup>Required</sup> <a name="expirationTimeUsec" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.expirationTimeUsec"></a>

```typescript
public readonly expirationTimeUsec: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserSshPublicKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserSshPublicKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserSshPublicKeys">UserSshPublicKeys</a>

---


### UserTimeoutsOutputReference <a name="UserTimeoutsOutputReference" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserTimeouts">UserTimeouts</a>

---


### UserWebsitesList <a name="UserWebsitesList" id="@cdktf/provider-googleworkspace.user.UserWebsitesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserWebsitesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.get"></a>

```typescript
public get(index: number): UserWebsitesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserWebsitesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserWebsites[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>[]

---


### UserWebsitesOutputReference <a name="UserWebsitesOutputReference" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-googleworkspace'

new user.UserWebsitesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomType` <a name="resetCustomType" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetCustomType"></a>

```typescript
public resetCustomType(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customTypeInput">customTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customType">customType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customTypeInput`<sup>Optional</sup> <a name="customTypeInput" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customTypeInput"></a>

```typescript
public readonly customTypeInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `customType`<sup>Required</sup> <a name="customType" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.customType"></a>

```typescript
public readonly customType: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.user.UserWebsitesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserWebsites;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.user.UserWebsites">UserWebsites</a>

---



