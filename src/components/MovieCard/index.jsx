import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={cardStyles}>
      <img 
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} 
        alt={movie.Title} 
        style={imageStyles}
      />
      <div>
        <p> Name: {movie.Title} </p>
        <p> Year: {movie.Year} </p>
        <p> imdbId: {movie.imdbID} </p>
        <p> Type: {movie.Type} </p>
      </div>
  
    </div>
  );
};

// Some basic styling for the movie card
const cardStyles = {
  width: '245px'
  // border: '1px solid #ddd',
  // padding: '1rem',
  // textAlign: 'center',
};

const imageStyles = {
  width: '100%',
  height: '275px',
  borderRadius: '10px',
  border: '1px solid #6627FF',
  marginBottom: '25px'
};

export default MovieCard;