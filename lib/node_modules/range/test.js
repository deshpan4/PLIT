var assert = require('assert');
var range = require('./range');
var cmp = require('cmp');

assert(cmp.eq(range(0, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 'Simple range');
assert(cmp.eq(range(0, 10, 2), [0, 2, 4, 6, 8]), 'Range with step');
assert(cmp.eq(range.range(0, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 'range property test');
