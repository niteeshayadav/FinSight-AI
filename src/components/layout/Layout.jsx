import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import React from 'react'

const Layout = () => {
  return (
    <div className='flex h-screen'>
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar />
            <main className='flex-1 overflow-y-auto p-6 bg-[#F6F5FA]'>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default Layout