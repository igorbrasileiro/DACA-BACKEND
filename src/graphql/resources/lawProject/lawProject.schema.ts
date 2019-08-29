const defaultLawProjectFields = `
  year: Int!
  interest: String!
  url: String
  conclusive: Boolean!
  menu: String!
`;

export const typeDefs = `
  type LawProject {
    id: Int!
    ${defaultLawProjectFields}
    code: String!
    situation: String!
    depute: Depute!
  }

  input creationLawProjectType {
    depute: String!
    ${defaultLawProjectFields}
  }
`;

export const queries = `
  lawProject(code: String!): LawProject
`;

export const mutations = `
  createLawProject(input: creationLawProjectType): LawProject
`;
