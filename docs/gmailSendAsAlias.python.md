# `gmailSendAsAlias` Submodule <a name="`gmailSendAsAlias` Submodule" id="@cdktf/provider-googleworkspace.gmailSendAsAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GmailSendAsAlias <a name="GmailSendAsAlias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias googleworkspace_gmail_send_as_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import gmail_send_as_alias

gmailSendAsAlias.GmailSendAsAlias(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  primary_email: str,
  send_as_email: str,
  display_name: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  reply_to_address: str = None,
  signature: str = None,
  smtp_msa: GmailSendAsAliasSmtpMsa = None,
  treat_as_alias: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.primaryEmail">primary_email</a></code> | <code>str</code> | User's primary email address. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.sendAsEmail">send_as_email</a></code> | <code>str</code> | The email address that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A name that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.replyToAddress">reply_to_address</a></code> | <code>str</code> | An optional email address that is included in a 'Reply-To:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.signature">signature</a></code> | <code>str</code> | An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.smtpMsa">smtp_msa</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | smtp_msa block. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.treatAsAlias">treat_as_alias</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `primary_email`<sup>Required</sup> <a name="primary_email" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.primaryEmail"></a>

- *Type:* str

User's primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#primary_email GmailSendAsAlias#primary_email}

---

##### `send_as_email`<sup>Required</sup> <a name="send_as_email" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.sendAsEmail"></a>

- *Type:* str

The email address that appears in the 'From:' header for mail sent using this alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#send_as_email GmailSendAsAlias#send_as_email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.displayName"></a>

- *Type:* str

A name that appears in the 'From:' header for mail sent using this alias.

For custom 'from' addresses, when this is empty, Gmail will populate the 'From:' header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#display_name GmailSendAsAlias#display_name}

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply.

Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false to true for an address will result in this field becoming false for the other previous default address. Toggling an existing alias' default to false is not possible, another alias must be added/imported and toggled to true to remove the default from an existing alias. To avoid drift with Terraform, please change the previous default's config to false AFTER a new default is applied and perform a refresh to synchronize with remote state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#is_default GmailSendAsAlias#is_default}

---

##### `reply_to_address`<sup>Optional</sup> <a name="reply_to_address" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.replyToAddress"></a>

- *Type:* str

An optional email address that is included in a 'Reply-To:' header for mail sent using this alias.

If this is empty, Gmail will not generate a 'Reply-To:' header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#reply_to_address GmailSendAsAlias#reply_to_address}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.signature"></a>

- *Type:* str

An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.

This signature is added to new emails only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#signature GmailSendAsAlias#signature}

---

##### `smtp_msa`<sup>Optional</sup> <a name="smtp_msa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.smtpMsa"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

smtp_msa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#smtp_msa GmailSendAsAlias#smtp_msa}

---

##### `treat_as_alias`<sup>Optional</sup> <a name="treat_as_alias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.Initializer.parameter.treatAsAlias"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `true`.

Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom 'from' aliases. See https://support.google.com/a/answer/1710338 for help on making this decision

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#treat_as_alias GmailSendAsAlias#treat_as_alias}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa">put_smtp_msa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetIsDefault">reset_is_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetReplyToAddress">reset_reply_to_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSignature">reset_signature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSmtpMsa">reset_smtp_msa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetTreatAsAlias">reset_treat_as_alias</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_smtp_msa` <a name="put_smtp_msa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa"></a>

```python
def put_smtp_msa(
  host: str,
  port: typing.Union[int, float],
  password: str = None,
  security_mode: str = None,
  username: str = None
) -> None
```

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa.parameter.host"></a>

- *Type:* str

The hostname of the SMTP service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#host GmailSendAsAlias#host}

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port of the SMTP service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#port GmailSendAsAlias#port}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa.parameter.password"></a>

- *Type:* str

The password that will be used for authentication with the SMTP service.

This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#password GmailSendAsAlias#password}

---

###### `security_mode`<sup>Optional</sup> <a name="security_mode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa.parameter.securityMode"></a>

- *Type:* str

Defaults to `securityModeUnspecified`. The protocol that will be used to secure communication with the SMTP service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#security_mode GmailSendAsAlias#security_mode}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.putSmtpMsa.parameter.username"></a>

- *Type:* str

The username that will be used for authentication with the SMTP service.

This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#username GmailSendAsAlias#username}

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_is_default` <a name="reset_is_default" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetIsDefault"></a>

```python
def reset_is_default() -> None
```

##### `reset_reply_to_address` <a name="reset_reply_to_address" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetReplyToAddress"></a>

```python
def reset_reply_to_address() -> None
```

##### `reset_signature` <a name="reset_signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSignature"></a>

```python
def reset_signature() -> None
```

##### `reset_smtp_msa` <a name="reset_smtp_msa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetSmtpMsa"></a>

```python
def reset_smtp_msa() -> None
```

##### `reset_treat_as_alias` <a name="reset_treat_as_alias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.resetTreatAsAlias"></a>

```python
def reset_treat_as_alias() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GmailSendAsAlias resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import gmail_send_as_alias

gmailSendAsAlias.GmailSendAsAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import gmail_send_as_alias

gmailSendAsAlias.GmailSendAsAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_googleworkspace import gmail_send_as_alias

gmailSendAsAlias.GmailSendAsAlias.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_googleworkspace import gmail_send_as_alias

gmailSendAsAlias.GmailSendAsAlias.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GmailSendAsAlias resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GmailSendAsAlias to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GmailSendAsAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GmailSendAsAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isPrimary">is_primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsa">smtp_msa</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference">GmailSendAsAliasSmtpMsaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.verificationStatus">verification_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmailInput">primary_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddressInput">reply_to_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmailInput">send_as_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signatureInput">signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsaInput">smtp_msa_input</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAliasInput">treat_as_alias_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmail">primary_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddress">reply_to_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmail">send_as_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAlias">treat_as_alias</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isPrimary"></a>

```python
is_primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `smtp_msa`<sup>Required</sup> <a name="smtp_msa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsa"></a>

```python
smtp_msa: GmailSendAsAliasSmtpMsaOutputReference
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference">GmailSendAsAliasSmtpMsaOutputReference</a>

---

##### `verification_status`<sup>Required</sup> <a name="verification_status" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.verificationStatus"></a>

```python
verification_status: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_email_input`<sup>Optional</sup> <a name="primary_email_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmailInput"></a>

```python
primary_email_input: str
```

- *Type:* str

---

##### `reply_to_address_input`<sup>Optional</sup> <a name="reply_to_address_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddressInput"></a>

```python
reply_to_address_input: str
```

- *Type:* str

---

##### `send_as_email_input`<sup>Optional</sup> <a name="send_as_email_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmailInput"></a>

```python
send_as_email_input: str
```

- *Type:* str

---

##### `signature_input`<sup>Optional</sup> <a name="signature_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signatureInput"></a>

```python
signature_input: str
```

- *Type:* str

---

##### `smtp_msa_input`<sup>Optional</sup> <a name="smtp_msa_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.smtpMsaInput"></a>

```python
smtp_msa_input: GmailSendAsAliasSmtpMsa
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---

##### `treat_as_alias_input`<sup>Optional</sup> <a name="treat_as_alias_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAliasInput"></a>

```python
treat_as_alias_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_email`<sup>Required</sup> <a name="primary_email" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.primaryEmail"></a>

```python
primary_email: str
```

- *Type:* str

---

##### `reply_to_address`<sup>Required</sup> <a name="reply_to_address" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.replyToAddress"></a>

```python
reply_to_address: str
```

- *Type:* str

---

##### `send_as_email`<sup>Required</sup> <a name="send_as_email" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.sendAsEmail"></a>

```python
send_as_email: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `treat_as_alias`<sup>Required</sup> <a name="treat_as_alias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.treatAsAlias"></a>

```python
treat_as_alias: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GmailSendAsAliasConfig <a name="GmailSendAsAliasConfig" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import gmail_send_as_alias

gmailSendAsAlias.GmailSendAsAliasConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  primary_email: str,
  send_as_email: str,
  display_name: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  reply_to_address: str = None,
  signature: str = None,
  smtp_msa: GmailSendAsAliasSmtpMsa = None,
  treat_as_alias: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.primaryEmail">primary_email</a></code> | <code>str</code> | User's primary email address. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.sendAsEmail">send_as_email</a></code> | <code>str</code> | The email address that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.displayName">display_name</a></code> | <code>str</code> | A name that appears in the 'From:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.replyToAddress">reply_to_address</a></code> | <code>str</code> | An optional email address that is included in a 'Reply-To:' header for mail sent using this alias. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.signature">signature</a></code> | <code>str</code> | An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.smtpMsa">smtp_msa</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | smtp_msa block. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.treatAsAlias">treat_as_alias</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `primary_email`<sup>Required</sup> <a name="primary_email" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.primaryEmail"></a>

```python
primary_email: str
```

- *Type:* str

User's primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#primary_email GmailSendAsAlias#primary_email}

---

##### `send_as_email`<sup>Required</sup> <a name="send_as_email" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.sendAsEmail"></a>

```python
send_as_email: str
```

- *Type:* str

The email address that appears in the 'From:' header for mail sent using this alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#send_as_email GmailSendAsAlias#send_as_email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A name that appears in the 'From:' header for mail sent using this alias.

For custom 'from' addresses, when this is empty, Gmail will populate the 'From:' header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#display_name GmailSendAsAlias#display_name}

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending a vacation auto-reply.

Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false to true for an address will result in this field becoming false for the other previous default address. Toggling an existing alias' default to false is not possible, another alias must be added/imported and toggled to true to remove the default from an existing alias. To avoid drift with Terraform, please change the previous default's config to false AFTER a new default is applied and perform a refresh to synchronize with remote state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#is_default GmailSendAsAlias#is_default}

---

##### `reply_to_address`<sup>Optional</sup> <a name="reply_to_address" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.replyToAddress"></a>

```python
reply_to_address: str
```

- *Type:* str

An optional email address that is included in a 'Reply-To:' header for mail sent using this alias.

If this is empty, Gmail will not generate a 'Reply-To:' header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#reply_to_address GmailSendAsAlias#reply_to_address}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.signature"></a>

```python
signature: str
```

- *Type:* str

An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.

This signature is added to new emails only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#signature GmailSendAsAlias#signature}

---

##### `smtp_msa`<sup>Optional</sup> <a name="smtp_msa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.smtpMsa"></a>

```python
smtp_msa: GmailSendAsAliasSmtpMsa
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

smtp_msa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#smtp_msa GmailSendAsAlias#smtp_msa}

---

##### `treat_as_alias`<sup>Optional</sup> <a name="treat_as_alias" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasConfig.property.treatAsAlias"></a>

```python
treat_as_alias: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `true`.

Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom 'from' aliases. See https://support.google.com/a/answer/1710338 for help on making this decision

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#treat_as_alias GmailSendAsAlias#treat_as_alias}

---

### GmailSendAsAliasSmtpMsa <a name="GmailSendAsAliasSmtpMsa" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import gmail_send_as_alias

gmailSendAsAlias.GmailSendAsAliasSmtpMsa(
  host: str,
  port: typing.Union[int, float],
  password: str = None,
  security_mode: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.host">host</a></code> | <code>str</code> | The hostname of the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port of the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.password">password</a></code> | <code>str</code> | The password that will be used for authentication with the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.securityMode">security_mode</a></code> | <code>str</code> | Defaults to `securityModeUnspecified`. The protocol that will be used to secure communication with the SMTP service. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.username">username</a></code> | <code>str</code> | The username that will be used for authentication with the SMTP service. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.host"></a>

```python
host: str
```

- *Type:* str

The hostname of the SMTP service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#host GmailSendAsAlias#host}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port of the SMTP service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#port GmailSendAsAlias#port}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.password"></a>

```python
password: str
```

- *Type:* str

The password that will be used for authentication with the SMTP service.

This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#password GmailSendAsAlias#password}

---

##### `security_mode`<sup>Optional</sup> <a name="security_mode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.securityMode"></a>

```python
security_mode: str
```

- *Type:* str

Defaults to `securityModeUnspecified`. The protocol that will be used to secure communication with the SMTP service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#security_mode GmailSendAsAlias#security_mode}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa.property.username"></a>

```python
username: str
```

- *Type:* str

The username that will be used for authentication with the SMTP service.

This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/gmail_send_as_alias#username GmailSendAsAlias#username}

---

## Classes <a name="Classes" id="Classes"></a>

### GmailSendAsAliasSmtpMsaOutputReference <a name="GmailSendAsAliasSmtpMsaOutputReference" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import gmail_send_as_alias

gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetSecurityMode">reset_security_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_security_mode` <a name="reset_security_mode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetSecurityMode"></a>

```python
def reset_security_mode() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityModeInput">security_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityMode">security_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_mode_input`<sup>Optional</sup> <a name="security_mode_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityModeInput"></a>

```python
security_mode_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_mode`<sup>Required</sup> <a name="security_mode" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.securityMode"></a>

```python
security_mode: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsaOutputReference.property.internalValue"></a>

```python
internal_value: GmailSendAsAliasSmtpMsa
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.gmailSendAsAlias.GmailSendAsAliasSmtpMsa">GmailSendAsAliasSmtpMsa</a>

---



