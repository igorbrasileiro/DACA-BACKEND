import {
  typeDefs as UserTypes,
  queries as UserQueries,
  mutations as UserMutations,
} from './resources/user/user.schema';

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
`;

const queries = `
  type Query {
    ${UserQueries}
    ${DeputeQueries}
  }
`;

const mutations = `
  type Mutation {
    ${UserMutations}
    ${DeputeMutations}
  }
`;

export const typeDefs = `
  ${types}
  ${queries}
  ${mutations}
`;
