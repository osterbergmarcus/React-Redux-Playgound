import { ADD_TODO } from './actions'


//Helper function
function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

//Define and export reducer
const reducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
              todos: [{
                text: action.text,
                completed: false,
                id: getId(state)
              }, ...state.todos]
            })
    default:
      return state;
  }
}

export default reducer