import { DataTypes, Model } from 'sequelize';

export class Depute extends Model {
  person!: Number;
  createdAt!: Date;
  laws!: Number;
}

export const DeputeSequelize = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  laws: {
    allowNull: false,
    defaultValue: 0,
    type: DataTypes.INTEGER,
  },
  person: {
    allowNull: false,
    type: DataTypes.BIGINT,
  },
};
