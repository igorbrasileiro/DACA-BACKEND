import { Transaction } from 'sequelize/types';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';
import { LawProject } from '../../../models/LawProject';
import { Party } from '../../../models/Party';
import { Person } from '../../../models/Person';
import { Depute } from '../../../models/Depute';
import { CommissionDeputies } from '../../../models/CommissionDeputies';

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
    voteLawProject: (parent, { input }, { db }: {db: DbConnection}) => {
      return db.sequelize.transaction(async (t: Transaction) => {
        const lp: LawProject = await db.LawProject.findOne({ where: { code: input.code } });
        const baseParties: Party[]  = await db.Party.findAll();
        const partiesName: String[] = [];
        baseParties.forEach(party => {
          partiesName.push(party.name);
        });
        let awe: number = 0;
        let against: number = 0;
        if (lp.situation !== 'Em Votação') {
          return new Error();
        }

        const deputies: CommissionDeputies[] = await db.CommissionDeputies.findAll(
          { where: { commission: 'ccjc' } },
        );
        for (const depute of deputies) {
          const dni: String = depute.depute;
          const person: Person =  await db.Person.findOne({ where: { dni: `${dni}` } });
          if ((input.status === 'governista' && partiesName.includes(`${person.party}`)) ||
              (input.status === 'oposição' && !partiesName.includes(`${person.party}`))) {
            awe = awe + 1;
          } else {
            against = against + 1;
          }
        }
        const result: String = Math.floor(deputies.length / 2) < awe ? 'APROVADA' : 'REJEITADA';
        await lp.update({ situation: result });
        return {
          against,
          awe,
          result,
        };
      });
    },
  },
  Query: {
    lawProject: (parent, { code }, { db }) =>
      db.LawProject.findOne({ where: { code } }),
  },
};
