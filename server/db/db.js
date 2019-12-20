const Sequelize = require('sequelize');

const connectionUrl =
  process.env.DATABASE_URL ||
  `postgres://localhost:5432/${process.env.DB_NAME}`;

const db = new Sequelize(connectionUrl);

module.exports = db;
