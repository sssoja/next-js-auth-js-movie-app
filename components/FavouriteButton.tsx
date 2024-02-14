"use client";

import { useEffect, useState } from "react";
import { getFavourites, updateFavourites } from "@/helpers/favourites";
import { HeartIcon } from "@heroicons/react/24/solid";

type Props = {
  id: number;
};

const FavouriteButton = ({ id }: Props) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const Icon = isFavourite ? (
    <HeartIcon className="h-6 w-6 fill-red-500 hover:fill-red-700 transition ease-in-out hover:scale-110"></HeartIcon>
  ) : (
    <HeartIcon className="h-6 w-6 fill-transparent stroke-2 stroke-red-500 hover:stroke-red-700 transition ease-in-out hover:scale-110"></HeartIcon>
  );

  const handleFavouriteClick = () => {
    updateFavourites(id);
    setIsFavourite(!isFavourite);
  };

  useEffect(() => {
    const favourites = getFavourites();
    setIsFavourite(favourites.includes(id));
  }, [id]);

  return (
    <button
      className="flex cursor-pointer items-center justify-center rounded-md p-1 "
      onClick={handleFavouriteClick}
    >
      {Icon}
    </button>
  );
};

export default FavouriteButton;
