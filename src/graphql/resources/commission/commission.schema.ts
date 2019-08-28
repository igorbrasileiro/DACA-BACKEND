const defaultCommissionFields = `
  theme: String!
`;

export const typeDefs = `
  type Commission {
    id: Int!
    ${defaultCommissionFields}
    deputies: [{id: Int!, depute: Int!, commission: Int!}]
  }

  input creationCommissionType {
    ${defaultCommissionFields}
    deputies: String!
  }
`;

export const queries = `
  commissions: [Commission]
  comission(theme: String): Commission!
`;

export const mutations = `
  createCommission(input: creationCommissionType): Commission
`;
