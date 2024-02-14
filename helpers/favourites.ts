"use client";

import { isClient } from "./is-client";

export const getFavourites = (): number[] => {
  if (!isClient) {
    return [];
  }

  return JSON.parse(localStorage.getItem("favourites") || "[]");
};

export const updateFavourites = (id: number) => {
  if (!isClient) {
    return;
  }

  const favourites = getFavourites();
  const index = favourites.indexOf(id);

  if (index === -1) {
    favourites.push(id);
  } else {
    favourites.splice(index, 1);
  }

  localStorage.setItem("favourites", JSON.stringify(favourites));
};
