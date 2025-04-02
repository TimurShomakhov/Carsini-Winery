console.log("✅ reviewRoutes loaded");
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/:productId', reviewController.getReviewsByProduct);
router.post('/', reviewController.createReview);

module.exports = router;
