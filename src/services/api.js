// src/services/api.js
export const fetchMovies = async (
  searchTerm,
  page = 1
) => {
  const API_KEY = '8523cbb8'; // Your OMDb API key
  const API_URL = `https://www.omdbapi.com/?s=${searchTerm}&page=${page}&apikey=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.Response === 'True') {
      return {
        Search: data.Search, // The array of movies
        totalResults: parseInt(
          data.totalResults,
          10
        ), // The total number of results
      };
    } else {
      return { Search: [], totalResults: 0 }; // Return empty if no movies found
    }
  } catch (error) {
    console.error(
      'Error fetching movies:',
      error
    );
    return { Search: [], totalResults: 0 }; // Return empty in case of error
  }
};
