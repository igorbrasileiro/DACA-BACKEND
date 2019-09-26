import { Transaction } from 'sequelize/types';
import { getToken } from '../../../middleware/auth';

export const resolvers = {
  Query : {
    createToken: (parent, { dni, password }, { db }) => {
      return db.sequelize.transaction(async (t: Transaction) => {
        const token = await getToken(dni, password,  db);

        if (token) {
          return token;
        }

        throw new Error('Invalid DNI or Password');
      });
    },
  },
};
