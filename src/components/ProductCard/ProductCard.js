import React from 'react';
import { useHistory } from 'react-router-dom';
import './_ProductCard.scss';
import testImageLarge21 from '../../styles/images/product/test-large-image22.png';

function ProductCard() {
  const history = useHistory();

  const navigateTo = (e) => {
    e.preventDefault();
    history.push('/');
  };

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
      <button className="catalog__goBack">
        <span>Назад</span>
      </button>{' '}
      <img
        src={testImageLarge21}
        alt="AOS средство для мытья посуды Crystal"
        className="product-card__image"
      />
      <div className="product-card__info">
        <p className="product-card__availability">В наличии</p>

        <div className="product-card__title">
          <h3 className="product-card__title-vendor">
            BioMio&nbsp;BIO-SOAP&nbsp;
            <span className="product-card__title-name">
              Экологичное туалетное мыло. Литсея и бергамот
            </span>
          </h3>
        </div>

        <div className="product__volume product-card__volume">
          <div className="product__volume-icon"></div>
          <span className="product__volume-value">450 мл</span>
        </div>

        <div className="product-card__container">
          <p className="product-card__price">48,76 &#8376;</p>

          <div className="product-card__cart-action">
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

          <button
            onClick={navigateTo}
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
          <p className="product-card__price">48,76 &#8376;</p>
          <div className="product-card__cart-action">
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
        </div>

        <div className="product-card__container-adaptive">
          <button
            onClick={navigateTo}
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
          <span>Производитель&#58;&#160;</span>Нэфис
        </div>

        <div className="product__brand product__parameter product-card__parameter">
          <span>Бренд&#58;&#160;</span>AOS
        </div>

        <div className="product__article product__parameter product-card__parameter">
          <span>Артикул&#58;&#160;</span>460404
        </div>

        <div className="product__barcode product__parameter product-card__parameter">
          <span>Штрихкод&#58;&#160;</span>4604049097548
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
            vulputate feugiat massa vestibulum duis. Faucibus consectetur
            aliquet sed pellentesque consequat consectetur congue mauris
            venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
            malesuada.
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
              <span>Назначение&#58;&#160;</span>BioMio
            </div>

            <div className="product__vendor product__parameter product-card__parameter">
              <span>Тип&#58;&#160;</span>BioMio
            </div>

            <div className="product__vendor product__parameter product-card__parameter">
              <span>Производитель&#58;&#160;</span>Нэфис
            </div>

            <div className="product__brand product__parameter product-card__parameter">
              <span>Бренд&#58;&#160;</span>AOS
            </div>

            <div className="product__article product__parameter product-card__parameter">
              <span>Артикул&#58;&#160;</span>460404
            </div>

            <div className="product__barcode product__parameter product-card__parameter">
              <span>Штрихкод&#58;&#160;</span>4604049097548
            </div>

            <div className="product__weight product__parameter product-card__parameter">
              <span>Вес&#58;&#160;</span>90 г
            </div>

            <div className="product__amount product__parameter product-card__parameter">
              <span>Объем&#58;&#160;</span>90 г
            </div>

            <div className="product__count-in-box product__parameter product-card__parameter">
              <span>Кол-во в коробке&#58;&#160;</span>90 г
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
