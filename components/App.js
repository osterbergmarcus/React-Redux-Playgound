import React, { Component }   from 'react'
import TodoInput              from './TodoInput'
import TodoList               from './TodoList'
import UserInfo               from './UserInfo'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions }            from '../redux/actions'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <UserInfo createNewUserId={this.props.actions.createNewUserId} user={this.props.user}/>
        <TodoInput addTodo={this.props.actions.addTodo}/>
        <TodoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    )
  }
}

//Using connector to connect the app component to the provided store
//connect() maps the state and dispatch action
//from the Provider to props for App component
function mapStateToProps(state) {
  return state
}

//Wrapping actions with the dispatcher
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)