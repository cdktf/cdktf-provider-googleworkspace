// https://www.terraform.io/docs/providers/googleworkspace/d/group_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleworkspaceGroupSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The group's email address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/group_settings#email DataGoogleworkspaceGroupSettings#email}
  */
  readonly email: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/d/group_settings googleworkspace_group_settings}
*/
export class DataGoogleworkspaceGroupSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_group_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/googleworkspace/d/group_settings googleworkspace_group_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleworkspaceGroupSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleworkspaceGroupSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_group_settings',
      terraformGeneratorMetadata: {
        providerName: 'googleworkspace',
        providerVersion: '0.7.0',
        providerVersionConstraint: '~> 0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_external_members - computed: true, optional: false, required: false
  public get allowExternalMembers() {
    return this.getBooleanAttribute('allow_external_members');
  }

  // allow_web_posting - computed: true, optional: false, required: false
  public get allowWebPosting() {
    return this.getBooleanAttribute('allow_web_posting');
  }

  // archive_only - computed: true, optional: false, required: false
  public get archiveOnly() {
    return this.getBooleanAttribute('archive_only');
  }

  // custom_footer_text - computed: true, optional: false, required: false
  public get customFooterText() {
    return this.getStringAttribute('custom_footer_text');
  }

  // custom_reply_to - computed: true, optional: false, required: false
  public get customReplyTo() {
    return this.getStringAttribute('custom_reply_to');
  }

  // custom_roles_enabled_for_settings_to_be_merged - computed: true, optional: false, required: false
  public get customRolesEnabledForSettingsToBeMerged() {
    return this.getBooleanAttribute('custom_roles_enabled_for_settings_to_be_merged');
  }

  // default_message_deny_notification_text - computed: true, optional: false, required: false
  public get defaultMessageDenyNotificationText() {
    return this.getStringAttribute('default_message_deny_notification_text');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enable_collaborative_inbox - computed: true, optional: false, required: false
  public get enableCollaborativeInbox() {
    return this.getBooleanAttribute('enable_collaborative_inbox');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_custom_footer - computed: true, optional: false, required: false
  public get includeCustomFooter() {
    return this.getBooleanAttribute('include_custom_footer');
  }

  // include_in_global_address_list - computed: true, optional: false, required: false
  public get includeInGlobalAddressList() {
    return this.getBooleanAttribute('include_in_global_address_list');
  }

  // is_archived - computed: true, optional: false, required: false
  public get isArchived() {
    return this.getBooleanAttribute('is_archived');
  }

  // members_can_post_as_the_group - computed: true, optional: false, required: false
  public get membersCanPostAsTheGroup() {
    return this.getBooleanAttribute('members_can_post_as_the_group');
  }

  // message_moderation_level - computed: true, optional: false, required: false
  public get messageModerationLevel() {
    return this.getStringAttribute('message_moderation_level');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_language - computed: true, optional: false, required: false
  public get primaryLanguage() {
    return this.getStringAttribute('primary_language');
  }

  // reply_to - computed: true, optional: false, required: false
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }

  // send_message_deny_notification - computed: true, optional: false, required: false
  public get sendMessageDenyNotification() {
    return this.getBooleanAttribute('send_message_deny_notification');
  }

  // spam_moderation_level - computed: true, optional: false, required: false
  public get spamModerationLevel() {
    return this.getStringAttribute('spam_moderation_level');
  }

  // who_can_assist_content - computed: true, optional: false, required: false
  public get whoCanAssistContent() {
    return this.getStringAttribute('who_can_assist_content');
  }

  // who_can_contact_owner - computed: true, optional: false, required: false
  public get whoCanContactOwner() {
    return this.getStringAttribute('who_can_contact_owner');
  }

  // who_can_discover_group - computed: true, optional: false, required: false
  public get whoCanDiscoverGroup() {
    return this.getStringAttribute('who_can_discover_group');
  }

  // who_can_join - computed: true, optional: false, required: false
  public get whoCanJoin() {
    return this.getStringAttribute('who_can_join');
  }

  // who_can_leave_group - computed: true, optional: false, required: false
  public get whoCanLeaveGroup() {
    return this.getStringAttribute('who_can_leave_group');
  }

  // who_can_moderate_content - computed: true, optional: false, required: false
  public get whoCanModerateContent() {
    return this.getStringAttribute('who_can_moderate_content');
  }

  // who_can_moderate_members - computed: true, optional: false, required: false
  public get whoCanModerateMembers() {
    return this.getStringAttribute('who_can_moderate_members');
  }

  // who_can_post_message - computed: true, optional: false, required: false
  public get whoCanPostMessage() {
    return this.getStringAttribute('who_can_post_message');
  }

  // who_can_view_group - computed: true, optional: false, required: false
  public get whoCanViewGroup() {
    return this.getStringAttribute('who_can_view_group');
  }

  // who_can_view_membership - computed: true, optional: false, required: false
  public get whoCanViewMembership() {
    return this.getStringAttribute('who_can_view_membership');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
    };
  }
}
