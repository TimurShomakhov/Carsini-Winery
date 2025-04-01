// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow md:px-8">
      <h1 className="text-xl font-bold text-blue-700 dark:text-white">Carsini Winery</h1>
      <div className="flex items-center gap-4">
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
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar
