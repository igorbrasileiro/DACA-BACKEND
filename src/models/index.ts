import { UserSequelize, User } from './User';
import { Sequelize } from 'sequelize';
import { DbConnection } from '../interfaces/DbConnectionInterface';
import { State, StateSequelize } from './State';
import { Party, PartySequelize } from './Party';
import {Commission, CommissionSequelize} from './Commission'

const env = process.env.NODE_ENV || 'development';
let config = require('../config/config.json')[env];
let db = null;

if (!db) {
  db = {};

  config = Object.assign({}, config);
  config['seeders-path'] = './seeders';
  config['migrations-path'] = './migrations';

  const sequelize: Sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );

  User.init(UserSequelize, { sequelize });
  db['User'] = User;

  State.init(StateSequelize, { sequelize, freezeTableName: true, timestamps: false });
  db['State'] = State;

  Party.init(PartySequelize, { sequelize });
  db['Party'] = Party;

  Commission.init(CommissionSequelize, {sequelize});
  db['Commission'] = Commission;

  db['sequelize'] = sequelize;
}

export default <DbConnection>db;
