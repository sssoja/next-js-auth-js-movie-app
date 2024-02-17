"use client";

import MovieCard from "./MovieCard";
import { useSearchMovie } from "@/hooks/useSearchMovie";
import { useSearch } from "../providers/SearchContextProvider";
import { IMovie } from "./MovieDetails";

const SearchedMovies = () => {
  const { searchQuery } = useSearch();
  const { data, isLoading, isError } = useSearchMovie(searchQuery);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center my-3">
        <h1 className="text-2xl font-medium">Results for {searchQuery}</h1>
      </div>
      {data.results && data.results.length > 1 ? (
        <div className="grid grid-cols-1 sm:grid-cols-4 mt-4 gap-4">
          {data.results?.map((movie: IMovie) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-sm font-medium">No movies found... Search again</p>
      )}
    </div>
  );
};

export default SearchedMovies;
