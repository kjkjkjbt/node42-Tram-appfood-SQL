const { Like, User, Restaurant } = require('../model');

exports.likeRestaurant = async (req, res) => {
    const { userId, restaurantId } = req.body;
    try {
        const like = await Like.create({ userId, restaurantId });
        res.status(201).json(like);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.dislikeRestaurant = async (req, res) => {
    const { userId, restaurantId } = req.body;
    try {
        const result = await Like.destroy({
            where: { userId, restaurantId }
        });
        res.status(200).json({ message: 'Unliked successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getLikesByRestaurant = async (req, res) => {
    const { restaurantId } = req.params;
    try {
        const likes = await Like.findAll({
            where: { restaurantId },
            include: [User]
        });
        res.status(200).json(likes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getLikesByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const likes = await Like.findAll({
            where: { userId },
            include: [Restaurant]
        });
        res.status(200).json(likes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
