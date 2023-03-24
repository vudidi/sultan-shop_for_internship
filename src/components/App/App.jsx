import Favicon from 'react-favicon';
import '../../styles/scss/styles.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="app">
      <Favicon url={require('../../styles/images/favicon.png')}></Favicon>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
