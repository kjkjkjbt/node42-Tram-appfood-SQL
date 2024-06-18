module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        // Order details
        foodItem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Order;
};
