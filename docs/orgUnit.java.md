# `orgUnit` Submodule <a name="`orgUnit` Submodule" id="@cdktf/provider-googleworkspace.orgUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgUnit <a name="OrgUnit" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/org_unit googleworkspace_org_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.org_unit.OrgUnit;

OrgUnit.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .blockInheritance(java.lang.Boolean)
//  .blockInheritance(IResolvable)
//  .description(java.lang.String)
//  .parentOrgUnitId(java.lang.String)
//  .parentOrgUnitPath(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.blockInheritance">blockInheritance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the organizational unit. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.parentOrgUnitId">parentOrgUnitId</a></code> | <code>java.lang.String</code> | The unique ID of the parent organizational unit. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.parentOrgUnitPath">parentOrgUnitPath</a></code> | <code>java.lang.String</code> | The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/org_unit#name OrgUnit#name}

---

##### `blockInheritance`<sup>Optional</sup> <a name="blockInheritance" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.blockInheritance"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`.

Determines if a sub-organizational unit can inherit the settings of the parent organization. False means a sub-organizational unit inherits the settings of the nearest parent organizational unit. For more information on inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/org_unit#block_inheritance OrgUnit#block_inheritance}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/org_unit#description OrgUnit#description}

---

##### `parentOrgUnitId`<sup>Optional</sup> <a name="parentOrgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.parentOrgUnitId"></a>

- *Type:* java.lang.String

The unique ID of the parent organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/org_unit#parent_org_unit_id OrgUnit#parent_org_unit_id}

---

##### `parentOrgUnitPath`<sup>Optional</sup> <a name="parentOrgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.parentOrgUnitPath"></a>

- *Type:* java.lang.String

The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/org_unit#parent_org_unit_path OrgUnit#parent_org_unit_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetBlockInheritance">resetBlockInheritance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetParentOrgUnitId">resetParentOrgUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetParentOrgUnitPath">resetParentOrgUnitPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBlockInheritance` <a name="resetBlockInheritance" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetBlockInheritance"></a>

```java
public void resetBlockInheritance()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetParentOrgUnitId` <a name="resetParentOrgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetParentOrgUnitId"></a>

```java
public void resetParentOrgUnitId()
```

##### `resetParentOrgUnitPath` <a name="resetParentOrgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetParentOrgUnitPath"></a>

```java
public void resetParentOrgUnitPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrgUnit resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.org_unit.OrgUnit;

OrgUnit.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.org_unit.OrgUnit;

OrgUnit.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.org_unit.OrgUnit;

OrgUnit.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.org_unit.OrgUnit;

OrgUnit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OrgUnit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OrgUnit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OrgUnit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OrgUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/org_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OrgUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.orgUnitId">orgUnitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.orgUnitPath">orgUnitPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.blockInheritanceInput">blockInheritanceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitIdInput">parentOrgUnitIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitPathInput">parentOrgUnitPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.blockInheritance">blockInheritance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitId">parentOrgUnitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitPath">parentOrgUnitPath</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `orgUnitId`<sup>Required</sup> <a name="orgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.orgUnitId"></a>

```java
public java.lang.String getOrgUnitId();
```

- *Type:* java.lang.String

---

##### `orgUnitPath`<sup>Required</sup> <a name="orgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.orgUnitPath"></a>

```java
public java.lang.String getOrgUnitPath();
```

- *Type:* java.lang.String

---

##### `blockInheritanceInput`<sup>Optional</sup> <a name="blockInheritanceInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.blockInheritanceInput"></a>

```java
public java.lang.Object getBlockInheritanceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentOrgUnitIdInput`<sup>Optional</sup> <a name="parentOrgUnitIdInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitIdInput"></a>

```java
public java.lang.String getParentOrgUnitIdInput();
```

- *Type:* java.lang.String

---

##### `parentOrgUnitPathInput`<sup>Optional</sup> <a name="parentOrgUnitPathInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitPathInput"></a>

```java
public java.lang.String getParentOrgUnitPathInput();
```

- *Type:* java.lang.String

---

##### `blockInheritance`<sup>Required</sup> <a name="blockInheritance" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.blockInheritance"></a>

```java
public java.lang.Object getBlockInheritance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentOrgUnitId`<sup>Required</sup> <a name="parentOrgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitId"></a>

```java
public java.lang.String getParentOrgUnitId();
```

- *Type:* java.lang.String

---

##### `parentOrgUnitPath`<sup>Required</sup> <a name="parentOrgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitPath"></a>

```java
public java.lang.String getParentOrgUnitPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrgUnitConfig <a name="OrgUnitConfig" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.org_unit.OrgUnitConfig;

OrgUnitConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .blockInheritance(java.lang.Boolean)
//  .blockInheritance(IResolvable)
//  .description(java.lang.String)
//  .parentOrgUnitId(java.lang.String)
//  .parentOrgUnitPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.name">name</a></code> | <code>java.lang.String</code> | The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.blockInheritance">blockInheritance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the organizational unit. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.parentOrgUnitId">parentOrgUnitId</a></code> | <code>java.lang.String</code> | The unique ID of the parent organizational unit. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.parentOrgUnitPath">parentOrgUnitPath</a></code> | <code>java.lang.String</code> | The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/org_unit#name OrgUnit#name}

---

##### `blockInheritance`<sup>Optional</sup> <a name="blockInheritance" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.blockInheritance"></a>

```java
public java.lang.Object getBlockInheritance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`.

Determines if a sub-organizational unit can inherit the settings of the parent organization. False means a sub-organizational unit inherits the settings of the nearest parent organizational unit. For more information on inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/org_unit#block_inheritance OrgUnit#block_inheritance}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/org_unit#description OrgUnit#description}

---

##### `parentOrgUnitId`<sup>Optional</sup> <a name="parentOrgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.parentOrgUnitId"></a>

```java
public java.lang.String getParentOrgUnitId();
```

- *Type:* java.lang.String

The unique ID of the parent organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/org_unit#parent_org_unit_id OrgUnit#parent_org_unit_id}

---

##### `parentOrgUnitPath`<sup>Optional</sup> <a name="parentOrgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.parentOrgUnitPath"></a>

```java
public java.lang.String getParentOrgUnitPath();
```

- *Type:* java.lang.String

The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/org_unit#parent_org_unit_path OrgUnit#parent_org_unit_path}

---



