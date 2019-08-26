import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';

export const resolvers = {
  Mutation: {
    createUser: (parent, { input }, { db }: { db: DbConnection }) =>
      db.sequelize.transaction((t: Transaction) =>
        (<any>db.User).create(input, { transaction: t }),
      ),
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
};
