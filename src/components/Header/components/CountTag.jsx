import React from 'react'

const CountTag = ({ count }) => {

  const tagStyles = {
    padding: '5px 15px',
    borderRadius: '5px',
    color: "#FFFFFF",
    backgroundColor: '#6627FF'
  };

  return (
    <div style={tagStyles}>
      {count} results
    </div>
  );
};

export default CountTag;