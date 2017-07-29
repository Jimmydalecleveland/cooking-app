import React from 'react';

const RecipeCard = ({ index, recipe, openRecipe }) => {
  const {
    title,
    prepTime,
    cookTime,
  } = recipe;

  return (
    <div className="recipe-card">
      <div className="recipe-card__img-box">
        <img src="http://placehold.it/150x150" alt="recipe" />
      </div>
      <h3>{title}</h3>
      <p className="prep-time">Prep time: {prepTime} minutes</p>
      <p className="cook-time">Cook time: {cookTime} minutes</p>
      <button className="button" onClick={() => openRecipe(index)} >View Recipe</button>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
  openRecipe: React.PropTypes.func.isRequired,
};

export default RecipeCard;
