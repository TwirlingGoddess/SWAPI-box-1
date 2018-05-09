import './CardDisplay.css'
import React from 'react'
import Card from '../Card/Card'


const CardDisplay = (props) => {
  const selectedData = props.selectedData.map((data,index) => 
    <Card 
      data={data}
      key={index}
      findCard={props.findCard}
    />
  )

  return (
    <div className='cardCointainer'>
      {selectedData}
    </div>
  )
}

export default CardDisplay