import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import {
  Home,
  Star,
  Wine,
  ShoppingCart,
  CreditCard,
  Book
} from 'lucide-react';

const Navbar = () => {
  const { token, logout } = useAuth();

  const navButtonStyle =
    'cursor-pointer !bg-white !text-black relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:!bg-[#F5F5F5] h-9 px-3';

  return (
    <nav className="w-full bg-parchment text-wine font-serif shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Left: Logo only */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Carsini Winery logo"
            className="h-24 w-auto object-contain" // ⬅️ Logo now enlarged
          />
        </Link>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-3 items-center">
          <li>
            <Link to="/">
              <button className={navButtonStyle}>
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Home</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/events">
              <button className={navButtonStyle}>
                <Star className="w-5 h-5" />
                <span className="hidden sm:inline">Events</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <button className={navButtonStyle}>
                <Wine className="w-5 h-5" />
                <span className="hidden sm:inline">Products</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <button className={navButtonStyle}>
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:inline">Cart</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/checkout">
              <button className={navButtonStyle}>
                <CreditCard className="w-5 h-5" />
                <span className="hidden sm:inline">Checkout</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className={navButtonStyle}>
                <Book className="w-5 h-5" />
                <span className="hidden sm:inline">About Us</span>
              </button>
            </Link>
          </li>
        </ul>

        {/* Right: Auth Button */}
        <div className="ml-4 flex items-center space-x-4">
          {token ? (
            <button
              onClick={() => {
                logout();
                toast.success('Logged out!');
              }}
              className={navButtonStyle}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className={navButtonStyle}>
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
