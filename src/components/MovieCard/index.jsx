import React from 'react';
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img 
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} 
        alt={movie.Title}
        className='movie-card-image'
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
};

export default MovieCard;