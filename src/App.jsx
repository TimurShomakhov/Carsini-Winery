import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  // Corrected import
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'; // Import Checkout Page
import OrderConfirmation from './pages/OrderConfirmation'; // Import Order Confirmation Page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Use correct component name */}
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} /> {/* Add the Checkout Route */}
        <Route path="/order-confirmation" element={<OrderConfirmation />} /> {/* Add Order Confirmation Route */}
      </Routes>
    </Router>
  );
};

export default App;
