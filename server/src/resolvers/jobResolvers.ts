import { ApolloContext } from '../types';
import prisma from '../util/prisma.js';
import { GraphQLError } from 'graphql';
export default {
  Query: {
    GetAllJobs: async (
      _,
      { status }: { status: string },
      { req }: ApolloContext
    ) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      try {
        const user = await prisma.user.findUnique({
          where: {
            id: req.session.userId,
          },
        });

        return true;
      } catch (err) {
        throw new GraphQLError('Invalid session');
      }
    },
    GetJobById: async (_, { id }: { id: string }, { req }: ApolloContext) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      try {
        const job = await prisma.job.findUnique({
          where: { id, userId: req.session.userId },
        });

        return job;
      } catch (err) {
        throw new GraphQLError('Invalid session');
      }
    },
  },
  Mutation: {
    CreateJob: async (_, args, { req }: ApolloContext) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      const job = await prisma.job.create({
        data: { userId: req.session.userId },
      });

      return job;
    },
  },
};
