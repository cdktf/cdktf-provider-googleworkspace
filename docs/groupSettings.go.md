# `googleworkspace_group_settings`

Refer to the Terraform Registory for docs: [`googleworkspace_group_settings`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings).

# `groupSettings` Submodule <a name="`groupSettings` Submodule" id="@cdktf/provider-googleworkspace.groupSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupSettings <a name="GroupSettings" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings googleworkspace_group_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/groupsettings"

groupsettings.NewGroupSettings(scope Construct, id *string, config GroupSettingsConfig) GroupSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig">GroupSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts"></a>

```go
func PutTimeouts(value GroupSettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

---

##### `ResetAllowExternalMembers` <a name="ResetAllowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowExternalMembers"></a>

```go
func ResetAllowExternalMembers()
```

##### `ResetAllowWebPosting` <a name="ResetAllowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowWebPosting"></a>

```go
func ResetAllowWebPosting()
```

##### `ResetArchiveOnly` <a name="ResetArchiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetArchiveOnly"></a>

```go
func ResetArchiveOnly()
```

##### `ResetCustomFooterText` <a name="ResetCustomFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomFooterText"></a>

```go
func ResetCustomFooterText()
```

##### `ResetCustomReplyTo` <a name="ResetCustomReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomReplyTo"></a>

```go
func ResetCustomReplyTo()
```

##### `ResetDefaultMessageDenyNotificationText` <a name="ResetDefaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetDefaultMessageDenyNotificationText"></a>

```go
func ResetDefaultMessageDenyNotificationText()
```

##### `ResetEnableCollaborativeInbox` <a name="ResetEnableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetEnableCollaborativeInbox"></a>

```go
func ResetEnableCollaborativeInbox()
```

##### `ResetIncludeCustomFooter` <a name="ResetIncludeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeCustomFooter"></a>

```go
func ResetIncludeCustomFooter()
```

##### `ResetIncludeInGlobalAddressList` <a name="ResetIncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeInGlobalAddressList"></a>

```go
func ResetIncludeInGlobalAddressList()
```

##### `ResetIsArchived` <a name="ResetIsArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIsArchived"></a>

```go
func ResetIsArchived()
```

##### `ResetMembersCanPostAsTheGroup` <a name="ResetMembersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMembersCanPostAsTheGroup"></a>

```go
func ResetMembersCanPostAsTheGroup()
```

##### `ResetMessageModerationLevel` <a name="ResetMessageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMessageModerationLevel"></a>

```go
func ResetMessageModerationLevel()
```

##### `ResetPrimaryLanguage` <a name="ResetPrimaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetPrimaryLanguage"></a>

```go
func ResetPrimaryLanguage()
```

##### `ResetReplyTo` <a name="ResetReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetReplyTo"></a>

```go
func ResetReplyTo()
```

##### `ResetSendMessageDenyNotification` <a name="ResetSendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSendMessageDenyNotification"></a>

```go
func ResetSendMessageDenyNotification()
```

##### `ResetSpamModerationLevel` <a name="ResetSpamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSpamModerationLevel"></a>

```go
func ResetSpamModerationLevel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWhoCanAssistContent` <a name="ResetWhoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanAssistContent"></a>

```go
func ResetWhoCanAssistContent()
```

##### `ResetWhoCanContactOwner` <a name="ResetWhoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanContactOwner"></a>

```go
func ResetWhoCanContactOwner()
```

##### `ResetWhoCanDiscoverGroup` <a name="ResetWhoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanDiscoverGroup"></a>

```go
func ResetWhoCanDiscoverGroup()
```

##### `ResetWhoCanJoin` <a name="ResetWhoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanJoin"></a>

```go
func ResetWhoCanJoin()
```

##### `ResetWhoCanLeaveGroup` <a name="ResetWhoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanLeaveGroup"></a>

```go
func ResetWhoCanLeaveGroup()
```

##### `ResetWhoCanModerateContent` <a name="ResetWhoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateContent"></a>

```go
func ResetWhoCanModerateContent()
```

##### `ResetWhoCanModerateMembers` <a name="ResetWhoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateMembers"></a>

```go
func ResetWhoCanModerateMembers()
```

##### `ResetWhoCanPostMessage` <a name="ResetWhoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanPostMessage"></a>

```go
func ResetWhoCanPostMessage()
```

##### `ResetWhoCanViewGroup` <a name="ResetWhoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewGroup"></a>

```go
func ResetWhoCanViewGroup()
```

##### `ResetWhoCanViewMembership` <a name="ResetWhoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewMembership"></a>

```go
func ResetWhoCanViewMembership()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/groupsettings"

groupsettings.GroupSettings_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/groupsettings"

groupsettings.GroupSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/groupsettings"

groupsettings.GroupSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customRolesEnabledForSettingsToBeMerged">CustomRolesEnabledForSettingsToBeMerged</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference">GroupSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembersInput">AllowExternalMembersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPostingInput">AllowWebPostingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnlyInput">ArchiveOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterTextInput">CustomFooterTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyToInput">CustomReplyToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationTextInput">DefaultMessageDenyNotificationTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInboxInput">EnableCollaborativeInboxInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooterInput">IncludeCustomFooterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressListInput">IncludeInGlobalAddressListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchivedInput">IsArchivedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroupInput">MembersCanPostAsTheGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevelInput">MessageModerationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguageInput">PrimaryLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyToInput">ReplyToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotificationInput">SendMessageDenyNotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevelInput">SpamModerationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContentInput">WhoCanAssistContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwnerInput">WhoCanContactOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroupInput">WhoCanDiscoverGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoinInput">WhoCanJoinInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroupInput">WhoCanLeaveGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContentInput">WhoCanModerateContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembersInput">WhoCanModerateMembersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessageInput">WhoCanPostMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroupInput">WhoCanViewGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembershipInput">WhoCanViewMembershipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembers">AllowExternalMembers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPosting">AllowWebPosting</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnly">ArchiveOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterText">CustomFooterText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyTo">CustomReplyTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationText">DefaultMessageDenyNotificationText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInbox">EnableCollaborativeInbox</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooter">IncludeCustomFooter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressList">IncludeInGlobalAddressList</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchived">IsArchived</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroup">MembersCanPostAsTheGroup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevel">MessageModerationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguage">PrimaryLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyTo">ReplyTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotification">SendMessageDenyNotification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevel">SpamModerationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContent">WhoCanAssistContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwner">WhoCanContactOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroup">WhoCanDiscoverGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoin">WhoCanJoin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroup">WhoCanLeaveGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContent">WhoCanModerateContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembers">WhoCanModerateMembers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessage">WhoCanPostMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroup">WhoCanViewGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembership">WhoCanViewMembership</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomRolesEnabledForSettingsToBeMerged`<sup>Required</sup> <a name="CustomRolesEnabledForSettingsToBeMerged" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customRolesEnabledForSettingsToBeMerged"></a>

```go
func CustomRolesEnabledForSettingsToBeMerged() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeouts"></a>

```go
func Timeouts() GroupSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference">GroupSettingsTimeoutsOutputReference</a>

---

##### `AllowExternalMembersInput`<sup>Optional</sup> <a name="AllowExternalMembersInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembersInput"></a>

```go
func AllowExternalMembersInput() interface{}
```

- *Type:* interface{}

---

##### `AllowWebPostingInput`<sup>Optional</sup> <a name="AllowWebPostingInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPostingInput"></a>

```go
func AllowWebPostingInput() interface{}
```

- *Type:* interface{}

---

##### `ArchiveOnlyInput`<sup>Optional</sup> <a name="ArchiveOnlyInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnlyInput"></a>

```go
func ArchiveOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `CustomFooterTextInput`<sup>Optional</sup> <a name="CustomFooterTextInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterTextInput"></a>

```go
func CustomFooterTextInput() *string
```

- *Type:* *string

---

##### `CustomReplyToInput`<sup>Optional</sup> <a name="CustomReplyToInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyToInput"></a>

```go
func CustomReplyToInput() *string
```

- *Type:* *string

---

##### `DefaultMessageDenyNotificationTextInput`<sup>Optional</sup> <a name="DefaultMessageDenyNotificationTextInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationTextInput"></a>

```go
func DefaultMessageDenyNotificationTextInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `EnableCollaborativeInboxInput`<sup>Optional</sup> <a name="EnableCollaborativeInboxInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInboxInput"></a>

```go
func EnableCollaborativeInboxInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeCustomFooterInput`<sup>Optional</sup> <a name="IncludeCustomFooterInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooterInput"></a>

```go
func IncludeCustomFooterInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeInGlobalAddressListInput`<sup>Optional</sup> <a name="IncludeInGlobalAddressListInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressListInput"></a>

```go
func IncludeInGlobalAddressListInput() interface{}
```

- *Type:* interface{}

---

##### `IsArchivedInput`<sup>Optional</sup> <a name="IsArchivedInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchivedInput"></a>

```go
func IsArchivedInput() interface{}
```

- *Type:* interface{}

---

##### `MembersCanPostAsTheGroupInput`<sup>Optional</sup> <a name="MembersCanPostAsTheGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroupInput"></a>

```go
func MembersCanPostAsTheGroupInput() interface{}
```

- *Type:* interface{}

---

##### `MessageModerationLevelInput`<sup>Optional</sup> <a name="MessageModerationLevelInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevelInput"></a>

```go
func MessageModerationLevelInput() *string
```

- *Type:* *string

---

##### `PrimaryLanguageInput`<sup>Optional</sup> <a name="PrimaryLanguageInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguageInput"></a>

```go
func PrimaryLanguageInput() *string
```

- *Type:* *string

---

##### `ReplyToInput`<sup>Optional</sup> <a name="ReplyToInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyToInput"></a>

```go
func ReplyToInput() *string
```

- *Type:* *string

---

##### `SendMessageDenyNotificationInput`<sup>Optional</sup> <a name="SendMessageDenyNotificationInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotificationInput"></a>

```go
func SendMessageDenyNotificationInput() interface{}
```

- *Type:* interface{}

---

##### `SpamModerationLevelInput`<sup>Optional</sup> <a name="SpamModerationLevelInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevelInput"></a>

```go
func SpamModerationLevelInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WhoCanAssistContentInput`<sup>Optional</sup> <a name="WhoCanAssistContentInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContentInput"></a>

```go
func WhoCanAssistContentInput() *string
```

- *Type:* *string

---

##### `WhoCanContactOwnerInput`<sup>Optional</sup> <a name="WhoCanContactOwnerInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwnerInput"></a>

```go
func WhoCanContactOwnerInput() *string
```

- *Type:* *string

---

##### `WhoCanDiscoverGroupInput`<sup>Optional</sup> <a name="WhoCanDiscoverGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroupInput"></a>

```go
func WhoCanDiscoverGroupInput() *string
```

- *Type:* *string

---

##### `WhoCanJoinInput`<sup>Optional</sup> <a name="WhoCanJoinInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoinInput"></a>

```go
func WhoCanJoinInput() *string
```

- *Type:* *string

---

##### `WhoCanLeaveGroupInput`<sup>Optional</sup> <a name="WhoCanLeaveGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroupInput"></a>

```go
func WhoCanLeaveGroupInput() *string
```

- *Type:* *string

---

##### `WhoCanModerateContentInput`<sup>Optional</sup> <a name="WhoCanModerateContentInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContentInput"></a>

```go
func WhoCanModerateContentInput() *string
```

- *Type:* *string

---

##### `WhoCanModerateMembersInput`<sup>Optional</sup> <a name="WhoCanModerateMembersInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembersInput"></a>

```go
func WhoCanModerateMembersInput() *string
```

- *Type:* *string

---

##### `WhoCanPostMessageInput`<sup>Optional</sup> <a name="WhoCanPostMessageInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessageInput"></a>

```go
func WhoCanPostMessageInput() *string
```

- *Type:* *string

---

##### `WhoCanViewGroupInput`<sup>Optional</sup> <a name="WhoCanViewGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroupInput"></a>

```go
func WhoCanViewGroupInput() *string
```

- *Type:* *string

---

##### `WhoCanViewMembershipInput`<sup>Optional</sup> <a name="WhoCanViewMembershipInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembershipInput"></a>

```go
func WhoCanViewMembershipInput() *string
```

- *Type:* *string

---

##### `AllowExternalMembers`<sup>Required</sup> <a name="AllowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembers"></a>

```go
func AllowExternalMembers() interface{}
```

- *Type:* interface{}

---

##### `AllowWebPosting`<sup>Required</sup> <a name="AllowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPosting"></a>

```go
func AllowWebPosting() interface{}
```

- *Type:* interface{}

---

##### `ArchiveOnly`<sup>Required</sup> <a name="ArchiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnly"></a>

```go
func ArchiveOnly() interface{}
```

- *Type:* interface{}

---

##### `CustomFooterText`<sup>Required</sup> <a name="CustomFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterText"></a>

```go
func CustomFooterText() *string
```

- *Type:* *string

---

##### `CustomReplyTo`<sup>Required</sup> <a name="CustomReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyTo"></a>

```go
func CustomReplyTo() *string
```

- *Type:* *string

---

##### `DefaultMessageDenyNotificationText`<sup>Required</sup> <a name="DefaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationText"></a>

```go
func DefaultMessageDenyNotificationText() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `EnableCollaborativeInbox`<sup>Required</sup> <a name="EnableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInbox"></a>

```go
func EnableCollaborativeInbox() interface{}
```

- *Type:* interface{}

---

##### `IncludeCustomFooter`<sup>Required</sup> <a name="IncludeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooter"></a>

```go
func IncludeCustomFooter() interface{}
```

- *Type:* interface{}

---

##### `IncludeInGlobalAddressList`<sup>Required</sup> <a name="IncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressList"></a>

```go
func IncludeInGlobalAddressList() interface{}
```

- *Type:* interface{}

---

##### `IsArchived`<sup>Required</sup> <a name="IsArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchived"></a>

```go
func IsArchived() interface{}
```

- *Type:* interface{}

---

##### `MembersCanPostAsTheGroup`<sup>Required</sup> <a name="MembersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroup"></a>

```go
func MembersCanPostAsTheGroup() interface{}
```

- *Type:* interface{}

---

##### `MessageModerationLevel`<sup>Required</sup> <a name="MessageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevel"></a>

```go
func MessageModerationLevel() *string
```

- *Type:* *string

---

##### `PrimaryLanguage`<sup>Required</sup> <a name="PrimaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguage"></a>

```go
func PrimaryLanguage() *string
```

- *Type:* *string

---

##### `ReplyTo`<sup>Required</sup> <a name="ReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyTo"></a>

```go
func ReplyTo() *string
```

- *Type:* *string

---

##### `SendMessageDenyNotification`<sup>Required</sup> <a name="SendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotification"></a>

```go
func SendMessageDenyNotification() interface{}
```

- *Type:* interface{}

---

##### `SpamModerationLevel`<sup>Required</sup> <a name="SpamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevel"></a>

```go
func SpamModerationLevel() *string
```

- *Type:* *string

---

##### `WhoCanAssistContent`<sup>Required</sup> <a name="WhoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContent"></a>

```go
func WhoCanAssistContent() *string
```

- *Type:* *string

---

##### `WhoCanContactOwner`<sup>Required</sup> <a name="WhoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwner"></a>

```go
func WhoCanContactOwner() *string
```

- *Type:* *string

---

##### `WhoCanDiscoverGroup`<sup>Required</sup> <a name="WhoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroup"></a>

```go
func WhoCanDiscoverGroup() *string
```

- *Type:* *string

---

##### `WhoCanJoin`<sup>Required</sup> <a name="WhoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoin"></a>

```go
func WhoCanJoin() *string
```

- *Type:* *string

---

##### `WhoCanLeaveGroup`<sup>Required</sup> <a name="WhoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroup"></a>

```go
func WhoCanLeaveGroup() *string
```

- *Type:* *string

---

##### `WhoCanModerateContent`<sup>Required</sup> <a name="WhoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContent"></a>

```go
func WhoCanModerateContent() *string
```

- *Type:* *string

---

##### `WhoCanModerateMembers`<sup>Required</sup> <a name="WhoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembers"></a>

```go
func WhoCanModerateMembers() *string
```

- *Type:* *string

---

##### `WhoCanPostMessage`<sup>Required</sup> <a name="WhoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessage"></a>

```go
func WhoCanPostMessage() *string
```

- *Type:* *string

---

##### `WhoCanViewGroup`<sup>Required</sup> <a name="WhoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroup"></a>

```go
func WhoCanViewGroup() *string
```

- *Type:* *string

---

##### `WhoCanViewMembership`<sup>Required</sup> <a name="WhoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembership"></a>

```go
func WhoCanViewMembership() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupSettingsConfig <a name="GroupSettingsConfig" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/groupsettings"

&groupsettings.GroupSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Email: *string,
	AllowExternalMembers: interface{},
	AllowWebPosting: interface{},
	ArchiveOnly: interface{},
	CustomFooterText: *string,
	CustomReplyTo: *string,
	DefaultMessageDenyNotificationText: *string,
	EnableCollaborativeInbox: interface{},
	IncludeCustomFooter: interface{},
	IncludeInGlobalAddressList: interface{},
	IsArchived: interface{},
	MembersCanPostAsTheGroup: interface{},
	MessageModerationLevel: *string,
	PrimaryLanguage: *string,
	ReplyTo: *string,
	SendMessageDenyNotification: interface{},
	SpamModerationLevel: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace.groupSettings.GroupSettingsTimeouts,
	WhoCanAssistContent: *string,
	WhoCanContactOwner: *string,
	WhoCanDiscoverGroup: *string,
	WhoCanJoin: *string,
	WhoCanLeaveGroup: *string,
	WhoCanModerateContent: *string,
	WhoCanModerateMembers: *string,
	WhoCanPostMessage: *string,
	WhoCanViewGroup: *string,
	WhoCanViewMembership: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.email">Email</a></code> | <code>*string</code> | The group's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowExternalMembers">AllowExternalMembers</a></code> | <code>interface{}</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowWebPosting">AllowWebPosting</a></code> | <code>interface{}</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.archiveOnly">ArchiveOnly</a></code> | <code>interface{}</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customFooterText">CustomFooterText</a></code> | <code>*string</code> | Set the content of custom footer text. The maximum number of characters is 1,000. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customReplyTo">CustomReplyTo</a></code> | <code>*string</code> | An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.defaultMessageDenyNotificationText">DefaultMessageDenyNotificationText</a></code> | <code>*string</code> | When a message is rejected, this is text for the rejection notification sent to the message's author. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.enableCollaborativeInbox">EnableCollaborativeInbox</a></code> | <code>interface{}</code> | Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeCustomFooter">IncludeCustomFooter</a></code> | <code>interface{}</code> | Defaults to `false`. Whether to include custom footer. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeInGlobalAddressList">IncludeInGlobalAddressList</a></code> | <code>interface{}</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.isArchived">IsArchived</a></code> | <code>interface{}</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.membersCanPostAsTheGroup">MembersCanPostAsTheGroup</a></code> | <code>interface{}</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.messageModerationLevel">MessageModerationLevel</a></code> | <code>*string</code> | Defaults to `MODERATE_NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.primaryLanguage">PrimaryLanguage</a></code> | <code>*string</code> | The primary language for group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.replyTo">ReplyTo</a></code> | <code>*string</code> | Defaults to `REPLY_TO_IGNORE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.sendMessageDenyNotification">SendMessageDenyNotification</a></code> | <code>interface{}</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.spamModerationLevel">SpamModerationLevel</a></code> | <code>*string</code> | Defaults to `MODERATE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanAssistContent">WhoCanAssistContent</a></code> | <code>*string</code> | Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanContactOwner">WhoCanContactOwner</a></code> | <code>*string</code> | Defaults to `ANYONE_CAN_CONTACT`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanDiscoverGroup">WhoCanDiscoverGroup</a></code> | <code>*string</code> | Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanJoin">WhoCanJoin</a></code> | <code>*string</code> | Defaults to `CAN_REQUEST_TO_JOIN`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanLeaveGroup">WhoCanLeaveGroup</a></code> | <code>*string</code> | Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: - `ALL_MANAGERS_CAN_LEAVE` - `ALL_MEMBERS_CAN_LEAVE` - `NONE_CAN_LEAVE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateContent">WhoCanModerateContent</a></code> | <code>*string</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateMembers">WhoCanModerateMembers</a></code> | <code>*string</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanPostMessage">WhoCanPostMessage</a></code> | <code>*string</code> | Permissions to post messages. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewGroup">WhoCanViewGroup</a></code> | <code>*string</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewMembership">WhoCanViewMembership</a></code> | <code>*string</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#email GroupSettings#email}

---

##### `AllowExternalMembers`<sup>Optional</sup> <a name="AllowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowExternalMembers"></a>

```go
AllowExternalMembers interface{}
```

- *Type:* interface{}

Defaults to `false`.

Identifies whether members external to your organization can join the group. If true, Google Workspace users external to your organization can become members of this group. If false, users not belonging to the organization are not allowed to become members of this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_external_members GroupSettings#allow_external_members}

---

##### `AllowWebPosting`<sup>Optional</sup> <a name="AllowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowWebPosting"></a>

```go
AllowWebPosting interface{}
```

- *Type:* interface{}

Defaults to `true`.

Allows posting from web. If true, allows any member to post to the group forum. If false, Members only use Gmail to communicate with the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_web_posting GroupSettings#allow_web_posting}

---

##### `ArchiveOnly`<sup>Optional</sup> <a name="ArchiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.archiveOnly"></a>

```go
ArchiveOnly interface{}
```

- *Type:* interface{}

Defaults to `false`.

Allows the group to be archived only. If true, Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browsable and searchable. If true, the `who_can_post_message` property is set to `NONE_CAN_POST`. If reverted from true to false, `who_can_post_message` is set to `ALL_MANAGERS_CAN_POST`. If false, The group is active and can receive messages. When false, updating `who_can_post_message` to `NONE_CAN_POST`, results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#archive_only GroupSettings#archive_only}

---

##### `CustomFooterText`<sup>Optional</sup> <a name="CustomFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customFooterText"></a>

```go
CustomFooterText *string
```

- *Type:* *string

Set the content of custom footer text. The maximum number of characters is 1,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_footer_text GroupSettings#custom_footer_text}

---

##### `CustomReplyTo`<sup>Optional</sup> <a name="CustomReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customReplyTo"></a>

```go
CustomReplyTo *string
```

- *Type:* *string

An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`.

This address is defined by an account administrator. When the group's `reply_to` property is set to `REPLY_TO_CUSTOM`, the `custom_reply_to` property holds a custom email address used when replying to a message, the `custom_reply_to` property must have a text value or an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_reply_to GroupSettings#custom_reply_to}

---

##### `DefaultMessageDenyNotificationText`<sup>Optional</sup> <a name="DefaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.defaultMessageDenyNotificationText"></a>

```go
DefaultMessageDenyNotificationText *string
```

- *Type:* *string

When a message is rejected, this is text for the rejection notification sent to the message's author.

By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Requires `send_message_deny_notification` property to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#default_message_deny_notification_text GroupSettings#default_message_deny_notification_text}

---

##### `EnableCollaborativeInbox`<sup>Optional</sup> <a name="EnableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.enableCollaborativeInbox"></a>

```go
EnableCollaborativeInbox interface{}
```

- *Type:* interface{}

Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#enable_collaborative_inbox GroupSettings#enable_collaborative_inbox}

---

##### `IncludeCustomFooter`<sup>Optional</sup> <a name="IncludeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeCustomFooter"></a>

```go
IncludeCustomFooter interface{}
```

- *Type:* interface{}

Defaults to `false`. Whether to include custom footer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_custom_footer GroupSettings#include_custom_footer}

---

##### `IncludeInGlobalAddressList`<sup>Optional</sup> <a name="IncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeInGlobalAddressList"></a>

```go
IncludeInGlobalAddressList interface{}
```

- *Type:* interface{}

Defaults to `true`.

Enables the group to be included in the Global Address List. If true, the group is included in the Global Address List. If false, it is not included in the Global Address List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_in_global_address_list GroupSettings#include_in_global_address_list}

---

##### `IsArchived`<sup>Optional</sup> <a name="IsArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.isArchived"></a>

```go
IsArchived interface{}
```

- *Type:* interface{}

Defaults to `false`.

Allows the Group contents to be archived. If true, archive messages sent to the group. If false, Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#is_archived GroupSettings#is_archived}

---

##### `MembersCanPostAsTheGroup`<sup>Optional</sup> <a name="MembersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.membersCanPostAsTheGroup"></a>

```go
MembersCanPostAsTheGroup interface{}
```

- *Type:* interface{}

Defaults to `false`.

Enables members to post messages as the group. If true, group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Any message moderation settings on individual users or new members do not apply to posts made on behalf of the group. If false, members can not post in behalf of the group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#members_can_post_as_the_group GroupSettings#members_can_post_as_the_group}

---

##### `MessageModerationLevel`<sup>Optional</sup> <a name="MessageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.messageModerationLevel"></a>

```go
MessageModerationLevel *string
```

- *Type:* *string

Defaults to `MODERATE_NONE`.

Moderation level of incoming messages. Possible values are:

* `MODERATE_ALL_MESSAGES`: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NON_MEMBERS`: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NEW_MEMBERS`: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NONE`: No moderator approval is required. Messages are delivered directly to the group.
  Note: When the `who_can_post_message` is set to `ANYONE_CAN_POST`, we recommend the `message_moderation_level` be set to `MODERATE_NON_MEMBERS` to protect the group from possible spam.When `member_can_post_as_the_group` is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#message_moderation_level GroupSettings#message_moderation_level}

---

##### `PrimaryLanguage`<sup>Optional</sup> <a name="PrimaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.primaryLanguage"></a>

```go
PrimaryLanguage *string
```

- *Type:* *string

The primary language for group.

For a group's primary language use the language tags from the Google Workspace languages found at Google Workspace Email Settings API Email Language Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#primary_language GroupSettings#primary_language}

---

##### `ReplyTo`<sup>Optional</sup> <a name="ReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.replyTo"></a>

```go
ReplyTo *string
```

- *Type:* *string

Defaults to `REPLY_TO_IGNORE`.

Specifies who receives the default reply. Possible values are:

* `REPLY_TO_CUSTOM`: For replies to messages, use the group's custom email address. When set to `REPLY_TO_CUSTOM`, the `custom_reply_to` property holds the custom email address used when replying to a message, the customReplyTo property must have a value. Otherwise an error is returned.
* `REPLY_TO_SENDER`: The reply sent to author of message.
* `REPLY_TO_LIST`: This reply message is sent to the group.
* `REPLY_TO_OWNER`: The reply is sent to the owner(s) of the group. This does not include the group's managers.
* `REPLY_TO_IGNORE`: Group users individually decide where the message reply is sent.
* `REPLY_TO_MANAGERS`: This reply message is sent to the group's managers, which includes all managers and the group owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#reply_to GroupSettings#reply_to}

---

##### `SendMessageDenyNotification`<sup>Optional</sup> <a name="SendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.sendMessageDenyNotification"></a>

```go
SendMessageDenyNotification interface{}
```

- *Type:* interface{}

Defaults to `false`.

Allows a member to be notified if the member's message to the group is denied by the group owner. If true, when a message is rejected, send the deny message notification to the message author. The `default_message_deny_notification_text` property is dependent on the `send_message_deny_notification` property being true. If false, when a message is rejected, no notification is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#send_message_deny_notification GroupSettings#send_message_deny_notification}

---

##### `SpamModerationLevel`<sup>Optional</sup> <a name="SpamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.spamModerationLevel"></a>

```go
SpamModerationLevel *string
```

- *Type:* *string

Defaults to `MODERATE`.

Specifies moderation levels for messages detected as spam. Possible values are:

* `ALLOW`: Post the message to the group.
* `MODERATE`: Send the message to the moderation queue. This is the default.
* `SILENTLY_MODERATE`: Send the message to the moderation queue, but do not send notification to moderators.
* `REJECT`: Immediately reject the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#spam_moderation_level GroupSettings#spam_moderation_level}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.timeouts"></a>

```go
Timeouts GroupSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#timeouts GroupSettings#timeouts}

---

##### `WhoCanAssistContent`<sup>Optional</sup> <a name="WhoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanAssistContent"></a>

```go
WhoCanAssistContent *string
```

- *Type:* *string

Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_assist_content GroupSettings#who_can_assist_content}

---

##### `WhoCanContactOwner`<sup>Optional</sup> <a name="WhoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanContactOwner"></a>

```go
WhoCanContactOwner *string
```

- *Type:* *string

Defaults to `ANYONE_CAN_CONTACT`.

Permission to contact owner of the group via web UI. Possible values are:

* `ALL_IN_DOMAIN_CAN_CONTACT`
* `ALL_MANAGERS_CAN_CONTACT`
* `ALL_MEMBERS_CAN_CONTACT`
* `ANYONE_CAN_CONTACT`
* `ALL_OWNERS_CAN_CONTACT`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_contact_owner GroupSettings#who_can_contact_owner}

---

##### `WhoCanDiscoverGroup`<sup>Optional</sup> <a name="WhoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanDiscoverGroup"></a>

```go
WhoCanDiscoverGroup *string
```

- *Type:* *string

Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`.

Specifies the set of users for whom this group is discoverable. Possible values are:

* `ANYONE_CAN_DISCOVER`
* `ALL_IN_DOMAIN_CAN_DISCOVER`
* `ALL_MEMBERS_CAN_DISCOVER`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_discover_group GroupSettings#who_can_discover_group}

---

##### `WhoCanJoin`<sup>Optional</sup> <a name="WhoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanJoin"></a>

```go
WhoCanJoin *string
```

- *Type:* *string

Defaults to `CAN_REQUEST_TO_JOIN`.

Permission to join group. Possible values are:

* `ANYONE_CAN_JOIN`: Any Internet user, both inside and outside your domain, can join the group.
* `ALL_IN_DOMAIN_CAN_JOIN`: Anyone in the account domain can join. This includes accounts with multiple domains.
* `INVITED_CAN_JOIN`: Candidates for membership can be invited to join.
* `CAN_REQUEST_TO_JOIN`: Non members can request an invitation to join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_join GroupSettings#who_can_join}

---

##### `WhoCanLeaveGroup`<sup>Optional</sup> <a name="WhoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanLeaveGroup"></a>

```go
WhoCanLeaveGroup *string
```

- *Type:* *string

Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: - `ALL_MANAGERS_CAN_LEAVE` - `ALL_MEMBERS_CAN_LEAVE` - `NONE_CAN_LEAVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_leave_group GroupSettings#who_can_leave_group}

---

##### `WhoCanModerateContent`<sup>Optional</sup> <a name="WhoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateContent"></a>

```go
WhoCanModerateContent *string
```

- *Type:* *string

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_content GroupSettings#who_can_moderate_content}

---

##### `WhoCanModerateMembers`<sup>Optional</sup> <a name="WhoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateMembers"></a>

```go
WhoCanModerateMembers *string
```

- *Type:* *string

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_members GroupSettings#who_can_moderate_members}

---

##### `WhoCanPostMessage`<sup>Optional</sup> <a name="WhoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanPostMessage"></a>

```go
WhoCanPostMessage *string
```

- *Type:* *string

Permissions to post messages.

Possible values are:

* `NONE_CAN_POST`: The group is disabled and archived. No one can post a message to this group. * When archiveOnly is false, updating whoCanPostMessage to NONE_CAN_POST, results in an error. * If archiveOnly is reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.
* `ALL_MANAGERS_CAN_POST`: Managers, including group owners, can post messages.
* `ALL_MEMBERS_CAN_POST`: Any group member can post a message.
* `ALL_OWNERS_CAN_POST`: Only group owners can post a message.
* `ALL_IN_DOMAIN_CAN_POST`: Anyone in the account can post a message.
* `ANYONE_CAN_POST`: Any Internet user who outside your account can access your Google Groups service and post a message.
  Note: When `who_can_post_message` is set to `ANYONE_CAN_POST`, we recommend the`message_moderation_level` be set to `MODERATE_NON_MEMBERS` to protect the group from possible spam. Users not belonging to the organization are not allowed to become members of this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_post_message GroupSettings#who_can_post_message}

---

##### `WhoCanViewGroup`<sup>Optional</sup> <a name="WhoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewGroup"></a>

```go
WhoCanViewGroup *string
```

- *Type:* *string

Defaults to `ALL_MEMBERS_CAN_VIEW`.

Permissions to view group messages. Possible values are:

* `ANYONE_CAN_VIEW`: Any Internet user can view the group's messages.
* `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in your account can view this group's messages.
* `ALL_MEMBERS_CAN_VIEW`: All group members can view the group's messages.
* `ALL_MANAGERS_CAN_VIEW`: Any group manager can view this group's messages.
* `ALL_OWNERS_CAN_VIEW`: The group owners can view this group's messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_view_group GroupSettings#who_can_view_group}

---

##### `WhoCanViewMembership`<sup>Optional</sup> <a name="WhoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewMembership"></a>

```go
WhoCanViewMembership *string
```

- *Type:* *string

Defaults to `ALL_MEMBERS_CAN_VIEW`.

Permissions to view membership. Possible values are:

* `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in the account can view the group members list. If a group already has external members, those members can still send email to this group.
* `ALL_MEMBERS_CAN_VIEW`: The group members can view the group members list.
* `ALL_MANAGERS_CAN_VIEW`: The group managers can view group members list.
* `ALL_OWNERS_CAN_VIEW`: The group owners can view group members list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_view_membership GroupSettings#who_can_view_membership}

---

### GroupSettingsTimeouts <a name="GroupSettingsTimeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/groupsettings"

&groupsettings.GroupSettingsTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#create GroupSettings#create}. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#update GroupSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#create GroupSettings#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#update GroupSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupSettingsTimeoutsOutputReference <a name="GroupSettingsTimeoutsOutputReference" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/groupsettings"

groupsettings.NewGroupSettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupSettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



