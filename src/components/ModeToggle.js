import React from 'react';

const ModeToggle = ({ toggleMode, isDarkMode }) => {
  return (
    <div className="mode-toggle">
      <button onClick={toggleMode} className="toggle-btn">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ModeToggle;
