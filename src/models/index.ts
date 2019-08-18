import { Product, ProductSequelize } from './Product';
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

  Product.init(ProductSequelize, { sequelize, tableName: 'product' });

  db['sequelize'] = sequelize;
}

Product.create({ name: 'Teste', price: '10' });

Product.findAll({ where: { name: 'Teste' } });

export default <DbConnection>db;
