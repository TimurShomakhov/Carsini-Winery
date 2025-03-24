import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails'; // Import the ProductDetails page
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs';  {/* Corrected import */}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} /> {/* Route for ProductDetails */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<AboutUs />} /> {/* Corrected usage */}
      </Routes>
    </Router>
  );
}

export default App;
