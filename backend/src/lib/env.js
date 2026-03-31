import dotenv from "dotenv";
dotenv.config({ override: true });

export const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    CLIENT_URL: process.env.CLIENT_URL,
    INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
    INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
    STREAM_API_KEY: process.env.STREAM_API_KEY,
    STREAM_API_SECRET: process.env.STREAM_API_SECRET,
    IMAGEKIT_PRIVATE_KEY:process.env.IMAGEKIT_PRIVATE_KEY,
    OPENAI_API_KEY:process.env.OPENAI_API_KEY,
    OPENAI_BASE_URL:process.env.OPENAI_BASE_URL,
    OPENAI_MODEL:process.env.OPENAI_MODEL

}