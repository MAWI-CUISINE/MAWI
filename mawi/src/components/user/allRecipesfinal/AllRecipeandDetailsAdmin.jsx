import axios from "axios";
import React, { useState, useEffect } from "react";
import AllRecipes from "../allrecipessad/AllRecipes.jsx";
import Recipies from "../RecipeDetail/RecipeDetails.jsx";

const test = () => {
  const [view, setView] = useState("all");
  const [allRecipes, setAllRecipes] = useState([]);
  const [OneRecipe, setOneRecipe] = useState({});
  const changeRecipe = (option) => {
    setOneRecipe(option);
  };
  const changeview = (option) => {
    setView(option);
  };
  useEffect(() => {
    axios.get("http://localhost:5000/user/getallrecipes").then((res) => {
      setAllRecipes(res.data);
    });
  }, []);
  if (view === "all") {
    return (
      <div>
        <AllRecipes
          all={allRecipes}
          changeRecipe={changeRecipe}
          changeview={changeview}
        />
      </div>
    );
  } else return <Recipies recipe={OneRecipe} />;
};

export default test;
