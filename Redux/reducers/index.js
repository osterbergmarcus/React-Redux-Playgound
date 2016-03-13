import { combineReducers } from 'redux'
import todoReducer         from './todoReducer'
import userReducer         from './userReducer'

//combine reducers.. Map state propertis to individual reducers
const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer
})

export default rootReducer