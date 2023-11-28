# `chromePolicy` Submodule <a name="`chromePolicy` Submodule" id="@cdktf/provider-googleworkspace.chromePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChromePolicy <a name="ChromePolicy" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/chrome_policy googleworkspace_chrome_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import chrome_policy

chromePolicy.ChromePolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  org_unit_id: str,
  policies: typing.Union[IResolvable, typing.List[ChromePolicyPolicies]],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.orgUnitId">org_unit_id</a></code> | <code>str</code> | The target org unit on which this policy is applied. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.policies">policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies">ChromePolicyPolicies</a>]]</code> | policies block. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/chrome_policy#id ChromePolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org_unit_id`<sup>Required</sup> <a name="org_unit_id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.orgUnitId"></a>

- *Type:* str

The target org unit on which this policy is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/chrome_policy#org_unit_id ChromePolicy#org_unit_id}

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.policies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies">ChromePolicyPolicies</a>]]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/chrome_policy#policies ChromePolicy#policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/chrome_policy#id ChromePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.putPolicies">put_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_policies` <a name="put_policies" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.putPolicies"></a>

```python
def put_policies(
  value: typing.Union[IResolvable, typing.List[ChromePolicyPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.putPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies">ChromePolicyPolicies</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ChromePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import chrome_policy

chromePolicy.ChromePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import chrome_policy

chromePolicy.ChromePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_googleworkspace import chrome_policy

chromePolicy.ChromePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_googleworkspace import chrome_policy

chromePolicy.ChromePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ChromePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChromePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChromePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/chrome_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChromePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList">ChromePolicyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.orgUnitIdInput">org_unit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.policiesInput">policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies">ChromePolicyPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.orgUnitId">org_unit_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.policies"></a>

```python
policies: ChromePolicyPoliciesList
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList">ChromePolicyPoliciesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_unit_id_input`<sup>Optional</sup> <a name="org_unit_id_input" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.orgUnitIdInput"></a>

```python
org_unit_id_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.policiesInput"></a>

```python
policies_input: typing.Union[IResolvable, typing.List[ChromePolicyPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies">ChromePolicyPolicies</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_unit_id`<sup>Required</sup> <a name="org_unit_id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.orgUnitId"></a>

```python
org_unit_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChromePolicyConfig <a name="ChromePolicyConfig" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import chrome_policy

chromePolicy.ChromePolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  org_unit_id: str,
  policies: typing.Union[IResolvable, typing.List[ChromePolicyPolicies]],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.orgUnitId">org_unit_id</a></code> | <code>str</code> | The target org unit on which this policy is applied. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.policies">policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies">ChromePolicyPolicies</a>]]</code> | policies block. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/chrome_policy#id ChromePolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org_unit_id`<sup>Required</sup> <a name="org_unit_id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.orgUnitId"></a>

```python
org_unit_id: str
```

- *Type:* str

The target org unit on which this policy is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/chrome_policy#org_unit_id ChromePolicy#org_unit_id}

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.policies"></a>

```python
policies: typing.Union[IResolvable, typing.List[ChromePolicyPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies">ChromePolicyPolicies</a>]]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/chrome_policy#policies ChromePolicy#policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/chrome_policy#id ChromePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChromePolicyPolicies <a name="ChromePolicyPolicies" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import chrome_policy

chromePolicy.ChromePolicyPolicies(
  schema_name: str,
  schema_values: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies.property.schemaName">schema_name</a></code> | <code>str</code> | The full qualified name of the policy schema. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies.property.schemaValues">schema_values</a></code> | <code>typing.Mapping[str]</code> | JSON encoded map that represents key/value pairs that correspond to the given schema. |

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The full qualified name of the policy schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/chrome_policy#schema_name ChromePolicy#schema_name}

---

##### `schema_values`<sup>Required</sup> <a name="schema_values" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies.property.schemaValues"></a>

```python
schema_values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

JSON encoded map that represents key/value pairs that correspond to the given schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/chrome_policy#schema_values ChromePolicy#schema_values}

---

## Classes <a name="Classes" id="Classes"></a>

### ChromePolicyPoliciesList <a name="ChromePolicyPoliciesList" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import chrome_policy

chromePolicy.ChromePolicyPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChromePolicyPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies">ChromePolicyPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ChromePolicyPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies">ChromePolicyPolicies</a>]]

---


### ChromePolicyPoliciesOutputReference <a name="ChromePolicyPoliciesOutputReference" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import chrome_policy

chromePolicy.ChromePolicyPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.schemaValuesInput">schema_values_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.schemaValues">schema_values</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies">ChromePolicyPolicies</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `schema_values_input`<sup>Optional</sup> <a name="schema_values_input" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.schemaValuesInput"></a>

```python
schema_values_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `schema_values`<sup>Required</sup> <a name="schema_values" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.schemaValues"></a>

```python
schema_values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ChromePolicyPolicies, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-googleworkspace.chromePolicy.ChromePolicyPolicies">ChromePolicyPolicies</a>, cdktf.IResolvable]

---



