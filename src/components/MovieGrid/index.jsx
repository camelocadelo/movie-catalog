import React from 'react';
import MovieCard from '../MovieCard'

const MovieGrid = ({ movies }) => {
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div style={gridStyles}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns
  gap: '1rem', // Spacing between movie cards
  padding: '2rem 0',
};

export default MovieGrid;