import { QueryInterface } from 'sequelize/types';
import { StateSequelize } from '../models/State';

export const down = (queryInterface: QueryInterface) => queryInterface.dropTable('State');

export const up = (queryInterface: QueryInterface) =>
  queryInterface.createTable('State', StateSequelize);
