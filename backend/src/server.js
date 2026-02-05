import express from "express";
import path from "path";
import cors from "cors";

import { ENV } from "./lib/env.js";

const app = express();

app.use(cors({
    // origin: [
    //   "http://localhost:5173",              // local frontend
    //   "https://your-frontend.vercel.app"    // deployed frontend
    // ],
    origin: true,
    credentials: true
  }));

const __dirname = path.resolve();

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is up and running" });
});
app.get("/books", (req, res) => {
    res.status(200).json({ message: "This is the books endpoint" });
});

// make ready for deployment
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
    });
}
app.listen(ENV.PORT, () => {
    console.log("Server is running on port", ENV.PORT);
});