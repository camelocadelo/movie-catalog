import React from 'react';
import Logo from 'components/Header/icons/logo.png';
import SearchBar from '../SearchBar';
import UserProfile from './components/UserProfile';
import SearchTermDisplay from './components/SearchTermDisplay';
import './Header.css'

const Header = ({ searchTerm = '', onSearchChange, resultsCount  }) => {
  return (
    <div className='header-container'>
      <div className="header">
        <img
          src={Logo}
          className="header-logo"
        />
        <SearchBar onSearchChange={onSearchChange} />
        <UserProfile />
      </div>
      <SearchTermDisplay searchTerm={searchTerm} resultsCount={resultsCount} />
     
    </div>
   
  );
};

export default Header;
