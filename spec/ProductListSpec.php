<?php

namespace spec;

use PhpSpec\ObjectBehavior;
use Product;
use Prophecy\Argument;
use Traversable;

class ProductListSpec extends ObjectBehavior
{
    function let()
    {
        $this->beConstructedWith([]);
    }

    function it_can_be_converted_to_message_telling_that_there_are_no_products()
    {
        $this->__toString()->shouldReturn('There are no products');
    }

    function it_is_traversable()
    {
        $this->shouldHaveType(Traversable::class);
    }

    function it_exposes_an_iterator_for_listed_products()
    {
        $products = [
            new Product('PJ01'),
            new Product('PJ02'),
        ];

        $this->beConstructedWith($products);
        $this->getIterator()->shouldBeLike(new \ArrayIterator($products));
    }
}
