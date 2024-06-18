const express = require('express');
const router = express.Router();
const likesController = require('../controller/likeController');
const like = require('../model/like');

router.post('/like', likesController.likeRestaurant);
router.post('/unlike', likesController.dislikeRestaurant);
router.get('/restaurant/:restaurantId', likesController.getLikesByRestaurant);
router.get('/user/:userId', likesController.getLikesByUser);

module.exports = router;
