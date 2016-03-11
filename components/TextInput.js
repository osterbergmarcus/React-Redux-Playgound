import React, { Component } from 'react';

export default class TextInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: 'initial state'
    }
  }
  
  render(){
    return (
      <input type="text" defaultValue={this.state.inputText}></input>
    )
  }
}