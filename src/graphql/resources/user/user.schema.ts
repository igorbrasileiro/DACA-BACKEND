const defaultUserFields = `
  dni: Int!
  name: String!
  state: String!
  party: String,
  preferences: String,
`;

export const typeDefs = `
  type User {
    id: Int!
    ${defaultUserFields}
  }

  input creationUserType {
    ${defaultUserFields}
  }
`;

export const queries = `  
  user(id: Int, dni: Int): User
`;

export const mutations = `
  createUser(input: creationUserType): User
`;
