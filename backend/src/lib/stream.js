import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import { ENV } from "./env.js";

let _streamClient = null;
let _chatClient = null;

function getStreamKeys() {
  const apiKey = ENV.STREAM_API_KEY;
  const apiSecret = ENV.STREAM_API_SECRET;

  if (!apiKey || !apiSecret) {
    throw new Error("STREAM_API_KEY or STREAM_API_SECRET is missing");
  }

  return { apiKey, apiSecret };
}

export function getStreamClient() {
  if (_streamClient) return _streamClient;
  const { apiKey, apiSecret } = getStreamKeys();
  _streamClient = new StreamClient(apiKey, apiSecret);
  return _streamClient;
}

export function getChatClient() {
  if (_chatClient) return _chatClient;
  const { apiKey, apiSecret } = getStreamKeys();
  _chatClient = StreamChat.getInstance(apiKey, apiSecret);
  return _chatClient;
}

export const upsertStreamUser = async (userData) => {
    try{
        await getChatClient().upsertUser(userData)
        console.log("Stream user upserted successfully:",userData)
    }catch(error){
        console.error("Error upserting Stream user:",error)
        throw error
    }
}
export const deleteStreamUser = async (userId) => {
    try{
        await getChatClient().deleteUser(userId)
        console.log("Stream user deleted successfully:",userId)
    }catch(error){
        console.error("Error deleting Stream user:",error)
        throw error
    }
}

//todo: add another method to generate Token