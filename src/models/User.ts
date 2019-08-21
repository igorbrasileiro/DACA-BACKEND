import { DataTypes, Model } from 'sequelize';

export class User extends Model {
  id!: Number;
  name!: String;
  dni!: Number;
  state!: String; // maybe reference
  party?: String;
}

export const UserSequelize = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: new DataTypes.STRING(128),
  },
  dni: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
  },
  state: {
    allowNull: false,
    type: new DataTypes.STRING(2),
  },
  party: {
    allowNull: true,
    type: new DataTypes.STRING(128),
  },
};
