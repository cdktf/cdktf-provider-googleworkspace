// https://www.terraform.io/docs/providers/googleworkspace/d/org_unit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleworkspaceOrgUnitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of the organizational unit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/org_unit#org_unit_id DataGoogleworkspaceOrgUnit#org_unit_id}
  */
  readonly orgUnitId?: string;
  /**
  * The full path to the organizational unit. The orgUnitPath is a derived property. When listed, it is derived from parentOrgunitPath and organizational unit's name. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an orgUnitPath, either update the name of the organization or the parentOrgunitPath. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [chromeosdevices.update a user](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/d/org_unit#org_unit_path DataGoogleworkspaceOrgUnit#org_unit_path}
  */
  readonly orgUnitPath?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/d/org_unit googleworkspace_org_unit}
*/
export class DataGoogleworkspaceOrgUnit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_org_unit";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/googleworkspace/d/org_unit googleworkspace_org_unit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleworkspaceOrgUnitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleworkspaceOrgUnitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_org_unit',
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
    this._orgUnitId = config.orgUnitId;
    this._orgUnitPath = config.orgUnitPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_inheritance - computed: true, optional: false, required: false
  public get blockInheritance() {
    return this.getBooleanAttribute('block_inheritance');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_unit_id - computed: true, optional: true, required: false
  private _orgUnitId?: string; 
  public get orgUnitId() {
    return this.getStringAttribute('org_unit_id');
  }
  public set orgUnitId(value: string) {
    this._orgUnitId = value;
  }
  public resetOrgUnitId() {
    this._orgUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUnitIdInput() {
    return this._orgUnitId;
  }

  // org_unit_path - computed: true, optional: true, required: false
  private _orgUnitPath?: string; 
  public get orgUnitPath() {
    return this.getStringAttribute('org_unit_path');
  }
  public set orgUnitPath(value: string) {
    this._orgUnitPath = value;
  }
  public resetOrgUnitPath() {
    this._orgUnitPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUnitPathInput() {
    return this._orgUnitPath;
  }

  // parent_org_unit_id - computed: true, optional: false, required: false
  public get parentOrgUnitId() {
    return this.getStringAttribute('parent_org_unit_id');
  }

  // parent_org_unit_path - computed: true, optional: false, required: false
  public get parentOrgUnitPath() {
    return this.getStringAttribute('parent_org_unit_path');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_unit_id: cdktf.stringToTerraform(this._orgUnitId),
      org_unit_path: cdktf.stringToTerraform(this._orgUnitPath),
    };
  }
}
