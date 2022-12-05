import React from 'react'
import "./ARecipeDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ARecipeDetails = () => {
  return (
    <div className='recipe-details'>
    <div className='Name'>Name:</div>
        <div className='Name-recipe'></div>
        
    <div className='Name'><FontAwesomeIcon icon="fas fa-clock" />Preparation time:</div>
    <div className='time-recipe-preparation'></div>
    <div className='Name'><FontAwesomeIcon icon="fal fa-clock" />Cook time:</div>
    








    </div>
  )
}

export default ARecipeDetails