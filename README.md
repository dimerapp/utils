<div align="center">
  <div>
    <img width="500" src="https://res.cloudinary.com/adonisjs/image/upload/q_100/v1532274184/Dimer_Readme_Banner_lyy7wv.svg" alt="Dimer App">
  </div>
  <br>
  <p>
    <a href="https://dimerapp.com/what-is-dimer">
      Dimer is an open source project and CMS to help you publish your documentation online.
    </a>
  </p>
  <br>
  <p>
    <sub>We believe every project/product is incomplete without documentation. <br /> We want to help you publish user facing documentation, without worrying <code>about tools or code</code> to write.</sub>
  </p>
  <br>
</div>

# DimerApp utils
> Handy utilities to keep all other repos DRY and consistent

The utils library provides a handful of methods to be used across multiple dimer repos.

## Installation
```shell
npm i @dimerapp/utils

# Yarn
yarn add @dimerapp/utils
```

## Usage

```js
const utils = require('@dimerapp/utils')

// get paths instance for a base path
const paths = utils.paths(__dirname)

// then call any methods from the paths class
```

```js
const utils = require('@dimerapp/utils')

// gives access to the permalink class methods
utils.permalink
```

#### nodeToString(node)
Convert Dimer content JSON node to a plain string

```js
const { nodeToString } = require('@dimerapp/utils')
nodeToString(node)
```

## Classes

<dl>
<dt><a href="#Permalinks">Permalinks</a></dt>
<dd></dd>
<dt><a href="#Paths">Paths</a></dt>
<dd></dd>
</dl>

<a name="Permalinks"></a>
## Permalinks
**Kind**: global class  
<a name="new_Permalinks_new"></a>

### new Permalinks()
Generate, normalize and validate permalinks


<a name="generateFromFileName"></a>
#### generateFromFileName(fileName) ⇒ <code>String</code>
Generates the permalink from the base name of a given
file

**Kind**: global function  

| Param | Type |
| --- | --- |
| fileName | <code>String</code> | 


<a name="normalize"></a>
#### normalize(permalink) ⇒ <code>String</code>
Normalize permalink by removing slashes around it. Must be
used when matching two permalinks

**Kind**: global function  

| Param | Type |
| --- | --- |
| permalink | <code>String</code> | 


<a name="validate"></a>
#### validate(permalink) ⇒ <code>void</code>
Validate permalink to ensure the value is URL
friendly

**Kind**: global function  

| Param | Type |
| --- | --- |
| permalink | <code>String</code> | 


<a name="isSame"></a>
#### isSame(lhs, rhs) ⇒ <code>Boolean</code>
Returns a boolean telling if 2 permalinks are same. They will
be normalized before the check

**Kind**: global function  

| Param | Type |
| --- | --- |
| lhs | <code>String</code> | 
| rhs | <code>String</code> | 

<a name="Paths"></a>

## Paths
**Kind**: global class  
<a name="new_Paths_new"></a>

#### new Paths(basePath, [distPath])
Returns paths to certain directories, required by
dimer


| Param | Type | Default |
| --- | --- | --- |
| basePath | <code>String</code> |  | 
| [distPath] | <code>String</code> | <code>&#x27;dist&#x27;</code> |

<a name="configFile"></a>
#### configFile() ⇒ <code>String</code>
Returns path to the config file

**Kind**: global function  
<a name="docsPath"></a>

#### docsPath(versionRelativePath) ⇒ <code>String</code>
Returns path for a given version inside the docs folder

**Kind**: global function  

| Param | Type |
| --- | --- |
| versionRelativePath | <code>String</code> | 

<a name="distPath"></a>

#### distPath() ⇒ <code>String</code>
Returns path to the dist folder

**Kind**: global function  
<a name="apiPath"></a>

#### apiPath() ⇒ <code>String</code>
Returns path to the API folder

**Kind**: global function  
<a name="assetsPath"></a>

#### assetsPath() ⇒ <code>String</code>
Returns path to the assets folder

**Kind**: global function  
<a name="versionPath"></a>

#### versionPath(versioNo) ⇒ <code>String</code>
Returns path to a given version inside the api folder

**Kind**: global function  

| Param | Type |
| --- | --- |
| versioNo | <code>String</code> | 

<a name="metaFile"></a>

#### metaFile() ⇒ <code>String</code>
Returns path to the meta file inside the api folder

**Kind**: global function  
<a name="searchIndexFile"></a>

#### searchIndexFile(versioNo) ⇒ <code>String</code>
Returns path to the search index file inside the api
folder

**Kind**: global function  

| Param | Type |
| --- | --- |
| versioNo | <code>String</code> | 

## Change log

The change log can be found in the [CHANGELOG.md](https://github.com/dimerapp/utils/CHANGELOG.md) file.

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](CONTRIBUTING.md).

## Authors & License
[thetutlage](https://github.com/thetutlage) and [contributors](https://github.com/dimerapp/utils/graphs/contributors).

MIT License, see the included [MIT](LICENSE.md) file.

[travis-image]: https://img.shields.io/travis/dimerapp/utils/master.svg?style=flat-square&logo=travis
[travis-url]: https://travis-ci.org/dimerapp/utils "travis"

[appveyor-image]: https://img.shields.io/appveyor/ci/thetutlage/utils/master.svg?style=flat-square&logo=appveyor
[appveyor-url]: https://ci.appveyor.com/project/thetutlage/utils "appveyor"

[npm-image]: https://img.shields.io/npm/v/@dimerapp/utils.svg?style=flat-square&logo=npm
[npm-url]: https://npmjs.org/package/@dimerapp/utils "npm"
