import axios from "axios"

let API_URL = import.meta.env.VITE_API_URL || "https://intelli-hire-backend.onrender.com/api"

// Ensure it always ends with /api just in case the Vercel env var missed it
if (API_URL && !API_URL.endsWith('/api')) {
    API_URL += '/api'
}

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true // by adding this field browser will send the cookies to server automatically on every single req
})

export default axiosInstance