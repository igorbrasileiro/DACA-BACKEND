import { UserSequelize, User } from './User';
import { Sequelize } from 'sequelize';
import { DbConnection } from '../interfaces/DbConnectionInterface';

const env = process.env.NODE_ENV || 'development';
let config = require('../config/config.json')[env];
let db = null;

if (!db) {
  db = {};

  const operatorsAliases = false;

  config = Object.assign({ operatorsAliases }, config);

  const sequelize: Sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );

  User.init(UserSequelize, { sequelize });
  db['User'] = User;

  db['sequelize'] = sequelize;
}

export default <DbConnection>db;
