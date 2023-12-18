
# CDKTF prebuilt bindings for hashicorp/googleworkspace provider version 0.7.0

This repo builds and publishes the [Terraform googleworkspace provider](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs) bindings for [CDK for Terraform](https://cdk.tf).

## Available Packages

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

`go get github.com/cdktf/cdktf-provider-googleworkspace-go/googleworkspace`

## Docs

Find auto-generated docs for this provider here: 

- [Typescript](./docs/API.typescript.md)
- [Python](./docs/API.python.md)
- [Java](./docs/API.java.md)
- [C#](./docs/API.csharp.md)
- [Go](./docs/API.go.md)

You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-googleworkspace).

## Versioning

This project is explicitly not tracking the Terraform googleworkspace provider version 1:1. In fact, it always tracks `latest` of `~> 0.7` with every release. If there are scenarios where you explicitly have to pin your provider version, you can do so by [generating the provider constructs manually](https://cdk.tf/imports).

These are the upstream dependencies:

- [CDK for Terraform](https://cdk.tf)
- [Terraform googleworkspace provider](https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0)
- [Terraform Engine](https://terraform.io)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped.

## Features / Issues / Bugs

Please report bugs and issues to the [CDK for Terraform](https://cdk.tf) project:

- [Create bug report](https://cdk.tf/bug)
- [Create feature request](https://cdk.tf/feature)

## Contributing

### Projen

This is mostly based on [Projen](https://github.com/projen/projen), which takes care of generating the entire repository.

### cdktf-provider-project based on Projen

There's a custom [project builder](https://github.com/cdktf/cdktf-provider-project) which encapsulate the common settings for all `cdktf` prebuilt providers.

### Provider Version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js).

### Repository Management

The repository is managed by [CDKTF Repository Manager](https://github.com/cdktf/cdktf-repository-manager/).
