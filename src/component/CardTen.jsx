import React, { useEffect, useState } from "react";

const CardTen = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Recipes from API
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes); // API returns {recipes: [...]}, so we access data.recipes
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-red-500 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">🍽️ Delicious Recipes</h1>

      {/* Show loading state */}
      {loading && <p className="text-white text-lg">Loading recipes...</p>}

      {/* Show error if fetch fails */}
      {error && <p className="text-white text-lg bg-red-500 p-2 rounded">{error}</p>}

      {/* Recipes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="p-6 bg-white text-black rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-green-700">{recipe.name}</h2>
            <p className="text-lg text-gray-700">👨‍🍳 Cuisine: {recipe.cuisine}</p>
            <p className="text-lg text-gray-700">⌛ Cooking Time: {recipe.cookTimeMinutes} min</p>
            <p className="text-lg text-gray-700">🔥 Difficulty: {recipe.difficulty}</p>

            {/* Ingredients List */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Ingredients:</h3>
              <ul className="mt-2 space-y-2 text-gray-600 list-disc list-inside">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTen;
