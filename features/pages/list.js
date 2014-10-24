/* global element, by, browser */
var ptor;

var ListPage = (function () {
  'use strict';

  function ListPage() {
    ptor = protractor.getInstance();
    //this.var etc
  }

  ListPage.prototype.visit = function (callback) {
    ptor.sleep(500);
    browser.get("/");
    callback();
  };

  ListPage.prototype.displaysEmptyCatalogueMessage = function (callback) {
    var wrapper = element(by.css('.notification__wrapper'));
      wrapper.getText().then(function(text) {
        expect(text).to.equal('The catalogue is currently empty');
        callback();
      });

  };

  return ListPage;

})();

module.exports = ListPage;
