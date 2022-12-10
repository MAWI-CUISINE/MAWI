
import React from 'react'
import { useState } from 'react'
import Navbar from '../user/navbar/Navbar.jsx'
import './shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OneElement from './OneElement.jsx'
import Cart from "../cart/Cart.jsx"
import axios from 'axios'
const Shop = (props) => {
    const [cart,setCart]=useState([])
let add=(a)=>{
    setCart([...cart,a])
}
const addtoCart=(body)=>{
    axios.post('http://localhost:5000/user/addcart',body)
}
console.log(cart,"<---------------->");
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

                                <OneElement e={e} key={i} add={addtoCart}/>
                               
                            ))}
                             
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Shop




