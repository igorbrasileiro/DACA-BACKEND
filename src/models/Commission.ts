import { DataTypes, Model, BuildOptions } from 'sequelize';

export interface Commission extends Model {
  id: Number;
  theme: String;
}

export type CommissionModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Commission;
};

export const CommissionSequelize = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  theme: {
    allowNull: false,
    type: new DataTypes.STRING(128),
    unique: true,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Not Empty Theme',
      },
      notNull: {
        args: true,
        msg: 'Not Null Theme',
      },
    },
  },
};
