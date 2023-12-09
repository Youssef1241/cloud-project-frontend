import React from 'react';

function FilterOptions({ onFilterChange }) {
  return (
    <div>
      {/* Replace these placeholders with your actual filter fields */}
      <select onChange={(e) => onFilterChange('age', e.target.value)}>
        <option value="">Filter by Age</option>
        {/* Add age options */}
      </select>
      <select onChange={(e) => onFilterChange('location', e.target.value)}>
        <option value="">Filter by Location</option>
        {/* Add location options */}
      </select>
    </div>
  );
}

export default FilterOptions;
