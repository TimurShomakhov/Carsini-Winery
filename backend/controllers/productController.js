const { Product } = require("../models");

// POST /products
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, image, stock, category } = req.body;

    if (!name || !price || !stock || !category) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      image,
      stock,
      category,
    });

    res.status(201).json(newProduct);
  } catch (err) {
    console.error("❌ Failed to create product:", err);
    res.status(500).json({ error: "Failed to create product" });
  }
};

// GET /products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// GET /products/:id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};
