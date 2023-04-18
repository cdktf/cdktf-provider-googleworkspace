# `data_googleworkspace_org_unit`

Refer to the Terraform Registory for docs: [`data_googleworkspace_org_unit`](https://www.terraform.io/docs/providers/googleworkspace/d/org_unit).

# `dataGoogleworkspaceOrgUnit` Submodule <a name="`dataGoogleworkspaceOrgUnit` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceOrgUnit <a name="DataGoogleworkspaceOrgUnit" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit"></a>

Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/d/org_unit googleworkspace_org_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer"></a>

```typescript
import { dataGoogleworkspaceOrgUnit } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit(scope: Construct, id: string, config?: DataGoogleworkspaceOrgUnitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig">DataGoogleworkspaceOrgUnitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig">DataGoogleworkspaceOrgUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.resetOrgUnitId">resetOrgUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.resetOrgUnitPath">resetOrgUnitPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetOrgUnitId` <a name="resetOrgUnitId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.resetOrgUnitId"></a>

```typescript
public resetOrgUnitId(): void
```

##### `resetOrgUnitPath` <a name="resetOrgUnitPath" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.resetOrgUnitPath"></a>

```typescript
public resetOrgUnitPath(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isConstruct"></a>

```typescript
import { dataGoogleworkspaceOrgUnit } from '@cdktf/provider-googleworkspace'

dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformElement"></a>

```typescript
import { dataGoogleworkspaceOrgUnit } from '@cdktf/provider-googleworkspace'

dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformDataSource"></a>

```typescript
import { dataGoogleworkspaceOrgUnit } from '@cdktf/provider-googleworkspace'

dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.blockInheritance">blockInheritance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.parentOrgUnitId">parentOrgUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.parentOrgUnitPath">parentOrgUnitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitIdInput">orgUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitPathInput">orgUnitPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitId">orgUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitPath">orgUnitPath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `blockInheritance`<sup>Required</sup> <a name="blockInheritance" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.blockInheritance"></a>

```typescript
public readonly blockInheritance: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentOrgUnitId`<sup>Required</sup> <a name="parentOrgUnitId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.parentOrgUnitId"></a>

```typescript
public readonly parentOrgUnitId: string;
```

- *Type:* string

---

##### `parentOrgUnitPath`<sup>Required</sup> <a name="parentOrgUnitPath" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.parentOrgUnitPath"></a>

```typescript
public readonly parentOrgUnitPath: string;
```

- *Type:* string

---

##### `orgUnitIdInput`<sup>Optional</sup> <a name="orgUnitIdInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitIdInput"></a>

```typescript
public readonly orgUnitIdInput: string;
```

- *Type:* string

---

##### `orgUnitPathInput`<sup>Optional</sup> <a name="orgUnitPathInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitPathInput"></a>

```typescript
public readonly orgUnitPathInput: string;
```

- *Type:* string

---

##### `orgUnitId`<sup>Required</sup> <a name="orgUnitId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitId"></a>

```typescript
public readonly orgUnitId: string;
```

- *Type:* string

---

##### `orgUnitPath`<sup>Required</sup> <a name="orgUnitPath" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.orgUnitPath"></a>

```typescript
public readonly orgUnitPath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceOrgUnitConfig <a name="DataGoogleworkspaceOrgUnitConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.Initializer"></a>

```typescript
import { dataGoogleworkspaceOrgUnit } from '@cdktf/provider-googleworkspace'

const dataGoogleworkspaceOrgUnitConfig: dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.orgUnitId">orgUnitId</a></code> | <code>string</code> | The unique ID of the organizational unit. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.orgUnitPath">orgUnitPath</a></code> | <code>string</code> | The full path to the organizational unit. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `orgUnitId`<sup>Optional</sup> <a name="orgUnitId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.orgUnitId"></a>

```typescript
public readonly orgUnitId: string;
```

- *Type:* string

The unique ID of the organizational unit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/org_unit#org_unit_id DataGoogleworkspaceOrgUnit#org_unit_id}

---

##### `orgUnitPath`<sup>Optional</sup> <a name="orgUnitPath" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceOrgUnit.DataGoogleworkspaceOrgUnitConfig.property.orgUnitPath"></a>

```typescript
public readonly orgUnitPath: string;
```

- *Type:* string

The full path to the organizational unit.

The orgUnitPath is a derived property. When listed, it is derived from parentOrgunitPath and organizational unit's name. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an orgUnitPath, either update the name of the organization or the parentOrgunitPath. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [chromeosdevices.update a user](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/org_unit#org_unit_path DataGoogleworkspaceOrgUnit#org_unit_path}

---



