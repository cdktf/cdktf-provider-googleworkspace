# `googleworkspace_group_settings`

Refer to the Terraform Registory for docs: [`googleworkspace_group_settings`](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings).

# `groupSettings` Submodule <a name="`groupSettings` Submodule" id="@cdktf/provider-googleworkspace.groupSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupSettings <a name="GroupSettings" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings googleworkspace_group_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_settings

groupSettings.GroupSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  allow_external_members: typing.Union[bool, IResolvable] = None,
  allow_web_posting: typing.Union[bool, IResolvable] = None,
  archive_only: typing.Union[bool, IResolvable] = None,
  custom_footer_text: str = None,
  custom_reply_to: str = None,
  default_message_deny_notification_text: str = None,
  enable_collaborative_inbox: typing.Union[bool, IResolvable] = None,
  include_custom_footer: typing.Union[bool, IResolvable] = None,
  include_in_global_address_list: typing.Union[bool, IResolvable] = None,
  is_archived: typing.Union[bool, IResolvable] = None,
  members_can_post_as_the_group: typing.Union[bool, IResolvable] = None,
  message_moderation_level: str = None,
  primary_language: str = None,
  reply_to: str = None,
  send_message_deny_notification: typing.Union[bool, IResolvable] = None,
  spam_moderation_level: str = None,
  timeouts: GroupSettingsTimeouts = None,
  who_can_assist_content: str = None,
  who_can_contact_owner: str = None,
  who_can_discover_group: str = None,
  who_can_join: str = None,
  who_can_leave_group: str = None,
  who_can_moderate_content: str = None,
  who_can_moderate_members: str = None,
  who_can_post_message: str = None,
  who_can_view_group: str = None,
  who_can_view_membership: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.email">email</a></code> | <code>str</code> | The group's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.allowExternalMembers">allow_external_members</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.allowWebPosting">allow_web_posting</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.archiveOnly">archive_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.customFooterText">custom_footer_text</a></code> | <code>str</code> | Set the content of custom footer text. The maximum number of characters is 1,000. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.customReplyTo">custom_reply_to</a></code> | <code>str</code> | An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.defaultMessageDenyNotificationText">default_message_deny_notification_text</a></code> | <code>str</code> | When a message is rejected, this is text for the rejection notification sent to the message's author. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.enableCollaborativeInbox">enable_collaborative_inbox</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.includeCustomFooter">include_custom_footer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. Whether to include custom footer. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.includeInGlobalAddressList">include_in_global_address_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.isArchived">is_archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.membersCanPostAsTheGroup">members_can_post_as_the_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.messageModerationLevel">message_moderation_level</a></code> | <code>str</code> | Defaults to `MODERATE_NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.primaryLanguage">primary_language</a></code> | <code>str</code> | The primary language for group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.replyTo">reply_to</a></code> | <code>str</code> | Defaults to `REPLY_TO_IGNORE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.sendMessageDenyNotification">send_message_deny_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.spamModerationLevel">spam_moderation_level</a></code> | <code>str</code> | Defaults to `MODERATE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanAssistContent">who_can_assist_content</a></code> | <code>str</code> | Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanContactOwner">who_can_contact_owner</a></code> | <code>str</code> | Defaults to `ANYONE_CAN_CONTACT`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanDiscoverGroup">who_can_discover_group</a></code> | <code>str</code> | Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanJoin">who_can_join</a></code> | <code>str</code> | Defaults to `CAN_REQUEST_TO_JOIN`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanLeaveGroup">who_can_leave_group</a></code> | <code>str</code> | Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: - `ALL_MANAGERS_CAN_LEAVE` - `ALL_MEMBERS_CAN_LEAVE` - `NONE_CAN_LEAVE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanModerateContent">who_can_moderate_content</a></code> | <code>str</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanModerateMembers">who_can_moderate_members</a></code> | <code>str</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanPostMessage">who_can_post_message</a></code> | <code>str</code> | Permissions to post messages. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanViewGroup">who_can_view_group</a></code> | <code>str</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanViewMembership">who_can_view_membership</a></code> | <code>str</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.email"></a>

- *Type:* str

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#email GroupSettings#email}

---

##### `allow_external_members`<sup>Optional</sup> <a name="allow_external_members" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.allowExternalMembers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Identifies whether members external to your organization can join the group. If true, Google Workspace users external to your organization can become members of this group. If false, users not belonging to the organization are not allowed to become members of this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_external_members GroupSettings#allow_external_members}

---

##### `allow_web_posting`<sup>Optional</sup> <a name="allow_web_posting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.allowWebPosting"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `true`.

Allows posting from web. If true, allows any member to post to the group forum. If false, Members only use Gmail to communicate with the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_web_posting GroupSettings#allow_web_posting}

---

##### `archive_only`<sup>Optional</sup> <a name="archive_only" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.archiveOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Allows the group to be archived only. If true, Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browsable and searchable. If true, the `who_can_post_message` property is set to `NONE_CAN_POST`. If reverted from true to false, `who_can_post_message` is set to `ALL_MANAGERS_CAN_POST`. If false, The group is active and can receive messages. When false, updating `who_can_post_message` to `NONE_CAN_POST`, results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#archive_only GroupSettings#archive_only}

---

##### `custom_footer_text`<sup>Optional</sup> <a name="custom_footer_text" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.customFooterText"></a>

- *Type:* str

Set the content of custom footer text. The maximum number of characters is 1,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_footer_text GroupSettings#custom_footer_text}

---

##### `custom_reply_to`<sup>Optional</sup> <a name="custom_reply_to" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.customReplyTo"></a>

- *Type:* str

An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`.

This address is defined by an account administrator. When the group's `reply_to` property is set to `REPLY_TO_CUSTOM`, the `custom_reply_to` property holds a custom email address used when replying to a message, the `custom_reply_to` property must have a text value or an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_reply_to GroupSettings#custom_reply_to}

---

##### `default_message_deny_notification_text`<sup>Optional</sup> <a name="default_message_deny_notification_text" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.defaultMessageDenyNotificationText"></a>

- *Type:* str

When a message is rejected, this is text for the rejection notification sent to the message's author.

By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Requires `send_message_deny_notification` property to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#default_message_deny_notification_text GroupSettings#default_message_deny_notification_text}

---

##### `enable_collaborative_inbox`<sup>Optional</sup> <a name="enable_collaborative_inbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.enableCollaborativeInbox"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#enable_collaborative_inbox GroupSettings#enable_collaborative_inbox}

---

##### `include_custom_footer`<sup>Optional</sup> <a name="include_custom_footer" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.includeCustomFooter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`. Whether to include custom footer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_custom_footer GroupSettings#include_custom_footer}

---

##### `include_in_global_address_list`<sup>Optional</sup> <a name="include_in_global_address_list" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.includeInGlobalAddressList"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `true`.

Enables the group to be included in the Global Address List. If true, the group is included in the Global Address List. If false, it is not included in the Global Address List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_in_global_address_list GroupSettings#include_in_global_address_list}

---

##### `is_archived`<sup>Optional</sup> <a name="is_archived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.isArchived"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Allows the Group contents to be archived. If true, archive messages sent to the group. If false, Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#is_archived GroupSettings#is_archived}

---

##### `members_can_post_as_the_group`<sup>Optional</sup> <a name="members_can_post_as_the_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.membersCanPostAsTheGroup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Enables members to post messages as the group. If true, group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Any message moderation settings on individual users or new members do not apply to posts made on behalf of the group. If false, members can not post in behalf of the group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#members_can_post_as_the_group GroupSettings#members_can_post_as_the_group}

---

##### `message_moderation_level`<sup>Optional</sup> <a name="message_moderation_level" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.messageModerationLevel"></a>

- *Type:* str

Defaults to `MODERATE_NONE`.

Moderation level of incoming messages. Possible values are:

* `MODERATE_ALL_MESSAGES`: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NON_MEMBERS`: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NEW_MEMBERS`: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NONE`: No moderator approval is required. Messages are delivered directly to the group.
  Note: When the `who_can_post_message` is set to `ANYONE_CAN_POST`, we recommend the `message_moderation_level` be set to `MODERATE_NON_MEMBERS` to protect the group from possible spam.When `member_can_post_as_the_group` is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#message_moderation_level GroupSettings#message_moderation_level}

---

##### `primary_language`<sup>Optional</sup> <a name="primary_language" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.primaryLanguage"></a>

- *Type:* str

The primary language for group.

For a group's primary language use the language tags from the Google Workspace languages found at Google Workspace Email Settings API Email Language Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#primary_language GroupSettings#primary_language}

---

##### `reply_to`<sup>Optional</sup> <a name="reply_to" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.replyTo"></a>

- *Type:* str

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

##### `send_message_deny_notification`<sup>Optional</sup> <a name="send_message_deny_notification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.sendMessageDenyNotification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Allows a member to be notified if the member's message to the group is denied by the group owner. If true, when a message is rejected, send the deny message notification to the message author. The `default_message_deny_notification_text` property is dependent on the `send_message_deny_notification` property being true. If false, when a message is rejected, no notification is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#send_message_deny_notification GroupSettings#send_message_deny_notification}

---

##### `spam_moderation_level`<sup>Optional</sup> <a name="spam_moderation_level" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.spamModerationLevel"></a>

- *Type:* str

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

##### `who_can_assist_content`<sup>Optional</sup> <a name="who_can_assist_content" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanAssistContent"></a>

- *Type:* str

Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_assist_content GroupSettings#who_can_assist_content}

---

##### `who_can_contact_owner`<sup>Optional</sup> <a name="who_can_contact_owner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanContactOwner"></a>

- *Type:* str

Defaults to `ANYONE_CAN_CONTACT`.

Permission to contact owner of the group via web UI. Possible values are:

* `ALL_IN_DOMAIN_CAN_CONTACT`
* `ALL_MANAGERS_CAN_CONTACT`
* `ALL_MEMBERS_CAN_CONTACT`
* `ANYONE_CAN_CONTACT`
* `ALL_OWNERS_CAN_CONTACT`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_contact_owner GroupSettings#who_can_contact_owner}

---

##### `who_can_discover_group`<sup>Optional</sup> <a name="who_can_discover_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanDiscoverGroup"></a>

- *Type:* str

Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`.

Specifies the set of users for whom this group is discoverable. Possible values are:

* `ANYONE_CAN_DISCOVER`
* `ALL_IN_DOMAIN_CAN_DISCOVER`
* `ALL_MEMBERS_CAN_DISCOVER`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_discover_group GroupSettings#who_can_discover_group}

---

##### `who_can_join`<sup>Optional</sup> <a name="who_can_join" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanJoin"></a>

- *Type:* str

Defaults to `CAN_REQUEST_TO_JOIN`.

Permission to join group. Possible values are:

* `ANYONE_CAN_JOIN`: Any Internet user, both inside and outside your domain, can join the group.
* `ALL_IN_DOMAIN_CAN_JOIN`: Anyone in the account domain can join. This includes accounts with multiple domains.
* `INVITED_CAN_JOIN`: Candidates for membership can be invited to join.
* `CAN_REQUEST_TO_JOIN`: Non members can request an invitation to join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_join GroupSettings#who_can_join}

---

##### `who_can_leave_group`<sup>Optional</sup> <a name="who_can_leave_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanLeaveGroup"></a>

- *Type:* str

Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: - `ALL_MANAGERS_CAN_LEAVE` - `ALL_MEMBERS_CAN_LEAVE` - `NONE_CAN_LEAVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_leave_group GroupSettings#who_can_leave_group}

---

##### `who_can_moderate_content`<sup>Optional</sup> <a name="who_can_moderate_content" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanModerateContent"></a>

- *Type:* str

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_content GroupSettings#who_can_moderate_content}

---

##### `who_can_moderate_members`<sup>Optional</sup> <a name="who_can_moderate_members" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanModerateMembers"></a>

- *Type:* str

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_members GroupSettings#who_can_moderate_members}

---

##### `who_can_post_message`<sup>Optional</sup> <a name="who_can_post_message" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanPostMessage"></a>

- *Type:* str

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

##### `who_can_view_group`<sup>Optional</sup> <a name="who_can_view_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanViewGroup"></a>

- *Type:* str

Defaults to `ALL_MEMBERS_CAN_VIEW`.

Permissions to view group messages. Possible values are:

* `ANYONE_CAN_VIEW`: Any Internet user can view the group's messages.
* `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in your account can view this group's messages.
* `ALL_MEMBERS_CAN_VIEW`: All group members can view the group's messages.
* `ALL_MANAGERS_CAN_VIEW`: Any group manager can view this group's messages.
* `ALL_OWNERS_CAN_VIEW`: The group owners can view this group's messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_view_group GroupSettings#who_can_view_group}

---

##### `who_can_view_membership`<sup>Optional</sup> <a name="who_can_view_membership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.Initializer.parameter.whoCanViewMembership"></a>

- *Type:* str

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
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowExternalMembers">reset_allow_external_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowWebPosting">reset_allow_web_posting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetArchiveOnly">reset_archive_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomFooterText">reset_custom_footer_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomReplyTo">reset_custom_reply_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetDefaultMessageDenyNotificationText">reset_default_message_deny_notification_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetEnableCollaborativeInbox">reset_enable_collaborative_inbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeCustomFooter">reset_include_custom_footer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeInGlobalAddressList">reset_include_in_global_address_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIsArchived">reset_is_archived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMembersCanPostAsTheGroup">reset_members_can_post_as_the_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMessageModerationLevel">reset_message_moderation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetPrimaryLanguage">reset_primary_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetReplyTo">reset_reply_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSendMessageDenyNotification">reset_send_message_deny_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSpamModerationLevel">reset_spam_moderation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanAssistContent">reset_who_can_assist_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanContactOwner">reset_who_can_contact_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanDiscoverGroup">reset_who_can_discover_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanJoin">reset_who_can_join</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanLeaveGroup">reset_who_can_leave_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateContent">reset_who_can_moderate_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateMembers">reset_who_can_moderate_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanPostMessage">reset_who_can_post_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewGroup">reset_who_can_view_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewMembership">reset_who_can_view_membership</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#create GroupSettings#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#update GroupSettings#update}.

---

##### `reset_allow_external_members` <a name="reset_allow_external_members" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowExternalMembers"></a>

```python
def reset_allow_external_members() -> None
```

##### `reset_allow_web_posting` <a name="reset_allow_web_posting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetAllowWebPosting"></a>

```python
def reset_allow_web_posting() -> None
```

##### `reset_archive_only` <a name="reset_archive_only" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetArchiveOnly"></a>

```python
def reset_archive_only() -> None
```

##### `reset_custom_footer_text` <a name="reset_custom_footer_text" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomFooterText"></a>

```python
def reset_custom_footer_text() -> None
```

##### `reset_custom_reply_to` <a name="reset_custom_reply_to" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetCustomReplyTo"></a>

```python
def reset_custom_reply_to() -> None
```

##### `reset_default_message_deny_notification_text` <a name="reset_default_message_deny_notification_text" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetDefaultMessageDenyNotificationText"></a>

```python
def reset_default_message_deny_notification_text() -> None
```

##### `reset_enable_collaborative_inbox` <a name="reset_enable_collaborative_inbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetEnableCollaborativeInbox"></a>

```python
def reset_enable_collaborative_inbox() -> None
```

##### `reset_include_custom_footer` <a name="reset_include_custom_footer" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeCustomFooter"></a>

```python
def reset_include_custom_footer() -> None
```

##### `reset_include_in_global_address_list` <a name="reset_include_in_global_address_list" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIncludeInGlobalAddressList"></a>

```python
def reset_include_in_global_address_list() -> None
```

##### `reset_is_archived` <a name="reset_is_archived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetIsArchived"></a>

```python
def reset_is_archived() -> None
```

##### `reset_members_can_post_as_the_group` <a name="reset_members_can_post_as_the_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMembersCanPostAsTheGroup"></a>

```python
def reset_members_can_post_as_the_group() -> None
```

##### `reset_message_moderation_level` <a name="reset_message_moderation_level" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetMessageModerationLevel"></a>

```python
def reset_message_moderation_level() -> None
```

##### `reset_primary_language` <a name="reset_primary_language" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetPrimaryLanguage"></a>

```python
def reset_primary_language() -> None
```

##### `reset_reply_to` <a name="reset_reply_to" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetReplyTo"></a>

```python
def reset_reply_to() -> None
```

##### `reset_send_message_deny_notification` <a name="reset_send_message_deny_notification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSendMessageDenyNotification"></a>

```python
def reset_send_message_deny_notification() -> None
```

##### `reset_spam_moderation_level` <a name="reset_spam_moderation_level" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetSpamModerationLevel"></a>

```python
def reset_spam_moderation_level() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_who_can_assist_content` <a name="reset_who_can_assist_content" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanAssistContent"></a>

```python
def reset_who_can_assist_content() -> None
```

##### `reset_who_can_contact_owner` <a name="reset_who_can_contact_owner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanContactOwner"></a>

```python
def reset_who_can_contact_owner() -> None
```

##### `reset_who_can_discover_group` <a name="reset_who_can_discover_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanDiscoverGroup"></a>

```python
def reset_who_can_discover_group() -> None
```

##### `reset_who_can_join` <a name="reset_who_can_join" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanJoin"></a>

```python
def reset_who_can_join() -> None
```

##### `reset_who_can_leave_group` <a name="reset_who_can_leave_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanLeaveGroup"></a>

```python
def reset_who_can_leave_group() -> None
```

##### `reset_who_can_moderate_content` <a name="reset_who_can_moderate_content" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateContent"></a>

```python
def reset_who_can_moderate_content() -> None
```

##### `reset_who_can_moderate_members` <a name="reset_who_can_moderate_members" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanModerateMembers"></a>

```python
def reset_who_can_moderate_members() -> None
```

##### `reset_who_can_post_message` <a name="reset_who_can_post_message" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanPostMessage"></a>

```python
def reset_who_can_post_message() -> None
```

##### `reset_who_can_view_group` <a name="reset_who_can_view_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewGroup"></a>

```python
def reset_who_can_view_group() -> None
```

##### `reset_who_can_view_membership` <a name="reset_who_can_view_membership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.resetWhoCanViewMembership"></a>

```python
def reset_who_can_view_membership() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_settings

groupSettings.GroupSettings.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_settings

groupSettings.GroupSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_settings

groupSettings.GroupSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customRolesEnabledForSettingsToBeMerged">custom_roles_enabled_for_settings_to_be_merged</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference">GroupSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembersInput">allow_external_members_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPostingInput">allow_web_posting_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnlyInput">archive_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterTextInput">custom_footer_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyToInput">custom_reply_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationTextInput">default_message_deny_notification_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInboxInput">enable_collaborative_inbox_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooterInput">include_custom_footer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressListInput">include_in_global_address_list_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchivedInput">is_archived_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroupInput">members_can_post_as_the_group_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevelInput">message_moderation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguageInput">primary_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyToInput">reply_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotificationInput">send_message_deny_notification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevelInput">spam_moderation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContentInput">who_can_assist_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwnerInput">who_can_contact_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroupInput">who_can_discover_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoinInput">who_can_join_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroupInput">who_can_leave_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContentInput">who_can_moderate_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembersInput">who_can_moderate_members_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessageInput">who_can_post_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroupInput">who_can_view_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembershipInput">who_can_view_membership_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembers">allow_external_members</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPosting">allow_web_posting</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnly">archive_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterText">custom_footer_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyTo">custom_reply_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationText">default_message_deny_notification_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInbox">enable_collaborative_inbox</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooter">include_custom_footer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressList">include_in_global_address_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchived">is_archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroup">members_can_post_as_the_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevel">message_moderation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguage">primary_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyTo">reply_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotification">send_message_deny_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevel">spam_moderation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContent">who_can_assist_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwner">who_can_contact_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroup">who_can_discover_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoin">who_can_join</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroup">who_can_leave_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContent">who_can_moderate_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembers">who_can_moderate_members</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessage">who_can_post_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroup">who_can_view_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembership">who_can_view_membership</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_roles_enabled_for_settings_to_be_merged`<sup>Required</sup> <a name="custom_roles_enabled_for_settings_to_be_merged" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customRolesEnabledForSettingsToBeMerged"></a>

```python
custom_roles_enabled_for_settings_to_be_merged: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeouts"></a>

```python
timeouts: GroupSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference">GroupSettingsTimeoutsOutputReference</a>

---

##### `allow_external_members_input`<sup>Optional</sup> <a name="allow_external_members_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembersInput"></a>

```python
allow_external_members_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_web_posting_input`<sup>Optional</sup> <a name="allow_web_posting_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPostingInput"></a>

```python
allow_web_posting_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archive_only_input`<sup>Optional</sup> <a name="archive_only_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnlyInput"></a>

```python
archive_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_footer_text_input`<sup>Optional</sup> <a name="custom_footer_text_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterTextInput"></a>

```python
custom_footer_text_input: str
```

- *Type:* str

---

##### `custom_reply_to_input`<sup>Optional</sup> <a name="custom_reply_to_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyToInput"></a>

```python
custom_reply_to_input: str
```

- *Type:* str

---

##### `default_message_deny_notification_text_input`<sup>Optional</sup> <a name="default_message_deny_notification_text_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationTextInput"></a>

```python
default_message_deny_notification_text_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `enable_collaborative_inbox_input`<sup>Optional</sup> <a name="enable_collaborative_inbox_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInboxInput"></a>

```python
enable_collaborative_inbox_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_custom_footer_input`<sup>Optional</sup> <a name="include_custom_footer_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooterInput"></a>

```python
include_custom_footer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_in_global_address_list_input`<sup>Optional</sup> <a name="include_in_global_address_list_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressListInput"></a>

```python
include_in_global_address_list_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_archived_input`<sup>Optional</sup> <a name="is_archived_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchivedInput"></a>

```python
is_archived_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_post_as_the_group_input`<sup>Optional</sup> <a name="members_can_post_as_the_group_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroupInput"></a>

```python
members_can_post_as_the_group_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_moderation_level_input`<sup>Optional</sup> <a name="message_moderation_level_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevelInput"></a>

```python
message_moderation_level_input: str
```

- *Type:* str

---

##### `primary_language_input`<sup>Optional</sup> <a name="primary_language_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguageInput"></a>

```python
primary_language_input: str
```

- *Type:* str

---

##### `reply_to_input`<sup>Optional</sup> <a name="reply_to_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyToInput"></a>

```python
reply_to_input: str
```

- *Type:* str

---

##### `send_message_deny_notification_input`<sup>Optional</sup> <a name="send_message_deny_notification_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotificationInput"></a>

```python
send_message_deny_notification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spam_moderation_level_input`<sup>Optional</sup> <a name="spam_moderation_level_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevelInput"></a>

```python
spam_moderation_level_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GroupSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>]

---

##### `who_can_assist_content_input`<sup>Optional</sup> <a name="who_can_assist_content_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContentInput"></a>

```python
who_can_assist_content_input: str
```

- *Type:* str

---

##### `who_can_contact_owner_input`<sup>Optional</sup> <a name="who_can_contact_owner_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwnerInput"></a>

```python
who_can_contact_owner_input: str
```

- *Type:* str

---

##### `who_can_discover_group_input`<sup>Optional</sup> <a name="who_can_discover_group_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroupInput"></a>

```python
who_can_discover_group_input: str
```

- *Type:* str

---

##### `who_can_join_input`<sup>Optional</sup> <a name="who_can_join_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoinInput"></a>

```python
who_can_join_input: str
```

- *Type:* str

---

##### `who_can_leave_group_input`<sup>Optional</sup> <a name="who_can_leave_group_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroupInput"></a>

```python
who_can_leave_group_input: str
```

- *Type:* str

---

##### `who_can_moderate_content_input`<sup>Optional</sup> <a name="who_can_moderate_content_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContentInput"></a>

```python
who_can_moderate_content_input: str
```

- *Type:* str

---

##### `who_can_moderate_members_input`<sup>Optional</sup> <a name="who_can_moderate_members_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembersInput"></a>

```python
who_can_moderate_members_input: str
```

- *Type:* str

---

##### `who_can_post_message_input`<sup>Optional</sup> <a name="who_can_post_message_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessageInput"></a>

```python
who_can_post_message_input: str
```

- *Type:* str

---

##### `who_can_view_group_input`<sup>Optional</sup> <a name="who_can_view_group_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroupInput"></a>

```python
who_can_view_group_input: str
```

- *Type:* str

---

##### `who_can_view_membership_input`<sup>Optional</sup> <a name="who_can_view_membership_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembershipInput"></a>

```python
who_can_view_membership_input: str
```

- *Type:* str

---

##### `allow_external_members`<sup>Required</sup> <a name="allow_external_members" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowExternalMembers"></a>

```python
allow_external_members: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_web_posting`<sup>Required</sup> <a name="allow_web_posting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.allowWebPosting"></a>

```python
allow_web_posting: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archive_only`<sup>Required</sup> <a name="archive_only" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.archiveOnly"></a>

```python
archive_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_footer_text`<sup>Required</sup> <a name="custom_footer_text" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customFooterText"></a>

```python
custom_footer_text: str
```

- *Type:* str

---

##### `custom_reply_to`<sup>Required</sup> <a name="custom_reply_to" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.customReplyTo"></a>

```python
custom_reply_to: str
```

- *Type:* str

---

##### `default_message_deny_notification_text`<sup>Required</sup> <a name="default_message_deny_notification_text" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.defaultMessageDenyNotificationText"></a>

```python
default_message_deny_notification_text: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `enable_collaborative_inbox`<sup>Required</sup> <a name="enable_collaborative_inbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.enableCollaborativeInbox"></a>

```python
enable_collaborative_inbox: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_custom_footer`<sup>Required</sup> <a name="include_custom_footer" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeCustomFooter"></a>

```python
include_custom_footer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_in_global_address_list`<sup>Required</sup> <a name="include_in_global_address_list" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.includeInGlobalAddressList"></a>

```python
include_in_global_address_list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_archived`<sup>Required</sup> <a name="is_archived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.isArchived"></a>

```python
is_archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_post_as_the_group`<sup>Required</sup> <a name="members_can_post_as_the_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.membersCanPostAsTheGroup"></a>

```python
members_can_post_as_the_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_moderation_level`<sup>Required</sup> <a name="message_moderation_level" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.messageModerationLevel"></a>

```python
message_moderation_level: str
```

- *Type:* str

---

##### `primary_language`<sup>Required</sup> <a name="primary_language" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.primaryLanguage"></a>

```python
primary_language: str
```

- *Type:* str

---

##### `reply_to`<sup>Required</sup> <a name="reply_to" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.replyTo"></a>

```python
reply_to: str
```

- *Type:* str

---

##### `send_message_deny_notification`<sup>Required</sup> <a name="send_message_deny_notification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.sendMessageDenyNotification"></a>

```python
send_message_deny_notification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spam_moderation_level`<sup>Required</sup> <a name="spam_moderation_level" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.spamModerationLevel"></a>

```python
spam_moderation_level: str
```

- *Type:* str

---

##### `who_can_assist_content`<sup>Required</sup> <a name="who_can_assist_content" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanAssistContent"></a>

```python
who_can_assist_content: str
```

- *Type:* str

---

##### `who_can_contact_owner`<sup>Required</sup> <a name="who_can_contact_owner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanContactOwner"></a>

```python
who_can_contact_owner: str
```

- *Type:* str

---

##### `who_can_discover_group`<sup>Required</sup> <a name="who_can_discover_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanDiscoverGroup"></a>

```python
who_can_discover_group: str
```

- *Type:* str

---

##### `who_can_join`<sup>Required</sup> <a name="who_can_join" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanJoin"></a>

```python
who_can_join: str
```

- *Type:* str

---

##### `who_can_leave_group`<sup>Required</sup> <a name="who_can_leave_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanLeaveGroup"></a>

```python
who_can_leave_group: str
```

- *Type:* str

---

##### `who_can_moderate_content`<sup>Required</sup> <a name="who_can_moderate_content" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateContent"></a>

```python
who_can_moderate_content: str
```

- *Type:* str

---

##### `who_can_moderate_members`<sup>Required</sup> <a name="who_can_moderate_members" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanModerateMembers"></a>

```python
who_can_moderate_members: str
```

- *Type:* str

---

##### `who_can_post_message`<sup>Required</sup> <a name="who_can_post_message" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanPostMessage"></a>

```python
who_can_post_message: str
```

- *Type:* str

---

##### `who_can_view_group`<sup>Required</sup> <a name="who_can_view_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewGroup"></a>

```python
who_can_view_group: str
```

- *Type:* str

---

##### `who_can_view_membership`<sup>Required</sup> <a name="who_can_view_membership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.whoCanViewMembership"></a>

```python
who_can_view_membership: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupSettingsConfig <a name="GroupSettingsConfig" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_settings

groupSettings.GroupSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  allow_external_members: typing.Union[bool, IResolvable] = None,
  allow_web_posting: typing.Union[bool, IResolvable] = None,
  archive_only: typing.Union[bool, IResolvable] = None,
  custom_footer_text: str = None,
  custom_reply_to: str = None,
  default_message_deny_notification_text: str = None,
  enable_collaborative_inbox: typing.Union[bool, IResolvable] = None,
  include_custom_footer: typing.Union[bool, IResolvable] = None,
  include_in_global_address_list: typing.Union[bool, IResolvable] = None,
  is_archived: typing.Union[bool, IResolvable] = None,
  members_can_post_as_the_group: typing.Union[bool, IResolvable] = None,
  message_moderation_level: str = None,
  primary_language: str = None,
  reply_to: str = None,
  send_message_deny_notification: typing.Union[bool, IResolvable] = None,
  spam_moderation_level: str = None,
  timeouts: GroupSettingsTimeouts = None,
  who_can_assist_content: str = None,
  who_can_contact_owner: str = None,
  who_can_discover_group: str = None,
  who_can_join: str = None,
  who_can_leave_group: str = None,
  who_can_moderate_content: str = None,
  who_can_moderate_members: str = None,
  who_can_post_message: str = None,
  who_can_view_group: str = None,
  who_can_view_membership: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.email">email</a></code> | <code>str</code> | The group's email address. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowExternalMembers">allow_external_members</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowWebPosting">allow_web_posting</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.archiveOnly">archive_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customFooterText">custom_footer_text</a></code> | <code>str</code> | Set the content of custom footer text. The maximum number of characters is 1,000. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customReplyTo">custom_reply_to</a></code> | <code>str</code> | An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.defaultMessageDenyNotificationText">default_message_deny_notification_text</a></code> | <code>str</code> | When a message is rejected, this is text for the rejection notification sent to the message's author. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.enableCollaborativeInbox">enable_collaborative_inbox</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeCustomFooter">include_custom_footer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. Whether to include custom footer. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeInGlobalAddressList">include_in_global_address_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `true`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.isArchived">is_archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.membersCanPostAsTheGroup">members_can_post_as_the_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.messageModerationLevel">message_moderation_level</a></code> | <code>str</code> | Defaults to `MODERATE_NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.primaryLanguage">primary_language</a></code> | <code>str</code> | The primary language for group. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.replyTo">reply_to</a></code> | <code>str</code> | Defaults to `REPLY_TO_IGNORE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.sendMessageDenyNotification">send_message_deny_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.spamModerationLevel">spam_moderation_level</a></code> | <code>str</code> | Defaults to `MODERATE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanAssistContent">who_can_assist_content</a></code> | <code>str</code> | Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanContactOwner">who_can_contact_owner</a></code> | <code>str</code> | Defaults to `ANYONE_CAN_CONTACT`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanDiscoverGroup">who_can_discover_group</a></code> | <code>str</code> | Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanJoin">who_can_join</a></code> | <code>str</code> | Defaults to `CAN_REQUEST_TO_JOIN`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanLeaveGroup">who_can_leave_group</a></code> | <code>str</code> | Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: - `ALL_MANAGERS_CAN_LEAVE` - `ALL_MEMBERS_CAN_LEAVE` - `NONE_CAN_LEAVE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateContent">who_can_moderate_content</a></code> | <code>str</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateMembers">who_can_moderate_members</a></code> | <code>str</code> | Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanPostMessage">who_can_post_message</a></code> | <code>str</code> | Permissions to post messages. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewGroup">who_can_view_group</a></code> | <code>str</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewMembership">who_can_view_membership</a></code> | <code>str</code> | Defaults to `ALL_MEMBERS_CAN_VIEW`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.email"></a>

```python
email: str
```

- *Type:* str

The group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#email GroupSettings#email}

---

##### `allow_external_members`<sup>Optional</sup> <a name="allow_external_members" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowExternalMembers"></a>

```python
allow_external_members: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Identifies whether members external to your organization can join the group. If true, Google Workspace users external to your organization can become members of this group. If false, users not belonging to the organization are not allowed to become members of this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_external_members GroupSettings#allow_external_members}

---

##### `allow_web_posting`<sup>Optional</sup> <a name="allow_web_posting" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.allowWebPosting"></a>

```python
allow_web_posting: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `true`.

Allows posting from web. If true, allows any member to post to the group forum. If false, Members only use Gmail to communicate with the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#allow_web_posting GroupSettings#allow_web_posting}

---

##### `archive_only`<sup>Optional</sup> <a name="archive_only" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.archiveOnly"></a>

```python
archive_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Allows the group to be archived only. If true, Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browsable and searchable. If true, the `who_can_post_message` property is set to `NONE_CAN_POST`. If reverted from true to false, `who_can_post_message` is set to `ALL_MANAGERS_CAN_POST`. If false, The group is active and can receive messages. When false, updating `who_can_post_message` to `NONE_CAN_POST`, results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#archive_only GroupSettings#archive_only}

---

##### `custom_footer_text`<sup>Optional</sup> <a name="custom_footer_text" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customFooterText"></a>

```python
custom_footer_text: str
```

- *Type:* str

Set the content of custom footer text. The maximum number of characters is 1,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_footer_text GroupSettings#custom_footer_text}

---

##### `custom_reply_to`<sup>Optional</sup> <a name="custom_reply_to" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.customReplyTo"></a>

```python
custom_reply_to: str
```

- *Type:* str

An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`.

This address is defined by an account administrator. When the group's `reply_to` property is set to `REPLY_TO_CUSTOM`, the `custom_reply_to` property holds a custom email address used when replying to a message, the `custom_reply_to` property must have a text value or an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#custom_reply_to GroupSettings#custom_reply_to}

---

##### `default_message_deny_notification_text`<sup>Optional</sup> <a name="default_message_deny_notification_text" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.defaultMessageDenyNotificationText"></a>

```python
default_message_deny_notification_text: str
```

- *Type:* str

When a message is rejected, this is text for the rejection notification sent to the message's author.

By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Requires `send_message_deny_notification` property to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#default_message_deny_notification_text GroupSettings#default_message_deny_notification_text}

---

##### `enable_collaborative_inbox`<sup>Optional</sup> <a name="enable_collaborative_inbox" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.enableCollaborativeInbox"></a>

```python
enable_collaborative_inbox: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#enable_collaborative_inbox GroupSettings#enable_collaborative_inbox}

---

##### `include_custom_footer`<sup>Optional</sup> <a name="include_custom_footer" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeCustomFooter"></a>

```python
include_custom_footer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`. Whether to include custom footer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_custom_footer GroupSettings#include_custom_footer}

---

##### `include_in_global_address_list`<sup>Optional</sup> <a name="include_in_global_address_list" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.includeInGlobalAddressList"></a>

```python
include_in_global_address_list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `true`.

Enables the group to be included in the Global Address List. If true, the group is included in the Global Address List. If false, it is not included in the Global Address List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#include_in_global_address_list GroupSettings#include_in_global_address_list}

---

##### `is_archived`<sup>Optional</sup> <a name="is_archived" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.isArchived"></a>

```python
is_archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Allows the Group contents to be archived. If true, archive messages sent to the group. If false, Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#is_archived GroupSettings#is_archived}

---

##### `members_can_post_as_the_group`<sup>Optional</sup> <a name="members_can_post_as_the_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.membersCanPostAsTheGroup"></a>

```python
members_can_post_as_the_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Enables members to post messages as the group. If true, group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Any message moderation settings on individual users or new members do not apply to posts made on behalf of the group. If false, members can not post in behalf of the group's email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#members_can_post_as_the_group GroupSettings#members_can_post_as_the_group}

---

##### `message_moderation_level`<sup>Optional</sup> <a name="message_moderation_level" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.messageModerationLevel"></a>

```python
message_moderation_level: str
```

- *Type:* str

Defaults to `MODERATE_NONE`.

Moderation level of incoming messages. Possible values are:

* `MODERATE_ALL_MESSAGES`: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NON_MEMBERS`: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NEW_MEMBERS`: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
* `MODERATE_NONE`: No moderator approval is required. Messages are delivered directly to the group.
  Note: When the `who_can_post_message` is set to `ANYONE_CAN_POST`, we recommend the `message_moderation_level` be set to `MODERATE_NON_MEMBERS` to protect the group from possible spam.When `member_can_post_as_the_group` is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#message_moderation_level GroupSettings#message_moderation_level}

---

##### `primary_language`<sup>Optional</sup> <a name="primary_language" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.primaryLanguage"></a>

```python
primary_language: str
```

- *Type:* str

The primary language for group.

For a group's primary language use the language tags from the Google Workspace languages found at Google Workspace Email Settings API Email Language Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#primary_language GroupSettings#primary_language}

---

##### `reply_to`<sup>Optional</sup> <a name="reply_to" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.replyTo"></a>

```python
reply_to: str
```

- *Type:* str

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

##### `send_message_deny_notification`<sup>Optional</sup> <a name="send_message_deny_notification" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.sendMessageDenyNotification"></a>

```python
send_message_deny_notification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to `false`.

Allows a member to be notified if the member's message to the group is denied by the group owner. If true, when a message is rejected, send the deny message notification to the message author. The `default_message_deny_notification_text` property is dependent on the `send_message_deny_notification` property being true. If false, when a message is rejected, no notification is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#send_message_deny_notification GroupSettings#send_message_deny_notification}

---

##### `spam_moderation_level`<sup>Optional</sup> <a name="spam_moderation_level" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.spamModerationLevel"></a>

```python
spam_moderation_level: str
```

- *Type:* str

Defaults to `MODERATE`.

Specifies moderation levels for messages detected as spam. Possible values are:

* `ALLOW`: Post the message to the group.
* `MODERATE`: Send the message to the moderation queue. This is the default.
* `SILENTLY_MODERATE`: Send the message to the moderation queue, but do not send notification to moderators.
* `REJECT`: Immediately reject the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#spam_moderation_level GroupSettings#spam_moderation_level}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.timeouts"></a>

```python
timeouts: GroupSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#timeouts GroupSettings#timeouts}

---

##### `who_can_assist_content`<sup>Optional</sup> <a name="who_can_assist_content" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanAssistContent"></a>

```python
who_can_assist_content: str
```

- *Type:* str

Defaults to `NONE`. Specifies who can moderate metadata. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_assist_content GroupSettings#who_can_assist_content}

---

##### `who_can_contact_owner`<sup>Optional</sup> <a name="who_can_contact_owner" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanContactOwner"></a>

```python
who_can_contact_owner: str
```

- *Type:* str

Defaults to `ANYONE_CAN_CONTACT`.

Permission to contact owner of the group via web UI. Possible values are:

* `ALL_IN_DOMAIN_CAN_CONTACT`
* `ALL_MANAGERS_CAN_CONTACT`
* `ALL_MEMBERS_CAN_CONTACT`
* `ANYONE_CAN_CONTACT`
* `ALL_OWNERS_CAN_CONTACT`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_contact_owner GroupSettings#who_can_contact_owner}

---

##### `who_can_discover_group`<sup>Optional</sup> <a name="who_can_discover_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanDiscoverGroup"></a>

```python
who_can_discover_group: str
```

- *Type:* str

Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`.

Specifies the set of users for whom this group is discoverable. Possible values are:

* `ANYONE_CAN_DISCOVER`
* `ALL_IN_DOMAIN_CAN_DISCOVER`
* `ALL_MEMBERS_CAN_DISCOVER`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_discover_group GroupSettings#who_can_discover_group}

---

##### `who_can_join`<sup>Optional</sup> <a name="who_can_join" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanJoin"></a>

```python
who_can_join: str
```

- *Type:* str

Defaults to `CAN_REQUEST_TO_JOIN`.

Permission to join group. Possible values are:

* `ANYONE_CAN_JOIN`: Any Internet user, both inside and outside your domain, can join the group.
* `ALL_IN_DOMAIN_CAN_JOIN`: Anyone in the account domain can join. This includes accounts with multiple domains.
* `INVITED_CAN_JOIN`: Candidates for membership can be invited to join.
* `CAN_REQUEST_TO_JOIN`: Non members can request an invitation to join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_join GroupSettings#who_can_join}

---

##### `who_can_leave_group`<sup>Optional</sup> <a name="who_can_leave_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanLeaveGroup"></a>

```python
who_can_leave_group: str
```

- *Type:* str

Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are: - `ALL_MANAGERS_CAN_LEAVE` - `ALL_MEMBERS_CAN_LEAVE` - `NONE_CAN_LEAVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_leave_group GroupSettings#who_can_leave_group}

---

##### `who_can_moderate_content`<sup>Optional</sup> <a name="who_can_moderate_content" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateContent"></a>

```python
who_can_moderate_content: str
```

- *Type:* str

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_content GroupSettings#who_can_moderate_content}

---

##### `who_can_moderate_members`<sup>Optional</sup> <a name="who_can_moderate_members" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanModerateMembers"></a>

```python
who_can_moderate_members: str
```

- *Type:* str

Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are:  - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_moderate_members GroupSettings#who_can_moderate_members}

---

##### `who_can_post_message`<sup>Optional</sup> <a name="who_can_post_message" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanPostMessage"></a>

```python
who_can_post_message: str
```

- *Type:* str

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

##### `who_can_view_group`<sup>Optional</sup> <a name="who_can_view_group" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewGroup"></a>

```python
who_can_view_group: str
```

- *Type:* str

Defaults to `ALL_MEMBERS_CAN_VIEW`.

Permissions to view group messages. Possible values are:

* `ANYONE_CAN_VIEW`: Any Internet user can view the group's messages.
* `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in your account can view this group's messages.
* `ALL_MEMBERS_CAN_VIEW`: All group members can view the group's messages.
* `ALL_MANAGERS_CAN_VIEW`: Any group manager can view this group's messages.
* `ALL_OWNERS_CAN_VIEW`: The group owners can view this group's messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#who_can_view_group GroupSettings#who_can_view_group}

---

##### `who_can_view_membership`<sup>Optional</sup> <a name="who_can_view_membership" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsConfig.property.whoCanViewMembership"></a>

```python
who_can_view_membership: str
```

- *Type:* str

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

```python
from cdktf_cdktf_provider_googleworkspace import group_settings

groupSettings.GroupSettingsTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#create GroupSettings#create}. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#update GroupSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#create GroupSettings#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/group_settings#update GroupSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupSettingsTimeoutsOutputReference <a name="GroupSettingsTimeoutsOutputReference" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_googleworkspace import group_settings

groupSettings.GroupSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-googleworkspace.groupSettings.GroupSettingsTimeouts">GroupSettingsTimeouts</a>]

---



