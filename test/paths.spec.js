/*
* utils
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

const test = require('japa')
const { join } = require('path')
const paths = new (require('../src/Paths'))(__dirname)

test.group('Paths', () => {
  test('get path to config file', (assert) => {
    assert.equal(paths.configFile(), join(__dirname, 'dimer.json'))
  })

  test('get path to version docs', (assert) => {
    assert.equal(paths.versionDocsPath('docs/master'), join(__dirname, 'docs/master'))
  })

  test('get path to dist folder', (assert) => {
    assert.equal(paths.distPath(), join(__dirname, 'dist'))
  })

  test('get path to api folder', (assert) => {
    assert.equal(paths.apiPath(), join(__dirname, 'dist', '__api'))
  })

  test('get version path to api folder', (assert) => {
    assert.equal(paths.versionPath('guides', '1.0.0'), join(__dirname, 'dist', '__api', 'guides', '1.0.0'))
  })

  test('get path to meta file', (assert) => {
    assert.equal(paths.metaFile(), join(__dirname, 'dist', '__api', 'meta.json'))
  })

  test('get path to search index file', (assert) => {
    assert.equal(paths.searchIndexFile('api', '1.0.0'), join(__dirname, 'dist', '__api', 'api', '1.0.0', 'search.json'))
  })

  test('get path to assets path', (assert) => {
    assert.equal(paths.assetsPath(), join(__dirname, 'dist', '__assets'))
  })

  test('get path to doc file', (assert) => {
    assert.equal(paths.docPath('api', 'master', 'foo.json'), join(__dirname, 'dist', '__api', 'api', 'master', 'foo.json'))
  })
})
