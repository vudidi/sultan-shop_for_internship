import React from 'react';
import { Link } from 'react-router-dom';
import './_Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__about">
          <div className="footer__logo-container">
            {' '}
            <div className="footer__logo"></div>
            <Link
              href="#"
              target="_blank"
              className="footer__priceList-btn footer__priceList-btn_adaptive"
            >
              Прайс-лист
              <div className="footer__priceList-icon"></div>
            </Link>
          </div>
          <p className="footer__description">
            Компания &laquo;Султан&raquo; &mdash; снабжаем розничные магазины
            товарами &quot;под&nbsp;ключ&quot; в Кокчетаве и Акмолинской области
          </p>
          <span className="footer__subcribeText">
            Подпишись на скидки и акции
          </span>

          <div className="footer__subcribe">
            <input
              type="text"
              className="footer__subcribe-input"
              placeholder="Введите ваш E-mail"
            ></input>
            <button type="submit" className="footer__subcribe-icon"></button>
          </div>
        </div>

        <div className="footer__menu-container">
          {' '}
          <nav className="footer__menu">
            <h2 className="footer__menu-title">Меню&nbsp;сайта&#58;</h2>
            <ul className="footer__menu-items">
              <li className="footer__menu-item">
                <Link
                  href="#"
                  target="_blank"
                  className="footer__menu-item-link"
                >
                  О&nbsp;компании
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link
                  href="#"
                  target="_blank"
                  className="footer__menu-item-link"
                >
                  Доставка и оплата
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link
                  href="#"
                  target="_blank"
                  className="footer__menu-item-link"
                >
                  Возврат
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link
                  href="#"
                  target="_blank"
                  className="footer__menu-item-link"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="footer__menu">
            <h2 className="footer__menu-title">Категории&#58;</h2>
            <ul className="footer__menu-items">
              <li className="footer__menu-item">
                <Link
                  href="#"
                  target="_blank"
                  className="footer__menu-item-link"
                >
                  Бытовая&nbsp;химия
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link
                  href="#"
                  target="_blank"
                  className="footer__menu-item-link"
                >
                  Косметика&nbsp;и&nbsp;гигиена
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link
                  href="#"
                  target="_blank"
                  className="footer__menu-item-link"
                >
                  Товары&nbsp;для&nbsp;дома
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link
                  href="#"
                  target="_blank"
                  className="footer__menu-item-link"
                >
                  Товары&nbsp;для&nbsp;детей&nbsp;и&nbsp;мам
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link
                  href="#"
                  target="_blank"
                  className="footer__menu-item-link"
                >
                  Посуда
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__contacts-container">
          <div className="footer__container">
            <div className="footer__priceList">
              <h2 className="footer__menu-title footer__priceList-title">
                Скачать прайс-лист&#58;
              </h2>
              <Link
                href="#"
                target="_blank"
                className="footer__priceList-btn footer__priceList-btn_desktop"
              >
                Прайс-лист
                <div className="footer__priceList-icon"></div>
              </Link>
            </div>

            <div className="footer__messengers">
              <p className="footer__messengers-title">
                Связь в&nbsp;мессенджерах&#58;
              </p>
              <ul className="footer__messengers-items">
                <li className="footer__messengers-item footer__messengers-item_type_whatsup">
                  <Link
                    href="#"
                    target="_blank"
                    className="footer__messengers-link"
                  ></Link>
                </li>
                <li className="footer__messengers-item footer__messengers-item_type_tlgm">
                  <Link
                    href="#"
                    target="_blank"
                    className="footer__messengers-link"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__contacts">
            <h2 className="footer__menu-title">Контакты&#58;</h2>
            <p className="footer__contacts-text">
              &#43;7&nbsp;&#40;777&#41;&nbsp;490&#8209;00&#8209;91
            </p>
            <p className="footer__contacts-additionalText">
              время&nbsp;работы&#58;&nbsp;9&#58;00&#8209;20&#58;00
            </p>
            <div className="footer__callback">
              <button className="footer__callback-btn">Заказать звонок</button>
            </div>

            <div className="footer__mail">
              <p className="footer__contacts-text">
                opt&#46;sultan&#64;mail&#46;ru
              </p>
              <p className="footer__contacts-additionalText">
                На&nbsp;связи&nbsp;в&nbsp;любое&nbsp;время
              </p>
            </div>

            <ul className="footer__payment-items">
              <li className="footer__payment-item footer__payment-item_type_visa"></li>
              <li className="footer__payment-item footer__payment-item_type_mastercard"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
