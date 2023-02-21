# `schema` Submodule <a name="`schema` Submodule" id="@cdktf/provider-googleworkspace.schema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Schema <a name="Schema" id="@cdktf/provider-googleworkspace.schema.Schema"></a>

Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema googleworkspace_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.schema.Schema.Initializer"></a>

```typescript
import { schema } from '@cdktf/provider-googleworkspace'

new schema.Schema(scope: Construct, id: string, config: SchemaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig">SchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.schema.Schema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.schema.Schema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-googleworkspace.schema.Schema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig">SchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.schema.Schema.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.schema.Schema.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.schema.Schema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.schema.Schema.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.schema.Schema.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.schema.Schema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.schema.Schema.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.schema.Schema.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.schema.Schema.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.Schema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFields` <a name="putFields" id="@cdktf/provider-googleworkspace.schema.Schema.putFields"></a>

```typescript
public putFields(value: IResolvable | SchemaFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.schema.Schema.putFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.schema.SchemaFields">SchemaFields</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-googleworkspace.schema.Schema.putTimeouts"></a>

```typescript
public putTimeouts(value: SchemaTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.schema.Schema.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts">SchemaTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-googleworkspace.schema.Schema.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-googleworkspace.schema.Schema.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.schema.Schema.isConstruct"></a>

```typescript
import { schema } from '@cdktf/provider-googleworkspace'

schema.Schema.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.schema.Schema.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.schema.Schema.isTerraformElement"></a>

```typescript
import { schema } from '@cdktf/provider-googleworkspace'

schema.Schema.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.schema.Schema.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-googleworkspace.schema.Schema.isTerraformResource"></a>

```typescript
import { schema } from '@cdktf/provider-googleworkspace'

schema.Schema.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.schema.Schema.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.fields">fields</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList">SchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference">SchemaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.fieldsInput">fieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.schema.SchemaFields">SchemaFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts">SchemaTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.schema.Schema.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.schema.Schema.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.schema.Schema.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.schema.Schema.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.schema.Schema.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.schema.Schema.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.schema.Schema.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.schema.Schema.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.schema.Schema.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.schema.Schema.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.schema.Schema.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.schema.Schema.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.schema.Schema.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.schema.Schema.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.schema.Schema.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-googleworkspace.schema.Schema.property.fields"></a>

```typescript
public readonly fields: SchemaFieldsList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList">SchemaFieldsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.schema.Schema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-googleworkspace.schema.Schema.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.schema.Schema.property.timeouts"></a>

```typescript
public readonly timeouts: SchemaTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference">SchemaTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-googleworkspace.schema.Schema.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-googleworkspace.schema.Schema.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | SchemaFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.schema.SchemaFields">SchemaFields</a>[]

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-googleworkspace.schema.Schema.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-googleworkspace.schema.Schema.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SchemaTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts">SchemaTimeouts</a> | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-googleworkspace.schema.Schema.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-googleworkspace.schema.Schema.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.Schema.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.schema.Schema.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SchemaConfig <a name="SchemaConfig" id="@cdktf/provider-googleworkspace.schema.SchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.Initializer"></a>

```typescript
import { schema } from '@cdktf/provider-googleworkspace'

const schemaConfig: schema.SchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.fields">fields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.schema.SchemaFields">SchemaFields</a>[]</code> | fields block. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.schemaName">schemaName</a></code> | <code>string</code> | The schema's name. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name for the schema. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts">SchemaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.fields"></a>

```typescript
public readonly fields: IResolvable | SchemaFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.schema.SchemaFields">SchemaFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#fields Schema#fields}

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The schema's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#schema_name Schema#schema_name}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name for the schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#display_name Schema#display_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.schema.SchemaConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SchemaTimeouts;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts">SchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#timeouts Schema#timeouts}

---

### SchemaFields <a name="SchemaFields" id="@cdktf/provider-googleworkspace.schema.SchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.schema.SchemaFields.Initializer"></a>

```typescript
import { schema } from '@cdktf/provider-googleworkspace'

const schemaFields: schema.SchemaFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.fieldName">fieldName</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.fieldType">fieldType</a></code> | <code>string</code> | The type of the field. Acceptable values are:  - `BOOL` - `DATE` - `DOUBLE` - `EMAIL` - `INT64` - `PHONE` - `STRING`. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.displayName">displayName</a></code> | <code>string</code> | Display Name of the field. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.indexed">indexed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `true`. Boolean specifying whether the field is indexed or not. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.multiValued">multiValued</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. A boolean specifying whether this is a multi-valued field or not. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.numericIndexingSpec">numericIndexingSpec</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a></code> | numeric_indexing_spec block. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields.property.readAccessType">readAccessType</a></code> | <code>string</code> | Defaults to `ALL_DOMAIN_USERS`. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#field_name Schema#field_name}

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.fieldType"></a>

```typescript
public readonly fieldType: string;
```

- *Type:* string

The type of the field. Acceptable values are:  - `BOOL` - `DATE` - `DOUBLE` - `EMAIL` - `INT64` - `PHONE` - `STRING`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#field_type Schema#field_type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display Name of the field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#display_name Schema#display_name}

---

##### `indexed`<sup>Optional</sup> <a name="indexed" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.indexed"></a>

```typescript
public readonly indexed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `true`. Boolean specifying whether the field is indexed or not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#indexed Schema#indexed}

---

##### `multiValued`<sup>Optional</sup> <a name="multiValued" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.multiValued"></a>

```typescript
public readonly multiValued: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`. A boolean specifying whether this is a multi-valued field or not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#multi_valued Schema#multi_valued}

---

##### `numericIndexingSpec`<sup>Optional</sup> <a name="numericIndexingSpec" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.numericIndexingSpec"></a>

```typescript
public readonly numericIndexingSpec: SchemaFieldsNumericIndexingSpec;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a>

numeric_indexing_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#numeric_indexing_spec Schema#numeric_indexing_spec}

---

##### `readAccessType`<sup>Optional</sup> <a name="readAccessType" id="@cdktf/provider-googleworkspace.schema.SchemaFields.property.readAccessType"></a>

```typescript
public readonly readAccessType: string;
```

- *Type:* string

Defaults to `ALL_DOMAIN_USERS`.

Specifies who can view values of this field. See Retrieve users as a non-administrator for more information. Acceptable values are: 
- `ADMINS_AND_SELF`
- `ALL_DOMAIN_USERS`
Note: It may take up to 24 hours for changes to this field to be reflected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#read_access_type Schema#read_access_type}

---

### SchemaFieldsNumericIndexingSpec <a name="SchemaFieldsNumericIndexingSpec" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec.Initializer"></a>

```typescript
import { schema } from '@cdktf/provider-googleworkspace'

const schemaFieldsNumericIndexingSpec: schema.SchemaFieldsNumericIndexingSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec.property.maxValue">maxValue</a></code> | <code>number</code> | Maximum value of this field. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec.property.minValue">minValue</a></code> | <code>number</code> | Minimum value of this field. |

---

##### `maxValue`<sup>Optional</sup> <a name="maxValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec.property.maxValue"></a>

```typescript
public readonly maxValue: number;
```

- *Type:* number

Maximum value of this field.

This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#max_value Schema#max_value}

---

##### `minValue`<sup>Optional</sup> <a name="minValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec.property.minValue"></a>

```typescript
public readonly minValue: number;
```

- *Type:* number

Minimum value of this field.

This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#min_value Schema#min_value}

---

### SchemaTimeouts <a name="SchemaTimeouts" id="@cdktf/provider-googleworkspace.schema.SchemaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.schema.SchemaTimeouts.Initializer"></a>

```typescript
import { schema } from '@cdktf/provider-googleworkspace'

const schemaTimeouts: schema.SchemaTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#create Schema#create}. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#delete Schema#delete}. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#update Schema#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-googleworkspace.schema.SchemaTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#create Schema#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-googleworkspace.schema.SchemaTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#delete Schema#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-googleworkspace.schema.SchemaTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/schema#update Schema#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SchemaFieldsList <a name="SchemaFieldsList" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer"></a>

```typescript
import { schema } from '@cdktf/provider-googleworkspace'

new schema.SchemaFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.get"></a>

```typescript
public get(index: number): SchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.schema.SchemaFields">SchemaFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchemaFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.schema.SchemaFields">SchemaFields</a>[]

---


### SchemaFieldsNumericIndexingSpecOutputReference <a name="SchemaFieldsNumericIndexingSpecOutputReference" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.Initializer"></a>

```typescript
import { schema } from '@cdktf/provider-googleworkspace'

new schema.SchemaFieldsNumericIndexingSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resetMaxValue">resetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resetMinValue">resetMinValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxValue` <a name="resetMaxValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resetMaxValue"></a>

```typescript
public resetMaxValue(): void
```

##### `resetMinValue` <a name="resetMinValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.resetMinValue"></a>

```typescript
public resetMinValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.maxValueInput">maxValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.minValueInput">minValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.maxValue">maxValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.minValue">minValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValueInput`<sup>Optional</sup> <a name="maxValueInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.maxValueInput"></a>

```typescript
public readonly maxValueInput: number;
```

- *Type:* number

---

##### `minValueInput`<sup>Optional</sup> <a name="minValueInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.minValueInput"></a>

```typescript
public readonly minValueInput: number;
```

- *Type:* number

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: number;
```

- *Type:* number

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.minValue"></a>

```typescript
public readonly minValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SchemaFieldsNumericIndexingSpec;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a>

---


### SchemaFieldsOutputReference <a name="SchemaFieldsOutputReference" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer"></a>

```typescript
import { schema } from '@cdktf/provider-googleworkspace'

new schema.SchemaFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.putNumericIndexingSpec">putNumericIndexingSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetIndexed">resetIndexed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetMultiValued">resetMultiValued</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetNumericIndexingSpec">resetNumericIndexingSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetReadAccessType">resetReadAccessType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNumericIndexingSpec` <a name="putNumericIndexingSpec" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.putNumericIndexingSpec"></a>

```typescript
public putNumericIndexingSpec(value: SchemaFieldsNumericIndexingSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.putNumericIndexingSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetIndexed` <a name="resetIndexed" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetIndexed"></a>

```typescript
public resetIndexed(): void
```

##### `resetMultiValued` <a name="resetMultiValued" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetMultiValued"></a>

```typescript
public resetMultiValued(): void
```

##### `resetNumericIndexingSpec` <a name="resetNumericIndexingSpec" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetNumericIndexingSpec"></a>

```typescript
public resetNumericIndexingSpec(): void
```

##### `resetReadAccessType` <a name="resetReadAccessType" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.resetReadAccessType"></a>

```typescript
public resetReadAccessType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.numericIndexingSpec">numericIndexingSpec</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference">SchemaFieldsNumericIndexingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldTypeInput">fieldTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.indexedInput">indexedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.multiValuedInput">multiValuedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.numericIndexingSpecInput">numericIndexingSpecInput</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.readAccessTypeInput">readAccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldType">fieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.indexed">indexed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.multiValued">multiValued</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.readAccessType">readAccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaFields">SchemaFields</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldId"></a>

```typescript
public readonly fieldId: string;
```

- *Type:* string

---

##### `numericIndexingSpec`<sup>Required</sup> <a name="numericIndexingSpec" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.numericIndexingSpec"></a>

```typescript
public readonly numericIndexingSpec: SchemaFieldsNumericIndexingSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpecOutputReference">SchemaFieldsNumericIndexingSpecOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `fieldTypeInput`<sup>Optional</sup> <a name="fieldTypeInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldTypeInput"></a>

```typescript
public readonly fieldTypeInput: string;
```

- *Type:* string

---

##### `indexedInput`<sup>Optional</sup> <a name="indexedInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.indexedInput"></a>

```typescript
public readonly indexedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `multiValuedInput`<sup>Optional</sup> <a name="multiValuedInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.multiValuedInput"></a>

```typescript
public readonly multiValuedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numericIndexingSpecInput`<sup>Optional</sup> <a name="numericIndexingSpecInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.numericIndexingSpecInput"></a>

```typescript
public readonly numericIndexingSpecInput: SchemaFieldsNumericIndexingSpec;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFieldsNumericIndexingSpec">SchemaFieldsNumericIndexingSpec</a>

---

##### `readAccessTypeInput`<sup>Optional</sup> <a name="readAccessTypeInput" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.readAccessTypeInput"></a>

```typescript
public readonly readAccessTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.fieldType"></a>

```typescript
public readonly fieldType: string;
```

- *Type:* string

---

##### `indexed`<sup>Required</sup> <a name="indexed" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.indexed"></a>

```typescript
public readonly indexed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `multiValued`<sup>Required</sup> <a name="multiValued" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.multiValued"></a>

```typescript
public readonly multiValued: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readAccessType`<sup>Required</sup> <a name="readAccessType" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.readAccessType"></a>

```typescript
public readonly readAccessType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.schema.SchemaFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SchemaFields | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaFields">SchemaFields</a> | cdktf.IResolvable

---


### SchemaTimeoutsOutputReference <a name="SchemaTimeoutsOutputReference" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.Initializer"></a>

```typescript
import { schema } from '@cdktf/provider-googleworkspace'

new schema.SchemaTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts">SchemaTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.schema.SchemaTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SchemaTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.schema.SchemaTimeouts">SchemaTimeouts</a> | cdktf.IResolvable

---



