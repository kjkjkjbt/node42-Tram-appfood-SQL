const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewController');

router.post('/add', reviewController.addReview);
router.get('/restaurant/:restaurantId', reviewController.getReviewByRestaurant);
router.get('/user/:userId', reviewController.getReviewsByUser);

module.exports = router;
