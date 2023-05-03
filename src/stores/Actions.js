import listActions from "./ActionTypes"

const baseUrl = 'http://localhost:3000'
// USER
export const postLogin = (email, password, isAdmin) => {
  return async (dispatch, getState) => {
    try {
      console.log(email, password, isAdmin)
      const response = await fetch( `${baseUrl}/${isAdmin?'admins':'users'}/login`, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
      })
      const responsJSON = await response.json()
      if (!response.ok){
        throw responsJSON
      } else {
        localStorage.setItem('access_token', responsJSON.access_token)
        localStorage.setItem('username', responsJSON.username)
        localStorage.setItem('isAdmin', responsJSON.isAdmin)
      }
    } catch (response) {
      return {data: null, error:response}
    }
  }
}

export const postRegister = (
  {
    email,
    password, 
    phoneNumber, 
    city, 
    zip, 
    message, 
    username, 
    address 
  }) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch( `${baseUrl}/users/register`, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password, phoneNumber, city, zip, message, username, address })
      })
      const responsJSON = await response.json()
      if (!response.ok){
        throw responsJSON
      } 
    } catch (response) {
      return {data: null, error:response}
    }
  }
}

// Cars
export const getCars = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch( `${baseUrl}/cars`, {
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.getItem('access_token')
        }
      })
      const responsJSON = await response.json()
      if (!response.ok){
        throw responsJSON
      } else {
        dispatch({type:listActions.getCars, payload: responsJSON.data})
      }
    } catch (response) {
      return {data: null, error:response}
    }
  }
}

export const selectCar = (carId) => {
  return async (dispatch, getState) => {
    try {
      dispatch({type:listActions.selectedCar, payload: {carId}})
    } catch (response) {
      return {data: null, error:response}
    }
  }
}


export const postOrder = (order) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch( `${baseUrl}/orders`, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.getItem('access_token')
        },
        body: JSON.stringify(order)
      })
      const responsJSON = await response.json()
      if (!response.ok){
        throw responsJSON
      } 
    } catch (response) {
      return {data: null, error:response}
    }
  }
}

export const getOrders = (order) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch( `${baseUrl}/orders`, {
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.getItem('access_token')
        }
      })
      const responsJSON = await response.json()
      if (!response.ok){
        throw responsJSON
      } else {
        dispatch({type:listActions.getOrders, payload: responsJSON.data})
      }
    } catch (response) {
      return {data: null, error:response}
    }
  }
}

export const deleteOrder = (orderId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch( `${baseUrl}/orders/${orderId}`, {
        method:'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.getItem('access_token')
        }
      })
      const responsJSON = await response.json()
      if (!response.ok){
        throw responsJSON
      } else {
        dispatch(getOrders())
      }
    } catch (response) {
      return {data: null, error:response}
    }
  }
}

// USER 
export const toogleModal = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({type:listActions.toogleModal})
    } catch (response) {
      return {data: null, error:response}
    }
  }
}

export const getOrderById = (orderId) => {
  return async (dispatch, getState) => {
    try {
      console.log(orderId, 'di action creator')
      const response = await fetch( `${baseUrl}/orders/${orderId}`, {
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.getItem('access_token')
        }
      })
      const responsJSON = await response.json()
      console.log(responsJSON.data, 'hasil fetch')
      if (!response.ok){
        throw responsJSON
      } else {
        dispatch({type:listActions.getOrder, payload: responsJSON.data})
        // return(responsJSON.data)
      }
    } catch (response) {
      return {data: null, error:response}
    }
  }
}

export const getOrderId = (orderId) => {
  return async (dispatch, getState) => {
    try {
        dispatch({type:listActions.getOrderId, payload: orderId})
    } catch (response) {
      return {data: null, error:response}
    }
  }
}

export const deleteCar = (carId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch( `${baseUrl}/cars/${carId}`, {
        method:'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.getItem('access_token')
        }
      })
      const responsJSON = await response.json()
      if (!response.ok){
        throw responsJSON
      } else {
        dispatch(getCars())
      }
    } catch (response) {
      return {data: null, error:response}
    }
  }
}