import React from 'react'
import logo from '../../assets/logo.png'
import Sidebarnav from './Sidebarnav'
import { LayoutDashboard, CalendarCheck, Brain, Wallet, Settings } from 'lucide-react'
const Sidebar = () => {
  
  return (
    <div className='h-screen p-8 w-[15%] bg-linear-to-b from-[#20394D] via-[#4A6787] to-[#486489] text-white'>
        <div className="flex items-center border-b border-white/20 pb-4 mb-8">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-xl object-cover"/>
          <p className="ml-3 text-2xl font-bold whitespace-nowrap leading-none">FinSight AI</p>
        </div>
        <Sidebarnav name="Dashboard" icon={<LayoutDashboard />} to="/dashboard"/>
        <Sidebarnav name="Expenses" icon={<CalendarCheck />} to="/expenses"/>
        <Sidebarnav name="Insights" icon={<Brain />} to="/insights"/>
        <Sidebarnav name="Budgets" icon={<Wallet />} to="/budgets"/>
        <Sidebarnav name="Settings" icon={<Settings />} to="/settings"/> 
    </div>
  )
}

export default Sidebar