import { UserSequelize, User } from './User';
import { Sequelize } from 'sequelize';
import { DbConnection } from '../interfaces/DbConnectionInterface';
import { State, StateSequelize } from './State';
import { Depute, DeputeSequelize } from './Depute';
import { Party, PartySequelize } from './Party';
import { LawProject, LawProjectSequelize } from './LawProject';
import { Commission, CommissionSequelize } from './Commission';
import { CommissionDeputies, CommissionDeputiesSequelize } from './CommissionDeputies';

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

  Depute.init(DeputeSequelize, { sequelize });
  db['Depute'] = Depute;

  Party.init(PartySequelize, { sequelize });
  db['Party'] = Party;

  Commission.init(CommissionSequelize, { sequelize });
  db['Commission'] = Commission;

  LawProject.init(LawProjectSequelize, { sequelize });
  db['LawProject'] = LawProject;

  CommissionDeputies.init(CommissionDeputiesSequelize, { sequelize });
  db['CommissionDeputies'] = CommissionDeputies;

  db['sequelize'] = sequelize;
}

export default <DbConnection>db;
