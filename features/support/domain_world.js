function DomainWorld(ready) {
    'use strict';

    var chai = require('chai');
    var should = chai.should();

    var self = {
        there_are_no_product_in_the_catalogue: function (callback) {
            var catalogue = new Catalogue();
            catalogue.getProducts().should.eql([]);
            callback();
        }
    };

    ready();
    return self;
}

module.exports = { World: DomainWorld };
