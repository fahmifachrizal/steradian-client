import React from 'react'

function Modal() {
  return (
    <div className='w-full h-full flex items-center justify-center z-50'>
      <div className='bg-white p-8 w-96'>
        <div className=''>
          <h1>Are you sure want to delete this order?</h1>
          <div>
            <button className='bg-red-500 text-white px-4 py-2 rounded-sm'>Cancel</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-sm'>Delete</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Modal