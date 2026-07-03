/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_6AQaPysR7CMT@ep-mute-block-atu4s5kn-pooler.c-9.us-east-1.aws.neon.tech/ai-interview-mocker?sslmode=require&channel_binding=require',
    }
  };