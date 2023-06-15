# `googleworkspace_group_settings`

Refer to the Terraform Registory for docs: [`googleworkspace_group_settings`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings).

# `groupSettings` Submodule <a name="`groupSettings` Submodule" id="@cdktf/provider-googleworkspace.groupSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupSettings <a name="GroupSettings" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings googleworkspace_group_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.group_settings.GroupSettings;

GroupSettings.Builder.create(Construct scope, java.lang.String id)
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
//  .allowExternalMembers(java.lang.Boolean)
//  .allowExternalMembers(IResolvable)
//  .allowWebPosting(java.lang.Boolean)
//  .allowWebPosting(IResolvable)
//  .archiveOnly(java.lang.Boolean)
//  .archiveOnly(IResolvable)
//  .customFooterText(java.lang.String)
//  .customReplyTo(java.lang.String)
//  .defaultMessageDenyNotificationText(java.lang.String)
//  .enableCollaborativeInbox(java.lang.Boolean)
//  .enableCollaborativeInbox(IResolvable)
//  .includeCustomFooter(java.lang.Boolean)
//  .includeCustomFooter(IResolvable)
//  .includeInGlobalAddressList(java.lang.Boolean)
//  .includeInGlobalAddressList(IResolvable)
//  .isArchived(java.lang.Boolean)
//  .isArchived(IResolvable)
//  .membersCanPostAsTheGroup(java.lang.Boolean)
//  .membersCanPostAsTheGroup(IResolvable)
//  .messageModerationLevel(java.lang.String)
//  .primaryLanguage(java.lang.String)
//  .replyTo(java.lang.String)
//  .sendMessageDenyNotification(java.lang.Boolean)
//  .sendMessageDenyNotification(IResolvable)
//  .spamModerationLevel(java.lang.String)
//  .timeouts(GroupSettingsTimeouts)
//  .whoCanAssistContent(java.lang.String)
//  .whoCanContactOwner(java.lang.String)
//  .whoCanDiscoverGroup(java.lang.String)
//  .whoCanJoin(java.lang.String)
//  .whoCanLeaveGroup(java.lang.String)
//  .whoCanModerateContent(java.lang.String)
//  .whoCanModerateMembers(java.lang.String)
//  .whoCanPostMessage(java.lang.String)
//  .whoCanViewGroup(java.lang.String)
//  .whoCanViewMembership(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | The group's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.allowExternalMembers">allowExternalMembers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.allowWebPosting">allowWebPosting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.archiveOnly">archiveOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.customFooterText">customFooterText</a></code> | <code>java.lang.String</code> | Set the content of custom footer text. The maximum number of characters is 1,000. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.customReplyTo">customReplyTo</a></code> | <code>java.lang.String</code> | An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.defaultMessageDenyNotificationText">defaultMessageDenyNotificationText</a></code> | <code>java.lang.String</code> | When a message is rejected, this is text for the rejection notification sent to the message's author. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.enableCollaborativeInbox">enableCollaborativeInbox</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.includeCustomFooter">includeCustomFooter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. Whether to include custom footer. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.includeInGlobalAddressList">includeInGlobalAddressList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.isArchived">isArchived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.membersCanPostAsTheGroup">membersCanPostAsTheGroup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.messageModerationLevel">messageModerationLevel</a></code> | <code>java.lang.String</code> | Defaults to `MODERATE_NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.primaryLanguage">primaryLanguage</a></code> | <code>java.lang.String</code> | The primary language for group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.replyTo">replyTo</a></code> | <code>java.lang.String</code> | Defaults to `REPLY_TO_IGNORE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.sendMessageDenyNotification">sendMessageDenyNotification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.spamModerationLevel">spamModerationLevel</a></code> | <code>java.lang.String</code> | Defaults to `MODERATE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanAssistContent">whoCanAssistContent</a></code> | <code>java.lang.String</code> | Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanContactOwner">whoCanContactOwner</a></code> | <code>java.lang.String</code> | Defaults to `ANYONE_CAN_CONTACT`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanDiscoverGroup">whoCanDiscoverGroup</a></code> | <code>java.lang.String</code> | Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanJoin">whoCanJoin</a></code> | <code>java.lang.String</code> | Defaults to `CAN_REQUEST_TO_JOIN`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanLeaveGroup">whoCanLeaveGroup</a></code> | <code>java.lang.String</code> | Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: - `ALL_MANAGERS_CAN_LEAVE` - `ALL_MEMBERS_CAN_LEAVE` - `NONE_CAN_LEAVE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanModerateContent">whoCanModerateContent</a></code> | <code>java.lang.String</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanModerateMembers">whoCanModerateMembers</a></code> | <code>java.lang.String</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanPostMessage">whoCanPostMessage</a></code> | <code>java.lang.String</code> | Permissions to post messages. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanViewGroup">whoCanViewGroup</a></code> | <code>java.lang.String</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanViewMembership">whoCanViewMembership</a></code> | <code>java.lang.String</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.email"></a>

- *Type:* java.lang.String

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#email GroupSettings#email}

---

##### `allowExternalMembers`<sup>Optional</sup> <a name="allowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.allowExternalMembers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`.

Identifies whether members external to your organization can join the group. If true, Google Workspace users external to your organization can become members of this group. If false, users not belonging to the organization are not allowed to become members of this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_external_members GroupSettings#allow_external_members}

---

##### `allowWebPosting`<sup>Optional</sup> <a name="allowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.allowWebPosting"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `true`.

Allows posting from web. If true, allows any member to post to the group forum. If false, Members only use Gmail to communicate with the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_web_posting GroupSettings#allow_web_posting}

---

##### `archiveOnly`<sup>Optional</sup> <a name="archiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.archiveOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`.

Allows the group to be archived only. If true, Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browsable and searchable. If true, the `who_can_post_message` property is set to `NONE_CAN_POST`. If reverted from true to false, `who_can_post_message` is set to `ALL_MANAGERS_CAN_POST`. If false, The group is active and can receive messages. When false, updating `who_can_post_message` to `NONE_CAN_POST`, results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#archive_only GroupSettings#archive_only}

---

##### `customFooterText`<sup>Optional</sup> <a name="customFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.customFooterText"></a>

- *Type:* java.lang.String

Set the content of custom footer text. The maximum number of characters is 1,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_footer_text GroupSettings#custom_footer_text}

---

##### `customReplyTo`<sup>Optional</sup> <a name="customReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.customReplyTo"></a>

- *Type:* java.lang.String

An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`.

This address is defined by an account administrator. When the group's `reply_to` property is set to `REPLY_TO_CUSTOM`, the `custom_reply_to` property holds a custom email address used when replying to a message, the `custom_reply_to` property must have a text value or an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_reply_to GroupSettings#custom_reply_to}

---

##### `defaultMessageDenyNotificationText`<sup>Optional</sup> <a name="defaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.defaultMessageDenyNotificationText"></a>

- *Type:* java.lang.String

When a message is rejected, this is text for the rejection notification sent to the message's author.

By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Requires `send_message_deny_notification` property to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#default_message_deny_notification_text GroupSettings#default_message_deny_notification_text}

---

##### `enableCollaborativeInbox`<sup>Optional</sup> <a name="enableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.enableCollaborativeInbox"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#enable_collaborative_inbox GroupSettings#enable_collaborative_inbox}

---

##### `includeCustomFooter`<sup>Optional</sup> <a name="includeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.includeCustomFooter"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`. Whether to include custom footer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_custom_footer GroupSettings#include_custom_footer}

---

##### `includeInGlobalAddressList`<sup>Optional</sup> <a name="includeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.includeInGlobalAddressList"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `true`.

Enables the group to be included in the Global Address List. If true, the group is included in the Global Address List. If false, it is not included in the Global Address List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_in_global_address_list GroupSettings#include_in_global_address_list}

---

##### `isArchived`<sup>Optional</sup> <a name="isArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.isArchived"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`.

Allows the Group contents to be archived. If true, archive messages sent to the group. If false, Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#is_archived GroupSettings#is_archived}

---

##### `membersCanPostAsTheGroup`<sup>Optional</sup> <a name="membersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.membersCanPostAsTheGroup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`.

Enables members to post messages as the group. If true, group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Any message moderation settings on individual users or new members do not apply to posts made on behalf of the group. If false, members can not post in behalf of the group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#members_can_post_as_the_group GroupSettings#members_can_post_as_the_group}

---

##### `messageModerationLevel`<sup>Optional</sup> <a name="messageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.messageModerationLevel"></a>

- *Type:* java.lang.String

Defaults to `MODERATE_NONE`.

Moderation level of incoming messages. Possible values are:

* `MODERATE_ALL_MESSAGES`: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NON_MEMBERS`: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NEW_MEMBERS`: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NONE`: No moderator approval is required. Messages are delivered directly to the group.
  Note: When the `who_can_post_message` is set to `ANYONE_CAN_POST`, we recommend the `message_moderation_level` be set to `MODERATE_NON_MEMBERS` to protect the group from possible spam.When `member_can_post_as_the_group` is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#message_moderation_level GroupSettings#message_moderation_level}

---

##### `primaryLanguage`<sup>Optional</sup> <a name="primaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.primaryLanguage"></a>

- *Type:* java.lang.String

The primary language for group.

For a group's primary language use the language tags from the Google Workspace languages found at Google Workspace Email Settings API Email Language Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#primary_language GroupSettings#primary_language}

---

##### `replyTo`<sup>Optional</sup> <a name="replyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.replyTo"></a>

- *Type:* java.lang.String

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

##### `sendMessageDenyNotification`<sup>Optional</sup> <a name="sendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.sendMessageDenyNotification"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`.

Allows a member to be notified if the member's message to the group is denied by the group owner. If true, when a message is rejected, send the deny message notification to the message author. The `default_message_deny_notification_text` property is dependent on the `send_message_deny_notification` property being true. If false, when a message is rejected, no notification is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#send_message_deny_notification GroupSettings#send_message_deny_notification}

---

##### `spamModerationLevel`<sup>Optional</sup> <a name="spamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.spamModerationLevel"></a>

- *Type:* java.lang.String

Defaults to `MODERATE`.

Specifies moderation levels for messages detected as spam. Possible values are:

* `ALLOW`: Post the message to the group.
* `MODERATE`: Send the message to the moderation queue. This is the default.
* `SILENTLY_MODERATE`: Send the message to the moderation queue, but do not send notification to moderators.
* `REJECT`: Immediately reject the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#spam_moderation_level GroupSettings#spam_moderation_level}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#timeouts GroupSettings#timeouts}

---

##### `whoCanAssistContent`<sup>Optional</sup> <a name="whoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanAssistContent"></a>

- *Type:* java.lang.String

Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_assist_content GroupSettings#who_can_assist_content}

---

##### `whoCanContactOwner`<sup>Optional</sup> <a name="whoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanContactOwner"></a>

- *Type:* java.lang.String

Defaults to `ANYONE_CAN_CONTACT`.

Permission to contact owner of the group via web UI. Possible values are:

* `ALL_IN_DOMAIN_CAN_CONTACT`
* `ALL_MANAGERS_CAN_CONTACT`
* `ALL_MEMBERS_CAN_CONTACT`
* `ANYONE_CAN_CONTACT`
* `ALL_OWNERS_CAN_CONTACT`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_contact_owner GroupSettings#who_can_contact_owner}

---

##### `whoCanDiscoverGroup`<sup>Optional</sup> <a name="whoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanDiscoverGroup"></a>

- *Type:* java.lang.String

Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`.

Specifies the set of users for whom this group is discoverable. Possible values are:

* `ANYONE_CAN_DISCOVER`
* `ALL_IN_DOMAIN_CAN_DISCOVER`
* `ALL_MEMBERS_CAN_DISCOVER`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_discover_group GroupSettings#who_can_discover_group}

---

##### `whoCanJoin`<sup>Optional</sup> <a name="whoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanJoin"></a>

- *Type:* java.lang.String

Defaults to `CAN_REQUEST_TO_JOIN`.

Permission to join group. Possible values are:

* `ANYONE_CAN_JOIN`: Any Internet user, both inside and outside your domain, can join the group.
* `ALL_IN_DOMAIN_CAN_JOIN`: Anyone in the account domain can join. This includes accounts with multiple domains.
* `INVITED_CAN_JOIN`: Candidates for membership can be invited to join.
* `CAN_REQUEST_TO_JOIN`: Non members can request an invitation to join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_join GroupSettings#who_can_join}

---

##### `whoCanLeaveGroup`<sup>Optional</sup> <a name="whoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanLeaveGroup"></a>

- *Type:* java.lang.String

Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: - `ALL_MANAGERS_CAN_LEAVE` - `ALL_MEMBERS_CAN_LEAVE` - `NONE_CAN_LEAVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_leave_group GroupSettings#who_can_leave_group}

---

##### `whoCanModerateContent`<sup>Optional</sup> <a name="whoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanModerateContent"></a>

- *Type:* java.lang.String

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_content GroupSettings#who_can_moderate_content}

---

##### `whoCanModerateMembers`<sup>Optional</sup> <a name="whoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanModerateMembers"></a>

- *Type:* java.lang.String

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_members GroupSettings#who_can_moderate_members}

---

##### `whoCanPostMessage`<sup>Optional</sup> <a name="whoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanPostMessage"></a>

- *Type:* java.lang.String

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

##### `whoCanViewGroup`<sup>Optional</sup> <a name="whoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanViewGroup"></a>

- *Type:* java.lang.String

Defaults to `ALL_MEMBERS_CAN_VIEW`.

Permissions to view group messages. Possible values are:

* `ANYONE_CAN_VIEW`: Any Internet user can view the group's messages.
* `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in your account can view this group's messages.
* `ALL_MEMBERS_CAN_VIEW`: All group members can view the group's messages.
* `ALL_MANAGERS_CAN_VIEW`: Any group manager can view this group's messages.
* `ALL_OWNERS_CAN_VIEW`: The group owners can view this group's messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_view_group GroupSettings#who_can_view_group}

---

##### `whoCanViewMembership`<sup>Optional</sup> <a name="whoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanViewMembership"></a>

- *Type:* java.lang.String

Defaults to `ALL_MEMBERS_CAN_VIEW`.

Permissions to view membership. Possible values are:

* `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in the account can view the group members list. If a group already has external members, those members can still send email to this group.
* `ALL_MEMBERS_CAN_VIEW`: The group members can view the group members list.
* `ALL_MANAGERS_CAN_VIEW`: The group managers can view group members list.
* `ALL_OWNERS_CAN_VIEW`: The group owners can view group members list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_view_membership GroupSettings#who_can_view_membership}

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
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts"></a>

```java
public void putTimeouts(GroupSettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

---

##### `resetAllowExternalMembers` <a name="resetAllowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowExternalMembers"></a>

```java
public void resetAllowExternalMembers()
```

##### `resetAllowWebPosting` <a name="resetAllowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowWebPosting"></a>

```java
public void resetAllowWebPosting()
```

##### `resetArchiveOnly` <a name="resetArchiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetArchiveOnly"></a>

```java
public void resetArchiveOnly()
```

##### `resetCustomFooterText` <a name="resetCustomFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomFooterText"></a>

```java
public void resetCustomFooterText()
```

##### `resetCustomReplyTo` <a name="resetCustomReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomReplyTo"></a>

```java
public void resetCustomReplyTo()
```

##### `resetDefaultMessageDenyNotificationText` <a name="resetDefaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetDefaultMessageDenyNotificationText"></a>

```java
public void resetDefaultMessageDenyNotificationText()
```

##### `resetEnableCollaborativeInbox` <a name="resetEnableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetEnableCollaborativeInbox"></a>

```java
public void resetEnableCollaborativeInbox()
```

##### `resetIncludeCustomFooter` <a name="resetIncludeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeCustomFooter"></a>

```java
public void resetIncludeCustomFooter()
```

##### `resetIncludeInGlobalAddressList` <a name="resetIncludeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeInGlobalAddressList"></a>

```java
public void resetIncludeInGlobalAddressList()
```

##### `resetIsArchived` <a name="resetIsArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIsArchived"></a>

```java
public void resetIsArchived()
```

##### `resetMembersCanPostAsTheGroup` <a name="resetMembersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMembersCanPostAsTheGroup"></a>

```java
public void resetMembersCanPostAsTheGroup()
```

##### `resetMessageModerationLevel` <a name="resetMessageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMessageModerationLevel"></a>

```java
public void resetMessageModerationLevel()
```

##### `resetPrimaryLanguage` <a name="resetPrimaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetPrimaryLanguage"></a>

```java
public void resetPrimaryLanguage()
```

##### `resetReplyTo` <a name="resetReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetReplyTo"></a>

```java
public void resetReplyTo()
```

##### `resetSendMessageDenyNotification` <a name="resetSendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSendMessageDenyNotification"></a>

```java
public void resetSendMessageDenyNotification()
```

##### `resetSpamModerationLevel` <a name="resetSpamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSpamModerationLevel"></a>

```java
public void resetSpamModerationLevel()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWhoCanAssistContent` <a name="resetWhoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanAssistContent"></a>

```java
public void resetWhoCanAssistContent()
```

##### `resetWhoCanContactOwner` <a name="resetWhoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanContactOwner"></a>

```java
public void resetWhoCanContactOwner()
```

##### `resetWhoCanDiscoverGroup` <a name="resetWhoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanDiscoverGroup"></a>

```java
public void resetWhoCanDiscoverGroup()
```

##### `resetWhoCanJoin` <a name="resetWhoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanJoin"></a>

```java
public void resetWhoCanJoin()
```

##### `resetWhoCanLeaveGroup` <a name="resetWhoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanLeaveGroup"></a>

```java
public void resetWhoCanLeaveGroup()
```

##### `resetWhoCanModerateContent` <a name="resetWhoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateContent"></a>

```java
public void resetWhoCanModerateContent()
```

##### `resetWhoCanModerateMembers` <a name="resetWhoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateMembers"></a>

```java
public void resetWhoCanModerateMembers()
```

##### `resetWhoCanPostMessage` <a name="resetWhoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanPostMessage"></a>

```java
public void resetWhoCanPostMessage()
```

##### `resetWhoCanViewGroup` <a name="resetWhoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewGroup"></a>

```java
public void resetWhoCanViewGroup()
```

##### `resetWhoCanViewMembership` <a name="resetWhoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewMembership"></a>

```java
public void resetWhoCanViewMembership()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.group_settings.GroupSettings;

GroupSettings.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.group_settings.GroupSettings;

GroupSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.group_settings.GroupSettings;

GroupSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customRolesEnabledForSettingsToBeMerged">customRolesEnabledForSettingsToBeMerged</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference">GroupSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembersInput">allowExternalMembersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPostingInput">allowWebPostingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnlyInput">archiveOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterTextInput">customFooterTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyToInput">customReplyToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationTextInput">defaultMessageDenyNotificationTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInboxInput">enableCollaborativeInboxInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooterInput">includeCustomFooterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressListInput">includeInGlobalAddressListInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchivedInput">isArchivedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroupInput">membersCanPostAsTheGroupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevelInput">messageModerationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguageInput">primaryLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyToInput">replyToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotificationInput">sendMessageDenyNotificationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevelInput">spamModerationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContentInput">whoCanAssistContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwnerInput">whoCanContactOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroupInput">whoCanDiscoverGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoinInput">whoCanJoinInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroupInput">whoCanLeaveGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContentInput">whoCanModerateContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembersInput">whoCanModerateMembersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessageInput">whoCanPostMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroupInput">whoCanViewGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembershipInput">whoCanViewMembershipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembers">allowExternalMembers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPosting">allowWebPosting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnly">archiveOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterText">customFooterText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyTo">customReplyTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationText">defaultMessageDenyNotificationText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInbox">enableCollaborativeInbox</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooter">includeCustomFooter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressList">includeInGlobalAddressList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchived">isArchived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroup">membersCanPostAsTheGroup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevel">messageModerationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguage">primaryLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyTo">replyTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotification">sendMessageDenyNotification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevel">spamModerationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContent">whoCanAssistContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwner">whoCanContactOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroup">whoCanDiscoverGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoin">whoCanJoin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroup">whoCanLeaveGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContent">whoCanModerateContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembers">whoCanModerateMembers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessage">whoCanPostMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroup">whoCanViewGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembership">whoCanViewMembership</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customRolesEnabledForSettingsToBeMerged`<sup>Required</sup> <a name="customRolesEnabledForSettingsToBeMerged" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customRolesEnabledForSettingsToBeMerged"></a>

```java
public IResolvable getCustomRolesEnabledForSettingsToBeMerged();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeouts"></a>

```java
public GroupSettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference">GroupSettingsTimeoutsOutputReference</a>

---

##### `allowExternalMembersInput`<sup>Optional</sup> <a name="allowExternalMembersInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembersInput"></a>

```java
public java.lang.Object getAllowExternalMembersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowWebPostingInput`<sup>Optional</sup> <a name="allowWebPostingInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPostingInput"></a>

```java
public java.lang.Object getAllowWebPostingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `archiveOnlyInput`<sup>Optional</sup> <a name="archiveOnlyInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnlyInput"></a>

```java
public java.lang.Object getArchiveOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customFooterTextInput`<sup>Optional</sup> <a name="customFooterTextInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterTextInput"></a>

```java
public java.lang.String getCustomFooterTextInput();
```

- *Type:* java.lang.String

---

##### `customReplyToInput`<sup>Optional</sup> <a name="customReplyToInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyToInput"></a>

```java
public java.lang.String getCustomReplyToInput();
```

- *Type:* java.lang.String

---

##### `defaultMessageDenyNotificationTextInput`<sup>Optional</sup> <a name="defaultMessageDenyNotificationTextInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationTextInput"></a>

```java
public java.lang.String getDefaultMessageDenyNotificationTextInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `enableCollaborativeInboxInput`<sup>Optional</sup> <a name="enableCollaborativeInboxInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInboxInput"></a>

```java
public java.lang.Object getEnableCollaborativeInboxInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeCustomFooterInput`<sup>Optional</sup> <a name="includeCustomFooterInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooterInput"></a>

```java
public java.lang.Object getIncludeCustomFooterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeInGlobalAddressListInput`<sup>Optional</sup> <a name="includeInGlobalAddressListInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressListInput"></a>

```java
public java.lang.Object getIncludeInGlobalAddressListInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isArchivedInput`<sup>Optional</sup> <a name="isArchivedInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchivedInput"></a>

```java
public java.lang.Object getIsArchivedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `membersCanPostAsTheGroupInput`<sup>Optional</sup> <a name="membersCanPostAsTheGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroupInput"></a>

```java
public java.lang.Object getMembersCanPostAsTheGroupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messageModerationLevelInput`<sup>Optional</sup> <a name="messageModerationLevelInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevelInput"></a>

```java
public java.lang.String getMessageModerationLevelInput();
```

- *Type:* java.lang.String

---

##### `primaryLanguageInput`<sup>Optional</sup> <a name="primaryLanguageInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguageInput"></a>

```java
public java.lang.String getPrimaryLanguageInput();
```

- *Type:* java.lang.String

---

##### `replyToInput`<sup>Optional</sup> <a name="replyToInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyToInput"></a>

```java
public java.lang.String getReplyToInput();
```

- *Type:* java.lang.String

---

##### `sendMessageDenyNotificationInput`<sup>Optional</sup> <a name="sendMessageDenyNotificationInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotificationInput"></a>

```java
public java.lang.Object getSendMessageDenyNotificationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spamModerationLevelInput`<sup>Optional</sup> <a name="spamModerationLevelInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevelInput"></a>

```java
public java.lang.String getSpamModerationLevelInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

---

##### `whoCanAssistContentInput`<sup>Optional</sup> <a name="whoCanAssistContentInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContentInput"></a>

```java
public java.lang.String getWhoCanAssistContentInput();
```

- *Type:* java.lang.String

---

##### `whoCanContactOwnerInput`<sup>Optional</sup> <a name="whoCanContactOwnerInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwnerInput"></a>

```java
public java.lang.String getWhoCanContactOwnerInput();
```

- *Type:* java.lang.String

---

##### `whoCanDiscoverGroupInput`<sup>Optional</sup> <a name="whoCanDiscoverGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroupInput"></a>

```java
public java.lang.String getWhoCanDiscoverGroupInput();
```

- *Type:* java.lang.String

---

##### `whoCanJoinInput`<sup>Optional</sup> <a name="whoCanJoinInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoinInput"></a>

```java
public java.lang.String getWhoCanJoinInput();
```

- *Type:* java.lang.String

---

##### `whoCanLeaveGroupInput`<sup>Optional</sup> <a name="whoCanLeaveGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroupInput"></a>

```java
public java.lang.String getWhoCanLeaveGroupInput();
```

- *Type:* java.lang.String

---

##### `whoCanModerateContentInput`<sup>Optional</sup> <a name="whoCanModerateContentInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContentInput"></a>

```java
public java.lang.String getWhoCanModerateContentInput();
```

- *Type:* java.lang.String

---

##### `whoCanModerateMembersInput`<sup>Optional</sup> <a name="whoCanModerateMembersInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembersInput"></a>

```java
public java.lang.String getWhoCanModerateMembersInput();
```

- *Type:* java.lang.String

---

##### `whoCanPostMessageInput`<sup>Optional</sup> <a name="whoCanPostMessageInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessageInput"></a>

```java
public java.lang.String getWhoCanPostMessageInput();
```

- *Type:* java.lang.String

---

##### `whoCanViewGroupInput`<sup>Optional</sup> <a name="whoCanViewGroupInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroupInput"></a>

```java
public java.lang.String getWhoCanViewGroupInput();
```

- *Type:* java.lang.String

---

##### `whoCanViewMembershipInput`<sup>Optional</sup> <a name="whoCanViewMembershipInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembershipInput"></a>

```java
public java.lang.String getWhoCanViewMembershipInput();
```

- *Type:* java.lang.String

---

##### `allowExternalMembers`<sup>Required</sup> <a name="allowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembers"></a>

```java
public java.lang.Object getAllowExternalMembers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowWebPosting`<sup>Required</sup> <a name="allowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPosting"></a>

```java
public java.lang.Object getAllowWebPosting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `archiveOnly`<sup>Required</sup> <a name="archiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnly"></a>

```java
public java.lang.Object getArchiveOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customFooterText`<sup>Required</sup> <a name="customFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterText"></a>

```java
public java.lang.String getCustomFooterText();
```

- *Type:* java.lang.String

---

##### `customReplyTo`<sup>Required</sup> <a name="customReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyTo"></a>

```java
public java.lang.String getCustomReplyTo();
```

- *Type:* java.lang.String

---

##### `defaultMessageDenyNotificationText`<sup>Required</sup> <a name="defaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationText"></a>

```java
public java.lang.String getDefaultMessageDenyNotificationText();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `enableCollaborativeInbox`<sup>Required</sup> <a name="enableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInbox"></a>

```java
public java.lang.Object getEnableCollaborativeInbox();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeCustomFooter`<sup>Required</sup> <a name="includeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooter"></a>

```java
public java.lang.Object getIncludeCustomFooter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeInGlobalAddressList`<sup>Required</sup> <a name="includeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressList"></a>

```java
public java.lang.Object getIncludeInGlobalAddressList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isArchived`<sup>Required</sup> <a name="isArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchived"></a>

```java
public java.lang.Object getIsArchived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `membersCanPostAsTheGroup`<sup>Required</sup> <a name="membersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroup"></a>

```java
public java.lang.Object getMembersCanPostAsTheGroup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messageModerationLevel`<sup>Required</sup> <a name="messageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevel"></a>

```java
public java.lang.String getMessageModerationLevel();
```

- *Type:* java.lang.String

---

##### `primaryLanguage`<sup>Required</sup> <a name="primaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguage"></a>

```java
public java.lang.String getPrimaryLanguage();
```

- *Type:* java.lang.String

---

##### `replyTo`<sup>Required</sup> <a name="replyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyTo"></a>

```java
public java.lang.String getReplyTo();
```

- *Type:* java.lang.String

---

##### `sendMessageDenyNotification`<sup>Required</sup> <a name="sendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotification"></a>

```java
public java.lang.Object getSendMessageDenyNotification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spamModerationLevel`<sup>Required</sup> <a name="spamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevel"></a>

```java
public java.lang.String getSpamModerationLevel();
```

- *Type:* java.lang.String

---

##### `whoCanAssistContent`<sup>Required</sup> <a name="whoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContent"></a>

```java
public java.lang.String getWhoCanAssistContent();
```

- *Type:* java.lang.String

---

##### `whoCanContactOwner`<sup>Required</sup> <a name="whoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwner"></a>

```java
public java.lang.String getWhoCanContactOwner();
```

- *Type:* java.lang.String

---

##### `whoCanDiscoverGroup`<sup>Required</sup> <a name="whoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroup"></a>

```java
public java.lang.String getWhoCanDiscoverGroup();
```

- *Type:* java.lang.String

---

##### `whoCanJoin`<sup>Required</sup> <a name="whoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoin"></a>

```java
public java.lang.String getWhoCanJoin();
```

- *Type:* java.lang.String

---

##### `whoCanLeaveGroup`<sup>Required</sup> <a name="whoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroup"></a>

```java
public java.lang.String getWhoCanLeaveGroup();
```

- *Type:* java.lang.String

---

##### `whoCanModerateContent`<sup>Required</sup> <a name="whoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContent"></a>

```java
public java.lang.String getWhoCanModerateContent();
```

- *Type:* java.lang.String

---

##### `whoCanModerateMembers`<sup>Required</sup> <a name="whoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembers"></a>

```java
public java.lang.String getWhoCanModerateMembers();
```

- *Type:* java.lang.String

---

##### `whoCanPostMessage`<sup>Required</sup> <a name="whoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessage"></a>

```java
public java.lang.String getWhoCanPostMessage();
```

- *Type:* java.lang.String

---

##### `whoCanViewGroup`<sup>Required</sup> <a name="whoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroup"></a>

```java
public java.lang.String getWhoCanViewGroup();
```

- *Type:* java.lang.String

---

##### `whoCanViewMembership`<sup>Required</sup> <a name="whoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembership"></a>

```java
public java.lang.String getWhoCanViewMembership();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GroupSettingsConfig <a name="GroupSettingsConfig" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.group_settings.GroupSettingsConfig;

GroupSettingsConfig.builder()
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
//  .allowExternalMembers(java.lang.Boolean)
//  .allowExternalMembers(IResolvable)
//  .allowWebPosting(java.lang.Boolean)
//  .allowWebPosting(IResolvable)
//  .archiveOnly(java.lang.Boolean)
//  .archiveOnly(IResolvable)
//  .customFooterText(java.lang.String)
//  .customReplyTo(java.lang.String)
//  .defaultMessageDenyNotificationText(java.lang.String)
//  .enableCollaborativeInbox(java.lang.Boolean)
//  .enableCollaborativeInbox(IResolvable)
//  .includeCustomFooter(java.lang.Boolean)
//  .includeCustomFooter(IResolvable)
//  .includeInGlobalAddressList(java.lang.Boolean)
//  .includeInGlobalAddressList(IResolvable)
//  .isArchived(java.lang.Boolean)
//  .isArchived(IResolvable)
//  .membersCanPostAsTheGroup(java.lang.Boolean)
//  .membersCanPostAsTheGroup(IResolvable)
//  .messageModerationLevel(java.lang.String)
//  .primaryLanguage(java.lang.String)
//  .replyTo(java.lang.String)
//  .sendMessageDenyNotification(java.lang.Boolean)
//  .sendMessageDenyNotification(IResolvable)
//  .spamModerationLevel(java.lang.String)
//  .timeouts(GroupSettingsTimeouts)
//  .whoCanAssistContent(java.lang.String)
//  .whoCanContactOwner(java.lang.String)
//  .whoCanDiscoverGroup(java.lang.String)
//  .whoCanJoin(java.lang.String)
//  .whoCanLeaveGroup(java.lang.String)
//  .whoCanModerateContent(java.lang.String)
//  .whoCanModerateMembers(java.lang.String)
//  .whoCanPostMessage(java.lang.String)
//  .whoCanViewGroup(java.lang.String)
//  .whoCanViewMembership(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.email">email</a></code> | <code>java.lang.String</code> | The group's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowExternalMembers">allowExternalMembers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowWebPosting">allowWebPosting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.archiveOnly">archiveOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customFooterText">customFooterText</a></code> | <code>java.lang.String</code> | Set the content of custom footer text. The maximum number of characters is 1,000. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customReplyTo">customReplyTo</a></code> | <code>java.lang.String</code> | An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.defaultMessageDenyNotificationText">defaultMessageDenyNotificationText</a></code> | <code>java.lang.String</code> | When a message is rejected, this is text for the rejection notification sent to the message's author. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.enableCollaborativeInbox">enableCollaborativeInbox</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeCustomFooter">includeCustomFooter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. Whether to include custom footer. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeInGlobalAddressList">includeInGlobalAddressList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.isArchived">isArchived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.membersCanPostAsTheGroup">membersCanPostAsTheGroup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.messageModerationLevel">messageModerationLevel</a></code> | <code>java.lang.String</code> | Defaults to `MODERATE_NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.primaryLanguage">primaryLanguage</a></code> | <code>java.lang.String</code> | The primary language for group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.replyTo">replyTo</a></code> | <code>java.lang.String</code> | Defaults to `REPLY_TO_IGNORE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.sendMessageDenyNotification">sendMessageDenyNotification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.spamModerationLevel">spamModerationLevel</a></code> | <code>java.lang.String</code> | Defaults to `MODERATE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanAssistContent">whoCanAssistContent</a></code> | <code>java.lang.String</code> | Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanContactOwner">whoCanContactOwner</a></code> | <code>java.lang.String</code> | Defaults to `ANYONE_CAN_CONTACT`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanDiscoverGroup">whoCanDiscoverGroup</a></code> | <code>java.lang.String</code> | Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanJoin">whoCanJoin</a></code> | <code>java.lang.String</code> | Defaults to `CAN_REQUEST_TO_JOIN`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanLeaveGroup">whoCanLeaveGroup</a></code> | <code>java.lang.String</code> | Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: - `ALL_MANAGERS_CAN_LEAVE` - `ALL_MEMBERS_CAN_LEAVE` - `NONE_CAN_LEAVE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateContent">whoCanModerateContent</a></code> | <code>java.lang.String</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateMembers">whoCanModerateMembers</a></code> | <code>java.lang.String</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanPostMessage">whoCanPostMessage</a></code> | <code>java.lang.String</code> | Permissions to post messages. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewGroup">whoCanViewGroup</a></code> | <code>java.lang.String</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewMembership">whoCanViewMembership</a></code> | <code>java.lang.String</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#email GroupSettings#email}

---

##### `allowExternalMembers`<sup>Optional</sup> <a name="allowExternalMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowExternalMembers"></a>

```java
public java.lang.Object getAllowExternalMembers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`.

Identifies whether members external to your organization can join the group. If true, Google Workspace users external to your organization can become members of this group. If false, users not belonging to the organization are not allowed to become members of this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_external_members GroupSettings#allow_external_members}

---

##### `allowWebPosting`<sup>Optional</sup> <a name="allowWebPosting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowWebPosting"></a>

```java
public java.lang.Object getAllowWebPosting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `true`.

Allows posting from web. If true, allows any member to post to the group forum. If false, Members only use Gmail to communicate with the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_web_posting GroupSettings#allow_web_posting}

---

##### `archiveOnly`<sup>Optional</sup> <a name="archiveOnly" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.archiveOnly"></a>

```java
public java.lang.Object getArchiveOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`.

Allows the group to be archived only. If true, Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browsable and searchable. If true, the `who_can_post_message` property is set to `NONE_CAN_POST`. If reverted from true to false, `who_can_post_message` is set to `ALL_MANAGERS_CAN_POST`. If false, The group is active and can receive messages. When false, updating `who_can_post_message` to `NONE_CAN_POST`, results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#archive_only GroupSettings#archive_only}

---

##### `customFooterText`<sup>Optional</sup> <a name="customFooterText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customFooterText"></a>

```java
public java.lang.String getCustomFooterText();
```

- *Type:* java.lang.String

Set the content of custom footer text. The maximum number of characters is 1,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_footer_text GroupSettings#custom_footer_text}

---

##### `customReplyTo`<sup>Optional</sup> <a name="customReplyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customReplyTo"></a>

```java
public java.lang.String getCustomReplyTo();
```

- *Type:* java.lang.String

An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`.

This address is defined by an account administrator. When the group's `reply_to` property is set to `REPLY_TO_CUSTOM`, the `custom_reply_to` property holds a custom email address used when replying to a message, the `custom_reply_to` property must have a text value or an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_reply_to GroupSettings#custom_reply_to}

---

##### `defaultMessageDenyNotificationText`<sup>Optional</sup> <a name="defaultMessageDenyNotificationText" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.defaultMessageDenyNotificationText"></a>

```java
public java.lang.String getDefaultMessageDenyNotificationText();
```

- *Type:* java.lang.String

When a message is rejected, this is text for the rejection notification sent to the message's author.

By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Requires `send_message_deny_notification` property to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#default_message_deny_notification_text GroupSettings#default_message_deny_notification_text}

---

##### `enableCollaborativeInbox`<sup>Optional</sup> <a name="enableCollaborativeInbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.enableCollaborativeInbox"></a>

```java
public java.lang.Object getEnableCollaborativeInbox();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#enable_collaborative_inbox GroupSettings#enable_collaborative_inbox}

---

##### `includeCustomFooter`<sup>Optional</sup> <a name="includeCustomFooter" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeCustomFooter"></a>

```java
public java.lang.Object getIncludeCustomFooter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`. Whether to include custom footer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_custom_footer GroupSettings#include_custom_footer}

---

##### `includeInGlobalAddressList`<sup>Optional</sup> <a name="includeInGlobalAddressList" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeInGlobalAddressList"></a>

```java
public java.lang.Object getIncludeInGlobalAddressList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `true`.

Enables the group to be included in the Global Address List. If true, the group is included in the Global Address List. If false, it is not included in the Global Address List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_in_global_address_list GroupSettings#include_in_global_address_list}

---

##### `isArchived`<sup>Optional</sup> <a name="isArchived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.isArchived"></a>

```java
public java.lang.Object getIsArchived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`.

Allows the Group contents to be archived. If true, archive messages sent to the group. If false, Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#is_archived GroupSettings#is_archived}

---

##### `membersCanPostAsTheGroup`<sup>Optional</sup> <a name="membersCanPostAsTheGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.membersCanPostAsTheGroup"></a>

```java
public java.lang.Object getMembersCanPostAsTheGroup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`.

Enables members to post messages as the group. If true, group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Any message moderation settings on individual users or new members do not apply to posts made on behalf of the group. If false, members can not post in behalf of the group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#members_can_post_as_the_group GroupSettings#members_can_post_as_the_group}

---

##### `messageModerationLevel`<sup>Optional</sup> <a name="messageModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.messageModerationLevel"></a>

```java
public java.lang.String getMessageModerationLevel();
```

- *Type:* java.lang.String

Defaults to `MODERATE_NONE`.

Moderation level of incoming messages. Possible values are:

* `MODERATE_ALL_MESSAGES`: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NON_MEMBERS`: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NEW_MEMBERS`: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NONE`: No moderator approval is required. Messages are delivered directly to the group.
  Note: When the `who_can_post_message` is set to `ANYONE_CAN_POST`, we recommend the `message_moderation_level` be set to `MODERATE_NON_MEMBERS` to protect the group from possible spam.When `member_can_post_as_the_group` is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#message_moderation_level GroupSettings#message_moderation_level}

---

##### `primaryLanguage`<sup>Optional</sup> <a name="primaryLanguage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.primaryLanguage"></a>

```java
public java.lang.String getPrimaryLanguage();
```

- *Type:* java.lang.String

The primary language for group.

For a group's primary language use the language tags from the Google Workspace languages found at Google Workspace Email Settings API Email Language Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#primary_language GroupSettings#primary_language}

---

##### `replyTo`<sup>Optional</sup> <a name="replyTo" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.replyTo"></a>

```java
public java.lang.String getReplyTo();
```

- *Type:* java.lang.String

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

##### `sendMessageDenyNotification`<sup>Optional</sup> <a name="sendMessageDenyNotification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.sendMessageDenyNotification"></a>

```java
public java.lang.Object getSendMessageDenyNotification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defaults to `false`.

Allows a member to be notified if the member's message to the group is denied by the group owner. If true, when a message is rejected, send the deny message notification to the message author. The `default_message_deny_notification_text` property is dependent on the `send_message_deny_notification` property being true. If false, when a message is rejected, no notification is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#send_message_deny_notification GroupSettings#send_message_deny_notification}

---

##### `spamModerationLevel`<sup>Optional</sup> <a name="spamModerationLevel" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.spamModerationLevel"></a>

```java
public java.lang.String getSpamModerationLevel();
```

- *Type:* java.lang.String

Defaults to `MODERATE`.

Specifies moderation levels for messages detected as spam. Possible values are:

* `ALLOW`: Post the message to the group.
* `MODERATE`: Send the message to the moderation queue. This is the default.
* `SILENTLY_MODERATE`: Send the message to the moderation queue, but do not send notification to moderators.
* `REJECT`: Immediately reject the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#spam_moderation_level GroupSettings#spam_moderation_level}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.timeouts"></a>

```java
public GroupSettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#timeouts GroupSettings#timeouts}

---

##### `whoCanAssistContent`<sup>Optional</sup> <a name="whoCanAssistContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanAssistContent"></a>

```java
public java.lang.String getWhoCanAssistContent();
```

- *Type:* java.lang.String

Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_assist_content GroupSettings#who_can_assist_content}

---

##### `whoCanContactOwner`<sup>Optional</sup> <a name="whoCanContactOwner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanContactOwner"></a>

```java
public java.lang.String getWhoCanContactOwner();
```

- *Type:* java.lang.String

Defaults to `ANYONE_CAN_CONTACT`.

Permission to contact owner of the group via web UI. Possible values are:

* `ALL_IN_DOMAIN_CAN_CONTACT`
* `ALL_MANAGERS_CAN_CONTACT`
* `ALL_MEMBERS_CAN_CONTACT`
* `ANYONE_CAN_CONTACT`
* `ALL_OWNERS_CAN_CONTACT`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_contact_owner GroupSettings#who_can_contact_owner}

---

##### `whoCanDiscoverGroup`<sup>Optional</sup> <a name="whoCanDiscoverGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanDiscoverGroup"></a>

```java
public java.lang.String getWhoCanDiscoverGroup();
```

- *Type:* java.lang.String

Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`.

Specifies the set of users for whom this group is discoverable. Possible values are:

* `ANYONE_CAN_DISCOVER`
* `ALL_IN_DOMAIN_CAN_DISCOVER`
* `ALL_MEMBERS_CAN_DISCOVER`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_discover_group GroupSettings#who_can_discover_group}

---

##### `whoCanJoin`<sup>Optional</sup> <a name="whoCanJoin" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanJoin"></a>

```java
public java.lang.String getWhoCanJoin();
```

- *Type:* java.lang.String

Defaults to `CAN_REQUEST_TO_JOIN`.

Permission to join group. Possible values are:

* `ANYONE_CAN_JOIN`: Any Internet user, both inside and outside your domain, can join the group.
* `ALL_IN_DOMAIN_CAN_JOIN`: Anyone in the account domain can join. This includes accounts with multiple domains.
* `INVITED_CAN_JOIN`: Candidates for membership can be invited to join.
* `CAN_REQUEST_TO_JOIN`: Non members can request an invitation to join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_join GroupSettings#who_can_join}

---

##### `whoCanLeaveGroup`<sup>Optional</sup> <a name="whoCanLeaveGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanLeaveGroup"></a>

```java
public java.lang.String getWhoCanLeaveGroup();
```

- *Type:* java.lang.String

Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: - `ALL_MANAGERS_CAN_LEAVE` - `ALL_MEMBERS_CAN_LEAVE` - `NONE_CAN_LEAVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_leave_group GroupSettings#who_can_leave_group}

---

##### `whoCanModerateContent`<sup>Optional</sup> <a name="whoCanModerateContent" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateContent"></a>

```java
public java.lang.String getWhoCanModerateContent();
```

- *Type:* java.lang.String

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_content GroupSettings#who_can_moderate_content}

---

##### `whoCanModerateMembers`<sup>Optional</sup> <a name="whoCanModerateMembers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateMembers"></a>

```java
public java.lang.String getWhoCanModerateMembers();
```

- *Type:* java.lang.String

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_members GroupSettings#who_can_moderate_members}

---

##### `whoCanPostMessage`<sup>Optional</sup> <a name="whoCanPostMessage" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanPostMessage"></a>

```java
public java.lang.String getWhoCanPostMessage();
```

- *Type:* java.lang.String

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

##### `whoCanViewGroup`<sup>Optional</sup> <a name="whoCanViewGroup" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewGroup"></a>

```java
public java.lang.String getWhoCanViewGroup();
```

- *Type:* java.lang.String

Defaults to `ALL_MEMBERS_CAN_VIEW`.

Permissions to view group messages. Possible values are:

* `ANYONE_CAN_VIEW`: Any Internet user can view the group's messages.
* `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in your account can view this group's messages.
* `ALL_MEMBERS_CAN_VIEW`: All group members can view the group's messages.
* `ALL_MANAGERS_CAN_VIEW`: Any group manager can view this group's messages.
* `ALL_OWNERS_CAN_VIEW`: The group owners can view this group's messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_view_group GroupSettings#who_can_view_group}

---

##### `whoCanViewMembership`<sup>Optional</sup> <a name="whoCanViewMembership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewMembership"></a>

```java
public java.lang.String getWhoCanViewMembership();
```

- *Type:* java.lang.String

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

```java
import com.hashicorp.cdktf.providers.googleworkspace.group_settings.GroupSettingsTimeouts;

GroupSettingsTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#create GroupSettings#create}. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#update GroupSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#create GroupSettings#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#update GroupSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupSettingsTimeoutsOutputReference <a name="GroupSettingsTimeoutsOutputReference" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.googleworkspace.group_settings.GroupSettingsTimeoutsOutputReference;

new GroupSettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

---



