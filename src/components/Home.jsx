import React, { useState } from 'react'
import Header from '../Header'
import Sidebar from '../sidebar'
import MainContainer from './mainContainer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  return <>
    <Header/>
    <div className="flex contain-layout p-4">
      <Sidebar menu={{isMenuOpen}}/>
      <Outlet menu={{isMenuOpen, setIsMenuOpen}}/>
    </div>

  </>

  
}

export default Home