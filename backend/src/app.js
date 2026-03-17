import express from "express";
import cors from "cors";
import path from "path";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { inngest, functions } from "./lib/inngest.js";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(
    cors({
      origin: ENV.CLIENT_URL,
      credentials: true,
    })
  );

  app.use(clerkMiddleware());

  // Ensure DB is connected (serverless-friendly: reused across invocations)
  app.use(async (_req, _res, next) => {
    try {
      await connectDB();
      next();
    } catch (err) {
      next(err);
    }
  });

  app.use("/api/inngest", serve({ client: inngest, functions }));
  app.use("/api/chat", chatRoutes);
  app.use("/api/sessions", sessionRoutes);

  app.get("/health", (_req, res) => {
    res.status(200).json({ message: "API is up and running" });
  });

  // Local "single-process" deployment convenience (not used on Vercel)
  if (ENV.NODE_ENV === "production" && !process.env.VERCEL) {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("/{*any}", (_req, res) => {
      res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
    });
  }

  // Basic error handler
  app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  });

  return app;
}

