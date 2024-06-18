const { Order, User, Restaurant } = require('../model');

exports.addOrder = async (req, res) => {
    const { userId, restaurantId, foodItem, quantity } = req.body;
    try {
        const order = await Order.create({ userId, restaurantId, foodItem, quantity });
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
