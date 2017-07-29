import React, { Component } from 'react'
import { RecipeCard } from './RecipeCard'

export class Category extends Component {
  render() {
    const { recipes, openRecipe } = this.props

    return (
      <div className="category-page">
        <h1>Breakfast Recipes</h1>
        {
          Object.keys(recipes)
            .map( recipe => {
            return <RecipeCard 
              key={ recipe }
              index={ recipe }
              recipe={ recipes[recipe] }
              openRecipe={ openRecipe }
            /> 
          })
        }
      </div>
    )
  }
}

Category.propTypes = {
  recipes: React.PropTypes.object.isRequired,
  openRecipe: React.PropTypes.func.isRequired
}