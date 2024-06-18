const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_food', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
