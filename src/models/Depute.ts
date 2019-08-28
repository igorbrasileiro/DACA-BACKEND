import { DataTypes, Model } from 'sequelize';

export class Depute extends Model {
  person!: Number;
  createdAt!: Date;
}

export const DeputeSequelize = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  person: {
    allowNull: false,
    type: DataTypes.BIGINT,
  },
};
