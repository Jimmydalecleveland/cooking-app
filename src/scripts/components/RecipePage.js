import React, { Component } from 'react'
import { Nav } from './Nav'

export class RecipePage extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.closeRecipe()
  }
  
  render() {
    
    const {
      title,
      instructions,
      ingredients
    } = this.props.recipes[this.props.match.params.recipeId]

    return (
      <div className="recipe-page">
        <Nav title={ title } />

        <div className="content-wrapper">
          { /* <span className="back-button" onClick={ () => this.handleClick() } >&larr;</span> */ }
          <p>{ instructions }</p>
          { 
            ingredients &&
            ingredients.map( (ingredient, i) => {
              return <span key={i} className="recipe-page__ingredient">{ ingredient }</span>
            })
          }
        </div>
      </div>
    )
  }
}

RecipePage.propTypes = {
  recipes: React.PropTypes.object.isRequired,
}