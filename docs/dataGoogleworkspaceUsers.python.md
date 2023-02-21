# `dataGoogleworkspaceUsers` Submodule <a name="`dataGoogleworkspaceUsers` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceUsers <a name="DataGoogleworkspaceUsers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers"></a>

Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/d/users googleworkspace_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/users#id DataGoogleworkspaceUsers#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/users#id DataGoogleworkspaceUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.users">users</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList">DataGoogleworkspaceUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.users"></a>

```python
users: DataGoogleworkspaceUsersUsersList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList">DataGoogleworkspaceUsersUsersList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceUsersConfig <a name="DataGoogleworkspaceUsersConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/users#id DataGoogleworkspaceUsers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/users#id DataGoogleworkspaceUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleworkspaceUsersUsers <a name="DataGoogleworkspaceUsersUsers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsers()
```


### DataGoogleworkspaceUsersUsersAddresses <a name="DataGoogleworkspaceUsersUsersAddresses" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddresses.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddresses()
```


### DataGoogleworkspaceUsersUsersCustomSchemas <a name="DataGoogleworkspaceUsersUsersCustomSchemas" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemas.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemas()
```


### DataGoogleworkspaceUsersUsersEmails <a name="DataGoogleworkspaceUsersUsersEmails" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmails.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmails()
```


### DataGoogleworkspaceUsersUsersExternalIds <a name="DataGoogleworkspaceUsersUsersExternalIds" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIds.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIds()
```


### DataGoogleworkspaceUsersUsersIms <a name="DataGoogleworkspaceUsersUsersIms" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersIms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersIms.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersIms()
```


### DataGoogleworkspaceUsersUsersKeywords <a name="DataGoogleworkspaceUsersUsersKeywords" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywords.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywords()
```


### DataGoogleworkspaceUsersUsersLanguages <a name="DataGoogleworkspaceUsersUsersLanguages" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguages.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguages()
```


### DataGoogleworkspaceUsersUsersLocations <a name="DataGoogleworkspaceUsersUsersLocations" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocations()
```


### DataGoogleworkspaceUsersUsersName <a name="DataGoogleworkspaceUsersUsersName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersName.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersName()
```


### DataGoogleworkspaceUsersUsersOrganizations <a name="DataGoogleworkspaceUsersUsersOrganizations" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizations.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizations()
```


### DataGoogleworkspaceUsersUsersPhones <a name="DataGoogleworkspaceUsersUsersPhones" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhones.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhones()
```


### DataGoogleworkspaceUsersUsersPosixAccounts <a name="DataGoogleworkspaceUsersUsersPosixAccounts" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccounts()
```


### DataGoogleworkspaceUsersUsersRelations <a name="DataGoogleworkspaceUsersUsersRelations" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelations.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelations()
```


### DataGoogleworkspaceUsersUsersSshPublicKeys <a name="DataGoogleworkspaceUsersUsersSshPublicKeys" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeys()
```


### DataGoogleworkspaceUsersUsersWebsites <a name="DataGoogleworkspaceUsersUsersWebsites" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsites.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsites()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleworkspaceUsersUsersAddressesList <a name="DataGoogleworkspaceUsersUsersAddressesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersAddressesOutputReference <a name="DataGoogleworkspaceUsersUsersAddressesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.extendedAddress">extended_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.formatted">formatted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.poBox">po_box</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.sourceIsStructured">source_is_structured</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddresses">DataGoogleworkspaceUsersUsersAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `extended_address`<sup>Required</sup> <a name="extended_address" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.extendedAddress"></a>

```python
extended_address: str
```

- *Type:* str

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `po_box`<sup>Required</sup> <a name="po_box" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.poBox"></a>

```python
po_box: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `source_is_structured`<sup>Required</sup> <a name="source_is_structured" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.sourceIsStructured"></a>

```python
source_is_structured: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersAddresses
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddresses">DataGoogleworkspaceUsersUsersAddresses</a>

---


### DataGoogleworkspaceUsersUsersCustomSchemasList <a name="DataGoogleworkspaceUsersUsersCustomSchemasList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersCustomSchemasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersCustomSchemasOutputReference <a name="DataGoogleworkspaceUsersUsersCustomSchemasOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.schemaValues">schema_values</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemas">DataGoogleworkspaceUsersUsersCustomSchemas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `schema_values`<sup>Required</sup> <a name="schema_values" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.schemaValues"></a>

```python
schema_values: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersCustomSchemas
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemas">DataGoogleworkspaceUsersUsersCustomSchemas</a>

---


### DataGoogleworkspaceUsersUsersEmailsList <a name="DataGoogleworkspaceUsersUsersEmailsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersEmailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersEmailsOutputReference <a name="DataGoogleworkspaceUsersUsersEmailsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmails">DataGoogleworkspaceUsersUsersEmails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersEmails
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmails">DataGoogleworkspaceUsersUsersEmails</a>

---


### DataGoogleworkspaceUsersUsersExternalIdsList <a name="DataGoogleworkspaceUsersUsersExternalIdsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersExternalIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersExternalIdsOutputReference <a name="DataGoogleworkspaceUsersUsersExternalIdsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIds">DataGoogleworkspaceUsersUsersExternalIds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersExternalIds
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIds">DataGoogleworkspaceUsersUsersExternalIds</a>

---


### DataGoogleworkspaceUsersUsersImsList <a name="DataGoogleworkspaceUsersUsersImsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersImsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersImsOutputReference <a name="DataGoogleworkspaceUsersUsersImsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.customProtocol">custom_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.im">im</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersIms">DataGoogleworkspaceUsersUsersIms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_protocol`<sup>Required</sup> <a name="custom_protocol" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.customProtocol"></a>

```python
custom_protocol: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `im`<sup>Required</sup> <a name="im" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.im"></a>

```python
im: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersIms
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersIms">DataGoogleworkspaceUsersUsersIms</a>

---


### DataGoogleworkspaceUsersUsersKeywordsList <a name="DataGoogleworkspaceUsersUsersKeywordsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersKeywordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersKeywordsOutputReference <a name="DataGoogleworkspaceUsersUsersKeywordsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywords">DataGoogleworkspaceUsersUsersKeywords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersKeywords
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywords">DataGoogleworkspaceUsersUsersKeywords</a>

---


### DataGoogleworkspaceUsersUsersLanguagesList <a name="DataGoogleworkspaceUsersUsersLanguagesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersLanguagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersLanguagesOutputReference <a name="DataGoogleworkspaceUsersUsersLanguagesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.customLanguage">custom_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguages">DataGoogleworkspaceUsersUsersLanguages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_language`<sup>Required</sup> <a name="custom_language" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.customLanguage"></a>

```python
custom_language: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersLanguages
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguages">DataGoogleworkspaceUsersUsersLanguages</a>

---


### DataGoogleworkspaceUsersUsersList <a name="DataGoogleworkspaceUsersUsersList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersLocationsList <a name="DataGoogleworkspaceUsersUsersLocationsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersLocationsOutputReference <a name="DataGoogleworkspaceUsersUsersLocationsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.area">area</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.buildingId">building_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.deskCode">desk_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.floorName">floor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.floorSection">floor_section</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocations">DataGoogleworkspaceUsersUsersLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `area`<sup>Required</sup> <a name="area" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.area"></a>

```python
area: str
```

- *Type:* str

---

##### `building_id`<sup>Required</sup> <a name="building_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.buildingId"></a>

```python
building_id: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `desk_code`<sup>Required</sup> <a name="desk_code" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.deskCode"></a>

```python
desk_code: str
```

- *Type:* str

---

##### `floor_name`<sup>Required</sup> <a name="floor_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.floorName"></a>

```python
floor_name: str
```

- *Type:* str

---

##### `floor_section`<sup>Required</sup> <a name="floor_section" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.floorSection"></a>

```python
floor_section: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersLocations
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocations">DataGoogleworkspaceUsersUsersLocations</a>

---


### DataGoogleworkspaceUsersUsersNameList <a name="DataGoogleworkspaceUsersUsersNameList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersNameOutputReference <a name="DataGoogleworkspaceUsersUsersNameOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.familyName">family_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersName">DataGoogleworkspaceUsersUsersName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_name`<sup>Required</sup> <a name="family_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.familyName"></a>

```python
family_name: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersName
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersName">DataGoogleworkspaceUsersUsersName</a>

---


### DataGoogleworkspaceUsersUsersOrganizationsList <a name="DataGoogleworkspaceUsersUsersOrganizationsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersOrganizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersOrganizationsOutputReference <a name="DataGoogleworkspaceUsersUsersOrganizationsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.costCenter">cost_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.department">department</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.fullTimeEquivalent">full_time_equivalent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.symbol">symbol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizations">DataGoogleworkspaceUsersUsersOrganizations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_center`<sup>Required</sup> <a name="cost_center" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.costCenter"></a>

```python
cost_center: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.department"></a>

```python
department: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `full_time_equivalent`<sup>Required</sup> <a name="full_time_equivalent" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.fullTimeEquivalent"></a>

```python
full_time_equivalent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `symbol`<sup>Required</sup> <a name="symbol" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.symbol"></a>

```python
symbol: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersOrganizations
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizations">DataGoogleworkspaceUsersUsersOrganizations</a>

---


### DataGoogleworkspaceUsersUsersOutputReference <a name="DataGoogleworkspaceUsersUsersOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList">DataGoogleworkspaceUsersUsersAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.agreedToTerms">agreed_to_terms</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.archived">archived</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.changePasswordAtNextLogin">change_password_at_next_login</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.customerId">customer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.customSchemas">custom_schemas</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList">DataGoogleworkspaceUsersUsersCustomSchemasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.deletionTime">deletion_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.emails">emails</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList">DataGoogleworkspaceUsersUsersEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.externalIds">external_ids</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList">DataGoogleworkspaceUsersUsersExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.hashFunction">hash_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.ims">ims</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList">DataGoogleworkspaceUsersUsersImsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.includeInGlobalAddressList">include_in_global_address_list</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.ipAllowlist">ip_allowlist</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isAdmin">is_admin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isDelegatedAdmin">is_delegated_admin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isEnforcedIn2StepVerification">is_enforced_in2_step_verification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isEnrolledIn2StepVerification">is_enrolled_in2_step_verification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isMailboxSetup">is_mailbox_setup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.keywords">keywords</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList">DataGoogleworkspaceUsersUsersKeywordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.languages">languages</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList">DataGoogleworkspaceUsersUsersLanguagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.lastLoginTime">last_login_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList">DataGoogleworkspaceUsersUsersLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.name">name</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList">DataGoogleworkspaceUsersUsersNameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.nonEditableAliases">non_editable_aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.organizations">organizations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList">DataGoogleworkspaceUsersUsersOrganizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.orgUnitPath">org_unit_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.phones">phones</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList">DataGoogleworkspaceUsersUsersPhonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.posixAccounts">posix_accounts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList">DataGoogleworkspaceUsersUsersPosixAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.primaryEmail">primary_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.recoveryEmail">recovery_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.recoveryPhone">recovery_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.relations">relations</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList">DataGoogleworkspaceUsersUsersRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.sshPublicKeys">ssh_public_keys</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList">DataGoogleworkspaceUsersUsersSshPublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.suspended">suspended</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.suspensionReason">suspension_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.thumbnailPhotoEtag">thumbnail_photo_etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.thumbnailPhotoUrl">thumbnail_photo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.websites">websites</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList">DataGoogleworkspaceUsersUsersWebsitesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsers">DataGoogleworkspaceUsersUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.addresses"></a>

```python
addresses: DataGoogleworkspaceUsersUsersAddressesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersAddressesList">DataGoogleworkspaceUsersUsersAddressesList</a>

---

##### `agreed_to_terms`<sup>Required</sup> <a name="agreed_to_terms" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.agreedToTerms"></a>

```python
agreed_to_terms: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.archived"></a>

```python
archived: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `change_password_at_next_login`<sup>Required</sup> <a name="change_password_at_next_login" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.changePasswordAtNextLogin"></a>

```python
change_password_at_next_login: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `customer_id`<sup>Required</sup> <a name="customer_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.customerId"></a>

```python
customer_id: str
```

- *Type:* str

---

##### `custom_schemas`<sup>Required</sup> <a name="custom_schemas" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.customSchemas"></a>

```python
custom_schemas: DataGoogleworkspaceUsersUsersCustomSchemasList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersCustomSchemasList">DataGoogleworkspaceUsersUsersCustomSchemasList</a>

---

##### `deletion_time`<sup>Required</sup> <a name="deletion_time" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.deletionTime"></a>

```python
deletion_time: str
```

- *Type:* str

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.emails"></a>

```python
emails: DataGoogleworkspaceUsersUsersEmailsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersEmailsList">DataGoogleworkspaceUsersUsersEmailsList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `external_ids`<sup>Required</sup> <a name="external_ids" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.externalIds"></a>

```python
external_ids: DataGoogleworkspaceUsersUsersExternalIdsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersExternalIdsList">DataGoogleworkspaceUsersUsersExternalIdsList</a>

---

##### `hash_function`<sup>Required</sup> <a name="hash_function" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.hashFunction"></a>

```python
hash_function: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ims`<sup>Required</sup> <a name="ims" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.ims"></a>

```python
ims: DataGoogleworkspaceUsersUsersImsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersImsList">DataGoogleworkspaceUsersUsersImsList</a>

---

##### `include_in_global_address_list`<sup>Required</sup> <a name="include_in_global_address_list" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.includeInGlobalAddressList"></a>

```python
include_in_global_address_list: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ip_allowlist`<sup>Required</sup> <a name="ip_allowlist" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.ipAllowlist"></a>

```python
ip_allowlist: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_admin`<sup>Required</sup> <a name="is_admin" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isAdmin"></a>

```python
is_admin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_delegated_admin`<sup>Required</sup> <a name="is_delegated_admin" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isDelegatedAdmin"></a>

```python
is_delegated_admin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_enforced_in2_step_verification`<sup>Required</sup> <a name="is_enforced_in2_step_verification" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isEnforcedIn2StepVerification"></a>

```python
is_enforced_in2_step_verification: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_enrolled_in2_step_verification`<sup>Required</sup> <a name="is_enrolled_in2_step_verification" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isEnrolledIn2StepVerification"></a>

```python
is_enrolled_in2_step_verification: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_mailbox_setup`<sup>Required</sup> <a name="is_mailbox_setup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.isMailboxSetup"></a>

```python
is_mailbox_setup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.keywords"></a>

```python
keywords: DataGoogleworkspaceUsersUsersKeywordsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersKeywordsList">DataGoogleworkspaceUsersUsersKeywordsList</a>

---

##### `languages`<sup>Required</sup> <a name="languages" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.languages"></a>

```python
languages: DataGoogleworkspaceUsersUsersLanguagesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLanguagesList">DataGoogleworkspaceUsersUsersLanguagesList</a>

---

##### `last_login_time`<sup>Required</sup> <a name="last_login_time" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.lastLoginTime"></a>

```python
last_login_time: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.locations"></a>

```python
locations: DataGoogleworkspaceUsersUsersLocationsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersLocationsList">DataGoogleworkspaceUsersUsersLocationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.name"></a>

```python
name: DataGoogleworkspaceUsersUsersNameList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersNameList">DataGoogleworkspaceUsersUsersNameList</a>

---

##### `non_editable_aliases`<sup>Required</sup> <a name="non_editable_aliases" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.nonEditableAliases"></a>

```python
non_editable_aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizations`<sup>Required</sup> <a name="organizations" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.organizations"></a>

```python
organizations: DataGoogleworkspaceUsersUsersOrganizationsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOrganizationsList">DataGoogleworkspaceUsersUsersOrganizationsList</a>

---

##### `org_unit_path`<sup>Required</sup> <a name="org_unit_path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.orgUnitPath"></a>

```python
org_unit_path: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `phones`<sup>Required</sup> <a name="phones" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.phones"></a>

```python
phones: DataGoogleworkspaceUsersUsersPhonesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList">DataGoogleworkspaceUsersUsersPhonesList</a>

---

##### `posix_accounts`<sup>Required</sup> <a name="posix_accounts" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.posixAccounts"></a>

```python
posix_accounts: DataGoogleworkspaceUsersUsersPosixAccountsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList">DataGoogleworkspaceUsersUsersPosixAccountsList</a>

---

##### `primary_email`<sup>Required</sup> <a name="primary_email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.primaryEmail"></a>

```python
primary_email: str
```

- *Type:* str

---

##### `recovery_email`<sup>Required</sup> <a name="recovery_email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.recoveryEmail"></a>

```python
recovery_email: str
```

- *Type:* str

---

##### `recovery_phone`<sup>Required</sup> <a name="recovery_phone" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.recoveryPhone"></a>

```python
recovery_phone: str
```

- *Type:* str

---

##### `relations`<sup>Required</sup> <a name="relations" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.relations"></a>

```python
relations: DataGoogleworkspaceUsersUsersRelationsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList">DataGoogleworkspaceUsersUsersRelationsList</a>

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.sshPublicKeys"></a>

```python
ssh_public_keys: DataGoogleworkspaceUsersUsersSshPublicKeysList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList">DataGoogleworkspaceUsersUsersSshPublicKeysList</a>

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.suspended"></a>

```python
suspended: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `suspension_reason`<sup>Required</sup> <a name="suspension_reason" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.suspensionReason"></a>

```python
suspension_reason: str
```

- *Type:* str

---

##### `thumbnail_photo_etag`<sup>Required</sup> <a name="thumbnail_photo_etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.thumbnailPhotoEtag"></a>

```python
thumbnail_photo_etag: str
```

- *Type:* str

---

##### `thumbnail_photo_url`<sup>Required</sup> <a name="thumbnail_photo_url" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.thumbnailPhotoUrl"></a>

```python
thumbnail_photo_url: str
```

- *Type:* str

---

##### `websites`<sup>Required</sup> <a name="websites" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.websites"></a>

```python
websites: DataGoogleworkspaceUsersUsersWebsitesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList">DataGoogleworkspaceUsersUsersWebsitesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsers
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsers">DataGoogleworkspaceUsersUsers</a>

---


### DataGoogleworkspaceUsersUsersPhonesList <a name="DataGoogleworkspaceUsersUsersPhonesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersPhonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersPhonesOutputReference <a name="DataGoogleworkspaceUsersUsersPhonesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhones">DataGoogleworkspaceUsersUsersPhones</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhonesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersPhones
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPhones">DataGoogleworkspaceUsersUsersPhones</a>

---


### DataGoogleworkspaceUsersUsersPosixAccountsList <a name="DataGoogleworkspaceUsersUsersPosixAccountsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersPosixAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersPosixAccountsOutputReference <a name="DataGoogleworkspaceUsersUsersPosixAccountsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.gecos">gecos</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.gid">gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.homeDirectory">home_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.operatingSystemType">operating_system_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.shell">shell</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.systemId">system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccounts">DataGoogleworkspaceUsersUsersPosixAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `gecos`<sup>Required</sup> <a name="gecos" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.gecos"></a>

```python
gecos: str
```

- *Type:* str

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.gid"></a>

```python
gid: str
```

- *Type:* str

---

##### `home_directory`<sup>Required</sup> <a name="home_directory" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.homeDirectory"></a>

```python
home_directory: str
```

- *Type:* str

---

##### `operating_system_type`<sup>Required</sup> <a name="operating_system_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.operatingSystemType"></a>

```python
operating_system_type: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.shell"></a>

```python
shell: str
```

- *Type:* str

---

##### `system_id`<sup>Required</sup> <a name="system_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.systemId"></a>

```python
system_id: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccountsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersPosixAccounts
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersPosixAccounts">DataGoogleworkspaceUsersUsersPosixAccounts</a>

---


### DataGoogleworkspaceUsersUsersRelationsList <a name="DataGoogleworkspaceUsersUsersRelationsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersRelationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersRelationsOutputReference <a name="DataGoogleworkspaceUsersUsersRelationsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelations">DataGoogleworkspaceUsersUsersRelations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelationsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersRelations
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersRelations">DataGoogleworkspaceUsersUsersRelations</a>

---


### DataGoogleworkspaceUsersUsersSshPublicKeysList <a name="DataGoogleworkspaceUsersUsersSshPublicKeysList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference <a name="DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.expirationTimeUsec">expiration_time_usec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeys">DataGoogleworkspaceUsersUsersSshPublicKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_time_usec`<sup>Required</sup> <a name="expiration_time_usec" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.expirationTimeUsec"></a>

```python
expiration_time_usec: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersSshPublicKeys
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersSshPublicKeys">DataGoogleworkspaceUsersUsersSshPublicKeys</a>

---


### DataGoogleworkspaceUsersUsersWebsitesList <a name="DataGoogleworkspaceUsersUsersWebsitesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceUsersUsersWebsitesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceUsersUsersWebsitesOutputReference <a name="DataGoogleworkspaceUsersUsersWebsitesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_users

dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.customType">custom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsites">DataGoogleworkspaceUsersUsersWebsites</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_type`<sup>Required</sup> <a name="custom_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.customType"></a>

```python
custom_type: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsitesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceUsersUsersWebsites
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceUsers.DataGoogleworkspaceUsersUsersWebsites">DataGoogleworkspaceUsersUsersWebsites</a>

---



