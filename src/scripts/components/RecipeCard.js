import React, { Component } from 'react'

export class RecipeCard extends Component {
  constructor(props) {
    super(props)
  }
  
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
        <h3>{ title }</h3>
        <ul>
        {
          ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
        }
        </ul>
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