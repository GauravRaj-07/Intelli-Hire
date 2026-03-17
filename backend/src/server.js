import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { createApp } from "./app.js";

const app = createApp();

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server is running on port", ENV.PORT);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

startServer();