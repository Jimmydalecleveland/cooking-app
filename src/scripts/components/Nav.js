import React, { Component } from 'react'

export class Nav extends Component {
  
  render() {
    return (
      <div className="nav">
        <span className="logo">{this.props.title || 'Cooking App'}</span>
      </div>
    )
  }
}

Nav.propTypes = {
  title: React.PropTypes.string.isRequired,
}