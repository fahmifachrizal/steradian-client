import React, { useState } from 'react'
import { postRegister } from '../stores/Actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [register, setRegister] = useState({
    email:null,
    password:null, 
    phoneNumber:null, 
    city:null, 
    zip:null, 
    message:null, 
    username:null, 
    address:null 
  })

  const handleRegister = async ()=>{
    console.log(register, 'dicomp')
    await dispatch(postRegister(register))
    navigate('/login')
  }
  
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-blue-200'>
      <div className='bg-white p-8 w-96'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl font-semibold'>Register</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <label className='text-sm'>Username</label>
            <input className='border border-gray-400 rounded-sm p-1' type='text'  onChange={(e)=>setRegister({...register, username:e.target.value})}/>
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>Email</label>
            <input className='border border-gray-400 rounded-sm p-1' type='email'  onChange={(e)=>setRegister({...register, email:e.target.value})}/>
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>Password</label>
            <input className='border border-gray-400 rounded-sm p-1' type='password'  onChange={(e)=>setRegister({...register, password:e.target.value})}/>
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>Phone Number</label>
            <input className='border border-gray-400 rounded-sm p-1' type='number'  onChange={(e)=>setRegister({...register, phoneNumber:e.target.value})}/>
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>City</label>
            <input className='border border-gray-400 rounded-sm p-1' type='text'  onChange={(e)=>setRegister({...register, city:e.target.value})}/>
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>Address</label>
            <input className='border border-gray-400 rounded-sm p-1' type='text'  onChange={(e)=>setRegister({...register, address:e.target.value})}/>
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>Zip Code</label>
            <input className='border border-gray-400 rounded-sm p-1' type='number'  onChange={(e)=>setRegister({...register, zip:e.target.value})}/>
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>Message</label>
            <input className='border border-gray-400 rounded-sm p-1' type='text'  onChange={(e)=>setRegister({...register, message:e.target.value})}/>
          </div>
          <p className='text-sm'>Already registered? login <a className='underline text-blue-500 cursor-pointer' href='/login'>here</a></p>
          <button className='bg-blue-500 text-white rounded-sm p-1' 
            disabled={
              !register.username||!register.email||!register.password||!register.phoneNumber||!register.city||!register.address||!register.zip||!register.message
            } onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>

// { 
//   "email":"fahmi@mail.com", 
//   "phoneNumber":"081234567890", 
//   "city":"Jakarta", 
//   "zip":"12345", 
//   "message":"Hello World", 
//   "password":"fahmi123", 
//   "username":"fahmi123", 
//   "address":"Jl. Jalan" 
// }
  )
}

export default Register