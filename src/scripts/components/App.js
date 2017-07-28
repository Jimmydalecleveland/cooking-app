import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { RecipePage } from './RecipePage'
import { Category } from './Category'
import sampleRecipes from '../../../sample-recipes'

export class App extends Component {
  constructor(props) {
    super(props)

    this.openRecipe = this.openRecipe.bind(this)

    this.state = {
      recipes: sampleRecipes,
      activeRecipe: {}
    }
  }

  openRecipe(key) {
    const activeRecipe = this.state.recipes[key]
    const routerPush = this.context.router.history.push(`/recipe/${key}`)
    this.setState({ activeRecipe }, routerPush)
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
      
        <Switch>
          <Route
            exact path="/"
            render={ () => <Category recipes={ recipes } openRecipe={ this.openRecipe } /> }
          />
          <Route
            path="/recipe/:recipeId"
            render={ (props) => <RecipePage recipes={ this.state.recipes } { ...props } /> }
          />
        </Switch>

      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}