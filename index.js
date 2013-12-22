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

module.exports = Config;
