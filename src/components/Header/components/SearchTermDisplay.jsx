import React from 'react';
import CountTag from './CountTag'; // Adjust the import path as necessary

const SearchTermDisplay = ({ searchTerm, resultsCount }) => {
  if (!searchTerm || searchTerm.length === 0) return null;

  return (
    <div style={searchTermStyles}>
      <div style={searchInfoStyles}>You searched for: {searchTerm}</div>
      <CountTag count={resultsCount} />
    </div>
  );
};

const searchTermStyles = {
  display: 'flex',
  alignItems: 'center'
}

const searchInfoStyles = {
  marginRight: '12px'

}

export default SearchTermDisplay;
