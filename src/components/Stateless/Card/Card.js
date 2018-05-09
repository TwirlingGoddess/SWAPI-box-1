import './Card.css'
import React from 'react'


const Card = (props) => {
  const name = props.data.name
  const homeworld = props.data.homeworldName
  const species = props.data.specie
  const population= props.data.homeworldPopulation
  const vehicleModel= props.data.vehicleModel
  const vehicleClass= props.data.vehicleClass
  const numberOfPassenger= props.data.numberOfPassenger
  


  
  return (
    <div className='card'> 
      <h2>{name}</h2>
      <h2>{homeworld}</h2>
      <h2>{species}</h2>
      <h2>{population}</h2>
      <h2>{vehicleModel}</h2>
      <h2>{vehicleClass}</h2>
      <h2>{numberOfPassenger}</h2>
      
    </div>
  )
}

export default Card