// const Sequelize = require('sequelize');
// const sequelize = require('../config/database');

// const User = require('./user')(sequelize, Sequelize);
// const Restaurant = require('./restaurant')(sequelize, Sequelize);
// const Like = require('./like')(sequelize, Sequelize);
// const Review = require('./review')(sequelize, Sequelize);
// const Order = require('./order')(sequelize, Sequelize);

// // Associations
// User.hasMany(Like);
// User.hasMany(Review);
// User.hasMany(Order);

// Restaurant.hasMany(Like);
// Restaurant.hasMany(Review);
// Restaurant.hasMany(Order);

// Like.belongsTo(User);
// Like.belongsTo(Restaurant);

// Review.belongsTo(User);
// Review.belongsTo(Restaurant);

// Order.belongsTo(User);
// Order.belongsTo(Restaurant);

// module.exports = {
//     sequelize,
//     User,
//     Restaurant,
//     Like,
//     Review,
//     Order
// };

// // models/index.js
// const { Sequelize, DataTypes } = require('sequelize');
// const postimage = require('./postimage');
// const sequelize = new Sequelize('SocialNetwork', 'root', 'password', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// const Image = require('./image')(sequelize, DataTypes);
// const Post = require('./post')(sequelize, DataTypes);
// const Comment = require('./comment')(sequelize, DataTypes);
// const UserImage = require('./userImage')(sequelize, DataTypes);

// module.exports = {
//     sequelize,
//     User,
//     Image,
//     Post,
//     Comment,
//     UserImage,
//     postimage
// };

// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('SocialNetwork', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = require('./user')(sequelize, DataTypes);
const Image = require('./image')(sequelize, DataTypes);
const Post = require('./post')(sequelize, DataTypes);
const Comment = require('./comment')(sequelize, DataTypes);
const UserImage = require('./userImage')(sequelize, DataTypes);
const Like = require('./like')(sequelize, DataTypes);
const Review = require('./review')(sequelize, DataTypes);
const Order = require('./order')(sequelize, DataTypes);
const Restaurant = require('./restaurant')(sequelize, DataTypes);
const PostImage = require('./postImage')(sequelize, DataTypes);

// Define relationships
User.hasMany(Image, { foreignKey: 'nguoi_dung_id' });
Image.belongsTo(User, { foreignKey: 'nguoi_dung_id' });

User.hasMany(Post, { foreignKey: 'nguoi_dung_id' });
Post.belongsTo(User, { foreignKey: 'nguoi_dung_id' });

Post.hasMany(Comment, { foreignKey: 'bai_dang_id' });
Comment.belongsTo(Post, { foreignKey: 'bai_dang_id' });

User.hasMany(Comment, { foreignKey: 'nguoi_dung_id' });
Comment.belongsTo(User, { foreignKey: 'nguoi_dung_id' });

Post.hasMany(PostImage, { foreignKey: 'bai_dang_id' });
PostImage.belongsTo(Post, { foreignKey: 'bai_dang_id' });

User.belongsToMany(Image, { through: UserImage, foreignKey: 'nguoi_dung_id' });
Image.belongsToMany(User, { through: UserImage, foreignKey: 'anh_id' });

module.exports = {
    sequelize,
    User,
    Image,
    Post,
    Comment,
    PostImage,
    UserImage
};
