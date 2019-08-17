import * as path from 'path';
import * as Sequelize from 'sequelize';
/* tslint:disable */

let config = require('./config/config.json')['test'];
const sequelize = new Sequelize.Sequelize({
  ...config,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('autenticado');
  })
  .catch(() => {
    console.log('quebrou');
  });
