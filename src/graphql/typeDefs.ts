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
  mutations as CommissionMutation 
} from './resources/commission/commission.schema'

import { typeDefs as StateTypes } from './resources/state/state.schema';

const types = `
  ${StateTypes}
  ${UserTypes}
  ${PartyTypes}
  ${CommissionTypes}
`;

const queries = `
  type Query {
    ${UserQueries}
    ${PartyQueries}
    ${CommissionQueries}
  }
`;

const mutations = `
  type Mutation {
    ${UserMutations}
    ${PartyMutation}
    ${CommissionMutation}
  }
`;

export const typeDefs = `
  ${types}
  ${queries}
  ${mutations}
`;
