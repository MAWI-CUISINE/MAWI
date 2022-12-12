import Foot from "./components/user/footer/Foot.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import SignUp from "./components/login/SignUp.jsx";
import AllRecipesAndDetails from "./components/user/allRecipesfinal/AllRecipeandDetails.jsx";
import AllRecipesAdmin from "./components/Admi/AllRecipeandDetailsAdmin.jsx";
import Post from "./components/user/post/PostRecipie.jsx";
// import AllRecipesAdd from "./components/user/allrecipessad/AllRecipes.jsx";
import Recipies from "./components/user/RecipeDetail/RecipeDetails.jsx";
import NewHome from "./components/user/home/NewHome.jsx";
import Profile from "./components/user/profil/Profile.jsx";
import AdminShop from "./components/Admi/shopadmin/Shop.jsx";
import jwt_decode from "jwt-decode";
import Navbar from "./components/user/navbar/Navbar.jsx";
import Shop from "./components/shop/Shop.jsx";
import Users from "./components/Admi/users/Users.jsx";
import Approve from "./components/Admi/approval/Approve.jsx";
import About from "./components/About/About.jsx"
import Cart from "./components/cart/Cart.jsx";
function App() {
  const [allrecipe, setAllRecipe] = useState([]);
  const [user, setUser] = useState("");
  const [shop, setShop] = useState([]);

  const [OneRecipe, setOneRecipe] = useState({});

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);

      if (!user) {
        localStorage.removeItem("token");
      } else {
        axios
          .get(`http://localhost:5000/user/getUser/${user.name}`)
          .then((res) => {
            setUser(res.data);
          });
      }
    }
    axios.get(`http://localhost:5000/user/allShop`).then((res) => {
      setShop(res.data);
    });
    axios
      .get(`http://localhost:5000/user/getallRecipes`)
      .then((response) => {
        setAllRecipe(response.data);
      })
      .catch((err) => console.error(err));
  }, []);
  if (!user) {
    return (
      <div>
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </div>
    );
  } else if (user.admin == true) {
    return (
      <div>
        <Routes>
          <Route>
            <Route path="/allRecipes" element={<AllRecipesAdmin />} />
            <Route path="/" element={<AllRecipesAdmin />} />
            <Route path="/shop" element={<AdminShop shop={shop} />} />
            <Route path="/Users" element={<Users />} />

            <Route path="/approve" element={<Approve />} />
          </Route>
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <Routes>
          <Route>
            <Route
              path="/allrecipes"
              element={<AllRecipesAndDetails recipe={OneRecipe} />}
            />
            <Route path="/Profile" element={<Profile user={user && user} />} />
            <Route path="/" element={<NewHome user={user} />} />

            <Route path="/home" element={<NewHome user={user} />} />
            <Route path="/nav" element={<Navbar user={user} />} />

            <Route path="/shop" element={<Shop shop={shop} />} />
            <Route path="/post" element={<Post user={user} />} />

            <Route path="/foot" element={<Foot />} />
            <Route path="/cart" element={<Cart user={user} />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
