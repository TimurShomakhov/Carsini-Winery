import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const { token, logout } = useAuth();

  return (
    <nav className="w-full bg-parchment text-wine font-serif shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Carsini Winery logo"
            className="h-10 w-auto object-contain"
          />
          <span className="font-italianno text-3xl tracking-wide hidden sm:inline">Carsini Winery</span>
        </Link>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-6 text-lg italic">
          <li><Link to="/" className="hover:underline hover:text-wine/80 transition">Home</Link></li>
          <li><Link to="/events" className="hover:underline hover:text-wine/80 transition">Events</Link></li>
          <li><Link to="/products" className="hover:underline hover:text-wine/80 transition">Products</Link></li>
          <li><Link to="/cart" className="hover:underline hover:text-wine/80 transition">Cart</Link></li>
          <li><Link to="/checkout" className="hover:underline hover:text-wine/80 transition">Checkout</Link></li>
          <li><Link to="/about" className="hover:underline hover:text-wine/80 transition">About Us</Link></li>
        </ul>

        {/* Right: Auth only (ThemeToggle removed) */}
        <div className="ml-4 flex items-center space-x-4">
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
