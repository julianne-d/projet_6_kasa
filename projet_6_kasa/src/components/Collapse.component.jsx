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
        <span>{isCollapsed ? 
          <svg className="collapse-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
          </svg> 
          : 
          <svg className="collapse-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
          </svg>
        }</span>
      </button>
      {!isCollapsed && (
      <p className='collapse-menu__text'>
        {text}
      </p>
      )}
    </div>
  );
}

/** PROPTYPES **/
Collapse.propTypes = {
  buttonName: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired,
};