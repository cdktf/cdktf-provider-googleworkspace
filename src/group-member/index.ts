// https://www.terraform.io/docs/providers/googleworkspace/r/group_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `ALL_MAIL`. Defines mail delivery preferences of member. Acceptable values are: 
	- `ALL_MAIL`: All messages, delivered as soon as they arrive.
	- `DAILY`: No more than one message a day.
	- `DIGEST`: Up to 25 messages bundled into a single message.
	- `DISABLED`: Remove subscription.
	- `NONE`: No messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/group_member#delivery_settings GroupMember#delivery_settings}
  */
  readonly deliverySettings?: string;
  /**
  * The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The email must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/group_member#email GroupMember#email}
  */
  readonly email: string;
  /**
  * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/group_member#group_id GroupMember#group_id}
  */
  readonly groupId: string;
  /**
  * Defaults to `MEMBER`. The member's role in a group. The API returns an error for cycles in group memberships. For example, if group1 is a member of group2, group2 cannot be a member of group1. Acceptable values are:
	- `MANAGER`: This role is only available if the Google Groups for Business is enabled using the Admin Console. A `MANAGER` role can do everything done by an `OWNER` role except make a member an `OWNER` or delete the group. A group can have multiple `MANAGER` members. 
	- `MEMBER`: This role can subscribe to a group, view discussion archives, and view the group's membership list.
	- `OWNER`: This role can send messages to the group, add or remove members, change member roles, change group's settings, and delete the group. An OWNER must be a member of the group. A group can have more than one OWNER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/group_member#role GroupMember#role}
  */
  readonly role?: string;
  /**
  * Defaults to `USER`. The type of group member. Acceptable values are: 
	- `CUSTOMER`: The member represents all users in a domain. An email address is not returned and the ID returned is the customer ID. 
	- `GROUP`: The member is another group. 
	- `USER`: The member is a user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/group_member#type GroupMember#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/group_member#timeouts GroupMember#timeouts}
  */
  readonly timeouts?: GroupMemberTimeouts;
}
export interface GroupMemberTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/group_member#create GroupMember#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/group_member#update GroupMember#update}
  */
  readonly update?: string;
}

export function groupMemberTimeoutsToTerraform(struct?: GroupMemberTimeoutsOutputReference | GroupMemberTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class GroupMemberTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupMemberTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupMemberTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/r/group_member googleworkspace_group_member}
*/
export class GroupMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_group_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/googleworkspace/r/group_member googleworkspace_group_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: GroupMemberConfig) {
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
    this._deliverySettings = config.deliverySettings;
    this._email = config.email;
    this._groupId = config.groupId;
    this._role = config.role;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delivery_settings - computed: false, optional: true, required: false
  private _deliverySettings?: string; 
  public get deliverySettings() {
    return this.getStringAttribute('delivery_settings');
  }
  public set deliverySettings(value: string) {
    this._deliverySettings = value;
  }
  public resetDeliverySettings() {
    this._deliverySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverySettingsInput() {
    return this._deliverySettings;
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

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getStringAttribute('member_id');
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GroupMemberTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GroupMemberTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery_settings: cdktf.stringToTerraform(this._deliverySettings),
      email: cdktf.stringToTerraform(this._email),
      group_id: cdktf.stringToTerraform(this._groupId),
      role: cdktf.stringToTerraform(this._role),
      type: cdktf.stringToTerraform(this._type),
      timeouts: groupMemberTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
