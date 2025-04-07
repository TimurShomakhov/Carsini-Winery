require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet"); // ✅ Helmet for security
const apiLimiter = require("./middleware/rateLimiter"); // ✅ Rate limiter

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reviewRoutes = require("./routes/reviewRoutes"); // ✅ Review route

const app = express();

// ✅ Global Middleware
app.use(helmet()); // 🛡️ Add Helmet first
app.use(express.json());
app.use(cors());

// ✅ Apply limiter globally (uncomment to enable globally)
// app.use(apiLimiter);

// ✅ OR apply limiter only to sensitive routes
app.use("/api/auth", apiLimiter);
app.use("/api/orders", apiLimiter);

// ✅ Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Carsini Winery API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
