import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';

export const resolvers = {
  Mutation: {
    createPerson: (parent, { input }, { db }: { db: DbConnection }) =>
      db.sequelize.transaction(async (t: Transaction) =>  {
        const state = await db.State.findOne({ where: { minemonic: input.state } });
        input.state = state.id;
        return db.Person.create(input, { transaction: t });
      }),
  },
  Person: {
    state: (person, args, { db } : { db: DbConnection }) =>
      db.State.findByPk(person.get('state')),
  },
  Query: {
    person: (parent, { dni }, { db }) =>
      !!dni ? db.sequelize.transaction((t: Transaction) =>
            db.User.findOne(
              {
                where: { dni },
              },
              {
                transaction: t,
              },
            ),
          )
        : {},
  },
};
