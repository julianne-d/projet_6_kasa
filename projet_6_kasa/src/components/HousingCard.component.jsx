import React from 'react';
import { Link } from 'react-router-dom';
export default function HousingCard({ house }) {

  return (
    <div className='housing-card' >
        <Link to={`/housing/${house.id}`}>
        <img src={house.cover} alt={house.title} />
        <h2>{house.title}</h2>
        <p>{house.description}</p>
      </Link>
    </div>
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