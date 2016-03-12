import React          from 'react'
import { render }     from 'react-dom'
import App            from '../components/App'
import configureStore from '../redux/store'
import { Provider }   from 'react-redux'


let initialState = {
  todos: [{id: 0, completed: false, text: 'test'}]
}

//set up store
let store = configureStore(initialState)

//render the main component and mount to the root DOM element
//Using the provider to pass store down the nested components
render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app')
)