import { createStore } from 'redux'
import reducer from './reducer'



//configure and creating store
//using es6 default parameters
//initialState = initialState || {todos: []}
export default function configureStore(initialState = {todos: []}) {
  return createStore(reducer, initialState)  
}