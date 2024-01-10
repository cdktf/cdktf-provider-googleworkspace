# `dataGoogleworkspaceGroupSettings` Submodule <a name="`dataGoogleworkspaceGroupSettings` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceGroupSettings <a name="DataGoogleworkspaceGroupSettings" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings googleworkspace_group_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_settings

dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.email">email</a></code> | <code>str</code> | The group's email address. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.email"></a>

- *Type:* str

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings#email DataGoogleworkspaceGroupSettings#email}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleworkspaceGroupSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_settings

dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_settings

dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_settings

dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_settings

dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleworkspaceGroupSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleworkspaceGroupSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleworkspaceGroupSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleworkspaceGroupSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowExternalMembers">allow_external_members</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowWebPosting">allow_web_posting</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.archiveOnly">archive_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customFooterText">custom_footer_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customReplyTo">custom_reply_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customRolesEnabledForSettingsToBeMerged">custom_roles_enabled_for_settings_to_be_merged</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.defaultMessageDenyNotificationText">default_message_deny_notification_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.enableCollaborativeInbox">enable_collaborative_inbox</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeCustomFooter">include_custom_footer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeInGlobalAddressList">include_in_global_address_list</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.isArchived">is_archived</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.membersCanPostAsTheGroup">members_can_post_as_the_group</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.messageModerationLevel">message_moderation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.primaryLanguage">primary_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.replyTo">reply_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.sendMessageDenyNotification">send_message_deny_notification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.spamModerationLevel">spam_moderation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanAssistContent">who_can_assist_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanContactOwner">who_can_contact_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanDiscoverGroup">who_can_discover_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanJoin">who_can_join</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanLeaveGroup">who_can_leave_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateContent">who_can_moderate_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateMembers">who_can_moderate_members</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanPostMessage">who_can_post_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewGroup">who_can_view_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewMembership">who_can_view_membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.email">email</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allow_external_members`<sup>Required</sup> <a name="allow_external_members" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowExternalMembers"></a>

```python
allow_external_members: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_web_posting`<sup>Required</sup> <a name="allow_web_posting" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowWebPosting"></a>

```python
allow_web_posting: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `archive_only`<sup>Required</sup> <a name="archive_only" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.archiveOnly"></a>

```python
archive_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `custom_footer_text`<sup>Required</sup> <a name="custom_footer_text" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customFooterText"></a>

```python
custom_footer_text: str
```

- *Type:* str

---

##### `custom_reply_to`<sup>Required</sup> <a name="custom_reply_to" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customReplyTo"></a>

```python
custom_reply_to: str
```

- *Type:* str

---

##### `custom_roles_enabled_for_settings_to_be_merged`<sup>Required</sup> <a name="custom_roles_enabled_for_settings_to_be_merged" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customRolesEnabledForSettingsToBeMerged"></a>

```python
custom_roles_enabled_for_settings_to_be_merged: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `default_message_deny_notification_text`<sup>Required</sup> <a name="default_message_deny_notification_text" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.defaultMessageDenyNotificationText"></a>

```python
default_message_deny_notification_text: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_collaborative_inbox`<sup>Required</sup> <a name="enable_collaborative_inbox" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.enableCollaborativeInbox"></a>

```python
enable_collaborative_inbox: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_custom_footer`<sup>Required</sup> <a name="include_custom_footer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeCustomFooter"></a>

```python
include_custom_footer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `include_in_global_address_list`<sup>Required</sup> <a name="include_in_global_address_list" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeInGlobalAddressList"></a>

```python
include_in_global_address_list: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_archived`<sup>Required</sup> <a name="is_archived" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.isArchived"></a>

```python
is_archived: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `members_can_post_as_the_group`<sup>Required</sup> <a name="members_can_post_as_the_group" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.membersCanPostAsTheGroup"></a>

```python
members_can_post_as_the_group: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `message_moderation_level`<sup>Required</sup> <a name="message_moderation_level" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.messageModerationLevel"></a>

```python
message_moderation_level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary_language`<sup>Required</sup> <a name="primary_language" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.primaryLanguage"></a>

```python
primary_language: str
```

- *Type:* str

---

##### `reply_to`<sup>Required</sup> <a name="reply_to" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.replyTo"></a>

```python
reply_to: str
```

- *Type:* str

---

##### `send_message_deny_notification`<sup>Required</sup> <a name="send_message_deny_notification" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.sendMessageDenyNotification"></a>

```python
send_message_deny_notification: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `spam_moderation_level`<sup>Required</sup> <a name="spam_moderation_level" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.spamModerationLevel"></a>

```python
spam_moderation_level: str
```

- *Type:* str

---

##### `who_can_assist_content`<sup>Required</sup> <a name="who_can_assist_content" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanAssistContent"></a>

```python
who_can_assist_content: str
```

- *Type:* str

---

##### `who_can_contact_owner`<sup>Required</sup> <a name="who_can_contact_owner" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanContactOwner"></a>

```python
who_can_contact_owner: str
```

- *Type:* str

---

##### `who_can_discover_group`<sup>Required</sup> <a name="who_can_discover_group" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanDiscoverGroup"></a>

```python
who_can_discover_group: str
```

- *Type:* str

---

##### `who_can_join`<sup>Required</sup> <a name="who_can_join" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanJoin"></a>

```python
who_can_join: str
```

- *Type:* str

---

##### `who_can_leave_group`<sup>Required</sup> <a name="who_can_leave_group" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanLeaveGroup"></a>

```python
who_can_leave_group: str
```

- *Type:* str

---

##### `who_can_moderate_content`<sup>Required</sup> <a name="who_can_moderate_content" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateContent"></a>

```python
who_can_moderate_content: str
```

- *Type:* str

---

##### `who_can_moderate_members`<sup>Required</sup> <a name="who_can_moderate_members" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateMembers"></a>

```python
who_can_moderate_members: str
```

- *Type:* str

---

##### `who_can_post_message`<sup>Required</sup> <a name="who_can_post_message" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanPostMessage"></a>

```python
who_can_post_message: str
```

- *Type:* str

---

##### `who_can_view_group`<sup>Required</sup> <a name="who_can_view_group" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewGroup"></a>

```python
who_can_view_group: str
```

- *Type:* str

---

##### `who_can_view_membership`<sup>Required</sup> <a name="who_can_view_membership" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewMembership"></a>

```python
who_can_view_membership: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.email"></a>

```python
email: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceGroupSettingsConfig <a name="DataGoogleworkspaceGroupSettingsConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_group_settings

dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.email">email</a></code> | <code>str</code> | The group's email address. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.email"></a>

```python
email: str
```

- *Type:* str

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings#email DataGoogleworkspaceGroupSettings#email}

---



