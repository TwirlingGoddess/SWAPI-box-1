import './Buttons.css';
import React, { Component } from 'react';



const Buttons = (props) => {

  return (
    <div>
      <button className='people' onClick={() => props.makeApiCall('people')}>People</button>
      <button className='planets' onClick={() => props.makeApiCall('planets')}>Planets</button>
      <button className='vehicles' onClick={() => props.makeApiCall('vehicles')}>Vehicles</button>
      <button className='favorite' onClick={() => props.displayFavorites()}>Favorite:{props.favoritesLength}</button>
    </div>
  )
}


export default Buttons;