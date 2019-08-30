const stateInputField = 'state: String!';

const defaultPersonFields = `
  dni: String!
  name: String!
  party: String
  preferences: String
`;

export const typeDefs = `
  type Person {
    id: Int!
    state: State!
    ${defaultPersonFields}
  }

  input creationPersonType {
    ${defaultPersonFields}
    ${stateInputField}
  }
`;

export const queries = `
  person(dni: String!): Person
`;

export const mutations = `
  createPerson(input: creationPersonType): Person
`;
