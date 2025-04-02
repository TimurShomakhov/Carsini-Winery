// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Left: Brand + Links */}
        <div className="flex items-center space-x-10">
          <Link to="/" className="text-2xl font-bold text-blue-700 dark:text-white whitespace-nowrap">
            Carsini Winery
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-600 dark:hover:text-blue-400">Products</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-blue-600 dark:hover:text-blue-400">Cart</Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-blue-600 dark:hover:text-blue-400">Checkout</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Right: Theme Toggle */}
        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
