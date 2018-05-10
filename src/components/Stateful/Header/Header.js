import React, { Component } from 'react'
import './Header.css'
import Buttons from '../../Stateless/Buttons/Buttons'
import { NavLink, Route } from 'react-router-dom'
import PropTypes from 'prop-types';



class Header extends Component {
  constructor (props) {
    super (props)
    console.log(props)
  }

  render() {
    return (
      <div className='Header'>
        <div className='logo'> <NavLink to='/'/></div>
        <Buttons makeApiCall={this.props.makeApiCall}
          favoritesLength={this.props.favoritesLength}
          displayFavorites={this.props.displayFavorites}
        />
      </div>
    )
  }
}

Header.propTypes = {
  makeApiCall: PropTypes.func.isRequiered,
  favoritesLength: PropTypes.number.isRequired,
  displayFavorites: PropTypes.func.isRequired
}

export default Header