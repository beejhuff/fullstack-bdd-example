describe('Catalogue', function() {
  it('should be created empty', function () {
      var catalogue = new Catalogue();
      catalogue.getProducts().should.eql([]);
  });
});
