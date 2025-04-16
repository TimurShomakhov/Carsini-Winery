// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Signup from "./components/Signup";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/AboutUs";
import Events from "./pages/Events";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

const AppWrapper = () => {
  const location = useLocation();

  // Define paths where background should NOT be applied
  const noBackgroundRoutes = ['/login', '/register'];

  const isNoBg = noBackgroundRoutes.includes(location.pathname);

  return (
    <div
      style={!isNoBg ? { backgroundColor: '#E9E3D4' } : {}}
      className={`min-h-screen w-full ${!isNoBg ? 'text-wine flex flex-col' : ''}`}
    >
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppWrapper />
      </Router>
    </AuthProvider>
  );
};

export default App;
