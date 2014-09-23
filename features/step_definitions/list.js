var pages = require('../pages/index');

module.exports = function () {
    this.Given(/^there are no products in the catalogue$/, function (callback) {
      this.there_are_no_product_in_the_catalogue(callback);
    });

    this.When(/^I browse the catalogue$/, function (callback) {
      this.visit_catalogue_page(callback);
    });

    this.Then(/^I should be told that there are no products$/, function (callback) {
      this.notified_of_empty_catalogue(callback);
    });

    this.Given(/^there is a product "([^"]*)" in the catalogue$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^I should see these exact products in the catalogue$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Given(/^there are following products in the catalogue:$/, function (table, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^I should see (\d+) pages of products$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^on the first page the first product should be "([^"]*)"$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^on the first page the last product should be "([^"]*)"$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });
};
