const stateInputField = 'state: String!';

const defaultPersonFields = `
  dni: String!
  name: String!
  preferences: String
`;

export const typeDefs = `
  type Person {
    id: Int!
    state: State!
    party: Party
    ${defaultPersonFields}
  }

  input creationPersonType {
    party: String
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
