<?php

namespace spec;

use PhpSpec\ObjectBehavior;
use Product;
use ProductList;
use Prophecy\Argument;

class CatalogSpec extends ObjectBehavior
{
    function it_returns_a_product_list_during_browsing()
    {
        $products = [
            new Product('PJ01'),
            new Product('PJ02'),
        ];

        $this->addProduct(new Product('PJ01'));
        $this->addProduct(new Product('PJ02'));

        $this->browse()->shouldBeLike(new ProductList($products));
    }

    function it_allows_the_addition_of_a_product()
    {
        $product = new Product('PJ111');
        $this->addProduct($product);
    }
}
