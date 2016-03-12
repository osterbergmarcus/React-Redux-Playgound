import React, { Component } from 'react'

export default class TodoInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: ''
    }
  }
  
  _handleChange(e){
    this.setState({inputText: e.target.value})
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
        <input type="submit" />
      </div>
    )
  }
}