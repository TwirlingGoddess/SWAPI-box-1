import './Buttons.css';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import PropTypes from 'prop-types';



const Buttons = (props) => {

  return (
    <div>
      <button><NavLink to='/people' className='people nav' onClick={() => props.makeApiCall('people')}>People</NavLink></button>
      <button><NavLink to='/planets' className='planets nav' onClick={() => props.makeApiCall('planets')}>Planets</NavLink></button>
      <button><NavLink to='/vehicles' className='vehicles nav' onClick={() => props.makeApiCall('vehicles')}>Vehicles</NavLink></button>
      <button><NavLink to='/favorites' className='favorite nav' onClick={() => props.displayFavorites()}>Favorite:{props.favoritesLength}</NavLink></button>
    </div>
  )
}

Buttons.propTypes = {
  makeApiCall: PropTypes.func.isRequiered,
  favoritesLength: PropTypes.number.isRequired,
  displayFavorites: PropTypes.func.isRequired
};


export default Buttons;