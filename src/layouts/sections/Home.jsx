import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker'
import React, { useEffect, useState } from 'react'
import '@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, postOrder } from '../../stores/Actions';
import CardCars from '../../components/CardCars';
import { useNavigate } from 'react-router';


function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cars, selectedCar: carId } = useSelector(state => state.carReducer)
  const [value, onChange] = useState([new Date(), new Date()])
  const [pickUpLoc, setPickUpLoc] = useState(null)
  const [dropOffLoc, setDropOffLoc] = useState(null)

  useEffect(()=>{
    dispatch(getCars())
  },[])

  const handleOrder = async ()=>{
    await dispatch(postOrder(
      {
        pickUpLoc,
        dropOffLoc,
        pickUpDate:value[0].toISOString().slice(0, 10),
        dropOffDate:value[1].toISOString().slice(0, 10),
        pickUpTime:value[0].toISOString(),
        carId
      }
    ))
    navigate('/orders')
  }
  
  return (
    <div className='px-16 w-full'>
      <h1 className='text-4xl font-semibold my-8'>Create Orders</h1>
      <div className='flex items-center justify-center flex-col gap-y-6'>
        <div className='flex gap-4 text-sm'>
          <div>
            <label htmlFor="pickUpLoc">Pick Up Location</label>
            <input type="text" name="pickUpLoc" id="pickUpLoc" className='border-2 border-gray-300 rounded-md w-full p-2' onChange={(e)=>setPickUpLoc(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="dropOffLoc">Drop Off Location</label>
            <input type="text" name="dropOffLoc" id="dropOffLoc" className='border-2 border-gray-300 rounded-md w-full p-2' onChange={(e)=>setDropOffLoc(e.target.value)}/>
          </div>
        </div>
        <div className='flex justify-center gap-x-4'>
          <div className='bg-white w-fit'>
            <DateTimeRangePicker onChange={onChange} value={value} />
          </div>
          <button className='bg-blue-500 text-white rounded-sm py-1 px-4 disabled:bg-gray-400' disabled={!value[0]||!value[1]||!carId||!pickUpLoc||!dropOffLoc} onClick={handleOrder}>
            Create Order
          </button>
        </div>
        <div className='flex flex-wrap gap-8 mb-16'>
          {
            cars.map((car, index)=>(
              <CardCars car={car} key={index}/>
              ))
          }
        </div>
      </div> 
    </div>
  )
}

export default Home

// {
//   id:8,
//   pickUpLoc:5 Emmet Drive,
//   dropOffLoc:987 Coleman Lane,
//   pickUpDate:19-Aug-2022,
//   dropOffDate:1-Sep-2022,
//   pickUpTime:19-Aug-2022 07:00:00,
//   carId:33,
//   userId:1,
//   adminId:null
// }