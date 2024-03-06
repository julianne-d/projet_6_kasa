// StarRating.js
import React from 'react';
import PropTypes from 'prop-types';

export default function List({ items }){
    return (
        <ul className="list">
            {items.map((item, index) => (
                <li className="list__item" key={index}>{item}</li>
            ))}
        </ul>
    );
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
