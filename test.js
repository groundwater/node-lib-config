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

assert.equal(config.get('one')   , 1);
assert.equal(config.get('two')   , 'two');
assert.equal(config.get('three') , 3);
