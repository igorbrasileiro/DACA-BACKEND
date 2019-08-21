import {
  typeDefs as UserTypes,
  queries as UserQueries,
  mutations as UserMutations,
} from './resources/user/user.schema';

const types = `
  ${UserTypes}
`;

const queries = `
  type Query {
    ${UserQueries}
  }
`;

const mutations = `
  type Mutation {
    ${UserMutations}
  }
`;

export const typeDefs = `
  ${types}
  ${queries}
  ${mutations}
`;
