import FavouriteMovies from "@/components/movies/FavouriteMovies";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-16 py-8 sm:px-20">
      <FavouriteMovies />
    </main>
  );
}
