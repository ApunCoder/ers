const express = require('express');
const router = express.Router(); 
const reviewController = require('../controllers/review_controller');

// rote for setting up the new review
router.get('/newReview/:id' , reviewController.newReview);

module.exports = router;