import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';

export const resolvers = {
  Query: {
    user: (parent, { id, dni }, { db }) =>
      !!dni || !!id
        ? db.User.findOne({ where: { ...(!!id ? { id } : {}), ...(!!dni ? { dni } : {}) } })
        : {},
  },
  Mutation: {
    createUser: (parent, { input }, { db }: { db: DbConnection }) =>
      db.sequelize.transaction((t: Transaction) => {
        return (<any>db.User).create(input, { transaction: t }); // remove any cast
      }),
  },
};
