"use client";

import { useState, useEffect } from "react";
import { useSearch } from "../providers/SearchContextProvider";

const SearchBar = () => {
  const { searchQuery, updateSearchQuery } = useSearch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("This is your search query:", searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Query:", query);
    updateSearchQuery(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="search-bar"
      className="w-3/4 sm:w-2/5 flex items-center"
    >
      <div className="flex w-full">
        <input
          type="text"
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for movies"
          className="w-full px-2 py-1 rounded-md border border-neutral-400 focus:outline-none"
        />
      </div>
      <button className="outline-none border font-bold ml-4 px-12 py-2 rounded-lg">
        Search
      </button>{" "}
    </form>
  );
};

export default SearchBar;
