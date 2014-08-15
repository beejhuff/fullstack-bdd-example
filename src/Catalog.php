<?php

class Catalog
{
    private $products = [];

    public function browse()
    {
        return new ProductList($this->products);
    }

    public function addProduct(Product $product)
    {
        $this->products[] = $product;
    }
}
