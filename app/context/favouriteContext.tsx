"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  imageUrl: string;
}

// Context type definition
interface FavoritesContextType {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

// Create context
const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

// Provider component
export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to add a movie to favorites
  const addFavorite = (movie: Movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
      toast({
        title: "Added to Favorites",
        description: "Movie successfully saved to favorites.",
      });
    }
  };

  // Function to remove a movie from favorites
  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
    toast({
      title: "Removed from Favorites",
      description: "Movie successfully removed from favorites.",
      variant: "destructive",
    });
  };

  // Function to check if a movie is in favorites
  const isFavorite = (id: number) => favorites.some((movie) => movie.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// Custom hook to use the favorites context
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
