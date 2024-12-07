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

  if (isLoading) return <p className="text-center text-gray-500 text-xl">Waiting...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">Invalid ID.</p>;
  if (!recipe) return <p className="text-center text-red-500 text-lg">Recipe not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg bg-white mt-10">
      <img
        src={recipe.strCategoryThumb}
        alt={recipe.strCategory}
        className="w-full object-cover rounded-lg mb-6 shadow-md"
      />
      <h1 className="text-3xl font-extrabold mb-4 text-green-600 text-center">
        {recipe.strCategory}
      </h1>
      <h2 className="text-lg font-medium text-slate-600">
        <span className="text-green-500">Description:</span>
        <p className="font-light mt-2">{recipe.strCategoryDescription}</p>
      </h2>
    </div>
  );
};

export default RecipeDetail;
