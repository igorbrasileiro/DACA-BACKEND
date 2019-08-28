import {
  typeDefs as UserTypes,
  queries as UserQueries,
  mutations as UserMutations,
} from './resources/user/user.schema';

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

const types = `
  ${StateTypes}
  ${UserTypes}
  ${DeputeTypes}
  ${PartyTypes}
  ${CommissionTypes}
`;

const queries = `
  type Query {
    ${UserQueries}
    ${DeputeQueries}
    ${PartyQueries}
    ${CommissionQueries}
  }
`;

const mutations = `
  type Mutation {
    ${UserMutations}
    ${DeputeMutations}
    ${PartyMutation}
    ${CommissionMutation}
  }
`;

export const typeDefs = `
  ${types}
  ${queries}
  ${mutations}
`;
