const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// ✅ Use DATABASE_URL with SSL for Render
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: console.log,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// Test DB connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
})();

// Initialize all models
const db = {};
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file !== basename && file.endsWith(".js") && !file.startsWith(".")
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

// Apply associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Sync models
sequelize
  .sync({ alter: true }) // or { force: true }
  .then(() => console.log("✅ All models synced"))
  .catch((err) => console.error("❌ Sync failed:", err));

// Export
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
