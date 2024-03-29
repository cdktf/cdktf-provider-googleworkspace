# `dataGoogleworkspaceSchema` Submodule <a name="`dataGoogleworkspaceSchema` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceSchema <a name="DataGoogleworkspaceSchema" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/schema googleworkspace_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_schema

dataGoogleworkspaceSchema.DataGoogleworkspaceSchema(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  schema_id: str = None,
  schema_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.schemaId">schema_id</a></code> | <code>str</code> | The unique identifier of the schema. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | The schema's name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.schemaId"></a>

- *Type:* str

The unique identifier of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/schema#schema_id DataGoogleworkspaceSchema#schema_id}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.Initializer.parameter.schemaName"></a>

- *Type:* str

The schema's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/schema#schema_name DataGoogleworkspaceSchema#schema_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleworkspaceSchema resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_schema

dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_schema

dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_schema

dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_schema

dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleworkspaceSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleworkspaceSchema to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleworkspaceSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleworkspaceSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.fields">fields</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList">DataGoogleworkspaceSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.fields"></a>

```python
fields: DataGoogleworkspaceSchemaFieldsList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList">DataGoogleworkspaceSchemaFieldsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchema.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceSchemaConfig <a name="DataGoogleworkspaceSchemaConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_schema

dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  schema_id: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.schemaId">schema_id</a></code> | <code>str</code> | The unique identifier of the schema. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.schemaName">schema_name</a></code> | <code>str</code> | The schema's name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

The unique identifier of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/schema#schema_id DataGoogleworkspaceSchema#schema_id}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The schema's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/schema#schema_name DataGoogleworkspaceSchema#schema_name}

---

### DataGoogleworkspaceSchemaFields <a name="DataGoogleworkspaceSchemaFields" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFields.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_schema

dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFields()
```


### DataGoogleworkspaceSchemaFieldsNumericIndexingSpec <a name="DataGoogleworkspaceSchemaFieldsNumericIndexingSpec" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_schema

dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpec()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleworkspaceSchemaFieldsList <a name="DataGoogleworkspaceSchemaFieldsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_schema

dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList <a name="DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_schema

dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference <a name="DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_schema

dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.property.maxValue">max_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.property.minValue">min_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpec">DataGoogleworkspaceSchemaFieldsNumericIndexingSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.property.maxValue"></a>

```python
max_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.property.minValue"></a>

```python
min_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceSchemaFieldsNumericIndexingSpec
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpec">DataGoogleworkspaceSchemaFieldsNumericIndexingSpec</a>

---


### DataGoogleworkspaceSchemaFieldsOutputReference <a name="DataGoogleworkspaceSchemaFieldsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_schema

dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.fieldId">field_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.fieldType">field_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.indexed">indexed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.multiValued">multi_valued</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.numericIndexingSpec">numeric_indexing_spec</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList">DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.readAccessType">read_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFields">DataGoogleworkspaceSchemaFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `field_type`<sup>Required</sup> <a name="field_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.fieldType"></a>

```python
field_type: str
```

- *Type:* str

---

##### `indexed`<sup>Required</sup> <a name="indexed" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.indexed"></a>

```python
indexed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `multi_valued`<sup>Required</sup> <a name="multi_valued" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.multiValued"></a>

```python
multi_valued: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `numeric_indexing_spec`<sup>Required</sup> <a name="numeric_indexing_spec" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.numericIndexingSpec"></a>

```python
numeric_indexing_spec: DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList">DataGoogleworkspaceSchemaFieldsNumericIndexingSpecList</a>

---

##### `read_access_type`<sup>Required</sup> <a name="read_access_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.readAccessType"></a>

```python
read_access_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceSchemaFields
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceSchema.DataGoogleworkspaceSchemaFields">DataGoogleworkspaceSchemaFields</a>

---



