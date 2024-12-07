import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchRecipe from "./FetchRecipe";

const RecipeDetail = () => {
  const { idCategory } = useParams();
  const [recipe, setRecipe] = useState();
  const [isLoading, error, data] = FetchRecipe();

  useEffect(() => {
    if (data) {
      const foundRecipe = data.categories.find(
        (item) => item.idCategory === idCategory
      );
      setRecipe(foundRecipe);
    }
  }, [data, idCategory]);

  if (isLoading) return <p>Waiting...</p>;
  if (error) return <p className="text-red-500 text-sm">Wrong ID</p>;
  if (!recipe) return <p className="text-red-500 text-sm">Recipe not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 shadow">
      <img
        src={recipe.strCategoryThumb}
        alt={recipe.strCategory}
        className="w-full object-cover rounded-lg mb-4"
      />
      <h1 className="text-4xl font-bold mb-4 text-green-600">
        {recipe.strCategory}
      </h1>
      <h2 className="text-2xl font-semibold mb-2">
        <p className="text-green-400">CategoryDescription:</p>
        <p className="font-thin">{recipe.strCategoryDescription}</p>
      </h2>
    </div>
  );
};

export default RecipeDetail;
