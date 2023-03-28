import React from 'react';
import './_Cart.scss';
import testImageLarge21 from '../../styles/images/product/test-large-image22.png';

function Cart() {
  return (
    <div className="cart">
      <button className="catalog__goBack">
        <span>Назад</span>
      </button>{' '}
      <h1 className="cart__title">Корзина</h1>
      <ul className="cart__items">
        <li className="cart__item">
          <img
            className="cart__item-img"
            src={testImageLarge21}
            alt="BioMio BIO-SOAP Экологичное туалетное мыло...."
          />

          <div className="cart__text-container">
            <div className="product__volume cart__item-volume">
              <div className="product__volume-icon"></div>
              <span className="product__volume-value">450 мл</span>
            </div>

            <h2 className="cart__item-title">
              BioMio BIO-SOAP Экологичное туалетное мыло....
            </h2>

            <p className="product-card__description-text cart__item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              interdum ut justo, vestibulum sagittis iaculis iaculis. Quis
              mattis vulputate feugiat massa vestibulum duis.
            </p>
          </div>

          <div className="cart__buttons-container">
            <div className="product-card__cart-action cart__item-action">
              <button
                type="button"
                className="product-card__cart-inc product-card__cart-button"
              >
                &#8722;
              </button>
              &#160;&#160;&#160;
              <span className="product-card__cart-count">1</span>
              &#160;&#160;&#160;
              <button
                type="button"
                className="product-card__cart-dec product-card__cart-button"
              >
                &#43;
              </button>
            </div>

            <p className="product-card__price cart__item-price">
              48,76 &#8376;
            </p>

            <button className="catalog__filterBtn catalog__filterBtn_type_reset cart__item-resetBtn"></button>
          </div>
        </li>

        <li className="cart__item">
          <img
            className="cart__item-img"
            src={testImageLarge21}
            alt="BioMio BIO-SOAP Экологичное туалетное мыло...."
          />

          <div className="cart__text-container">
            <div className="product__volume cart__item-volume">
              <div className="product__volume-icon"></div>
              <span className="product__volume-value">450 мл</span>
            </div>

            <h2 className="cart__item-title">
              BioMio BIO-SOAP Экологичное туалетное мыло....
            </h2>

            <p className="product-card__description-text cart__item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              interdum ut justo, vestibulum sagittis iaculis iaculis. Quis
              mattis vulputate feugiat massa vestibulum duis.
            </p>
          </div>

          <div className="cart__buttons-container">
            <div className="product-card__cart-action cart__item-action">
              <button
                type="button"
                className="product-card__cart-inc product-card__cart-button"
              >
                &#8722;
              </button>
              &#160;&#160;&#160;
              <span className="product-card__cart-count">1</span>
              &#160;&#160;&#160;
              <button
                type="button"
                className="product-card__cart-dec product-card__cart-button"
              >
                &#43;
              </button>
            </div>

            <p className="product-card__price cart__item-price">
              48,76 &#8376;
            </p>

            <button className="catalog__filterBtn catalog__filterBtn_type_reset cart__item-resetBtn"></button>
          </div>
        </li>
      </ul>
      <div className="cart__order">
        <button className="cart__order-btn">Оформить заказ</button>
        <div className="cart__order-amount">1 348,76 &#8376;</div>
      </div>
    </div>
  );
}

export default Cart;
