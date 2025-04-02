const db = require('../models');
const Review = db.Review;


// GET /reviews/:productId
exports.getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.findAll({
      where: { productId },
      order: [['createdAt', 'DESC']],
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

// POST /reviews
exports.createReview = async (req, res) => {
  try {
    const { productId, userId, rating, comment } = req.body;

    if (!rating || !comment || !productId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const review = await Review.create({ productId, userId, rating, comment });
    res.status(201).json(review);
  } catch (err) {
    console.error("❌ Review creation error:", err); // ADD THIS LINE
    res.status(500).json({ error: 'Failed to submit review' });
  }  
};
