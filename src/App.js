import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero/index';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Featur';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
    <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for you' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
