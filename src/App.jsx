import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails'; // Import the ProductDetails page
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs';
import { CartProvider } from './context/CartContext'; // Import CartProvider

function App() {
  return (
    <CartProvider> {/* Wrap the whole app with CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} /> {/* Add the Cart route */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
