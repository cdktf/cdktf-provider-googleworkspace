# `dataGoogleworkspaceGroupMembers` Submodule <a name="`dataGoogleworkspaceGroupMembers` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceGroupMembers <a name="DataGoogleworkspaceGroupMembers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_members googleworkspace_group_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_members

dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers(
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
  include_derived_membership: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Identifies the group in the API request. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.includeDerivedMembership">include_derived_membership</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, lists indirect group memberships. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.groupId"></a>

- *Type:* str

Identifies the group in the API request.

The value can be the group's email address, group alias, or the unique group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_members#group_id DataGoogleworkspaceGroupMembers#group_id}

---

##### `include_derived_membership`<sup>Optional</sup> <a name="include_derived_membership" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.Initializer.parameter.includeDerivedMembership"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, lists indirect group memberships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_members#include_derived_membership DataGoogleworkspaceGroupMembers#include_derived_membership}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.resetIncludeDerivedMembership">reset_include_derived_membership</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_include_derived_membership` <a name="reset_include_derived_membership" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.resetIncludeDerivedMembership"></a>

```python
def reset_include_derived_membership() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleworkspaceGroupMembers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_members

dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_members

dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_members

dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_members

dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleworkspaceGroupMembers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleworkspaceGroupMembers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleworkspaceGroupMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleworkspaceGroupMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.members">members</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList">DataGoogleworkspaceGroupMembersMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.includeDerivedMembershipInput">include_derived_membership_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.includeDerivedMembership">include_derived_membership</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.members"></a>

```python
members: DataGoogleworkspaceGroupMembersMembersList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList">DataGoogleworkspaceGroupMembersMembersList</a>

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `include_derived_membership_input`<sup>Optional</sup> <a name="include_derived_membership_input" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.includeDerivedMembershipInput"></a>

```python
include_derived_membership_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `include_derived_membership`<sup>Required</sup> <a name="include_derived_membership" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.includeDerivedMembership"></a>

```python
include_derived_membership: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceGroupMembersConfig <a name="DataGoogleworkspaceGroupMembersConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_members

dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str,
  include_derived_membership: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.groupId">group_id</a></code> | <code>str</code> | Identifies the group in the API request. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.includeDerivedMembership">include_derived_membership</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, lists indirect group memberships. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Identifies the group in the API request.

The value can be the group's email address, group alias, or the unique group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_members#group_id DataGoogleworkspaceGroupMembers#group_id}

---

##### `include_derived_membership`<sup>Optional</sup> <a name="include_derived_membership" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersConfig.property.includeDerivedMembership"></a>

```python
include_derived_membership: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, lists indirect group memberships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_members#include_derived_membership DataGoogleworkspaceGroupMembers#include_derived_membership}

---

### DataGoogleworkspaceGroupMembersMembers <a name="DataGoogleworkspaceGroupMembersMembers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembers.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_members

dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleworkspaceGroupMembersMembersList <a name="DataGoogleworkspaceGroupMembersMembersList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_members

dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceGroupMembersMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceGroupMembersMembersOutputReference <a name="DataGoogleworkspaceGroupMembersMembersOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_members

dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.deliverySettings">delivery_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembers">DataGoogleworkspaceGroupMembersMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_settings`<sup>Required</sup> <a name="delivery_settings" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.deliverySettings"></a>

```python
delivery_settings: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembersOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceGroupMembersMembers
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMembers.DataGoogleworkspaceGroupMembersMembers">DataGoogleworkspaceGroupMembersMembers</a>

---



