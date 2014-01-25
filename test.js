var Config = require('./index.js');
var assert = require('assert');
var config = new Config();

config.load({
  'one': 'one',
  'two': 'two'
}).load({
  'one': 1,
  'three': 3
});

var keys = config.keys();

// do not contain duplicates
assert.equal(keys.length, 3);

assert(keys.indexOf('one')   > -1);
assert(keys.indexOf('two')   > -1);
assert(keys.indexOf('three') > -1);

// confirmation bias check
assert(keys.indexOf('four') == -1);

assert.equal(config.get('one')   , 1);
assert.equal(config.get('two')   , 'two');
assert.equal(config.get('three') , 3);

// confirmation bias check
assert(!config.get('four'));
