import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

// import '../sass/components/_housingCard.component.scss';
export default function HousingCard({ house }) {
  return (
    <Link className='link' to={`/housing/${house.id}`}>
      <div className='housing-card'  
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${house.cover}) no-repeat center center / cover`,
        }}>
        <h2>{house.title}</h2>
    </div>
    </Link>
  )
}

/** PROPTYPES **/
HousingCard.propTypes = {
  house: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};