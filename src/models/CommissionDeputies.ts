import { DataTypes, Model } from 'sequelize';

export class CommissionDeputies extends Model {
  id!: Number;
  depute!: String;
  commission!: String;
}

export const CommissionDeputiesSequelize = {
  commission: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  depute: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
};
