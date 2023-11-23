import bcrypt from 'bcrypt';
import { ApolloContext } from '../types';
import prisma from '../util/prisma.js';
import { GraphQLError } from 'graphql';
export default {
  Query: {
    GetCurrentUser: async (_, args, { req }: ApolloContext) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      try {
        const user = await prisma.user.findUnique({
          where: {
            id: req.session.userId,
          },
        });

        return user;
      } catch (err) {
        throw new GraphQLError('Invalid session');
      }
    },
  },
  Mutation: {
    Register: async (
      _,
      {
        email,
        username,
        password,
      }: { email: string; username: string; password: string },
      { req }: ApolloContext
    ) => {
      const isEmailTaken =
        (await prisma.user.count({
          where: {
            email,
          },
        })) > 0;

      if (isEmailTaken) throw new GraphQLError('Email already in use');

      password = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          email,
          username,
          password,
        },
      });

      req.session.userId = user.id;
      return user;
    },
    Login: async (
      _,
      { email, password }: { email: string; password: string },
      { req }: ApolloContext
    ) => {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) throw new GraphQLError('Invalid email');

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) throw new GraphQLError('Invalid password');

      req.session.userId = user.id;
      return user;
    },
    Logout: async (_, args, { req }: ApolloContext) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      req.session.destroy((err) => {
        if (err) throw new GraphQLError('Internal server error');
      });

      return 'Logout successful';
    },
  },
};
