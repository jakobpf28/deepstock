import React from 'react';

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <div className="dark-mode-toggle" id="dark-mode-toggle" onClick={onToggle}>
      <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
    </div>
  );
};

export default DarkModeToggle;