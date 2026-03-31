import OpenAI from 'openai'
import { ENV } from './env.js'

const ai=new OpenAI({
    apiKey:ENV.OPENAI_API_KEY,
    baseURL:ENV.OPENAI_BASE_URL
})

export default ai