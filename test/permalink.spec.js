/*
* utils
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

const test = require('japa')
const { sep } = require('path')
const permalink = new (require('../src/Permalink'))()

test.group('Permalink', () => {
  test('throw error if permalink has spaces', (assert) => {
    const fn = () => permalink.validate('hello world')
    assert.throw(fn, 'Only words and numbers along with (_.-~) are allowed in permalink')
  })

  test('throw error if permalink has $', (assert) => {
    const fn = () => permalink.validate('hello$')
    assert.throw(fn, 'Only words and numbers along with (_.-~) are allowed in permalink')
  })

  test('allow permalink with dashes', (assert) => {
    const fn = () => permalink.validate('hello-world')
    assert.doesNotThrow(fn)
  })

  test('allow permalink with underscore', (assert) => {
    const fn = () => permalink.validate('hello_world')
    assert.doesNotThrow(fn)
  })

  test('allow permalink with slashes', (assert) => {
    const fn = () => permalink.validate('hello/world')
    assert.doesNotThrow(fn)
  })

  test('allow permalink with tilde', (assert) => {
    const fn = () => permalink.validate('~hello/world')
    assert.doesNotThrow(fn)
  })

  test('allow permalink with numbers', (assert) => {
    const fn = () => permalink.validate('01-10-hello')
    assert.doesNotThrow(fn)
  })

  test('allow permalink with capital letters', (assert) => {
    const fn = () => permalink.validate('HELLO')
    assert.doesNotThrow(fn)
  })

  test('normalize permalink by removing slashes around it', (assert) => {
    assert.equal(permalink.normalize('/hello/'), 'hello')
  })

  test('do not remove in between slashes', (assert) => {
    assert.equal(permalink.normalize('/hello/world/'), 'hello/world')
  })

  test('generate permalink from file name', (assert) => {
    assert.equal(permalink.generateFromFileName('foo.md'), 'foo')
  })

  test('generate permalink from file name with slashes', (assert) => {
    assert.equal(permalink.generateFromFileName(`foo${sep}bar.md`), 'foo-bar')
  })

  test('generate permalink from file name with numbers', (assert) => {
    assert.equal(permalink.generateFromFileName('01-introduction.md'), '01-introduction')
  })

  test('return true when permalinks are same', (assert) => {
    assert.isTrue(permalink.isSame('foo', 'foo'))
  })

  test('return true when one value has leading slashes', (assert) => {
    assert.isTrue(permalink.isSame('foo', '/foo'))
  })

  test('return true when one value has ending slashes', (assert) => {
    assert.isTrue(permalink.isSame('foo/', 'foo'))
  })
})
