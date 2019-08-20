import * as Sequelize from 'sequelize';
import { BaseModelInterface } from './BaseModelInterface';

export interface DbConnection extends BaseModelInterface {
  sequelize: Sequelize.Sequelize; // caso der error pode ser aqui o problema
}
