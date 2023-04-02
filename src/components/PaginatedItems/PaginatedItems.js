import React, { useEffect, useState } from 'react';
import './_PaginatedItems.scss';
import Products from '../Products/Products';

function PaginatedItems(props) {
  const [products, setProducts] = useState(props.items);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(-1);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
  }, []);

  useEffect(() => {
    if (products !== props.items) {
      setCurrentItems(props.items);
      setProducts(props.items);
      setCurrentPage(0);
      setPageCount(0);
      setItemOffset(0);
    }
  }, [props.items, products]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + props.itemsPerPage;
    setCurrentItems(props.items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(props.items.length / props.itemsPerPage));
  }, [itemOffset, props.itemsPerPage, props.items]);

  // Invoke when user click to request another page.
  function handlePageClick(event) {
    const newOffset =
      (event.selected * props.itemsPerPage) % props.items.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
    const element = document.querySelector('.catalog__top');
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Products
        currentPage={currentPage}
        products={currentItems}
        onProductClick={props.onProductClick}
        onAddProductToCart={props.onAddProductToCart}
        inTheBasket={props.inTheBasket}
        onCartInc={props.onCartInc}
        onCartDec={props.onCartDec}
        countInCart={props.countInCart}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
      />
    </>
  );
}

export default PaginatedItems;
