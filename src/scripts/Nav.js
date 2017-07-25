import React, { Component } from 'react'

export class Nav extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div className="nav">
        <span className="logo">{this.props.activeRecipeTitle === ''? "test" : 'Cooking App'}</span>
      </div>
    )
  }
}