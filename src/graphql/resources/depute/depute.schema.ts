const defaultDeputeFields = `
  createdAt: Date!
  laws: Int!
  person: User!
`;

export const typeDefs = `
  scalar Date

  type Depute {
    id: Int!
    ${defaultDeputeFields}
  }

  input creationDeputeType {
    dni: String!
    createdAt: Date!
  }
`;

export const queries = `
  depute(dni: String!): Depute
`;

export const mutation = `
  createDepute(input: creationDeputeType): Depute
`;
