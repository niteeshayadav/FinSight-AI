import React from 'react'
import logo from '../../assets/logo.png'
import { Sun, BellDot, CircleUserRound } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='h-[12.5%] bg-[#F6F5FA] flex items-center justify-between px-6 border-b border-gray-300'>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-xl object-cover"/>
         <p className="ml-2 text-xl font-medium whitespace-nowrap leading-none text-gray-700">Your Smart Financial Assistant</p>
      </div>
      <div className='flex items-center justify-center gap-8'>
        <div className='w-8 h-6 cursor-pointer'>
          <Sun />
        </div>
        <div className='w-8 h-6 cursor-pointer'>
         <BellDot />
        </div>
        <div className='w-8 h-6 cursor-pointer'>
         <CircleUserRound />
        </div>
      </div>
    </div>
  )
}

export default Navbar