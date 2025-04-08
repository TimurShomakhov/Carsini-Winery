// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext'; // ✅ useAuth hook
import { toast } from 'react-hot-toast'; // ✅ toast import

const Navbar = () => {
  const { token, logout } = useAuth();

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
            Carsini Winery
          </span>
        </Link>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
  <Link to="/events" className="hover:underline">Events</Link>
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

        {/* Right: Theme Toggle + Auth Button */}
        <div className="ml-4 flex items-center space-x-4">
          <ThemeToggle />
          {token ? (
            <button
              onClick={() => {
                logout();
                toast.success('Logged out!');
              }}
              className="text-sm underline hover:text-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-sm underline hover:text-green-700 transition">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
