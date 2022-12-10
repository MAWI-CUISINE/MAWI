
import React from 'react'
import { useState } from 'react'
import Navbar from '../user/navbar/Navbar.jsx'
import './shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OneElement from './OneElement.jsx'
const Shop = (props) => {
    console.log("hedhi", props);    
    return (
        <div>
            <Navbar />
            < div >

                {/* <!-- Section--> */}
                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {props.shop.map((e, i) => (

                                <OneElement e={e} key={i}/>
                               
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Shop




