/*global PV */
'use strict';

/* jshint strict: true */
/* jshint node: true */
/* jshint unused: false */

var fs = require('fs-extra');
var path = require('path');

function main() {
  if (path.basename(path.resolve(__dirname, '..')) === 'node_modules') {
    fs.copySync(path.resolve(__dirname, './sqlite3'), path.resolve(__dirname, '../sqlite3'), {
      overwrite: false
    });
  }
  return;
}

main();