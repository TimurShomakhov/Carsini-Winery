const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authenticate = require("../middleware/authMiddleware");

router.post("/", authenticate, orderController.createOrder);
router.get("/:userId", authenticate, orderController.getUserOrders);

module.exports = router;
