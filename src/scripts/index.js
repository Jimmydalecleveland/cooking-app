import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { App } from './components/App'
import { RecipePage } from './components/RecipePage'
import { Category } from './components/Category'



render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);