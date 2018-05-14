import './CardDisplay.css';
import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import CardDetails from '../CardDetails/CardDetails';

const CardDisplay = ({selectedData, findCard, favorites}) => {
  let clicked;
  const displayCards = selectedData.map((data, index) => {
    const findFavorites = favorites.map(favCard => favCard.id);
    if (findFavorites.includes(data.id)) {
      clicked = true;
    } else {
      clicked = false;
    }
    return (
      <Link to={`/starwars/${data.keyList + index}`} key={index}>
        <Card 
          data={data}
          key={index}
          id={data.keyList + index}
          clicked={clicked}
          findCard={findCard}
        />
      </Link>
    );
  });

  return (
    <div className='cardCointainer'>
      <Route path='/starwars/:id' render={({match}) => {
        const { id } = match.params;
        const selectedCard = selectedData.find(card => card.id === id);      
        return (
          <CardDetails {...selectedCard} />
        );
      }} />
      {displayCards}
    </div>
  );
};

CardDisplay.propTypes = {
  selectedData: PropTypes.array,
  findCard: PropTypes.func,
  favorites: PropTypes.array
};

export default CardDisplay;