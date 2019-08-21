import db from './models';
import graphqlDefinitions from './graphql';
import { ApolloServer, makeExecutableSchema } from 'apollo-server';

db.sequelize.sync().then(() => {
  const server = new ApolloServer({
    schema: makeExecutableSchema(graphqlDefinitions),
    context: { db },
  });

  // ADD PORTA
  server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
});
