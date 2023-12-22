import { Request, Response } from 'express';

declare module 'express-session' {
  interface SessionData {
    userId: number;
  }
}

export interface ApolloContext {
  req: Request;
  res: Response;
}
