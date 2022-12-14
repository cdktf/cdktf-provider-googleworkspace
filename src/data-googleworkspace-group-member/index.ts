// https://www.terraform.io/docs/providers/googleworkspace/d/group_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleworkspaceGroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The email must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/group_member#email DataGoogleworkspaceGroupMember#email}
  */
  readonly email?: string;
  /**
  * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/group_member#group_id DataGoogleworkspaceGroupMember#group_id}
  */
  readonly groupId: string;
  /**
  * The unique ID of the group member. A member id can be used as a member request URI's memberKey.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/group_member#member_id DataGoogleworkspaceGroupMember#member_id}
  */
  readonly memberId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/d/group_member googleworkspace_group_member}
*/
export class DataGoogleworkspaceGroupMember extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_group_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/googleworkspace/d/group_member googleworkspace_group_member} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleworkspaceGroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleworkspaceGroupMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_group_member',
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
    this._groupId = config.groupId;
    this._memberId = config.memberId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delivery_settings - computed: true, optional: false, required: false
  public get deliverySettings() {
    return this.getStringAttribute('delivery_settings');
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_id - computed: true, optional: true, required: false
  private _memberId?: string; 
  public get memberId() {
    return this.getStringAttribute('member_id');
  }
  public set memberId(value: string) {
    this._memberId = value;
  }
  public resetMemberId() {
    this._memberId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdInput() {
    return this._memberId;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      group_id: cdktf.stringToTerraform(this._groupId),
      member_id: cdktf.stringToTerraform(this._memberId),
    };
  }
}
