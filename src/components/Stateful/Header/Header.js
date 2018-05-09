import React, { Component } from 'react'
import './Header.css'
import Buttons from '../../Stateless/Buttons/Buttons'

class Header extends Component {

  // PropsType
  constructor (props) {
    super (props)
    console.log(props)
  }



  render() {
    return (
      <div className='Header'>
        <div className='logo'/>
        <Buttons 
          makeApiCall={this.props.makeApiCall}
          favoritesLength={this.props.favoritesLength}
        />
      </div>
    )
  }
}

export default Header