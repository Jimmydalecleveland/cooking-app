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
              className={this.state.menu === 'ingredients' ? 'active' : 'ingredient-button'}
              onClick={this.ingredientsMenu}
            >
              Ingredients
            </button>

            <button
              className={this.state.menu === 'steps' ? 'active' : 'step-button'}
              onClick={this.stepsMenu}
            >
              Steps
            </button>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="recipe-page-content">
            <CSSTransitionGroup
              transitionName="ingredients-tab"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={400}
            >
              {this.state.menu === 'ingredients' &&
                <div className="recipe-page__ingredients" key="ingredients-tab">
                  {
                    Object.keys(ingredients).map(index =>
                      (
                        <div key={index} className="ingredient">
                          <div className="ingredient__img">
                            <img src={ingredients[index].image} alt="" />
                          </div>
                          <span className="ingredient__name">
                            {ingredients[index].ingredient}
                          </span>
                          <span className="ingredient__amount">{ingredients[index].amount}</span>
                        </div>
                      ),
                    )
                  }
                </div>
              }
            </CSSTransitionGroup>

            <CSSTransitionGroup
              transitionName="steps-tab"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={400}
            >
              {this.state.menu === 'steps' && stepsExist &&
                <div className="recipe-page__steps" key="steps-tab">
                  <p className="instructions">{instructions}</p>
                  {
                    Object.keys(steps).map(index =>
                      (
                        <div key={index} className="step">
                          <span className="step__ingredients">{
                            steps[index].ingredients
                              .map(ingredient => <span key={ingredient}>{ingredient} </span>)
                          }</span>
                          <span className="step__instructions">{steps[index].instructions}</span>
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
