import React from "react";
import './Recipe.css'

const Recipe = ({ recipeDetails }) => {
  if (!recipeDetails) return null;

  return (
    <div className="recipeDetails">
      <h2>{recipeDetails.title}</h2>
      <p><strong>{recipeDetails.yields}</strong></p>
      <p><strong>Prep Time:</strong> {recipeDetails.prep_time}</p>
      <p><strong>Cook Time:</strong> {recipeDetails.cook_time}</p>

      <h3>Ingredients:</h3>
      <ul>
        {recipeDetails.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <ol>
        {recipeDetails.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      {recipeDetails.side_dishes && (
        <>
          <h3>Suggested Side Dishes:</h3>
          <ul>
            {recipeDetails.side_dishes.map((dish, index) => (
              <li key={index}>{dish}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Recipe;
