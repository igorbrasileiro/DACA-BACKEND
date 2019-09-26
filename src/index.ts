import db from './models';
import ENV from './config/environment';
import express from 'express';
import passport from 'passport';
import { Strategy } from 'passport-jwt';
import * as bodyParser from 'body-parser';
import graphqlDefinitions from './graphql';
import { params } from './middleware/auth';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
/* tslint:disable */


const port = ENV.PORT || 4000;

db.sequelize.sync().then(() => {
  
  const strategy = new Strategy(params, (payload, done) => {
    done(null, payload);
  });
  passport.use(strategy);
  
  const app = express();

  passport.initialize();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());  
  app.use('/graphql', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (user) {
        (<any>req).dni = user.dni;
      } else {
        (<any>req).dni = null;
      }

      next();
    })(req, res, next);
  });
  
  // last one
  const server = new ApolloServer({
    context: ({ req }) => ({ db, dni: (<any>req).dni }),
    schema: makeExecutableSchema(graphqlDefinitions),
  });

  server.applyMiddleware({ app, cors: false });

  app.listen({ port },  ()=> console.log('server ready at port: ', port));
});
