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

  // const register = async (
  //   email: string,
  //   username: string,
  //   password: string
  // ) => {
  //   try {
  //     await GqlRegister({ email, username, password });
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  return {
    createJob,
    getJobById,
  };
};
