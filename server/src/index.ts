import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import morgan from 'morgan';
import bodyparser from 'body-parser';
import express from 'express';
import http from 'http';
import typeDefs from './schema/typeDefs.js';
import resolvers from './resolvers/index.js';
import { ApolloContext } from './types/index.js';
import session from 'express-session';
import dotenv from 'dotenv';
import redisStore from './util/redis.js';

dotenv.config();

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: true,
});

await server.start();

app.use(
  '/',
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
  morgan('common'),
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: redisStore,
    cookie: {
      maxAge: 31 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: 'none',
    },
  }),
  bodyparser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ req }),
  })
);

await new Promise<void>((resolve) =>
  httpServer.listen({ port: process.env.PORT || 4000 }, resolve)
);
// console.log(`🚀 Server ready at http://localhost:4000/`);
console.log(httpServer.address());
