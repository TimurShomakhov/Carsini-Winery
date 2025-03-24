import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    name: 'Red Wine',
    description: 'A fine red wine from the best vineyards.',
    price: 19.99,
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'White Wine',
    description: 'A refreshing white wine for every occasion.',
    price: 15.99,
    image: 'https://via.placeholder.com/300x200',
  },
  // Add more products as needed
];

const ProductListing = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductListing;
