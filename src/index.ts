import db from './models';
import express from 'express';
import * as bodyParser from 'body-parser';
import graphqlDefinitions from './graphql';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import auth, { getToken } from './middleware/auth';
/* tslint:disable */


db.sequelize.sync().then(() => {
  const server = new ApolloServer({
    context: ({ req }) => { console.log('context', req.dni); return ({ db }); },
    schema: makeExecutableSchema(graphqlDefinitions),
  });

  const app = express();
  server.applyMiddleware({ app });
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(auth().initialize());

  app.use('/', auth().authenticate());
  app.get('/', getToken);


  // ADD PORTA
  // server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
  app.listen({ port: 4000 },  ()=> console.log('server ready'));
});
