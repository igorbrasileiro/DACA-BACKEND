import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';
import { User } from '../../../models/User';

export const resolvers = {
  Depute: {
    // person:
  },
  Mutation: {
    createDepute: (parent, { dni, createdAt }, { db }:{ db: DbConnection }) => {
      return db.sequelize.transaction((t: Transaction) => {
        return (<any>db.User).findOne({ where: { dni } }).then((user: User) => {
          if (!user) {
            return new Error();
          }
          if (createdAt.length !== 8) {
            return new Error();
          }
          const formatedCreatedAt = new Date(
              createdAt.slice(4, 8),
              createdAt.slice(2, 4),
              createdAt.slice(0, 2),
            );
          const dateNow = new Date();
          if (dateNow > formatedCreatedAt) {
            return new Error();
          }

          // console.log('asduasdhasudha', formatedCreatedAt);
          return (<any>db.Depute).create(
            {
              createdAt: formatedCreatedAt,
              person: user.id,
            },
            {
              transaction: t,
            },
          );
        });
      });
    },
  },
  Query: {
    // depute:
  },
};
