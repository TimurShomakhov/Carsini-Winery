require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const apiLimiter = require("./middleware/rateLimiter");

const db = require("./models"); // 🧠 Dynamic import with all models
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// ✅ CORS config for local dev
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// ✅ Global Middleware
app.use(helmet());
app.use(express.json());

// ✅ Rate limiting (optional)
app.use("/api/orders", apiLimiter);
app.use("/api/users", apiLimiter);

// ✅ Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("Welcome to the Carsini Winery API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);

  try {
    await db.sequelize.authenticate();
    console.log("✅ Database connected successfully.");

    // 🟨 Ensure at least 1 product exists (for foreign key integrity)
    const count = await db.Product.count();
    if (count === 0) {
      await db.Product.create({
        name: "Starter Wine",
        description: "Default product for testing",
        price: 9.99,
        stock: 100,
        image: "starter.jpg",
        category: "Red",
      });
      console.log("✅ Dummy product created");
    }

    // ✅ Models auto-synced in models/index.js
    console.log("✅ All models synced via index.js");
  } catch (err) {
    console.error("❌ Failed to initialize database:", err);
  }
});
