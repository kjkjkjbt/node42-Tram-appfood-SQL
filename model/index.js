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

// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('SocialNetwork', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Image = require('./image')(sequelize, DataTypes);
const Post = require('./post')(sequelize, DataTypes);
const Comment = require('./comment')(sequelize, DataTypes);
const PostImage = require('./postImage')(sequelize, DataTypes);
const UserImage = require('./userImage')(sequelize, DataTypes);

module.exports = {
    sequelize,
    User,
    Image,
    Post,
    Comment,
    PostImage,
    UserImage
};
