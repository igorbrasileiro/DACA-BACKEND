import { DataTypes, Model, BuildOptions } from 'sequelize';

export interface CommissionDeputies extends Model {
  id: Number;
  depute: String;
  commission: String;
}

export type CommissionDeputiesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): CommissionDeputies;
};

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
