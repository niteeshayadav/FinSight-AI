import { ArrowDown, ArrowUp } from 'lucide-react'
import React from 'react'


const StatCard = ({ title, value, change, category, changeText}) => {
  return (
    <div className="stat-card p-4 rounded-2xl flex flex-col justify-between items-start gap-1.5 bg-white shadow-md">
        <h2 className="text-lg font-semibold">{title}</h2>
        {category && <p className="text-lg font-serif">{category}</p>}
        <p className='text-2xl font-semibold'>{value}</p>
        {change !== undefined && (
            <div className='flex justify-center items-center'>
                    {change > 0 ? <ArrowUp className='text-green-500' /> : <ArrowDown className='text-red-500' />}
                    <p className='text-lg mr-2'>{change}%</p>
                    <p className='text-nowrap'>{changeText}</p>
            </div>
        )}
    </div>
  )
}

export default StatCard