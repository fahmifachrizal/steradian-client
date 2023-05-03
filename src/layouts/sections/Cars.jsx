import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getCars } from '../../stores/Actions'
import CardCars from '../../components/CardCars'
import { useLocation } from 'react-router-dom';

function Cars() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { cars, selectedCar: carId } = useSelector(state => state.carReducer)

  useEffect(()=>{
    dispatch(getCars())
  },[])

  return (
    <div className='px-16 w-full pb-16'>
      <h1 className='text-4xl font-semibold my-8'>Manage Fleet</h1>
      <div className='flex flex-wrap gap-8'>
        {
          cars.map((car, index)=>(
            <CardCars car={car} key={index} currentPath={location.pathname}/>
          ))
        }
      </div>
    </div>
  )
}

export default Cars