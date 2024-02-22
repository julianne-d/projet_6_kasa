import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Collapse({ buttonName, text }) {  
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='collapse-menu'>
      <button className='btn' onClick={toggleCollapse}>
        <span>{buttonName}</span>
        <span>{isCollapsed ? '▼' : '▲'}</span>
      </button>
      {!isCollapsed && (
        <div>
          <p>
            {text}
          </p>
        </div>
      )}
    </div>
  );
}

/** PROPTYPES **/
Collapse.propTypes = {
  buttonName: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired,
};