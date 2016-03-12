import { applyMiddleware, compose, createStore } from 'redux'
import reducer                                   from './reducer'
import logger                                    from 'redux-logger'


//Middleware
let appCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

//configure and creating store
//using es6 default parameters
//initialState = initialState || {todos: []}
export default function configureStore(initialState = {todos: []}) {
  return appCreateStore(reducer, initialState)  
}