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

        if (lp.situation === 'Encerrada' || lp.currentLocal === 'plenario') return new Error();

        const historic: String[] = lp.historic ? lp.historic.split(',') : [];

        if (historic.length > 0) {
          const commissionsHistoric: String[] = historic.map(element =>
            element.substring(element.indexOf('(') + 1, element.indexOf(')')),
          );
          if (commissionsHistoric.includes(input.nextLocal) ||
              input.nextLocal === lp.currentLocal) {
            return new Error();
          }
        }

        const baseParties: Party[]  = await db.Party.findAll();
        const partiesName: String[] = [];

        baseParties.forEach(party => {
          partiesName.push(party.name);
        });

        const interests: String[] = lp.interest.split(',');
        let awe: number = 0;
        let against: number = 0;

        const deputies: CommissionDeputies[] = await db.CommissionDeputies.findAll(
          { where: { commission: `${lp.currentLocal}` } },
        );

        if (deputies.length === 0) return new Error();

        for (const depute of deputies) {
          const person: Person =  await db.Person.findOne({ where: { dni: `${depute.depute}` } });
          const preferences: String[] = person.preferences ? person.preferences.split(',') : [];
          const hasInterest: Boolean = (interests.some(element =>  preferences.includes(element)));
          if ((input.status === 'governista' && partiesName.includes(`${person.party}`)) ||
              (input.status === 'oposição' && !partiesName.includes(`${person.party}`)) ||
              (input.status === 'livre' && hasInterest)) {
            awe = awe + 1;
          } else {
            against = against + 1;
          }
        }

        const result: String = Math.floor(deputies.length / 2) < awe ? 'APROVADA' : 'REJEITADA';
        const situation: String = lp.conclusive ? 'Encerrada' : 'Em Votação';

        const newHistoric: String = lp.historic
          ? `${lp.historic}, ${result} (${lp.currentLocal})`
          : `${result} (${lp.currentLocal})`;
        await lp.update({ situation, currentLocal: input.nextLocal, historic: newHistoric });
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
