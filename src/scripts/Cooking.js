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

  craftTime(recipe) {
    const { prepTime, cookTime } = recipe

    const hours = Math.floor( (prepTime + cookTime) / 60 )
    const minutesLeft = (prepTime + cookTime) % 60
    const message = `${hours} hours ${minutesLeft} minutes`

    return message
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
                               craftTime={ this.craftTime(recipe) }
            /> 
          })
        }

        <div className="recipe-window">
          <h1>{ this.state.activeRecipe.title }</h1>
          <p>{ this.state.activeRecipe.instructions }</p>
        </div>
      </div>
    )
  }
}