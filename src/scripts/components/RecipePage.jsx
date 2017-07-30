import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class RecipePage extends Component {
  constructor(props) {
    super(props);

    this.state = { menu: '' };

    this.ingredientsMenu = this.ingredientsMenu.bind(this);
    this.stepsMenu = this.stepsMenu.bind(this);
  }

  componentWillMount() {
    this.setState({ menu: 'ingredients' });
  }

  ingredientsMenu() {
    this.setState({ menu: 'ingredients' });
  }

  stepsMenu() {
    this.setState({ menu: 'steps' });
  }

  render() {
    const {
      title,
      instructions,
      ingredients,
      steps,
    } = this.props.recipes[this.props.params.recipeId];

    const stepsExist = steps != null;

    return (
      <div className="recipe-page">
        <div className="nav">
          <span className="logo">{title}</span>
          <span className="back-button" role="presentation" onClick={() => this.props.back()} >&larr;</span>
          <div className="nav__sub">
            <button
              className={this.state.menu === 'ingredients' ? 'active' : ''}
              onClick={this.ingredientsMenu}
            >
              Ingredients
            </button>

            <button
              className={this.state.menu === 'steps' ? 'active' : ''}
              onClick={this.stepsMenu}
            >
              Steps
            </button>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="recipe-page-content">
            <CSSTransitionGroup
              transitionName="recipe-tab"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={400}
            >
              {
                this.state.menu === 'ingredients' ?
                  <div className="recipe-page__ingredients" key="ingredients-tab">
                    <p className="instructions">{ instructions }</p>
                    {
                      ingredients &&
                      ingredients.map(ingredient =>
                        <span key={ingredient} className="ingredient">{ ingredient }</span>,
                      )
                    }
                  </div>

                  :

                  <div className="recipe-page__steps" key="steps-tab">{
                    stepsExist &&
                    Object.keys(steps)
                      .map(step =>
                        (
                          <div key={step} className="step">
                            <span className="step__ingredients">{
                              steps[step].ingredients
                                .map(ingredient => <span key={ingredient}>{ingredient}</span>)
                            }</span>
                            <span className="step__instructions">{steps[step].instructions}</span>
                          </div>
                        ),
                      )
                  }
                  </div>
              }
            </CSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

RecipePage.propTypes = {
  recipes: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired,
  back: React.PropTypes.func.isRequired,
};

export default RecipePage;
