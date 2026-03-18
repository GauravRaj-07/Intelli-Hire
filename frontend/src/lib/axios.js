import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || "https://intelli-hire-backend.onrender.com/api"

const axiosInstance=axios.create({
    baseURL: API_URL,
    withCredentials:true // by adding this field browser will send the cookies to server automatically on every single req
})

export default axiosInstance