import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const OneElement = (props) => {
    const e = props.e

    const [counter, setCounter] = useState(0)
    const inc = () => {
        let c = counter + 1
        setCounter(c)
    }
    const dec = () => {
        if (counter === 0) return
        let c = counter - 1
        setCounter(c)
    }
    return (

        <div className="col mb-5" >
            <div className="card h-100">
                {/* <!-- Product image-->  */}
                <img className="card-img-top justify-content-center" src={e.Simage} style={{ width: "60%", height: "40%", display: "block", marginLeft: "auto", marginRight: "auto" }} />
                {/* <!-- Product details-->  */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* <!-- Product name-->  */}
                        <h5 className="fw-bolder">{e.Sname}</h5>
                        {/* <!-- Product price-->  */}
                        <h5 >{e.Sprice}Dt</h5>

                        <div className='row' ><div className='col-4'></div>
                            <div className='col-1' onClick={() => inc()}>
                                <FontAwesomeIcon icon="fa-solid fa-plus" />
                            </div>
                            <div className='col-3'>{counter}</div>
                            <div className='col-1' onClick={() => dec()}>
                                <FontAwesomeIcon icon="fa-solid fa-minus" />
                            </div></div>
                        {/* <QtyPicker
                                                    value={value}
                                                    onChange={function (newValue) { value = newValue }} /> */}
                    </div>
                </div>
                {/* <!-- Product actions-->  */}
                <div className="p-4 pt-0 border-top-0 bg-transparent">

                    <div className="text-center">
                        
                        <a className="btn btn-outline-dark mt-auto" href="#"
                                               onClick={()=>props.add({Total:counter*e.Sprice,ArticleName:e.Sname,Quantity:counter,ArticleImage:e.Simage})}

                       >Add to cart</a>
                        </div>
                </div>
            </div>

        </div>

    )
}

export default OneElement