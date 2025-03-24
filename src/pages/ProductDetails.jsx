import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button'; // Corrected import to default import

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  // Fetch product details using the ID
  useEffect(() => {
    const fetchProduct = async () => {
      // Replace this with your actual data fetching logic (e.g., from API)
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <main className="p-4">
        <div className="grid md:grid-cols-2 gap-8">
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-4">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <Button text="Add to Cart" onClick={() => alert('Product added to cart')} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
