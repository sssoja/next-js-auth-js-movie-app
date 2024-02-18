"use client";

import SearchBar from "./forms/SearchBar";
import Link from "next/link";
import { useSearch } from "./providers/SearchContextProvider";
import LoginButton from "./login/LoginButton";
import PrimaryButton from "./PrimaryButton";
import { useSession } from "next-auth/react";

const Header = () => {
  const { resetSearchQuery } = useSearch();
  const { data: session, status } = useSession();

  return (
    <header className="flex py-4 px-5 bg-indigo-800 justify-between items-center">
      <Link
        href="/"
        className="w-40 md:w-48 lg:w-56 xl:w-64 text-xl font-medium text-white"
        onClick={() => resetSearchQuery()}
      >
        Movie App
      </Link>
      <div className="w-full flex flex-col items-end  ml-3 sm:flex-row sm:items-center sm:justify-end sm:ml-0">
        {session && status === "authenticated" && (
          <Link href="/favourites">
            <PrimaryButton leftIcon="HeartIcon">Favourites</PrimaryButton>
          </Link>
        )}
        <SearchBar />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
