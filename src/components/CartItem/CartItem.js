import React from 'react';
import { Link } from 'react-router-dom';

function CartItem(props) {
  let countInCart = 0;
  const localCart = JSON.parse(localStorage.getItem('cart'));

  if (localCart) {
    const productCartCount = localCart.find(
      (el) => el.barcode === props.product.barcode
    );
    if (productCartCount) {
      countInCart = productCartCount.count;
    }
  }

  function handleCartInc(e) {
    e.preventDefault();
    props.onCartInc(props.product);
    countInCart++;
  }

  function handleCartDec(e) {
    e.preventDefault();
    props.onCartDec(props.product);
    countInCart--;
  }

  function handleDeleteCartItem(e) {
    e.preventDefault();
    props.onProductDelete(props.product);
  }

  function handleClick() {
    props.onProductClick(props.product);
  }

  return (
    <li className="cart__item" key={props.product.barcode}>
      <img
        className="cart__item-img"
        src={props.product.image}
        alt="BioMio BIO-SOAP Экологичное туалетное мыло...."
      />

      <div className="cart__text-container">
        <div className="product__volume cart__item-volume">
          <div
            className={`product__volume-icon ${
              props.product.unit === 'weight'
                ? 'product__volume-icon_type_weight'
                : 'product__volume-icon_type_volume'
            }`}
          ></div>
          <span className="product__volume-value">{props.product.size}</span>
        </div>

        <Link
          onClick={handleClick}
          to={`/product/${props.product.barcode}`}
          className="cart__item-title"
        >{`${props.product.brand} ${props.product.title}`}</Link>

        <p className="product-card__description-text cart__item-description">
          {props.product.description}
        </p>
      </div>

      <div className="cart__buttons-container">
        <div className="product-card__cart-action cart__item-action">
          <button
            disabled={countInCart < 1}
            onClick={handleCartDec}
            type="button"
            className="product-card__cart-inc product-card__cart-button"
          >
            &#8722;
          </button>
          &#160;&#160;&#160;
          <span className="product-card__cart-count">{countInCart}</span>
          &#160;&#160;&#160;
          <button
            disabled={countInCart > 20}
            onClick={handleCartInc}
            type="button"
            className="product-card__cart-dec product-card__cart-button"
          >
            &#43;
          </button>
        </div>

        <p className="product-card__price cart__item-price">
          {props.product.price} &#8376;
        </p>

        <button
          onClick={handleDeleteCartItem}
          className="catalog__filterBtn catalog__filterBtn_type_reset cart__item-resetBtn"
        ></button>
      </div>
    </li>
  );
}

export default CartItem;
