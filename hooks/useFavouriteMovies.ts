import { useQuery } from "react-query";
import { tmdb_api_base_url } from "@/config";
import { getFavourites } from "@/helpers/favourites";

export const fetchMovie = async (id: number) => {
  const response = await fetch(
    `${tmdb_api_base_url}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  if (!response.ok) {
    throw new Error("No favourite movies found");
  }

  const data = await response.json();

  return data;
};

export function useFavouriteMovies() {
  const favourites = getFavourites();

  return useQuery(["favouriteMovies", favourites], async () => {
    // Fetch all movies concurrently
    const promises = favourites.map(id => fetchMovie(id));
    const result = await Promise.all(promises);
    return result;
  });
}
