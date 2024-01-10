# `dataGoogleworkspaceChromePolicySchema` Submodule <a name="`dataGoogleworkspaceChromePolicySchema` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceChromePolicySchema <a name="DataGoogleworkspaceChromePolicySchema" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema googleworkspace_chrome_policy_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  schema_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | The full qualified name of the policy schema. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#id DataGoogleworkspaceChromePolicySchema#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.schemaName"></a>

- *Type:* str

The full qualified name of the policy schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#schema_name DataGoogleworkspaceChromePolicySchema#schema_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#id DataGoogleworkspaceChromePolicySchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleworkspaceChromePolicySchema resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleworkspaceChromePolicySchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleworkspaceChromePolicySchema to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleworkspaceChromePolicySchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleworkspaceChromePolicySchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.accessRestrictions">access_restrictions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.additionalTargetKeyNames">additional_target_key_names</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList">DataGoogleworkspaceChromePolicySchemaDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fieldDescriptions">field_descriptions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.notices">notices</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList">DataGoogleworkspaceChromePolicySchemaNoticesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.policyDescription">policy_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.supportUri">support_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_restrictions`<sup>Required</sup> <a name="access_restrictions" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.accessRestrictions"></a>

```python
access_restrictions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_target_key_names`<sup>Required</sup> <a name="additional_target_key_names" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.additionalTargetKeyNames"></a>

```python
additional_target_key_names: DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList</a>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.definition"></a>

```python
definition: DataGoogleworkspaceChromePolicySchemaDefinitionList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList">DataGoogleworkspaceChromePolicySchemaDefinitionList</a>

---

##### `field_descriptions`<sup>Required</sup> <a name="field_descriptions" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fieldDescriptions"></a>

```python
field_descriptions: str
```

- *Type:* str

---

##### `notices`<sup>Required</sup> <a name="notices" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.notices"></a>

```python
notices: DataGoogleworkspaceChromePolicySchemaNoticesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList">DataGoogleworkspaceChromePolicySchemaNoticesList</a>

---

##### `policy_description`<sup>Required</sup> <a name="policy_description" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.policyDescription"></a>

```python
policy_description: str
```

- *Type:* str

---

##### `support_uri`<sup>Required</sup> <a name="support_uri" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.supportUri"></a>

```python
support_uri: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames <a name="DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames()
```


### DataGoogleworkspaceChromePolicySchemaConfig <a name="DataGoogleworkspaceChromePolicySchemaConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  schema_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.schemaName">schema_name</a></code> | <code>str</code> | The full qualified name of the policy schema. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#id DataGoogleworkspaceChromePolicySchema#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The full qualified name of the policy schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#schema_name DataGoogleworkspaceChromePolicySchema#schema_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#id DataGoogleworkspaceChromePolicySchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleworkspaceChromePolicySchemaDefinition <a name="DataGoogleworkspaceChromePolicySchemaDefinition" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition()
```


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumType <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType()
```


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue()
```


### DataGoogleworkspaceChromePolicySchemaNotices <a name="DataGoogleworkspaceChromePolicySchemaNotices" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList <a name="DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference <a name="DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.keyDescription">key_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `key_description`<sup>Required</sup> <a name="key_description" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.keyDescription"></a>

```python
key_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames</a>

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType">DataGoogleworkspaceChromePolicySchemaDefinitionEnumType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.value"></a>

```python
value: DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceChromePolicySchemaDefinitionEnumType
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType">DataGoogleworkspaceChromePolicySchemaDefinitionEnumType</a>

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue</a>

---


### DataGoogleworkspaceChromePolicySchemaDefinitionList <a name="DataGoogleworkspaceChromePolicySchemaDefinitionList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference <a name="DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.enumType">enum_type</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.messageType">message_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.package">package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.syntax">syntax</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition">DataGoogleworkspaceChromePolicySchemaDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enum_type`<sup>Required</sup> <a name="enum_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.enumType"></a>

```python
enum_type: DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList</a>

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.package"></a>

```python
package: str
```

- *Type:* str

---

##### `syntax`<sup>Required</sup> <a name="syntax" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.syntax"></a>

```python
syntax: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceChromePolicySchemaDefinition
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition">DataGoogleworkspaceChromePolicySchemaDefinition</a>

---


### DataGoogleworkspaceChromePolicySchemaNoticesList <a name="DataGoogleworkspaceChromePolicySchemaNoticesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleworkspaceChromePolicySchemaNoticesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleworkspaceChromePolicySchemaNoticesOutputReference <a name="DataGoogleworkspaceChromePolicySchemaNoticesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import data_googleworkspace_chrome_policy_schema

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.acknowledgementRequired">acknowledgement_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeMessage">notice_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeValue">notice_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices">DataGoogleworkspaceChromePolicySchemaNotices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acknowledgement_required`<sup>Required</sup> <a name="acknowledgement_required" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.acknowledgementRequired"></a>

```python
acknowledgement_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `notice_message`<sup>Required</sup> <a name="notice_message" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeMessage"></a>

```python
notice_message: str
```

- *Type:* str

---

##### `notice_value`<sup>Required</sup> <a name="notice_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeValue"></a>

```python
notice_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleworkspaceChromePolicySchemaNotices
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices">DataGoogleworkspaceChromePolicySchemaNotices</a>

---



