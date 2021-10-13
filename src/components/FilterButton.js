import React from 'react';

function FilterButton({ name, isPressed, setFilter }) {
  return (
    <button
      className={`toggle-btn ${isPressed ? 'active' : ''}`}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  );
}

export default FilterButton;
