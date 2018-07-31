/*
* utils
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

const { join } = require('path')

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
   * @param  {String}    versioNo
   *
   * @return {String}
   */
  versionPath (versioNo) {
    validateAsString(versioNo, 'versioNo', 'versionPath')
    return join(this.apiPath(), versioNo)
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
   * @param  {String}        versioNo
   *
   * @return {String}
   */
  searchIndexFile (versioNo) {
    validateAsString(versioNo, 'versioNo', 'searchIndexFile')
    return join(this.versionPath(versioNo), 'search.json')
  }
}

module.exports = Paths
