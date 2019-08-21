const defaultUserFields = `
  dni: Float!
  name: String!
  state: String!
  party: String
`;

export const typeDefs = `
  type User {
    id: ID!
    ${defaultUserFields}
  }

  input creationUserType {
    ${defaultUserFields}
  }
`;

export const queries = `  
  user(id: ID!): User
`;

export const mutations = `
  createUser(input: creationUserType): User
`;
