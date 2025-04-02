// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="w-full bg-parchment text-wine font-serif shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Logo + Brand */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Carsini Winery logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-2xl italic font-bold tracking-wide whitespace-nowrap">
          </span>
        </Link>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:underline">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:underline">Cart</Link>
          </li>
          <li>
            <Link to="/checkout" className="hover:underline">Checkout</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">About Us</Link>
          </li>
        </ul>

        {/* Right: Theme Toggle */}
        <div className="ml-4 shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
