var test = require('tap').test

test(function(t){
  var Config = require('../index.js');
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
  t.equal(keys.length, 3);

  t.ok(keys.indexOf('one')   > -1);
  t.ok(keys.indexOf('two')   > -1);
  t.ok(keys.indexOf('three') > -1);

  // confirmation bias check
  t.ok(keys.indexOf('four') == -1);

  t.equal(config.get('one')   , 1);
  t.equal(config.get('two')   , 'two');
  t.equal(config.get('three') , 3);

  // confirmation bias check
  t.ok(!config.get('four'));

  t.end();
})
