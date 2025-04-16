require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const apiLimiter = require("./middleware/rateLimiter");

const db = require("./models");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// ✅ Serve static image files from /public
app.use("/images", express.static(path.join(__dirname, "public/images")));

// ✅ CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",                     // Local development
  "https://carsini-winery.vercel.app",        // ✅ Vercel frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// ✅ Global Middleware
app.use(helmet());
app.use(express.json());

// ✅ API Routes
app.use("/api/products", productRoutes);
app.use("/api/users", apiLimiter, userRoutes);
app.use("/api/orders", apiLimiter, orderRoutes);
app.use("/api/reviews", reviewRoutes);

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.send("Welcome to the Carsini Winery API 🍷");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    if (!db || !db.sequelize) {
      throw new Error("❌ Sequelize not initialized from models/index.js");
    }

    await db.sequelize.authenticate();
    console.log("✅ Database connected successfully.");

    // Optional: Seed one product if none exist
    const productCount = await db.Product.count();
    if (productCount === 0) {
      await db.Product.create({
        name: "Starter Wine",
        description: "Default product for testing",
        price: 9.99,
        stock: 100,
        image: "/images/starter-wine.webp",
        category: "Red",
      });
      console.log("✅ Dummy product created");
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
  }
};

startServer();
