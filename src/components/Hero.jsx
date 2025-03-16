import React, { useState } from "react";
import "./Hero.css";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import recipe from '../gemini'; 

const Hero = () => {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [gotRes, setGotRes] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null); 

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() === "") return; 
    setIngredients([...ingredients, inputValue]);
    setInputValue("");
  }

  async function generateRecipe() {
    try {
      let details = await recipe(ingredients); 
     // console.log("Recipe fetched:", details);
      
      setRecipeDetails(details);
      setGotRes(true); 
  
     // console.log("Updated recipeDetails:", recipeDetails);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  }
  

  return (
    <div>
      <form className="hero" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="e.g. oregano"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className="submit">+ Add Ingredient</button> {/* ✅ FIXED */}
      </form>

      {ingredients.length > 3 && (
        <IngredientsList ingredients={ingredients} generateRecipe={generateRecipe} />
      )}

      {gotRes && recipeDetails && <Recipe recipeDetails={recipeDetails} />} {/* ✅ FIXED */}
    </div>
  );
};

export default Hero;
