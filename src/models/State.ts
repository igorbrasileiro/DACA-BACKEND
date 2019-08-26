import { DataTypes, Model } from 'sequelize';

export class State extends Model {
  id!: Number;
  name!: String;
  minemonic!: String;
}

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
