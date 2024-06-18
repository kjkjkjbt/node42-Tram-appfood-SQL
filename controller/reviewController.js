const { Review, User, Restaurant } = require('../model');

exports.addReview = async (req, res) => {
    const { userId, restaurantId, content, rating } = req.body;
    try {
        const review = await Review.create({ userId, restaurantId, content, rating });
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getReviewByRestaurant = async (req, res) => {
    const { restaurantId } = req.params;
    try {
        const reviews = await Review.findAll({
            where: { restaurantId },
            include: [User]
        });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getReviewsByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const reviews = await Review.findAll({
            where: { userId },
            include: [Restaurant]
        });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
