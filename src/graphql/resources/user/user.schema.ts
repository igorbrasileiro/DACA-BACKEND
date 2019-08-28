const stateInputField = 'state: String!';

const defaultUserFields = `
  dni: String!
  name: String!
  party: String
  preferences: String
`;

export const typeDefs = `
  type User {
    id: Int!
    state: State!
    ${defaultUserFields}
  }

  input creationUserType {
    ${defaultUserFields}
    ${stateInputField}
  }
`;

export const queries = `
  user(dni: String!): User
`;

export const mutations = `
  createUser(input: creationUserType): User
`;
