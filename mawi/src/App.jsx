import React , {useEffect,useState}from 'react';
import axios from "axios"
import {Routes, Route } from "react-router-dom";
import Login from './components/login/Login.jsx';
import SignUp from './components/login/SignUp.jsx';
import Home from './components/user/Home.jsx';
import Post from './components/user/PostRecipie.jsx'
import Recipies from './components/user/RecipeDetails.jsx';

 function App() {
  const [recipe,setRecipe]=useState([])
  let [trigger,setTrigger]=useState(false)
  
console.log(recipe,'rrrr');


  useEffect(() => {
    axios.get(`http://localhost:5000/user/getAllPost`).then((response) => {
       console.log(response.data , "amin");
      setRecipe(response.data)
      
       
      }).catch((err) => console.error(err));
    },[]);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-shop me-2"></i>{" "}
            <strong>MAWI CUISINE</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
              <span
                style={{ background: "#715561" }}
                className="border-warning input-group-text  text-white"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                className="form-control border-warning"
                style={{ color: "#000" }}
              />
              <button
                style={{ background: "#715561" }}
                className="btn text-white"
              >
                Search
              </button>
            </div>
          </div>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto d-none d-lg-block">
              <div className="input-group">
                <span
                  style={{ background: "#715561" }}
                  className="border-black input-group-text  text-white"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-black"
                  style={{ color: "#000" }}
                />
                <button
                  style={{ background: "#715561" }}
                  className="btn text-white"
                >
                  Search
                </button>
              </div>
            </div>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  className="nav-link mx-2 text-uppercase active"
                  aria-current="page"
                  href="#"
                >
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  About
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  <i className="fa-solid fa-cart-shopping me-1"></i> Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  <i className="fa-solid fa-circle-user me-1"></i> Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route>
          <Route path="/detail" element={<Recipies recipe={recipe} />} />

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
