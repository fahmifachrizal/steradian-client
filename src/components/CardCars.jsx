import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCar, selectCar } from "../stores/Actions"

function CardCars({ car, currentPath }) {
  const dispatch = useDispatch()
  const { selectedCar } = useSelector(state => state.carReducer)

  const handleClicked = (carId) => {
    dispatch(selectCar(carId))
  }

  const handleDeleteCar = async (carId) => {
    await dispatch(deleteCar(carId))
  }

  return (
    <div className={`w-56 bg-white flex flex-col cursor-pointer group relative ${selectedCar==car.id?'ring-blue-600 ring-4':''}`} onClick={()=>handleClicked(car.id)}>
      { currentPath=='/cars'&&
        <button className="border border-white absolute items-center justify-center top-0 right-0 rounded-full h-8 w-8 bg-red-500 text-white translate-x-1/2 -translate-y-1/2 group-hover:block hidden" onClick={()=>handleDeleteCar(car.id)}>X</button>}
      <img src={car.image} alt={car.name} className="h-36 bg-black"/>
      <div className="text-sm flex justify-between p-2">
        <div>
          <p>{car.name}</p>
          <p className="italic">{car.carType}</p>
        </div>
        <p>Rating: {car.rating}</p>
      </div>
    </div>
  )
}

export default CardCars