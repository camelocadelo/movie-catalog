import React from 'react';
import MovieCard from 'components/MovieCard';
import './MovieGrid.css';

const MovieGrid = ({ movies, searchTerm }) => {
  if (movies.length === 0 && searchTerm && searchTerm.length > 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
