import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrder, getOrderId, getOrders, toogleModal } from '../../stores/Actions'
import { useNavigate } from 'react-router'
import Modal from '../../components/Modal'

function Orders() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { orders } = useSelector(state => state.orderReducer)
  const { toogleModal } = useSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(getOrders())
  }, [])
  
  const handleDelete = (orderId) => {
    // dispatch(toogleModal())
    dispatch(deleteOrder(orderId))
  }

  const handleEdit = async (orderId) => {
    // dispatch(toogleModal())
    await dispatch(getOrderId(orderId))
    navigate('/edit')
  }

  return (
    <div className='px-16 w-full pb-16 relative'>
      <h1 className='text-4xl font-semibold my-8'>Orders</h1>

      <table className='text-sm'>
        <thead className='bg-gray-200 px-4 rounded-t-xl'>
          <tr>
            <th className='w-96 py-2'>Pick up Location</th>
            <th className='w-48 py-2'>Pick up Date</th>
            <th className='w-48 py-2'>Pick up Time</th>
            <th className='w-96 py-2'>Drop Off Location</th>
            <th className='w-48 py-2'>Drop Off Time</th>
            <th className='w-96 py-2'>Car Name (Type)</th>
            {
              JSON.parse(localStorage.getItem('isAdmin')) && (
                <th className='w-96'>User</th>
              )
            }
            <th className='w-96'>Actions</th>
          </tr>
        </thead>
        <tbody className='bg-gray-100 text-center'>
          { orders.map((order, index) => (
            <tr key={order.id}>
              <td className='border px-4 py-2'>{order.pickUpLoc}</td>
              <td className='border px-4 py-2'>{(new Date(order.pickUpDate)).toISOString().slice(0,10)}</td>
              <td className='border px-4 py-2'>{(new Date(order.pickUpTime)).toISOString().slice(11,16)}</td>
              <td className='border px-4 py-2'>{order.dropOffLoc}</td>
              <td className='border px-4 py-2'>{(new Date(order.dropOffDate)).toISOString().slice(0,10)}</td>
              <td className='border px-4 py-2'>{order.Car.name} (<span className='italic'>{order.Car.carType}</span>)</td>
              {
                JSON.parse(localStorage.getItem('isAdmin')) && (
                  <td className='border px-4 py-2 font-semibold'>{order.User?order.User.username:'Admin'}</td>
                )
              }
              <td className='border px-4 py-2 flex gap-x-4 items-center justify-center'>
                <button className='bg-blue-500 text-white rounded-sm py-1 px-4' onClick={()=>handleEdit(order.id)}>
                  Edit
                </button>
                {
                  JSON.parse(localStorage.getItem('isAdmin')) &&(
                    <button className='bg-red-500 text-white rounded-sm py-1 px-4' onClick={()=>handleDelete(order.id)}>
                      Delete
                    </button>
                  )
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Orders

// pickUpLoc,
// dropOffLoc,
// pickUpDate,
// dropOffDate,
// pickUpTime,
// carId