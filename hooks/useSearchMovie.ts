import { useQuery } from "react-query";
import { base_url } from "@/config";

const fetchMovie = async (query: string) => {
  const response = await fetch(
    `${base_url}/search/movie?query=${query}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  const data = await response.json();

  return data;
};

export function useSearchMovie(query: string) {
  return useQuery(["movie"], () => fetchMovie(query), {
    keepPreviousData: true, // Keep previous data while fetching new data
  });
}