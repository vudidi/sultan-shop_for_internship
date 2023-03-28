import React from 'react';
import { useHistory } from 'react-router-dom';
import './_Product.scss';
import testImage21 from '../../styles/images/product/test-image21.png';
import testImageLarge21 from '../../styles/images/product/test-large-image22.png';
import { Link } from 'react-router-dom';

function Product() {
  const history = useHistory();
  const navigateTo = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <Link to="/product" className="product">
      <img
        src={testImageLarge21}
        alt="AOS средство для мытья посуды Crystal"
        className="product__image"
      />
      <div className="product__volume">
        <div className="product__volume-icon"></div>
        <span className="product__volume-value">450 мл</span>
      </div>
      <div className="product__title">
        <h3 className="product__title-vendor">
          AOS&nbsp;
          <span className="product__title-name">
            средство для мытья посуды Crystal
          </span>
        </h3>
      </div>
      <div className="product__barcode product__parameter">
        <span>Штрихкод&#58;&#160;</span>4604049097548
      </div>
      <div className="product__vendor product__parameter">
        <span>Производитель&#58;&#160;</span>Нэфис
      </div>
      <div className="product__brand product__parameter">
        <span>Бренд&#58;&#160;</span>AOS
      </div>
      <div className="product__container">
        <p className="product__price">48,76 &#8376;</p>
        <button onClick={navigateTo} className="product__button">
          В корзину
          <div className="product__price-icon"></div>
        </button>
      </div>
    </Link>
  );
}

export default Product;
