// https://www.terraform.io/docs/providers/googleworkspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleworkspaceProviderConfig {
  /**
  * A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#access_token GoogleworkspaceProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud Console).  If not provided, the application default credentials will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#credentials GoogleworkspaceProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * The customer id provided with your Google Workspace subscription. It is found in the admin console under Account Settings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#customer_id GoogleworkspaceProvider#customer_id}
  */
  readonly customerId?: string;
  /**
  * The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API. `impersonated_user_email` is required for all services except group and user management.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#impersonated_user_email GoogleworkspaceProvider#impersonated_user_email}
  */
  readonly impersonatedUserEmail?: string;
  /**
  * The list of the scopes required for your application (for a list of possible scopes, see [Authorize requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing))
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#oauth_scopes GoogleworkspaceProvider#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * The service account used to create the provided `access_token` if authenticating using the `access_token` method and needing to impersonate a user. This service account will require the GCP role `Service Account Token Creator` if needing to impersonate a user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#service_account GoogleworkspaceProvider#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/googleworkspace#alias GoogleworkspaceProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/googleworkspace googleworkspace}
*/
export class GoogleworkspaceProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/googleworkspace googleworkspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleworkspaceProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleworkspaceProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace',
      terraformGeneratorMetadata: {
        providerName: 'googleworkspace',
        providerVersion: '0.7.0',
        providerVersionConstraint: '~> 0.7'
      },
      terraformProviderSource: 'googleworkspace'
    });
    this._accessToken = config.accessToken;
    this._credentials = config.credentials;
    this._customerId = config.customerId;
    this._impersonatedUserEmail = config.impersonatedUserEmail;
    this._oauthScopes = config.oauthScopes;
    this._serviceAccount = config.serviceAccount;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // customer_id - computed: false, optional: true, required: false
  private _customerId?: string; 
  public get customerId() {
    return this._customerId;
  }
  public set customerId(value: string | undefined) {
    this._customerId = value;
  }
  public resetCustomerId() {
    this._customerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
  }

  // impersonated_user_email - computed: false, optional: true, required: false
  private _impersonatedUserEmail?: string; 
  public get impersonatedUserEmail() {
    return this._impersonatedUserEmail;
  }
  public set impersonatedUserEmail(value: string | undefined) {
    this._impersonatedUserEmail = value;
  }
  public resetImpersonatedUserEmail() {
    this._impersonatedUserEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonatedUserEmailInput() {
    return this._impersonatedUserEmail;
  }

  // oauth_scopes - computed: false, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return this._oauthScopes;
  }
  public set oauthScopes(value: string[] | undefined) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public set serviceAccount(value: string | undefined) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      credentials: cdktf.stringToTerraform(this._credentials),
      customer_id: cdktf.stringToTerraform(this._customerId),
      impersonated_user_email: cdktf.stringToTerraform(this._impersonatedUserEmail),
      oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oauthScopes),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
