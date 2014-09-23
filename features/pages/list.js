/* global element, by, browser */

var ListPage = (function () {
  'use strict';

  function ListPage() {
      //this.var etc
  }

  ListPage.prototype.visit = function () {
    return browser.get("/");
  };

  ListPage.prototype.displaysEmptyCatalogueMessage = function () {
    var wrapper = element(by.css('.notification__wrapper'));
      // console.log(wrapper.getText();
      // expect(wrapper.getText()).to.equal('The catalogue is currently empty');
  };

  return ListPage;

})();

module.exports = ListPage;
