import React, { Component } from 'react'
import { addTodo }          from '../redux/actions'


class TodoInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: ''
    }
  }
  
  _handleChange(e){
    this.setState({inputText: e.target.value})
  }
  
  _handleSubmit(event){
    this.props.dispatch(addTodo(this.state.inputText))
    
  }
  
  render(){
    return (
      <div>
        <input 
        type="text"
        placeholder="Type in todo"
        value={this.state.inputText}
        onChange={this._handleChange.bind(this)}
        />
        <button onClick={this._handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default TodoInput