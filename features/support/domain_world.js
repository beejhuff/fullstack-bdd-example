function DomainWorld(ready) {
  'use strict';

  var self = {
    there_are_no_product_in_the_catalogue: function(callback) {
      var Catalogue = {};
      Catalogue.products = [];
      
      callback();
    }
  };

  ready();
  return self;
}

module.exports = { World: DomainWorld };
