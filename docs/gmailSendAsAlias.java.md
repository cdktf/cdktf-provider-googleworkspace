# `gmailSendAsAlias` Submodule <a name="`gmailSendAsAlias` Submodule" id="@cdktf/provider-googleworkspace.gmailSendAsAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GmailSendAsAlias <a name="GmailSendAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias"></a>

Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias googleworkspace_gmail_send_as_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.gmail_send_as_alias.GmailSendAsAlias;

GmailSendAsAlias.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .primaryEmail(java.lang.String)
    .sendAsEmail(java.lang.String)
//  .displayName(java.lang.String)
//  .isDefault(java.lang.Boolean)
//  .isDefault(IResolvable)
//  .replyToAddress(java.lang.String)
//  .signature(java.lang.String)
//  .smtpMsa(GmailSendAsAliasSmtpMsa)
//  .treatAsAlias(java.lang.Boolean)
//  .treatAsAlias(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.primaryEmail">primaryEmail</a></code> | <code>java.lang.String</code> | User's primary email address. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.sendAsEmail">sendAsEmail</a></code> | <code>java.lang.String</code> | The email address that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A name that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.replyToAddress">replyToAddress</a></code> | <code>java.lang.String</code> | An optional email address that is included in a 'Reply-To:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.signature">signature</a></code> | <code>java.lang.String</code> | An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.smtpMsa">smtpMsa</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | smtp_msa block. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.treatAsAlias">treatAsAlias</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `primaryEmail`<sup>Required</sup> <a name="primaryEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.primaryEmail"></a>

- *Type:* java.lang.String

User's primary email address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#primary_email GmailSendAsAlias#primary_email}

---

##### `sendAsEmail`<sup>Required</sup> <a name="sendAsEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.sendAsEmail"></a>

- *Type:* java.lang.String

The email address that appears in the 'From:' header for mail sent using this alias.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#send_as_email GmailSendAsAlias#send_as_email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A name that appears in the 'From:' header for mail sent using this alias.

For custom 'from' addresses, when this is empty, Gmail will populate the 'From:' header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#display_name GmailSendAsAlias#display_name}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.isDefault"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply.

Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false to true for an address will result in this field becoming false for the other previous default address. Toggling an existing alias' default to false is not possible, another alias must be added/imported and toggled to true to remove the default from an existing alias. To avoid drift with Terraform, please change the previous default's config to false AFTER a new default is applied and perform a refresh to synchronize with remote state.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#is_default GmailSendAsAlias#is_default}

---

##### `replyToAddress`<sup>Optional</sup> <a name="replyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.replyToAddress"></a>

- *Type:* java.lang.String

An optional email address that is included in a 'Reply-To:' header for mail sent using this alias.

If this is empty, Gmail will not generate a 'Reply-To:' header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#reply_to_address GmailSendAsAlias#reply_to_address}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.signature"></a>

- *Type:* java.lang.String

An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.

This signature is added to new emails only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#signature GmailSendAsAlias#signature}

---

##### `smtpMsa`<sup>Optional</sup> <a name="smtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.smtpMsa"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

smtp_msa block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#smtp_msa GmailSendAsAlias#smtp_msa}

---

##### `treatAsAlias`<sup>Optional</sup> <a name="treatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.treatAsAlias"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `true`.

Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom 'from' aliases. See https://support.google.com/a/answer/1710338 for help on making this decision

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#treat_as_alias GmailSendAsAlias#treat_as_alias}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSmtpMsa` <a name="putSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa"></a>

```java
public void putSmtpMsa(GmailSendAsAliasSmtpMsa value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetIsDefault"></a>

```java
public void resetIsDefault()
```

##### `resetReplyToAddress` <a name="resetReplyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetReplyToAddress"></a>

```java
public void resetReplyToAddress()
```

##### `resetSignature` <a name="resetSignature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSignature"></a>

```java
public void resetSignature()
```

##### `resetSmtpMsa` <a name="resetSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSmtpMsa"></a>

```java
public void resetSmtpMsa()
```

##### `resetTreatAsAlias` <a name="resetTreatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetTreatAsAlias"></a>

```java
public void resetTreatAsAlias()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.gmail_send_as_alias.GmailSendAsAlias;

GmailSendAsAlias.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.gmail_send_as_alias.GmailSendAsAlias;

GmailSendAsAlias.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.gmail_send_as_alias.GmailSendAsAlias;

GmailSendAsAlias.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isPrimary">isPrimary</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsa">smtpMsa</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference">GmailSendAsAliasSmtpMsaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.verificationStatus">verificationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmailInput">primaryEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddressInput">replyToAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmailInput">sendAsEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signatureInput">signatureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsaInput">smtpMsaInput</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAliasInput">treatAsAliasInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmail">primaryEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddress">replyToAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmail">sendAsEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signature">signature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAlias">treatAsAlias</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isPrimary"></a>

```java
public IResolvable getIsPrimary();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `smtpMsa`<sup>Required</sup> <a name="smtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsa"></a>

```java
public GmailSendAsAliasSmtpMsaOutputReference getSmtpMsa();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference">GmailSendAsAliasSmtpMsaOutputReference</a>

---

##### `verificationStatus`<sup>Required</sup> <a name="verificationStatus" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.verificationStatus"></a>

```java
public java.lang.String getVerificationStatus();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefaultInput"></a>

```java
public java.lang.Object getIsDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `primaryEmailInput`<sup>Optional</sup> <a name="primaryEmailInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmailInput"></a>

```java
public java.lang.String getPrimaryEmailInput();
```

- *Type:* java.lang.String

---

##### `replyToAddressInput`<sup>Optional</sup> <a name="replyToAddressInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddressInput"></a>

```java
public java.lang.String getReplyToAddressInput();
```

- *Type:* java.lang.String

---

##### `sendAsEmailInput`<sup>Optional</sup> <a name="sendAsEmailInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmailInput"></a>

```java
public java.lang.String getSendAsEmailInput();
```

- *Type:* java.lang.String

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signatureInput"></a>

```java
public java.lang.String getSignatureInput();
```

- *Type:* java.lang.String

---

##### `smtpMsaInput`<sup>Optional</sup> <a name="smtpMsaInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsaInput"></a>

```java
public GmailSendAsAliasSmtpMsa getSmtpMsaInput();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---

##### `treatAsAliasInput`<sup>Optional</sup> <a name="treatAsAliasInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAliasInput"></a>

```java
public java.lang.Object getTreatAsAliasInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `primaryEmail`<sup>Required</sup> <a name="primaryEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmail"></a>

```java
public java.lang.String getPrimaryEmail();
```

- *Type:* java.lang.String

---

##### `replyToAddress`<sup>Required</sup> <a name="replyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddress"></a>

```java
public java.lang.String getReplyToAddress();
```

- *Type:* java.lang.String

---

##### `sendAsEmail`<sup>Required</sup> <a name="sendAsEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmail"></a>

```java
public java.lang.String getSendAsEmail();
```

- *Type:* java.lang.String

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

---

##### `treatAsAlias`<sup>Required</sup> <a name="treatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAlias"></a>

```java
public java.lang.Object getTreatAsAlias();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GmailSendAsAliasConfig <a name="GmailSendAsAliasConfig" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.gmail_send_as_alias.GmailSendAsAliasConfig;

GmailSendAsAliasConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .primaryEmail(java.lang.String)
    .sendAsEmail(java.lang.String)
//  .displayName(java.lang.String)
//  .isDefault(java.lang.Boolean)
//  .isDefault(IResolvable)
//  .replyToAddress(java.lang.String)
//  .signature(java.lang.String)
//  .smtpMsa(GmailSendAsAliasSmtpMsa)
//  .treatAsAlias(java.lang.Boolean)
//  .treatAsAlias(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.primaryEmail">primaryEmail</a></code> | <code>java.lang.String</code> | User's primary email address. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.sendAsEmail">sendAsEmail</a></code> | <code>java.lang.String</code> | The email address that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A name that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.replyToAddress">replyToAddress</a></code> | <code>java.lang.String</code> | An optional email address that is included in a 'Reply-To:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.signature">signature</a></code> | <code>java.lang.String</code> | An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.smtpMsa">smtpMsa</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | smtp_msa block. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.treatAsAlias">treatAsAlias</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `primaryEmail`<sup>Required</sup> <a name="primaryEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.primaryEmail"></a>

```java
public java.lang.String getPrimaryEmail();
```

- *Type:* java.lang.String

User's primary email address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#primary_email GmailSendAsAlias#primary_email}

---

##### `sendAsEmail`<sup>Required</sup> <a name="sendAsEmail" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.sendAsEmail"></a>

```java
public java.lang.String getSendAsEmail();
```

- *Type:* java.lang.String

The email address that appears in the 'From:' header for mail sent using this alias.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#send_as_email GmailSendAsAlias#send_as_email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A name that appears in the 'From:' header for mail sent using this alias.

For custom 'from' addresses, when this is empty, Gmail will populate the 'From:' header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#display_name GmailSendAsAlias#display_name}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply.

Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false to true for an address will result in this field becoming false for the other previous default address. Toggling an existing alias' default to false is not possible, another alias must be added/imported and toggled to true to remove the default from an existing alias. To avoid drift with Terraform, please change the previous default's config to false AFTER a new default is applied and perform a refresh to synchronize with remote state.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#is_default GmailSendAsAlias#is_default}

---

##### `replyToAddress`<sup>Optional</sup> <a name="replyToAddress" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.replyToAddress"></a>

```java
public java.lang.String getReplyToAddress();
```

- *Type:* java.lang.String

An optional email address that is included in a 'Reply-To:' header for mail sent using this alias.

If this is empty, Gmail will not generate a 'Reply-To:' header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#reply_to_address GmailSendAsAlias#reply_to_address}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.

This signature is added to new emails only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#signature GmailSendAsAlias#signature}

---

##### `smtpMsa`<sup>Optional</sup> <a name="smtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.smtpMsa"></a>

```java
public GmailSendAsAliasSmtpMsa getSmtpMsa();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

smtp_msa block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#smtp_msa GmailSendAsAlias#smtp_msa}

---

##### `treatAsAlias`<sup>Optional</sup> <a name="treatAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.treatAsAlias"></a>

```java
public java.lang.Object getTreatAsAlias();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `true`.

Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom 'from' aliases. See https://support.google.com/a/answer/1710338 for help on making this decision

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#treat_as_alias GmailSendAsAlias#treat_as_alias}

---

### GmailSendAsAliasSmtpMsa <a name="GmailSendAsAliasSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.gmail_send_as_alias.GmailSendAsAliasSmtpMsa;

GmailSendAsAliasSmtpMsa.builder()
    .host(java.lang.String)
    .port(java.lang.Number)
//  .password(java.lang.String)
//  .securityMode(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.host">host</a></code> | <code>java.lang.String</code> | The hostname of the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.port">port</a></code> | <code>java.lang.Number</code> | The port of the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.password">password</a></code> | <code>java.lang.String</code> | The password that will be used for authentication with the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.securityMode">securityMode</a></code> | <code>java.lang.String</code> | Defaults to `securityModeUnspecified`. The protocol that will be used to secure communication with the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.username">username</a></code> | <code>java.lang.String</code> | The username that will be used for authentication with the SMTP service. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The hostname of the SMTP service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#host GmailSendAsAlias#host}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port of the SMTP service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#port GmailSendAsAlias#port}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password that will be used for authentication with the SMTP service.

This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#password GmailSendAsAlias#password}

---

##### `securityMode`<sup>Optional</sup> <a name="securityMode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.securityMode"></a>

```java
public java.lang.String getSecurityMode();
```

- *Type:* java.lang.String

Defaults to `securityModeUnspecified`. The protocol that will be used to secure communication with the SMTP service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#security_mode GmailSendAsAlias#security_mode}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username that will be used for authentication with the SMTP service.

This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/gmail_send_as_alias#username GmailSendAsAlias#username}

---

## Classes <a name="Classes" id="Classes"></a>

### GmailSendAsAliasSmtpMsaOutputReference <a name="GmailSendAsAliasSmtpMsaOutputReference" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.gmail_send_as_alias.GmailSendAsAliasSmtpMsaOutputReference;

new GmailSendAsAliasSmtpMsaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetSecurityMode` <a name="resetSecurityMode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetSecurityMode"></a>

```java
public void resetSecurityMode()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityModeInput">securityModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityMode">securityMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `securityModeInput`<sup>Optional</sup> <a name="securityModeInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityModeInput"></a>

```java
public java.lang.String getSecurityModeInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `securityMode`<sup>Required</sup> <a name="securityMode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityMode"></a>

```java
public java.lang.String getSecurityMode();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.internalValue"></a>

```java
public GmailSendAsAliasSmtpMsa getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---



