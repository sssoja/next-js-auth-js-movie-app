"use client";

import { useEffect, useRef, useState } from "react";
import { useSearch } from "../providers/SearchContextProvider";

const SearchBar = () => {
  const { searchQuery, updateSearchQuery } = useSearch();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    console.log("This is your search query:", searchQuery);
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleChange = (e: any) => {
    // Clear any existing timeout
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current!);
    }

    setInputValue(e.target.value);

    timeoutRef.current = setTimeout(() => {
      updateSearchQuery(e.target.value);
    }, 500);
  };

  return (
    <form
      id="search-bar"
      className="w-3/5 sm:w-2/5 flex flex-col sm:flex-row items-center"
    >
      <div className="flex w-full flex-row mb-3 sm:mb-0">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for movies"
          className="w-full px-2 py-1 rounded-md border border-neutral-400 text-slate-700 focus:outline-none"
        />
      </div>
    </form>
  );
};

export default SearchBar;
