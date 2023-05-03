import React from 'react'

function Navbar() {
  return (
    <div className='w-screen h-16 bg-white'>
      <div className='flex justify-between items-center h-full px-16'>
        <a href='/' className='text-2xl font-semibold'>Carrent</a>
        <div className='flex gap-x-4 items-center'>
          {
            JSON.parse(localStorage.getItem('isAdmin'))&&
            <a href='/cars'>Cars</a>
          }
          <a href='/orders'>Orders</a>
          <h1 className='text-lg'>{localStorage.getItem('username')}</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar