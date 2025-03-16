import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getRecipe(ingredients) {
    const ingredientList = ingredients.join(' ');
    const prompt = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.
     You don't need to use every ingredient they mention in your recipe. 
     The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. 
     Format your response in markdown to make it easier to render to a web page
     Return the response in JSON format like this:
     {
       "title": "Recipe Title",
       "yields": "Yields: 2 servings",
       "prep_time": "10 minutes",
       "cook_time": "20 minutes",
       "ingredients": ["ingredient1", "ingredient2", "ingredient3"],
       "instructions": ["Step 1", "Step 2", "Step 3"],
       "side_dishes": ["Side Dish 1", "Side Dish 2"]
     }
     
     
     \n\nIngredients: ${ingredientList}`
    const result = await model.generateContent(prompt);
    let text = result.response.text();
    text = text.replace(/```json|```/g, "").trim();
    const recipeData = JSON.parse(text);
    return recipeData;
}

export default getRecipe;
