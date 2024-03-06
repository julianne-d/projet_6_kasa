import React from 'react';
import HousingCard from '../HousingCard/HousingCard.component';
import data from '../../housing.json'; 

export default function CardsContainer() {

  return (
    <div className='cards-container'>
      {data.map(house => (
        <HousingCard key={house.id} house={house} />
      ))}
    </div>
  )
}