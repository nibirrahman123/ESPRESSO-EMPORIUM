import React from 'react'
import { FaChevronLeft } from "react-icons/fa"
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const navigate = useNavigate()

  const handleAddCoffee = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const supplier = form.supplier.value
    const category = form.category.value
    const chef = form.chef.value
    const taste = form.taste.value
    const details = form.details.value
    const photo = form.photo.value

    const coffeeInfo = { name, supplier, category, chef, taste, details, photo }

    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coffeeInfo)
    })
      .then(res => res.json())
      .then(coffeeData => {
        if (coffeeData.acknowledged) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Coffee added successfully!',
            confirmButtonColor: '#d2b48c'
          }).then(() => {
            form.reset()
            navigate('/') // Redirect to home after confirmation
          })
        }
      })
      .catch(error => {
        console.error('Error adding coffee:', error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      })
  }

  return (
    <div className='max-w-[85vw] mx-auto mb-16'>
      <div className='flex items-center justify-start'>
        <FaChevronLeft />
        <NavLink to='/'><button className='p-5 rancho text-2xl'>Back to home</button></NavLink>
      </div>
      <div className='flex flex-col w-full items-center bg-[#f4f3f0] py-8 px-20 gap-4'>
        <div className='text-center space-y-2 max-w-[800px]'>
          <h1 className='text-4xl text-gray-700 font-extrabold uppercase rancho'>Add New Coffee</h1>
          <h5 className='font-bold text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h5>
        </div>
        <form onSubmit={handleAddCoffee} className='w-full space-y-4'>
          <div className='flex w-full gap-4'>
            <div className='flex flex-col space-y-4 w-[50%]'>
              <label htmlFor='Name'>Name</label>
              <input type="text" id='Name' name='name' placeholder='Enter coffee name' required />

              <label htmlFor='supplier'>Supplier</label>
              <input type="text" id='supplier' name='supplier' placeholder='Enter coffee supplier' required />

              <label htmlFor='category'>Category</label>
              <input type="text" id='category' name='category' placeholder='Enter coffee category' required />
            </div>

            <div className='flex flex-col space-y-4 w-[50%]'>
              <label htmlFor='Chef'>Chef</label>
              <input type="text" id='Chef' name='chef' placeholder='Enter coffee chef' required />

              <label htmlFor='Taste'>Taste</label>
              <input type="text" id='Taste' name='taste' placeholder='Enter coffee taste' required />

              <label htmlFor='Details'>Details</label>
              <input type="text" id='Details' name='details' placeholder='Enter coffee details' required />
            </div>
          </div>

          <label htmlFor='photo'>Photo</label>
          <div className='space-y-5 pt-4'>
            <input type="text" id='photo' name='photo' placeholder='Enter Photo URL' className='w-full' required />
            <button type="submit" className='w-full bg-[#d2b48c] p-3 rounded-md border'>Add Coffee</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCoffee
