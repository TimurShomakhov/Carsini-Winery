const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authenticate = require("../middleware/authMiddleware");
const { validateOrder } = require("../middleware/validation");
const { validationResult } = require("express-validator");

router.post("/", authenticate, validateOrder, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}, orderController.createOrder);

router.get("/:userId", authenticate, orderController.getUserOrders);

module.exports = router;
