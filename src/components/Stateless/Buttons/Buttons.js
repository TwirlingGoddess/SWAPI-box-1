import './Buttons.css';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Buttons = ({apiCall, favoritesLength, displayFavorites}) => {

  return (
    <div>
      <button><NavLink to='/people' className='people nav' onClick={() => apiCall('people')}>People</NavLink></button>
      <button><NavLink to='/planets' className='planets nav' onClick={() => apiCall('planets')}>Planets</NavLink></button>
      <button><NavLink to='/vehicles' className='vehicles nav' onClick={() => apiCall('vehicles')}>Vehicles</NavLink></button>
      <button><NavLink to='/favorites' className='favorite nav' onClick={() => displayFavorites()}>Favorite:{favoritesLength}</NavLink></button>
    </div>
  );
};

Buttons.propTypes = {
  apiCall: PropTypes.func,
  favoritesLength: PropTypes.number,
  displayFavorites: PropTypes.func
};


export default Buttons;