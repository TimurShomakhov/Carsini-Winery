// src/pages/ProductListing.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
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
    <div className="px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
              <Link to={`/products/${product.id}`} className="block mt-3">
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
