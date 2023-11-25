import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../dashboard/SideBar'

const DashboardLayout = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout