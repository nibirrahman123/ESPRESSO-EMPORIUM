import React from 'react'
import teaImg from '../assets/more/logo1.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { BiSolidMessageDetail } from 'react-icons/bi'
import { FaLocationDot } from 'react-icons/fa6'
const Footer = () => {
    return (
        <div className=' max-w-[85vw] mx-auto py-6'>
            <div className='flex flex-col md:flex-row  md:items-center justify-between'>
                <div className='space-y-3 w-[50%]'>
                    <img src={teaImg} className='w-20' alt="" />
                    <h3 style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)' }} className='text-5xl rancho'>Espresso Emporium</h3>
                    <h6 className='max-w-[500px]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</h6>
                    <div style={{ display: 'flex', gap: '15px', fontSize: '24px' }}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    </div>
                    <h2 style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)' }} className='rancho text-3xl'>Get in Touch</h2>
                    <div className='space-y-3'>
                        <div className='flex items-center gap-2'>
                            <FaPhoneAlt />
                            <h1> +88 01533 333 333</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BiSolidMessageDetail />
                            <h1>espresso@gmail.com</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaLocationDot />
                            <h1 className=''>72,wall street,king road dhaka</h1>
                        </div>
                    </div>
                </div>
                <div className='flex  flex-col w-full md:w-[40%] gap-4'>
                    <h5 style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)' }} className='rancho text-5xl'>Connect with Us</h5>
                    <input placeholder='Name' className='outline' type="text" />
                    <input placeholder='Name' className='outline' type="text" />
                    <textarea
                       placeholder='Message' className="w-full h-40 px-4 py-2 border border-gray-300 rounded-md outline  "
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Footer