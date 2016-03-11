import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

export default class TextInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: 'initial state'
    }
  }
  
  _onChange(e){
    this.setState({inputText: e.target.value})
  }
  
  render(){
    return (
      <div>
      <input 
      type="text"
      value={this.state.inputText}
      onChange={this._onChange.bind(this)}
      />
      <TextDisplay text={this.state.inputText} />
      </div>
    )
  }
}