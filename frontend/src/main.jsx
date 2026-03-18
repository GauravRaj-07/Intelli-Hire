import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import {BrowserRouter} from "react-router"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import axiosInstance from './lib/axios.js'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

// Component to handle Axios interceptors with Clerk Auth
const AxiosAuthInterceptor = ({ children }) => {
  const { getToken } = useAuth()

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        try {
          const token = await getToken()
          if (token) {
            config.headers.Authorization = `Bearer ${token}`
          }
        } catch (error) {
          console.error("Error attaching clerk token", error)
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
    }
  }, [getToken])

  return <>{children}</>
}

const queryClient=new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <AxiosAuthInterceptor>
        <App />
      </AxiosAuthInterceptor>
    </ClerkProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
