import './CardDisplay.css';
import React from 'react';
import Card from '../Card/Card';


const CardDisplay = (props) => {
  let clicked;
  const selectedData = props.selectedData.map((data, index) => {
    const findFavorites = props.favorites.map(favCard => favCard.id);
    if (findFavorites.includes(data.id)) {
      clicked = true;
    } else {
      clicked = false;
    }
    return (
      <Card 
        data={data}
        key={index}
        id={data.keyList + index}
        clicked={clicked}
        findCard={props.findCard}
      />
    );
  });

  return (
    <div className='cardCointainer'>
      {selectedData}
    </div>
  );
};

export default CardDisplay;