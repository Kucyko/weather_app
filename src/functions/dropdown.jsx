import React from 'react';
import './dropdown.css';

function Dropdown({ selectedOption, onOptionChange }) {
  const options = [
    { label: 'Metric', value: 'metric' },
    { label: 'Imperial', value: 'imperial' },
  ];

  const handleChange = (event) => {
    onOptionChange(event.target.value);
  };

  return (
    <div>
      <label>
        <select className="dropdown" value={selectedOption} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Dropdown;
