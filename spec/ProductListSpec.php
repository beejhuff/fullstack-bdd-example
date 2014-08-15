<?php

namespace spec;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class ProductListSpec extends ObjectBehavior
{
    function it_can_be_converted_to_message_telling_that_there_are_no_products()
    {
        $this->__toString()->shouldReturn('There are no products');
    }
}
