import { Model, DataTypes } from 'sequelize';

export class Product extends Model {
  id: string; // id is an auto-generated UUID
  name: string;
  price: string; // DOUBLE is a string to preserve floating point precision
  archived?: boolean; // is false by default
  createdAt?: string;
  updatedAt?: string;
}

export const ProductSequelize = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
  },
  name: {
    allowNull: false,
    type: new DataTypes.STRING(128),
  },
  price: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
};
