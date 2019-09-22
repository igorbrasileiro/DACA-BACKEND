import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';
import { Party } from '../../../models/Party';

export const resolvers = {
  Mutation: {
    createPerson: (parent, { input }, { db }: { db: DbConnection }) => {
      return db.sequelize.transaction(async (t: Transaction) =>  {
        const state = await db.State.findOne({ where: { minemonic: input.state } });
        if (!state) {
          return new Error();
        }
        input.state = state.id;
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
    person: (parent, { dni }, { db }) => {
      return db.sequelize.transaction((t: Transaction) =>
        db.Person.findOne(
          {
            where: { dni },
          },
          {
            transaction: t,
          },
        ),
      );
    },
  },
};
