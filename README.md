
# CDKTF prebuilt bindings for hashicorp/googleworkspace provider version 0.7.0

HashiCorp made the decision to stop publishing new versions of prebuilt [Terraform googleworkspace provider](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0) bindings for [CDK for Terraform](https://cdk.tf) on January 19, 2024. As such, this repository has been archived and is no longer supported in any way by HashiCorp. Previously-published versions of this prebuilt provider will still continue to be available on their respective package managers (e.g. npm, PyPi, Maven, NuGet), but these will not be compatible with new releases of `cdktf` past `0.20.0` and are no longer eligible for commercial support.

As a reminder, you can continue to use the `hashicorp/googleworkspace` provider in your CDK for Terraform (CDKTF) projects, even with newer versions of CDKTF, but you will need to generate the bindings locally. The easiest way to do so is to use the [`provider add` command](https://developer.hashicorp.com/terraform/cdktf/cli-reference/commands#provider-add), optionally with the `--force-local` flag enabled:

`cdktf provider add hashicorp/googleworkspace --force-local`

For more information and additional examples, check out our documentation on [generating provider bindings manually](https://cdk.tf/imports).

## Deprecated Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@cdktf/provider-googleworkspace](https://www.npmjs.com/package/@cdktf/provider-googleworkspace).

`npm install @cdktf/provider-googleworkspace`

### PyPI

The PyPI package is available at [https://pypi.org/project/cdktf-cdktf-provider-googleworkspace](https://pypi.org/project/cdktf-cdktf-provider-googleworkspace).

`pipenv install cdktf-cdktf-provider-googleworkspace`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Googleworkspace](https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Googleworkspace).

`dotnet add package HashiCorp.Cdktf.Providers.Googleworkspace`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-googleworkspace](https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-googleworkspace).

```
<dependency>
    <groupId>com.hashicorp</groupId>
    <artifactId>cdktf-provider-googleworkspace</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```

### Go

The go package is generated into the [`github.com/cdktf/cdktf-provider-googleworkspace-go`](https://github.com/cdktf/cdktf-provider-googleworkspace-go) package.

`go get github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace/<version>`

Where `<version>` is the version of the prebuilt provider you would like to use e.g. `v11`. The full module name can be found
within the [go.mod](https://github.com/cdktf/cdktf-provider-googleworkspace-go/blob/main/googleworkspace/go.mod#L1) file.

## Docs

Find auto-generated docs for this provider here: 

- [Typescript](./docs/API.typescript.md)
- [Python](./docs/API.python.md)
- [Java](./docs/API.java.md)
- [C#](./docs/API.csharp.md)
- [Go](./docs/API.go.md)

You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-googleworkspace).
