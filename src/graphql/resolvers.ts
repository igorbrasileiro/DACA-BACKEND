import { ContextReplacementPlugin } from "webpack";

const resolvers = {
  Query: {
    getProduct: (parent, {id}, { db }, info) => db.Product.findByPk(id),
  },
  Mutation: {
    createProduct: (_, { name, price }, { db }, __) => db.Product.create({ name, price }),
  }
};

export default resolvers;