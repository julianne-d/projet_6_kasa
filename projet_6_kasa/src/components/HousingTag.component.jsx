import React from 'react'
import PropTypes from 'prop-types'; 


export default function HousingTag({ tags }) { 
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <button key={index} className="btn tag">{tag}</button>
            ))}
        </div>
    );
}

HousingTag.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

