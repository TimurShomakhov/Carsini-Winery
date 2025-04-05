import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const res = await fetch(`/api/reviews/${id}`);
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    fetchProduct();
    fetchReviews();
  }, [id]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product.id,
          userId: 101, // Replace with real user ID if using auth
          rating: parseInt(newReview.rating),
          comment: newReview.comment,
        }),
      });

      if (!res.ok) throw new Error('Failed to submit review');
      const data = await res.json();
      setReviews((prev) => [data, ...prev]);
      setNewReview({ rating: 5, comment: '' });
      toast.success('Review submitted!');
    } catch (err) {
      console.error(err);
      toast.error('Error submitting review.');
    }
  };

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <p className="text-xl">Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col">
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow w-full px-4 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg"
            loading="lazy"
          />

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-green-600 mb-4">
              ${product.price}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={decreaseQty}
                aria-label={`Decrease quantity of ${product.name}`}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={increaseQty}
                aria-label={`Increase quantity of ${product.name}`}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                +
              </button>
            </div>

            <Button
              text="Add to Cart"
              onClick={() => {
                addToCart({ ...product, quantity });
                toast.success('Added to cart!');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            />
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <ul className="space-y-4 mb-8">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="border border-gray-300 dark:border-gray-700 p-4 rounded shadow"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">Rating:</span>
                    <span>{'⭐'.repeat(review.rating)}</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200">{review.comment}</p>
                </li>
              ))}
            </ul>
          )}

          {/* Review Form */}
          <h3 className="text-xl font-semibold mb-2">Leave a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
              <label htmlFor="rating" className="block font-medium">Rating</label>
              <select
                name="rating"
                id="rating"
                value={newReview.rating}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                {[1, 2, 3, 4, 5].map((r) => (
                  <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="comment" className="block font-medium">Comment</label>
              <textarea
                name="comment"
                id="comment"
                rows="3"
                value={newReview.comment}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit Review
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
