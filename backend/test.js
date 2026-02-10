import { StreamChat } from "stream-chat"
// import dotenv from "dotenv"
import { ENV } from "./src/lib/env.js"

// dotenv.config()

const apiKey = ENV.STREAM_API_KEY
const apiSecret = ENV.STREAM_API_SECRET

if (!apiKey || !apiSecret) {
  console.error("❌ Stream env vars missing")
  process.exit(1)
}

const client = StreamChat.getInstance(apiKey, apiSecret)

async function test() {
  try {
    await client.upsertUser({
      id: "debug-user-1",
      name: "Debug User",
    })

    console.log("✅ Stream user created successfully")
    process.exit(0)
  } catch (err) {
    console.error("❌ Stream error:", err)
    process.exit(1)
  }
}

test()
