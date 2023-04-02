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
import {
  sortByTitleAsc,
  sortByTitleDesc,
  sortByPriceAsc,
  sortByPriceDesc,
} from '../../utils/sortArray';
import {
  getProductCountForVendor,
  getProductsMaxPrice,
  getProductsMinPrice,
} from '../../utils/getProductsData.js';
const productData = require('../../data/products.json');

function App() {
  const history = useHistory();
  const priceMin = getProductsMinPrice(productData.products);
  const priceMax = getProductsMaxPrice(productData.products);
  const localCart = JSON.parse(localStorage.getItem('cart'));
  const cartCountLocal = JSON.parse(localStorage.getItem('cartCount'));
  const cartPriceLocal = JSON.parse(localStorage.getItem('cartPrice'));
  const vendors = getProductCountForVendor(productData.products);
  const [products, setProducts] = React.useState(productData.products);
  const [barcode, setBarcode] = React.useState('');
  const [productTitle, setProductTitle] = React.useState('');
  const [cartCount, setCartCount] = React.useState(0);
  const [cartPrice, setCartPrice] = React.useState(0);
  const [isOrderDone, setOrderDone] = React.useState(false);
  const [inputPriceMin, setInputPriceMin] = React.useState(priceMin);
  const [inputPriceMax, setInputPriceMax] = React.useState(priceMax);

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

  // SORT
  function sortProducts(e) {
    if (e.target.value === 'titleAsc') {
      setProducts([...products].sort(sortByTitleAsc));
    } else if (e.target.value === 'titleDesc') {
      setProducts([...products].sort(sortByTitleDesc));
    } else if (e.target.value === 'priceAsc') {
      setProducts([...products].sort(sortByPriceAsc));
    } else if (e.target.value === 'priceDesc') {
      setProducts([...products].sort(sortByPriceDesc));
    } else if (e.target.value === 'default') {
      setProducts([...productData.products]);
    }
  }

  // TYPE FILTER
  function typeFilterClick(e) {
    const filteredProducts = [];
    const productsList = document.querySelector('.catalog__products');
    const noResultsMessage = document.querySelector(
      '.catalog__noResuts-message'
    );
    productsList.style.display = 'flex';
    noResultsMessage.style.display = 'none';
    const typeButtons = document.querySelectorAll('.catalog__type-filter');

    typeButtons.forEach((el) => {
      if (el.textContent !== e.target.textContent) {
        el.classList.remove('selected');
      } else {
        el.classList.toggle('selected');
      }
    });

    if (![...e.target.classList].includes('selected')) {
      setProducts(productData.products);
    } else {
      productData.products.forEach((el) => {
        el.flags.includes(e.target.textContent) && filteredProducts.push(el);
      });

      setProducts(filteredProducts);
    }
    setInputPriceMin(priceMin);
    setInputPriceMax(priceMax);
    const vendorsList = document.querySelectorAll('.catalog__checkbox-input');
    vendorsList.forEach((el) => {
      el.checked = false;
    });
  }

  // COMMON FILTERS
  function getInputMinPrice(e) {
    setInputPriceMin(e.target.value);
  }

  function getInputMaxPrice(e) {
    setInputPriceMax(e.target.value);
  }

  function submitFilters() {
    const filteredProducts = [];
    const filterParams = {
      priceMin: +inputPriceMin,
      priceMax: +inputPriceMax,
      vendors: [],
    };

    const vendorsList = document.querySelectorAll('.catalog__checkbox-input');
    vendorsList.forEach((el) => {
      el.checked &&
        !filterParams.vendors.includes(el.nextSibling.textContent) &&
        filterParams.vendors.push(el.nextSibling.textContent);
    });

    productData.products.forEach((el) => {
      if (
        el.price >= filterParams.priceMin &&
        el.price <= filterParams.priceMax &&
        filterParams.vendors.includes(el.vendor)
      )
        filteredProducts.push(el);
    });

    setProducts(filteredProducts);

    const productsList = document.querySelector('.catalog__products');
    const noResultsMessage = document.querySelector(
      '.catalog__noResuts-message'
    );

    if (filteredProducts.length < 1) {
      productsList.style.display = 'none';
      noResultsMessage.style.display = 'block';
    } else {
      productsList.style.display = 'flex';
      noResultsMessage.style.display = 'none';
    }

    const typeButtons = document.querySelectorAll('.catalog__type-filter');
    typeButtons.forEach((el) => {
      el.classList.remove('selected');
    });
  }

  function resetFilters() {
    setInputPriceMin(priceMin);
    setInputPriceMax(priceMax);
    const vendorsList = document.querySelectorAll('.catalog__checkbox-input');
    vendorsList.forEach((el) => {
      el.checked = false;
    });
    setProducts(productData.products);
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
                  onSortClick={sortProducts}
                  onTypeFilterClick={typeFilterClick}
                  onSubmitFilters={submitFilters}
                  priceMinInputHandler={getInputMinPrice}
                  priceMaxInputHandler={getInputMaxPrice}
                  priceMin={inputPriceMin}
                  priceMax={inputPriceMax}
                  onResetFilters={resetFilters}
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
