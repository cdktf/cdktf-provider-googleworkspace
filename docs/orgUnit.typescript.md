# `orgUnit` Submodule <a name="`orgUnit` Submodule" id="@cdktf/provider-googleworkspace.orgUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgUnit <a name="OrgUnit" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit"></a>

Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/r/org_unit googleworkspace_org_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer"></a>

```typescript
import { orgUnit } from '@cdktf/provider-googleworkspace'

new orgUnit.OrgUnit(scope: Construct, id: string, config: OrgUnitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig">OrgUnitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig">OrgUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetBlockInheritance">resetBlockInheritance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetParentOrgUnitId">resetParentOrgUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetParentOrgUnitPath">resetParentOrgUnitPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBlockInheritance` <a name="resetBlockInheritance" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetBlockInheritance"></a>

```typescript
public resetBlockInheritance(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetParentOrgUnitId` <a name="resetParentOrgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetParentOrgUnitId"></a>

```typescript
public resetParentOrgUnitId(): void
```

##### `resetParentOrgUnitPath` <a name="resetParentOrgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.resetParentOrgUnitPath"></a>

```typescript
public resetParentOrgUnitPath(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isConstruct"></a>

```typescript
import { orgUnit } from '@cdktf/provider-googleworkspace'

orgUnit.OrgUnit.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformElement"></a>

```typescript
import { orgUnit } from '@cdktf/provider-googleworkspace'

orgUnit.OrgUnit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformResource"></a>

```typescript
import { orgUnit } from '@cdktf/provider-googleworkspace'

orgUnit.OrgUnit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.orgUnitId">orgUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.orgUnitPath">orgUnitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.blockInheritanceInput">blockInheritanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitIdInput">parentOrgUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitPathInput">parentOrgUnitPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.blockInheritance">blockInheritance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitId">parentOrgUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitPath">parentOrgUnitPath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgUnitId`<sup>Required</sup> <a name="orgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.orgUnitId"></a>

```typescript
public readonly orgUnitId: string;
```

- *Type:* string

---

##### `orgUnitPath`<sup>Required</sup> <a name="orgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.orgUnitPath"></a>

```typescript
public readonly orgUnitPath: string;
```

- *Type:* string

---

##### `blockInheritanceInput`<sup>Optional</sup> <a name="blockInheritanceInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.blockInheritanceInput"></a>

```typescript
public readonly blockInheritanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentOrgUnitIdInput`<sup>Optional</sup> <a name="parentOrgUnitIdInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitIdInput"></a>

```typescript
public readonly parentOrgUnitIdInput: string;
```

- *Type:* string

---

##### `parentOrgUnitPathInput`<sup>Optional</sup> <a name="parentOrgUnitPathInput" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitPathInput"></a>

```typescript
public readonly parentOrgUnitPathInput: string;
```

- *Type:* string

---

##### `blockInheritance`<sup>Required</sup> <a name="blockInheritance" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.blockInheritance"></a>

```typescript
public readonly blockInheritance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentOrgUnitId`<sup>Required</sup> <a name="parentOrgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitId"></a>

```typescript
public readonly parentOrgUnitId: string;
```

- *Type:* string

---

##### `parentOrgUnitPath`<sup>Required</sup> <a name="parentOrgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.parentOrgUnitPath"></a>

```typescript
public readonly parentOrgUnitPath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrgUnitConfig <a name="OrgUnitConfig" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.Initializer"></a>

```typescript
import { orgUnit } from '@cdktf/provider-googleworkspace'

const orgUnitConfig: orgUnit.OrgUnitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.name">name</a></code> | <code>string</code> | The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.blockInheritance">blockInheritance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.description">description</a></code> | <code>string</code> | Description of the organizational unit. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.parentOrgUnitId">parentOrgUnitId</a></code> | <code>string</code> | The unique ID of the parent organizational unit. |
| <code><a href="#@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.parentOrgUnitPath">parentOrgUnitPath</a></code> | <code>string</code> | The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/org_unit#name OrgUnit#name}

---

##### `blockInheritance`<sup>Optional</sup> <a name="blockInheritance" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.blockInheritance"></a>

```typescript
public readonly blockInheritance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Determines if a sub-organizational unit can inherit the settings of the parent organization. False means a sub-organizational unit inherits the settings of the nearest parent organizational unit. For more information on inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/org_unit#block_inheritance OrgUnit#block_inheritance}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the organizational unit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/org_unit#description OrgUnit#description}

---

##### `parentOrgUnitId`<sup>Optional</sup> <a name="parentOrgUnitId" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.parentOrgUnitId"></a>

```typescript
public readonly parentOrgUnitId: string;
```

- *Type:* string

The unique ID of the parent organizational unit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/org_unit#parent_org_unit_id OrgUnit#parent_org_unit_id}

---

##### `parentOrgUnitPath`<sup>Optional</sup> <a name="parentOrgUnitPath" id="@cdktf/provider-googleworkspace.orgUnit.OrgUnitConfig.property.parentOrgUnitPath"></a>

```typescript
public readonly parentOrgUnitPath: string;
```

- *Type:* string

The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/org_unit#parent_org_unit_path OrgUnit#parent_org_unit_path}

---



