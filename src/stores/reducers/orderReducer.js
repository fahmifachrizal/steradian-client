const initialState = {
  orders: [],
  order:{},
  idOrder:null,
  currentPageOrders:[],
  isLoading: true,
  page:1,
  numPage:null
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'orders/getOrders':
      return {
        ...state,
        orders:action.payload,
      }
    case 'orders/getOrder':
      console.log(action.payload, 'di reducer')
      return {
        ...state,
        order:action.payload,
        isLoading: false,
      }
    case 'orders/getOrderId':
      return {
        ...state,
        idOrder:action.payload,
      }
    default:
      return state
  }
}

export default orderReducer