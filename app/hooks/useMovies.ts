"use client";

import { useState, useEffect } from "react";
import { fetchPopularMovies } from "@/lib/api";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}
export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const { movies, totalPages, currentPage } = await fetchPopularMovies(
          page
        );
        console.log(currentPage);
        setMovies(movies);
        setTotalPages(totalPages);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [page]); // Re-fetch movies when `page` changes

  const nextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return { movies, loading, error, page, totalPages, nextPage, prevPage };
};
