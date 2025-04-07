const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { validateProduct } = require("../middleware/validation");
const { validationResult } = require("express-validator");

router.post("/", validateProduct, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}, productController.createProduct);

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

module.exports = router;
