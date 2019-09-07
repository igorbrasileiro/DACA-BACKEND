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
  }
`;

export const queries = `
  lawProject(code: String!): LawProject
`;

export const mutations = `
  createLawProject(input: votationLawProjectType): Result
  voteLawProject(input: votationLawProjectType): Result
`;
