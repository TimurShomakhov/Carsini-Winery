const { Sequelize } = require("sequelize");
require("dotenv").config();

// Initialize Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

// Test the database connection
const testDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

testDB();

// ✅ Load models
const Product = require("./product")(sequelize, Sequelize.DataTypes);
const Review = require("./review")(sequelize, Sequelize.DataTypes); // ✅ ADD THIS LINE

// ✅ Setup associations
Product.associate?.({ Review });
Review.associate?.({ Product });

// ✅ Export sequelize and models
module.exports = {
  sequelize,
  Sequelize,
  Product,
  Review,
};
