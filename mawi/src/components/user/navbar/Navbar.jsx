import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
const Navbar = (props) => {

const [user,setUser]=useState("")
useEffect(()=>{
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
},[])
const logOut=()=>{
localStorage.clear()
axios.delete("http://localhost:5000/user/emptyCart").then(res=>window.location.href='/').catch(err=>{

  alert ('failed to logout')
})
}
    return (
      <div>
        {/* <!-- header-start --> */}
        <nav
          style={{ position: "sticky" }}
          className="navbar sticky-top  navbar-fixed-top navbar-expand-lg navbar-black bg-black"
        >
          <div className=" container-fluid">
            <div className="collapse navbar-collapse row" id="navbarNav">
              <a className="navbar-brand col-4" href="#">
                <img 
                  src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670434638/mawi/Brown_Illustration_Traditional_Food_Logo-removebg-preview_v6tutd.png"
                  alt=""
                  width="100"
                  height="100"
                  className="d-inline-block align-text-top"
                />
                MAWI
              </a>
             <ul className='col-5 row pt-5 pe-5'
                        style={{ position: "relative", bottom: "15px" }}
                        id="navigation"
                      >
                        <li className='col' onClick={()=>{
                          window.location.href="/home"
                        }}>
                         
                            <h4 style={{ color: "white" }} href="/home">
                              Home
                            </h4>
                        
                        </li>
                        <li className='col' onClick={()=>{
                          window.location.href="/shop"
                        }}>
                         
                            <h4 style={{ color: "white" }} href="/shop">
                              Shop
                            </h4>
                        
                        </li>
                        <li className='col' onClick={()=>{
                          window.location.href="/allrecipes"
                        }}>
                         
                            <h4 style={{ color: "white" }}>Recipes</h4>
                       
                         
                        </li>
                        <li className='col' onClick={()=>{
                          window.location.href="/about"
                        }}>
                      
                            <h4 style={{ color: "white" }} href="/about">
                              About
                            </h4>
                        
                        </li>
                      </ul>
              <div
                style={{ position: "relative", left: "10%" }}
                className=" col-2"
              >
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ border: "none" }}
                    className="bg-black "
                    id="dropdown-basic"
                  >
                    <img
                      className="d-inline-block rounded-circle align-text-top"
                      width="70"
                      height="70"
                      src={user.Uimage}
                      alt=""
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="/cart">cart</Dropdown.Item>
                    <Dropdown.Item onClick={()=>logOut()}>logOut</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar