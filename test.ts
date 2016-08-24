/// <reference path="bundle.d.ts" />

import assert = require('assert');
import copyFile = require('quickly-copy-file');

assert.equal(typeof copyFile, 'function');
