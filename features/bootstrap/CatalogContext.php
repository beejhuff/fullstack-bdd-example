<?php

use Behat\Behat\Context\SnippetAcceptingContext;

/**
 * Behat context class.
 */
class CatalogContext implements SnippetAcceptingContext
{
    private $catalog;
    private $browsingResult;
    private $expectedProducts = [];

    /**
     * Initializes context.
     *
     * Every scenario gets its own context object.
     * You can also pass arbitrary arguments to the context constructor through behat.yml.
     */
    public function __construct()
    {
        $this->catalog = new Catalog();
    }

    /**
     * @Given there are no products in the catalogue
     */
    public function thereAreNoProductsInTheCatalogue()
    {
    }

    /**
     * @When I browse the catalogue
     */
    public function iBrowseTheCatalogue()
    {
        $this->browsingResult = $this->catalog->browse();
    }

    /**
     * @Then I should be told that there are no products
     */
    public function iShouldBeToldThatThereAreNoProducts()
    {
        PHPUnit_Framework_Assert::assertEquals('There are no products', $this->browsingResult);
    }

    /**
     * @Given there is a product :sku in the catalogue
     */
    public function thereIsAProductInTheCatalogue($sku)
    {
        $product = new Product($sku);
        $this->expectedProducts[] = $product;
        $this->catalog->addProduct($product);
    }

    /**
     * @Then I should see these exact products in the catalogue
     */
    public function iShouldSeeTheseExactProductsInTheCatalogue()
    {
        foreach ($this->expectedProducts as $expectedProduct) {
            PHPUnit_Framework_Assert::assertContains($expectedProduct, $this->browsingResult);
        }
    }
}
