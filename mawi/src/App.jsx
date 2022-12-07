import React , {useEffect,useState}from 'react';
import axios from "axios"
import {Routes, Route } from "react-router-dom";
import Login from './components/login/Login.jsx';
import SignUp from './components/login/SignUp.jsx';
import Home from './components/user/Home.jsx';
import Post from './components/user/PostRecipie.jsx'
import Recipies from './components/user/RecipeDetails.jsx';
import NavBar from './components/NavBar.jsx';

 function App() {
  const [recipe,setRecipe]=useState([])
  
  



  useEffect(() => {
    axios.get(`http://localhost:5000/user/getRecipies`).then((response) => {
       
      setRecipe(response.data)
      
       
      }).catch((err) => console.error(err));
    },[]);
  console.log(recipe,"walid");
  return (
    <div>
     
      <Routes>
        <Route>
          <Route path="/detail" element={<Recipies recipe={recipe[0]} />} />
          <Route path="/Nav" element={<NavBar/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />

          <Route path="/post" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
  }

export default App;
