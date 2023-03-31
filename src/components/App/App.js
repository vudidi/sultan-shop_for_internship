import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import OrderPopup from '../OrderPopup/OrderPopup';
const productData = require('../../data/products.json');

function App() {
  const [barcode, setBarcode] = React.useState('');
  const [productTitle, setProductTitle] = React.useState('');
  const [cartCount, setCartCount] = React.useState(0);
  const [cartPrice, setCartPrice] = React.useState(0);
  const [isOrderDone, setOrderDone] = React.useState(false);
  const products = productData.products;
  const localCart = JSON.parse(localStorage.getItem('cart'));
  const cartCountLocal = JSON.parse(localStorage.getItem('cartCount'));
  const cartPriceLocal = JSON.parse(localStorage.getItem('cartPrice'));
  const history = useHistory();

  function getCartProducts() {
    const local = JSON.parse(localStorage.getItem('cart'));
    if (local) {
      return local.filter((el) => {
        return el.count > 0 && el;
      });
    } else {
      return [];
    }
  }

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

  function createCartItem(item) {
    return {
      barcode: item.barcode,
      price: item.price,
      priceSum: item.price,
      count: 1,
      image: item.url,
      unit: item.unit,
      size: item.size,
      brand: item.brand,
      title: item.title,
      description: item.description,
    };
  }

  function addProductToCart(item) {
    const cartItem = createCartItem(item);

    setCartCount(cartCount + 1);
    setCartPrice(+cartPrice + +cartItem.price);

    const currentEl = localCart?.find((el) => el.barcode === item.barcode);

    if (!localCart) {
      const localCart = [];
      localCart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(localCart));
      localStorage.setItem('cartCount', JSON.stringify(1));
      localStorage.setItem('cartPrice', JSON.stringify(+cartItem.price));
    } else if (currentEl && currentEl.count === 0) {
      cartInc(item);
    } else {
      localCart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(localCart));
      localStorage.setItem('cartCount', cartCountLocal + 1);
      localStorage.setItem(
        'cartPrice',
        JSON.stringify(+cartPrice + +cartItem.price)
      );
    }
  }

  function cartInc(item) {
    if (!localCart) {
      const cartItem = createCartItem(item);
      const localCart = [];
      setCartCount(cartCount + 1);
      setCartPrice(+cartPrice + +cartItem.price);

      localCart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(localCart));
      localStorage.setItem('cartCount', JSON.stringify(1));
      localStorage.setItem('cartPrice', JSON.stringify(+cartItem.price));
    } else {
      localCart.forEach((el) => {
        if (el.barcode === item.barcode) {
          el.priceSum = +el.priceSum + +el.price;
          el.count++;

          const cartCountLocal = JSON.parse(localStorage.getItem('cartCount'));
          localStorage.setItem('cartCount', cartCountLocal + 1);
          setCartCount(cartCountLocal + 1);

          const cartPriceLocal = JSON.parse(localStorage.getItem('cartPrice'));
          localStorage.setItem('cartPrice', +cartPriceLocal + +el.price);
          setCartPrice(+cartPriceLocal + +el.price);
        }
      });
      localStorage.setItem('cart', JSON.stringify(localCart));
    }
  }

  function cartDec(item) {
    localCart.forEach((el) => {
      if (el.barcode === item.barcode) {
        el.priceSum = +el.priceSum - +el.price;
        el.count--;

        const cartCountLocal = JSON.parse(localStorage.getItem('cartCount'));
        localStorage.setItem('cartCount', cartCountLocal - 1);
        setCartCount(cartCountLocal - 1);

        const cartPriceLocal = JSON.parse(localStorage.getItem('cartPrice'));
        localStorage.setItem('cartPrice', +cartPriceLocal - +el.price);
        setCartPrice(+cartPriceLocal - +el.price);
      }
    });
    localStorage.setItem('cart', JSON.stringify(localCart));
  }

  function deleteCartItem(item) {
    localCart.forEach((el) => {
      if (el.barcode === item.barcode) {
        const cartCountLocal = JSON.parse(localStorage.getItem('cartCount'));
        localStorage.setItem('cartCount', cartCountLocal - +el.count);
        setCartCount(cartCountLocal - +el.count);

        const cartPriceLocal = JSON.parse(localStorage.getItem('cartPrice'));
        localStorage.setItem('cartPrice', +cartPriceLocal - +el.priceSum);
        setCartPrice(+cartPriceLocal - +el.priceSum);

        el.priceSum = el.price;
        el.count = 0;
      }
    });
    localStorage.setItem('cart', JSON.stringify(localCart));
  }

  function makeOrder() {
    document.documentElement.scrollTo(0, 0);
    setOrderDone(true);
    localStorage.removeItem('cart');
    localStorage.removeItem('cartCount');
    localStorage.removeItem('cartPrice');
    setCartCount(0);
    setCartPrice(0);
    setTimeout(() => {
      setOrderDone(false);
      history.push('/');
    }, 1500);
  }

  const cartProducts = getCartProducts();
  if (cartProducts.length < 1) {
    localStorage.removeItem('cart');
  }

  // useEffect
  useEffect(() => {
    const productCardLocal = JSON.parse(
      localStorage.getItem('productCardLocal')
    );
    if (productCardLocal) {
      setBarcode(productCardLocal.barcode);
      setProductTitle(productCardLocal.title);
    }
  }, []);

  useEffect(() => {
    if (cartCountLocal) {
      setCartCount(cartCountLocal);
    }
    if (cartPriceLocal) {
      setCartPrice(cartPriceLocal);
    }
  }, []);

  return (
    <Wrapper>
      <OrderPopup isOrderDone={isOrderDone} />
      <div className="app">
        <Favicon url={require('../../styles/images/favicon.png')}></Favicon>

        <Header count={cartCount} cartPrice={cartPrice} />

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

            <Route
              exact
              from="/cart"
              render={(props) => (
                <Cart
                  products={cartProducts}
                  totalPrice={cartPrice}
                  onCartInc={cartInc}
                  onCartDec={cartDec}
                  onProductDelete={deleteCartItem}
                  onProductClick={productClick}
                  makeOrder={makeOrder}
                  {...props}
                />
              )}
            />

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
