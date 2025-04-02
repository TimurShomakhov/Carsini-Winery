const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: console.log, // Show SQL queries for debugging
  }
);

// Test DB connection
const testDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};
testDB();

// Load models
const Product = require("./product")(sequelize, Sequelize.DataTypes);
const Review = require("./review")(sequelize, Sequelize.DataTypes);

// Setup associations
Product.associate?.({ Review });
Review.associate?.({ Product });

// ✅ Sync models to DB (important!)
sequelize.sync({ alter: true }) // or force: true in dev only
  .then(() => console.log("✅ Tables synced"))
  .catch(err => console.error("❌ Sync failed:", err));

// Export
module.exports = {
  sequelize,
  Sequelize,
  Product,
  Review,
};
