import express from "express";
import path from "path";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import {serve} from "inngest/express"
import {clerkMiddleware} from "@clerk/express"

import { ENV } from "./lib/env.js";
import { inngest,functions } from "./lib/inngest.js";
import { protectRoute } from "./middleware/protectRoute.js";
import chatRoutes from "./routes/chatRoutes.js"
import sessionRoutes from "./routes/sessionRoutes.js"

const app = express();

// middleware
app.use(express.json());
// credentials: true means =>server allows a browser to include cookies on request
app.use(cors({
    origin: ENV.CLIENT_URL,
    credentials: true
}));
app.use(clerkMiddleware()) // this adds auth field to request object: req.auth()

app.use("/api/inngest",serve({client:inngest,functions}))
app.use("/api/chat",chatRoutes)
app.use("/api/sessions",sessionRoutes)

const __dirname = path.resolve();

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is up and running" });
});


// when you pass an array of middleware to express, it automatically flattens and executes them sequentially, one by one
// app.get("/video-calls",protectRoute, (req, res) => {
//     res.status(200).json({ message: "This is the protected video-call endpoint" });
// });

// make ready for deployment
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
    });
}


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