import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Fetch popular movies
export const fetchPopularMovies = async (page = 1) => {
  try {
    const { data } = await api.get("/movie/popular", { params: { page } });
    return {
      movies: data.results,
      totalPages: data.total_pages, // Total available pages
      currentPage: data.page,
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { movies: [], totalPages: 1, currentPage: 1 };
  }
};

// Fetch movie details
export const fetchMovieDetails = async (id: string) => {
  try {
    const { data } = await api.get(`/movie/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching movie details for ID ${id}:`, error);
    return null;
  }
};

// Fetch searched movies
export const searchMovies = async (query: string, page = 1) => {
  try {
    const { data } = await api.get("/search/movie", {
      params: { query, page },
    });

    return {
      movies: data.results,
      totalPages: data.total_pages,
      currentPage: data.page,
    };
  } catch (error) {
    console.error("Error searching movies:", error);
    return { movies: [], totalPages: 1, currentPage: 1 };
  }
};
