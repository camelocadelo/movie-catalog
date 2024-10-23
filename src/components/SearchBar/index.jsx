import React, { useState } from 'react';
import Search from 'components/SearchBar/icons/Search.png'
import './SearchBar.css';
import useDebounce from 'hooks/useDebounce';

const SearchBar = ({ onSearchChange }) => {

  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearch = useDebounce(searchTerm, 500); // Debouncing input with 500ms delay

  React.useEffect(() => {
    if (debouncedSearch) {
      onSearchChange(debouncedSearch);
    }
  }, [debouncedSearch, onSearchChange]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
     <span className='icon'>
      <img width={'16px'} height={'16px'} src={Search} /> 
     </span>
    </div>
  );
};

export default SearchBar;
