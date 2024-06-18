const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);
const Restaurant = require('./restaurant')(sequelize, Sequelize);
const Like = require('./like')(sequelize, Sequelize);
const Review = require('./review')(sequelize, Sequelize);
const Order = require('./order')(sequelize, Sequelize);

// Associations
User.hasMany(Like);
User.hasMany(Review);
User.hasMany(Order);

Restaurant.hasMany(Like);
Restaurant.hasMany(Review);
Restaurant.hasMany(Order);

Like.belongsTo(User);
Like.belongsTo(Restaurant);

Review.belongsTo(User);
Review.belongsTo(Restaurant);

Order.belongsTo(User);
Order.belongsTo(Restaurant);

module.exports = {
    sequelize,
    User,
    Restaurant,
    Like,
    Review,
    Order
};
