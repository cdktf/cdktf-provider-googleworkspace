# `gmailSendAsAlias` Submodule <a name="`gmailSendAsAlias` Submodule" id="@cdktf/provider-googleworkspace.gmailSendAsAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GmailSendAsAlias <a name="GmailSendAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias"></a>

Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias googleworkspace_gmail_send_as_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer"></a>

```typescript
import { gmailSendAsAlias } from '@cdktf/provider-googleworkspace'

new gmailSendAsAlias.GmailSendAsAlias(scope: Construct, id: string, config: GmailSendAsAliasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig">GmailSendAsAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig">GmailSendAsAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa">putSmtpMsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetReplyToAddress">resetReplyToAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSignature">resetSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSmtpMsa">resetSmtpMsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetTreatAsAlias">resetTreatAsAlias</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSmtpMsa` <a name="putSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa"></a>

```typescript
public putSmtpMsa(value: GmailSendAsAliasSmtpMsa): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetIsDefault"></a>

```typescript
public resetIsDefault(): void
```

##### `resetReplyToAddress` <a name="resetReplyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetReplyToAddress"></a>

```typescript
public resetReplyToAddress(): void
```

##### `resetSignature` <a name="resetSignature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSignature"></a>

```typescript
public resetSignature(): void
```

##### `resetSmtpMsa` <a name="resetSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSmtpMsa"></a>

```typescript
public resetSmtpMsa(): void
```

##### `resetTreatAsAlias` <a name="resetTreatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetTreatAsAlias"></a>

```typescript
public resetTreatAsAlias(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct"></a>

```typescript
import { gmailSendAsAlias } from '@cdktf/provider-googleworkspace'

gmailSendAsAlias.GmailSendAsAlias.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement"></a>

```typescript
import { gmailSendAsAlias } from '@cdktf/provider-googleworkspace'

gmailSendAsAlias.GmailSendAsAlias.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource"></a>

```typescript
import { gmailSendAsAlias } from '@cdktf/provider-googleworkspace'

gmailSendAsAlias.GmailSendAsAlias.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isPrimary">isPrimary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsa">smtpMsa</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference">GmailSendAsAliasSmtpMsaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.verificationStatus">verificationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmailInput">primaryEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddressInput">replyToAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmailInput">sendAsEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signatureInput">signatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsaInput">smtpMsaInput</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAliasInput">treatAsAliasInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmail">primaryEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddress">replyToAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmail">sendAsEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAlias">treatAsAlias</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isPrimary"></a>

```typescript
public readonly isPrimary: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `smtpMsa`<sup>Required</sup> <a name="smtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsa"></a>

```typescript
public readonly smtpMsa: GmailSendAsAliasSmtpMsaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference">GmailSendAsAliasSmtpMsaOutputReference</a>

---

##### `verificationStatus`<sup>Required</sup> <a name="verificationStatus" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.verificationStatus"></a>

```typescript
public readonly verificationStatus: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `primaryEmailInput`<sup>Optional</sup> <a name="primaryEmailInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmailInput"></a>

```typescript
public readonly primaryEmailInput: string;
```

- *Type:* string

---

##### `replyToAddressInput`<sup>Optional</sup> <a name="replyToAddressInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddressInput"></a>

```typescript
public readonly replyToAddressInput: string;
```

- *Type:* string

---

##### `sendAsEmailInput`<sup>Optional</sup> <a name="sendAsEmailInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmailInput"></a>

```typescript
public readonly sendAsEmailInput: string;
```

- *Type:* string

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signatureInput"></a>

```typescript
public readonly signatureInput: string;
```

- *Type:* string

---

##### `smtpMsaInput`<sup>Optional</sup> <a name="smtpMsaInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsaInput"></a>

```typescript
public readonly smtpMsaInput: GmailSendAsAliasSmtpMsa;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---

##### `treatAsAliasInput`<sup>Optional</sup> <a name="treatAsAliasInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAliasInput"></a>

```typescript
public readonly treatAsAliasInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `primaryEmail`<sup>Required</sup> <a name="primaryEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmail"></a>

```typescript
public readonly primaryEmail: string;
```

- *Type:* string

---

##### `replyToAddress`<sup>Required</sup> <a name="replyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddress"></a>

```typescript
public readonly replyToAddress: string;
```

- *Type:* string

---

##### `sendAsEmail`<sup>Required</sup> <a name="sendAsEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmail"></a>

```typescript
public readonly sendAsEmail: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `treatAsAlias`<sup>Required</sup> <a name="treatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAlias"></a>

```typescript
public readonly treatAsAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GmailSendAsAliasConfig <a name="GmailSendAsAliasConfig" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.Initializer"></a>

```typescript
import { gmailSendAsAlias } from '@cdktf/provider-googleworkspace'

const gmailSendAsAliasConfig: gmailSendAsAlias.GmailSendAsAliasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.primaryEmail">primaryEmail</a></code> | <code>string</code> | User's primary email address. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.sendAsEmail">sendAsEmail</a></code> | <code>string</code> | The email address that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.displayName">displayName</a></code> | <code>string</code> | A name that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.replyToAddress">replyToAddress</a></code> | <code>string</code> | An optional email address that is included in a 'Reply-To:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.signature">signature</a></code> | <code>string</code> | An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.smtpMsa">smtpMsa</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | smtp_msa block. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.treatAsAlias">treatAsAlias</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `primaryEmail`<sup>Required</sup> <a name="primaryEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.primaryEmail"></a>

```typescript
public readonly primaryEmail: string;
```

- *Type:* string

User's primary email address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#primary_email GmailSendAsAlias#primary_email}

---

##### `sendAsEmail`<sup>Required</sup> <a name="sendAsEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.sendAsEmail"></a>

```typescript
public readonly sendAsEmail: string;
```

- *Type:* string

The email address that appears in the 'From:' header for mail sent using this alias.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#send_as_email GmailSendAsAlias#send_as_email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A name that appears in the 'From:' header for mail sent using this alias.

For custom 'from' addresses, when this is empty, Gmail will populate the 'From:' header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#display_name GmailSendAsAlias#display_name}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply.

Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false to true for an address will result in this field becoming false for the other previous default address. Toggling an existing alias' default to false is not possible, another alias must be added/imported and toggled to true to remove the default from an existing alias. To avoid drift with Terraform, please change the previous default's config to false AFTER a new default is applied and perform a refresh to synchronize with remote state.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#is_default GmailSendAsAlias#is_default}

---

##### `replyToAddress`<sup>Optional</sup> <a name="replyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.replyToAddress"></a>

```typescript
public readonly replyToAddress: string;
```

- *Type:* string

An optional email address that is included in a 'Reply-To:' header for mail sent using this alias.

If this is empty, Gmail will not generate a 'Reply-To:' header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#reply_to_address GmailSendAsAlias#reply_to_address}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.

This signature is added to new emails only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#signature GmailSendAsAlias#signature}

---

##### `smtpMsa`<sup>Optional</sup> <a name="smtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.smtpMsa"></a>

```typescript
public readonly smtpMsa: GmailSendAsAliasSmtpMsa;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

smtp_msa block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#smtp_msa GmailSendAsAlias#smtp_msa}

---

##### `treatAsAlias`<sup>Optional</sup> <a name="treatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.treatAsAlias"></a>

```typescript
public readonly treatAsAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `true`.

Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom 'from' aliases. See https://support.google.com/a/answer/1710338 for help on making this decision

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#treat_as_alias GmailSendAsAlias#treat_as_alias}

---

### GmailSendAsAliasSmtpMsa <a name="GmailSendAsAliasSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.Initializer"></a>

```typescript
import { gmailSendAsAlias } from '@cdktf/provider-googleworkspace'

const gmailSendAsAliasSmtpMsa: gmailSendAsAlias.GmailSendAsAliasSmtpMsa = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.host">host</a></code> | <code>string</code> | The hostname of the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.port">port</a></code> | <code>number</code> | The port of the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.password">password</a></code> | <code>string</code> | The password that will be used for authentication with the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.securityMode">securityMode</a></code> | <code>string</code> | Defaults to `securityModeUnspecified`. The protocol that will be used to secure communication with the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.username">username</a></code> | <code>string</code> | The username that will be used for authentication with the SMTP service. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The hostname of the SMTP service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#host GmailSendAsAlias#host}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port of the SMTP service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#port GmailSendAsAlias#port}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password that will be used for authentication with the SMTP service.

This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#password GmailSendAsAlias#password}

---

##### `securityMode`<sup>Optional</sup> <a name="securityMode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.securityMode"></a>

```typescript
public readonly securityMode: string;
```

- *Type:* string

Defaults to `securityModeUnspecified`. The protocol that will be used to secure communication with the SMTP service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#security_mode GmailSendAsAlias#security_mode}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username that will be used for authentication with the SMTP service.

This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#username GmailSendAsAlias#username}

---

## Classes <a name="Classes" id="Classes"></a>

### GmailSendAsAliasSmtpMsaOutputReference <a name="GmailSendAsAliasSmtpMsaOutputReference" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer"></a>

```typescript
import { gmailSendAsAlias } from '@cdktf/provider-googleworkspace'

new gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetSecurityMode">resetSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetSecurityMode` <a name="resetSecurityMode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetSecurityMode"></a>

```typescript
public resetSecurityMode(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityModeInput">securityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityMode">securityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `securityModeInput`<sup>Optional</sup> <a name="securityModeInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityModeInput"></a>

```typescript
public readonly securityModeInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `securityMode`<sup>Required</sup> <a name="securityMode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityMode"></a>

```typescript
public readonly securityMode: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GmailSendAsAliasSmtpMsa;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---



