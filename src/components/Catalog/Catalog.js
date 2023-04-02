import React, { useEffect } from 'react';
import './_Catalog.scss';
import PaginatedItems from '../PaginatedItems/PaginatedItems';
import useWindowWidth from '../../utils/getWindowWidth';
import {
  getProductCountForVendor,
  getProductsTypeFilters,
} from '../../utils/getProductsData.js';
const productData = require('../../data/products.json');

function Catalog(props) {
  const [checkboxItems, setCheckboxItems] = React.useState([]);
  const [visible, setVisible] = React.useState(4);
  const [vendorInputValue, setVendorInputValue] = React.useState('');

  const vendors = getProductCountForVendor(productData.products);
  const typeFilters = getProductsTypeFilters(productData.products);
  const width = useWindowWidth();

  const buttonShowMore = document.querySelector('.catalog__moreBtn_type_show');
  const buttonHide = document.querySelector('.catalog__moreBtn_type_hide');

  const buttonShowFilters = document.querySelector(
    '.catalog__showParams_type_show'
  );
  const buttonHideFilters = document.querySelector(
    '.catalog__showParams_type_hide'
  );
  const priceFilter = document.querySelector('.catalog__priceFilter');
  const vendorFilter = document.querySelector('.catalog__vendorFilter');
  const filterBtns = document.querySelector('.catalog__filterBtns');

  if (
    priceFilter !== null &&
    vendorFilter !== null &&
    filterBtns !== null &&
    width > 780
  ) {
    priceFilter.style.display = 'block';
    vendorFilter.style.display = 'flex';
    filterBtns.style.display = 'flex';
    buttonShowFilters.classList.add('catalog__showParams_hidden');
    buttonHideFilters.classList.remove('catalog__showParams_hidden');
  }

  useEffect(() => {
    setCheckboxItems(vendors);
  }, []);

  function showMoreCheckbox(e) {
    e.preventDefault();
    setVisible(vendors.length);
    buttonShowMore.classList.toggle('catalog__moreBtn_hidden');
    buttonHide.classList.toggle('catalog__moreBtn_hidden');
  }

  function hideCheckbox(e) {
    e.preventDefault();
    setVisible(4);
    buttonShowMore.classList.toggle('catalog__moreBtn_hidden');
    buttonHide.classList.toggle('catalog__moreBtn_hidden');
  }

  function showFilterParams(e) {
    e.preventDefault();
    buttonShowFilters.classList.toggle('catalog__showParams_hidden');
    buttonHideFilters.classList.toggle('catalog__showParams_hidden');
    priceFilter.style.display = 'block';
    vendorFilter.style.display = 'flex';
    filterBtns.style.display = 'flex';
  }
  function hideFilterParams(e) {
    e.preventDefault();
    buttonShowFilters.classList.toggle('catalog__showParams_hidden');
    buttonHideFilters.classList.toggle('catalog__showParams_hidden');
    priceFilter.style.display = 'none';
    vendorFilter.style.display = 'none';
    filterBtns.style.display = 'none';
  }

  function submitFiltersHandler(e) {
    e.preventDefault();
    props.onSubmitFilters();
  }

  function resetFiltersHandler(e) {
    e.preventDefault();
    props.onResetFilters();
    setVendorInputValue('');
    setCheckboxItems(vendors);
    document.querySelector('.search-input__error').style.display = 'none';
  }

  function getVendorInputValue(e) {
    setVendorInputValue(e.target.value);
    document.querySelector('.search-input__error').style.display = 'none';
  }

  function vendorsQueryHandler(e) {
    e.preventDefault();

    const filteredVendors = vendors.filter((el) => {
      return el.title
        .toLowerCase()
        .includes(vendorInputValue.trim().toLowerCase());
    });

    if (filteredVendors.length < 1) {
      document.querySelector('.search-input__error').style.display = 'block';
    }

    setCheckboxItems(filteredVendors);
  }

  return (
    <div className="catalog">
      <button className="catalog__goBack">
        <span>Назад</span>
      </button>
      <div className="catalog__top">
        {' '}
        <div className="catalog__top-container">
          {' '}
          <h1 className="catalog__title">Косметика&nbsp;и&nbsp;гигиена</h1>
          {/* SELECT DESKTOP */}
          <form className="catalog__sort" id="sort">
            <label htmlFor="sort-select">Сортировка&#58;</label>
            <select
              onChange={(e) => props.onSortClick(e)}
              className="catalog__select"
              name="sort"
              id="sort-select"
            >
              <option value="default" className="catalog__sort-title">
                Выберите опцию
              </option>
              <option className="catalog__sort-title" value="titleAsc">
                Название&uarr;
              </option>
              <option className="catalog__sort-title" value="titleDesc">
                Название&darr;
              </option>
              <option className="catalog__sort-title" value="priceAsc">
                Цена&uarr;
              </option>
              <option className="catalog__sort-title" value="priceDesc">
                Цена&darr;
              </option>
            </select>
          </form>
        </div>
        {/* TYPE FILTERS */}
        <ul className="catalog__top-filters">
          {typeFilters.map((el) => {
            return (
              <li onClick={(e) => props.onTypeFilterClick(e)} key={el}>
                <button className="catalog__top-filter catalog__type-filter">
                  {el}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="catalog__main">
        <div className="catalog__main-container">
          <form className="catalog__filters" id="filters">
            <div className="catalog__parametrs-container">
              {' '}
              <h2 className="catalog__filters-title">подбор по параметрам</h2>
              <button
                onClick={showFilterParams}
                className="catalog__showParams catalog__showParams_type_show"
              ></button>
              <button
                onClick={hideFilterParams}
                className="catalog__showParams catalog__showParams_type_hide catalog__showParams_hidden"
              ></button>
            </div>
            {/* PRICE FILTER */}
            <div className="catalog__priceFilter">
              <p className="catalog__priceFilter-lable">
                Цена <span>&#8376;</span>
              </p>
              <div className="catalog__priceFilter-container">
                <input
                  onChange={(e) => props.priceMinInputHandler(e)}
                  type="number"
                  className="catalog__priceFilter-input"
                  id="price-filter"
                  name="price-filter"
                  value={props.priceMin || ''}
                ></input>
                &#160;&#160;&#8211;&#160;&#160;
                <input
                  onChange={(e) => props.priceMaxInputHandler(e)}
                  type="number"
                  className="catalog__priceFilter-input"
                  id="price-filter"
                  name="price-filter"
                  value={props.priceMax || ''}
                ></input>
              </div>
            </div>

            <div className="catalog__vendorFilter">
              <p className="catalog__vendorFilter-lable">Производитель</p>

              <div className="catalog__filter-search">
                <input
                  onChange={getVendorInputValue}
                  type="text"
                  className="catalog__search-input"
                  id="vendor-filter"
                  name="vendor-filter"
                  placeholder="Поиск..."
                  minLength={1}
                  maxLength={20}
                  value={vendorInputValue}
                  autoComplete="off"
                  required
                ></input>
                <button
                  onClick={vendorsQueryHandler}
                  className="catalog__search-btn"
                ></button>
                <span className="search-input__error">Ничего не найдено</span>
              </div>

              {checkboxItems.slice(0, visible).map((item) => {
                return (
                  <div className="catalog__filter-checkbox" key={item.title}>
                    <input
                      className="catalog__checkbox-input"
                      type="checkbox"
                      id="vendor"
                    ></input>
                    <span>{item.title}</span>
                    <span>&#40;{item.productCount}&#41;</span>
                  </div>
                );
              })}

              <div
                className={`catalog__more-btn ${
                  checkboxItems.length < 5 && 'catalog__more-btn_hidden'
                }`}
              >
                <button
                  onClick={showMoreCheckbox}
                  className="catalog__moreBtn catalog__moreBtn_type_show"
                >
                  Показать все &#9660;
                </button>
                <button
                  onClick={hideCheckbox}
                  className="catalog__moreBtn catalog__moreBtn_type_hide catalog__moreBtn_hidden"
                >
                  Скрыть &#9650;
                </button>
              </div>
            </div>

            {/* FILTERS BUTTON*/}
            <div className="catalog__filterBtns">
              <button
                onClick={submitFiltersHandler}
                className="catalog__filterBtn catalog__filterBtn_type_submit"
              >
                Показать
              </button>
              <button
                onClick={resetFiltersHandler}
                className="catalog__filterBtn catalog__filterBtn_type_reset"
              ></button>
            </div>
          </form>

          <div className="catalog__categoryFilter" id="categories">
            {/* TYPE FILTERS */}
            <ul className="catalog__category-items">
              {typeFilters.map((el) => {
                return (
                  <li onClick={(e) => props.onTypeFilterClick(e)} key={el}>
                    <button className="catalog__category-item catalog__type-filter">
                      {el}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* SELECT ADAPTIVE */}

            <form className="catalog__sort catalog__sort_adaptive" id="sort">
              <label htmlFor="sort-select">Сортировка&#58;</label>
              <select
                onChange={(e) => props.onSortClick(e)}
                className="catalog__select"
                name="sort"
                id="sort-select"
              >
                <option value="default" className="catalog__sort-title">
                  Выберите опцию
                </option>
                <option className="catalog__sort-title" value="titleAsc">
                  Название&uarr;
                </option>
                <option className="catalog__sort-title" value="titleDesc">
                  Название&darr;
                </option>
                <option className="catalog__sort-title" value="priceAsc">
                  Цена&uarr;
                </option>
                <option className="catalog__sort-title" value="priceDesc">
                  Цена&darr;
                </option>
              </select>
            </form>
          </div>
        </div>

        <PaginatedItems
          items={props.products}
          onProductClick={props.onProductClick}
          onAddProductToCart={props.onAddProductToCart}
          inTheBasket={props.inTheBasket}
          onCartInc={props.onCartInc}
          onCartDec={props.onCartDec}
          countInCart={props.countInCart}
          itemsPerPage={6}
        />

        <h1 className="catalog__noResuts-message">
          Ничего не найдено. Повторите поиск с другими параметрами фильтров
        </h1>
      </div>
    </div>
  );
}

export default Catalog;
