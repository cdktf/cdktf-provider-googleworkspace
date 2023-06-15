# `data_googleworkspace_group_settings`

Refer to the Terraform Registory for docs: [`data_googleworkspace_group_settings`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings).

# `dataGoogleworkspaceGroupSettings` Submodule <a name="`dataGoogleworkspaceGroupSettings` Submodule" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleworkspaceGroupSettings <a name="DataGoogleworkspaceGroupSettings" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings googleworkspace_group_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/datagoogleworkspacegroupsettings"

datagoogleworkspacegroupsettings.NewDataGoogleworkspaceGroupSettings(scope Construct, id *string, config DataGoogleworkspaceGroupSettingsConfig) DataGoogleworkspaceGroupSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig">DataGoogleworkspaceGroupSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig">DataGoogleworkspaceGroupSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/datagoogleworkspacegroupsettings"

datagoogleworkspacegroupsettings.DataGoogleworkspaceGroupSettings_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/datagoogleworkspacegroupsettings"

datagoogleworkspacegroupsettings.DataGoogleworkspaceGroupSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/datagoogleworkspacegroupsettings"

datagoogleworkspacegroupsettings.DataGoogleworkspaceGroupSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowExternalMembers">AllowExternalMembers</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowWebPosting">AllowWebPosting</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.archiveOnly">ArchiveOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customFooterText">CustomFooterText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customReplyTo">CustomReplyTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customRolesEnabledForSettingsToBeMerged">CustomRolesEnabledForSettingsToBeMerged</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.defaultMessageDenyNotificationText">DefaultMessageDenyNotificationText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.enableCollaborativeInbox">EnableCollaborativeInbox</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeCustomFooter">IncludeCustomFooter</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeInGlobalAddressList">IncludeInGlobalAddressList</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.isArchived">IsArchived</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.membersCanPostAsTheGroup">MembersCanPostAsTheGroup</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.messageModerationLevel">MessageModerationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.primaryLanguage">PrimaryLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.replyTo">ReplyTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.sendMessageDenyNotification">SendMessageDenyNotification</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.spamModerationLevel">SpamModerationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanAssistContent">WhoCanAssistContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanContactOwner">WhoCanContactOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanDiscoverGroup">WhoCanDiscoverGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanJoin">WhoCanJoin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanLeaveGroup">WhoCanLeaveGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateContent">WhoCanModerateContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateMembers">WhoCanModerateMembers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanPostMessage">WhoCanPostMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewGroup">WhoCanViewGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewMembership">WhoCanViewMembership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.email">Email</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllowExternalMembers`<sup>Required</sup> <a name="AllowExternalMembers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowExternalMembers"></a>

```go
func AllowExternalMembers() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AllowWebPosting`<sup>Required</sup> <a name="AllowWebPosting" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.allowWebPosting"></a>

```go
func AllowWebPosting() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ArchiveOnly`<sup>Required</sup> <a name="ArchiveOnly" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.archiveOnly"></a>

```go
func ArchiveOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CustomFooterText`<sup>Required</sup> <a name="CustomFooterText" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customFooterText"></a>

```go
func CustomFooterText() *string
```

- *Type:* *string

---

##### `CustomReplyTo`<sup>Required</sup> <a name="CustomReplyTo" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customReplyTo"></a>

```go
func CustomReplyTo() *string
```

- *Type:* *string

---

##### `CustomRolesEnabledForSettingsToBeMerged`<sup>Required</sup> <a name="CustomRolesEnabledForSettingsToBeMerged" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.customRolesEnabledForSettingsToBeMerged"></a>

```go
func CustomRolesEnabledForSettingsToBeMerged() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DefaultMessageDenyNotificationText`<sup>Required</sup> <a name="DefaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.defaultMessageDenyNotificationText"></a>

```go
func DefaultMessageDenyNotificationText() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableCollaborativeInbox`<sup>Required</sup> <a name="EnableCollaborativeInbox" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.enableCollaborativeInbox"></a>

```go
func EnableCollaborativeInbox() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeCustomFooter`<sup>Required</sup> <a name="IncludeCustomFooter" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeCustomFooter"></a>

```go
func IncludeCustomFooter() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IncludeInGlobalAddressList`<sup>Required</sup> <a name="IncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.includeInGlobalAddressList"></a>

```go
func IncludeInGlobalAddressList() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsArchived`<sup>Required</sup> <a name="IsArchived" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.isArchived"></a>

```go
func IsArchived() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MembersCanPostAsTheGroup`<sup>Required</sup> <a name="MembersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.membersCanPostAsTheGroup"></a>

```go
func MembersCanPostAsTheGroup() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MessageModerationLevel`<sup>Required</sup> <a name="MessageModerationLevel" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.messageModerationLevel"></a>

```go
func MessageModerationLevel() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrimaryLanguage`<sup>Required</sup> <a name="PrimaryLanguage" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.primaryLanguage"></a>

```go
func PrimaryLanguage() *string
```

- *Type:* *string

---

##### `ReplyTo`<sup>Required</sup> <a name="ReplyTo" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.replyTo"></a>

```go
func ReplyTo() *string
```

- *Type:* *string

---

##### `SendMessageDenyNotification`<sup>Required</sup> <a name="SendMessageDenyNotification" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.sendMessageDenyNotification"></a>

```go
func SendMessageDenyNotification() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SpamModerationLevel`<sup>Required</sup> <a name="SpamModerationLevel" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.spamModerationLevel"></a>

```go
func SpamModerationLevel() *string
```

- *Type:* *string

---

##### `WhoCanAssistContent`<sup>Required</sup> <a name="WhoCanAssistContent" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanAssistContent"></a>

```go
func WhoCanAssistContent() *string
```

- *Type:* *string

---

##### `WhoCanContactOwner`<sup>Required</sup> <a name="WhoCanContactOwner" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanContactOwner"></a>

```go
func WhoCanContactOwner() *string
```

- *Type:* *string

---

##### `WhoCanDiscoverGroup`<sup>Required</sup> <a name="WhoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanDiscoverGroup"></a>

```go
func WhoCanDiscoverGroup() *string
```

- *Type:* *string

---

##### `WhoCanJoin`<sup>Required</sup> <a name="WhoCanJoin" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanJoin"></a>

```go
func WhoCanJoin() *string
```

- *Type:* *string

---

##### `WhoCanLeaveGroup`<sup>Required</sup> <a name="WhoCanLeaveGroup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanLeaveGroup"></a>

```go
func WhoCanLeaveGroup() *string
```

- *Type:* *string

---

##### `WhoCanModerateContent`<sup>Required</sup> <a name="WhoCanModerateContent" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateContent"></a>

```go
func WhoCanModerateContent() *string
```

- *Type:* *string

---

##### `WhoCanModerateMembers`<sup>Required</sup> <a name="WhoCanModerateMembers" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanModerateMembers"></a>

```go
func WhoCanModerateMembers() *string
```

- *Type:* *string

---

##### `WhoCanPostMessage`<sup>Required</sup> <a name="WhoCanPostMessage" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanPostMessage"></a>

```go
func WhoCanPostMessage() *string
```

- *Type:* *string

---

##### `WhoCanViewGroup`<sup>Required</sup> <a name="WhoCanViewGroup" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewGroup"></a>

```go
func WhoCanViewGroup() *string
```

- *Type:* *string

---

##### `WhoCanViewMembership`<sup>Required</sup> <a name="WhoCanViewMembership" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.whoCanViewMembership"></a>

```go
func WhoCanViewMembership() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleworkspaceGroupSettingsConfig <a name="DataGoogleworkspaceGroupSettingsConfig" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/datagoogleworkspacegroupsettings"

&datagoogleworkspacegroupsettings.DataGoogleworkspaceGroupSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Email: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.email">Email</a></code> | <code>*string</code> | The group's email address. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-googleworkspace.dataGoogleworkspaceGroupSettings.DataGoogleworkspaceGroupSettingsConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/group_settings#email DataGoogleworkspaceGroupSettings#email}

---



