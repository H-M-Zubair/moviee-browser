"use client";

import { Suspense } from "react";
import SearchPageContent from "./SearchPageContent";

export default function SearchPage() {
  return (
    <Suspense
      fallback={<p className="text-gray-500">Loading search results...</p>}
    >
      <SearchPageContent />
    </Suspense>
  );
}
