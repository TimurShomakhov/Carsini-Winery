import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import toast from 'react-hot-toast'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products/${id}`)
      const data = await response.json()
      setProduct(data)
    }
    fetchProduct()
  }, [id])

  const increaseQty = () => setQuantity((prev) => prev + 1)
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  if (!product) return <div className="p-8 text-center">Loading...</div>

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <Breadcrumbs />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-green-600 mb-4">${product.price}</p>

            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                +
              </button>
            </div>

            <Button
              text="Add to Cart"
              onClick={() => {
                addToCart({ ...product, quantity })
                toast.success('Added to cart!')
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductDetails
