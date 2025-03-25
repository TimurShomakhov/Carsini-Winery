// src/pages/ProductListing.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import axios from '../api/axiosInstance' // This is your custom axios instance that uses the proxy

const ProductListing = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  // Fetch products from the backend when the page loads
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/products') // This goes through your proxy to http://localhost:5000/api/products
        setProducts(res.data)
        setFilteredProducts(res.data) // Initialize filtered products
      } catch (err) {
        console.error('Failed to load products:', err)
      }
    }

    fetchProducts()
  }, [])

  // Handle search logic
  const handleSearch = (query) => {
    setSearchQuery(query)
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(results)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <SearchBar onSearch={handleSearch} />

      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <Link to={`/products/${product.id}`}>
                <Button text="View Details" />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ProductListing
