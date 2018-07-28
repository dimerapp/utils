/*
* utils
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

const utils = exports = module.exports = {}

const Paths = require('./src/Paths')
const Permalink = require('./src/Permalink')

utils.paths = (basePath, distPath) => new Paths(basePath, distPath)
utils.permalink = new Permalink()
utils.nodeToString = require('mdast-util-to-string')
