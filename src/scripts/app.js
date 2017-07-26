import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Cooking } from './Cooking'
import { RecipePage } from './RecipePage'

const Root = () => {
  return (
    <Router>
      <div>
        <Route exactly pattern="/" component={Cooking} />
        <Route pattern="/recipe/:recipeId" component={RecipePage} />
      </div>
    </Router>
  )
}

render(
  <Root />,
  document.getElementById('root')
);