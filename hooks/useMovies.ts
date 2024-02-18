import { useQuery } from "react-query";
import { tmdb_api_base_url } from "@/config";

const fetchMovies = async (page: any) => {
  const response = await fetch(
    `${tmdb_api_base_url}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page.page}`
  );

  if (!response.ok) {
    throw new Error("No movies found...");
  }

  const data = await response.json();

  console.log(data);

  return data;
};

export function useMovies(page: any) {
  return useQuery(["movies", page], () => fetchMovies(page), {
    keepPreviousData: true, // Keep previous data while fetching new data
  });
}
