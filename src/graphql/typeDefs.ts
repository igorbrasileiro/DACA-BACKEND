import { gql } from 'apollo-server';

// do union with another types
const typeDef = gql`
  type Product {
    id: ID!
    name: String!
    price: Float
  }

  type Query {
    getProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(name: String!, price: Float): Product!
  }
`;

export default typeDef;