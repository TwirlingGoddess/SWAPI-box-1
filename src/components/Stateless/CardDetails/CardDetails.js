import React from 'react';
import { Link } from 'react-router-dom';
import '../Card/Card.scss';
import PropTypes from 'prop-types';

const CardDetails = (selectedCard) => {
  return (
    <div>
      <div className='selected card'>
        <Link to={`/${selectedCard.id}`} 
          className='favorite'>Selected Card</Link>
        <h1>{selectedCard.Name}</h1>
        <div className='pic'/>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  selectedCard: PropTypes.obj
};
export default CardDetails;