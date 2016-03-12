//Actions
const ADD_TODO = 'ADD_TODO'


//Define and export ACTION CREATORS
export default actions = {
  addTodo(text){
    return {
      type: ADD_TODO,
      text: text
    }
  }
}