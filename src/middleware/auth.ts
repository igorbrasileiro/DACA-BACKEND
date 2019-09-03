import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcryptjs';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { authenticate, initialize, use } from 'passport';
import db from '../models';
import { Person } from '../models/Person';

const params = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'ALTERAR',
};

export default () => {
  const strategy = new Strategy(params, (payload, next) => {
    console.log('entrei');
    return db.Person.findByPk(payload.id).then((person: Person) => {
      return next(null, { person });
    }).catch(console.log);
  });
  use(strategy);
  return {
    authenticate: authenticate('jwt', { session: false }),
    initialize: () => initialize(),
  };
};
