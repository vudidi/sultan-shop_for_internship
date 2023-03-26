import React, { useEffect } from 'react';
import './_Catalog.scss';
import Products from '../Products/Products';
import useWindowWidth from '../../utils/getWindowWidth';

function Catalog() {
  const vendors = [
    {
      title: 'Grifon',
      productCount: 50,
    },
    {
      title: 'Boyscout',
      productCount: 12,
    },
    {
      title: 'Paclan',
      productCount: 122,
    },
    {
      title: 'Булгари Грин',
      productCount: 5,
    },
    {
      title: 'Нэфис',
      productCount: 56,
    },
    {
      title: 'AOS',
      productCount: 45,
    },
  ];

  const width = useWindowWidth();

  console.log(width);

  const [checkboxItems, setCheckboxItems] = React.useState([]);
  const [visible, setVisible] = React.useState(4);

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

  if (width > 780) {
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
          <form className="catalog__sort" id="sort">
            <label htmlFor="sort-select">Сортировка&#58;</label>
            <select className="catalog__select" name="sort" id="sort-select">
              <option value="" className="catalog__sort-title">
                Выберите опцию
              </option>
              <option className="catalog__sort-title" value="titleAsc">
                Название&uarr;
              </option>
              <option className="catalog__sort-title" value="titleDesc">
                Название&darr;
              </option>
              <option className="catalog__sort-title" value="pruciAsc">
                Цена&uarr;
              </option>
              <option className="catalog__sort-title" value="priceDesc">
                Цена&darr;
              </option>
            </select>
          </form>
        </div>
        <ul className="catalog__top-filters">
          <li>
            <button className="catalog__top-filter catalog__category-filter">
              Уход за телом
            </button>
          </li>
          <li>
            <button className="catalog__top-filter catalog__category-filter">
              Уход за руками
            </button>
          </li>
          <li>
            <button className="catalog__top-filter catalog__category-filter">
              Уход за ногами
            </button>
          </li>
          <li>
            <button className="catalog__top-filter catalog__category-filter">
              Уход за лицом
            </button>
          </li>
          <li>
            <button className="catalog__top-filter catalog__category-filter">
              Уход за волосами
            </button>
          </li>
          <li>
            <button className="catalog__top-filter catalog__category-filter">
              Средства для загара
            </button>
          </li>
          <li>
            <button className="catalog__top-filter catalog__category-filter">
              Средства для бритья
            </button>
          </li>
          <li>
            <button className="catalog__top-filter catalog__category-filter">
              Подарочные наборы
            </button>
          </li>
          <li>
            <button className="catalog__top-filter catalog__category-filter">
              Гигиеническая продукция
            </button>
          </li>
          <li>
            <button className="catalog__top-filter catalog__category-filter">
              Гигиена полости рта
            </button>
          </li>
          <li>
            <button className="catalog__top-filter catalog__category-filter">
              Бумажная продукция
            </button>
          </li>
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
            <div className="catalog__priceFilter">
              <p className="catalog__priceFilter-lable">
                Цена <span>&#8376;</span>
              </p>
              <div className="catalog__priceFilter-container">
                <input
                  type="text"
                  className="catalog__priceFilter-input"
                  id="price-filter"
                  name="price-filter"
                  defaultValue="0"
                ></input>
                &#160;&#160;&#8211;&#160;&#160;
                <input
                  type="text"
                  className="catalog__priceFilter-input"
                  id="price-filter"
                  name="price-filter"
                  defaultValue="100"
                ></input>
              </div>
            </div>

            <div className="catalog__vendorFilter">
              <p className="catalog__vendorFilter-lable">Производитель</p>

              <div className="catalog__filter-search">
                <input
                  type="text"
                  className="catalog__search-input"
                  id="vendor-filter"
                  name="vendor-filter"
                  placeholder="Поиск..."
                ></input>
                <button className="catalog__search-btn"></button>
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

              <div className="catalog__more-btn">
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

            <div className="catalog__filterBtns">
              <button className="catalog__filterBtn catalog__filterBtn_type_submit">
                Показать
              </button>
              <button className="catalog__filterBtn catalog__filterBtn_type_reset"></button>
            </div>
          </form>

          <div className="catalog__categoryFilter" id="categories">
            <ul className="catalog__category-items">
              <li>
                <button className="catalog__category-item">
                  Уход за телом
                </button>
              </li>
              <li>
                <button className="catalog__category-item">
                  Уход за руками
                </button>
              </li>
              <li>
                <button className="catalog__category-item">
                  Уход за ногами
                </button>
              </li>
              <li>
                <button className="catalog__category-item">
                  Уход за лицом
                </button>
              </li>
              <li>
                <button className="catalog__category-item">
                  Уход за волосами
                </button>
              </li>
              <li>
                <button className="catalog__category-item">
                  Средства для загара
                </button>
              </li>
              <li>
                <button className="catalog__category-item">
                  Средства для бритья
                </button>
              </li>

              <li>
                <button className="catalog__category-item">
                  Подарочные наборы
                </button>
              </li>
              <li>
                <button className="catalog__category-item">
                  Гигиеническая продукция
                </button>
              </li>
              <li>
                <button className="catalog__category-item">
                  Гигиена полости рта
                </button>
              </li>
              <li>
                <button className="catalog__category-item">
                  Бумажная продукция
                </button>
              </li>
            </ul>

            <form className="catalog__sort catalog__sort_adaptive" id="sort">
              <label htmlFor="sort-select">Сортировка&#58;</label>
              <select className="catalog__select" name="sort" id="sort-select">
                <option value="" className="catalog__sort-title">
                  Выберите опцию
                </option>
                <option className="catalog__sort-title" value="titleAsc">
                  Название&uarr;
                </option>
                <option className="catalog__sort-title" value="titleDesc">
                  Название&darr;
                </option>
                <option className="catalog__sort-title" value="pruciAsc">
                  Цена&uarr;
                </option>
                <option className="catalog__sort-title" value="priceDesc">
                  Цена&darr;
                </option>
              </select>
            </form>
          </div>
        </div>

        <Products />
      </div>
    </div>
  );
}

export default Catalog;
