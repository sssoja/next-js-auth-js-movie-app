"use client";

import { useMovies } from "@/hooks/useMovies";
import MovieCard from "./MovieCard";
import { IMovie } from "./MovieDetails";
import { useSearch } from "../providers/SearchContextProvider";
import SearchedMovies from "./SearchedMovies";
import { useState } from "react";
import { Icon } from "../PrimaryButton";

const MoviesList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useMovies({ page });
  const { searchQuery } = useSearch();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 1));
  };

  const hasMore = page < data.total_pages;

  return searchQuery ? (
    <SearchedMovies />
  ) : (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-medium">Popular Movies</h1>
          <div>
            {page !== 1 && (
              <button onClick={handlePrevPage}>
                <Icon name="ArrowLeftIcon" className="ml-0.5 mr-2 h-6 w-6" />
              </button>
            )}
            {hasMore && (
              <button onClick={handleNextPage}>
                <Icon name="ArrowRightIcon" className="ml-4 h-6 w-6" />
              </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 mt-4 gap-4">
          {data.results.map((movie: IMovie) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
