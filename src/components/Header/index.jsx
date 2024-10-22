import React from 'react';
import Logo from './logo.png';
import SearchBar from '../SearchBar';
import UserProfile from './components/UserProfile';
import CountTag from './components/CountTag';
import './Header.css'

const Header = ({ searchTerm = '', onSearchChange, resultsCount  }) => {
  return (
    <div>
      <div className="header">
        <img
          style={{ width: '208px', height: '53px' }}
          src={Logo}
          className="header-logo"
        />
        <SearchBar onSearchChange={onSearchChange} />
        <UserProfile />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '12px' }}> You searched for: {searchTerm} </div> 
        <CountTag count={resultsCount} />
      </div>
    </div>
   
  );
};

export default Header;
