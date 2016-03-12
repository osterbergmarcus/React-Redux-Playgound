//Define and export actions
export const ADD_TODO = 'ADD_TODO'


//Define and export action creators
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text: text
  }
}