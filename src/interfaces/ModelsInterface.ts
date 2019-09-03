import { PersonModelStatic } from '../models/Person';
import { StateModelStatic } from '../models/State';
import { DeputeModelStatic } from '../models/Depute';
import { PartyModelStatic } from '../models/Party';
import { LawProjectModelStatic } from '../models/LawProject';
import { CommissionModelStatic } from '../models/Commission';
import { CommissionDeputiesModelStatic } from '../models/CommissionDeputies';
import { BaseModelInterface } from './BaseModelInterface';

export interface ModelsInterface extends BaseModelInterface {
  Person?: PersonModelStatic;
  State?: StateModelStatic;
  Depute?: DeputeModelStatic;
  Party?: PartyModelStatic;
  LawProject?: LawProjectModelStatic;
  Commission?: CommissionModelStatic;
  CommissionDeputies?: CommissionDeputiesModelStatic;
}
