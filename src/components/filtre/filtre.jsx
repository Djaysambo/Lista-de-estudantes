
import React from 'react';

const Filter = ({ searchTerm, onChange }) => {
  const filterNames = (event) => {
    onChange(event.target.value);
    console.log(filterNames)
  };

  return (
    <input
      type="text"
      placeholder="Pesquisar nomes..."
      value={searchTerm}
      onChange={filterNames}
      style={{
        padding: '8px',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        minWidth: '200px',
      }}
    />
  );
};

export default Filter;
