import db from './models';
import express from 'express';
import graphqlDefinitions from './graphql';
import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import auth from './middleware/auth';
/* tslint:disable */

const app = express();

db.sequelize.sync().then(() => {
  app.use(auth().initialize());

  const server = new ApolloServer({
    context: entrada => { console.log('a'); return ({ db }); },
    schema: makeExecutableSchema(graphqlDefinitions),
  });

  app.use('/', auth().authenticate);

  // ADD PORTA
  server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
});
