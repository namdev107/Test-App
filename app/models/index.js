const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// console.log("env ==>>", env);
console.log("dbConfig =--------=>>", dbConfig);
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
});

const db = {};

db.employeedetails = require('./employeedetails')(sequelize, Sequelize);

module.exports = db;

