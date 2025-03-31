// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  // Corrected import
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'; // Import Checkout Page
import OrderConfirmation from './pages/OrderConfirmation'; // Import Order Confirmation Page
import Signup from './components/Signup'; // Import Signup component
import Login from './components/Login'; // Import Login component
import About from './pages/AboutUs'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home Page */}
        <Route path="/products" element={<ProductListing />} />  {/* Product Listing Page */}
        <Route path="/products/:id" element={<ProductDetails />} />  {/* Product Details Page */}
        <Route path="/cart" element={<Cart />} />  {/* Cart Page */}
        <Route path="/checkout" element={<Checkout />} />  {/* Checkout Page */}
        <Route path="/order-confirmation" element={<OrderConfirmation />} />  {/* Order Confirmation Page */}
        <Route path="/signup" element={<Signup />} />  {/* Signup Route */}
        <Route path="/login" element={<Login />} />    {/* Login Route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
