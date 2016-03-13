import React, { Component }         from 'react'

class TodoItem extends Component {
  _handleComplete(e){
    this.props.actions.completeTodo(this.props.todo.id)
  }
  
  _handleDelete(){
    this.props.actions.deleteTodo(this.props.todo.id)
  }
  
  render(){
    return (
      <li>
        <div>{this.props.todo.text}</div>
        <button onClick={this._handleComplete.bind(this)}>Completed</button>
        <button onClick={this._handleDelete.bind(this)}>Delete</button>
      </li>
    )
  }
}

export default TodoItem