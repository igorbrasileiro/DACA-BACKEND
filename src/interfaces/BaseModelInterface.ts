import { Model } from 'sequelize';
import { User } from '../models/User';
import { State } from '../models/State';
import { Depute } from '../models/Depute';
import { Party } from '../models/Party';
import { Commission } from '../models/Commission';
import { CommissionDeputies } from '../models/CommissionDeputies';

export interface BaseModelInterface extends Model {
  User?: User;
  State?: State;
  Depute?: Depute;
  Party?: Party;
  Commission?: Commission;
  CommissionDeputies?: CommissionDeputies;

  // atributo opcional, serve para criar metodos de instancias
  prototype?;
  associate?(models: Model): void;
}
