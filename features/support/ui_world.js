function UiWorld(ready) {
  'use strict';
  
  var self = {
    pages: require('../pages'),
    visit: function(path, host, status, callback) {
      callback();
    }
  };

  ready();
  return self;
}

module.exports = { World: UiWorld };
