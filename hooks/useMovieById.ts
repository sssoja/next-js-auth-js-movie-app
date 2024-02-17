import { useQuery } from "react-query";
import { tmdb_api_base_url } from "@/config";

export const fetchMovie = async (id: number) => {
  const response = await fetch(
    `${tmdb_api_base_url}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  if (!response.ok) {
    throw new Error("Movie not found");
  }

  const data = await response.json();

  return data;
};

export function useMovieById(id: number) {
  return useQuery(["movie"], () => fetchMovie(id), {
    keepPreviousData: true, // Keep previous data while fetching new data
  });
}
