# `dataGoogleworkspacePrivileges` Submodule <a name="`dataGoogleworkspacePrivileges` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspacePrivileges <a name="DataGoogleworkspacePrivileges" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/privileges googleworkspace_privileges}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer"></a>

```typescript
import { dataGoogleworkspacePrivileges } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges(scope: Construct, id: string, config?: DataGoogleworkspacePrivilegesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig">DataGoogleworkspacePrivilegesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig">DataGoogleworkspacePrivilegesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleworkspacePrivileges resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isConstruct"></a>

```typescript
import { dataGoogleworkspacePrivileges } from '@cdktf/provider-googleworkspace'

dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformElement"></a>

```typescript
import { dataGoogleworkspacePrivileges } from '@cdktf/provider-googleworkspace'

dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformDataSource"></a>

```typescript
import { dataGoogleworkspacePrivileges } from '@cdktf/provider-googleworkspace'

dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport"></a>

```typescript
import { dataGoogleworkspacePrivileges } from '@cdktf/provider-googleworkspace'

dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleworkspacePrivileges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleworkspacePrivileges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleworkspacePrivileges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/privileges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleworkspacePrivileges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.items">items</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList">DataGoogleworkspacePrivilegesItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.items"></a>

```typescript
public readonly items: DataGoogleworkspacePrivilegesItemsList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList">DataGoogleworkspacePrivilegesItemsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivileges.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspacePrivilegesConfig <a name="DataGoogleworkspacePrivilegesConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.Initializer"></a>

```typescript
import { dataGoogleworkspacePrivileges } from '@cdktf/provider-googleworkspace'

const dataGoogleworkspacePrivilegesConfig: dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/privileges#id DataGoogleworkspacePrivileges#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/privileges#id DataGoogleworkspacePrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleworkspacePrivilegesItems <a name="DataGoogleworkspacePrivilegesItems" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems.Initializer"></a>

```typescript
import { dataGoogleworkspacePrivileges } from '@cdktf/provider-googleworkspace'

const dataGoogleworkspacePrivilegesItems: dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleworkspacePrivilegesItemsList <a name="DataGoogleworkspacePrivilegesItemsList" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer"></a>

```typescript
import { dataGoogleworkspacePrivileges } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.get"></a>

```typescript
public get(index: number): DataGoogleworkspacePrivilegesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleworkspacePrivilegesItemsOutputReference <a name="DataGoogleworkspacePrivilegesItemsOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer"></a>

```typescript
import { dataGoogleworkspacePrivileges } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.isOrgUnitScopable">isOrgUnitScopable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.privilegeName">privilegeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems">DataGoogleworkspacePrivilegesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `isOrgUnitScopable`<sup>Required</sup> <a name="isOrgUnitScopable" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.isOrgUnitScopable"></a>

```typescript
public readonly isOrgUnitScopable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `privilegeName`<sup>Required</sup> <a name="privilegeName" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.privilegeName"></a>

```typescript
public readonly privilegeName: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleworkspacePrivilegesItems;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspacePrivileges.DataGoogleworkspacePrivilegesItems">DataGoogleworkspacePrivilegesItems</a>

---



