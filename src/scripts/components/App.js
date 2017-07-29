import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import { RecipePage } from './RecipePage'
import { Category } from './Category'
import sampleRecipes from '../../../sample-recipes'

export class App extends Component {
  constructor(props) {
    super(props)

    this.openRecipe = this.openRecipe.bind(this)

    this.state = {
      recipes: {},
      activeRecipe: {}
    }
  }

  componentWillMount() {
    this.setState({ recipes: sampleRecipes })
  }

  // Use context to push a recipe route
  openRecipe(key) {
    const activeRecipe = this.state.recipes[key]
    const routerPush = this.context.router.history.push(`/recipe/${key}`)
    this.setState({ activeRecipe }, routerPush)
  }
  
  render() {
    const { recipes, activeRecipe } = this.state

    return (
      <div className="app-wrapper">

        <Route render={ ({ location }) => (
          <div>
            <CSSTransitionGroup
              transitionName="category"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={250} >
              <Route
                location={location}
                key={location.key}
                exact path="/"
                render={ () => <Category recipes={ recipes } openRecipe={ this.openRecipe } /> }
              />
            </CSSTransitionGroup>

            <CSSTransitionGroup
              transitionName="recipe"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300} >
              <Route
                location={ location }
                key={ location.key }
                path="/recipe/:recipeId"
                render={(props) => <RecipePage recipes={ this.state.recipes } params={ props.match.params } back={ props.history.goBack } /> }
              />
            </CSSTransitionGroup>
          </div>
        )} />

      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}