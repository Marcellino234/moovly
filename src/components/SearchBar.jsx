import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
        
    <div className="search-container">
      <div className="search-inner">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          placeholder="Cari film favorit..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar;