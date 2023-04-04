import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './_Cart.scss';
import CartItem from '../CartItem/CartItem';

function Cart(props) {
  const history = useHistory();
  return (
    <section className="cart">
      <button onClick={() => history.push('/')} className="catalog__goBack">
        <span>Назад</span>
      </button>{' '}
      <h1 className="cart__title">Корзина</h1>
      <ul
        className={`cart__items ${
          props.products.length < 1 && 'cart__items_empty'
        }`}
      >
        {props.products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onCartInc={() => {
                props.onCartInc(product);
              }}
              onCartDec={() => {
                props.onCartDec(product);
              }}
              onProductDelete={() => {
                props.onProductDelete(product);
              }}
              onProductClick={() => {
                props.onProductClick(product);
              }}
            />
          );
        })}
      </ul>
      <div
        className={`cart__order ${
          props.products.length < 1 && 'cart__order_empty'
        }`}
      >
        <button onClick={props.makeOrder} className="cart__order-btn">
          Оформить заказ
        </button>
        <div className="cart__order-amount">{props.totalPrice}&#8376;</div>
      </div>
      <div
        className={`cart__empty ${
          props.products.length < 1 && 'cart__empty_visible'
        }`}
      >
        <h2 className="cart__empty-title">Ваша корзина пуста!</h2>
        <div className="cart__empty-img"></div>
        <Link to="/" className="cart__empty-link">
          Перейти в каталог
        </Link>
      </div>
    </section>
  );
}

export default Cart;
