import React from 'react'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Expenses from './pages/Expenses'
import Insights from './pages/Insights'
import Budgets from './pages/Budgets'
import Settings from './pages/Settings'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='expenses' element={<Expenses />} />
        <Route path='insights' element={<Insights />} />
        <Route path='budgets' element={<Budgets />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App