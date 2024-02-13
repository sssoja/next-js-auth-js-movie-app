import Link from "next/link";
import MovieCard, { MovieCardType } from "./MovieCard";

export default async function Movies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.api_key}&language=en-US`,
    { next: { revalidate: 3600 } } // Will revalidate every 1 hour
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary.
    throw new Error(`Failed to fetch the data`);
  }

  const data = await res.json();

  const movies = data.results;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-medium">Popular Movies</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 mt-4 gap-4">
        {movies.map((movie: MovieCardType) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
