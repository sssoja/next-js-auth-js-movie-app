import React from "react";
import Image from "next/image";
import Link from "next/link";
import { tmdb_api_placeholder_image, tmdb_api_image_url } from "@/config";
import { roundToDecimal } from "@/helpers/roundToDecimal";
import { IMovie } from "./MovieDetails";
import FavouriteButton from "../FavouriteButton";
import { useSession } from "next-auth/react";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const { data: session, status } = useSession();

  return (
    movie && (
      <div className="flex flex-col">
        <Link href={`/movie/${movie.id}`}>
          <div className="w-full h-[400px] relative ease-in duration-300 hover:scale-105">
            <Image
              src={
                movie.poster_path
                  ? `${tmdb_api_image_url}${movie.poster_path}`
                  : `${tmdb_api_placeholder_image}`
              }
              alt={movie.title}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
        <div className="flex gap-4 justify-between mt-3">
          <h2 className="text-lg font-medium">{movie.title}</h2>
          <div className="flex items-start">
            {session && status === "authenticated" && (
              <FavouriteButton id={movie.id} />
            )}
            <span className="p-2 ml-2 rounded-md bg-indigo-700">
              {roundToDecimal(movie.vote_average, 1)}
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieCard;
