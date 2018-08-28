/*
* utils
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

const slash = require('slash')
const { join, extname } = require('path')

function validateAsString (value, label, parent) {
  if (typeof (value) !== 'string' || !value) {
    throw new Error(`${label} is required when calling ${parent}`)
  }
}

/**
 * Returns paths to certain directories, required by
 * dimer
 *
 * @class Paths
 *
 * @param {String} basePath
 * @param {String} [distPath = 'dist']
 */
class Paths {
  constructor (basePath, distPath) {
    this.basePath = basePath
    this.distPathRef = distPath || 'dist'
    this.apiPathRef = '__api'
    this.assetsPathRef = '__assets'
  }

  /**
   * Returns path to the config file
   *
   * @method configFile
   *
   * @return {String}
   */
  configFile () {
    return join(this.basePath, 'dimer.json')
  }

  /**
   * Returns path for a given version inside the docs folder
   *
   * @method docsPath
   *
   * @param {String} versionRelativePath
   *
   * @return {String}
   */
  versionDocsPath (versionRelativePath) {
    validateAsString(versionRelativePath, 'versionRelativePath', 'versionDocsPath')
    return join(this.basePath, versionRelativePath)
  }

  /**
   * Returns path to the dist folder
   *
   * @method distPath
   *
   * @return {String}
   */
  distPath () {
    return join(this.basePath, this.distPathRef)
  }

  /**
   * Returns path to the API folder
   *
   * @method apiPath
   *
   * @return {String}
   */
  apiPath () {
    return join(this.distPath(), this.apiPathRef)
  }

  /**
   * Returns path to the assets directory
   *
   * @method assetsPath
   *
   * @return {String}
   */
  assetsPath () {
    return join(this.distPath(), this.assetsPathRef)
  }

  /**
   * Returns path to a given version inside the api folder
   *
   * @method versionPath
   *
   * @param  {String}    zoneSlug
   * @param  {String}    versioNo
   *
   * @return {String}
   */
  versionPath (zoneSlug, versioNo) {
    validateAsString(zoneSlug, 'zoneSlug', 'versionPath')
    validateAsString(versioNo, 'versioNo', 'versionPath')
    return join(this.apiPath(), zoneSlug, versioNo)
  }

  /**
   * Returns path to the meta file inside the api folder
   *
   * @method metaFile
   *
   * @return {String}
   */
  metaFile () {
    return join(this.apiPath(), 'meta.json')
  }

  /**
   * Returns path to the search index file inside the api
   * folder
   *
   * @method searchIndexFile
   *
   * @param  {String}        zoneSlug
   * @param  {String}        versionNo
   *
   * @return {String}
   */
  searchIndexFile (zoneSlug, versionNo) {
    validateAsString(zoneSlug, 'zoneSlug', 'searchIndexFile')
    validateAsString(versionNo, 'versionNo', 'searchIndexFile')
    return join(this.versionPath(zoneSlug, versionNo), 'search.json')
  }

  /**
   * Returns path to the doc json file
   *
   * @method docPath
   *
   * @param  {String} zoneSlug
   * @param  {String} versionNo
   * @param  {String} jsonPath
   *
   * @return {String}
   */
  docPath (zoneSlug, versionNo, jsonPath) {
    validateAsString(zoneSlug, 'zoneSlug', 'docPath')
    validateAsString(versionNo, 'versionNo', 'docPath')
    validateAsString(jsonPath, 'jsonPath', 'docPath')

    return join(this.versionPath(zoneSlug, versionNo), jsonPath)
  }

  /**
   * Makes the json path from the doc file path. Also it makes sure to
   * keep the slashes consistent for deployment on unix systems
   *
   * @method makeJsonPath
   *
   * @param  {String}     filePath
   *
   * @return {String}
   */
  makeJsonPath (filePath) {
    return slash(filePath).replace(/^\/|\/$/g, '').replace(new RegExp(`${extname(filePath)}$`), '.json')
  }
}

module.exports = Paths
