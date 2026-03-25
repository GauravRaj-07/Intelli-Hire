import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div>
        <div className='min-h-screen bg-base-200'>
            <Navbar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout