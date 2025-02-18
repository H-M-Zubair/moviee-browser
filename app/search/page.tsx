"use client";

import { Suspense } from "react";
import SearchPageContent from "./SearchPageContent";

export default function SearchPage() {
  return (
    <main className="mx-4 sm:mx-6 md:mx-10 lg:mx-14 xl:mx-20">
      <Suspense
        fallback={<p className="text-gray-500">Loading search results...</p>}
      >
        <SearchPageContent />
      </Suspense>
    </main>
  );
}
