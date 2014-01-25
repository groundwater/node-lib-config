function Config() {
  this.head = null;
}

Config.prototype.load = function load(obj) {
  var lookup = Object.create(this.head);
  for(var key in obj) {
    lookup[key] = obj[key];
  }
  this.head = lookup;
  return this;
};

Config.prototype.get = function get(key) {
  return this.head[key];
};

Config.prototype.keys = function keys() {
  var keys = [];

  var head = this.head;
  while (head) {
    Object.keys(head).forEach(function (key) {
      if (keys.indexOf(key) < 0) keys.push(key);
    });
    head = head.__proto__;
  }

  return keys;
}

module.exports = Config;
