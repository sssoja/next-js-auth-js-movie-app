import { useQuery } from "react-query";
import { base_url } from "@/config";

const fetchMovie = async (id: number) => {
  const response = await fetch(
    `${base_url}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  const data = await response.json();

  return data;
};

export function useMovie(id: number) {
  return useQuery(["movie"], () => fetchMovie(id), {
    keepPreviousData: true, // Keep previous data while fetching new data
  });
}
