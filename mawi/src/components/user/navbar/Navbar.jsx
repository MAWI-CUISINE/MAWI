import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './navbar.css'
import { useState } from 'react'
const Navbar = () => {

    return (
        <div>   {/* <!-- header-start --> */}
            <nav style={{ position: "sticky" }} className="navbar sticky-top  navbar-fixed-top navbar-expand-lg navbar-black bg-black">
                <div className=" container-fluid">





                    <div className="collapse navbar-collapse row" id="navbarNav">
                        <a className="navbar-brand col-5" href="#">
                            <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670434638/mawi/Brown_Illustration_Traditional_Food_Logo-removebg-preview_v6tutd.png" alt="" width="100" height="100" className="d-inline-block align-text-top" />
                            MAWI
                        </a>
                        <ul className="navbar-nav col-6">

                            <li className="nav-item">
                                <a className="nav-link" href="/home" style={{ color: "white" }} >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/shop" style={{ color: "white" }} >Shop</a>
                            </li>
                            <li className="nav-item" style={{ color: "white" }}  >
                                <a className="nav-link" href="/recipes" style={{ color: "white" }} >Recipes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about" style={{ color: "white" }} >About</a>
                            </li>

                        </ul>
                        <div
                            className="col-1 rounded-circle"
                            style={{
                                height: "60px",
                                width: "60px",

                            }}
                        >
                            <a href="/cart"> <img
                                src="https://res.cloudinary.com/dn9qfvg2p/image/upload/v1670497130/mawi%20logo/icon-panier-repas2_wif2x0.png"
                                alt="not"
                                className="rounded-circle"

                                style={{
                                    width: "40%%",
                                    height: "100%",
                                }}
                            />
                            </a>
                        </div>
                    </div>

                </div>
            </nav>
        </div>

    )
}

export default Navbar