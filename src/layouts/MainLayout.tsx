import NavBar from 'components/mainComponents/NavBar'
import SideBar from 'components/mainComponents/SideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <SideBar/>
        <NavBar />
         <Outlet />
    </div>
  )
}

export default MainLayout