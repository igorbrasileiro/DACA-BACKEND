import { PersonModelStatic, PersonSequelize } from './Person';
import { Sequelize } from 'sequelize';
import { DbConnection } from '../interfaces/DbConnectionInterface';
import { StateSequelize, StateModelStatic } from './State';
import {  DeputeSequelize, DeputeModelStatic } from './Depute';
import { PartySequelize, PartyModelStatic } from './Party';
import { LawProjectSequelize, LawProjectModelStatic } from './LawProject';
import { CommissionSequelize, CommissionModelStatic } from './Commission';
import { CommissionDeputiesSequelize, CommissionDeputiesModelStatic } from './CommissionDeputies';

const env = process.env.NODE_ENV || 'development';
let config = require('../config/config.json')[env];
let db: DbConnection = null;

if (!db) {
  db = { sequelize: null };

  config = Object.assign({}, config);
  config['seeders-path'] = './seeders';
  config['migrations-path'] = './migrations';

  const sequelize: Sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );

  db['State'] = <StateModelStatic>sequelize.define(
    'State',
    StateSequelize,
    { freezeTableName: true, timestamps: false },
  );

  db['Person'] = <PersonModelStatic>sequelize.define('Person', PersonSequelize);

  db['Depute'] = <DeputeModelStatic>sequelize.define('Depute', DeputeSequelize);

  db['Party'] = <PartyModelStatic>sequelize.define('Party', PartySequelize);

  db['Commission'] = <CommissionModelStatic>sequelize.define('Commission', CommissionSequelize);

  db['LawProject'] = <LawProjectModelStatic>sequelize.define('LawProject', LawProjectSequelize);

  db['CommissionDeputies'] = <CommissionDeputiesModelStatic>sequelize.define(
    'CommissionDeputies',
    CommissionDeputiesSequelize,
  );

  db['sequelize'] = sequelize;
}

export default db;
