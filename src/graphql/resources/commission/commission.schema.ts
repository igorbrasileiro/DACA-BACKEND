const defaultCommissionFields = `
  theme: String!
`;

export const typeDefs = `
  type Commission {
    id: Int!
    ${defaultCommissionFields}
  }

  input creationCommissionType {
    ${defaultCommissionFields}
    deputes: String!
  }
`;

export const queries = `
  commissions: [Commission]
`;

export const mutations = `
  createCommission(input: creationCommissionType): Commission
`;
