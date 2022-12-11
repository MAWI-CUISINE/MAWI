import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OneCard = ({e,changeCart}) => {
  const [elemntPrice,setElemntPrice]=useState(e.Total/e.Quantity)
  
  const [Total,setTotal]=useState(e.Total)
  const deleteE = (name) => {
    axios.delete(`http://localhost:5000/user/deleteC/${name}`).then(res => changeCart())
      .catch(err => {
        console.log(err);
        alert("can't delete this product, there's an issue ! Please try again later")
      })
  }
  const [counter, setCounter] = useState(e.Quantity)
  console.log(counter,'counter');
    const inc = () => {
        let c = counter + 1
        setCounter(c)
        setTotal(elemntPrice*c)
    }
    const dec = () => {
        if (counter === 0) return
        let c = counter - 1
        setCounter(c)
        setTotal(elemntPrice*c)

    }
  return (
    <div>
    <div className="card mb-3 mb-lg-0">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img
                src={e.ArticleImage}
                className="img-fluid rounded-3"
                alt="Shopping item"
                style={{ width: 65 }}
              />
            </div>
            <div className="ms-3">
              <h5>{e.ArticleName}</h5>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div >
              <div className='row ' ><div className='col-3'></div>
                <div className='col-1'
                onClick={() => inc()}
                >
                  <FontAwesomeIcon icon="fa-solid fa-plus" />
                </div>
                <div className='col-1'>{counter}</div>
                <div className='col-1 pe-5'
                 onClick={() => dec()}
                >
                  <FontAwesomeIcon icon="fa-solid fa-minus" />
                </div>
                </div>
              
            </div>
            <div style={{ width: 80 }}>
              <h5 className="mb-0">{Total}</h5>
            </div>
            <a style={{ color: "red" }} onClick={() => { deleteE(e.ArticleName) }} >
              <i className="fas fa-trash-alt" />
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default OneCard