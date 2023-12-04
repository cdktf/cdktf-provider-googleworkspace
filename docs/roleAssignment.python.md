# `roleAssignment` Submodule <a name="`roleAssignment` Submodule" id="@cdktf/provider-googleworkspace.roleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RoleAssignment <a name="RoleAssignment" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment googleworkspace_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import role_assignment

roleAssignment.RoleAssignment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assigned_to: str,
  role_id: str,
  org_unit_id: str = None,
  scope_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.assignedTo">assigned_to</a></code> | <code>str</code> | The unique ID of the user this role is assigned to. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | The ID of the role that is assigned. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.orgUnitId">org_unit_id</a></code> | <code>str</code> | If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.scopeType">scope_type</a></code> | <code>str</code> | Defaults to `CUSTOMER`. The scope in which this role is assigned. Valid values are : 	- `CUSTOMER` 	- `ORG_UNIT`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assigned_to`<sup>Required</sup> <a name="assigned_to" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.assignedTo"></a>

- *Type:* str

The unique ID of the user this role is assigned to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#assigned_to RoleAssignment#assigned_to}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.roleId"></a>

- *Type:* str

The ID of the role that is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#role_id RoleAssignment#role_id}

---

##### `org_unit_id`<sup>Optional</sup> <a name="org_unit_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.orgUnitId"></a>

- *Type:* str

If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#org_unit_id RoleAssignment#org_unit_id}

---

##### `scope_type`<sup>Optional</sup> <a name="scope_type" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.Initializer.parameter.scopeType"></a>

- *Type:* str

Defaults to `CUSTOMER`. The scope in which this role is assigned. Valid values are : 	- `CUSTOMER` 	- `ORG_UNIT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#scope_type RoleAssignment#scope_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.resetOrgUnitId">reset_org_unit_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.resetScopeType">reset_scope_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_org_unit_id` <a name="reset_org_unit_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.resetOrgUnitId"></a>

```python
def reset_org_unit_id() -> None
```

##### `reset_scope_type` <a name="reset_scope_type" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.resetScopeType"></a>

```python
def reset_scope_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import role_assignment

roleAssignment.RoleAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import role_assignment

roleAssignment.RoleAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_googleworkspace import role_assignment

roleAssignment.RoleAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_googleworkspace import role_assignment

roleAssignment.RoleAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RoleAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.assignedToInput">assigned_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.orgUnitIdInput">org_unit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.scopeTypeInput">scope_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.assignedTo">assigned_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.orgUnitId">org_unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.scopeType">scope_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `assigned_to_input`<sup>Optional</sup> <a name="assigned_to_input" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.assignedToInput"></a>

```python
assigned_to_input: str
```

- *Type:* str

---

##### `org_unit_id_input`<sup>Optional</sup> <a name="org_unit_id_input" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.orgUnitIdInput"></a>

```python
org_unit_id_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `scope_type_input`<sup>Optional</sup> <a name="scope_type_input" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.scopeTypeInput"></a>

```python
scope_type_input: str
```

- *Type:* str

---

##### `assigned_to`<sup>Required</sup> <a name="assigned_to" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.assignedTo"></a>

```python
assigned_to: str
```

- *Type:* str

---

##### `org_unit_id`<sup>Required</sup> <a name="org_unit_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.orgUnitId"></a>

```python
org_unit_id: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `scope_type`<sup>Required</sup> <a name="scope_type" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.scopeType"></a>

```python
scope_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RoleAssignmentConfig <a name="RoleAssignmentConfig" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import role_assignment

roleAssignment.RoleAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assigned_to: str,
  role_id: str,
  org_unit_id: str = None,
  scope_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.assignedTo">assigned_to</a></code> | <code>str</code> | The unique ID of the user this role is assigned to. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.roleId">role_id</a></code> | <code>str</code> | The ID of the role that is assigned. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.orgUnitId">org_unit_id</a></code> | <code>str</code> | If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to. |
| <code><a href="#@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.scopeType">scope_type</a></code> | <code>str</code> | Defaults to `CUSTOMER`. The scope in which this role is assigned. Valid values are : 	- `CUSTOMER` 	- `ORG_UNIT`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assigned_to`<sup>Required</sup> <a name="assigned_to" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.assignedTo"></a>

```python
assigned_to: str
```

- *Type:* str

The unique ID of the user this role is assigned to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#assigned_to RoleAssignment#assigned_to}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

The ID of the role that is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#role_id RoleAssignment#role_id}

---

##### `org_unit_id`<sup>Optional</sup> <a name="org_unit_id" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.orgUnitId"></a>

```python
org_unit_id: str
```

- *Type:* str

If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#org_unit_id RoleAssignment#org_unit_id}

---

##### `scope_type`<sup>Optional</sup> <a name="scope_type" id="@cdktf/provider-googleworkspace.roleAssignment.RoleAssignmentConfig.property.scopeType"></a>

```python
scope_type: str
```

- *Type:* str

Defaults to `CUSTOMER`. The scope in which this role is assigned. Valid values are : 	- `CUSTOMER` 	- `ORG_UNIT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#scope_type RoleAssignment#scope_type}

---



