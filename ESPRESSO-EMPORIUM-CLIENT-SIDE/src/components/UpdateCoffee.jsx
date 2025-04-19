import React from 'react'
import banner from '../assets/more/7.png'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  console.log(id)
  const handleUpdate = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const chef = form.chef.value
    const updateInfo = {
      name,
      chef
    }
    console.log(updateInfo)
    fetch(`http://localhost:5000/coffee/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateInfo)
    })
    .then(res => res.json())
    .then(response => {
      if(response.modifiedCount > 0){
        navigate('/')
        
      }
    })


  }
  return (
    <form
    onSubmit={handleUpdate}
      className='h-screen flex flex-col items-center gap-4 justify-center bg-cover bg-fixed'
      style={{
        backgroundImage: `url(${banner})`
      }}
    >
      <input
        type="text"
        className='input outline-1  w-[70vw]'
        placeholder='Update Name'
        name='name'
      />
      <input
        type="text"
        className='input outline-1  w-[70vw]'
        placeholder='Update Chef Name'
        name='chef'
      />
      <button className='btn bg-white w-[70vw]' type='submit'>Update</button>
    </form>
  )
}

export default UpdateCoffee