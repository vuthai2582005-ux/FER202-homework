import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
