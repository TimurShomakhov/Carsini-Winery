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
} from 'lucide-react'; // assuming lucide-react is installed

const Navbar = () => {
  const { token, logout } = useAuth();

  const navButtonStyle =
    'cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] h-9 px-3';

  return (
    <nav className="w-full bg-parchment text-wine font-serif shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Carsini Winery logo"
            className="h-16 w-auto object-contain" // Increased from h-10 to h-16
          />
        </Link>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-3 items-center">
          <li>
            <Link to="/">
              <button className={`${navButtonStyle} hover:text-blue-600`}>
                <Home className="w-5 h-5 text-blue-600" />
                <span className="hidden sm:inline">Home</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/events">
              <button className={`${navButtonStyle} hover:text-orange-400`}>
                <Star className="w-5 h-5 text-orange-400" fill="#FB923C" />
                <span className="hidden sm:inline">Events</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <button className={`${navButtonStyle} hover:text-purple-600`}>
                <Wine className="w-5 h-5 text-purple-600" />
                <span className="hidden sm:inline">Products</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <button className={`${navButtonStyle} hover:text-green-600`}>
                <ShoppingCart className="w-5 h-5 text-green-600" />
                <span className="hidden sm:inline">Cart</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/checkout">
              <button className={`${navButtonStyle} hover:text-rose-500`}>
                <CreditCard className="w-5 h-5 text-rose-500" />
                <span className="hidden sm:inline">Checkout</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className={`${navButtonStyle} hover:text-yellow-600`}>
                <Book className="w-5 h-5 text-yellow-600" />
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
              className={`${navButtonStyle} hover:text-red-500`}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className={`${navButtonStyle} hover:text-teal-500`}>
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
