import RedisStore from 'connect-redis';
import { createClient } from 'redis';

const redisClient = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
  },
});

await redisClient.connect().catch(console.error);

let redisStore = new RedisStore({
  client: redisClient,
  prefix: 'myapp:',
});

export default redisStore;
