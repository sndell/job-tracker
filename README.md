## Application Overview

Your job tracker application helps manage job and liaison applications with a user-friendly interface. Here's a quick guide to its key features:

### Creating and Editing Jobs

1. **Add Job:**
   - Click "Add Job" on main page.
   - Fill in job details and save.

2. **View/Edit Jobs:**
   - See all jobs on the main page.
   - Click a job to view/edit details.

3. **Log Interactions:**
   - Record interactions at the bottom of the job details page.

# Project Setup Guide

This guide walks you through setting up your project, covering server and frontend configurations. Follow these simplified steps for a quick start:

## Server Setup

1. **Installation:**
   Run the following command to install dependencies for the server:

   ```bash
   pnpm install
   ```

2. **Configuration:**
   - Create a `.env` file in the project root.
   - Open `.env` and add your database, session, and Redis configurations:

      ```env
      DATABASE_URL=mysql://your_username:your_password@your_database_host/your_database_name?sslaccept=strict
      SESSION_SECRET=your_session_secret
      REDIS_PASSWORD=your_redis_password
      REDIS_HOST=your_redis_host
      REDIS_PORT=your_redis_port
      NODE_ENV=dev
      CORS_ORIGIN=http://localhost:3000
      PORT=4000
      ```

   Replace placeholders with your actual credentials.

3. **Prisma Setup:**
   Ensure database synchronization with:

   ```bash
   pnpm dlx prisma db push
   ```

4. **Run Server:**
   Start the server in development mode:

   ```bash
   pnpm run dev
   ```

   Access the server at `http://localhost:4000`.

## Frontend Setup

1. **Installation:**
   Install frontend dependencies:

   ```bash
   pnpm install
   ```

2. **Configuration:**
   - Create a `.env` file in the project root.
   - Open `.env` and set your GraphQL server endpoint:

      ```env
      GQL_HOST=http://localhost:4000
      ```

   Replace placeholders with your actual endpoint.

3. **Run Frontend:**
   Start the frontend with:

   ```bash
   pnpm run dev
   ```

   Access the frontend at `http://localhost:3000`. Ensure `CORS_ORIGIN` in the server's `.env` matches for proper communication.

Now, both the server and frontend are set up, and you can interact with your application at `http://localhost:3000`. Adjust configurations as needed for your project.
