import React, { Component } from 'react'
import { Nav } from './Nav'

export class RecipePage extends Component {
  render() {
    const {
      title,
      instructions,
      ingredients,
      steps
    } = this.props.recipes[this.props.params.recipeId]

    const stepsExist = steps != null

    return (
      <div className="recipe-page">
        <Nav title={ title } />
        <span className="back-button" onClick={ () => this.props.back() } >&larr;</span>

        <div className="content-wrapper">

          <div className="recipe-page__ingredients">
            <p className="instructions">{ instructions }</p>
            { 
              ingredients &&
              ingredients.map( (ingredient, i) => {
                return <span key={i} className="ingredient">{ ingredient }</span>
              })
            }
          </div>

          <div className="recipe-page__steps">
            {
              stepsExist &&
              Object.keys(steps)
                .map( step => {
                return (
                  <div key={step} className="step">
                    <span className="step__ingredients">
                    {
                      steps[step].ingredients.map( ingredient => <span key={ ingredient }>{ ingredient }</span> )
                    }
                    </span>
                    <span className="step__instructions">
                      { steps[step].instructions }
                    </span>
                  </div>
                )
              })
            }
          </div>
          
        </div>
      </div>
    )
  }
}

RecipePage.propTypes = {
  recipes: React.PropTypes.object.isRequired,
}