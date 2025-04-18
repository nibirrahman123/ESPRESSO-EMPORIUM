import React from 'react'
import { FaPen, FaRegEye } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Link, useLoaderData } from 'react-router-dom'
import Banner from './components/Banner'

const Home = () => {
  const loaderData = useLoaderData()
  console.log(loaderData)
  return (
    <div>
      <div className=''>
        <Banner />
      </div>
      <div className='text-center pt-8'>
        <h6 className='text-xl'> --- Sip & Savor --- </h6>
        <h1 style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)' }} className='text-7xl rancho'>Our Pupular Products</h1>
      </div>
      <div className=' max-w-[85vw] mx-auto    grid grid-cols-2 gap-5  justify-items-center py-10'>
        {
          loaderData.map((singleCoffeeInfo, idx) => (
            <div className='flex items-center justify-between  px-10 gap-10 border rounded-md uppercase bg-[#f5f4f1]  w-full'>
              <img src={singleCoffeeInfo.photo} className='w-32 h-60 object-cover' alt="" />
              <div className='text-2xl font-bold text-gray-600'>
                <h1>Name : {singleCoffeeInfo.name}</h1>
                <h1>Chef : {singleCoffeeInfo.chef}</h1>
                <h1>Price : 1000 Taka [fixed]</h1>
              </div>
              <div className='space-y-4'>
                <Link to={'/'} className='w-10 h-10 bg-[#d2b48c] flex items-center justify-center text-white text-2xl rounded-md'><FaRegEye /></Link>
                <Link to={'/'} className='w-10 h-10 bg-[#3c393b] flex items-center justify-center text-white text-2xl rounded-md'><FaPen /></Link>
                <Link to={'/'} className='w-10 h-10 bg-[#ea4744] flex items-center justify-center text-white text-2xl rounded-md'><RiDeleteBinLine /></Link>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home