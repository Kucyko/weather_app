import React, { useState } from 'react';
import './dropdown.css'

function Dropdown({ onOptionChange }) {
  const options = [
    { label: 'Metric', value: 'metric' },
    { label: 'Imperial', value: 'nonmetric' },
  ];

  const [value, setValue] = useState('metric');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    onOptionChange(selectedValue);
  };

  return (
    <div>
      <label>
        <select className='dropdown' value={value} onChange={handleChange}>
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
