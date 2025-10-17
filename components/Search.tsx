"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Fuse from "fuse.js";
import Link from "next/link";

interface SearchResult {
  title: string;
  description?: string;
  url: string;
  content?: string;
}

interface SearchProps {
  docs: SearchResult[];
}

export function SearchComponent({ docs }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const fuse = useMemo(() => {
    return new Fuse(docs, {
      keys: ["title", "description", "content"],
      threshold: 0.3,
      includeScore: true,
    });
  }, [docs]);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = fuse.search(query);
      setResults(searchResults.map(result => result.item));
    } else {
      setResults([]);
    }
  }, [query, fuse]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        onClick={() => setIsOpen(true)}
        className="relative h-9 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Search docs...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)}>
      <div className="fixed left-1/2 top-20 w-full max-w-lg -translate-x-1/2" onClick={(e) => e.stopPropagation()}>
        <Card className="border shadow-lg">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              autoFocus
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="max-h-96 overflow-auto">
            {query.trim() && results.length === 0 && (
              <div className="p-6 text-center text-sm text-muted-foreground">
                No results found for &quot;{query}&quot;
              </div>
            )}
            {results.map((result, index) => (
              <Link
                key={index}
                href={result.url}
                className="block border-b px-4 py-3 hover:bg-muted/50"
                onClick={() => setIsOpen(false)}
              >
                <div className="font-medium">{result.title}</div>
                {result.description && (
                  <div className="text-sm text-muted-foreground">{result.description}</div>
                )}
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
