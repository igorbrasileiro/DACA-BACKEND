import { DataTypes, Model } from 'sequelize';

export class User extends Model {
  id!: Number;
  name!: String;
  dni!: Number;
  state!: String; // maybe reference
  party?: String;
  preferences?: String;
}

export const UserSequelize = {
  dni: {
    allowNull: false,
    type: DataTypes.BIGINT,
    unique: true,
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
    type: new DataTypes.STRING(128),
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
