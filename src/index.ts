import db from './models';
import graphqlDefinitions from './graphql';
import { ApolloServer, makeExecutableSchema } from 'apollo-server';
/* tslint:disable */

db.sequelize.sync().then(() => {
  const server = new ApolloServer({
    context: { db },
    schema: makeExecutableSchema(graphqlDefinitions),
  });

  // ADD PORTA
  server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
});
