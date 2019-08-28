import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';
import { User } from '../../../models/User';

export const resolvers = {
  Depute: {
    person: (depute, _, { db }:{ db: DbConnection }) =>
      (<any>db.User).findOne({ where: { dni: depute.get('person') } }),
  },
  Mutation: {
    createDepute: (parent, { input }, { db }:{ db: DbConnection }) => {
      const { dni, createdAt } = input;
      return db.sequelize.transaction((t: Transaction) => {
        return (<any>db.User).findOne({ where: { dni } }).then((user: User) => {
          if (!user || createdAt.length !== 8) {
            return new Error(); // invalid input
          }

          const formatedCreatedAt = new Date(
              createdAt.slice(4, 8),
              Number(createdAt.slice(2, 4)) - 1, // date month is indexed by 0
              createdAt.slice(0, 2),
            );
          const dateNow = new Date();

          if (formatedCreatedAt > dateNow) {
            return new Error(); // invalid date
          }

          return (<any>db.Depute).create(
            {
              createdAt: formatedCreatedAt,
              person: user.get('dni'),
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
    depute: (parent, { dni }, { db }:{ db: DbConnection }) =>
      (<any>db.Depute).findOne({ where: { person: dni } }),
  },
};
