import { Transaction } from 'sequelize/types';
import { CommissionDeputies } from '../../../models/CommissionDeputies';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';

export const resolvers = {
  Commission: {
    deputies: (commission, _, { db }: { db: DbConnection }) => {
      return db.CommissionDeputies.findAll({
        where: { commission: commission.get('theme') },
      }).then((comissionDeputies: [CommissionDeputies]) => {
        const deputiesDNIs = [];
        comissionDeputies.forEach(({ depute }) => {
          deputiesDNIs.push(depute);
        });
        return db.Depute.findAll({ where: { person: deputiesDNIs } });
      });
    },
  },
  Mutation: {
    createCommission: (parent, { input }, { db }: { db: DbConnection }) =>
      db.sequelize.transaction(async (t: Transaction) => {
        const deputiesDni = input.deputies.split(',');
        delete input.deputies;
        const result = db.Commission.create(input, { transaction: t });
        const deputies = await db.Depute.findAll({ where: { person: deputiesDni } });

        // some deputies doesn't exist;
        if (deputiesDni.length !== deputies.length) return new Error();

        const createCommissions = deputiesDni.map(dni =>
            db.CommissionDeputies.create(
              {
                commission: input.theme,
                depute: dni,
              },
              {
                transaction: t,
              },
          ),
        );
        await Promise.all(createCommissions);

        return result;
      }),
  },
  Query: {
    commission: (parent, { theme }, { db }: { db: DbConnection }) =>
      db.Commission.findOne({ where: { theme } }),
    commissions: (parent, _, { db }) =>
      db.sequelize.transaction((t: Transaction) =>
        db.Commission.findAll({
          transaction: t,
        }),
      ),
  },
};
