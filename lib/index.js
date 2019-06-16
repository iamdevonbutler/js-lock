const assign = require('js-assign');

// @todo use func properties to set a global var for errors.
// if u want, u can throw when someone tries to unlock/change a var.
module.exports = function lock(obj) {
  return new Proxy(assign(obj), {
    set: function(obj1, prop, value) {
      return value;
    }
  });
};
