# `data_googleworkspace_chrome_policy_schema`

Refer to the Terraform Registory for docs: [`data_googleworkspace_chrome_policy_schema`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema).

# `dataGoogleworkspaceChromePolicySchema` Submodule <a name="`dataGoogleworkspaceChromePolicySchema` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceChromePolicySchema <a name="DataGoogleworkspaceChromePolicySchema" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema googleworkspace_chrome_policy_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema(scope: Construct, id: string, config: DataGoogleworkspaceChromePolicySchemaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig">DataGoogleworkspaceChromePolicySchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig">DataGoogleworkspaceChromePolicySchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isConstruct"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.accessRestrictions">accessRestrictions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.additionalTargetKeyNames">additionalTargetKeyNames</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList">DataGoogleworkspaceChromePolicySchemaDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fieldDescriptions">fieldDescriptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.notices">notices</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList">DataGoogleworkspaceChromePolicySchemaNoticesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.policyDescription">policyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.supportUri">supportUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessRestrictions`<sup>Required</sup> <a name="accessRestrictions" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.accessRestrictions"></a>

```typescript
public readonly accessRestrictions: string[];
```

- *Type:* string[]

---

##### `additionalTargetKeyNames`<sup>Required</sup> <a name="additionalTargetKeyNames" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.additionalTargetKeyNames"></a>

```typescript
public readonly additionalTargetKeyNames: DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList</a>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.definition"></a>

```typescript
public readonly definition: DataGoogleworkspaceChromePolicySchemaDefinitionList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList">DataGoogleworkspaceChromePolicySchemaDefinitionList</a>

---

##### `fieldDescriptions`<sup>Required</sup> <a name="fieldDescriptions" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.fieldDescriptions"></a>

```typescript
public readonly fieldDescriptions: string;
```

- *Type:* string

---

##### `notices`<sup>Required</sup> <a name="notices" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.notices"></a>

```typescript
public readonly notices: DataGoogleworkspaceChromePolicySchemaNoticesList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList">DataGoogleworkspaceChromePolicySchemaNoticesList</a>

---

##### `policyDescription`<sup>Required</sup> <a name="policyDescription" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.policyDescription"></a>

```typescript
public readonly policyDescription: string;
```

- *Type:* string

---

##### `supportUri`<sup>Required</sup> <a name="supportUri" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.supportUri"></a>

```typescript
public readonly supportUri: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchema.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames <a name="DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

const dataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames: dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames = { ... }
```


### DataGoogleworkspaceChromePolicySchemaConfig <a name="DataGoogleworkspaceChromePolicySchemaConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

const dataGoogleworkspaceChromePolicySchemaConfig: dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.schemaName">schemaName</a></code> | <code>string</code> | The full qualified name of the policy schema. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#id DataGoogleworkspaceChromePolicySchema#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The full qualified name of the policy schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#schema_name DataGoogleworkspaceChromePolicySchema#schema_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/chrome_policy_schema#id DataGoogleworkspaceChromePolicySchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleworkspaceChromePolicySchemaDefinition <a name="DataGoogleworkspaceChromePolicySchemaDefinition" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

const dataGoogleworkspaceChromePolicySchemaDefinition: dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition = { ... }
```


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumType <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

const dataGoogleworkspaceChromePolicySchemaDefinitionEnumType: dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType = { ... }
```


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

const dataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue: dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue = { ... }
```


### DataGoogleworkspaceChromePolicySchemaNotices <a name="DataGoogleworkspaceChromePolicySchemaNotices" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

const dataGoogleworkspaceChromePolicySchemaNotices: dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList <a name="DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.get"></a>

```typescript
public get(index: number): DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference <a name="DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.keyDescription">keyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `keyDescription`<sup>Required</sup> <a name="keyDescription" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.keyDescription"></a>

```typescript
public readonly keyDescription: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames">DataGoogleworkspaceChromePolicySchemaAdditionalTargetKeyNames</a>

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.get"></a>

```typescript
public get(index: number): DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType">DataGoogleworkspaceChromePolicySchemaDefinitionEnumType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.value"></a>

```typescript
public readonly value: DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleworkspaceChromePolicySchemaDefinitionEnumType;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumType">DataGoogleworkspaceChromePolicySchemaDefinitionEnumType</a>

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.get"></a>

```typescript
public get(index: number): DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference <a name="DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeValue</a>

---


### DataGoogleworkspaceChromePolicySchemaDefinitionList <a name="DataGoogleworkspaceChromePolicySchemaDefinitionList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.get"></a>

```typescript
public get(index: number): DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference <a name="DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.enumType">enumType</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.messageType">messageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.package">package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.syntax">syntax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition">DataGoogleworkspaceChromePolicySchemaDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enumType`<sup>Required</sup> <a name="enumType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.enumType"></a>

```typescript
public readonly enumType: DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList">DataGoogleworkspaceChromePolicySchemaDefinitionEnumTypeList</a>

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

##### `syntax`<sup>Required</sup> <a name="syntax" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.syntax"></a>

```typescript
public readonly syntax: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleworkspaceChromePolicySchemaDefinition;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaDefinition">DataGoogleworkspaceChromePolicySchemaDefinition</a>

---


### DataGoogleworkspaceChromePolicySchemaNoticesList <a name="DataGoogleworkspaceChromePolicySchemaNoticesList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.get"></a>

```typescript
public get(index: number): DataGoogleworkspaceChromePolicySchemaNoticesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleworkspaceChromePolicySchemaNoticesOutputReference <a name="DataGoogleworkspaceChromePolicySchemaNoticesOutputReference" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer"></a>

```typescript
import { dataGoogleworkspaceChromePolicySchema } from '@cdktf/provider-googleworkspace'

new dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.acknowledgementRequired">acknowledgementRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeMessage">noticeMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeValue">noticeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices">DataGoogleworkspaceChromePolicySchemaNotices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acknowledgementRequired`<sup>Required</sup> <a name="acknowledgementRequired" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.acknowledgementRequired"></a>

```typescript
public readonly acknowledgementRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `noticeMessage`<sup>Required</sup> <a name="noticeMessage" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeMessage"></a>

```typescript
public readonly noticeMessage: string;
```

- *Type:* string

---

##### `noticeValue`<sup>Required</sup> <a name="noticeValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.noticeValue"></a>

```typescript
public readonly noticeValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNoticesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleworkspaceChromePolicySchemaNotices;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceChromePolicySchema.DataGoogleworkspaceChromePolicySchemaNotices">DataGoogleworkspaceChromePolicySchemaNotices</a>

---



