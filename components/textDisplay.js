import React, { Component } from 'react';

export default class TextDisplay extends Component {
  render() {
    return (
      <div>I'm display text: {this.props.text}</div>
    )
  }
}