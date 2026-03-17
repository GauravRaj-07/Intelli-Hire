import mongoose from 'mongoose';

import { ENV } from './env.js';

let connectionPromise = null;

export const connectDB = async () => {
    try {
        if(!ENV.DB_URL) {
            throw new Error("DB_URL is not set");
        }
        if (mongoose.connection?.readyState === 1) return mongoose.connection;

        if (!connectionPromise) {
            connectionPromise = mongoose
                .connect(ENV.DB_URL)
                .then((conn) => {
                    console.log("Connected to MongoDB", conn.connection.host);
                    return conn.connection;
                })
                .catch((err) => {
                    connectionPromise = null;
                    throw err;
                });
        }

        return await connectionPromise;
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        throw error;
    }
}