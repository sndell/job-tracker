export default `#graphql
  scalar DateTime

  type User {
    id: Int!
    username: String!
    email: String!
    verified: Boolean!
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
    interactions: [Interaction!]!
  }

  type Interaction {
    id: Int!
    way: String!
    summary: String
    time: DateTime!
    job: Job!
  } 

  type Query {
    GetCurrentUser: User
    GetAllJobs(status: JobStatus): [Job!]!
    GetJobById(id: String): Job
  }

  type Mutation {
    Register(email: String!, password: String!): User
    Login(email: String!, password: String!): User
    Logout: String
    CreateJob: Job
  }

  enum JobStatus {
    BOOKMARKED
    APPLIED
    INTERVIEWING
    NEGOTIATING
    ACCEPTED
    REJECTED
  }
`;
