import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';


function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCartSuccess = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <HeroBanner/>
      <ProductList onAddToCartSuccess={handleAddToCartSuccess} />
      <Footer/>
    </div>
  );
}

export default App;
