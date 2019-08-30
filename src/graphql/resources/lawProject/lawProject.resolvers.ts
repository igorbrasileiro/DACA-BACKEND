import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';

export const resolvers = {
  LawProject: {
    depute: (lawProject, args, { db } : { db: DbConnection }) => {
      return db.Depute.findOne({
        where: { person: lawProject.get('depute') },
      });
    },
  },
  Mutation: {
    createLawProject: (parent, { input }, { db }: { db: DbConnection }) => {
      return db.sequelize.transaction(async (t: Transaction) => {
        const depute = await db.Depute.findOne({
          where: { person: input.depute },
        });
        const year: Number =
            input.year > new Date().getFullYear() || 1988 > input.year
            ?  undefined
            : input.year;
        const lawsProjects = await db.LawProject.findAll();
        const code: String = `PL ${lawsProjects.length + 1}/${year}`;
        const situation: String = 'Em Votação';
        input.depute = depute.person;
        input.year = year;
        input.code = code;
        input.situation = situation;
        return db.LawProject.create(input, { transaction: t });
      });
    },
  },
  Query: {
    lawProject: (parent, { code }, { db }) =>
      db.LawProject.findOne({ where: { code } }),
  },
};
