import { Model } from 'sequelize';
import { User } from '../models/User';
import { State } from '../models/State';

export interface BaseModelInterface extends Model {
  User?: User;
  State?: State;

  // atributo opcional, serve para criar metodos de instancias
  prototype?;
  associate?(models: Model): void;
}
