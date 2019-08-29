import { Transaction } from 'sequelize/types';
import { Depute } from '../../../models/Depute';
import { CommissionDeputies } from '../../../models/CommissionDeputies';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';

export const resolvers = {
  Commission: {
    deputies: (commission, _, { db }: { db: DbConnection }) => {
      return (<any>db.CommissionDeputies).findAll({
        where: { commission: commission.get('theme') },
      }).then((comissionDeputies: [CommissionDeputies]) => {
        const deputiesDNIs = [];
        comissionDeputies.forEach(({ depute }) => {
          deputiesDNIs.push(depute);
        });
        return (<any>db.Depute).findAll({ where: { person: deputiesDNIs } });
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
              t.rollback;
              return new Error();
            }
            for (const dni of deputiesDni) {
              (<any>db.CommissionDeputies).create({
                commission: input.theme,
                depute: dni,
              });
            }
            return result;
          });
      });
    },
  },
  Query: {
    commission: (parent, { theme }, { db }: { db: DbConnection }) =>
      (<any>db.Commission).findOne({ where: { theme } }),
    commissions: (parent, _, { db }) =>
      db.sequelize.transaction((t: Transaction) =>
        db.Commission.findAll({
          transaction: t,
        }),
      ),
  },
};
