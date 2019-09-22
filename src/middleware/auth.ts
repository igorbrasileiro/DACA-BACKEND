import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcryptjs';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { DbConnection } from '../interfaces/DbConnectionInterface';

export const params = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'ALTERAR',
};

export const getToken = async (dni: string, db: DbConnection) => {
  if (dni) {
    const person = await db.Person.findOne({ where: { dni } });
    if (person) {
      const payload = {
        dni: person.dni,
      };
      const token = sign(payload, params.secretOrKey);
      return token;
    }
  }
  return null;
};
