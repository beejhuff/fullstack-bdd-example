<?php

class ProductList implements IteratorAggregate
{
    /**
     * @var array
     */
    private $products;

    public function __toString()
    {
        return 'There are no products';
    }

    /**
     * (PHP 5 &gt;= 5.0.0)<br/>
     * Retrieve an external iterator
     * @link http://php.net/manual/en/iteratoraggregate.getiterator.php
     * @return Traversable An instance of an object implementing <b>Iterator</b> or
     * <b>Traversable</b>
     */
    public function getIterator()
    {
        return new ArrayIterator($this->products);
    }

    public function __construct(array $products)
    {
        $this->products = $products;
    }
}
