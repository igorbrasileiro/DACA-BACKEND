import { DataTypes, Model, BuildOptions } from 'sequelize';

export interface State extends Model {
  id: Number;
  minemonic: String;
  name: String;
}

export type StateModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): State;
};

export const StateSequelize = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  minemonic: {
    allowNull: false,
    type: new DataTypes.STRING(2),
    unique: true,
  },
  name: {
    allowNull: false,
    type: new DataTypes.STRING(64),
    unique: true,
  },
};
