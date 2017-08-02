import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ index, recipe }) => {
  const {
    title,
    image,
    prepTime,
    cookTime,
  } = recipe;

  return (
    <div className="recipe-card">
      <div className="recipe-card__img-box">
        <img src={image} alt="recipe" />
      </div>
      <h3>{title}</h3>
      <p className="prep-time">Prep time: {prepTime} minutes</p>
      <p className="cook-time">Cook time: {cookTime} minutes</p>
      <Link to={`/recipe/${index}`}>
        <button className="button">View Recipe</button>
      </Link>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
};

export default RecipeCard;
