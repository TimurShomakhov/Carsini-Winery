const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 text-xl font-semibold">${product.price}</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
