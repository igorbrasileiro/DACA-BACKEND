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
    currentLocal: String!
    historic: String
  }

  type Result {
    result: String
    against: Int
    awe: Int
  }

  input creationLawProjectType {
    depute: String!
    ${defaultLawProjectFields}
  }

  input votationLawProjectType {
    code: String!
    status: String!
    nextLocal: String
  }
`;

export const queries = `
  lawProject(code: String!): LawProject
`;

export const mutations = `
  createLawProject(input: creationLawProjectType): LawProject
  voteLawProject(input: votationLawProjectType): Result
`;
