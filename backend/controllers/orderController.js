const { Order, OrderItem, Product } = require("../models");

// POST /orders
exports.createOrder = async (req, res) => {
  const { userId, cartItems, totalAmount } = req.body;
  try {
    const order = await Order.create({ userId, totalAmount, status: "Processing" });

    const items = cartItems.map((item) => ({
      orderId: order.id,
      productId: item.id,
      quantity: item.quantity,
      price: item.price,
    }));

    await OrderItem.bulkCreate(items);
    res.status(201).json({ message: "Order created", orderId: order.id });
  } catch (err) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

// GET /orders/:userId
exports.getUserOrders = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.findAll({
      where: { userId },
      include: [OrderItem],
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};
