import React from 'react'
import './Header.css'
import Buttons from '../Buttons/Buttons'
import { NavLink, Route } from 'react-router-dom'
import PropTypes from 'prop-types';



const Header = ({apiCall,favoritesLength,displayFavorites}) => {
  return (
    <div className='Header'>
      <div className='logo'> <NavLink to='/'/></div>
      <Buttons apiCall={apiCall}
        favoritesLength={favoritesLength}
        displayFavorites={displayFavorites}
      />
    </div>
  )
}

Header.propTypes = {
  apiCall: PropTypes.func,
  favoritesLength: PropTypes.number,
  displayFavorites: PropTypes.func
}

export default Header