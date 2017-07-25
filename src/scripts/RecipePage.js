import React, { Component } from 'react'

export class RecipePage extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.closeRecipe()
  }
  
  render() {
    const { title, instructions, prepTime, cookTime, craftTime, ingredients } = this.props

    return (
      <div className="recipe-page">
        <div className="content-wrapper">
          <span className="back-button" onClick={ () => this.handleClick() } >&larr;</span>
          <h3>{ title }</h3>
          <h4>{ craftTime }</h4>
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