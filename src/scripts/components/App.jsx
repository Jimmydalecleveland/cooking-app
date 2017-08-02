import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import RecipePage from './RecipePage';
import Category from './Category';
import sampleRecipes from '../../../sample-recipes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: {},
    };
  }

  componentWillMount() {
    this.setState({ recipes: sampleRecipes });
  }

  render() {
    const { recipes } = this.state;

    return (
      <div className="app-wrapper">

        <Route render={({ location }) => (
          <div>
            <CSSTransitionGroup
              transitionName="category"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
            >
              <Route
                location={location}
                key={location.key}
                exact
                path="/"
                render={() => <Category recipes={recipes} />}
              />
            </CSSTransitionGroup>

            <CSSTransitionGroup
              transitionName="recipe"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              <Route
                location={location}
                key={location.key}
                path="/recipe/:recipeId"
                render={({ match, history }) =>
                  (
                    <RecipePage
                      recipe={recipes[match.params.recipeId]}
                      back={history.goBack}
                    />
                  )
                }
              />
            </CSSTransitionGroup>
          </div>
        )}
        />

      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object,
};

export default App;
