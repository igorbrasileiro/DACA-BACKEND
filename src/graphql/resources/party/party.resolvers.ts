import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';

export const resolvers = {
  Mutation: {
    createParty: (parent, { input }, { db }: { db: DbConnection }) =>
      db.sequelize.transaction((t: Transaction) =>
        db.Party.create(input, { transaction: t }),
      ),
  },
  Query: {
    parties: (parent, _, { db }) =>
      db.sequelize.transaction((t: Transaction) =>
        db.Party.findAll({
          transaction: t,
        }),
      ),
  },
};
