import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Root = () => {
  return (
    <div className="select-none ">
      <div className='max-w-[100vw] mx-auto'>
        <Navbar />
      </div>
      <div className=''>
        <Outlet />
      </div>
      <div className='bg-[#f6f6f6]'>
        <Footer />
        <div className='bg-black h-10 flex items-center text-gray-100 justify-center'>
          <h1>Copyright Espresso Emporium ! All Rights Reserved </h1>
        </div>
      </div>
    </div>
  )
}

export default Root