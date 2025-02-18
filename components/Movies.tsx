"use client";

import React from "react";

import { MovieCard } from "./MovieCard";
import { Button } from "@/components/ui/button";
import { useMovies } from "@/app/hooks/useMovies";
import { ClockLoader } from "react-spinners";

const Movies = () => {
  const { movies, loading, error, page, totalPages, nextPage, prevPage } =
    useMovies();

  if (loading)
    return (
      <div className="min-h-screen  flex justify-center items-center">
        <ClockLoader />
      </div>
    );
  if (error) return <p className="text-red-500">{error}</p>;
  if (!movies || movies.length === 0) {
    return <p className="text-gray-500">No movies found.</p>; // Handle empty state
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map(
          (movie) =>
            movie && (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            )
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <Button onClick={prevPage} disabled={page === 1}>
          Previous
        </Button>
        <span className="text-lg">
          Page {page} of {totalPages}
        </span>
        <Button onClick={nextPage} disabled={page === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Movies;
