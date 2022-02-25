import React from "react";

function RecipeDesign({ recipe, deleteRecipe, key }) {

  return (
    <tr>
      <td><p>{recipe.name}</p></td>
      <td><p>{recipe.cuisine}</p></td>
      <td><p><img src={recipe.photo}/></p></td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
    </tr>
  )
}

export default RecipeDesign;