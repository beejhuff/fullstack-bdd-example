<?php

use Behat\Behat\Tester\Exception\PendingException;
use Behat\Behat\Context\SnippetAcceptingContext;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Gherkin\Node\TableNode;

/**
 * Behat context class.
 */
class CatalogContext implements SnippetAcceptingContext
{
    private $catalog;
    private $browsingResult;

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
}
