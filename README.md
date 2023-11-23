# Server Setup Guide

This guide provides instructions on how to set up the server for this project. Follow the steps below to install dependencies, configure environment variables, and run the server locally.

## Installation

Use the following commands to install dependencies and set up the server:

```bash
pnpm install
```

## Configuration

1. Create a `.env` file in the root of the project.

2. Open the `.env` file and add the following configuration:

   ```env
   # Database connection URL
   DATABASE_URL='mysql://your_username:your_password@your_database_host/your_database_name?sslaccept=strict'

   # Session secret for security
   SESSION_SECRET='your_session_secret'

   # Redis server configuration
   REDIS_PASSWORD='your_redis_password'  # Redis server password
   REDIS_HOST='your_redis_host'          # Redis server host
   REDIS_PORT=your_redis_port            # Redis server port
   ```

   Replace the placeholder values with your actual credentials.

## Running the Server

To start the server in development mode, run the following command:

```bash
pnpm run dev
```

The server will be accessible at `http://localhost:4000`. You can change the port by modifying the configuration in the project.
