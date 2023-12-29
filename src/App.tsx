
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCatalog from './components/ProductCatalog';
import ShoppingCart from './components/ShoppingCart';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
   
        <Routes>
          <Route path="/" element={<ProductCatalog />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
