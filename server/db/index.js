//This is for SQLite

const path = require('path');
const Sequelize = require('sequelize');
const DB_NAME = process.env.DB_NAME || 'file-server.db3';

const dbStorage = path.normalize(path.join(__dirname, '../db/' + DB_NAME));

console.log(`Database is at: ${dbStorage}`);

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbStorage,
    logging: false
});


//This is for MySQL

// const { Sequelize } = require('sequelize');

// const DB_NAME = process.env.DB_NAME;
// const DB_USER = process.env.DB_USER;
// const DB_PWD = process.env.DB_PWD;
// const DB_SERVER = process.env.DB_SERVER;

// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
//     dialect: 'mariadb',
//     host: DB_SERVER,
//     logging: false //default is console.log
// });


module.exports = sequelize;