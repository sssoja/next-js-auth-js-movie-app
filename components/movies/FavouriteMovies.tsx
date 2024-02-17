"use client";

import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { IMovie } from "./MovieDetails";
import { UseQueryResult, useQuery } from "react-query";
import { fetchMovie } from "@/hooks/useMovieById";

const FavouriteMovies = (page: any) => {
  const items = localStorage.getItem("favourites")?.split(",");

  const favouritesArray = items?.map((item: string) =>
    parseInt(item.replace(/\[|\]/g, ""), 10)
  );

  const filtered = favouritesArray?.filter(item => isNaN(item));

  const isEmpty = filtered?.length ? true : false;

  const [ids, setIds] = useState(favouritesArray);

  useEffect(() => {
    setIds(ids);
  }, [items]);

  const getQueries = () => {
    if (isEmpty) {
      return;
    }
    return ids?.map((id: number) =>
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
