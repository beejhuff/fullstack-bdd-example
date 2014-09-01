function UiWorld(ready) {
  'use strict';

  var pages = require('../pages');
  var chai = require('chai');
  var expect = chai.expect,
      ptor =  protractor.getInstance();

  var self = {
    there_are_no_product_in_the_catalogue: function(callback) {
      var listPage = new pages.list();
      listPage.visitPage().then(function() {
        ptor.findElements(protractor.By.css('li', 'list__wrapper')).then(function(elements) {
          expect(elements.length).to.equal(0);
          callback();
        });

      });
    }
  };

  ready();
  return self;
}

module.exports = { World: UiWorld };
