import authResolvers from './authResolver.js';
import jobResolvers from './jobResolvers.js';
import { mergeResolvers } from '@graphql-tools/merge';

export default mergeResolvers([authResolvers, jobResolvers]);
