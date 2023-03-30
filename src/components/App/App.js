import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Wrapper from '../../utils/scrollLayoutEffect';
import Favicon from 'react-favicon';
import '../../styles/scss/styles.scss';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Catalog from '../Catalog/Catalog';
import ProductCard from '../ProductCard/ProductCard';
import StartPage from '../StartPage/StartPage';
import Cart from '../Cart/Cart';
const productData = require('../../data/products.json');

function App() {
  const [barcode, setBarcode] = React.useState('');
  const [productTitle, setProductTitle] = React.useState('');
  const [cartCount, setCartCount] = React.useState(0);
  const products = productData.products;
  const localCart = JSON.parse(localStorage.getItem('cart'));
  const cartCountLocal = JSON.parse(localStorage.getItem('cartCount'));

  function productClick(item) {
    setBarcode(item.barcode);
    setProductTitle(`${item.brand} ${item.title}`);
    localStorage.setItem(
      'productCardLocal',
      JSON.stringify({
        barcode: item.barcode,
        title: `${item.brand} ${item.title}`,
      })
    );
  }

  useEffect(() => {
    const productCardLocal = JSON.parse(
      localStorage.getItem('productCardLocal')
    );
    if (productCardLocal) {
      setBarcode(productCardLocal.barcode);
      setProductTitle(productCardLocal.title);
    }
  }, []);

  function addProductToCart(item) {
    const cartItem = {
      barcode: item.barcode,
      count: 1,
    };
    setCartCount(cartCount + 1);

    const currentEl = localCart?.find((el) => el.barcode === item.barcode);

    if (!localCart) {
      const localCart = [];
      localCart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(localCart));
      localStorage.setItem('cartCount', JSON.stringify(1));
    } else if (currentEl && currentEl.count === 0) {
      cartInc(item);
    } else {
      localCart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(localCart));
      localStorage.setItem('cartCount', cartCountLocal + 1);
    }
  }

  useEffect(() => {
    if (cartCountLocal) {
      setCartCount(cartCountLocal);
    }
  }, []);

  function cartInc(item) {
    localCart.forEach((el) => {
      if (el.barcode === item.barcode) {
        el.count++;
        const cartCountLocal = JSON.parse(localStorage.getItem('cartCount'));
        localStorage.setItem('cartCount', cartCountLocal + 1);
        setCartCount(cartCountLocal + 1);
      }
    });
    localStorage.setItem('cart', JSON.stringify(localCart));
  }

  function cartDec(item) {
    localCart.forEach((el) => {
      if (el.barcode === item.barcode) {
        el.count--;
        const cartCountLocal = JSON.parse(localStorage.getItem('cartCount'));
        localStorage.setItem('cartCount', cartCountLocal - 1);
        setCartCount(cartCountLocal - 1);
      }
    });
    localStorage.setItem('cart', JSON.stringify(localCart));
  }

  return (
    <Wrapper>
      <div className="app">
        <Favicon url={require('../../styles/images/favicon.png')}></Favicon>
        <Header count={cartCount} />

        <main>
          <Breadcrumbs productTitle={productTitle} />

          <Switch>
            <Route
              exact
              from="/"
              render={(props) => (
                <Catalog
                  products={products}
                  inTheBasket={true}
                  onProductClick={productClick}
                  onAddProductToCart={addProductToCart}
                  onCartInc={cartInc}
                  onCartDec={cartDec}
                  {...props}
                />
              )}
            />

            <Route
              exact
              from={`/product/${barcode}`}
              render={(props) => (
                <ProductCard
                  barcode={barcode}
                  onAddProductToCart={addProductToCart}
                  onCartInc={cartInc}
                  onCartDec={cartDec}
                  {...props}
                />
              )}
            />

            <Route exact from="/cart" render={(props) => <Cart {...props} />} />

            <Route path="/sultan-shop_for_internship">
              <StartPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Wrapper>
  );
}

export default App;
