import React from 'react'
import './IngredientsList.css'

const IngredientsList = (props) => {
  return (
    <div>
       <section>
          <h2>Ingredients on hand: </h2>
          <ul className='list'>
            {props.ingredients.map((ingredient) => {
              return <li key={ingredient}>{ingredient}</li>;
            })}
          </ul>
          <div className="recipe">
            <div className="generate">
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from a list of ingredients</p>
            </div>
            <button onClick={props.generateRecipe}>Get a Recipe</button>
          </div>
        </section>
    </div>
  )
}

export default IngredientsList
