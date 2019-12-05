import { DataTypes, Model, BuildOptions } from 'sequelize';

export interface Party extends Model {
  id: Number;
  name: String;
}

export type PartyModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Party;
};

export const PartySequelize = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  name: {
    allowNull: false,
    type: new DataTypes.STRING(128),
    unique: true,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Not Empty Name',
      },
      notNull: {
        args: true,
        msg: 'Not Null Name',
      },
    },
  },
};
