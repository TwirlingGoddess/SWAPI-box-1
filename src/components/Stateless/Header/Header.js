import React from 'react'
import './Header.css'
import Buttons from '../Buttons/Buttons'
import { NavLink, Route } from 'react-router-dom'
import PropTypes from 'prop-types';



const Header = (props) => {
  return (
    <div className='Header'>
      <div className='logo'> <NavLink to='/'/></div>
      <Buttons makeApiCall={props.makeApiCall}
        favoritesLength={props.favoritesLength}
        displayFavorites={props.displayFavorites}
      />
    </div>
  )
}

// Header.propTypes = {
//   makeApiCall: PropTypes.func.isRequiered,
//   favoritesLength: PropTypes.number.isRequired,
//   displayFavorites: PropTypes.func.isRequired
// }

export default Header