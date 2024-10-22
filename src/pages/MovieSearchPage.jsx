import React, { useState, useEffect, useCallback } from 'react';
import { fetchMovies } from '../services/api';
import useDebounce from '../hooks/useDebounce';
import Header from '../components/Header';
import MovieGrid from '../components/MovieGrid';
import Pagination from '../components/Pagination';

const MovieSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');   // Stores the input from the search bar
  const [movies, setMovies] = useState([]);           // Stores the list of movies from the API
  const [totalResults, setTotalResults] = useState(0); // Stores total movie results count
  const [page, setPage] = useState(1);                // Stores the current page for pagination

  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounced search term

  // Function to fetch movie data from the API
  const fetchMovieData = useCallback(async () => {
    if (debouncedSearchTerm) {
      const result = await fetchMovies(debouncedSearchTerm, page); // Fetch movies based on search term and page
      setMovies(result.Search || []);    // Set the movie list
      setTotalResults(result.totalResults || 0);  // Set the total number of results
    }
  }, [debouncedSearchTerm, page]);

  // Fetch data whenever debounced search term or page changes
  useEffect(() => {
    fetchMovieData();
  }, [debouncedSearchTerm, page, fetchMovieData]);

  return (
    <div style={{ padding: '40px 180px' }}>
      {/* Pass down search term, total results, and the handler to set the search term */}
      <Header 
        searchTerm={debouncedSearchTerm} 
        resultsCount={totalResults} 
        onSearchChange={setSearchTerm} 
      />
      {/* Pass the list of movies to the MovieGrid */}
      <MovieGrid movies={movies} />
      {/* Pass pagination props: current page, total results, and handler to change the page */}
      <Pagination 
        currentPage={page} 
        onPageChange={setPage} 
        totalItems={totalResults}
        itemsPerPage={10}
      />
    </ div>
  );
};

export default MovieSearchPage;