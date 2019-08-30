import {
  typeDefs as PersonTypes,
  queries as PersonQueries,
  mutations as PersonMutations,
} from './resources/person/person.schema';

import {
  typeDefs as PartyTypes,
  queries as PartyQueries,
  mutations as PartyMutation,
} from './resources/party/party.schema';

import {
  typeDefs as CommissionTypes,
  queries as CommissionQueries,
  mutations as CommissionMutation,
} from './resources/commission/commission.schema';

import { typeDefs as StateTypes } from './resources/state/state.schema';

import {
  typeDefs as DeputeTypes,
  queries as DeputeQueries,
  mutation as DeputeMutations,
} from './resources/depute/depute.schema';

import {
  typeDefs as LawProjectTypes,
  queries as LawProjectQueries,
  mutations as LawProjectMutations,
} from './resources/lawProject/lawProject.schema';
import { from } from 'apollo-link';
const types = `
  ${StateTypes}
  ${PersonTypes}
  ${DeputeTypes}
  ${PartyTypes}
  ${CommissionTypes}
  ${LawProjectTypes}
`;

const queries = `
  type Query {
    ${PersonQueries}
    ${DeputeQueries}
    ${PartyQueries}
    ${CommissionQueries}
    ${LawProjectQueries}
  }
`;

const mutations = `
  type Mutation {
    ${PersonMutations}
    ${DeputeMutations}
    ${PartyMutation}
    ${CommissionMutation}
    ${LawProjectMutations}
  }
`;

export const typeDefs = `
  ${types}
  ${queries}
  ${mutations}
`;
