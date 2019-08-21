export const resolvers = {
  Query: {
    user: () => ({}),
  },
  Mutation: {
    createUser: (parent, { dni, name, state, party }, { db }, info) => ({}),
  },
};
