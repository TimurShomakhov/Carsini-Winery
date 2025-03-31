// src/components/Navbar.jsx
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow md:px-8">
      <h1 className="text-xl font-bold text-blue-700">Carsini Winery</h1>
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link to="/" className="hover:text-blue-600">Home</Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-blue-600">Cart</Link>
        </li>
        <li>
          <Link to="/checkout" className="hover:text-blue-600">Checkout</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
