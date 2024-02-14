"use client";

import { createContext, useContext, useState } from "react";

interface SearchContext {
  searchQuery: string;
  updateSearchQuery: any;
  resetSearchQuery: any;
}

const SearchContext = createContext<SearchContext>({
  searchQuery: "",
  updateSearchQuery: undefined,
  resetSearchQuery: undefined,
});

export const SearchProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [searchQuery, setSearchQuery] = useState("");

  const updateSearchQuery = (query: any) => {
    console.log("Updating search query:", query);
    setSearchQuery(query);
  };

  const resetSearchQuery = () => {
    setSearchQuery("");
  };

  return (
    <SearchContext.Provider
      value={{ searchQuery, updateSearchQuery, resetSearchQuery }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
