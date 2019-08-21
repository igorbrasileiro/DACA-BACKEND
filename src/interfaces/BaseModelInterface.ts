import { Model } from 'sequelize';
import { User } from '../models/User';

export interface BaseModelInterface extends Model {
  User?: User;

  // atributo opcional, serve para criar metodos de instancias
  prototype?;
  associate?(models: Model): void;
}
