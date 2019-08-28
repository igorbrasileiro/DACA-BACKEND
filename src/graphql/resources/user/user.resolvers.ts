import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';

export const resolvers = {
  Mutation: {
    createUser: (parent, { input }, { db }: { db: DbConnection }) =>
      db.sequelize.transaction(async (t: Transaction) =>  {
        const state = await (<any>db.State).findOne({ where: { minemonic: input.state } });
        input.state = state.id;
        return (<any>db.User).create(input, { transaction: t });
      }),
  },
  Query: {
    user: (parent, { dni, id }, { db }) =>
      !!dni || !!id
        ? db.sequelize.transaction((t: Transaction) =>
            db.User.findOne(
              {
                where: {
                  ...(!!id ? { id } : {}),
                  ...(!!dni ? { dni } : {}),
                },
              },
              {
                transaction: t,
              },
            ),
          )
        : {},
  },
  User: {
    state: (user, args, { db } : { db: DbConnection }) =>
      (<any>db.State).findByPk(user.get('state')),
  },
};
