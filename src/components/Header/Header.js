import React from 'react';
import { Link } from 'react-router-dom';
import './_Header.scss';

function Header(props) {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false);

  function openBurgerMenu() {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <div className="header">
      {/* 1920px - 1440px */}

      <div className="header__info">
        <div className="header__contacts">
          <div className="header__adress header__common">
            <div className="header__common-icon header__common-icon_type_adress"></div>
            <div className="header__common-container">
              <p className="header__common-text">
                г&#46;&nbsp;Кокчетав,&nbsp;ул&#46;&nbsp;Ж&#46;&nbsp;Ташенова&nbsp;129Б{' '}
              </p>
              <p className="header__common-additionalText">
                &#40;Рынок&nbsp;Восточный&#41;
              </p>
            </div>
          </div>

          <div className="header__mail header__common">
            <div className="header__common-icon header__common-icon_type_mail"></div>

            <div className="header__common-container">
              <p className="header__common-text">
                opt&#46;sultan&#64;mail&#46;ru
              </p>
              <p className="header__common-additionalText">
                На&nbsp;связи&nbsp;в&nbsp;любое&nbsp;время
              </p>
            </div>
          </div>

          <div className="header__callback-text header__common header__callback-text_adaptive">
            <div className="header__common-icon header__common-icon_type_callback"></div>

            <div className="header__common-container">
              <p className="header__common-text">Отдел продаж</p>
              <p className="header__callback-additionalText header__common-additionalText">
                &#43;7&nbsp;&#40;777&#41;&nbsp;490&#8209;00&#8209;91
              </p>
              <p className="header__callback-additionalText header__common-additionalText">
                время&nbsp;работы&#58;&nbsp;9&#58;00&#8209;20&#58;00
              </p>
            </div>
          </div>
          <div className="header__callback-container">
            {' '}
            <div className="header__callback-icon"></div>
            <button className="header__callback-btn">Заказать звонок</button>
          </div>
        </div>

        <nav className="header__menu">
          <h2 className="header__menu-title">Меню&nbsp;сайта&#58;</h2>
          <ul className="header__menu-items">
            <li className="header__menu-item">
              <a href="/#" target="_blank" className="header__menu-item-link">
                О&nbsp;компании
              </a>
            </li>
            <li className="header__menu-item">
              <a href="/#" target="_blank" className="header__menu-item-link">
                Доставка и оплата
              </a>
            </li>
            <li className="header__menu-item">
              <a href="/#" target="_blank" className="header__menu-item-link">
                Возврат
              </a>
            </li>
            <li className="header__menu-item">
              <a href="/#" target="_blank" className="header__menu-item-link">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__interaction">
        <div className="header__logo"></div>
        <a href="/#" className="header__catalog">
          Каталог <div className="header__catalog-icon"></div>{' '}
        </a>

        <div className="header__search">
          <input
            type="search"
            className="header__search-input"
            placeholder="Поиск..."
          ></input>
          <button className="header__search-btn"></button>
        </div>

        <div className="header__callback">
          <div className="header__callback-text header__common">
            <div className="header__common-icon header__common-icon_type_callback"></div>

            <div className="header__common-container">
              <p className="header__common-text">
                &#43;7&nbsp;&#40;777&#41;&nbsp;490&#8209;00&#8209;91
              </p>
              <p className="header__callback-additionalText header__common-additionalText">
                время&nbsp;работы&#58;&nbsp;9&#58;00&#8209;20&#58;00
              </p>
              <button className="header__callback-btn">Заказать звонок</button>
            </div>
          </div>

          <div className="header__callback-img">
            <div className="header__callback-ellipse"></div>
          </div>
        </div>

        <div className="header__priceList">
          {' '}
          <a href="/#" target="_blank" className="header__priceList-btn">
            Прайс-лист
            <div className="header__priceList-icon"></div>
          </a>
        </div>

        {/* Корзина */}
        <div className="header__basket">
          <Link to="/cart" className="header__basket-icon">
            <span
              className={`header__basket-count ${
                props.count === 0 && 'header__basket_empty'
              }`}
            >
              {props.count}
            </span>
          </Link>

          <div className="header__basket-text">
            <p className="header__basket-title">Корзина</p>
            <p className="header__basket-price">12&nbsp;478&nbsp;&#8376;</p>
          </div>
        </div>
      </div>

      {/* 900px - ... Burger*/}
      <div
        className={`header__adaptive ${
          isBurgerMenuOpen && 'header__adaptive_open'
        }`}
      >
        <div className="header__adaptive-container">
          <div
            className={`header__burger-icon ${
              isBurgerMenuOpen
                ? 'header__burger-icon_type_open'
                : 'header__burger-icon_type_close'
            }`}
            onClick={openBurgerMenu}
          ></div>
          <div className="header__logo"></div>

          {/* Корзина */}
          <Link to="/cart" className="header__basket-icon">
            <span
              className={`header__basket-count ${
                props.count === 0 && 'header__basket_empty'
              }`}
            >
              {props.count}
            </span>
          </Link>
        </div>

        <div className="header__adaptive-container header__adaptive-content">
          <a href="/#" className="header__catalog">
            <div className="header__catalog-icon"></div>
            Каталог
          </a>
          <div className="header__adaptive-line"></div>
          <div className="header__search">
            <button type="submit" className="header__search-btn"></button>
            <input
              type="search"
              className="header__search-input"
              placeholder="Поиск"
            ></input>
          </div>
        </div>
      </div>

      <div
        className={`header__burger ${
          isBurgerMenuOpen && 'header__burger_open'
        }`}
      >
        <div className="header__burger-container">
          {' '}
          <div className="header__contacts">
            <div className="header__adress header__common">
              <div className="header__common-icon header__common-icon_type_adress"></div>
              <div className="header__common-container">
                <p className="header__common-text">
                  г&#46;&nbsp;Кокчетав,&nbsp;ул&#46;&nbsp;Ж&#46;&nbsp;Ташенова&nbsp;129Б{' '}
                </p>
                <p className="header__common-additionalText">
                  &#40;Рынок&nbsp;Восточный&#41;
                </p>
              </div>
            </div>

            <div className="header__mail header__common">
              <div className="header__common-icon header__common-icon_type_mail"></div>

              <div className="header__common-container">
                <p className="header__common-text">
                  opt&#46;sultan&#64;mail&#46;ru
                </p>
                <p className="header__common-additionalText">
                  На&nbsp;связи&nbsp;в&nbsp;любое&nbsp;время
                </p>
              </div>
            </div>

            <div className="header__callback-text header__common header__callback-text_adaptive">
              <div className="header__common-icon header__common-icon_type_callback"></div>

              <div className="header__common-container">
                <p className="header__common-text">Отдел продаж</p>
                <p className="header__callback-additionalText header__common-additionalText">
                  &#43;7&nbsp;&#40;777&#41;&nbsp;490&#8209;00&#8209;91
                </p>
                <p className="header__callback-additionalText header__common-additionalText">
                  время&nbsp;работы&#58;&nbsp;9&#58;00&#8209;20&#58;00
                </p>
              </div>
            </div>
            <div className="header__callback-container">
              {' '}
              <div className="header__callback-icon"></div>
              <button className="header__callback-btn">Заказать звонок</button>
            </div>
          </div>
          <nav className="header__menu">
            <h2 className="header__menu-title">Меню&nbsp;сайта&#58;</h2>
            <ul className="header__menu-items">
              <li className="header__menu-item">
                <a href="/#" target="_blank" className="header__menu-item-link">
                  О&nbsp;компании
                </a>
              </li>
              <li className="header__menu-item">
                <a href="/#" target="_blank" className="header__menu-item-link">
                  Доставка и оплата
                </a>
              </li>
              <li className="header__menu-item">
                <a href="/#" target="_blank" className="header__menu-item-link">
                  Возврат
                </a>
              </li>
              <li className="header__menu-item">
                <a href="/#" target="_blank" className="header__menu-item-link">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__priceList">
            {' '}
            <a href="/#" target="_blank" className="header__priceList-btn">
              Прайс-лист
              <div className="header__priceList-icon"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
