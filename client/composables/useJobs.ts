import type { JobStatus } from '#gql/default';

export const useJobs = async () => {
  const createJob = async () => {
    try {
      const { CreateJob } = await GqlCreateJob();
      return CreateJob.id;
    } catch (err) {
      throw err;
    }
  };

  const getJobById = async (id: string) => {
    try {
      const { GetJobById } = await GqlGetJobById({ id });
      return GetJobById;
    } catch (err) {
      throw err;
    }
  };

  const updateJob = async (
    id: string,
    details: {
      status?: 'ACCEPTED' | 'REJECTED' | 'PENDING';
      name?: string;
      website?: string;
      person?: string;
      email?: string;
      phone?: string;
      linkedIn?: string;
    }
  ) => {
    try {
      console.log(id);
      console.log(details);
      const { updateJob } = await GqlUpdateJob({
        id,
        name: details.name,
        website: details.website,
        person: details.person,
        email: details.email,
        phone: details.phone,
        status: details.status as JobStatus,
        linkedIn: details.linkedIn,
      });
      return updateJob.id;
    } catch (err) {
      console.error(err);
    }
  };
  return {
    createJob,
    updateJob,
    getJobById,
  };
};
