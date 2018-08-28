/*
 * utils
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

class Validator {
  /**
   * Validates the zone slug to make sure it's URL and folder
   * name friendly
   *
   * @method validateZoneSlug
   *
   * @param  {String}         slug
   *
   * @return {void}
   *
   * @throws {Error} If slug has unallowed chars
   */
  validateZoneSlug (slug) {
    if (!/^[a-zA-Z0-9-_.]+$/g.test(slug)) {
      const error = new Error('Unallowed characters detected in zone slug')
      error.ruleId = 'bad-zone-slug'
      throw error
    }
  }

  /**
   * Validates the version number to make sure it's URL and folder
   * name friendly
   *
   * @method validateVersionNumber
   *
   * @param  {String}              no
   *
   * @return {void}
   *
   * @throws {Error} If version no has unallowed chars
   */
  validateVersionNumber (no) {
    if (!/^[a-zA-Z0-9-_.]+$/g.test(no)) {
      const error = new Error('Unallowed characters detected in version no')
      error.ruleId = 'bad-version-no'
      throw error
    }
  }
}

module.exports = Validator
