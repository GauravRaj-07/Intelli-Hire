import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function HomePage() {
  
    //fetch some data - without using tanstack
    // const [books,setBooks]=useState([])
    // const [isLoading,setIsLoading]=useState(true)
    // const [error,setError]=useState(null)

    // useEffect(()=>{
    //     const getBooks=async()=>{
    //         setIsLoading(true)
    //         try {
    //             const res=await fetch("/api/books")
    //             const data=await res.json()
    //             setBooks(data)
    //         } catch (error) {
    //             setError(error)
    //         }finally{
    //             setIsLoading(false)
    //         }
    //     }
    //     getBooks()
    // },[])

    // with tanstack
    // const {data,isLoading,error}=useQuery({
    //     queryFn:()=>fetch("/api/books").then(res=>res.json())
    // })

    

  return (
    <div>
        <button className='btn btn-secondary' onClick={()=>toast.success("This is a success toast")}>Click me</button>

        <SignedOut>
            <SignInButton mode="modal">
                <button>Login</button>
            </SignInButton>
        </SignedOut>

        <SignedIn>
            <SignOutButton/>
        </SignedIn>

        <UserButton/>
    </div>
  )
}

export default HomePage