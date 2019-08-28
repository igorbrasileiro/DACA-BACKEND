import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';

export const resolvers = {
  Mutation: {
    createCommission: (parent, { input }, { db }: { db: DbConnection }) => {
      return  db.sequelize.transaction((t: Transaction) => {
        const deputesDni:[String]  = input.deputes.split(',');
        delete input.deputes;
        return (<any>db.Commission).create(input, { transaction: t });
      });
    },

  },
  Query: {
    commissions: (parent, _, { db }) =>
      db.sequelize.transaction((t: Transaction) =>
        db.Commission.findAll({
          transaction: t,
        }),
      ),
  },
};
