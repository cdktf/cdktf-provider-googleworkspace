# `groupMember` Submodule <a name="`groupMember` Submodule" id="@cdktf/provider-googleworkspace.groupMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupMember <a name="GroupMember" id="@cdktf/provider-googleworkspace.groupMember.GroupMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member googleworkspace_group_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_member

groupMember.GroupMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  group_id: str,
  delivery_settings: str = None,
  role: str = None,
  timeouts: GroupMemberTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.email">email</a></code> | <code>str</code> | The member's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Identifies the group in the API request. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.deliverySettings">delivery_settings</a></code> | <code>str</code> | Defaults to `ALL_MAIL`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Defaults to `MEMBER`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts">GroupMemberTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.type">type</a></code> | <code>str</code> | Defaults to `USER`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.email"></a>

- *Type:* str

The member's email address.

A member can be a user or another group. This property is required when adding a member to a group. The email must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#email GroupMember#email}

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.groupId"></a>

- *Type:* str

Identifies the group in the API request.

The value can be the group's email address, group alias, or the unique group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#group_id GroupMember#group_id}

---

##### `delivery_settings`<sup>Optional</sup> <a name="delivery_settings" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.deliverySettings"></a>

- *Type:* str

Defaults to `ALL_MAIL`.

Defines mail delivery preferences of member. Acceptable values are:
- `ALL_MAIL`: All messages, delivered as soon as they arrive.
- `DAILY`: No more than one message a day.
- `DIGEST`: Up to 25 messages bundled into a single message.
- `DISABLED`: Remove subscription.
- `NONE`: No messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#delivery_settings GroupMember#delivery_settings}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.role"></a>

- *Type:* str

Defaults to `MEMBER`.

The member's role in a group. The API returns an error for cycles in group memberships. For example, if group1 is a member of group2, group2 cannot be a member of group1. Acceptable values are:
- `MANAGER`: This role is only available if the Google Groups for Business is enabled using the Admin Console. A `MANAGER` role can do everything done by an `OWNER` role except make a member an `OWNER` or delete the group. A group can have multiple `MANAGER` members.
- `MEMBER`: This role can subscribe to a group, view discussion archives, and view the group's membership list.
- `OWNER`: This role can send messages to the group, add or remove members, change member roles, change group's settings, and delete the group. An OWNER must be a member of the group. A group can have more than one OWNER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#role GroupMember#role}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts">GroupMemberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#timeouts GroupMember#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.Initializer.parameter.type"></a>

- *Type:* str

Defaults to `USER`.

The type of group member. Acceptable values are:
- `CUSTOMER`: The member represents all users in a domain. An email address is not returned and the ID returned is the customer ID.
- `GROUP`: The member is another group.
- `USER`: The member is a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#type GroupMember#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.resetDeliverySettings">reset_delivery_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#create GroupMember#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#update GroupMember#update}.

---

##### `reset_delivery_settings` <a name="reset_delivery_settings" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.resetDeliverySettings"></a>

```python
def reset_delivery_settings() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GroupMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_member

groupMember.GroupMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_member

groupMember.GroupMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_member

groupMember.GroupMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_member

groupMember.GroupMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GroupMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GroupMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GroupMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.memberId">member_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference">GroupMemberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.deliverySettingsInput">delivery_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts">GroupMemberTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.deliverySettings">delivery_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member_id`<sup>Required</sup> <a name="member_id" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.memberId"></a>

```python
member_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.timeouts"></a>

```python
timeouts: GroupMemberTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference">GroupMemberTimeoutsOutputReference</a>

---

##### `delivery_settings_input`<sup>Optional</sup> <a name="delivery_settings_input" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.deliverySettingsInput"></a>

```python
delivery_settings_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GroupMemberTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts">GroupMemberTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `delivery_settings`<sup>Required</sup> <a name="delivery_settings" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.deliverySettings"></a>

```python
delivery_settings: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.groupMember.GroupMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupMemberConfig <a name="GroupMemberConfig" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_member

groupMember.GroupMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  group_id: str,
  delivery_settings: str = None,
  role: str = None,
  timeouts: GroupMemberTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.email">email</a></code> | <code>str</code> | The member's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.groupId">group_id</a></code> | <code>str</code> | Identifies the group in the API request. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.deliverySettings">delivery_settings</a></code> | <code>str</code> | Defaults to `ALL_MAIL`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.role">role</a></code> | <code>str</code> | Defaults to `MEMBER`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts">GroupMemberTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.type">type</a></code> | <code>str</code> | Defaults to `USER`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.email"></a>

```python
email: str
```

- *Type:* str

The member's email address.

A member can be a user or another group. This property is required when adding a member to a group. The email must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#email GroupMember#email}

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Identifies the group in the API request.

The value can be the group's email address, group alias, or the unique group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#group_id GroupMember#group_id}

---

##### `delivery_settings`<sup>Optional</sup> <a name="delivery_settings" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.deliverySettings"></a>

```python
delivery_settings: str
```

- *Type:* str

Defaults to `ALL_MAIL`.

Defines mail delivery preferences of member. Acceptable values are:
- `ALL_MAIL`: All messages, delivered as soon as they arrive.
- `DAILY`: No more than one message a day.
- `DIGEST`: Up to 25 messages bundled into a single message.
- `DISABLED`: Remove subscription.
- `NONE`: No messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#delivery_settings GroupMember#delivery_settings}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Defaults to `MEMBER`.

The member's role in a group. The API returns an error for cycles in group memberships. For example, if group1 is a member of group2, group2 cannot be a member of group1. Acceptable values are:
- `MANAGER`: This role is only available if the Google Groups for Business is enabled using the Admin Console. A `MANAGER` role can do everything done by an `OWNER` role except make a member an `OWNER` or delete the group. A group can have multiple `MANAGER` members.
- `MEMBER`: This role can subscribe to a group, view discussion archives, and view the group's membership list.
- `OWNER`: This role can send messages to the group, add or remove members, change member roles, change group's settings, and delete the group. An OWNER must be a member of the group. A group can have more than one OWNER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#role GroupMember#role}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.timeouts"></a>

```python
timeouts: GroupMemberTimeouts
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts">GroupMemberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#timeouts GroupMember#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Defaults to `USER`.

The type of group member. Acceptable values are:
- `CUSTOMER`: The member represents all users in a domain. An email address is not returned and the ID returned is the customer ID.
- `GROUP`: The member is another group.
- `USER`: The member is a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#type GroupMember#type}

---

### GroupMemberTimeouts <a name="GroupMemberTimeouts" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_member

groupMember.GroupMemberTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#create GroupMember#create}. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#update GroupMember#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#create GroupMember#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_member#update GroupMember#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupMemberTimeoutsOutputReference <a name="GroupMemberTimeoutsOutputReference" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_member

groupMember.GroupMemberTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts">GroupMemberTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupMemberTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.groupMember.GroupMemberTimeouts">GroupMemberTimeouts</a>]

---



