const defaultUserFields = `
  name: String!
`;

export const typeDefs = `
  type Party {
    id: Int!
    ${defaultUserFields}
  }

  input creationPartyType {
    ${defaultUserFields}
  }
`;

export const queries = `
  parties: [Party!]
`;

export const mutations = `
  createParty(input: creationPartyType): Party
`;
