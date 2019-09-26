import { Transaction } from 'sequelize/types';
import { hashSync } from 'bcryptjs';
import { SALT } from '../../../middleware/auth';
import { compose } from '../../composable/composable.resolver';
import { authResolvers } from '../../composable/auth.resolver';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';

export const resolvers = {
  Mutation: {
    createPerson: (parent, { input }, { db }: { db: DbConnection }) => {
      return db.sequelize.transaction(async (t: Transaction) =>  {
        const state = await db.State.findOne({ where: { minemonic: input.state } });
        if (!state) {
          return new Error();
        }

        input.state = state.id;
        input.password = hashSync(input.password, SALT);

        return db.Person.create(input, { transaction: t });
      });
    },
  },
  Person: {
    party: (person, args, { db } : { db: DbConnection }) =>
      db.Party.findByPk(person.get('party')),
    state: (person, args, { db } : { db: DbConnection }) =>
      db.State.findByPk(person.get('state')),
  },
  Query: {
    person: compose(...authResolvers)((parent, {}, { db, dni }) => {
      return db.sequelize.transaction((t: Transaction) =>
        db.Person.findOne({ where: { dni }, transaction: t }),
      );
    }),
  },
};
