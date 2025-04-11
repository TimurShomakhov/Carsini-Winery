const { body } = require('express-validator');

// 🔹 Register validation
exports.validateRegister = [
  body('name').isString().trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

// 🔹 Login validation
exports.validateLogin = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').exists().withMessage('Password is required'),
];

// 🔹 Review validation
exports.validateReview = [
  body('productId').isInt().withMessage('Product ID must be an integer'),
  body('userId').optional().isInt().withMessage('User ID must be an integer'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be 1-5'),
  body('comment').isString().trim().isLength({ min: 3 }).withMessage('Comment is too short'),
];

// 🔹 Product creation validation
exports.validateProduct = [
  body('name').isString().notEmpty().withMessage('Product name is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
  body('description').isString().notEmpty().withMessage('Description is required'),
  body('image').optional().isURL().withMessage('Image must be a valid URL'),
];

// 🔹 Order validation
exports.validateOrder = [
  body('cartItems').isArray({ min: 1 }).withMessage('Cart must contain items'),
  body('totalAmount').isFloat({ gt: 0 }).withMessage('Total amount must be positive'),
  body('shippingDetails').isObject().withMessage('Shipping details must be an object'),
];
