import { useQuery } from "react-query";
import { base_url } from "@/config";

const fetchMovies = async (page: any) => {
  const response = await fetch(
    `${base_url}/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  const data = await response.json();

  return data;
};

export function useMovies(page: any) {
  return useQuery(["movies", page], () => fetchMovies(page), {
    keepPreviousData: true, // Keep previous data while fetching new data
  });
}
