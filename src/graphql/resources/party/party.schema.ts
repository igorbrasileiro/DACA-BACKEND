const defaultPartyFields = `
  name: String!
`;

export const typeDefs = `
  type Party {
    id: Int!
    ${defaultPartyFields}
  }

  input creationPartyType {
    ${defaultPartyFields}
  }
`;

export const queries = `
  parties: [Party!]
`;

export const mutations = `
  createParty(input: creationPartyType): Party
`;
