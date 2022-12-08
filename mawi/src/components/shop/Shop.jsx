
import React from 'react'
import { useState } from 'react'
import Navbar from '../user/navbar/Navbar.jsx'
import './shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Shop = (props) => {
    const [counter,setCounter]=useState(0)
    const [total,setTotal]=useState(0)
 const inc =()=>{
    let c=counter+1
    setCounter(c)
 }
 const dec =()=>{
    if(counter ===0) return
    let c=counter-1
    setCounter(c)
 }
 console.log(counter);
    return (
        <div>
            <Navbar />
            < div >

                {/* <!-- Section--> */}
                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {props.shop.map((e, i) => (


                                <div className="col mb-5" >
                                    <div className="card h-100">
                                        {/* <!-- Product image-->  */}
                                        <img className="card-img-top justify-content-center" src={e.Simage} style={{width:"60%", height:"40%",display: "block", marginLeft:"auto",marginRight: "auto"}} />
                                        {/* <!-- Product details-->  */}
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                {/* <!-- Product name-->  */}
                                                <h5 className="fw-bolder">{e.Sname}</h5>
                                                {/* <!-- Product price-->  */}
                                                <h5 >{e.Sprice}Dt</h5>

                                                <div className='row' key={i}><div className='col-4'></div>
                                                    <div className='col-1' onClick={()=>inc()}>
                                                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                                                    </div>
                                                    <div className='col-3'>{counter}</div>
                                                    <div className='col-1' onClick={()=>dec()}>
                                                        <FontAwesomeIcon icon="fa-solid fa-minus" />
                                                    </div></div>
                                            </div>
                                        </div>
                                        {/* <!-- Product actions-->  */}
                                        <div className="p-4 pt-0 border-top-0 bg-transparent">

                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>

                                </div>
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
    )
}

export default Shop






