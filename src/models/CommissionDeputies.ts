import { DataTypes, Model } from 'sequelize';

export class CommissionDeputies extends Model {
  id!: Number;
  depute!: Number;
  commission!: Number;
}

export const CommissionDeputiesSequelize = {
  commission: {
    allowNull: false,
    type: DataTypes.BIGINT,
  },
  depute: {
    allowNull: false,
    type: DataTypes.BIGINT,
  },
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },

};
