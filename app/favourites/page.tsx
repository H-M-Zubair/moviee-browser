"use client";

import { MovieCard } from "@/components/MovieCard";
import { useFavorites } from "../context/favouriteContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <main className="container mx-auto  min-h-screen p-4  sm:mx-6 md:mx-10 lg:mx-14 xl:mx-20">
      <h1 className="text-2xl font-bold">Your Favorite Movies ❤️</h1>

      {favorites.length === 0 ? (
        <p className="mt-20 flex justify-center flex-col gap-4 items-center text-gray-500">
          No favorites yet. Start adding some!
          <Link href="/">
            {" "}
            <Button>Go Back</Button>
          </Link>
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.releaseDate}
              imageUrl={movie.imageUrl}
            />
          ))}
        </div>
      )}
    </main>
  );
}
