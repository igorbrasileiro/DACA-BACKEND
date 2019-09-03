import { DataTypes, Model, BuildOptions } from 'sequelize';

export interface Depute extends Model {
  person: Number;
  createdAt: Date;
  laws: Number;
}

export type DeputeModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Depute;
};

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
    unique: true,
  },
};
