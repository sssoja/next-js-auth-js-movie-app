"use client";

import SearchBar from "./forms/SearchBar";
import Link from "next/link";
import { useSearch } from "./providers/SearchContextProvider";

const Header = () => {
  const { resetSearchQuery } = useSearch();

  return (
    <header className="flex py-4 px-5 bg-indigo-800 justify-between items-center">
      <Link
        href="/"
        className="text-xl font-medium text-white"
        onClick={() => resetSearchQuery()}
      >
        Movie App
      </Link>
      <div className="flex items-center gap-8"></div>
      <SearchBar />
    </header>
  );
};

export default Header;
