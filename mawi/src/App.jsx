import React , {useEffect,useState}from 'react';
import axios from "axios"
import {Routes, Route } from "react-router-dom";
import Login from './components/login/Login.jsx';
import SignUp from './components/login/SignUp.jsx';
import Post from './components/user/PostRecipie.jsx'
import Recipies from './components/user/RecipeDetails.jsx';
import NewHome from './components/user/NewHome.jsx';
import NavBar from './components/user/NavBar.jsx';
import Profile from './components/user/Finaleprofile.jsx';
import jwt_decode from "jwt-decode";
 function App() {
  const [recipe,setRecipe]=useState([])
  const [user,setUser]=useState('')
  



  useEffect(() => {
const token = localStorage.getItem('token')
		if (token) {
			const user = jwt_decode(token);
      
      
			if (!user) {
				localStorage.removeItem('token')
				
			}
    else{
      axios.get(`http://localhost:5000/user/getUser/${user.name}`).then(res=>{
        setUser(res.data);
        
      })
    }
    }
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
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile user={user}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<NewHome />} />
          <Route path="/NavBar" element={<NavBar />} />

          <Route path="/post" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
  }

export default App;
