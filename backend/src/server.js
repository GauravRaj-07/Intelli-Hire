import express from "express";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import {serve} from "inngest/express"
import {clerkMiddleware} from "@clerk/express"

import { ENV } from "./lib/env.js";
import { inngest,functions } from "./lib/inngest.js";
import chatRoutes from "./routes/chatRoutes.js"
import sessionRoutes from "./routes/sessionRoutes.js"
import resumeRouters from "./routes/resumeRoutes.js";
import aiRouters from "./routes/aiRoutes.js";


const app = express();

// middleware
app.use(express.json());
// credentials: true means =>server allows a browser to include cookies on request
const exactAllowedOrigins = [
    ENV.CLIENT_URL,
    // common local dev origins
    "http://localhost:5173",
    "http://localhost:3000",
].filter(Boolean);

// Allow Vercel preview deployments for this frontend project.
// Examples:
// - https://intelli-hire-frontend.vercel.app
// - https://intelli-hire-frontend-<hash>-gaurav-rajs-projects-<id>.vercel.app
const vercelFrontendOriginRegex = /^https:\/\/intelli-hire-frontend(?:-[a-z0-9-]+)?\.vercel\.app$/i;

app.use(
    cors({
        origin: (origin, callback) => {
            // Non-browser clients (curl, server-to-server) may not send Origin.
            if (!origin) return callback(null, true);

            if (exactAllowedOrigins.includes(origin)) return callback(null, true);
            if (vercelFrontendOriginRegex.test(origin)) return callback(null, true);

            // Disallow by omitting CORS headers (browser will block).
            return callback(null, false);
        },
        credentials: true,
    })
);
app.use(clerkMiddleware()) // this adds auth field to request object: req.auth()

app.use("/api/inngest",serve({client:inngest,functions}))
app.use("/api/chat",chatRoutes)
app.use("/api/sessions",sessionRoutes)

app.use('/api/resumes',resumeRouters)

app.use('/api/ai',aiRouters)


app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is up and running at health" });
});
app.get("/", (req, res) => {
    res.status(200).json({ message: "API is up and running" });
});


// when you pass an array of middleware to express, it automatically flattens and executes them sequentially, one by one
// app.get("/video-calls",protectRoute, (req, res) => {
//     res.status(200).json({ message: "This is the protected video-call endpoint" });
// });

// Note: Frontend is deployed separately on Vercel, so no static file serving needed here


const startServer=async()=>{
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log("Server is running on port", ENV.PORT);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}
startServer();