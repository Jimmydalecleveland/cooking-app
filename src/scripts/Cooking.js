import React, { Component } from 'react'
import { Nav } from './Nav'
import { RecipeCard } from './RecipeCard'
import { RecipePage } from './RecipePage'

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
        },
        {
          id: 2,
          title: "Mew kabobs",
          prepTime: 47,
          cookTime: 25,
          instructions: "Put those mews on some sticks and sizzle their timbers",
          ingredients: ['Mews', 'Peppeps', 'Salt', 'Pepper']
        }
      ],
      activeRecipe: ''
    }
  }

  setActiveRecipe(recipe) {
    this.setState({
      activeRecipe: recipe
    })
  }

  openRecipe() {
    document.querySelector('.recipe-page').classList.add('active')
  }

  closeRecipe() {
    document.querySelector('.recipe-page').classList.remove('active')
  }

  craftTime(recipe) {
    const { prepTime, cookTime } = recipe

    const hours = Math.floor( (prepTime + cookTime) / 60 )
    const minutesLeft = (prepTime + cookTime) % 60
    const message = `${hours} hours ${minutesLeft} minutes`

    return message
  }
  
  render() {
    const { recipes, activeRecipe } = this.state

    return (
      <div className="app-wrapper">
        <Nav activeRecipeTitle={activeRecipe.title} />

        {
          recipes.map( recipe => {
            return <RecipeCard key={ recipe.id }
                               recipe={ recipe }
                               title={ recipe.title }
                               prepTime={ recipe.prepTime }
                               cookTime={ recipe.cookTime }
                               ingredients={ recipe.ingredients }
                               craftTime={ this.craftTime(recipe) }
                               setActive={ this.setActiveRecipe }
                               openRecipe={ this.openRecipe }
            /> 
          })
        }

        <RecipePage title={ activeRecipe.title }
                    instructions={ activeRecipe.instructions }
                    prepTime={ activeRecipe.prepTime }
                    cookTime={ activeRecipe.cookTime }
                    ingredients={ activeRecipe.ingredients }
                    craftTime={ this.craftTime(activeRecipe) }
                    closeRecipe={ this.closeRecipe }
        />
      </div>
    )
  }
}  