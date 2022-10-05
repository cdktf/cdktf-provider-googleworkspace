// https://www.terraform.io/docs/providers/googleworkspace/r/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain name of the customer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace/r/domain#domain_name Domain#domain_name}
  */
  readonly domainName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/googleworkspace/r/domain googleworkspace_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/googleworkspace/r/domain googleworkspace_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_domain',
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
    this._domainName = config.domainName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // domain_aliases - computed: true, optional: false, required: false
  public get domainAliases() {
    return this.getListAttribute('domain_aliases');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // verified - computed: true, optional: false, required: false
  public get verified() {
    return this.getBooleanAttribute('verified');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
    };
  }
}
