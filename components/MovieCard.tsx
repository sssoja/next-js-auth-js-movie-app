import Image from "next/image";
import Link from "next/link";
import React from "react";
import { no_image_url, image_url } from "@/config";
import { roundToDecimal } from "@/helpers/roundToDecimal";

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const rating = roundToDecimal(movie.vote_average, 1);

  return (
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
        />
      </div>
      <div className="flex gap-4 justify-between items-center mt-3">
        <h2 className="text-lg font-medium">{movie?.title}</h2>
        <span className="flex flex-col p-2 text-white rounded-md bg-indigo-700">
          {rating}
        </span>
      </div>
    </Link>
  );
};

export default MovieCard;
