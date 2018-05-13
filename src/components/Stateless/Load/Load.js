import React from 'react'
import '../Load/Load.css'
import { Player } from 'video-react';
import video from '../../../assets/source.gif'

const Load = () => {


  return (
    <div className='background'>
      <div className='videoBox'>
        <h2>Loading...</h2> 
      </div>
    </div>
  )
}

export default Load