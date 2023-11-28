# `groupSettings` Submodule <a name="`groupSettings` Submodule" id="@cdktf/provider-googleworkspace.groupSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupSettings <a name="GroupSettings" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings googleworkspace_group_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer"></a>

```typescript
import { groupSettings } from '@cdktf/provider-googleworkspace'

new groupSettings.GroupSettings(scope: Construct, id: string, config: GroupSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig">GroupSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig">GroupSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowExternalMembers">resetAllowExternalMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowWebPosting">resetAllowWebPosting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetArchiveOnly">resetArchiveOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomFooterText">resetCustomFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomReplyTo">resetCustomReplyTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetDefaultMessageDenyNotificationText">resetDefaultMessageDenyNotificationText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetEnableCollaborativeInbox">resetEnableCollaborativeInbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeCustomFooter">resetIncludeCustomFooter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeInGlobalAddressList">resetIncludeInGlobalAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIsArchived">resetIsArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMembersCanPostAsTheGroup">resetMembersCanPostAsTheGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMessageModerationLevel">resetMessageModerationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetPrimaryLanguage">resetPrimaryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetReplyTo">resetReplyTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSendMessageDenyNotification">resetSendMessageDenyNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSpamModerationLevel">resetSpamModerationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanAssistContent">resetWhoCanAssistContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanContactOwner">resetWhoCanContactOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanDiscoverGroup">resetWhoCanDiscoverGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanJoin">resetWhoCanJoin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanLeaveGroup">resetWhoCanLeaveGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateContent">resetWhoCanModerateContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateMembers">resetWhoCanModerateMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanPostMessage">resetWhoCanPostMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewGroup">resetWhoCanViewGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewMembership">resetWhoCanViewMembership</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: GroupSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

---

##### `resetAllowExternalMembers` <a name="resetAllowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowExternalMembers"></a>

```typescript
public resetAllowExternalMembers(): void
```

##### `resetAllowWebPosting` <a name="resetAllowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowWebPosting"></a>

```typescript
public resetAllowWebPosting(): void
```

##### `resetArchiveOnly` <a name="resetArchiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetArchiveOnly"></a>

```typescript
public resetArchiveOnly(): void
```

##### `resetCustomFooterText` <a name="resetCustomFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomFooterText"></a>

```typescript
public resetCustomFooterText(): void
```

##### `resetCustomReplyTo` <a name="resetCustomReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomReplyTo"></a>

```typescript
public resetCustomReplyTo(): void
```

##### `resetDefaultMessageDenyNotificationText` <a name="resetDefaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetDefaultMessageDenyNotificationText"></a>

```typescript
public resetDefaultMessageDenyNotificationText(): void
```

##### `resetEnableCollaborativeInbox` <a name="resetEnableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetEnableCollaborativeInbox"></a>

```typescript
public resetEnableCollaborativeInbox(): void
```

##### `resetIncludeCustomFooter` <a name="resetIncludeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeCustomFooter"></a>

```typescript
public resetIncludeCustomFooter(): void
```

##### `resetIncludeInGlobalAddressList` <a name="resetIncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeInGlobalAddressList"></a>

```typescript
public resetIncludeInGlobalAddressList(): void
```

##### `resetIsArchived` <a name="resetIsArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIsArchived"></a>

```typescript
public resetIsArchived(): void
```

##### `resetMembersCanPostAsTheGroup` <a name="resetMembersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMembersCanPostAsTheGroup"></a>

```typescript
public resetMembersCanPostAsTheGroup(): void
```

##### `resetMessageModerationLevel` <a name="resetMessageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMessageModerationLevel"></a>

```typescript
public resetMessageModerationLevel(): void
```

##### `resetPrimaryLanguage` <a name="resetPrimaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetPrimaryLanguage"></a>

```typescript
public resetPrimaryLanguage(): void
```

##### `resetReplyTo` <a name="resetReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetReplyTo"></a>

```typescript
public resetReplyTo(): void
```

##### `resetSendMessageDenyNotification` <a name="resetSendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSendMessageDenyNotification"></a>

```typescript
public resetSendMessageDenyNotification(): void
```

##### `resetSpamModerationLevel` <a name="resetSpamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSpamModerationLevel"></a>

```typescript
public resetSpamModerationLevel(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWhoCanAssistContent` <a name="resetWhoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanAssistContent"></a>

```typescript
public resetWhoCanAssistContent(): void
```

##### `resetWhoCanContactOwner` <a name="resetWhoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanContactOwner"></a>

```typescript
public resetWhoCanContactOwner(): void
```

##### `resetWhoCanDiscoverGroup` <a name="resetWhoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanDiscoverGroup"></a>

```typescript
public resetWhoCanDiscoverGroup(): void
```

##### `resetWhoCanJoin` <a name="resetWhoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanJoin"></a>

```typescript
public resetWhoCanJoin(): void
```

##### `resetWhoCanLeaveGroup` <a name="resetWhoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanLeaveGroup"></a>

```typescript
public resetWhoCanLeaveGroup(): void
```

##### `resetWhoCanModerateContent` <a name="resetWhoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateContent"></a>

```typescript
public resetWhoCanModerateContent(): void
```

##### `resetWhoCanModerateMembers` <a name="resetWhoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateMembers"></a>

```typescript
public resetWhoCanModerateMembers(): void
```

##### `resetWhoCanPostMessage` <a name="resetWhoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanPostMessage"></a>

```typescript
public resetWhoCanPostMessage(): void
```

##### `resetWhoCanViewGroup` <a name="resetWhoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewGroup"></a>

```typescript
public resetWhoCanViewGroup(): void
```

##### `resetWhoCanViewMembership` <a name="resetWhoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewMembership"></a>

```typescript
public resetWhoCanViewMembership(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isConstruct"></a>

```typescript
import { groupSettings } from '@cdktf/provider-googleworkspace'

groupSettings.GroupSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement"></a>

```typescript
import { groupSettings } from '@cdktf/provider-googleworkspace'

groupSettings.GroupSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource"></a>

```typescript
import { groupSettings } from '@cdktf/provider-googleworkspace'

groupSettings.GroupSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.generateConfigForImport"></a>

```typescript
import { groupSettings } from '@cdktf/provider-googleworkspace'

groupSettings.GroupSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GroupSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customRolesEnabledForSettingsToBeMerged">customRolesEnabledForSettingsToBeMerged</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference">GroupSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembersInput">allowExternalMembersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPostingInput">allowWebPostingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnlyInput">archiveOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterTextInput">customFooterTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyToInput">customReplyToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationTextInput">defaultMessageDenyNotificationTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInboxInput">enableCollaborativeInboxInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooterInput">includeCustomFooterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressListInput">includeInGlobalAddressListInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchivedInput">isArchivedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroupInput">membersCanPostAsTheGroupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevelInput">messageModerationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguageInput">primaryLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyToInput">replyToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotificationInput">sendMessageDenyNotificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevelInput">spamModerationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContentInput">whoCanAssistContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwnerInput">whoCanContactOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroupInput">whoCanDiscoverGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoinInput">whoCanJoinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroupInput">whoCanLeaveGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContentInput">whoCanModerateContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembersInput">whoCanModerateMembersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessageInput">whoCanPostMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroupInput">whoCanViewGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembershipInput">whoCanViewMembershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembers">allowExternalMembers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPosting">allowWebPosting</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnly">archiveOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterText">customFooterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyTo">customReplyTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationText">defaultMessageDenyNotificationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInbox">enableCollaborativeInbox</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooter">includeCustomFooter</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressList">includeInGlobalAddressList</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchived">isArchived</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroup">membersCanPostAsTheGroup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevel">messageModerationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguage">primaryLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyTo">replyTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotification">sendMessageDenyNotification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevel">spamModerationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContent">whoCanAssistContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwner">whoCanContactOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroup">whoCanDiscoverGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoin">whoCanJoin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroup">whoCanLeaveGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContent">whoCanModerateContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembers">whoCanModerateMembers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessage">whoCanPostMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroup">whoCanViewGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembership">whoCanViewMembership</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customRolesEnabledForSettingsToBeMerged`<sup>Required</sup> <a name="customRolesEnabledForSettingsToBeMerged" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customRolesEnabledForSettingsToBeMerged"></a>

```typescript
public readonly customRolesEnabledForSettingsToBeMerged: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeouts"></a>

```typescript
public readonly timeouts: GroupSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference">GroupSettingsTimeoutsOutputReference</a>

---

##### `allowExternalMembersInput`<sup>Optional</sup> <a name="allowExternalMembersInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembersInput"></a>

```typescript
public readonly allowExternalMembersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowWebPostingInput`<sup>Optional</sup> <a name="allowWebPostingInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPostingInput"></a>

```typescript
public readonly allowWebPostingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archiveOnlyInput`<sup>Optional</sup> <a name="archiveOnlyInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnlyInput"></a>

```typescript
public readonly archiveOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customFooterTextInput`<sup>Optional</sup> <a name="customFooterTextInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterTextInput"></a>

```typescript
public readonly customFooterTextInput: string;
```

- *Type:* string

---

##### `customReplyToInput`<sup>Optional</sup> <a name="customReplyToInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyToInput"></a>

```typescript
public readonly customReplyToInput: string;
```

- *Type:* string

---

##### `defaultMessageDenyNotificationTextInput`<sup>Optional</sup> <a name="defaultMessageDenyNotificationTextInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationTextInput"></a>

```typescript
public readonly defaultMessageDenyNotificationTextInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `enableCollaborativeInboxInput`<sup>Optional</sup> <a name="enableCollaborativeInboxInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInboxInput"></a>

```typescript
public readonly enableCollaborativeInboxInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeCustomFooterInput`<sup>Optional</sup> <a name="includeCustomFooterInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooterInput"></a>

```typescript
public readonly includeCustomFooterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeInGlobalAddressListInput`<sup>Optional</sup> <a name="includeInGlobalAddressListInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressListInput"></a>

```typescript
public readonly includeInGlobalAddressListInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isArchivedInput`<sup>Optional</sup> <a name="isArchivedInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchivedInput"></a>

```typescript
public readonly isArchivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `membersCanPostAsTheGroupInput`<sup>Optional</sup> <a name="membersCanPostAsTheGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroupInput"></a>

```typescript
public readonly membersCanPostAsTheGroupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageModerationLevelInput`<sup>Optional</sup> <a name="messageModerationLevelInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevelInput"></a>

```typescript
public readonly messageModerationLevelInput: string;
```

- *Type:* string

---

##### `primaryLanguageInput`<sup>Optional</sup> <a name="primaryLanguageInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguageInput"></a>

```typescript
public readonly primaryLanguageInput: string;
```

- *Type:* string

---

##### `replyToInput`<sup>Optional</sup> <a name="replyToInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyToInput"></a>

```typescript
public readonly replyToInput: string;
```

- *Type:* string

---

##### `sendMessageDenyNotificationInput`<sup>Optional</sup> <a name="sendMessageDenyNotificationInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotificationInput"></a>

```typescript
public readonly sendMessageDenyNotificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `spamModerationLevelInput`<sup>Optional</sup> <a name="spamModerationLevelInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevelInput"></a>

```typescript
public readonly spamModerationLevelInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GroupSettingsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

---

##### `whoCanAssistContentInput`<sup>Optional</sup> <a name="whoCanAssistContentInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContentInput"></a>

```typescript
public readonly whoCanAssistContentInput: string;
```

- *Type:* string

---

##### `whoCanContactOwnerInput`<sup>Optional</sup> <a name="whoCanContactOwnerInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwnerInput"></a>

```typescript
public readonly whoCanContactOwnerInput: string;
```

- *Type:* string

---

##### `whoCanDiscoverGroupInput`<sup>Optional</sup> <a name="whoCanDiscoverGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroupInput"></a>

```typescript
public readonly whoCanDiscoverGroupInput: string;
```

- *Type:* string

---

##### `whoCanJoinInput`<sup>Optional</sup> <a name="whoCanJoinInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoinInput"></a>

```typescript
public readonly whoCanJoinInput: string;
```

- *Type:* string

---

##### `whoCanLeaveGroupInput`<sup>Optional</sup> <a name="whoCanLeaveGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroupInput"></a>

```typescript
public readonly whoCanLeaveGroupInput: string;
```

- *Type:* string

---

##### `whoCanModerateContentInput`<sup>Optional</sup> <a name="whoCanModerateContentInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContentInput"></a>

```typescript
public readonly whoCanModerateContentInput: string;
```

- *Type:* string

---

##### `whoCanModerateMembersInput`<sup>Optional</sup> <a name="whoCanModerateMembersInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembersInput"></a>

```typescript
public readonly whoCanModerateMembersInput: string;
```

- *Type:* string

---

##### `whoCanPostMessageInput`<sup>Optional</sup> <a name="whoCanPostMessageInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessageInput"></a>

```typescript
public readonly whoCanPostMessageInput: string;
```

- *Type:* string

---

##### `whoCanViewGroupInput`<sup>Optional</sup> <a name="whoCanViewGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroupInput"></a>

```typescript
public readonly whoCanViewGroupInput: string;
```

- *Type:* string

---

##### `whoCanViewMembershipInput`<sup>Optional</sup> <a name="whoCanViewMembershipInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembershipInput"></a>

```typescript
public readonly whoCanViewMembershipInput: string;
```

- *Type:* string

---

##### `allowExternalMembers`<sup>Required</sup> <a name="allowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembers"></a>

```typescript
public readonly allowExternalMembers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowWebPosting`<sup>Required</sup> <a name="allowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPosting"></a>

```typescript
public readonly allowWebPosting: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archiveOnly`<sup>Required</sup> <a name="archiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnly"></a>

```typescript
public readonly archiveOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customFooterText`<sup>Required</sup> <a name="customFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterText"></a>

```typescript
public readonly customFooterText: string;
```

- *Type:* string

---

##### `customReplyTo`<sup>Required</sup> <a name="customReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyTo"></a>

```typescript
public readonly customReplyTo: string;
```

- *Type:* string

---

##### `defaultMessageDenyNotificationText`<sup>Required</sup> <a name="defaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationText"></a>

```typescript
public readonly defaultMessageDenyNotificationText: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `enableCollaborativeInbox`<sup>Required</sup> <a name="enableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInbox"></a>

```typescript
public readonly enableCollaborativeInbox: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeCustomFooter`<sup>Required</sup> <a name="includeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooter"></a>

```typescript
public readonly includeCustomFooter: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeInGlobalAddressList`<sup>Required</sup> <a name="includeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressList"></a>

```typescript
public readonly includeInGlobalAddressList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isArchived`<sup>Required</sup> <a name="isArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchived"></a>

```typescript
public readonly isArchived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `membersCanPostAsTheGroup`<sup>Required</sup> <a name="membersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroup"></a>

```typescript
public readonly membersCanPostAsTheGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageModerationLevel`<sup>Required</sup> <a name="messageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevel"></a>

```typescript
public readonly messageModerationLevel: string;
```

- *Type:* string

---

##### `primaryLanguage`<sup>Required</sup> <a name="primaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguage"></a>

```typescript
public readonly primaryLanguage: string;
```

- *Type:* string

---

##### `replyTo`<sup>Required</sup> <a name="replyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyTo"></a>

```typescript
public readonly replyTo: string;
```

- *Type:* string

---

##### `sendMessageDenyNotification`<sup>Required</sup> <a name="sendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotification"></a>

```typescript
public readonly sendMessageDenyNotification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `spamModerationLevel`<sup>Required</sup> <a name="spamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevel"></a>

```typescript
public readonly spamModerationLevel: string;
```

- *Type:* string

---

##### `whoCanAssistContent`<sup>Required</sup> <a name="whoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContent"></a>

```typescript
public readonly whoCanAssistContent: string;
```

- *Type:* string

---

##### `whoCanContactOwner`<sup>Required</sup> <a name="whoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwner"></a>

```typescript
public readonly whoCanContactOwner: string;
```

- *Type:* string

---

##### `whoCanDiscoverGroup`<sup>Required</sup> <a name="whoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroup"></a>

```typescript
public readonly whoCanDiscoverGroup: string;
```

- *Type:* string

---

##### `whoCanJoin`<sup>Required</sup> <a name="whoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoin"></a>

```typescript
public readonly whoCanJoin: string;
```

- *Type:* string

---

##### `whoCanLeaveGroup`<sup>Required</sup> <a name="whoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroup"></a>

```typescript
public readonly whoCanLeaveGroup: string;
```

- *Type:* string

---

##### `whoCanModerateContent`<sup>Required</sup> <a name="whoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContent"></a>

```typescript
public readonly whoCanModerateContent: string;
```

- *Type:* string

---

##### `whoCanModerateMembers`<sup>Required</sup> <a name="whoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembers"></a>

```typescript
public readonly whoCanModerateMembers: string;
```

- *Type:* string

---

##### `whoCanPostMessage`<sup>Required</sup> <a name="whoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessage"></a>

```typescript
public readonly whoCanPostMessage: string;
```

- *Type:* string

---

##### `whoCanViewGroup`<sup>Required</sup> <a name="whoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroup"></a>

```typescript
public readonly whoCanViewGroup: string;
```

- *Type:* string

---

##### `whoCanViewMembership`<sup>Required</sup> <a name="whoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembership"></a>

```typescript
public readonly whoCanViewMembership: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupSettingsConfig <a name="GroupSettingsConfig" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.Initializer"></a>

```typescript
import { groupSettings } from '@cdktf/provider-googleworkspace'

const groupSettingsConfig: groupSettings.GroupSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.email">email</a></code> | <code>string</code> | The group's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowExternalMembers">allowExternalMembers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowWebPosting">allowWebPosting</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.archiveOnly">archiveOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customFooterText">customFooterText</a></code> | <code>string</code> | Set the content of custom footer text. The maximum number of characters is 1,000. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customReplyTo">customReplyTo</a></code> | <code>string</code> | An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.defaultMessageDenyNotificationText">defaultMessageDenyNotificationText</a></code> | <code>string</code> | When a message is rejected, this is text for the rejection notification sent to the message's author. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.enableCollaborativeInbox">enableCollaborativeInbox</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeCustomFooter">includeCustomFooter</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. Whether to include custom footer. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeInGlobalAddressList">includeInGlobalAddressList</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.isArchived">isArchived</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.membersCanPostAsTheGroup">membersCanPostAsTheGroup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.messageModerationLevel">messageModerationLevel</a></code> | <code>string</code> | Defaults to `MODERATE_NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.primaryLanguage">primaryLanguage</a></code> | <code>string</code> | The primary language for group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.replyTo">replyTo</a></code> | <code>string</code> | Defaults to `REPLY_TO_IGNORE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.sendMessageDenyNotification">sendMessageDenyNotification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.spamModerationLevel">spamModerationLevel</a></code> | <code>string</code> | Defaults to `MODERATE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanAssistContent">whoCanAssistContent</a></code> | <code>string</code> | Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  	- `ALL_MEMBERS` 	- `OWNERS_AND_MANAGERS` 	- `MANAGERS_ONLY` 	- `OWNERS_ONLY` 	- `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanContactOwner">whoCanContactOwner</a></code> | <code>string</code> | Defaults to `ANYONE_CAN_CONTACT`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanDiscoverGroup">whoCanDiscoverGroup</a></code> | <code>string</code> | Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanJoin">whoCanJoin</a></code> | <code>string</code> | Defaults to `CAN_REQUEST_TO_JOIN`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanLeaveGroup">whoCanLeaveGroup</a></code> | <code>string</code> | Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: 	- `ALL_MANAGERS_CAN_LEAVE` 	- `ALL_MEMBERS_CAN_LEAVE` 	- `NONE_CAN_LEAVE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateContent">whoCanModerateContent</a></code> | <code>string</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  	- `ALL_MEMBERS` 	- `OWNERS_AND_MANAGERS` 	- `OWNERS_ONLY` 	- `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateMembers">whoCanModerateMembers</a></code> | <code>string</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  	- `ALL_MEMBERS` 	- `OWNERS_AND_MANAGERS` 	- `OWNERS_ONLY` 	- `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanPostMessage">whoCanPostMessage</a></code> | <code>string</code> | Permissions to post messages. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewGroup">whoCanViewGroup</a></code> | <code>string</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewMembership">whoCanViewMembership</a></code> | <code>string</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#email GroupSettings#email}

---

##### `allowExternalMembers`<sup>Optional</sup> <a name="allowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowExternalMembers"></a>

```typescript
public readonly allowExternalMembers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Identifies whether members external to your organization can join the group. If true, Google Workspace users external to your organization can become members of this group. If false, users not belonging to the organization are not allowed to become members of this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_external_members GroupSettings#allow_external_members}

---

##### `allowWebPosting`<sup>Optional</sup> <a name="allowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowWebPosting"></a>

```typescript
public readonly allowWebPosting: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `true`.

Allows posting from web. If true, allows any member to post to the group forum. If false, Members only use Gmail to communicate with the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_web_posting GroupSettings#allow_web_posting}

---

##### `archiveOnly`<sup>Optional</sup> <a name="archiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.archiveOnly"></a>

```typescript
public readonly archiveOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Allows the group to be archived only. If true, Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browsable and searchable. If true, the `who_can_post_message` property is set to `NONE_CAN_POST`. If reverted from true to false, `who_can_post_message` is set to `ALL_MANAGERS_CAN_POST`. If false, The group is active and can receive messages. When false, updating `who_can_post_message` to `NONE_CAN_POST`, results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#archive_only GroupSettings#archive_only}

---

##### `customFooterText`<sup>Optional</sup> <a name="customFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customFooterText"></a>

```typescript
public readonly customFooterText: string;
```

- *Type:* string

Set the content of custom footer text. The maximum number of characters is 1,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_footer_text GroupSettings#custom_footer_text}

---

##### `customReplyTo`<sup>Optional</sup> <a name="customReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customReplyTo"></a>

```typescript
public readonly customReplyTo: string;
```

- *Type:* string

An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`.

This address is defined by an account administrator. When the group's `reply_to` property is set to `REPLY_TO_CUSTOM`, the `custom_reply_to` property holds a custom email address used when replying to a message, the `custom_reply_to` property must have a text value or an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_reply_to GroupSettings#custom_reply_to}

---

##### `defaultMessageDenyNotificationText`<sup>Optional</sup> <a name="defaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.defaultMessageDenyNotificationText"></a>

```typescript
public readonly defaultMessageDenyNotificationText: string;
```

- *Type:* string

When a message is rejected, this is text for the rejection notification sent to the message's author.

By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Requires `send_message_deny_notification` property to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#default_message_deny_notification_text GroupSettings#default_message_deny_notification_text}

---

##### `enableCollaborativeInbox`<sup>Optional</sup> <a name="enableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.enableCollaborativeInbox"></a>

```typescript
public readonly enableCollaborativeInbox: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#enable_collaborative_inbox GroupSettings#enable_collaborative_inbox}

---

##### `includeCustomFooter`<sup>Optional</sup> <a name="includeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeCustomFooter"></a>

```typescript
public readonly includeCustomFooter: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`. Whether to include custom footer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_custom_footer GroupSettings#include_custom_footer}

---

##### `includeInGlobalAddressList`<sup>Optional</sup> <a name="includeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeInGlobalAddressList"></a>

```typescript
public readonly includeInGlobalAddressList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `true`.

Enables the group to be included in the Global Address List. If true, the group is included in the Global Address List. If false, it is not included in the Global Address List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_in_global_address_list GroupSettings#include_in_global_address_list}

---

##### `isArchived`<sup>Optional</sup> <a name="isArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.isArchived"></a>

```typescript
public readonly isArchived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Allows the Group contents to be archived. If true, archive messages sent to the group. If false, Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#is_archived GroupSettings#is_archived}

---

##### `membersCanPostAsTheGroup`<sup>Optional</sup> <a name="membersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.membersCanPostAsTheGroup"></a>

```typescript
public readonly membersCanPostAsTheGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Enables members to post messages as the group. If true, group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Any message moderation settings on individual users or new members do not apply to posts made on behalf of the group. If false, members can not post in behalf of the group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#members_can_post_as_the_group GroupSettings#members_can_post_as_the_group}

---

##### `messageModerationLevel`<sup>Optional</sup> <a name="messageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.messageModerationLevel"></a>

```typescript
public readonly messageModerationLevel: string;
```

- *Type:* string

Defaults to `MODERATE_NONE`.

Moderation level of incoming messages. Possible values are: 
	- `MODERATE_ALL_MESSAGES`: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group. 
	- `MODERATE_NON_MEMBERS`: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group. 
	- `MODERATE_NEW_MEMBERS`: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group. 
	- `MODERATE_NONE`: No moderator approval is required. Messages are delivered directly to the group.
	Note: When the `who_can_post_message` is set to `ANYONE_CAN_POST`, we recommend the `message_moderation_level` be set to `MODERATE_NON_MEMBERS` to protect the group from possible spam.When `member_can_post_as_the_group` is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#message_moderation_level GroupSettings#message_moderation_level}

---

##### `primaryLanguage`<sup>Optional</sup> <a name="primaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.primaryLanguage"></a>

```typescript
public readonly primaryLanguage: string;
```

- *Type:* string

The primary language for group.

For a group's primary language use the language tags from the Google Workspace languages found at Google Workspace Email Settings API Email Language Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#primary_language GroupSettings#primary_language}

---

##### `replyTo`<sup>Optional</sup> <a name="replyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.replyTo"></a>

```typescript
public readonly replyTo: string;
```

- *Type:* string

Defaults to `REPLY_TO_IGNORE`.

Specifies who receives the default reply. Possible values are: 
	- `REPLY_TO_CUSTOM`: For replies to messages, use the group's custom email address. When set to `REPLY_TO_CUSTOM`, the `custom_reply_to` property holds the custom email address used when replying to a message, the customReplyTo property must have a value. Otherwise an error is returned. 
	- `REPLY_TO_SENDER`: The reply sent to author of message. 
	- `REPLY_TO_LIST`: This reply message is sent to the group. 
	- `REPLY_TO_OWNER`: The reply is sent to the owner(s) of the group. This does not include the group's managers. 
	- `REPLY_TO_IGNORE`: Group users individually decide where the message reply is sent. 
	- `REPLY_TO_MANAGERS`: This reply message is sent to the group's managers, which includes all managers and the group owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#reply_to GroupSettings#reply_to}

---

##### `sendMessageDenyNotification`<sup>Optional</sup> <a name="sendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.sendMessageDenyNotification"></a>

```typescript
public readonly sendMessageDenyNotification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Allows a member to be notified if the member's message to the group is denied by the group owner. If true, when a message is rejected, send the deny message notification to the message author. The `default_message_deny_notification_text` property is dependent on the `send_message_deny_notification` property being true. If false, when a message is rejected, no notification is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#send_message_deny_notification GroupSettings#send_message_deny_notification}

---

##### `spamModerationLevel`<sup>Optional</sup> <a name="spamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.spamModerationLevel"></a>

```typescript
public readonly spamModerationLevel: string;
```

- *Type:* string

Defaults to `MODERATE`.

Specifies moderation levels for messages detected as spam. Possible values are: 
	- `ALLOW`: Post the message to the group. 
	- `MODERATE`: Send the message to the moderation queue. This is the default. 
	- `SILENTLY_MODERATE`: Send the message to the moderation queue, but do not send notification to moderators. 
	- `REJECT`: Immediately reject the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#spam_moderation_level GroupSettings#spam_moderation_level}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GroupSettingsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#timeouts GroupSettings#timeouts}

---

##### `whoCanAssistContent`<sup>Optional</sup> <a name="whoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanAssistContent"></a>

```typescript
public readonly whoCanAssistContent: string;
```

- *Type:* string

Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  	- `ALL_MEMBERS` 	- `OWNERS_AND_MANAGERS` 	- `MANAGERS_ONLY` 	- `OWNERS_ONLY` 	- `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_assist_content GroupSettings#who_can_assist_content}

---

##### `whoCanContactOwner`<sup>Optional</sup> <a name="whoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanContactOwner"></a>

```typescript
public readonly whoCanContactOwner: string;
```

- *Type:* string

Defaults to `ANYONE_CAN_CONTACT`.

Permission to contact owner of the group via web UI. Possible values are: 
	- `ALL_IN_DOMAIN_CAN_CONTACT`
	- `ALL_MANAGERS_CAN_CONTACT`
	- `ALL_MEMBERS_CAN_CONTACT`
	- `ANYONE_CAN_CONTACT`
	- `ALL_OWNERS_CAN_CONTACT`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_contact_owner GroupSettings#who_can_contact_owner}

---

##### `whoCanDiscoverGroup`<sup>Optional</sup> <a name="whoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanDiscoverGroup"></a>

```typescript
public readonly whoCanDiscoverGroup: string;
```

- *Type:* string

Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`.

Specifies the set of users for whom this group is discoverable. Possible values are: 
	- `ANYONE_CAN_DISCOVER`
	- `ALL_IN_DOMAIN_CAN_DISCOVER`
	- `ALL_MEMBERS_CAN_DISCOVER`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_discover_group GroupSettings#who_can_discover_group}

---

##### `whoCanJoin`<sup>Optional</sup> <a name="whoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanJoin"></a>

```typescript
public readonly whoCanJoin: string;
```

- *Type:* string

Defaults to `CAN_REQUEST_TO_JOIN`.

Permission to join group. Possible values are: 
	- `ANYONE_CAN_JOIN`: Any Internet user, both inside and outside your domain, can join the group. 
	- `ALL_IN_DOMAIN_CAN_JOIN`: Anyone in the account domain can join. This includes accounts with multiple domains. 
	- `INVITED_CAN_JOIN`: Candidates for membership can be invited to join. 
	- `CAN_REQUEST_TO_JOIN`: Non members can request an invitation to join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_join GroupSettings#who_can_join}

---

##### `whoCanLeaveGroup`<sup>Optional</sup> <a name="whoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanLeaveGroup"></a>

```typescript
public readonly whoCanLeaveGroup: string;
```

- *Type:* string

Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: 	- `ALL_MANAGERS_CAN_LEAVE` 	- `ALL_MEMBERS_CAN_LEAVE` 	- `NONE_CAN_LEAVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_leave_group GroupSettings#who_can_leave_group}

---

##### `whoCanModerateContent`<sup>Optional</sup> <a name="whoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateContent"></a>

```typescript
public readonly whoCanModerateContent: string;
```

- *Type:* string

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  	- `ALL_MEMBERS` 	- `OWNERS_AND_MANAGERS` 	- `OWNERS_ONLY` 	- `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_content GroupSettings#who_can_moderate_content}

---

##### `whoCanModerateMembers`<sup>Optional</sup> <a name="whoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateMembers"></a>

```typescript
public readonly whoCanModerateMembers: string;
```

- *Type:* string

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  	- `ALL_MEMBERS` 	- `OWNERS_AND_MANAGERS` 	- `OWNERS_ONLY` 	- `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_members GroupSettings#who_can_moderate_members}

---

##### `whoCanPostMessage`<sup>Optional</sup> <a name="whoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanPostMessage"></a>

```typescript
public readonly whoCanPostMessage: string;
```

- *Type:* string

Permissions to post messages.

Possible values are: 
	- `NONE_CAN_POST`: The group is disabled and archived. No one can post a message to this group. * When archiveOnly is false, updating whoCanPostMessage to NONE_CAN_POST, results in an error. * If archiveOnly is reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST. 
	- `ALL_MANAGERS_CAN_POST`: Managers, including group owners, can post messages. 
	- `ALL_MEMBERS_CAN_POST`: Any group member can post a message. 
	- `ALL_OWNERS_CAN_POST`: Only group owners can post a message. 
	- `ALL_IN_DOMAIN_CAN_POST`: Anyone in the account can post a message. 
	- `ANYONE_CAN_POST`: Any Internet user who outside your account can access your Google Groups service and post a message. 
	*Note: When `who_can_post_message` is set to `ANYONE_CAN_POST`, we recommend the`message_moderation_level` be set to `MODERATE_NON_MEMBERS` to protect the group from possible spam. Users not belonging to the organization are not allowed to become members of this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_post_message GroupSettings#who_can_post_message}

---

##### `whoCanViewGroup`<sup>Optional</sup> <a name="whoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewGroup"></a>

```typescript
public readonly whoCanViewGroup: string;
```

- *Type:* string

Defaults to `ALL_MEMBERS_CAN_VIEW`.

Permissions to view group messages. Possible values are: 
	- `ANYONE_CAN_VIEW`: Any Internet user can view the group's messages. 
	- `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in your account can view this group's messages. 
	- `ALL_MEMBERS_CAN_VIEW`: All group members can view the group's messages. 
	- `ALL_MANAGERS_CAN_VIEW`: Any group manager can view this group's messages. 
	- `ALL_OWNERS_CAN_VIEW`: The group owners can view this group's messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_view_group GroupSettings#who_can_view_group}

---

##### `whoCanViewMembership`<sup>Optional</sup> <a name="whoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewMembership"></a>

```typescript
public readonly whoCanViewMembership: string;
```

- *Type:* string

Defaults to `ALL_MEMBERS_CAN_VIEW`.

Permissions to view membership. Possible values are: 
	- `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in the account can view the group members list. If a group already has external members, those members can still send email to this group. 
	- `ALL_MEMBERS_CAN_VIEW`: The group members can view the group members list. 
	- `ALL_MANAGERS_CAN_VIEW`: The group managers can view group members list. 
	- `ALL_OWNERS_CAN_VIEW`: The group owners can view group members list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_view_membership GroupSettings#who_can_view_membership}

---

### GroupSettingsTimeouts <a name="GroupSettingsTimeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.Initializer"></a>

```typescript
import { groupSettings } from '@cdktf/provider-googleworkspace'

const groupSettingsTimeouts: groupSettings.GroupSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#create GroupSettings#create}. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#update GroupSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#create GroupSettings#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#update GroupSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupSettingsTimeoutsOutputReference <a name="GroupSettingsTimeoutsOutputReference" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { groupSettings } from '@cdktf/provider-googleworkspace'

new groupSettings.GroupSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroupSettingsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

---



