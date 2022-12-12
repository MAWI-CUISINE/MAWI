import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
const Navbar = (props) => {

const [user,setUser]=useState("")
const [PostsToApprove,setPosts]=useState(0)
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
  axios
    .get("http://localhost:5000/user/getAllPost")
    .then((res) => setPosts(res.data.length));
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
              <ul className="navbar-nav col-5">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/approve"
                    style={{ color: "white" }}
                  >
                    <div className="row">
                      <div
                        className="col-3 bg-danger rounded-circle "
                        style={{ width: "10%" }}
                      >
                        {PostsToApprove-1}
                      </div>{" "}
                      <div className="col-6">pending</div>
                    </div>
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
                    href="/users"
                    style={{ color: "white" }}
                  >
                    Users
                  </a>
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
                      src={
                        "https://res.cloudinary.com/dugewmeeh/image/upload/v1670743970/mawi%20cuisine/blank-profile-picture-973460_1280_pgdqwd.png"
                      }
                      alt=""
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                 
                    <Dropdown.Item onClick={() => logOut()}>
                      logOut
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