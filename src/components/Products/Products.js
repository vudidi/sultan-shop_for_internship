import React from 'react';
import './_Products.scss';
import Product from '../Product/Product';
import Pagination from '../Pagination/Pagination';

function Products(props) {
  return (
    <div className="catalog__products">
      <ul className="catalog__cards">
        {props.products.map((item) => {
          return (
            <Product
              product={item}
              onProductClick={() => {
                props.onProductClick(item);
              }}
              onAddProductToCart={() => {
                props.onAddProductToCart(item);
              }}
              onCartInc={() => {
                props.onCartInc(item);
              }}
              onCartDec={() => {
                props.onCartDec(item);
              }}
              key={item.barcode}
            />
          );
        })}
      </ul>
      <Pagination />
    </div>
  );
}

export default Products;
