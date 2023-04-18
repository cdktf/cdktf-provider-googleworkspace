# `data_googleworkspace_group_settings`

Refer to the Terraform Registory for docs: [`data_googleworkspace_group_settings`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings).

# `dataGoogleworkspaceGroupSettings` Submodule <a name="`dataGoogleworkspaceGroupSettings` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceGroupSettings <a name="DataGoogleworkspaceGroupSettings" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings googleworkspace_group_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.data_googleworkspace_group_settings.DataGoogleworkspaceGroupSettings;

DataGoogleworkspaceGroupSettings.Builder.create(Construct scope, java.lang.String id)
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
    .email(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | The group's email address. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.email"></a>

- *Type:* java.lang.String

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings#email DataGoogleworkspaceGroupSettings#email}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.data_googleworkspace_group_settings.DataGoogleworkspaceGroupSettings;

DataGoogleworkspaceGroupSettings.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.data_googleworkspace_group_settings.DataGoogleworkspaceGroupSettings;

DataGoogleworkspaceGroupSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.data_googleworkspace_group_settings.DataGoogleworkspaceGroupSettings;

DataGoogleworkspaceGroupSettings.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowExternalMembers">allowExternalMembers</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowWebPosting">allowWebPosting</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.archiveOnly">archiveOnly</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customFooterText">customFooterText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customReplyTo">customReplyTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customRolesEnabledForSettingsToBeMerged">customRolesEnabledForSettingsToBeMerged</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.defaultMessageDenyNotificationText">defaultMessageDenyNotificationText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.enableCollaborativeInbox">enableCollaborativeInbox</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeCustomFooter">includeCustomFooter</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeInGlobalAddressList">includeInGlobalAddressList</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.isArchived">isArchived</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.membersCanPostAsTheGroup">membersCanPostAsTheGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.messageModerationLevel">messageModerationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.primaryLanguage">primaryLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.replyTo">replyTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.sendMessageDenyNotification">sendMessageDenyNotification</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.spamModerationLevel">spamModerationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanAssistContent">whoCanAssistContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanContactOwner">whoCanContactOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanDiscoverGroup">whoCanDiscoverGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanJoin">whoCanJoin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanLeaveGroup">whoCanLeaveGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateContent">whoCanModerateContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateMembers">whoCanModerateMembers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanPostMessage">whoCanPostMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewGroup">whoCanViewGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewMembership">whoCanViewMembership</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allowExternalMembers`<sup>Required</sup> <a name="allowExternalMembers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowExternalMembers"></a>

```java
public IResolvable getAllowExternalMembers();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowWebPosting`<sup>Required</sup> <a name="allowWebPosting" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowWebPosting"></a>

```java
public IResolvable getAllowWebPosting();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `archiveOnly`<sup>Required</sup> <a name="archiveOnly" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.archiveOnly"></a>

```java
public IResolvable getArchiveOnly();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `customFooterText`<sup>Required</sup> <a name="customFooterText" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customFooterText"></a>

```java
public java.lang.String getCustomFooterText();
```

- *Type:* java.lang.String

---

##### `customReplyTo`<sup>Required</sup> <a name="customReplyTo" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customReplyTo"></a>

```java
public java.lang.String getCustomReplyTo();
```

- *Type:* java.lang.String

---

##### `customRolesEnabledForSettingsToBeMerged`<sup>Required</sup> <a name="customRolesEnabledForSettingsToBeMerged" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customRolesEnabledForSettingsToBeMerged"></a>

```java
public IResolvable getCustomRolesEnabledForSettingsToBeMerged();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `defaultMessageDenyNotificationText`<sup>Required</sup> <a name="defaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.defaultMessageDenyNotificationText"></a>

```java
public java.lang.String getDefaultMessageDenyNotificationText();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableCollaborativeInbox`<sup>Required</sup> <a name="enableCollaborativeInbox" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.enableCollaborativeInbox"></a>

```java
public IResolvable getEnableCollaborativeInbox();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeCustomFooter`<sup>Required</sup> <a name="includeCustomFooter" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeCustomFooter"></a>

```java
public IResolvable getIncludeCustomFooter();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `includeInGlobalAddressList`<sup>Required</sup> <a name="includeInGlobalAddressList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeInGlobalAddressList"></a>

```java
public IResolvable getIncludeInGlobalAddressList();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isArchived`<sup>Required</sup> <a name="isArchived" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.isArchived"></a>

```java
public IResolvable getIsArchived();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `membersCanPostAsTheGroup`<sup>Required</sup> <a name="membersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.membersCanPostAsTheGroup"></a>

```java
public IResolvable getMembersCanPostAsTheGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `messageModerationLevel`<sup>Required</sup> <a name="messageModerationLevel" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.messageModerationLevel"></a>

```java
public java.lang.String getMessageModerationLevel();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primaryLanguage`<sup>Required</sup> <a name="primaryLanguage" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.primaryLanguage"></a>

```java
public java.lang.String getPrimaryLanguage();
```

- *Type:* java.lang.String

---

##### `replyTo`<sup>Required</sup> <a name="replyTo" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.replyTo"></a>

```java
public java.lang.String getReplyTo();
```

- *Type:* java.lang.String

---

##### `sendMessageDenyNotification`<sup>Required</sup> <a name="sendMessageDenyNotification" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.sendMessageDenyNotification"></a>

```java
public IResolvable getSendMessageDenyNotification();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `spamModerationLevel`<sup>Required</sup> <a name="spamModerationLevel" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.spamModerationLevel"></a>

```java
public java.lang.String getSpamModerationLevel();
```

- *Type:* java.lang.String

---

##### `whoCanAssistContent`<sup>Required</sup> <a name="whoCanAssistContent" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanAssistContent"></a>

```java
public java.lang.String getWhoCanAssistContent();
```

- *Type:* java.lang.String

---

##### `whoCanContactOwner`<sup>Required</sup> <a name="whoCanContactOwner" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanContactOwner"></a>

```java
public java.lang.String getWhoCanContactOwner();
```

- *Type:* java.lang.String

---

##### `whoCanDiscoverGroup`<sup>Required</sup> <a name="whoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanDiscoverGroup"></a>

```java
public java.lang.String getWhoCanDiscoverGroup();
```

- *Type:* java.lang.String

---

##### `whoCanJoin`<sup>Required</sup> <a name="whoCanJoin" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanJoin"></a>

```java
public java.lang.String getWhoCanJoin();
```

- *Type:* java.lang.String

---

##### `whoCanLeaveGroup`<sup>Required</sup> <a name="whoCanLeaveGroup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanLeaveGroup"></a>

```java
public java.lang.String getWhoCanLeaveGroup();
```

- *Type:* java.lang.String

---

##### `whoCanModerateContent`<sup>Required</sup> <a name="whoCanModerateContent" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateContent"></a>

```java
public java.lang.String getWhoCanModerateContent();
```

- *Type:* java.lang.String

---

##### `whoCanModerateMembers`<sup>Required</sup> <a name="whoCanModerateMembers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateMembers"></a>

```java
public java.lang.String getWhoCanModerateMembers();
```

- *Type:* java.lang.String

---

##### `whoCanPostMessage`<sup>Required</sup> <a name="whoCanPostMessage" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanPostMessage"></a>

```java
public java.lang.String getWhoCanPostMessage();
```

- *Type:* java.lang.String

---

##### `whoCanViewGroup`<sup>Required</sup> <a name="whoCanViewGroup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewGroup"></a>

```java
public java.lang.String getWhoCanViewGroup();
```

- *Type:* java.lang.String

---

##### `whoCanViewMembership`<sup>Required</sup> <a name="whoCanViewMembership" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewMembership"></a>

```java
public java.lang.String getWhoCanViewMembership();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceGroupSettingsConfig <a name="DataGoogleworkspaceGroupSettingsConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.data_googleworkspace_group_settings.DataGoogleworkspaceGroupSettingsConfig;

DataGoogleworkspaceGroupSettingsConfig.builder()
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
    .email(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.email">email</a></code> | <code>java.lang.String</code> | The group's email address. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings#email DataGoogleworkspaceGroupSettings#email}

---



