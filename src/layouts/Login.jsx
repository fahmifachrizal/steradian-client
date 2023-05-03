import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postLogin } from '../stores/Actions'
import { useNavigate } from 'react-router'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState(false)
  const [login, setLogin] = useState({email:null, password:null})
  
  const handleLogin = async ()=>{
    await dispatch(postLogin(login.email, login.password, isAdmin))
    navigate('/')
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-blue-200'>
      <div className='bg-white p-8 w-96'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl font-semibold'>Login</h1>
          {
            !isAdmin ?
              <p className='text-sm'>Admin? Login <span className='underline text-blue-500 cursor-pointer' onClick={()=>setIsAdmin(true)}>here</span></p>
            :
              <p className='text-sm'>Not admin? Login <span className='underline text-blue-500 cursor-pointer' onClick={()=>setIsAdmin(false)}>here</span></p>
          }
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <label className='text-sm'>Email</label>
            <input className='border border-gray-400 rounded-sm p-1' type='email' autoComplete='off' onChange={(e)=>setLogin({...login, email:e.target.value})}/>
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>Password</label>
            <input className='border border-gray-400 rounded-sm p-1' type='password' onChange={(e)=>setLogin({...login, password:e.target.value})}/>
          </div>
          {
            !isAdmin &&
            <p className='text-sm'>Not registered? register <a className='underline text-blue-500 cursor-pointer' href='/register'>here</a></p>
          }
          <button className='bg-blue-500 text-white rounded-sm p-1 disabled:bg-gray-400' disabled={!login.email || !login.password} onClick={handleLogin}>Login{isAdmin&&' as Admin'}</button>
        </div>
      </div>
    </div>
  )
}

export default Login