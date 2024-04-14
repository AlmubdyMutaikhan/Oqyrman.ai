import React, { useState } from 'react';
import './Search.scss'; // Make sure to create this CSS file

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="Іздеу..."
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value); handleSearch(e); }}
      />
      <button className="search-button" onClick={handleSearch}>
        🔍 
      </button>
    </div>
  );
};

export default SearchBar;
