import React from 'react'
import StatCard from '../components/shared/StatCard'

const Dashboard = () => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4'>
        <StatCard title="Total Balance" value="₹82,000" change={+12} changeText="from last month" />
        <StatCard title="Monthly Spending" value="₹24,300" change={-18} changeText="this month" />
        <StatCard title="Savings This Month" value="₹8,500" change={-5} changeText="from last month"/>
        <StatCard title="Top Expense" category="Food & Dining" value="₹9,200" />
      </div>
    </div>
  )
}

export default Dashboard