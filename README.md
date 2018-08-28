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

const basePath = __dirname
const distPath = 'dist' // optional

const paths = utils.paths(basePath, distPath)
const permalink = utils.permalink
const validator = utils.validator
```

#### nodeToString(node)
Convert Dimer content JSON node to a plain string

```js
const { nodeToString } = require('@dimerapp/utils')
nodeToString(node)
```

## Classes

<dl>
<dt><a href="#Paths">Paths</a></dt>
<dd></dd>
<dt><a href="#Permalinks">Permalinks</a></dt>
<dd></dd>
<dt><a href="#Validator">Validator</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#configFile">configFile()</a> ⇒ <code>String</code></dt>
<dd><p>Returns path to the config file</p>
</dd>
<dt><a href="#docsPath">docsPath(versionRelativePath)</a> ⇒ <code>String</code></dt>
<dd><p>Returns path for a given version inside the docs folder</p>
</dd>
<dt><a href="#distPath">distPath()</a> ⇒ <code>String</code></dt>
<dd><p>Returns path to the dist folder</p>
</dd>
<dt><a href="#apiPath">apiPath()</a> ⇒ <code>String</code></dt>
<dd><p>Returns path to the API folder</p>
</dd>
<dt><a href="#assetsPath">assetsPath()</a> ⇒ <code>String</code></dt>
<dd><p>Returns path to the assets directory</p>
</dd>
<dt><a href="#versionPath">versionPath(zoneSlug, versioNo)</a> ⇒ <code>String</code></dt>
<dd><p>Returns path to a given version inside the api folder</p>
</dd>
<dt><a href="#metaFile">metaFile()</a> ⇒ <code>String</code></dt>
<dd><p>Returns path to the meta file inside the api folder</p>
</dd>
<dt><a href="#searchIndexFile">searchIndexFile(zoneSlug, versionNo)</a> ⇒ <code>String</code></dt>
<dd><p>Returns path to the search index file inside the api
folder</p>
</dd>
<dt><a href="#docPath">docPath(zoneSlug, versionNo, jsonPath)</a> ⇒ <code>String</code></dt>
<dd><p>Returns path to the doc json file</p>
</dd>
<dt><a href="#makeJsonPath">makeJsonPath(filePath)</a> ⇒ <code>String</code></dt>
<dd><p>Makes the json path from the doc file path. Also it makes sure to
keep the slashes consistent for deployment on unix systems</p>
</dd>
<dt><a href="#generateFromFileName">generateFromFileName(fileName)</a> ⇒ <code>String</code></dt>
<dd><p>Generates the permalink from the base name of a given
file</p>
</dd>
<dt><a href="#normalize">normalize(permalink)</a> ⇒ <code>String</code></dt>
<dd><p>Normalize permalink by removing slashes around it. Must be
used when matching two permalinks</p>
</dd>
<dt><a href="#validate">validate(permalink)</a> ⇒ <code>void</code></dt>
<dd><p>Validate permalink to ensure the value is URL
friendly</p>
</dd>
<dt><a href="#isSame">isSame(lhs, rhs)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns a boolean telling if 2 permalinks are same. They will
be normalized before the check</p>
</dd>
<dt><a href="#validateZoneSlug">validateZoneSlug(slug)</a> ⇒ <code>void</code></dt>
<dd><p>Validates the zone slug to make sure it&#39;s URL and folder
name friendly</p>
</dd>
<dt><a href="#validateVersionNumber">validateVersionNumber(no)</a> ⇒ <code>void</code></dt>
<dd><p>Validates the version number to make sure it&#39;s URL and folder
name friendly</p>
</dd>
</dl>

<a name="Paths"></a>

## Paths
**Kind**: global class  
<a name="new_Paths_new"></a>

### new Paths(basePath, [distPath])
Returns paths to certain directories, required by
dimer


| Param | Type | Default |
| --- | --- | --- |
| basePath | <code>String</code> |  | 
| [distPath] | <code>String</code> | <code>&#x27;dist&#x27;</code> | 

<a name="Permalinks"></a>

## Permalinks
**Kind**: global class  
<a name="new_Permalinks_new"></a>

### new Permalinks()
Generate, normalize and validate permalinks

<a name="Validator"></a>

## Validator
**Kind**: global class  
<a name="new_Validator_new"></a>

### new Validator()
Exposes validation methods to validate different parts of the
user input.

<a name="configFile"></a>

## configFile() ⇒ <code>String</code>
Returns path to the config file

**Kind**: global function  
<a name="docsPath"></a>

## docsPath(versionRelativePath) ⇒ <code>String</code>
Returns path for a given version inside the docs folder

**Kind**: global function  

| Param | Type |
| --- | --- |
| versionRelativePath | <code>String</code> | 

<a name="distPath"></a>

## distPath() ⇒ <code>String</code>
Returns path to the dist folder

**Kind**: global function  
<a name="apiPath"></a>

## apiPath() ⇒ <code>String</code>
Returns path to the API folder

**Kind**: global function  
<a name="assetsPath"></a>

## assetsPath() ⇒ <code>String</code>
Returns path to the assets directory

**Kind**: global function  
<a name="versionPath"></a>

## versionPath(zoneSlug, versioNo) ⇒ <code>String</code>
Returns path to a given version inside the api folder

**Kind**: global function  

| Param | Type |
| --- | --- |
| zoneSlug | <code>String</code> | 
| versioNo | <code>String</code> | 

<a name="metaFile"></a>

## metaFile() ⇒ <code>String</code>
Returns path to the meta file inside the api folder

**Kind**: global function  
<a name="searchIndexFile"></a>

## searchIndexFile(zoneSlug, versionNo) ⇒ <code>String</code>
Returns path to the search index file inside the api
folder

**Kind**: global function  

| Param | Type |
| --- | --- |
| zoneSlug | <code>String</code> | 
| versionNo | <code>String</code> | 

<a name="docPath"></a>

## docPath(zoneSlug, versionNo, jsonPath) ⇒ <code>String</code>
Returns path to the doc json file

**Kind**: global function  

| Param | Type |
| --- | --- |
| zoneSlug | <code>String</code> | 
| versionNo | <code>String</code> | 
| jsonPath | <code>String</code> | 

<a name="makeJsonPath"></a>

## makeJsonPath(filePath) ⇒ <code>String</code>
Makes the json path from the doc file path. Also it makes sure to
keep the slashes consistent for deployment on unix systems

**Kind**: global function  

| Param | Type |
| --- | --- |
| filePath | <code>String</code> | 

<a name="generateFromFileName"></a>

## generateFromFileName(fileName) ⇒ <code>String</code>
Generates the permalink from the base name of a given
file

**Kind**: global function  

| Param | Type |
| --- | --- |
| fileName | <code>String</code> | 

<a name="normalize"></a>

## normalize(permalink) ⇒ <code>String</code>
Normalize permalink by removing slashes around it. Must be
used when matching two permalinks

**Kind**: global function  

| Param | Type |
| --- | --- |
| permalink | <code>String</code> | 

<a name="validate"></a>

## validate(permalink) ⇒ <code>void</code>
Validate permalink to ensure the value is URL
friendly

**Kind**: global function  

| Param | Type |
| --- | --- |
| permalink | <code>String</code> | 

<a name="isSame"></a>

## isSame(lhs, rhs) ⇒ <code>Boolean</code>
Returns a boolean telling if 2 permalinks are same. They will
be normalized before the check

**Kind**: global function  

| Param | Type |
| --- | --- |
| lhs | <code>String</code> | 
| rhs | <code>String</code> | 

<a name="validateZoneSlug"></a>

## validateZoneSlug(slug) ⇒ <code>void</code>
Validates the zone slug to make sure it's URL and folder
name friendly

**Kind**: global function  
**Throws**:

- <code>Error</code> If slug has unallowed chars


| Param | Type |
| --- | --- |
| slug | <code>String</code> | 

<a name="validateVersionNumber"></a>

## validateVersionNumber(no) ⇒ <code>void</code>
Validates the version number to make sure it's URL and folder
name friendly

**Kind**: global function  
**Throws**:

- <code>Error</code> If version no has unallowed chars


| Param | Type |
| --- | --- |
| no | <code>String</code> | 



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
