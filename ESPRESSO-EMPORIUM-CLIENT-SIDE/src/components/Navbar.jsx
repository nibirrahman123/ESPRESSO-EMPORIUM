import React from 'react'
import navlogo from '../assets/more/21.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
            </div>
            <div className="navbar-center">
                <ul className="menu items-center menu-horizontal px-1">
                    <img src={navlogo} alt="" className='w-10'/>
                    <li><a style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)' }} className="btn btn-ghost text-xl rancho">ESPRESSO EMPORIUM</a></li>
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    )
}

export default Navbar