import './Buttons.css';
import React, { Component } from 'react';



class Buttons extends Component {
  constructor (props) {
    super(props)
  }

  makeAPIcall = (category) => {
    this.props.makeApiCall(category)
  }

  render () {
  return (
    <div>
      <button className='people' onClick={() => this.makeAPIcall('people')}>People</button>
      <button className='planets' onClick={() => this.makeAPIcall('planets')}>Planets</button>
      <button className='vehicles' onClick={() => this.makeAPIcall('vehicles')}>Vehicles</button>
      <button className='favorite' onClick={() => this.props.displayFavorites()}>Favorite:{this.props.favoritesLength}</button>
    </div>
  )
}
}

export default Buttons;