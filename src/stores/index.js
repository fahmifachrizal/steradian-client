import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import orderReducer from './reducers/orderReducer.js'
import carReducer from './reducers/carReducer.js'
import userReducer from './reducers/userReducer.js'

const allReducers = combineReducers({
  orderReducer, carReducer, userReducer
})

const store = createStore(allReducers, applyMiddleware(thunk))

export default store