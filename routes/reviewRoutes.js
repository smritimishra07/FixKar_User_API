const express = require('express');
const {
  submitReview,
  getReviews,
  deleteReview,
} = require('../controllers/reviewController');

const router = express.Router();

// Submit a review
router.post('/', submitReview);

// Get reviews for a specific service
router.get('/:serviceId', getReviews);

// Delete a review
router.delete('/deleteReview/:reviewId', deleteReview);

module.exports = router;
