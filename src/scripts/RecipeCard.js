import React, { Component } from 'react'

export class RecipeCard extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.setActive(this.props.recipe)
  }
  
  render() {
    const { title, prepTime, cookTime, ingredients } = this.props

    return (
      <div className="recipe-card">
        <h3>{ title }</h3>
        <p>Time to make: { this.props.craftTime }</p>
        <button className="button" onClick={ () => this.handleClick() } >View Recipe</button>
      </div>
    )
  }
}