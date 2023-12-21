export default `#graphql
  scalar DateTime

  type User {
    id: Int!
    username: String!
    email: String!
    isVerified: Boolean!
  }

  type Job {
    id: String!
    status: JobStatus!
    companyName: String
    companyWebsite: String
    contactPerson: String
    contactEmail: String
    contactPhone: String
    contactLinkedIn: String
    user: User!
    interactions: [Interaction!]
  }

  type Interaction {
    id: String!
    way: String
    summary: String
    time: DateTime!
    job: Job!
  } 

  type Query {
    GetCurrentUser: User!
    GetAllJobs(status: FilterStatus): [Job!]!
    GetJobInteractions(id: String!): [Interaction!]!
    GetJobById(id: String): Job!
  }

  type Mutation {
    Register(email: String!, username: String!, password: String!): User!
    Login(email: String!, password: String!): User!
    Logout: String!
    CreateJob: Job!
    updateJob(id: String!, status: JobStatus, name: String, website: String, person: String, email: String, phone: String, linkedIn: String): Job!
    CreateInteraction(jobId: String!): Interaction!
    UpdateInteraction(id: String!, way: String, summary: String): Interaction!
    DeleteJob(id: String!): String!
    DeleteInteraction(id: String!): String!
  }

  enum JobStatus {
    ACCEPTED
    REJECTED
    PENDING
  }

  enum FilterStatus {
    BOOKMARKED
    CONTACTED
    DISCUSSING
    REJECTED
    ACCEPTED
  }
`;
