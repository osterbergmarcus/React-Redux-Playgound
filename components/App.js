import React, { Component } from 'react';
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoInput/>
        <TodoList todos={this.props.todos}/>
      </div>
    )
  }
}

//Using connector to connect the app component to the provided store
//connect() maps the state from the Provider to props for App component
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)