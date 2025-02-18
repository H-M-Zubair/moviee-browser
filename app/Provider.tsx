import React from "react";
import NextTopLoader from "nextjs-toploader";
import { FavoritesProvider } from "./context/favouriteContext";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NextTopLoader showSpinner={true} color="#2299DD" />
      <FavoritesProvider>
        <Navbar />
        {children}
        <Footer />
      </FavoritesProvider>
      <Toaster />
    </div>
  );
};

export default Provider;
