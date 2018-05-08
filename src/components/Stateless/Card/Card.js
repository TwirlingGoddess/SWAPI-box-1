import './Card.scss'
import React from 'react'


const Card = (props) => {
  console.log('incard',props)
  return (
    <div className='card'> 
      <h2>hello</h2>
      {/* <h2>{homeworld}</h2>
      <h2>{species}</h2>
      <h2>{population}</h2> */} 
    </div>
  )
}

export default Card