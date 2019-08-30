import { DataTypes, Model, BuildOptions } from 'sequelize';

export interface Person extends Model {
  readonly id: Number;
  readonly dni: Number;
  name: String;
  state: String; // maybe reference
  party: Number;
  preferences?: String;
}

export type PersonModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Person;
};

export const PersonSequelize = {
  dni: {
    allowNull: false,
    type: new DataTypes.STRING(64),
    unique: true,
    validate : {
      is: /[0-9]*\-[0-9]*/,
    },
  },
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  name: {
    allowNull: false,
    type: new DataTypes.STRING(128),
  },
  party: {
    allowNull: true,
    type: new DataTypes.INTEGER,
  },
  preferences: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  state: {
    allowNull: false,
    type: new DataTypes.STRING(2),
  },
};
