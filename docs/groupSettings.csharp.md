# `groupSettings` Submodule <a name="`groupSettings` Submodule" id="@cdktf/provider-googleworkspace.groupSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupSettings <a name="GroupSettings" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings googleworkspace_group_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new GroupSettings(Construct Scope, string Id, GroupSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig">GroupSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig">GroupSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowExternalMembers">ResetAllowExternalMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowWebPosting">ResetAllowWebPosting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetArchiveOnly">ResetArchiveOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomFooterText">ResetCustomFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomReplyTo">ResetCustomReplyTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetDefaultMessageDenyNotificationText">ResetDefaultMessageDenyNotificationText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetEnableCollaborativeInbox">ResetEnableCollaborativeInbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeCustomFooter">ResetIncludeCustomFooter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeInGlobalAddressList">ResetIncludeInGlobalAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIsArchived">ResetIsArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMembersCanPostAsTheGroup">ResetMembersCanPostAsTheGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMessageModerationLevel">ResetMessageModerationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetPrimaryLanguage">ResetPrimaryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetReplyTo">ResetReplyTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSendMessageDenyNotification">ResetSendMessageDenyNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSpamModerationLevel">ResetSpamModerationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanAssistContent">ResetWhoCanAssistContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanContactOwner">ResetWhoCanContactOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanDiscoverGroup">ResetWhoCanDiscoverGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanJoin">ResetWhoCanJoin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanLeaveGroup">ResetWhoCanLeaveGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateContent">ResetWhoCanModerateContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateMembers">ResetWhoCanModerateMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanPostMessage">ResetWhoCanPostMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewGroup">ResetWhoCanViewGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewMembership">ResetWhoCanViewMembership</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(GroupSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

---

##### `ResetAllowExternalMembers` <a name="ResetAllowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowExternalMembers"></a>

```csharp
private void ResetAllowExternalMembers()
```

##### `ResetAllowWebPosting` <a name="ResetAllowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowWebPosting"></a>

```csharp
private void ResetAllowWebPosting()
```

##### `ResetArchiveOnly` <a name="ResetArchiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetArchiveOnly"></a>

```csharp
private void ResetArchiveOnly()
```

##### `ResetCustomFooterText` <a name="ResetCustomFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomFooterText"></a>

```csharp
private void ResetCustomFooterText()
```

##### `ResetCustomReplyTo` <a name="ResetCustomReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomReplyTo"></a>

```csharp
private void ResetCustomReplyTo()
```

##### `ResetDefaultMessageDenyNotificationText` <a name="ResetDefaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetDefaultMessageDenyNotificationText"></a>

```csharp
private void ResetDefaultMessageDenyNotificationText()
```

##### `ResetEnableCollaborativeInbox` <a name="ResetEnableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetEnableCollaborativeInbox"></a>

```csharp
private void ResetEnableCollaborativeInbox()
```

##### `ResetIncludeCustomFooter` <a name="ResetIncludeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeCustomFooter"></a>

```csharp
private void ResetIncludeCustomFooter()
```

##### `ResetIncludeInGlobalAddressList` <a name="ResetIncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeInGlobalAddressList"></a>

```csharp
private void ResetIncludeInGlobalAddressList()
```

##### `ResetIsArchived` <a name="ResetIsArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIsArchived"></a>

```csharp
private void ResetIsArchived()
```

##### `ResetMembersCanPostAsTheGroup` <a name="ResetMembersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMembersCanPostAsTheGroup"></a>

```csharp
private void ResetMembersCanPostAsTheGroup()
```

##### `ResetMessageModerationLevel` <a name="ResetMessageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMessageModerationLevel"></a>

```csharp
private void ResetMessageModerationLevel()
```

##### `ResetPrimaryLanguage` <a name="ResetPrimaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetPrimaryLanguage"></a>

```csharp
private void ResetPrimaryLanguage()
```

##### `ResetReplyTo` <a name="ResetReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetReplyTo"></a>

```csharp
private void ResetReplyTo()
```

##### `ResetSendMessageDenyNotification` <a name="ResetSendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSendMessageDenyNotification"></a>

```csharp
private void ResetSendMessageDenyNotification()
```

##### `ResetSpamModerationLevel` <a name="ResetSpamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSpamModerationLevel"></a>

```csharp
private void ResetSpamModerationLevel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWhoCanAssistContent` <a name="ResetWhoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanAssistContent"></a>

```csharp
private void ResetWhoCanAssistContent()
```

##### `ResetWhoCanContactOwner` <a name="ResetWhoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanContactOwner"></a>

```csharp
private void ResetWhoCanContactOwner()
```

##### `ResetWhoCanDiscoverGroup` <a name="ResetWhoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanDiscoverGroup"></a>

```csharp
private void ResetWhoCanDiscoverGroup()
```

##### `ResetWhoCanJoin` <a name="ResetWhoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanJoin"></a>

```csharp
private void ResetWhoCanJoin()
```

##### `ResetWhoCanLeaveGroup` <a name="ResetWhoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanLeaveGroup"></a>

```csharp
private void ResetWhoCanLeaveGroup()
```

##### `ResetWhoCanModerateContent` <a name="ResetWhoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateContent"></a>

```csharp
private void ResetWhoCanModerateContent()
```

##### `ResetWhoCanModerateMembers` <a name="ResetWhoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateMembers"></a>

```csharp
private void ResetWhoCanModerateMembers()
```

##### `ResetWhoCanPostMessage` <a name="ResetWhoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanPostMessage"></a>

```csharp
private void ResetWhoCanPostMessage()
```

##### `ResetWhoCanViewGroup` <a name="ResetWhoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewGroup"></a>

```csharp
private void ResetWhoCanViewGroup()
```

##### `ResetWhoCanViewMembership` <a name="ResetWhoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewMembership"></a>

```csharp
private void ResetWhoCanViewMembership()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GroupSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

GroupSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

GroupSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

GroupSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

GroupSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GroupSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GroupSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customRolesEnabledForSettingsToBeMerged">CustomRolesEnabledForSettingsToBeMerged</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference">GroupSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembersInput">AllowExternalMembersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPostingInput">AllowWebPostingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnlyInput">ArchiveOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterTextInput">CustomFooterTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyToInput">CustomReplyToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationTextInput">DefaultMessageDenyNotificationTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInboxInput">EnableCollaborativeInboxInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooterInput">IncludeCustomFooterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressListInput">IncludeInGlobalAddressListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchivedInput">IsArchivedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroupInput">MembersCanPostAsTheGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevelInput">MessageModerationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguageInput">PrimaryLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyToInput">ReplyToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotificationInput">SendMessageDenyNotificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevelInput">SpamModerationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContentInput">WhoCanAssistContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwnerInput">WhoCanContactOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroupInput">WhoCanDiscoverGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoinInput">WhoCanJoinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroupInput">WhoCanLeaveGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContentInput">WhoCanModerateContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembersInput">WhoCanModerateMembersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessageInput">WhoCanPostMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroupInput">WhoCanViewGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembershipInput">WhoCanViewMembershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembers">AllowExternalMembers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPosting">AllowWebPosting</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnly">ArchiveOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterText">CustomFooterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyTo">CustomReplyTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationText">DefaultMessageDenyNotificationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInbox">EnableCollaborativeInbox</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooter">IncludeCustomFooter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressList">IncludeInGlobalAddressList</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchived">IsArchived</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroup">MembersCanPostAsTheGroup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevel">MessageModerationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguage">PrimaryLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyTo">ReplyTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotification">SendMessageDenyNotification</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevel">SpamModerationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContent">WhoCanAssistContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwner">WhoCanContactOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroup">WhoCanDiscoverGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoin">WhoCanJoin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroup">WhoCanLeaveGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContent">WhoCanModerateContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembers">WhoCanModerateMembers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessage">WhoCanPostMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroup">WhoCanViewGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembership">WhoCanViewMembership</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomRolesEnabledForSettingsToBeMerged`<sup>Required</sup> <a name="CustomRolesEnabledForSettingsToBeMerged" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customRolesEnabledForSettingsToBeMerged"></a>

```csharp
public IResolvable CustomRolesEnabledForSettingsToBeMerged { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeouts"></a>

```csharp
public GroupSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference">GroupSettingsTimeoutsOutputReference</a>

---

##### `AllowExternalMembersInput`<sup>Optional</sup> <a name="AllowExternalMembersInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembersInput"></a>

```csharp
public object AllowExternalMembersInput { get; }
```

- *Type:* object

---

##### `AllowWebPostingInput`<sup>Optional</sup> <a name="AllowWebPostingInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPostingInput"></a>

```csharp
public object AllowWebPostingInput { get; }
```

- *Type:* object

---

##### `ArchiveOnlyInput`<sup>Optional</sup> <a name="ArchiveOnlyInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnlyInput"></a>

```csharp
public object ArchiveOnlyInput { get; }
```

- *Type:* object

---

##### `CustomFooterTextInput`<sup>Optional</sup> <a name="CustomFooterTextInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterTextInput"></a>

```csharp
public string CustomFooterTextInput { get; }
```

- *Type:* string

---

##### `CustomReplyToInput`<sup>Optional</sup> <a name="CustomReplyToInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyToInput"></a>

```csharp
public string CustomReplyToInput { get; }
```

- *Type:* string

---

##### `DefaultMessageDenyNotificationTextInput`<sup>Optional</sup> <a name="DefaultMessageDenyNotificationTextInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationTextInput"></a>

```csharp
public string DefaultMessageDenyNotificationTextInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `EnableCollaborativeInboxInput`<sup>Optional</sup> <a name="EnableCollaborativeInboxInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInboxInput"></a>

```csharp
public object EnableCollaborativeInboxInput { get; }
```

- *Type:* object

---

##### `IncludeCustomFooterInput`<sup>Optional</sup> <a name="IncludeCustomFooterInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooterInput"></a>

```csharp
public object IncludeCustomFooterInput { get; }
```

- *Type:* object

---

##### `IncludeInGlobalAddressListInput`<sup>Optional</sup> <a name="IncludeInGlobalAddressListInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressListInput"></a>

```csharp
public object IncludeInGlobalAddressListInput { get; }
```

- *Type:* object

---

##### `IsArchivedInput`<sup>Optional</sup> <a name="IsArchivedInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchivedInput"></a>

```csharp
public object IsArchivedInput { get; }
```

- *Type:* object

---

##### `MembersCanPostAsTheGroupInput`<sup>Optional</sup> <a name="MembersCanPostAsTheGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroupInput"></a>

```csharp
public object MembersCanPostAsTheGroupInput { get; }
```

- *Type:* object

---

##### `MessageModerationLevelInput`<sup>Optional</sup> <a name="MessageModerationLevelInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevelInput"></a>

```csharp
public string MessageModerationLevelInput { get; }
```

- *Type:* string

---

##### `PrimaryLanguageInput`<sup>Optional</sup> <a name="PrimaryLanguageInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguageInput"></a>

```csharp
public string PrimaryLanguageInput { get; }
```

- *Type:* string

---

##### `ReplyToInput`<sup>Optional</sup> <a name="ReplyToInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyToInput"></a>

```csharp
public string ReplyToInput { get; }
```

- *Type:* string

---

##### `SendMessageDenyNotificationInput`<sup>Optional</sup> <a name="SendMessageDenyNotificationInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotificationInput"></a>

```csharp
public object SendMessageDenyNotificationInput { get; }
```

- *Type:* object

---

##### `SpamModerationLevelInput`<sup>Optional</sup> <a name="SpamModerationLevelInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevelInput"></a>

```csharp
public string SpamModerationLevelInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WhoCanAssistContentInput`<sup>Optional</sup> <a name="WhoCanAssistContentInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContentInput"></a>

```csharp
public string WhoCanAssistContentInput { get; }
```

- *Type:* string

---

##### `WhoCanContactOwnerInput`<sup>Optional</sup> <a name="WhoCanContactOwnerInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwnerInput"></a>

```csharp
public string WhoCanContactOwnerInput { get; }
```

- *Type:* string

---

##### `WhoCanDiscoverGroupInput`<sup>Optional</sup> <a name="WhoCanDiscoverGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroupInput"></a>

```csharp
public string WhoCanDiscoverGroupInput { get; }
```

- *Type:* string

---

##### `WhoCanJoinInput`<sup>Optional</sup> <a name="WhoCanJoinInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoinInput"></a>

```csharp
public string WhoCanJoinInput { get; }
```

- *Type:* string

---

##### `WhoCanLeaveGroupInput`<sup>Optional</sup> <a name="WhoCanLeaveGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroupInput"></a>

```csharp
public string WhoCanLeaveGroupInput { get; }
```

- *Type:* string

---

##### `WhoCanModerateContentInput`<sup>Optional</sup> <a name="WhoCanModerateContentInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContentInput"></a>

```csharp
public string WhoCanModerateContentInput { get; }
```

- *Type:* string

---

##### `WhoCanModerateMembersInput`<sup>Optional</sup> <a name="WhoCanModerateMembersInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembersInput"></a>

```csharp
public string WhoCanModerateMembersInput { get; }
```

- *Type:* string

---

##### `WhoCanPostMessageInput`<sup>Optional</sup> <a name="WhoCanPostMessageInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessageInput"></a>

```csharp
public string WhoCanPostMessageInput { get; }
```

- *Type:* string

---

##### `WhoCanViewGroupInput`<sup>Optional</sup> <a name="WhoCanViewGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroupInput"></a>

```csharp
public string WhoCanViewGroupInput { get; }
```

- *Type:* string

---

##### `WhoCanViewMembershipInput`<sup>Optional</sup> <a name="WhoCanViewMembershipInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembershipInput"></a>

```csharp
public string WhoCanViewMembershipInput { get; }
```

- *Type:* string

---

##### `AllowExternalMembers`<sup>Required</sup> <a name="AllowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembers"></a>

```csharp
public object AllowExternalMembers { get; }
```

- *Type:* object

---

##### `AllowWebPosting`<sup>Required</sup> <a name="AllowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPosting"></a>

```csharp
public object AllowWebPosting { get; }
```

- *Type:* object

---

##### `ArchiveOnly`<sup>Required</sup> <a name="ArchiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnly"></a>

```csharp
public object ArchiveOnly { get; }
```

- *Type:* object

---

##### `CustomFooterText`<sup>Required</sup> <a name="CustomFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterText"></a>

```csharp
public string CustomFooterText { get; }
```

- *Type:* string

---

##### `CustomReplyTo`<sup>Required</sup> <a name="CustomReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyTo"></a>

```csharp
public string CustomReplyTo { get; }
```

- *Type:* string

---

##### `DefaultMessageDenyNotificationText`<sup>Required</sup> <a name="DefaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationText"></a>

```csharp
public string DefaultMessageDenyNotificationText { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `EnableCollaborativeInbox`<sup>Required</sup> <a name="EnableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInbox"></a>

```csharp
public object EnableCollaborativeInbox { get; }
```

- *Type:* object

---

##### `IncludeCustomFooter`<sup>Required</sup> <a name="IncludeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooter"></a>

```csharp
public object IncludeCustomFooter { get; }
```

- *Type:* object

---

##### `IncludeInGlobalAddressList`<sup>Required</sup> <a name="IncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressList"></a>

```csharp
public object IncludeInGlobalAddressList { get; }
```

- *Type:* object

---

##### `IsArchived`<sup>Required</sup> <a name="IsArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchived"></a>

```csharp
public object IsArchived { get; }
```

- *Type:* object

---

##### `MembersCanPostAsTheGroup`<sup>Required</sup> <a name="MembersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroup"></a>

```csharp
public object MembersCanPostAsTheGroup { get; }
```

- *Type:* object

---

##### `MessageModerationLevel`<sup>Required</sup> <a name="MessageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevel"></a>

```csharp
public string MessageModerationLevel { get; }
```

- *Type:* string

---

##### `PrimaryLanguage`<sup>Required</sup> <a name="PrimaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguage"></a>

```csharp
public string PrimaryLanguage { get; }
```

- *Type:* string

---

##### `ReplyTo`<sup>Required</sup> <a name="ReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyTo"></a>

```csharp
public string ReplyTo { get; }
```

- *Type:* string

---

##### `SendMessageDenyNotification`<sup>Required</sup> <a name="SendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotification"></a>

```csharp
public object SendMessageDenyNotification { get; }
```

- *Type:* object

---

##### `SpamModerationLevel`<sup>Required</sup> <a name="SpamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevel"></a>

```csharp
public string SpamModerationLevel { get; }
```

- *Type:* string

---

##### `WhoCanAssistContent`<sup>Required</sup> <a name="WhoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContent"></a>

```csharp
public string WhoCanAssistContent { get; }
```

- *Type:* string

---

##### `WhoCanContactOwner`<sup>Required</sup> <a name="WhoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwner"></a>

```csharp
public string WhoCanContactOwner { get; }
```

- *Type:* string

---

##### `WhoCanDiscoverGroup`<sup>Required</sup> <a name="WhoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroup"></a>

```csharp
public string WhoCanDiscoverGroup { get; }
```

- *Type:* string

---

##### `WhoCanJoin`<sup>Required</sup> <a name="WhoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoin"></a>

```csharp
public string WhoCanJoin { get; }
```

- *Type:* string

---

##### `WhoCanLeaveGroup`<sup>Required</sup> <a name="WhoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroup"></a>

```csharp
public string WhoCanLeaveGroup { get; }
```

- *Type:* string

---

##### `WhoCanModerateContent`<sup>Required</sup> <a name="WhoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContent"></a>

```csharp
public string WhoCanModerateContent { get; }
```

- *Type:* string

---

##### `WhoCanModerateMembers`<sup>Required</sup> <a name="WhoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembers"></a>

```csharp
public string WhoCanModerateMembers { get; }
```

- *Type:* string

---

##### `WhoCanPostMessage`<sup>Required</sup> <a name="WhoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessage"></a>

```csharp
public string WhoCanPostMessage { get; }
```

- *Type:* string

---

##### `WhoCanViewGroup`<sup>Required</sup> <a name="WhoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroup"></a>

```csharp
public string WhoCanViewGroup { get; }
```

- *Type:* string

---

##### `WhoCanViewMembership`<sup>Required</sup> <a name="WhoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembership"></a>

```csharp
public string WhoCanViewMembership { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupSettingsConfig <a name="GroupSettingsConfig" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new GroupSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Email,
    object AllowExternalMembers = null,
    object AllowWebPosting = null,
    object ArchiveOnly = null,
    string CustomFooterText = null,
    string CustomReplyTo = null,
    string DefaultMessageDenyNotificationText = null,
    object EnableCollaborativeInbox = null,
    object IncludeCustomFooter = null,
    object IncludeInGlobalAddressList = null,
    object IsArchived = null,
    object MembersCanPostAsTheGroup = null,
    string MessageModerationLevel = null,
    string PrimaryLanguage = null,
    string ReplyTo = null,
    object SendMessageDenyNotification = null,
    string SpamModerationLevel = null,
    GroupSettingsTimeouts Timeouts = null,
    string WhoCanAssistContent = null,
    string WhoCanContactOwner = null,
    string WhoCanDiscoverGroup = null,
    string WhoCanJoin = null,
    string WhoCanLeaveGroup = null,
    string WhoCanModerateContent = null,
    string WhoCanModerateMembers = null,
    string WhoCanPostMessage = null,
    string WhoCanViewGroup = null,
    string WhoCanViewMembership = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.email">Email</a></code> | <code>string</code> | The group's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowExternalMembers">AllowExternalMembers</a></code> | <code>object</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowWebPosting">AllowWebPosting</a></code> | <code>object</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.archiveOnly">ArchiveOnly</a></code> | <code>object</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customFooterText">CustomFooterText</a></code> | <code>string</code> | Set the content of custom footer text. The maximum number of characters is 1,000. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customReplyTo">CustomReplyTo</a></code> | <code>string</code> | An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.defaultMessageDenyNotificationText">DefaultMessageDenyNotificationText</a></code> | <code>string</code> | When a message is rejected, this is text for the rejection notification sent to the message's author. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.enableCollaborativeInbox">EnableCollaborativeInbox</a></code> | <code>object</code> | Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeCustomFooter">IncludeCustomFooter</a></code> | <code>object</code> | Defaults to `false`. Whether to include custom footer. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeInGlobalAddressList">IncludeInGlobalAddressList</a></code> | <code>object</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.isArchived">IsArchived</a></code> | <code>object</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.membersCanPostAsTheGroup">MembersCanPostAsTheGroup</a></code> | <code>object</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.messageModerationLevel">MessageModerationLevel</a></code> | <code>string</code> | Defaults to `MODERATE_NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.primaryLanguage">PrimaryLanguage</a></code> | <code>string</code> | The primary language for group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.replyTo">ReplyTo</a></code> | <code>string</code> | Defaults to `REPLY_TO_IGNORE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.sendMessageDenyNotification">SendMessageDenyNotification</a></code> | <code>object</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.spamModerationLevel">SpamModerationLevel</a></code> | <code>string</code> | Defaults to `MODERATE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanAssistContent">WhoCanAssistContent</a></code> | <code>string</code> | Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  	- `ALL_MEMBERS` 	- `OWNERS_AND_MANAGERS` 	- `MANAGERS_ONLY` 	- `OWNERS_ONLY` 	- `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanContactOwner">WhoCanContactOwner</a></code> | <code>string</code> | Defaults to `ANYONE_CAN_CONTACT`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanDiscoverGroup">WhoCanDiscoverGroup</a></code> | <code>string</code> | Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanJoin">WhoCanJoin</a></code> | <code>string</code> | Defaults to `CAN_REQUEST_TO_JOIN`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanLeaveGroup">WhoCanLeaveGroup</a></code> | <code>string</code> | Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: 	- `ALL_MANAGERS_CAN_LEAVE` 	- `ALL_MEMBERS_CAN_LEAVE` 	- `NONE_CAN_LEAVE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateContent">WhoCanModerateContent</a></code> | <code>string</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  	- `ALL_MEMBERS` 	- `OWNERS_AND_MANAGERS` 	- `OWNERS_ONLY` 	- `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateMembers">WhoCanModerateMembers</a></code> | <code>string</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  	- `ALL_MEMBERS` 	- `OWNERS_AND_MANAGERS` 	- `OWNERS_ONLY` 	- `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanPostMessage">WhoCanPostMessage</a></code> | <code>string</code> | Permissions to post messages. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewGroup">WhoCanViewGroup</a></code> | <code>string</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewMembership">WhoCanViewMembership</a></code> | <code>string</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#email GroupSettings#email}

---

##### `AllowExternalMembers`<sup>Optional</sup> <a name="AllowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowExternalMembers"></a>

```csharp
public object AllowExternalMembers { get; set; }
```

- *Type:* object

Defaults to `false`.

Identifies whether members external to your organization can join the group. If true, Google Workspace users external to your organization can become members of this group. If false, users not belonging to the organization are not allowed to become members of this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_external_members GroupSettings#allow_external_members}

---

##### `AllowWebPosting`<sup>Optional</sup> <a name="AllowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowWebPosting"></a>

```csharp
public object AllowWebPosting { get; set; }
```

- *Type:* object

Defaults to `true`.

Allows posting from web. If true, allows any member to post to the group forum. If false, Members only use Gmail to communicate with the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_web_posting GroupSettings#allow_web_posting}

---

##### `ArchiveOnly`<sup>Optional</sup> <a name="ArchiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.archiveOnly"></a>

```csharp
public object ArchiveOnly { get; set; }
```

- *Type:* object

Defaults to `false`.

Allows the group to be archived only. If true, Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browsable and searchable. If true, the `who_can_post_message` property is set to `NONE_CAN_POST`. If reverted from true to false, `who_can_post_message` is set to `ALL_MANAGERS_CAN_POST`. If false, The group is active and can receive messages. When false, updating `who_can_post_message` to `NONE_CAN_POST`, results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#archive_only GroupSettings#archive_only}

---

##### `CustomFooterText`<sup>Optional</sup> <a name="CustomFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customFooterText"></a>

```csharp
public string CustomFooterText { get; set; }
```

- *Type:* string

Set the content of custom footer text. The maximum number of characters is 1,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_footer_text GroupSettings#custom_footer_text}

---

##### `CustomReplyTo`<sup>Optional</sup> <a name="CustomReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customReplyTo"></a>

```csharp
public string CustomReplyTo { get; set; }
```

- *Type:* string

An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`.

This address is defined by an account administrator. When the group's `reply_to` property is set to `REPLY_TO_CUSTOM`, the `custom_reply_to` property holds a custom email address used when replying to a message, the `custom_reply_to` property must have a text value or an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_reply_to GroupSettings#custom_reply_to}

---

##### `DefaultMessageDenyNotificationText`<sup>Optional</sup> <a name="DefaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.defaultMessageDenyNotificationText"></a>

```csharp
public string DefaultMessageDenyNotificationText { get; set; }
```

- *Type:* string

When a message is rejected, this is text for the rejection notification sent to the message's author.

By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Requires `send_message_deny_notification` property to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#default_message_deny_notification_text GroupSettings#default_message_deny_notification_text}

---

##### `EnableCollaborativeInbox`<sup>Optional</sup> <a name="EnableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.enableCollaborativeInbox"></a>

```csharp
public object EnableCollaborativeInbox { get; set; }
```

- *Type:* object

Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#enable_collaborative_inbox GroupSettings#enable_collaborative_inbox}

---

##### `IncludeCustomFooter`<sup>Optional</sup> <a name="IncludeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeCustomFooter"></a>

```csharp
public object IncludeCustomFooter { get; set; }
```

- *Type:* object

Defaults to `false`. Whether to include custom footer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_custom_footer GroupSettings#include_custom_footer}

---

##### `IncludeInGlobalAddressList`<sup>Optional</sup> <a name="IncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeInGlobalAddressList"></a>

```csharp
public object IncludeInGlobalAddressList { get; set; }
```

- *Type:* object

Defaults to `true`.

Enables the group to be included in the Global Address List. If true, the group is included in the Global Address List. If false, it is not included in the Global Address List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_in_global_address_list GroupSettings#include_in_global_address_list}

---

##### `IsArchived`<sup>Optional</sup> <a name="IsArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.isArchived"></a>

```csharp
public object IsArchived { get; set; }
```

- *Type:* object

Defaults to `false`.

Allows the Group contents to be archived. If true, archive messages sent to the group. If false, Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#is_archived GroupSettings#is_archived}

---

##### `MembersCanPostAsTheGroup`<sup>Optional</sup> <a name="MembersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.membersCanPostAsTheGroup"></a>

```csharp
public object MembersCanPostAsTheGroup { get; set; }
```

- *Type:* object

Defaults to `false`.

Enables members to post messages as the group. If true, group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Any message moderation settings on individual users or new members do not apply to posts made on behalf of the group. If false, members can not post in behalf of the group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#members_can_post_as_the_group GroupSettings#members_can_post_as_the_group}

---

##### `MessageModerationLevel`<sup>Optional</sup> <a name="MessageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.messageModerationLevel"></a>

```csharp
public string MessageModerationLevel { get; set; }
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

##### `PrimaryLanguage`<sup>Optional</sup> <a name="PrimaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.primaryLanguage"></a>

```csharp
public string PrimaryLanguage { get; set; }
```

- *Type:* string

The primary language for group.

For a group's primary language use the language tags from the Google Workspace languages found at Google Workspace Email Settings API Email Language Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#primary_language GroupSettings#primary_language}

---

##### `ReplyTo`<sup>Optional</sup> <a name="ReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.replyTo"></a>

```csharp
public string ReplyTo { get; set; }
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

##### `SendMessageDenyNotification`<sup>Optional</sup> <a name="SendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.sendMessageDenyNotification"></a>

```csharp
public object SendMessageDenyNotification { get; set; }
```

- *Type:* object

Defaults to `false`.

Allows a member to be notified if the member's message to the group is denied by the group owner. If true, when a message is rejected, send the deny message notification to the message author. The `default_message_deny_notification_text` property is dependent on the `send_message_deny_notification` property being true. If false, when a message is rejected, no notification is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#send_message_deny_notification GroupSettings#send_message_deny_notification}

---

##### `SpamModerationLevel`<sup>Optional</sup> <a name="SpamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.spamModerationLevel"></a>

```csharp
public string SpamModerationLevel { get; set; }
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

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.timeouts"></a>

```csharp
public GroupSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#timeouts GroupSettings#timeouts}

---

##### `WhoCanAssistContent`<sup>Optional</sup> <a name="WhoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanAssistContent"></a>

```csharp
public string WhoCanAssistContent { get; set; }
```

- *Type:* string

Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  	- `ALL_MEMBERS` 	- `OWNERS_AND_MANAGERS` 	- `MANAGERS_ONLY` 	- `OWNERS_ONLY` 	- `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_assist_content GroupSettings#who_can_assist_content}

---

##### `WhoCanContactOwner`<sup>Optional</sup> <a name="WhoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanContactOwner"></a>

```csharp
public string WhoCanContactOwner { get; set; }
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

##### `WhoCanDiscoverGroup`<sup>Optional</sup> <a name="WhoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanDiscoverGroup"></a>

```csharp
public string WhoCanDiscoverGroup { get; set; }
```

- *Type:* string

Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`.

Specifies the set of users for whom this group is discoverable. Possible values are:
- `ANYONE_CAN_DISCOVER`
- `ALL_IN_DOMAIN_CAN_DISCOVER`
- `ALL_MEMBERS_CAN_DISCOVER`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_discover_group GroupSettings#who_can_discover_group}

---

##### `WhoCanJoin`<sup>Optional</sup> <a name="WhoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanJoin"></a>

```csharp
public string WhoCanJoin { get; set; }
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

##### `WhoCanLeaveGroup`<sup>Optional</sup> <a name="WhoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanLeaveGroup"></a>

```csharp
public string WhoCanLeaveGroup { get; set; }
```

- *Type:* string

Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: 	- `ALL_MANAGERS_CAN_LEAVE` 	- `ALL_MEMBERS_CAN_LEAVE` 	- `NONE_CAN_LEAVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_leave_group GroupSettings#who_can_leave_group}

---

##### `WhoCanModerateContent`<sup>Optional</sup> <a name="WhoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateContent"></a>

```csharp
public string WhoCanModerateContent { get; set; }
```

- *Type:* string

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  	- `ALL_MEMBERS` 	- `OWNERS_AND_MANAGERS` 	- `OWNERS_ONLY` 	- `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_content GroupSettings#who_can_moderate_content}

---

##### `WhoCanModerateMembers`<sup>Optional</sup> <a name="WhoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateMembers"></a>

```csharp
public string WhoCanModerateMembers { get; set; }
```

- *Type:* string

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  	- `ALL_MEMBERS` 	- `OWNERS_AND_MANAGERS` 	- `OWNERS_ONLY` 	- `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_members GroupSettings#who_can_moderate_members}

---

##### `WhoCanPostMessage`<sup>Optional</sup> <a name="WhoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanPostMessage"></a>

```csharp
public string WhoCanPostMessage { get; set; }
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

##### `WhoCanViewGroup`<sup>Optional</sup> <a name="WhoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewGroup"></a>

```csharp
public string WhoCanViewGroup { get; set; }
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

##### `WhoCanViewMembership`<sup>Optional</sup> <a name="WhoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewMembership"></a>

```csharp
public string WhoCanViewMembership { get; set; }
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

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new GroupSettingsTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#create GroupSettings#create}. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#update GroupSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#create GroupSettings#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#update GroupSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupSettingsTimeoutsOutputReference <a name="GroupSettingsTimeoutsOutputReference" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Googleworkspace;

new GroupSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



