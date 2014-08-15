/* global element, by, browser */

var ListPage = (function () {
  'use strict';

  function ListPage() {
      //this.var etc
  }

  ListPage.prototype.visitPage = function () {
    return browser.get("/");
  };

  return ListPage;

})();

module.exports = ListPage;