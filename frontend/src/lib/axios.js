import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.DEV ? "http://localhost:3000/api" : "https://intelli-hire-backend.onrender.com/api",
    withCredentials: true // by adding this field browser will send the cookies to server automatically on every single req
})

export default axiosInstance