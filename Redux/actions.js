//Define and export actions
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const DELETE_TODO = 'DELETE_TODO'


//Define and export action creators
export const actions = {
  addTodo: text => {
   return {
      type: ADD_TODO,
      text: text
   }
  },

  completeTodo: id => {
    return {
      type: COMPLETE_TODO,
      id: id
    }
  },

  deleteTodo: id => {
    return {
      type: DELETE_TODO,
      id: id
    }
  }
}