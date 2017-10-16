/**
 * File    : keys.js.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 14/10/2017
 */

// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports =  require('./prod');
} else {
  // we are in development - return the den keys
  module.exports = require('./dev');
}
