import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { NavLink } from 'react-router-dom';




const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const supplier = form.supplier.value
    const category = form.category.value
    const chef = form.chef.value
    const taste = form.taste.value
    const details = form.details.value
    const photo = form.photo.value
    const coffeeInfo = {name,supplier,category,chef,taste,details,photo}
    console.log(coffeeInfo)
    fetch('http://localhost:5000/coffee',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(coffeeInfo)

    })
    .then(res => res.json())
    .then(coffeeData => {
      console.log(coffeeData)
      if(coffeeData.acknowledged){
        form.reset()
      }
    })



  }

  return (
    <div className=' max-w-[85vw] mx-auto mb-16'>
      <div className='flex items-center justify-start'>
        <FaChevronLeft />
        <NavLink to={'/'}><button style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)' }} className='p-5 rancho text-2xl'>Back to home</button></NavLink>
      </div>
      <div className=' flex flex-col w-full items-center bg-[#f4f3f0] py-8 px-20 gap-4'>
        <div className='text-center space-y-2 max-w-[800px]'>
          <h1   style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)' }} className='text-4xl text-gray-700 font-extrabold uppercase rancho'>Add New Coffee</h1>
          <h5 className='font-bold text-gray-600'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</h5>
        </div>
        <form onSubmit={handleAddCoffee} className='w-full space-y-4'>
          <div className='flex w-full gap-4 '>
            <div className='flex space-y-4 flex-col w-[50%]'>

              <label for='Name'>Name</label>
              <input type="text" id='Name' name='name' placeholder='Enter coffee name' />
              <label for='supplier'>Supplier</label>
              <input type="text" id='supplier' name='supplier' placeholder='Enter coffee suppilier' />
              <label for='category'>Category</label>
              <input type="text" id='category' name='category' placeholder='Enter coffee category' />
            </div>
            <div className='flex space-y-4 flex-col w-[50%]'>
              <label for='Chef'>Chef</label>
              <input type="text" id='Chef' name='chef' placeholder='Enter coffee chief' />
              <label for='Taste'>Taste</label>
              <input type="text" id='Taste' name='taste' placeholder='Enter coffee taste' />
              <label for='Details'>Details</label>
              <input type="text" id='Details' name='details' placeholder='Enter coffee details' />
            </div>
          </div>
          <label for='photo'>Photo</label>
          <div className='space-y-5 pt-4'>
            <input type="text" id='photo' name='photo' placeholder='Enter Photo URL' className='w-full' />
            <button className='w-full bg-[#d2b48c] p-3 rounded-md border '>Add Coffie</button>
          </div>
        </form>
      </div>
    </div>
  )
}



export default AddCoffee