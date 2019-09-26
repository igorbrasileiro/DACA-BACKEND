import { sign } from 'jsonwebtoken';
import ENV from '../config/environment';
import { genSaltSync, compareSync } from 'bcryptjs';
import { ExtractJwt } from 'passport-jwt';
import { DbConnection } from '../interfaces/DbConnectionInterface';

export const params = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: ENV.SECRET_KEY, // process.env.SECRET_KEY
};

const SALT_FACTOR = ENV.SALT_FACTOR; // process.env.SALT_FACTOR
export const SALT = genSaltSync(SALT_FACTOR);

export const getToken = async (dni: string, password: string,  db: DbConnection) => {
  if (dni && password) {
    const person = await db.Person.findOne({ where: { dni } });
    if (person && compareSync(password, person.password)) {

      const payload = {
        dni: person.dni,
      };
      const token = sign(payload, params.secretOrKey);
      return token;
    }
  }
  return null;
};
