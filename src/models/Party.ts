import { DataTypes, Model } from 'sequelize';

export class Party extends Model {
  id!: Number;
  name!: String;
}

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
