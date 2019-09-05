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

export const getToken = (req, res, next) => {
  const payload = {
    dni: 'dni',
  };
  const token = sign(payload, params.secretOrKey);
  res.json({ token });
}

export default () => {
  const strategy = new Strategy(params, (payload, done) => {
    console.log('entrei', payload);
    // return db.Person.findByPk(payload.id).then((person: Person) => {
    //   return next(null, { person });
    // }).catch(console.log);
    return done(null, payload);
  });
  use(strategy);
  return {
    authenticate: () => authenticate('jwt', { session: false }),
    initialize: () => initialize(),
  };
};
