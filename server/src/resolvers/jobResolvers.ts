import { ApolloContext } from '../types';
import prisma from '../util/prisma.js';
import { GraphQLError } from 'graphql';
export default {
  Query: {
    GetAllJobs: async (
      _,
      {
        status,
      }: {
        status:
          | 'BOOKMARKED'
          | 'CONTACTED'
          | 'DISCUSSING'
          | 'REJECTED'
          | 'ACCEPTED';
      },
      { req }: ApolloContext
    ) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      try {
        const user = await prisma.user.findUnique({
          where: {
            id: req.session.userId,
          },
        });

        const jobs = await prisma.job.findMany({
          where: { userId: user.id },
          include: { Interactions: true },
        });
        return jobs;
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
    GetJobInteractions: async (
      _,
      { id }: { id: string },
      { req }: ApolloContext
    ) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      try {
        const interactions = await prisma.interaction.findMany({
          where: { jobId: id },
        });

        return interactions;
      } catch (err) {
        throw new GraphQLError('Invalid session');
      }
    },
  },
  Mutation: {
    CreateInteraction: async (
      _,
      { jobId }: { jobId: string },
      { req }: ApolloContext
    ) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      const interaction = await prisma.interaction.create({
        data: { jobId },
      });

      return interaction;
    },
    UpdateInteraction: async (
      _,
      {
        id,
        way,
        summary,
      }: {
        id: string;
        way?: 'REJECTED' | 'ACCEPTED' | 'PENDING';
        summary?: string;
      },
      { req }: ApolloContext
    ) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      try {
        console.log(id);
        console.log(way);
        console.log(summary);

        const existingInteraction = await prisma.interaction.findUnique({
          where: { id: id },
        });

        if (!existingInteraction) {
          throw new GraphQLError('Interaction not found');
        }

        const updatedInteraction = await prisma.interaction.update({
          where: { id },
          data: {
            way: way || existingInteraction.way,
            summary: summary || existingInteraction.summary,
          },
        });

        return updatedInteraction;
      } catch (err) {
        console.log(err);
        throw new GraphQLError('Error updating interaction');
      }
    },
    CreateJob: async (_, args, { req }: ApolloContext) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      const job = await prisma.job.create({
        data: { userId: req.session.userId },
      });

      return job;
    },
    updateJob: async (
      _,
      {
        id,
        status,
        name,
        website,
        person,
        email,
        phone,
        linkedin,
      }: {
        id: string;
        status?: 'REJECTED' | 'ACCEPTED' | 'PENDING';
        name?: string;
        website?: string;
        person?: string;
        email?: string;
        phone?: string;
        linkedin?: string;
      },
      { req }: ApolloContext
    ) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      try {
        // Retrieve the existing job
        const existingJob = await prisma.job.findUnique({
          where: { id: id, userId: req.session.userId },
        });

        // Check if the job exists
        if (!existingJob) {
          throw new GraphQLError('Job not found');
        }

        // Update only the relevant fields that are present in the parameters
        const updatedJob = await prisma.job.update({
          where: { id },
          data: {
            status: status || existingJob.status,
            companyName: name || existingJob.companyName,
            companyWebsite: website || existingJob.companyWebsite,
            contactPerson: person || existingJob.contactPerson,
            contactEmail: email || existingJob.contactEmail,
            contactPhone: phone || existingJob.contactPhone,
            contactLinkedIn: linkedin || existingJob.contactLinkedIn,
          },
        });

        return updatedJob;
      } catch (err) {
        console.log(err);

        throw new GraphQLError('Error updating job');
      }
    },
    DeleteJob: async (_, { id }: { id: string }, { req }: ApolloContext) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      try {
        // Check if the job exists
        const existingJob = await prisma.job.findUnique({
          where: { id, userId: req.session.userId },
          include: {
            Interactions: true,
          },
        });

        if (!existingJob) throw new GraphQLError('Job not found');

        // Delete the job along with its interactions
        await prisma.job.delete({
          where: { id },
        });

        return 'Job and interactions deleted successfully';
      } catch (err) {
        console.log(err);
        throw new GraphQLError('Error deleting job and interactions');
      }
    },

    DeleteInteraction: async (
      _,
      { id }: { id: string },
      { req }: ApolloContext
    ) => {
      if (!req.session.userId) throw new GraphQLError('Not logged in');

      try {
        // Check if the job exists
        const existingJob = await prisma.interaction.findUnique({
          where: { id },
        });

        if (!existingJob) {
          throw new GraphQLError('Job not found');
        }

        // Delete interactions associated with the job
        await prisma.interaction.deleteMany({
          where: { id },
        });

        return 'Interaction deleted successfully';
      } catch (err) {
        console.log(err);
        throw new GraphQLError('Error deleting interaction');
      }
    },
  },
};
