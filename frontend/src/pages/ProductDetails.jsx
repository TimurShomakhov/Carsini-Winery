import { useCart } from '../context/CartContext'; // Import useCart hook

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Access addToCart function from context

  useEffect(() => {
    const fetchProduct = async () => {
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
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-4">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <Button
              text="Add to Cart"
              onClick={() => addToCart(product)} // Add product to cart on click
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
