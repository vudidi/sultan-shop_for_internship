import React from 'react';
import './_Products.scss';
import '../PaginatedItems/_PaginatedItems.scss';
import Product from '../Product/Product';
import ReactPaginate from 'react-paginate';

function Products(props) {
  return (
    <section className="catalog__products">
      <ul data-testid="products-list" className="catalog__cards">
        {props.products?.map((item) => {
          return (
            <Product
              product={item}
              key={item.id}
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
            />
          );
        })}
      </ul>
      <ReactPaginate
        forcePage={props.currentPage}
        nextLabel="next >"
        onPageChange={props.handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={props.pageCount}
        previousLabel="< previous"
        pageClassName="page-item pagination__digit"
        pageLinkClassName="page-link"
        previousClassName="page-item pagination__btn pagination__btn_type_left"
        previousLinkClassName="page-link"
        nextClassName="page-item pagination__btn pagination__btn_type_right"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="pagination__digit_active"
        renderOnZeroPageCount={null}
      />
    </section>
  );
}

export default Products;
