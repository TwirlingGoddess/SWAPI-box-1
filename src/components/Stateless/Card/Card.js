import './Card.css'
import React from 'react'
import PropTypes from 'prop-types';



const Card = ({data, id, clicked, findCard}) => {
  const card = data
  return (
    <div className={clicked ? 'favoriteCard' : 'card'  } onClick={() => findCard(data)}>
      <div className='favoriteBar'>
        <h2 className='name'>{'Name' + card.Name}</h2>
      </div> 
      <div className='cardText'> 
        <h2>{card.Homeworld}</h2>
        <h2>{card.Specie}</h2>
        <h2>{card.Population}</h2>
        <h2>{card.Model}</h2>
        <h2>{card.Class}</h2>
        <h2>{card.Passengers}</h2>
        <h2>{card.Terrain}</h2>      
        <h2>{card.Climate}</h2>
        <h2>{card.Population}</h2>
        <div className='redidentsBox'>
          <h2 className='residents'>{card.Residents}</h2>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  key: PropTypes.number,
  clicked: PropTypes.bool,
  findCard: PropTypes.func.isRequired,
};


export default Card