const defaultCommissionFields = `
  theme: String!
`;

export const typeDefs = `
  type CommissionDeputies {
    commission: Int!
    depute: Int!
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
