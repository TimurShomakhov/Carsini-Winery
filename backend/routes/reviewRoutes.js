const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { validateReview } = require('../middleware/validation');
const { validationResult } = require('express-validator');

// GET all reviews for a product
router.get('/:productId', reviewController.getReviewsByProduct);

// POST a new review
router.post('/', validateReview, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}, reviewController.createReview);

module.exports = router;
