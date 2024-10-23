import React, { useState, useEffect, useCallback } from 'react';
import { fetchMovies } from '../services/api';
import useDebounce from '../hooks/useDebounce';
import Header from 'components/Header';
import MovieGrid from 'components/MovieGrid';
import CustomPagination from 'components/Pagination';
import Loader from 'components/Loader';
import './MovieSearchPage.css';

const MovieSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 10;

  useEffect(() => {
    setTotalPages(Math.ceil(totalResults / itemsPerPage));
  }, [totalResults]);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchMovieData = useCallback(async () => {
    if (debouncedSearchTerm) {
      setLoading(true); // Start loading
      try {
        const result = await fetchMovies(debouncedSearchTerm, page);
        setMovies(result.Search || []);
        setTotalResults(result.totalResults || 0);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false); // Always stop loading
      }
    }
  }, [debouncedSearchTerm, page]);

  useEffect(() => {
    fetchMovieData();
  }, [debouncedSearchTerm, page, fetchMovieData]);

  return (
    <div className="movie-search-page">
      <div className="container">
        <Header 
          searchTerm={debouncedSearchTerm} 
          resultsCount={totalResults} 
          onSearchChange={setSearchTerm} 
        />
        
        {loading ? (
          <Loader /> // Show loader while loading
        ) : (
          <MovieGrid 
            searchTerm={searchTerm} 
            movies={movies} 
          />
        )}
        
        {movies.length > 0 && !loading && (
          <CustomPagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default MovieSearchPage;
