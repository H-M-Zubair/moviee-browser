import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MovieProps {
  movie: {
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    vote_average: number;
  };
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className="container mx-auto p-4">
      <Button asChild variant="outline">
        <Link href="/">Back to Home</Link>
      </Button>
      <div className="flex flex-col md:flex-row mt-4">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={750}
          className="rounded-lg"
        />
        <div className="ml-6">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-gray-500">{movie.release_date}</p>
          <p className="mt-4">{movie.overview}</p>
          <p className="mt-2 font-semibold">Rating: {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
