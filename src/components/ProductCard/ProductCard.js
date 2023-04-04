import React from 'react';
import { useHistory } from 'react-router-dom';
import './_ProductCard.scss';
import getAllProducts from '../../utils/getAllProducts.js';

function ProductCard(props) {
  const history = useHistory();
  const allProducts = getAllProducts();

  let currentProduct = allProducts.filter((item) => item.id === props.id)[0];

  const localCart = JSON.parse(localStorage.getItem('cart'));
  let countInCart = 0;

  if (localCart) {
    const productCartCount = localCart.find(
      (el) => el.id === currentProduct.id
    );
    if (productCartCount) {
      countInCart = productCartCount.count;
    }
  }

  function handleAddProduct(e) {
    e.preventDefault();
    props.onAddProductToCart(currentProduct);
    countInCart++;
  }

  function handleCartInc(e) {
    e.preventDefault();
    props.onCartInc(currentProduct);
    countInCart++;
  }

  function handleCartDec(e) {
    e.preventDefault();
    props.onCartDec(currentProduct);
    countInCart--;
  }

  function toggleDescription() {
    document
      .querySelector('.product-card__descriptionBtn_type_show')
      .classList.toggle('product-card__descriptionBtn_hidden');
    document
      .querySelector('.product-card__descriptionBtn_type_hide')
      .classList.toggle('product-card__descriptionBtn_hidden');
    document
      .querySelector('.product-card__description-text')
      .classList.toggle('product-card__description-text_hidden');
  }

  function toggleParameters() {
    document
      .querySelector('.product-card__parametersBtn_type_show')
      .classList.toggle('product-card__parametersBtn_hidden');
    document
      .querySelector('.product-card__parametersBtn_type_hide')
      .classList.toggle('product-card__parametersBtn_hidden');
    document
      .querySelector('.product-card__parameter-container')
      .classList.toggle('product-card__parameter-container_hidden');
  }

  return (
    <div className="product-card">
      <button onClick={() => history.push('/')} className="catalog__goBack">
        <span>Назад</span>
      </button>{' '}
      <img
        src={currentProduct.url}
        alt="AOS средство для мытья посуды Crystal"
        className="product-card__image"
      />
      <div className="product-card__info">
        <p className="product-card__availability">В наличии</p>

        <div className="product-card__title">
          <h3 className="product-card__title-vendor">
            {currentProduct.brand}&nbsp;
            <span className="product-card__title-name">
              {currentProduct.title}
            </span>
          </h3>
        </div>

        <div className="product__volume product-card__volume">
          <div
            className={`product__volume-icon ${
              currentProduct.unit === 'weight'
                ? 'product__volume-icon_type_weight'
                : 'product__volume-icon_type_volume'
            }`}
          ></div>
          <span className="product__volume-value">
            {currentProduct.size}&#160;
            {currentProduct.unit === 'volume' ? 'мл' : 'г'}
          </span>
        </div>

        <div className="product-card__container">
          <p className="product-card__price">{currentProduct.price} &#8376;</p>

          <div className="product-card__cart-action">
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

          <button
            disabled={countInCart > 0}
            onClick={handleAddProduct}
            className="product__button product-card__button"
          >
            В корзину
            <div className="product__price-icon"></div>
          </button>
        </div>

        <div className="product-card__container">
          <button type="button" className="product-card__share"></button>
          <div className="product-card__delivery-terms">
            <p>
              При покупке от&#160;<span>10&#160;000&#160;&#8376;</span>{' '}
              бесплатная доставка по Кокчетаву и области
            </p>
          </div>
          <button type="button" className="product-card__priceList">
            Прайс-лист
          </button>
        </div>

        <div className="product-card__container-adaptive">
          {' '}
          <p className="product-card__price">{currentProduct.price} &#8376;</p>
          <div className="product-card__cart-action">
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
        </div>

        <div className="product-card__container-adaptive">
          <button
            disabled={countInCart > 0}
            onClick={handleAddProduct}
            className="product__button product-card__button"
          >
            В корзину
            <div className="product__price-icon"></div>
          </button>
          <button type="button" className="product-card__share"></button>
        </div>

        <div className="product-card__container-adaptive product-card__container-adaptive_column">
          {' '}
          <div className="product-card__delivery-terms">
            <p>
              При покупке от&#160;<span>10&#160;000&#160;&#8376;</span>{' '}
              бесплатная доставка по Кокчетаву и области
            </p>
          </div>
          <button type="button" className="product-card__priceList">
            Прайс-лист
          </button>
        </div>

        <div className="product__vendor product__parameter product-card__parameter">
          <span>Производитель&#58;&#160;</span>
          {currentProduct.vendor}
        </div>

        <div className="product__brand product__parameter product-card__parameter">
          <span>Бренд&#58;&#160;</span>
          {currentProduct.brand}
        </div>

        <div className="product__article product__parameter product-card__parameter">
          <span>Артикул&#58;&#160;</span>460404
        </div>

        <div className="product__barcode product__parameter product-card__parameter">
          <span>Штрихкод&#58;&#160;</span>
          {currentProduct.barcode}
        </div>

        <div className="product-card__description">
          <button
            onClick={toggleDescription}
            className="product-card__descriptionBtn product-card__descriptionBtn_type_show"
          >
            Описание &#9660;
          </button>
          <button
            onClick={toggleDescription}
            className="product-card__descriptionBtn product-card__descriptionBtn_type_hide product-card__descriptionBtn_hidden"
          >
            Описание &#9650;
          </button>
          <p className="product-card__description-text product-card__description-text_hidden">
            {currentProduct.description}
          </p>
        </div>

        <div className="product-card__parameters">
          <button
            onClick={toggleParameters}
            className="product-card__parametersBtn product-card__parametersBtn_type_show"
          >
            Характеристики &#9660;
          </button>
          <button
            onClick={toggleParameters}
            className="product-card__parametersBtn product-card__parametersBtn_type_hide product-card__parametersBtn_hidden"
          >
            Характеристики &#9650;
          </button>

          <div className="product-card__parameter-container product-card__parameter-container_hidden">
            <div className="product__vendor product__parameter product-card__parameter">
              <span>Назначение&#58;&#160;</span>Косметика
            </div>

            <div className="product__vendor product__parameter product-card__parameter">
              <span>Тип&#58;&#160;</span>Косметика
            </div>

            <div className="product__vendor product__parameter product-card__parameter">
              <span>Производитель&#58;&#160;</span>
              {currentProduct.vendor}
            </div>

            <div className="product__brand product__parameter product-card__parameter">
              <span>Бренд&#58;&#160;</span>
              {currentProduct.brand}
            </div>

            <div className="product__article product__parameter product-card__parameter">
              <span>Артикул&#58;&#160;</span>460404
            </div>

            <div className="product__barcode product__parameter product-card__parameter">
              <span>Штрихкод&#58;&#160;</span>
              {currentProduct.barcode}
            </div>

            <div className="product__weight product__parameter product-card__parameter">
              <span>Вес&#58;&#160;</span>
              {currentProduct.size}&#160;
              {currentProduct.unit === 'volume' ? 'мл' : 'г'}
            </div>

            <div className="product__amount product__parameter product-card__parameter">
              <span>Объем&#58;&#160;</span>
              {currentProduct.size}&#160;
              {currentProduct.unit === 'volume' ? 'мл' : 'г'}
            </div>

            <div className="product__count-in-box product__parameter product-card__parameter">
              <span>Кол-во в коробке&#58;&#160;</span>1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
