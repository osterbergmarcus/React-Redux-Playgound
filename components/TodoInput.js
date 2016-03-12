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
  
  _handleSubmit(event){
    console.log('submit working')
    this.props.getState()
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