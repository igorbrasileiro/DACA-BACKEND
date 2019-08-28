import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';
import { Depute } from '../../../models/Depute';
import { Commission } from '../../../models/Commission';

export const resolvers = {
  Commission: {
    deputies: (commission, _, { db }: { db: DbConnection }) => {
      return (<any>db.CommissionDeputies).findAll({
        where: { commission: commission.get('theme') },
      });
    },
  },

  Mutation: {
    createCommission: (parent, { input }, { db }: { db: DbConnection }) => {
      return db.sequelize.transaction((t: Transaction) => {
        const deputiesDni: [String] = input.deputies.split(',');
        delete input.deputies;
        const result = (<any>db.Commission).create(input, { transaction: t });
        return (<any>db.Depute)
          .findAll({ where: { person: deputiesDni } }, { transaction: t })
          .then((deputies: [Depute]) => {
            if (deputies.length !== deputiesDni.length) {
              t.rollback();
              return new Error();
            }
            for (const dni of deputiesDni) {
              (<any>db.CommissionDeputies).create({
                depute: dni,
                commission: input.theme,
              });
            }
            return result;
          });
      });
    },
  },
  Query: {
    commission: (parent, { theme }, { db }: { db: DbConnection }) =>
      (<any>db.Depute).findOne({ where: { theme } }),
    commissions: (parent, _, { db }) =>
      db.sequelize.transaction((t: Transaction) =>
        db.Commission.findAll({
          transaction: t,
        }),
      ),
  },
};
