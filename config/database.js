const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;

/*
Before run, make sure mysql is in the computer.

> brew install mysql
> brew services start mysql

configure the password
> mysql_secure_installation

enter the sql server
> mysql -u root -p

create database
> CREATE DATABASE your_database_name;

*/
