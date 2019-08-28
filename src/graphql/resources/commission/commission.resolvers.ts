import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';

export const resolvers = {
  Commission: {
    deputies: (commission, _, { db }: {db: DbConnection}) =>
      (<any>db.CommissionDeputies).findAll({ where: { commission: commission.get('id') } }),
  },

  Mutation: {
    createCommission: (parent, { input }, { db }: { db: DbConnection }) => {
      return  db.sequelize.transaction((t: Transaction) => {
        const deputiesDni:[String]  = input.deputies.split(',');
        delete input.deputies;
        const commission = (<any>db.Commission).create(input, { transaction: t });

        for (const dni in deputiesDni) {
          (<any>db.CommissionDeputies).create(
            { depute: dni, commission: commission.theme },
            { transaction: t },
            );
        }

        return commission;
      });
    },

  },
  Query: {
    commission: (parent, { theme }, { db }:{ db: DbConnection }) =>
      (<any>db.Depute).findOne({ where: { theme } }),
    commissions: (parent, _, { db }) =>
      db.sequelize.transaction((t: Transaction) =>
        db.Commission.findAll({
          transaction: t,
        }),
      ),
  },

};
