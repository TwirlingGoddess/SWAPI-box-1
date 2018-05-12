import './Card.css'
import React from 'react'
import PropTypes from 'prop-types';

const Card = ({data, id, clicked, findCard}) => {
  const card = data
  const cardKeys = Object.keys(data)
  return (
    <div className={clicked ? 'favoriteCard' : 'card'  } onClick={() => findCard(data)}>
      <div className='favoriteBar'>
        <h2 className='name'>{'Name' + card.Name}</h2>
      </div> 
      <div className='cardText'> 
        {cardKeys.map((key,index) => {
          if (index > 1) {
            return <h2>{key}: {data[key]}</h2>
          }
        })}
        <div className='redidentsBox'>
          <h2 className='residents'>{card.Residents}</h2>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object,
  key: PropTypes.number,
  clicked: PropTypes.bool,
  findCard: PropTypes.func,
};


export default Card