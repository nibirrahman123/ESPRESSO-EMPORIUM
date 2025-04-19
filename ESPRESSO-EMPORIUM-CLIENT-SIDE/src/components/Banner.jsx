import React from 'react'
import bannerImg from '../assets/more/3.png'

const Banner = () => {
  return (
    <div className='relative h-[700px] w-screen'>
      <img src={bannerImg} className='w-full h-full object-cover' alt="" />
      <div className='absolute top-[40%] right-20  text-white space-y-5 p-5'>
        <h1 className='text-5xl rancho'>Would you like a Cup of Delicious Coffee?</h1>
        <h6 className='max-w-[660px] text-sm'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</h6>
        <button className='btn'>learn more</button>
      </div>

    </div>
  )
}

export default Banner


