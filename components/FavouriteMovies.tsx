"use client";

import { useMovies } from "@/hooks/useMovies";
import MovieCard from "./MovieCard";
import { IMovie } from "./MovieDetails";
import { UseQueryResult, useQuery } from "react-query";
import { fetchMovie } from "@/hooks/useMovieById";

const FavouriteMovies = (page: any) => {
  const items = localStorage.getItem("favourites")?.split(",");

  const outputArray = items?.map(item =>
    parseInt(item.replace(/\[|\]/g, ""), 10)
  );

  const queries = outputArray?.map((id: number) =>
    useQuery(["movie", id], () => fetchMovie(id))
  );

  const movies = queries?.map((movie: UseQueryResult<IMovie>) => movie.data);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-medium">
          Favourite Movies{" "}
          {outputArray && outputArray.length > 0 && `(${outputArray.length})`}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 mt-4 gap-4">
        {movies &&
          movies.length > 0 &&
          movies.map((movie: any) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default FavouriteMovies;
