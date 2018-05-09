import './Card.css'
import React from 'react'


const Card = (props) => {
  // console.log(props)
  const name = props.data.name
  const homeworld = props.data.homeworldName
  const species = props.data.specie
  const population = props.data.homeworldPopulation
  const vehicleName = props.data.vehicleName
  const vehicleModel = props.data.vehicleModel
  const vehicleClass = props.data.vehicleClass
  const numberOfPassengers = props.data.numberOfPassengers
  const planetName = props.data.planetName
  const planetTerrain = props.data.planetTerrain
  const planetClimate = props.data.planetClimate
  const planetPopulation = props.data.planetPopulation
  const residents = props.data.residents
  
  return (
    <div className='card' onClick={() => props.findCard(props)}>
      <div className='favoriteBar'/> 

      <div className='cardText'>
        <h2>{name}</h2>
        <h2>{homeworld}</h2>
        <h2>{species}</h2>
        <h2>{population}</h2>
        <h2>{vehicleName}</h2>      
        <h2>{vehicleModel}</h2>
        <h2>{vehicleClass}</h2>
        <h2>{numberOfPassengers}</h2>
        <h2>{planetName}</h2>
        <h2>{planetTerrain}</h2>      
        <h2>{planetClimate}</h2>
        <h2>{planetPopulation}</h2>
        <h2>{residents}</h2>
      </div>
    </div>
  )
}

export default Card