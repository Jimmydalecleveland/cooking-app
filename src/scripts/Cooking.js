import React, { Component } from 'react'
import { Nav } from './Nav'
import { RecipeCard } from './RecipeCard'

export class Cooking extends Component {
  constructor(props) {
    super(props)

    this.setActiveRecipe = this.setActiveRecipe.bind(this)

    this.state = {
      recipes: [
        {
          id: 1,
          title: "Chicken Stew",
          prepTime: 35,
          cookTime: 120,
          instructions: "Boil'em, Mash'em, Stick'em in a stew.",
          ingredients: ['Milk', 'Chicken', 'Eggs', 'Mews']
        }
      ],
      activeRecipe: ''
    }
  }

  setActiveRecipe(recipe) {
    console.log("setActiveRecipe fired")
    this.setState({
      activeRecipe: recipe
    })

  }
  
  render() {
    const { recipes } = this.state
    return (
      <div className="app-wrapper">
        <Nav />
        {
          recipes.map( recipe => {
            return <RecipeCard key={ recipe.id }
                               recipe={ recipe }
                               title={ recipe.title }
                               prepTime={ recipe.prepTime }
                               cookTime={ recipe.cookTime }
                               ingredients={ recipe.ingredients }
                               setActive={ this.setActiveRecipe }
            /> 
          })
        }

        { this.state.activeRecipe.title }
      </div>
    )
  }
}