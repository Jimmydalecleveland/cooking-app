import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'breakfast',
    };
  }

  render() {
    const { recipes, openRecipe } = this.props;

    return (
      <div className="category-page">
        <h1>Breakfast Recipes</h1>
        {
          Object.keys(recipes)
            .map(recipe =>
              (
                <RecipeCard
                  key={recipe}
                  index={recipe}
                  recipe={recipes[recipe]}
                  openRecipe={openRecipe}
                />
              ),
            )
        }
      </div>
    );
  }
}

Category.propTypes = {
  recipes: React.PropTypes.object.isRequired,
  openRecipe: React.PropTypes.func.isRequired,
};

export default Category;
