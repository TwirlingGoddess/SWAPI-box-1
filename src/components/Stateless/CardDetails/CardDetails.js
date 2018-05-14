import React from 'react';
import { Link } from 'react-router-dom';
import '../Card/Card.scss';
import PropTypes from 'prop-types';

const CardDetails = (selectedCard) => {
  return (
    <div>
      <div className='card'>
        <Link to={`/${selectedCard.id}`} className='back-btn'>◀ back</Link>
        <h1>{selectedCard.Name}</h1>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  selectedCard: PropTypes.obj
};
export default CardDetails;