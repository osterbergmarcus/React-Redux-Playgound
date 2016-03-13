import React, { Component } from 'react'


class UserInfo extends Component {
  _handleNewId() {
    this.props.createNewUserId()
  }
  
  render(){
    return (
      <div>
        <div>{this.props.user.username}</div>
        <div>{this.props.user.id}</div>
        <button onClick={this._handleNewId.bind(this)}>Update ID</button>
      </div>
    )
  }
}

export default UserInfo