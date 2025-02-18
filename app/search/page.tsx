"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchMovies } from "@/lib/api";
import { MovieCard } from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { ClockLoader } from "react-spinners";
import Link from "next/link";
import { Movie } from "../hooks/useMovies";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const { movies, totalPages } = await searchMovies(query, page);
        setMovies(movies);
        setTotalPages(totalPages);
      } catch {
        setError("Failed to fetch search results.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, page]);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">
        Search Results for:{" "}
        <span className="text-blue-500"> &quot; {query} &quot; </span>
      </h1>
      <Link href="/">
        {" "}
        <Button>Go Back</Button>
      </Link>

      {loading ? (
        <div className=" min-h-screen flex justify-center items-center ">
          {" "}
          <ClockLoader />{" "}
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : movies.length === 0 ? (
        <p className="mt-4 text-gray-500">No results found.</p>
      ) : (
        <div>
          {/* Movie Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mt-6">
              <Button
                onClick={() => setPage((prev) => prev - 1)}
                disabled={page === 1}
              >
                Previous
              </Button>
              <span className="text-lg">
                Page {page} of {totalPages}
              </span>
              <Button
                onClick={() => setPage((prev) => prev + 1)}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
