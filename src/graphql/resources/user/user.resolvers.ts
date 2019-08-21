import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';

export const resolvers = {
  Query: {
    user: (parent, { id }, { db }) => db.User.findByPk(id),
  },
  Mutation: {
    createUser: (parent, { input }, { db }: { db: DbConnection }) =>
      db.sequelize.transaction((t: Transaction) => {
        return (<any>db.User).create(input, { transaction: t }); // remove any cast
      }),
  },
};
