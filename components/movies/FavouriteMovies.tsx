"use client";

import MovieCard from "./MovieCard";
import { IMovie } from "./MovieDetails";
import { UseQueryResult, useQuery } from "react-query";
import { fetchMovie } from "@/hooks/useMovieById";
import { getFavourites } from "@/helpers/favourites";

const FavouriteMovies = (page: any) => {
  const favourites = getFavourites();

  const isEmpty = !favourites.length;

  const getQueries = () => {
    if (isEmpty) {
      return;
    }
    return favourites?.map((id: number) =>
      useQuery(["movie", id], () => fetchMovie(id))
    );
  };

  const queries = getQueries();

  const movies = queries?.map((query: UseQueryResult<IMovie>) => query.data);

  if (isEmpty) {
    return (
      <p className="text-xl font-medium">
        Start adding your favourite movies...
      </p>
    );
  }

  return (
    movies && (
      <div className="flex flex-col">
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-medium">
            {" "}
            Favourite Movies {movies.length > 0 && `(${movies.length})`}
          </h1>
        </div>
        {movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-4 mt-4 gap-4">
            {movies.map((movie: IMovie | undefined) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    )
  );
};

export default FavouriteMovies;
