import React, { useState } from "react";
import OneElement from "./OneElement.jsx";
import Navbar from "../adminNavbar/Navbar.jsx";
import "./shop.css";
const Shop = (props) => {
  console.log("propsp", props);
const [shop,setShop]=useState(props.shop)

  return (
    <div>
      <Navbar />
      <div>
        {/* <!-- Section--> */}
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {shop && shop.map((e, i) => (
               <OneElement e={e}/>
              ))}
            </div>
          </div>
        </section>
        {/* <!-- Footer--> */}
        {/* <footer className="py-5 bg-dark">
    <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
</footer> */}
      </div>
    </div>
  );
};

export default Shop;
