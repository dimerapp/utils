/*
* utils
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

const { sep, extname } = require('path')
const slugify = require('slugify')

/**
 * Generate, normalize and validate permalinks
 *
 * @class Permalinks
 */
class Permalink {
  /**
   * Generates the permalink from the base name of a given
   * file
   *
   * @method generateFromFileName
   *
   * @param  {String}             fileName
   *
   * @return {String}
   */
  generateFromFileName (fileName) {
    return slugify(fileName.replace(sep, '-').replace(new RegExp(`${extname(fileName)}$`), ''), {
      lower: true
    })
  }

  /**
   * Normalize permalink by removing slashes around it. Must be
   * used when matching two permalinks
   *
   * @method normalize
   *
   * @param  {String}  permalink
   *
   * @return {String}
   */
  normalize (permalink) {
    return permalink.replace(/^\/+/, '').replace(/\/+$/, '')
  }

  /**
   * Validate permalink to ensure the value is URL
   * friendly
   *
   * @method validate
   *
   * @param  {String} permalink
   *
   * @return {void}
   */
  validate (permalink) {
    if (!/^[A-Za-z0-9_./\-~]+$/.test(permalink)) {
      const error = new Error('Unallowed characters detected in permalink')
      error.ruleId = 'bad-permalink'

      throw error
    }
  }

  /**
   * Returns a boolean telling if 2 permalinks are same. They will
   * be normalized before the check
   *
   * @method isSame
   *
   * @param  {String}  lhs
   * @param  {String}  rhs
   *
   * @return {Boolean}
   */
  isSame (lhs, rhs) {
    return this.normalize(lhs) === this.normalize(rhs)
  }
}

module.exports = Permalink
