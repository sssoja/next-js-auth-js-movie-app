"use client";

import MovieCard from "./MovieCard";
import { IMovie } from "./MovieDetails";
import { useFavouriteMovies } from "@/hooks/useFavouriteMovies";
import { getFavourites } from "@/helpers/favourites";
import SearchedMovies from "./SearchedMovies";
import { useSearch } from "../providers/SearchContextProvider";

const FavouriteMovies = () => {
  const favourites = getFavourites();

  const isEmpty = !favourites.length;

  const { data: movies, isLoading, isError } = useFavouriteMovies();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching favourite movies</p>;
  }

  if (isEmpty) {
    return (
      <p className="text-xl font-medium">
        Start adding your favourite movies...
      </p>
    );
  }

  const { searchQuery } = useSearch();

  return searchQuery ? (
    <SearchedMovies />
  ) : (
    movies && (
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-medium">
            {" "}
            Favourite Movies {movies.length > 0 && `(${movies.length})`}
          </h1>
        </div>
        {movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-4 mt-4 gap-4">
            {movies.map((movie: IMovie) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    )
  );
};

export default FavouriteMovies;

{
}
