const initialState = {
  cars: [],
  selectedCar:null,
  currentPageCars:[],
  isLoading: true,
  page:1,
  numPage:null
}

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cars/getCars':
      return {
        ...state,
        cars:action.payload,
        currentPageCars:action.payload.slice(0,8),
        numPage:Math.ceil(action.payload.length/8),
        isLoading: false,
      }
    case 'cars/currentPageCars':
      return {
        ...state,
        currentPageCars:state.cars.slice((action.payload.page-1)*8,action.payload.page*8),
        page:action.payload.page,
        isLoading: false,
      }
      case 'cars/selectedCar':
        return {
          ...state,
          selectedCar:action.payload.carId,
        }
    default:
      return state
  }
}

export default carReducer