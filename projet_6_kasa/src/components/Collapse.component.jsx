import React, { useState } from 'react';

export default function Collapse({ buttonName, text }) {  
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button onClick={toggleCollapse}>
        {buttonName}
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