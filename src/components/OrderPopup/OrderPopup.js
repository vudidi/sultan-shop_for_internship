import React from 'react';
import './_OrderPopup.scss';

function OrderPopup(props) {
  return (
    <div className={`order-popup ${props.isOrderDone && 'order-popup_opened'}`}>
      {' '}
      <div className="order-popup__container">
        <div className="order-popup__icon"></div>
        <h1 className="order-popup__title">Спасибо за заказ</h1>
        <p className="order-popup__subtitle">
          Наш менеджер свяжется с вами в ближайшее время
        </p>
      </div>
    </div>
  );
}

export default OrderPopup;
