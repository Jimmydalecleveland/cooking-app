import React, { Component } from 'react'

export class RecipeCard extends Component {
  render() {
    const {
      title,
      prepTime,
      cookTime,
      ingredients
    } = this.props.recipe

    const index = this.props.index
    
    return (
      <div className="recipe-card">
        <div className="recipe-card__img-box"></div>
        <h3>{ title }</h3>
        <p className="prep-time">Prep time: {prepTime} minutes</p>
        <p className="cook-time">Cook time: {cookTime} minutes</p>
        <button className="button" onClick={ () => this.props.openRecipe(index) } >View Recipe</button>
      </div>
    )
  }
}

RecipeCard.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
  openRecipe: React.PropTypes.func.isRequired
}