import { Model } from 'sequelize';
import { User } from '../models/User';
import { State } from '../models/State';
import { Party } from '../models/Party';

export interface BaseModelInterface extends Model {
  User?: User;
  State?: State;
  Party?: Party;

  // atributo opcional, serve para criar metodos de instancias
  prototype?;
  associate?(models: Model): void;
}
