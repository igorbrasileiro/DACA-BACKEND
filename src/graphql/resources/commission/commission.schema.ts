const defaultCommissionFields = `
  theme: String!
`;

export const typeDefs = `
  type CommissionDeputies {
    commission: String!
    depute: String!
  }

  type Commission {
    id: Int!
    ${defaultCommissionFields}
    deputies: [CommissionDeputies]
  }

  input creationCommissionType {
    ${defaultCommissionFields}
    deputies: String!
  }
`;

export const queries = `
  commissions: [Commission]
  commission(theme: String): Commission!
`;

export const mutations = `
  createCommission(input: creationCommissionType): Commission
`;
