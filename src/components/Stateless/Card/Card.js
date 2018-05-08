import './Card.css'
import React from 'react'


const Card = (props) => {
  const name = props.data.name
  const homeworld = props.data.homeworld
  const species = props.data.species
  const population= props.data.population
  console.log('incard',props)
  return (
    <div className='card'> 
      <h2>{name}</h2>
      <h2>{homeworld}</h2>
      <h2>{species}</h2>
      <h2>{population}</h2>
    </div>
  )
}

export default Card