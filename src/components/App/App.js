import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Favicon from 'react-favicon';
import '../../styles/scss/styles.scss';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Catalog from '../Catalog/Catalog';
import ProductCard from '../ProductCard/ProductCard';
import StartPage from '../StartPage/StartPage';

function App() {
  return (
    <div className="app">
      <Favicon url={require('../../styles/images/favicon.png')}></Favicon>
      <Header />

      <main>
        <Breadcrumbs />

        <Switch>
          <Route exact from="/" render={(props) => <Catalog {...props} />} />
          <Route
            exact
            from="/product"
            render={(props) => <ProductCard {...props} />}
          />

          <Route path="/sultan-shop_for_internship">
            <StartPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
