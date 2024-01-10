# `dataGoogleworkspaceGroupMember` Submodule <a name="`dataGoogleworkspaceGroupMember` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceGroupMember <a name="DataGoogleworkspaceGroupMember" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member googleworkspace_group_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_member

dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str,
  email: str = None,
  member_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Identifies the group in the API request. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.email">email</a></code> | <code>str</code> | The member's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.memberId">member_id</a></code> | <code>str</code> | The unique ID of the group member. A member id can be used as a member request URI's memberKey. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.groupId"></a>

- *Type:* str

Identifies the group in the API request.

The value can be the group's email address, group alias, or the unique group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#group_id DataGoogleworkspaceGroupMember#group_id}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.email"></a>

- *Type:* str

The member's email address.

A member can be a user or another group. This property is required when adding a member to a group. The email must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#email DataGoogleworkspaceGroupMember#email}

---

##### `member_id`<sup>Optional</sup> <a name="member_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.memberId"></a>

- *Type:* str

The unique ID of the group member. A member id can be used as a member request URI's memberKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#member_id DataGoogleworkspaceGroupMember#member_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetMemberId">reset_member_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_email` <a name="reset_email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_member_id` <a name="reset_member_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetMemberId"></a>

```python
def reset_member_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleworkspaceGroupMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_member

dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_member

dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_member

dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_member

dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleworkspaceGroupMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleworkspaceGroupMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleworkspaceGroupMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleworkspaceGroupMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.deliverySettings">delivery_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.memberIdInput">member_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.memberId">member_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `delivery_settings`<sup>Required</sup> <a name="delivery_settings" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.deliverySettings"></a>

```python
delivery_settings: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `member_id_input`<sup>Optional</sup> <a name="member_id_input" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.memberIdInput"></a>

```python
member_id_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `member_id`<sup>Required</sup> <a name="member_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.memberId"></a>

```python
member_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceGroupMemberConfig <a name="DataGoogleworkspaceGroupMemberConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_member

dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str,
  email: str = None,
  member_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.groupId">group_id</a></code> | <code>str</code> | Identifies the group in the API request. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.email">email</a></code> | <code>str</code> | The member's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.memberId">member_id</a></code> | <code>str</code> | The unique ID of the group member. A member id can be used as a member request URI's memberKey. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Identifies the group in the API request.

The value can be the group's email address, group alias, or the unique group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#group_id DataGoogleworkspaceGroupMember#group_id}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.email"></a>

```python
email: str
```

- *Type:* str

The member's email address.

A member can be a user or another group. This property is required when adding a member to a group. The email must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#email DataGoogleworkspaceGroupMember#email}

---

##### `member_id`<sup>Optional</sup> <a name="member_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.memberId"></a>

```python
member_id: str
```

- *Type:* str

The unique ID of the group member. A member id can be used as a member request URI's memberKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#member_id DataGoogleworkspaceGroupMember#member_id}

---



