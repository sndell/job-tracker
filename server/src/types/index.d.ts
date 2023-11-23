import { Request } from 'express';

declare module 'express-session' {
  interface SessionData {
    userId: number;
  }
}

export interface ApolloContext {
  req: Request;
}
