/* global element, by, browser */

var ListPage = function () {
  'use strict';

  function ListPage() {
  }

  ListPage.prototype.visitPage = function () {
    return browser.get("/");
  };

  return ListPage;

};

module.exports = ListPage;
