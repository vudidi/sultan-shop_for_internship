import React from 'react';
import './_Products.scss';
import Product from '../Product/Product';
import Pagination from '../Pagination/Pagination';

function Products() {
  return (
    <div className="catalog__products">
      <ul className="catalog__cards">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ul>
      <Pagination />
    </div>
  );
}

export default Products;
