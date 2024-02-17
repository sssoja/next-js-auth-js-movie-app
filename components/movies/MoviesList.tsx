"use client";

import { useMovies } from "@/hooks/useMovies";
import MovieCard from "./MovieCard";
import { IMovie } from "./MovieDetails";
import { useSearch } from "../providers/SearchContextProvider";
import SearchedMovies from "./SearchedMovies";

const MoviesList = (page: any) => {
  const { data, isLoading, isError } = useMovies(page);
  const { searchQuery } = useSearch();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return searchQuery ? (
    <SearchedMovies />
  ) : (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-medium">Popular Movies</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 mt-4 gap-4">
        {data.results.map((movie: IMovie) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
