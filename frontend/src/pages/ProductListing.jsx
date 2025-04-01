// src/pages/ProductListing.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import axios from '../api/axiosInstance'

const ProductListing = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/products')
        setProducts(res.data)
        setFilteredProducts(res.data)
      } catch (err) {
        console.error('Failed to load products:', err)
      }
    }

    fetchProducts()
  }, [])

  const handleSearch = (query) => {
    setSearchQuery(query)
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(results)
  }

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <Breadcrumbs />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
        <SearchBar onSearch={handleSearch} />

        {/* ✅ Integrated Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
                <Link to={`/products/${product.id}`} className="block mt-3">
                  <Button text="View Details" />
                </Link>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductListing
