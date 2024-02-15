import Image from "next/image";
import Link from "next/link";
import React from "react";
import { no_image_url, image_url } from "@/config";
import { roundToDecimal } from "@/helpers/roundToDecimal";
import { IMovie } from "./Movie";
import FavouriteButton from "./FavouriteButton";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <div className="flex flex-col">
      <Link href={`/movie/${movie?.id}`}>
        <div className="w-full h-[400px] relative">
          <Image
            src={
              movie?.poster_path
                ? `${image_url}${movie?.poster_path}`
                : `${no_image_url}`
            }
            alt={movie?.title}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex gap-4 justify-between items-center mt-3">
        <h2 className="text-lg font-medium">{movie?.title}</h2>
        <div className="flex flex-row">
          <FavouriteButton id={movie.id} />
          <span className="p-2 ml-2 text-white rounded-md bg-indigo-700">
            {roundToDecimal(movie.vote_average, 1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
