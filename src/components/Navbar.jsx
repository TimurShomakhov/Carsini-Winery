import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
        </li>
        <li>
          <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
