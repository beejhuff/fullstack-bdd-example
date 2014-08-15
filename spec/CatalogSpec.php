<?php

namespace spec;

use PhpSpec\ObjectBehavior;
use ProductList;
use Prophecy\Argument;

class CatalogSpec extends ObjectBehavior
{
    function it_can_browse_the_catalog()
    {
        $this->browse()->shouldReturnAnInstanceOf(ProductList::class);
    }
}
