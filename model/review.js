module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Review;
};
