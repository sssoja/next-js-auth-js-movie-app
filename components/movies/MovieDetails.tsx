"use client";

import { Params } from "@/app/movie/[id]/page";
import { tmdb_api_placeholder_image, tmdb_api_image_url } from "@/config";
import { formatGenres, formatRunTime } from "@/helpers/formatter";
import { roundToDecimal } from "@/helpers/roundToDecimal";
import { useMovieById } from "@/hooks/useMovieById";
import { useSession } from "next-auth/react";
import Image from "next/image";
import FavouriteButton from "../FavouriteButton";
import { useSearch } from "../providers/SearchContextProvider";
import SearchedMovies from "./SearchedMovies";

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const MovieDetails = ({ params }: Params) => {
  const { id } = params;

  const { data, isLoading, isError } = useMovieById(id);

  const { data: session, status } = useSession();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  const movie = data;
  const rating = roundToDecimal(movie.vote_average, 1);
  const duration = formatRunTime(movie.runtime);
  const genres = formatGenres(movie.genres);

  const { searchQuery } = useSearch();

  return searchQuery ? (
    <SearchedMovies />
  ) : (
    movie && (
      <div className="w-[1000px] max-w-full px-4 mx-auto">
        <div className="flex flex-col sm:mt-6">
          <div className="flex flex-col sm:flex-row sm:gap-7">
            <div className="flex relative mb-4 sm:mb-0">
              <div className="w-[270px] h-[400px] relative">
                <Image
                  src={
                    movie.poster_path
                      ? `${tmdb_api_image_url}${movie.poster_path}`
                      : `${tmdb_api_placeholder_image}`
                  }
                  alt={movie.title}
                  fill={true}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <h2 className="text-xl font-medium">{movie.title}</h2>
                <span className="flex flex-col p-2 text-white rounded-md bg-indigo-700">
                  {rating}
                </span>
                {session && status === "authenticated" && (
                  <FavouriteButton id={movie.id} />
                )}
              </div>
              <div className="flex gap-4 items-center mt-5">
                <h5 className="text-md font-medium">{movie.release_date}</h5>
                <h5> | </h5>
                {movie.runtime > 0 && (
                  <>
                    <h5 className="text-md font-medium">{duration}</h5>
                    <h5> | </h5>
                  </>
                )}
                <h5 className="text-md font-medium">{genres}</h5>
              </div>
              <div className="flex flex-col my-5">
                <p className="text-md font-normal">{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieDetails;
