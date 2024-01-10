# `dataGoogleworkspaceGroupMember` Submodule <a name="`dataGoogleworkspaceGroupMember` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceGroupMember <a name="DataGoogleworkspaceGroupMember" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member googleworkspace_group_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.data_googleworkspace_group_member.DataGoogleworkspaceGroupMember;

DataGoogleworkspaceGroupMember.Builder.create(Construct scope, java.lang.String id)
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
    .groupId(java.lang.String)
//  .email(java.lang.String)
//  .memberId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | Identifies the group in the API request. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | The member's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.memberId">memberId</a></code> | <code>java.lang.String</code> | The unique ID of the group member. A member id can be used as a member request URI's memberKey. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

Identifies the group in the API request.

The value can be the group's email address, group alias, or the unique group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#group_id DataGoogleworkspaceGroupMember#group_id}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.email"></a>

- *Type:* java.lang.String

The member's email address.

A member can be a user or another group. This property is required when adding a member to a group. The email must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#email DataGoogleworkspaceGroupMember#email}

---

##### `memberId`<sup>Optional</sup> <a name="memberId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.Initializer.parameter.memberId"></a>

- *Type:* java.lang.String

The unique ID of the group member. A member id can be used as a member request URI's memberKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#member_id DataGoogleworkspaceGroupMember#member_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetMemberId">resetMemberId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetMemberId` <a name="resetMemberId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.resetMemberId"></a>

```java
public void resetMemberId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleworkspaceGroupMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.data_googleworkspace_group_member.DataGoogleworkspaceGroupMember;

DataGoogleworkspaceGroupMember.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.data_googleworkspace_group_member.DataGoogleworkspaceGroupMember;

DataGoogleworkspaceGroupMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.data_googleworkspace_group_member.DataGoogleworkspaceGroupMember;

DataGoogleworkspaceGroupMember.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.data_googleworkspace_group_member.DataGoogleworkspaceGroupMember;

DataGoogleworkspaceGroupMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleworkspaceGroupMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleworkspaceGroupMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleworkspaceGroupMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleworkspaceGroupMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleworkspaceGroupMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.deliverySettings">deliverySettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.memberIdInput">memberIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.memberId">memberId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `deliverySettings`<sup>Required</sup> <a name="deliverySettings" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.deliverySettings"></a>

```java
public java.lang.String getDeliverySettings();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `memberIdInput`<sup>Optional</sup> <a name="memberIdInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.memberIdInput"></a>

```java
public java.lang.String getMemberIdInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.memberId"></a>

```java
public java.lang.String getMemberId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceGroupMemberConfig <a name="DataGoogleworkspaceGroupMemberConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.data_googleworkspace_group_member.DataGoogleworkspaceGroupMemberConfig;

DataGoogleworkspaceGroupMemberConfig.builder()
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
    .groupId(java.lang.String)
//  .email(java.lang.String)
//  .memberId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Identifies the group in the API request. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.email">email</a></code> | <code>java.lang.String</code> | The member's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.memberId">memberId</a></code> | <code>java.lang.String</code> | The unique ID of the group member. A member id can be used as a member request URI's memberKey. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Identifies the group in the API request.

The value can be the group's email address, group alias, or the unique group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#group_id DataGoogleworkspaceGroupMember#group_id}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The member's email address.

A member can be a user or another group. This property is required when adding a member to a group. The email must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#email DataGoogleworkspaceGroupMember#email}

---

##### `memberId`<sup>Optional</sup> <a name="memberId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupMember.DataGoogleworkspaceGroupMemberConfig.property.memberId"></a>

```java
public java.lang.String getMemberId();
```

- *Type:* java.lang.String

The unique ID of the group member. A member id can be used as a member request URI's memberKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_member#member_id DataGoogleworkspaceGroupMember#member_id}

---



