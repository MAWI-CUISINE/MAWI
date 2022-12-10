import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
const Navbar = (props) => {
console.log(props.user,'props');
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
              <ul className="navbar-nav col-5">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/home"
                    style={{ color: "white" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/shop"
                    style={{ color: "white" }}
                  >
                    Shop
                  </a>
                </li>
                <li className="nav-item" style={{ color: "white" }}>
                  <a
                    className="nav-link"
                    href="/allrecipes"
                    style={{ color: "white" }}
                  >
                    Recipes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/about"
                    style={{ color: "white" }}
                  >
                    About
                  </a>
                </li>
              </ul>
              <div style={{position:'relative',left:"10%"}} className=" col-2">
                <Dropdown>
                  <Dropdown.Toggle style={{border:"none" ,}} className='bg-black ' id="dropdown-basic">
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
                    <Dropdown.Item href="/cart">
                     cart
                    </Dropdown.Item>
                    
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