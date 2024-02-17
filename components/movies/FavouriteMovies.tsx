"use client";

import MovieCard from "./MovieCard";
import { IMovie } from "./MovieDetails";
import { UseQueryResult, useQuery } from "react-query";
import { fetchMovie } from "@/hooks/useMovieById";

const FavouriteMovies = (page: any) => {
  const items = localStorage.getItem("favourites")?.split(",");

  const noFavourites = !localStorage.getItem("favourites");

  const outputArray = items?.map(item =>
    parseInt(item.replace(/\[|\]/g, ""), 10)
  );

  const queries = outputArray?.map((id: number) =>
    useQuery(["movie", id], () => fetchMovie(id))
  );

  const movies = queries?.map((query: UseQueryResult<IMovie>) => query.data);

  if (noFavourites) {
    return (
      <p className="text-sm font-medium">
        Start adding your favourite movies...
      </p>
    );
  }

  return (
    movies && (
      <div className="flex flex-col">
        <div className="flex justify-between items-center my-3">
          <h1 className="text-2xl font-medium">
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
