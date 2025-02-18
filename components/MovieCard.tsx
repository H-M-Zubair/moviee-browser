"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/app/context/favouriteContext";
// Import Favorites Context

interface MovieProps {
  id: number;
  title: string;
  releaseDate: string;
  imageUrl: string;
}

export const MovieCard = ({ id, title, releaseDate, imageUrl }: MovieProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 p-2">
      <Link href={`/movie/${id}`}>
        <Image
          src={imageUrl || "/movie-placeholder.jpg"}
          alt={title}
          width={500}
          height={750}
          className="rounded-lg w-full"
        />
      </Link>
      <CardContent className="p-3">
        <h3 className="mt-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{releaseDate}</p>

        {/* Favorite Button */}
        <Button
          onClick={() =>
            isFavorite(id)
              ? removeFavorite(id)
              : addFavorite({ id, title, releaseDate, imageUrl })
          }
          className="mt-3 w-full"
        >
          {isFavorite(id) ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </CardContent>
    </Card>
  );
};
