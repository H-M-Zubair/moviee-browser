"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "next/form";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NavbarSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Form action="/search" className="relative" onSubmit={handleSubmit}>
      <Input
        type="search"
        name="q"
        placeholder="Search Movie Title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full sm:w-64 pr-10"
      />
      <Button
        type="submit"
        size="icon"
        variant="ghost"
        className="absolute right-0 top-0 h-full"
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </Form>
  );
}
