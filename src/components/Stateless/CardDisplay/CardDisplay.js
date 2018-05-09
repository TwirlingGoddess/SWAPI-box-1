import './CardDisplay.css'
import React from 'react'
import Card from '../Card/Card'


const CardDisplay = (props) => {
  console.log(props)
  const selectedData = props.selectedData.map((data) => 
    <Card 
      data={data}
      key= {Date.now()}
    />
  )

  return (
    <div className='cardCointainer'>
      {selectedData}
    </div>
  )
}

export default CardDisplay