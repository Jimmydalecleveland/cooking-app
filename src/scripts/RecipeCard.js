import React, { Component } from 'react'

export class RecipeCard extends Component {
  constructor(props) {
    super(props)
  }

  craftTime() {
    const { prepTime, cookTime } = this.props

    const hours = Math.floor( (prepTime + cookTime) / 60 )
    const minutesLeft = (prepTime + cookTime) % 60
    const message = `${hours} hours ${minutesLeft} minutes`

    return message
  }

  handleClick() {
    this.props.setActive(this.props.recipe)
  }
  
  render() {
    const { title, prepTime, cookTime, ingredients } = this.props

    return (
      <div className="recipe-card">
        <h3>{ title }</h3>
        <p>Time to make: { this.craftTime() }</p>
        <button className="button" onClick={ () => this.handleClick() } >View Recipe</button>
      </div>
    )
  }
}