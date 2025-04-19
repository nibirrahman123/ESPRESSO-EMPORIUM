import { FaPen, FaRegEye } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Banner from './components/Banner'
import leftImg from './assets/more/4.png'
import rightImg from './assets/more/5.png'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'

const Home = () => {
  const [allCoffee, setAllCoffee] = useState([])

  // Fetch all coffee from server
  const fetchCoffees = () => {
    fetch('http://localhost:5000/coffee')
      .then(res => res.json())
      .then(data => setAllCoffee(data))
      .catch(err => console.error('Error fetching coffee:', err))
  }

  // Load on component mount
  useEffect(() => {
    fetchCoffees()
  }, [])

  // Handle delete
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(response => {
              fetchCoffees() // Refresh data after delete
          })
      }
    })
  }

  return (
    <div className=''>
      <Banner />

      <div className='relative'>
        <img src={leftImg} className='absolute -left-0 md:-left-20 md:block hidden top-10 md:w-40 ' alt="" />
        <div className='text-center pt-8 '>
          <h6 className='text-xl'> --- Sip & Savor --- </h6>
          <h1 style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)' }} className='text-7xl rancho'>Our Popular Products</h1>
        </div>

        <div className='max-w-[98vw] md:max-w-[70vw] lg:max-w-[90vw] xl:max-w-[85vw] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center py-10'>
          {
            allCoffee.map((singleCoffeeInfo, idx) => (
              <div key={idx} className='flex md:flex-row  items-center justify-between px-3 py-4 md:py-6 md:px-10 gap-4 md:gap-10 border rounded-md uppercase bg-[#e9c3511f] w-full'>
                <img src={singleCoffeeInfo.photo} className='md:w-24 md:h-40 w-20 h-36 object-cover' alt="" />
                <div className='xl:text-[1vw] lg:text-xs font-bold space-y-2 text-gray-600'>
                  <h1>Name : {singleCoffeeInfo.name}</h1>
                  <h1>Chef : {singleCoffeeInfo.chef}</h1>
                  <h1>Price : 1000 Taka [fixed]</h1>
                </div>
                <div className='flex flex-col gap-4'>
                  <Link to={'/'} className='md:w-10 md:h-10 h-7 w-7 bg-[#d2b48c] flex items-center justify-center text-white text-xl md:text-2xl rounded-md'><FaRegEye /></Link>
                  <Link to={`/updateCoffee/${singleCoffeeInfo._id}`} className='md:w-10 md:h-10 h-7 w-7 bg-[#3c393b] flex items-center justify-center text-white text-xl md:text-2xl rounded-md'><FaPen /></Link>
                  <button onClick={() => handleDelete(singleCoffeeInfo._id)} className='md:w-10 md:h-10 h-7 w-7 bg-[#ea4744] flex items-center justify-center text-white text-xl md:text-2xl rounded-md'><RiDeleteBinLine /></button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home



