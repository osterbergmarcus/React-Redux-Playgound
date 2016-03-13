import { CREATE_USER_ID } from '../actions'

//Define export reducer, slicing out user property from state.
const userReducer = (user = {}, action) => {
  switch(action.type) {
    case CREATE_USER_ID:
      return {
        username: user.username,
        id: action.id
      }
    default:
      return user;
  }
}

export default userReducer