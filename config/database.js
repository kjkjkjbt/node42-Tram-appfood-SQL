const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_food', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
