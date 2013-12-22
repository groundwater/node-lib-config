# Config File Library

## Install

```
npm install --save lib-config
```

## Usage

```javascript
var config = require('config');

var parent = {
  one: 'one',
  two: 'two'
};

var child = {
  one: 1,
  three: 3
}

config.load(parent);
config.load(child);

config.get('one');
// 1

config.get('two');
// 'two'

config.get('three');
// 3
```
