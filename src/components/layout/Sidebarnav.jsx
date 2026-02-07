import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebarnav = ({name,icon,to}) => {
  return (
    <NavLink to={to} className={({isActive})=>`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`}>
        <span className='w-5 h-5'>{icon}</span>
        <span className='font-medium'>{name}</span>
    </NavLink>
  )
}

export default Sidebarnav