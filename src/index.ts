import db from './models';
import defaultGraphqlConfig from './graphql';
import { ApolloServer } from 'apollo-server';

db.sequelize.sync().then(() => {
  const server = new ApolloServer({
    ...defaultGraphqlConfig,
    context: { db }
  });

  // ADD PORTA
  server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
});


